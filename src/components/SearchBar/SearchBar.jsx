import classes from "./SearchBar.module.scss"
import { useRef, useState } from "react";

const SearchBar = ({onFormSubmit}) => {
  const formRef = useRef(null);

  const handleInput = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData);
    onFormSubmit(formValues);
    form.reset();
  }

  return (
    <div className={classes.search_bar}>
      <form onSubmit={handleInput} ref={formRef}>
        <label htmlFor="bookSearch">Search:</label>
        <input id="bookSearch"
        type="text"
        name='bookSearch'
        placeholder="Search by Author, Title, Keyword, etc"
        ></input>
        <div>
          <button>Submit!</button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar;
