const apiKey = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

export const getBooksData = async (searchData) => {
  const query = searchData;
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}&maxResults=40`);

  if (!response.ok) {
    throw new Error("Unable to access book data")
  }

  const data = await response.json();
  return data;

}
