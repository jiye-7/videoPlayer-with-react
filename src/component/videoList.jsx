import React, { Component } from 'react';
import Video from './video';
import '../style/app.css';

class VideoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="video__list">
        {
          this.props.videos.map((video) => {
            return <Video key={video.etag} video={video} handleClick={this.props.handleClick} />
          })
        }
      </div>
    )
  }
}

export default VideoList;