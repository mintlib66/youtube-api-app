import React, { Component } from 'react'
import VideoItem from './videoItem'

class VideoList extends Component {
  render() {
    return (
      <ul className="videoList">
        {
          //map으로 비디오 불러오기
          <VideoItem></VideoItem>
        }
      </ul>
    )
  }
}

export default VideoList
