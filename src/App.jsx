import React, { useCallback, useEffect, useState } from 'react'
import Header from './components/header'
import Post from './components/post'
import VideoList from './components/videoList'
import './style/App.css'

function App({ youtube }) {
  const [videos, setVideos] = useState([])

  const search = useCallback(
    query => {
      youtube.search(query).then(videos => setVideos(videos))
    },
    [youtube]
  )
  //마운트 시 호출
  useEffect(() => {
    youtube.mostPopular().then(videos => setVideos(videos))
  }, [youtube])

  return (
    <div className="App">
      <Header onSearch={search}></Header>
      {/* 메인화면은 포스트 없이 리스트로 */}
      <div className="main">
        {/* <Post video={videos}></Post> */}
        <VideoList videos={videos}></VideoList>
      </div>
    </div>
  )
}

export default App
