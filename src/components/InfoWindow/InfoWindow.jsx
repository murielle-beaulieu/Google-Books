import classes from "./InfoWindow.module.scss"

const InfoWindow = ({bookdata}) => {

  console.log('hello');
  return (
    <div className={classes.background_opacity}>
      <article className={classes.modal}>
        <button>&times;</button>
        <h1>{bookdata.title}</h1>
          {bookdata.authors &&   <h3>by {bookdata.authors.join(", ")}</h3>}
          {!bookdata.authors && <h2 className={classes.unknown}>Unknow Authors</h2>}
          <p>Description:</p>
        <section className={classes.description}>
          <p>{bookdata.description}</p>
        </section>
        <h4>published by {bookdata.publisher}, {<i>{new Date(bookdata.publishedDate).getFullYear()}</i>}</h4>
      </article>
    </div>
  )
}

export default InfoWindow;
