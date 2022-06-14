import React from 'react'

const VideoItem = ({ video: { snippet } }) => (
  <li className="videoItem">
    <img src={snippet.thumbnails.default.url} alt="" className="thumbnail" />
    <div>
      <p className="title">{snippet.title}</p>
      <p className="channel">{snippet.channelTitle}</p>
      <span className="view">{snippet.view}</span>
      <span className="date">{snippet.publishedAt.substr(0, 10)}</span>
    </div>
  </li>
)

export default VideoItem
