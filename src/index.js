import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/index.css'
import App from './App'
import Youtube from './youtube'
import axios from 'axios'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fas, faCheckSquare, faCoffee)

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
