import React from 'react'
import VideoItem from './videoItem'

function VideoList({ videos, onVideoClick, display }) {
  return (
    <ul className="videoList">
      {
        //map으로 비디오 불러오기
        videos.map((video, index) => {
          return (
            <VideoItem
              video={video}
              key={index}
              onVideoClick={onVideoClick}
              display={display}
            ></VideoItem>
          )
        })
      }
    </ul>
  )
}

export default VideoList
