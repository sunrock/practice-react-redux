import React from 'react';
import './VideoItem.css';

// const VideoItem = props => {
//   return <div>VideoItem</div>
// }

const VideoItem = ({ video, onVideoSelect}) => {
  // console.log(video.snippet);

  return (
    <div onClick={() => onVideoSelect(video)} className="item">
      <img className="ui image" alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">{ video.snippet.title }</div>
      </div>
    </div>
  );
}

export default VideoItem;