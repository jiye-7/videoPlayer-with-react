import React, { Component } from 'react';
import { fakeData } from '../fakeData';
import VideoList from './videoList';
import VideoPlay from './videoPlay';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [...fakeData],
      isClick: false,
      currentVideo: fakeData[0]
    }
  }

  handleTitleClick = (video) => {
    // 여기서 클릭한 비디오의 제목을 받아오고, videoPlay로 넘겨주는 역할을 해야된다.
    this.setState({
      isClick: true,
      currentVideo: video
    })
  }

  render() {
    return (
      <main>
        <div className="video__container">
          <VideoPlay video={this.state.currentVideo} />
          <VideoList videos={this.state.videos} handleClick={this.handleTitleClick} />
        </div>
      </main>
    );
  }
}

export default App;