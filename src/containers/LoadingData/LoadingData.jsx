import {  useEffect, useState } from 'react';
import { getBooksData } from '../../data/books-data';
import BookCard from '../../components/BookCard/BookCard';
import './LoadingData.module.scss'

const LoadingData = ({searchData}) => {

  const [booksData, setBooksData] = useState(null);
  const [fetchStatus, setFetchStatus] = useState('Awaiting a search');
  const [error, setError] = useState(null);

  const fetchData = (searchData) => {
    setFetchStatus('Looking for books match');
    getBooksData(searchData)
      .then((data) => {
        setFetchStatus('Success!');
        setBooksData(data.items.map((book) => book.volumeInfo));
      })
      .catch((e) => {
        setError(e);
        setFetchStatus('An error occured');
      });
    };

    useEffect(() => {
      {(searchData.length > 0) && fetchData(searchData)};
    }, [searchData])


  return (
    <>
      {fetchStatus === 'Awaiting a search' && <h2>Start to type and search for books!</h2>}
      {fetchStatus === 'Looking for books match' && <h2>Looking for books!</h2>}
      {fetchStatus === 'Success!' && <header><h2>Search Results from "{<i>{searchData}</i>}"</h2></header>}
      {fetchStatus === 'Success!' && booksData.map((book) => {return <BookCard key={book.etag} bookData={book}/>})}
      {fetchStatus === 'An error occured' && <h2>{error.message}Ooops, try again</h2>}
    </>
  )
}
export default LoadingData;
