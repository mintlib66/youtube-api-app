import React, { useCallback, useEffect, useState } from 'react'
import Header from './components/header'
import Post from './components/post'
import VideoList from './components/videoList'
import './style/App.css'

function App({ youtube }) {
  const [videos, setVideos] = useState([])
  /*
  useEffect(() => {
    const reqOption = {
      method: 'GET',
      redirect: 'follow',
    }

    fetch(
      `https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=${API_KEY}&part=snippet,contentDetails,statistics,status`
    )
      .then(res => res.json())
      .then(result => result.items[0])
      .then(item => {
        console.log(item.snippet.localized.title)
        console.log(item.snippet.channelTitle)
        console.log(item.snippet.publishedAt)
        console.log(item.statistics)
        setVideos({
          title: item.snippet.localized.title,
          channelTitle: item.snippet.channelTitle,
          publishedAt: item.snippet.publishedAt,
        })
      })
      .catch(err => console.error(err))
  }, [])*/

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
      {/* 메인화면은 포스트 없이 리스트 2줄로 */}
      <div className="main">
        {/* <Post video={videos}></Post> */}
        <VideoList videos={videos}></VideoList>
      </div>
    </div>
  )
}

export default App
