import classes from "./InfoWindow.module.scss"

const InfoWindow = ({bookdata}) => {

  return (
    <div className={classes.background_opacity}>
      <article className={classes.modal}>
      <button className={classes.close_modal}>x</button>
      <section className={classes.book}>
        <section className={classes.main}>
          {bookdata && <h2 className={classes.main_title}>{bookdata.title}</h2>}
          {bookdata.authors && <h2>by {bookdata.authors.join(", ")}</h2>}
          {!bookdata.authors && <h2 className={classes.unknown}>Unknow Authors</h2>}
          <h4>First published {<i>{new Date(bookdata.publishedDate).getFullYear()}</i>}</h4>
        </section>
          {bookdata.description &&
            <section className={classes.description}>
              <p>Description:</p>
              <p>{bookdata.description}</p>
            </section>}
          {!bookdata.description &&
            <section className={classes.description}>
              <h3 className={classes.unknown}>No description available at this time</h3>
            </section>}
          {bookdata.publisher &&<h4>published by {bookdata.publisher}</h4>}
        </section>
      </article>
    </div>
  )
}

export default InfoWindow;
