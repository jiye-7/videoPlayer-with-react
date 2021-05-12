import React, { Component } from 'react';
import { fakeData } from '../fakeData';
import VideoList from './videoList';
import Video from './video';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <Video video={fakeData} />
    );
  }
}

export default App;