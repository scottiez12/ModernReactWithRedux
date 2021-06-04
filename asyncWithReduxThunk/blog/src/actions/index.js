import jsonplaceholder from "../apis/jsonPlaceHolder";

//correct syntax for async/await with redux thunk, the way it's commonly refactored
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonplaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

//so this is totally fine not having to us async
// export const selectPost = () => {
//   return {
//     type: "SELECT_POST",
//   };
// };
