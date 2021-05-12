import '../style/app.css';

function Video({ video }) {
  return (
    <div className="video">
      <iframe className="video__view" src={`https://www.youtube.com/embed/${video.id.videoId}`}></iframe>
      <span className="video__subject">{video.snippet.title}</span>
      <span className="video__description">{video.snippet.description}</span>
    </div>
  )
}

export default Video;