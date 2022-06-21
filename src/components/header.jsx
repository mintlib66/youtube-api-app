import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRef } from 'react'

function Header({ onSearch }) {
  const inputRef = useRef()

  const onEnterPress = e => {
    if (e.key === 'Enter') handleSearch()
  }
  const handleSearch = () => {
    onSearch(inputRef.current.value)
  }

  return (
    <header>
      <div className="logo">
        <span>Youtube Video</span>
      </div>
      <div className="search">
        <input
          ref={inputRef}
          type="text"
          className="search-input"
          onKeyPress={onEnterPress}
        />
        <button className="search-btn" onClick={handleSearch}>
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </button>
      </div>
    </header>
  )
}

export default Header
