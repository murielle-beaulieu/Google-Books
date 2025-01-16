import InfoWindow from "../InfoWindow/InfoWindow";
import classes from "./BookCard.module.scss";
import {  useEffect, useState } from 'react';

const BookCard = ({bookData}) => {

  const[visible,setVisible] = useState(false);


  const toggleInfoWindow = () => {

    (visible) ? setVisible(false) : setVisible(true);
  }


   return (
    <div className={classes.book_card} onClick={toggleInfoWindow}>
      <h2>{bookData.title}</h2>
      <h3>by {bookData.authors}</h3>
      <img src={bookData.imageLinks.thumbnail} alt={bookData.title}></img>
      {visible && <InfoWindow bookdata={bookData} className={classes.modal}/>}
    </div>

  )
}

export default BookCard;
