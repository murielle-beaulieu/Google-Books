import classes from "./BookCard.module.scss";
import Modal from "./Modal";

const BookCard = ({bookData}) => {

  // return (
  //   <div className={classes.book_card}>
  //     <h3>{bookData.volumeInfo.title}</h3>
  //     <p>by {bookData.volumeInfo.authors}</p>
  //     <p>{bookData.volumeInfo.publishedDate}</p>
  //     <img src={bookData.volumeInfo.imageLinks.thumbnail} alt={bookData.volumeInfo.title}></img>
  //   </div>
  // )
  const openInfoWindow = () => {
    console.log('clicked :)!')
    return (<Modal>Hi</Modal>)
  }

  // WITH NASA API - IN THE MEANTIME
  return  (
    <div className={classes.book_card} onClick={openInfoWindow}>
    <h3>{bookData.title}</h3>
    <img src={bookData.url} alt={bookData.title}></img>
    <p>{bookData.date}</p>
    </div>
  )
}

export default BookCard;
