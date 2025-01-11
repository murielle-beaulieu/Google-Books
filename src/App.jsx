import './App.css'

import { useState } from 'react'
import LoadingData from './containers/LoadingData/LoadingData'
import DisplayContainer from './containers/DisplayContainer/DisplayContainer'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header/>
      <DisplayContainer/>
    </>
  )
}

export default App
