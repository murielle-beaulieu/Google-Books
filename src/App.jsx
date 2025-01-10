import './App.css'

import { useState } from 'react'
import LoadingData from './containers/LoadingData/LoadingData'
import DisplayContainer from './containers/DisplayContainer/DisplayContainer'

function App() {

  return (
    <>
      <h1>Google Books</h1>
      <DisplayContainer/>
    </>
  )
}

export default App
