import React, { Component } from 'react'

class VideoItem extends Component {
  render() {
    console.log(this.props)
    return (
      <li className="videoItem">
        <img
          src={this.props.video.thumbnails.default.url}
          alt=""
          className="thumbnail"
        />
        <div>
          <p className="title">{this.props.video.title}</p>
          <p className="channel">{this.props.video.channelTitle}</p>
          <span className="view">{this.props.video.view}</span>
          <span className="date">{this.props.video.publishedAt}</span>
        </div>
      </li>
    )
  }
}

export default VideoItem
