import {  useEffect, useState } from 'react';
import { getBooksData } from '../../data/books-data';
import BookCard from '../../components/BookCard/BookCard';
import './LoadingData.module.scss'
import Skeleton from '../../components/Skeleton/Skeleton';

const LoadingData = ({searchData}) => {

  const [booksData, setBooksData] = useState(null);
  const [fetchStatus, setFetchStatus] = useState('Awaiting a search');
  // const [error, setError] = useState(null);

  const fetchData = (searchData) => {
    setFetchStatus('Looking for books match');
    getBooksData(searchData)
      .then((data) => {
        setFetchStatus('Success!');
        setBooksData(data.items.map((book) => book));
      })
      .catch((e) => {
        setError(e);
        setFetchStatus('Failed');
      });
    };

    useEffect(() => {
      {(searchData.length > 0) && fetchData(searchData)};
    }, [searchData])

  return (
    <>
      {fetchStatus === 'Awaiting a search' && <h2>Start to type and search for books!</h2>}
      {fetchStatus === 'Looking for books match' && <Skeleton/>}
      {fetchStatus === 'Success!' && <header><h2>Search Results from "{<i>{searchData}</i>}"</h2></header>}
      {fetchStatus === 'Success!' && booksData.map((book) => (<BookCard key={book.id} bookdata={book.volumeInfo}/>))}
      {fetchStatus === 'Failed' && <h2>No results found for "{<i>{searchData}</i>}"<br /> please try again</h2>}
    </>
  )
}

export default LoadingData;

// key={book.industryIdentifiers[0].identifier}
