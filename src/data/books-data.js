export const getBooksData = async (searchData) => {
  const query = searchData;
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyDrjrf-5EBBr7l7HkRu6TB_WCcLeAwyG88`);

  if (!response.ok) {
    throw new Error("Unable to access book data")
  }

  const data = await response.json();
  return data;
}
