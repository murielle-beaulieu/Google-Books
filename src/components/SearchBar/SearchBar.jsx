import classes from "./SearchBar.module.scss"

const SearchBar = () => {
  return (
    <div className={classes.search_bar}>
    <form>
      <label htmlFor="bookSearch">Search:</label>
      <input id="bookSearch" type="text" placeholder="Search by Author, Title, Keyword, etc"></input>
    </form>
    </div>
  )
}

export default SearchBar;
