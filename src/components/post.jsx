import React from 'react'

function Post({ video }) {
  // console.log(video)
  return (
    <div className="post">
      <iframe
        className="video"
        type="text/html"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0"
        allowFullScreen
      />
      <h2 className="title">{video.snippet.title}</h2>
      <div className="info">
        <span className="view">{video.snippet.view}</span>
        <span className="date">{video.snippet.publishedAt.substr(0, 10)}</span>
      </div>
      <h3 className="channel">{video.snippet.channelTitle}</h3>
      <p className="desc">{video.snippet.description}</p>
    </div>
  )
}

export default Post
