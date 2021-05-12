import React, { Component } from 'react';
import VideoList from '../component/videoList';
import '../style/app.css';

class VideoPlay extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="video__play__area">
        <iframe className="video__play__view" src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`}></iframe>
        <div className="video__play__info">
          <span className="play__info__title">{this.props.video.snippet.title}</span><br></br>
          <span className="play__info__date">{this.props.video.snippet.publishTime}</span>
        </div>
      </div>
    )
  }
}

export default VideoPlay
