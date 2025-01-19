import './App.css'

import { useEffect, useState } from 'react'
import LoadingData from './containers/LoadingData/LoadingData'
import DisplayContainer from './containers/DisplayContainer/DisplayContainer'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import { getBooksData } from './data/books-data'
import Footer from './components/Footer/Footer'

function App() {

    // initialize the state for searchdata (value of what you wrote in the search bar)
  const [searchData, setSearchData] = useState('');

  const onFormSubmit = (data) => {
    // once we submit the form, we get the value of your input and assign to searchData
    setSearchData(data.bookSearch);
  }
    // when there's a change to searchData (verifying that the input contains letters)
    // we call getBooksData with the value received
// useEffect(() => {
//   {(searchData.length > 0) && getBooksData(searchData)};
// }, [searchData])

return (
    <>
      <Header/>
      <SearchBar onFormSubmit={onFormSubmit}/>
      <DisplayContainer searchData={searchData}/>
      <Footer/>
    </>
  )
}

export default App
