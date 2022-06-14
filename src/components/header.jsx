import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
class Header extends Component {
  //검색 버튼 클릭 이벤트
  constructor(props) {
    super(props)
    this.state = {
      keyword: '',
    }
  }
  onSearch = () => {
    console.log(this.state.keyword)
    this.props.onSearch(this.state.keyword)
  }

  render() {
    return (
      <header>
        <div className="logo">Youtube Video</div>
        <div className="search">
          <input
            type="text"
            className="search-input"
            onChange={e => (this.state.keyword = e.target.value)}
          />
          <button className="search-btn" onClick={this.onSearch}>
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </button>
        </div>
      </header>
    )
  }
}

export default Header
