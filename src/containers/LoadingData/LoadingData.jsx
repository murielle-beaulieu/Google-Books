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
      {fetchStatus === 'Awaiting a search' && <h1>Start to type and search for books!</h1>}
      {fetchStatus === 'Looking for books match' && <h1>Looking for books!</h1>}
      {fetchStatus === 'Success!' && <header><h1>Search Results from "{<i>{searchData}</i>}"</h1></header>}
      {fetchStatus === 'Success!' && booksData.map((book) => {return <BookCard key={book.etag} bookData={book}/>})}
      {fetchStatus === 'An error occured' && <h1>{error.message}Ooops, try again</h1>}
    </>
  )
}
export default LoadingData;
