import React, {useState} from "react";
import {useQuery, useMutation} from "@apollo/client";
import {getAuthorsQuery, addBookMutation, getBooksQuery} from "../queries/queries";

const displayAuthors = (loading, data) =>{
    if(loading){
        return( <option disabled>Loading authors</option> );
    }else{
        return data.authors.map(author =>{
            return (<option key={author.id} value={author.id}>{author.name}</option>)
        })
    }
}

const AddBook =() =>{
    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthorId] = useState('');
    const { loading, error, data } = useQuery(getAuthorsQuery);

    const [addBookMutationVar] = useMutation(addBookMutation);

    if (error) return `Error: ${error.message}`;
  
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name, genre, authorId);
        addBookMutationVar({
            variables: {
                name: name,
                genre: genre,
                authorId: authorId
            },
            refetchQueries: [{query: getBooksQuery}]
        });
    }
    return(
        <form id="add-book" onSubmit={handleSubmit}>
            <div className="field">
                <label className="label">Book name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="field">
                <label className="label">Genre:</label>
                <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)}  />
            </div>
            <div className="field">
                <label className="label">Author:</label>
                <select value={authorId} onChange={(e) => setAuthorId(e.target.value)} >
                    <option>Select author</option>
                    { displayAuthors(loading, data) }
                </select>
            </div>
            <button>+</button>
        </form>
    )
}
/*
function AddBook() {
    const { loading, error, data } = useQuery(getAuthorsQuery);
    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;
    console.log(data);
    return <form id="add-book">
        <div className="field">
          <label>Book name:</label>
          <input type="text"/>
        </div>
        
        <div className="field">
          <label>Genre:</label>
          <input type="text"/>
        </div>
    
        <div className="field">
          <label>Author:</label>
          <select>
            <option>Select Author</option>
            {
                data.authors.map(author => {
                return (<option key={author.id} value={author.id}>{author.name}</option>);
                })
            }
          </select>
        </div>
    
        <button>+</button>
    
      </form>
}
*/  
  
export default AddBook;
// export default useQuery(getAuthorsQuery, {name:"getAuthorQuery"});