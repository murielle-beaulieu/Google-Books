export const getBooksData = async () => {
  const response = await fetch("https://www.googleapis.com/books/v1/volumes?q='happy'");

  if (!response.ok) {
    throw new Error("Unable to access book data")
  }

  const data = await response.json();
  return data.items[0];
}
