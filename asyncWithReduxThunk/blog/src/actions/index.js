import jsonplaceholder from "../apis/jsonPlaceHolder";

export const fetchPosts = async () => {
  //Bad approach!!!
  const response = await jsonplaceholder.get("/posts");

  return {
    type: "FETCH_POST",
    payload: response,
  };
};
