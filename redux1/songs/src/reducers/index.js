import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Honky Tonk Women",
      duration: "4:05",
    },
    {
      title: "Paint it Black",
      duration: "3:15",
    },
    {
      title: "Rambling Man",
      duration: "10:00",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  //dont forget to set default values if there are arguments!
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
