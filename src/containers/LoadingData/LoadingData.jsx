import { useEffect, useState } from 'react';
import { getBooksData } from '../../data/books-data';
import BookCard from '../../components/BookCard/BookCard';

const LoadingData = () => {

  const [bookData, setBooksData] = useState(null);
  const [fetchStatus, setFetchStatus] = useState('Awaiting a search');
  const [error, setError] = useState(null);

  const fetchData = () => {
    setFetchStatus('Looking for books match');
    getBooksData()
      .then((data) => {
        setFetchStatus('Success!');
        setBooksData(data);
      })
      .catch((e) => {
        setError(e);
        setFetchStatus('An error occured');
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    {fetchStatus === 'Awaiting a search' && <h1>Start to type and search for books!</h1>}
    {fetchStatus === 'Looking for books match' && <h1>Looking for books!</h1>}
    {fetchStatus === 'Success!' && <BookCard bookData={bookData}/>}
    {fetchStatus === 'An error occured' && <h1>{error.message}Ooops, try again</h1>}
    </>
  )

}

export default LoadingData;
