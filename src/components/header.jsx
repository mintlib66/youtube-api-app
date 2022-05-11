import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">logo</div>
        <div className="search">
          <input type="text" className="search-input" />
          <button className="search-btn">serach</button>
        </div>
      </header>
    )
  }
}

export default Header
