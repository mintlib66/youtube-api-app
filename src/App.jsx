import React, { useCallback, useEffect, useState } from 'react'
import Header from './components/header'
import Post from './components/post'
import VideoList from './components/videoList'
import './style/App.css'

function App({ youtube }) {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideos] = useState(null)

  const selectVideo = video => {
    setSelectedVideos(video)
  }

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
      <div className="main">
        {selectedVideo && <Post video={selectedVideo}></Post>}
        <VideoList
          videos={videos}
          onVideoClick={selectVideo}
          display={selectedVideo ? 'list' : 'grid'}
        ></VideoList>
      </div>
    </div>
  )
}

export default App
