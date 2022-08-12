// Action value
const ADD_POST = "ADD_POST";

// Action Creator

export const addPost = (payload) => {
  return {
    type: ADD_POST,
    payload,
  };
};


// initial state
const initialPost = {
    image_url: "",
    username: "",
    title: "0",
    insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
       
      };

   
    default:
      return state;
  }
};

export default posts;
