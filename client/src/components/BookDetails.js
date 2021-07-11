import React from "react";
import {useQuery} from "@apollo/client";
import {getBookDetailQuery} from "../queries/queries";

const displayBookDetails = (data) => {
    const {book} = data;
    if (book) {
        return(
            <div>
                <h2>{book.name}</h2>
                <p>{book.genre}</p>
                <p>{book.author.name}</p>
                <p>All books by this author:</p>
                <ul className="other-books">
                    {
                        book.author.books.map(item => {
                            return <li key={item.id} value={item.id}>{item.name}</li>
                        })
                    }
                </ul>
            </div>
        );
    } else {
        return(
            <div>No book selected...</div>
        );
    }
}

  function BookDetails({bookId}) {
    const {loading, error, data} = useQuery(getBookDetailQuery, {
        // options: data => {
        //     return {
                variables: {
                    id: bookId
                }
            }
        // }
    // }
    );
    console.log(data);
    if (loading) return <div>Loading book details...</div>;
    if (error) return <p>Error: error.message</p> ;
    return (
      <div id="book-details">
        <p>Output book details here</p>
        {displayBookDetails(data)} <hr/>
      </div>
    );
  }
  
  export default BookDetails;