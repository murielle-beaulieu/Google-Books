import {  useEffect, useState } from 'react';
import { getBooksData } from '../../data/books-data';
import BookCard from '../../components/BookCard/BookCard';

const LoadingData = ({searchData}) => {

  const [booksData, setBooksData] = useState(null);
  const [fetchStatus, setFetchStatus] = useState('Awaiting a search');
  const [error, setError] = useState(null);
  console.log(searchData);

  const fetchData = (searchData) => {
    setFetchStatus('Looking for books match');
    getBooksData(searchData)
      .then((data) => {
        setFetchStatus('Success!');
        setBooksData(data);
        console.log(booksData);
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
    <h1>Books</h1>
    {fetchStatus === 'Awaiting a search' && <h1>Start to type and search for books!</h1>}
    {fetchStatus === 'Looking for books match' && <h1>Looking for books!</h1>}
    {fetchStatus === 'Success!' && booksData.map((bookData) => (<BookCard key={bookData.title} bookData={bookData}/>))}
    {fetchStatus === 'An error occured' && <h1>{error.message}Ooops, try again</h1>}
    </>
  )
}

export default LoadingData;
