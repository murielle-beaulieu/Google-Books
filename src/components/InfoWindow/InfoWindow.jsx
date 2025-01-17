import classes from "./InfoWindow.module.scss"

const InfoWindow = ({bookdata}) => {
  return (
    <article className={classes.modal}>
      <button>&times;</button>
      <h1>{bookdata.title}</h1>
      <h2>{bookdata.authors}</h2>
      <h3>published by {bookdata.publisher} {<i>{new Date(bookdata.publishedDate).getFullYear()}</i>}</h3>
        <p>Description:</p>
      <section className={classes.description}>
        <p>{bookdata.description}</p>
      </section>
    </article>
  )
}

export default InfoWindow;
