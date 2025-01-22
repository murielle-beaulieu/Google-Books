import classes from "./SearchBar.module.scss"
import { useRef, useState } from "react";
import { validation } from "./validation.js";

const SearchBar = ({onFormSubmit}) => {
  const formRef = useRef(null);
  const [errors, setErrors] = useState(null);
  const [inputClasses, setInputClasses] = useState([]);

  const handleInput = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData);

    const { isValid, errors } = validation(formValues);

    if (isValid === true) {
      onFormSubmit(formValues);
      form.reset();
      setErrors(null);
      setInputClasses([]);
    } else {
      setErrors(errors);
      setInputClasses(classes.invalid);
    }
  }


  return (
    <>
      <div className={classes.inv_text}>{errors?.input ? errors.input : ''}
      <div className={classes.search_bar}>
        <form onSubmit={handleInput} ref={formRef}>
          <div>
            <input id="bookSearch"
              type="text"
              name='bookSearch'
              placeholder="Search by Author, Title, Keyword, etc"
              className={inputClasses}
            ></input>
            <button className={classes.btn}>Submit!</button>
          </div>
         </form>
      </div>
    </div>
    </>
  )
}

export default SearchBar;
