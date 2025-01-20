# Google Books Project

- Using the Google API, this project consolidate what we learned with React sor far!

## Requirements / Purpose

Create a page that allows users to search for books Page should include the following:

- Header section introducing the page
- Form containing a text input and a submit / search button
- A grid of books Instructions:
- When the submit button is clicked you need the request books from the Google books API using the input value as your query string
- The books that you receive should be rendered in the books grid.
- Each book in the grid should have an image, author, title and description
- The grid should be responsive on different screen sizes

Styling (required):

This application should look good, take some time to pick a palette and plan out your design - this will also help with splitting the app into React components. You can use tools like Figma or wireframe pro to plan what your application is going to look like.

Use modules for styling, don't forget about other SCSS features, like a separate file for palette or variables.

Application Design (required):

- Remember that some JavaScript logic, like functions that fetch data, can be moved to their own .js files
- Always use iterators over loops
- Always parametrize and abstract large pieces of duplicate code.
- Give feedback to the user when no book results can be found for the query.
- When a user clicks a book in the grid, a modal should appear with more book information, think about release, publish date, country, languages, etc.-   purpose of project

---

## Design Goals / Approach

-   Chose soft colours, sort of a pastel palette and bold clear text

---

## Features

-   Search bar
-   Display of loading skeletons during the API call
-   Display of book cards for each result
-   Display of a 'modal' as an info window that opens when you click on a result

---

## Known issues

-   There has been a case where while searching for a book, I have received two results. They were different by ID, but otherwise same author/title/publication date/cover (book in question is Intermezzo by Sally Rooney)

---

## Future Goals

-   Would be interested in implementing pagination to display more results

---

## Change logs

- n/a

---
