import React from 'react';
import { connect } from 'react-redux';

const SongInfo = ({ song }) => {
  console.log(song);

  if (song === null) {
    return <div></div>;
  }

  return (
    <div>
      <h4>{song.title}</h4>
      <p>{song.duration}</p>
    </div>
  );
};

function mapStateToProps(state) {
  return { song: state.selectedSong };
}

export default connect(mapStateToProps)(SongInfo);
