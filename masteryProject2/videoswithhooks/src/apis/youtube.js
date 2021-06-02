import axios from "axios";

//youtube api key AIzaSyBi7W7tGCnG-Nlqr2D0kgF12D8LI-l6nBc
const KEY = "AIzaSyBi7W7tGCnG-Nlqr2D0kgF12D8LI-l6nBc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
