import './App.css'
import Header from './components/header'
import Post from './components/post'
import VideoList from './components/videoList'

function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* 메인화면은 포스트 없이 리스트 2줄로 */}
      <div className="main">
        <Post></Post>
        <VideoList></VideoList>
      </div>
    </div>
  )
}

export default App
