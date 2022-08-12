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
const initialState = {
}

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
