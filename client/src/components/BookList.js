
// import { gql } from '@apollo/client';
// import { graphql } from 'react-apollo'; //bind apolllo to react
import {useQuery} from "@apollo/client";
import {getBooksQuery} from "../queries/queries";
import React, {useState} from "react";

//components
import BookDetails from "./BookDetails";

const displayBooks = (loading, error, data, setSelected) => {
  if (loading) {
    return <div>Loading books...</div>;
  } 
  if (error) {
    return <p>Error: error.message</p> ;
  } else {
    return data.books.map(book => (
      <li key={book.id} /*value={selected}*/ onClick={(e) => setSelected(book.id)}> {book.name}</li>
    ));
  }
}

function BookList() {
  const [selected, setSelected] = useState(null);

  const {loading, error, data} = useQuery(getBooksQuery);

  return (
    <div>
      <ul id="book-list">
        {
          // data.books.map(book => (
          //   <li key={book.id} value={selected} onClick={(e) => setSelected(book.id)}> {book.name} </li>
          // ))
          displayBooks(loading, error, data, setSelected)
        }
      </ul>
      <BookDetails bookId={selected} />
    </div>
  );
}
  
  export default BookList;