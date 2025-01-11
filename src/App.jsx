import './App.css'

import { useState } from 'react'
import LoadingData from './containers/LoadingData/LoadingData'
import DisplayContainer from './containers/DisplayContainer/DisplayContainer'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'

function App() {

  return (
    <>
      <Header/>
      <SearchBar/>
      <DisplayContainer/>
    </>
  )
}

export default App
