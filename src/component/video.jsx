import '../style/app.css';

function Video({ video }) {

  return (
    <div className="video">
      <iframe className="video__view" src={`https://www.youtube.com/embed/${video[1].id.videoId}`}></iframe>
      <span className="video__subject">{video[0].snippet.title}</span>
      <span className="video__description">{video[0].snippet.description}</span>
    </div>
  )
}

export default Video;