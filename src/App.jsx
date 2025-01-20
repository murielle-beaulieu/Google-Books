import { useState } from 'react'
import DisplayContainer from './containers/DisplayContainer/DisplayContainer'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import './App.css'

function App() {
  const [searchData, setSearchData] = useState('');
  const onFormSubmit = (data) => {
    setSearchData(data.bookSearch);
  }

return (
    <>
      <Header/>
      <SearchBar onFormSubmit={onFormSubmit}/>
      <DisplayContainer searchData={searchData}/>
    </>
  )
}

export default App
