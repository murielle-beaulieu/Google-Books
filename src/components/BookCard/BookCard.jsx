import InfoWindow from "../InfoWindow/InfoWindow";
import classes from "./BookCard.module.scss";

const BookCard = ({bookData}) => {

  const toggleInfoWindow = () => {
    console.log('clicked :)!')
    return(
      <>
      <InfoWindow />
      </>
    );
  }
   return (
    <div className={classes.book_card} onClick={toggleInfoWindow}>
      <h3>{bookData.title}</h3>
      <p>by {bookData.authors}</p>
      <p>{bookData.publishedDate}</p>
      <img src={bookData.imageLinks.thumbnail} alt={bookData.title}></img>
    </div>

  )
}

export default BookCard;
