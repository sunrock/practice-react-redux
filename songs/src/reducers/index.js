import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Anna', duration: '2:30' },
    { title: 'Go Peter', duration: '4:10' },
    { title: 'little star', duration: '2:40' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
