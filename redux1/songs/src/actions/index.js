//action creator
export const selectSong = (song) => {
  //return an action, type and most likely payload
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
