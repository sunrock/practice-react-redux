import React from 'react';
import SongList from './SongList';
import Songinfo from './SongInfo';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column ten wide">
          <SongList />
        </div>
        <div className="column six wide">
          <Songinfo />
        </div>
      </div>
    </div>
  );
}

export default App;