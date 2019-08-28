import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {

  state = { videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('search');
  }

  onTermSubmit = async term => {
    // console.log(term)
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState( { 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = (video) => {
    // console.log('From App Comp', video);
    this.setState({ selectedVideo: video })
  }

  // I have { this.state.videos.length } videos.
  render() { 
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={ this.onTermSubmit } />
        <div className="ui grid">
          <div className="ui row">
            <div className="twelve wide column">
             <VideoDetail video={ this.state.selectedVideo } />
            </div>
            <div className="four wide column">
              <VideoList onVideoSelect={ this.onVideoSelect } videos={ this.state.videos }/>
           </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default App;