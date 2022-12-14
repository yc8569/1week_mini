// Action value
const ADD_POST = "ADD_POST";

// Action Creator

export const addPost = (payload) => {
  console.log("됨")
  return {
    type: ADD_POST,
    payload,
  };
};


// initial state
const initialState ={
postList:[
{
  createdAt: null,
  postId:1,
  username : "작성자",
  contents: "어려워",
  file: "",
  imgurl:[],
},
{
  createdAt: null,
    postId:1,
    username : "작성자2",
    contents: "제발",
    file: "",
    imgurl:[],
},
{
  createdAt: null,
  postId:2,
  username : "작성자",
  contents: "두번째게시물",
  file: "",
  imgurl:[],
},
],
post:{
  createdAt: null,
  postId:0,
  username : "",
  contents: "",
  file: "",
  imgurl:[],
},
 
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      console.log("호출")
      return { 
        
        ...state,
        postList:[...state.postList, action.payload],
       
      };
      
   
    default:
      return state;
  }
};

export default posts;