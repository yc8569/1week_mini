import axios from "axios";

const DOMAIN = "http://localhost:3000";
// const headers = {"Content-type": "application/json"}
axios.defaults.withCredentials = true; // 쿠키 데이터를 전송받기 위해
// export const request = (method, url, data) => {
//   console.log(method, url, data)
//   return axios({
//     method,
//     url: DOMAIN + url,
//     headers,
//     data,
//   })
//     .then((res) => res.data)
//     .catch((err) => console.log(err));
// };

export const request = (method, url, data) => {
  console.log(data)
  return axios
    .method(DOMAIN + url, {
      data
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
  
      return response.data;
    });
};

// export default function setAuthorizationToken(token) {
//   if (token) {
//     axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   } else {
//     delete axios.defaults.headers.common["Authorization"];
//   }
// }