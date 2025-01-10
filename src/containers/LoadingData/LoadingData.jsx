import { useEffect, useState } from 'react';
import { getBooksData } from '../../data/books-data';

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
    {fetchStatus === 'Looking for books match' && <h1>Looking for books!</h1>}
    {fetchStatus === 'Success!' && <p>{bookData}</p>}
    {fetchStatus === 'An error occured' && <h1>{error.message}Ooops, try again</h1>}
    </>
  )

}

export default LoadingData;
