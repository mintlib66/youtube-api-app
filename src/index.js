import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Youtube from './youtube'
import axios from 'axios'

const root = ReactDOM.createRoot(document.getElementById('root'))
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

const httpClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    key: API_KEY,
  },
})
const youtube = new Youtube(httpClient)

root.render(<App youtube={youtube} />)
