import React from 'react'
import VideoList from './videoList'

function Main({ videos }) {
  return (
    <div className="main">
      <VideoList videos={videos}></VideoList>
    </div>
  )
}

export default Main
