import React, { Component } from 'react';
import { fakeData } from '../fakeData';
import Video from './video';
import '../style/app.css';

class VideoList extends Component {
  render() {
    return (
      <div className="video__list">
        {
          this.props.videos.map((video) => {
            return <Video key={video.etag} video={video} />
          })
        }
      </div>
    )
  }
}

export default VideoList;



/*
<div className="videoList">
        {
          this.state.videoList.map((video, idx) => {
            return <Video key={idx} video={video} />
          })
        }
      </div>

*/