import jsonplaceholder from "../apis/jsonPlaceHolder";
import _ from "lodash";

export const fetchPostsAndUsers = (id) => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  console.log(getState().posts);
  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // console.log(userIds);
  // userIds.forEach((id) => dispatch(fetchUser(id)));

  //another refactor using lodash
  //basically each step in the chain receives the result of the argument before it..
  //so map() automatically receives the results of getState().posts
  //the .value() at the end SHOULD BE CALLED SOMETHING LIKE .EXECUTE() BECAUSE ITS NEEDED TO TELL THE CHAIN TO ACTUALLY WORK.
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value();
};

//correct syntax for async/await with redux thunk, the way it's commonly refactored
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonplaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonplaceholder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

// export const fetchUser = (id) => (dispatch) => {
//   _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//   const response = await jsonplaceholder.get(`/users/${id}`);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });

//so this is totally fine if we dont have to do anything async...
// export const selectPost = () => {
//   return {
//     type: "SELECT_POST",
//   };
// };
