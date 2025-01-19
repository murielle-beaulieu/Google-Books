import classes from "./SearchBar.module.scss"
import { useRef, useState } from "react";
import { validation } from "./validation.js";

const SearchBar = ({onFormSubmit}) => {
  const formRef = useRef(null);
  const [errors, setErrors] = useState(null);

  const handleInput = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData);

    const { isValid, errors } = validation(formValues);

    console.log(isValid);
    console.log(errors);

    if (isValid === true) {
      onFormSubmit(formValues);
      form.reset();
    }
    setErrors(errors);
  }


  return (
    <div className={classes.search_bar}>
          {errors?.input ? errors.input : '\u00A0'}
      <form onSubmit={handleInput} ref={formRef}>
        <div>
          <input id="bookSearch"
          type="text"
          name='bookSearch'
          placeholder="Search by Author, Title, Keyword, etc"
          ></input>
          <button className={classes.btn}>Submit!</button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar;
