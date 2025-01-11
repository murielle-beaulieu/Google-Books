import classes from "./BookCard.module.scss";

const BookCard = ({bookData}) => {

  return (
    <div className={classes.book_card}>
      <h3>{bookData.volumeInfo.title}</h3>
      <p>by {bookData.volumeInfo.authors}</p>
      <p>{bookData.volumeInfo.publishedDate}</p>
      <img src={bookData.volumeInfo.imageLinks.thumbnail} alt={bookData.volumeInfo.title}></img>
    </div>
  )
}

export default BookCard;
