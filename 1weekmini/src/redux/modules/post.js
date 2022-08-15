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
  postid:1,
  username : "작성자",
  contents: "어려워",
  file: "",
  imgurl:[],
},
{
  createdAt: null,
    postid:2,
    username : "작성자2",
    contents: "제발",
    file: "",
    imgurl:[],
},
],
post:{
  createdAt: null,
  postid:0,
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