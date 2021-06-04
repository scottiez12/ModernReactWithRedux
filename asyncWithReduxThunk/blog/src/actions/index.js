import jsonplaceholder from "../apis/jsonPlaceHolder";

//correct syntax for async/await with redux thunk, the way it's commonly refactored
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonplaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonplaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

//so this is totally fine if we dont have to do anything async...
// export const selectPost = () => {
//   return {
//     type: "SELECT_POST",
//   };
// };
