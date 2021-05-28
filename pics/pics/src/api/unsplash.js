import axios from "axios";

//creates instance of axios client with some default properties
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID EdqjX_wmTnKa73-od-GfAVwCJI9zz6sBNGqFnjCUasA",
  },
});
