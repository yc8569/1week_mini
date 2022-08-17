// import axios from "axios";
// import { getCookie } from "../shared/Cookie";
// // Axios Instance를 생성:: 인스턴스를 이용하면 코드 중복을 최소화 할 수 있다.
// const api = axios.create({
//   baseURL: "http://3.35.131.44",
  
// });
// //1. ?? 아래 이것만 있을 때 왜 안 되는지 이유 찾아내기
// // headers: {
// //   authorization: `${getCookie("token")}`,
// // },
// //

// //1. ?? 아래 왜 꼭 interceptors가 필요한지.
// //2. ??!! 일단
// api.interceptors.request.use(
//   (config) => {
//     const token = getCookie("token");
//     config.headers.Authorization = token;
//     return config;
//   },
//   (error) => {
//     // console.log(error);
//   }
// );
// // ,
// // function (error) {
// //     // 요청 에러 직전 호출됩니다.
// //     return Promise.reject(error);
// // }  // 1. ??!! 이런 방식으로 에러도 잡을 수 있다던데 시간 남으면 테스트 할 것.
// // );
// // Instance를 생성하고, 여러개의 요청 함수들을 하나의 객체에 넣어서 관리하는 방법도 있습니다!
// const apis = {
//   //user
//   addUser: (newUser) => api.post("/user/register", newUser),
//   postLogin: (userdata) => api.post("/user/login", userdata),
//   //post
//   addPost: (contents) => api.post("/api/board/write", contents),
//   editPost: (id, contents) => api.post(`/posts/${id}`, contents),
//   delPost: (id) => api.delete(`/api/board/${id}`),
//   getPosts: () => api.get("/api/boards"),
//   getDetail: (id) => api.get(`/api/detail/${id}`),

//   //comment
//   addComment: (id, comment) =>
//     api.post(`/api/board/${id}/comment/write`, comment),
//   editComment: (id, commentId, comments) =>
//     api.post(`/api/board/${id}/comment/${commentId}`, comments),
//   delComment: (id, commentId) =>
//     api.delete(`/api/board/${id}/comment/${commentId}`),
//   getComments: (id) => api.get(`/api/board/${id}/comments`),

//   //heart
//   addheart: (id) => api.post(`/api/board/${id}/like`),
// };

// export default apis;


import axios from 'axios';
import { getCookie } from '../shared/Cookie';

const api = axios.create({
  baseURL: 'http://3.35.131.44',
});

api.interceptors.request.use(
  (config) => {
    const accessToken = getCookie('accessToken');
    // const refreshToken = getCookie('refreshToken');
    config.headers['Authorization'] = `Bearer ${accessToken}`;
    // config.headers['Refresh-token'] = refreshToken;
    // config.headers['Access-Token-Expire-Time'] = 1234263763542;
    return config;
  },
  (error) => {
    console.log(error);
  }
);

const apis = {
  //user
  addUser: (userData) => api.post('/user/register', userData),
  loginUser: (userData) => api.post("/user/login", userData),
  logoutUser: (userData) => api.post('/api/auth/users/logout', userData),
  getMypage: (userData) => api.get('/api/mypage', userData),

  //post
  getPosts: () => api.get('/api/posts'),
  getGenrePosts: () => api.get('/api/posts?genre=:genre'),
  addPost: (contents) => api.post('/api/posts', contents),
  editPost: (postId, contents) => api.post(`/posts/${postId}`, contents),
  delPost: (postId) => api.delete(`/api/posts/${postId}`),
  getDetail: (postId) => api.get(`/api/posts/${postId}`),

  //comment
  addComment: (postId, comment) => api.post(`/api/comments/${postId}`, comment),
  editComment: (postId, commentId, comments) =>
    api.post(`/api/comments/${postId}/comment/${commentId}`, comments),
  delComment: (id, commentId) =>
    api.delete(`/api/board/${id}/comment/${commentId}`),
  getComments: (id) => api.get(`/api/board/${id}/comments`),

  //heart
  addheart: (postId) => api.post(`/api/likes/${postId}`),
};

export default apis;
