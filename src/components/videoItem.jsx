import React, { Component } from 'react'

class VideoItem extends Component {
  render() {
    return (
      <li className="videoItem">
        <img src="" alt="" className="thumbnail" />
        <div>
          <p className="title">title</p>
          <p className="channel">channel</p>
          <span className="view">view</span>
          <span className="date">date</span>
        </div>
      </li>
    )
  }
}

export default VideoItem
