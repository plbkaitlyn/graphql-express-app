import {gql} from "@apollo/client";

const getBooksQuery = gql`
{
    books {
        name
        id
    }
}
`
const getAuthorsQuery = gql`
{
    authors {
        name
        id
    }
}
`
const addBookMutation = gql`
 mutation($name:String!, $genre:String!, $authorId: ID!) {
    addBook(name:$name, genre:$genre, authorId:$authorId) {
        name
        genre
        id
    }
}
`

const getBookDetailQuery = gql`
    query($id: ID) {
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    id
                    name
                    genre
                }
            }
        }
    }
`

export {getBooksQuery, getAuthorsQuery, addBookMutation, getBookDetailQuery};