export const getBooksData = async (searchData) => {
  const query = searchData;
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);

  if (!response.ok) {
    throw new Error("Unable to access book data")
  }

  const data = await response.json();
  return data;
}
