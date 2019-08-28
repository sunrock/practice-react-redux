import React from 'react';
import VideoItem from './VideoItem';

// const VideoList = props => {
//   // props.videos
//   return <div>VideoList: { props.videos.length }</div>
// }

const VideoList = ({ videos, onVideoSelect }) => {
  const videoList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  return <div className="ui list">{videoList}</div>;
};

export default VideoList;
