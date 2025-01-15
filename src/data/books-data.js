import { useEffect, useState } from "react";

export const getBooksData = async (searchData) => {

  // **** WORK IN PROGRESS **** //
  // const query = bookSearchTerm.bookSearch;
  // console.log(query);
  // const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q='happy'`);

  // const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);

  // WITH NASA API - WHILE WE WAIT FOR RESET
  const query = searchData;
  const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=cxKAzR4jBuYiDu0YrXcGkpSS9Vr9SGBknmAVjZKB&count=${query}`)

  console.log(query);


  if (!response.ok) {
    throw new Error("Unable to access book data")
  }

  const data = await response.json();
  console.log(data)
  return data;
}
