// import logo from './logo.svg';
// import './App.css';
//import { ApolloProvider } from 'react-apollo'; 
// import ApolloClient from 'apollo-boost';
// import { ApolloClient, ApolloProvider } from '@​apollo/client';
// import { ApolloClient, ApolloProvider } from '@apollo/client';

// import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from '@apollo/client';

// import fetch from 'node-fetch';
// import { createHttpLink } from 'apollo-link-http';

//react-apollo: help react understand apollo
//ApolloProvider: wraps our application and inject data we receive from the server into our app

//components
import BookList from './components/BookList';
import AddBook from './components/AddBook';

// const link = createHttpLink({ uri: '/graphql', fetch: fetch });

//apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', //making requests to this endpoint from the app
  cache: new InMemoryCache()
});

function App() {
  return (
    // get data from the endpoint and inject it into whatever is inside ApolloProvider
     <ApolloProvider client={client}> 
      <div id="main">
        <h1>Ninja's Reading List</h1>
        <BookList/>
        
        <AddBook/>
      </div>
    </ApolloProvider>
  );
}

export default App;
