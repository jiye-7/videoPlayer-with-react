import React, { Component } from 'react';
import { fakeData } from '../fakeData';
import VideoList from './videoList';
import Video from './video';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [...fakeData],
    }
  }

  render() {
    return (
      <VideoList videos={this.state.videos} />
    );
  }
}

export default App;