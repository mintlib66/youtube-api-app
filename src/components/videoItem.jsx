import React from 'react'

const VideoItem = ({ video, video: { snippet }, onVideoClick, display }) => {
  return (
    <li
      className={display === 'list' ? 'videoItem list' : 'videoItem'}
      onClick={() => onVideoClick(video)}
    >
      <img
        src={snippet.thumbnails.default.url}
        alt={snippet.title}
        className="thumbnail"
      />
      <div className="info">
        <p className="title">{snippet.title}</p>
        <p className="channel">{snippet.channelTitle}</p>
        <span className="view">{snippet.view}</span>
        <span className="date">{snippet.publishedAt.substr(0, 10)}</span>
      </div>
    </li>
  )
}

export default VideoItem
