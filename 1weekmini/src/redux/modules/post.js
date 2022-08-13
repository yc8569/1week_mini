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
const initialPost ={
postList:[
{
  username: "작성자1",
  contents: "어려워",
  likeCount: 33,
  // postingImage: enctype="multipart/form-data",
  file: "",
  createdAt: null,
},
{
  username: "작성자2",
  contents: "좆같네",
  likeCount: 4,
  // postingImage: enctype="multipart/form-data",
  file: "",
  createdAt: null,
},
],
post:{
  username: "",
  contents: "",
  likeCount: 0,
  // postingImage: enctype="multipart/form-data",
  file: "",
  createdAt: null,
},
 
};

const posts = (state = initialPost, action) => {
  switch (action.type) {
    case ADD_POST:
      return { 
        ...state,
        postList:[...state.postList, action.payload],
       
      };

   
    default:
      return state;
  }
};

export default posts;
