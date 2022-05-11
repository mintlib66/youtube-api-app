import React, { Component } from 'react'

class Post extends Component {
  render() {
    return (
      <div className="post">
        <video src=""></video>
        <h2 className="title">동영상제목</h2>
        <p>
          <span className="view">조회수</span>
          <span className="date">날짜</span>
        </p>
        <p className="desc">동영상 설명</p>
      </div>
    )
  }
}

export default Post
