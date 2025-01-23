import InfoWindow from "../InfoWindow/InfoWindow";
import classes from "./BookCard.module.scss";
import { useState } from 'react';

const BookCard = ({ bookdata }) => {

  const[visible,setVisible] = useState(false);

  const toggleInfoWindow = () => {
    (visible) ? setVisible(false) : setVisible(true);
  }

   return (
    <div className={classes.book_card} onClick={toggleInfoWindow}>
      <section className={classes.main_details}>
        <h2 className={classes.title}>{bookdata.title}</h2>
        {bookdata.authors ? <h3 className={classes.authors}>by {bookdata.authors.join(", ")}</h3> : <h3 className={classes.unknown}> by Unknow Authors</h3>}
      </section>
      {bookdata.imageLinks?.thumbnail ? <img src={bookdata.imageLinks.thumbnail} alt={bookdata.title}></img> : <img src="./src/assets/placeholder-book.png" alt={bookdata.title}></img>}
      {visible && <InfoWindow bookdata={bookdata} className={classes.modal}/>}
    </div>

  )
}

export default BookCard;
