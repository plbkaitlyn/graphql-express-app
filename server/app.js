const express = require('express');
const { graphqlHTTP }  = require('express-graphql');
const schema  = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cross-origin requests
//allow backend server (express app - graphql) to receive requests from other server (frontend-react)
app.use(cors());

//connect to db
mongoose.connect('mongodb+srv://admin:admin123456798@cluster0.dlry5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
{ useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('Connected to database');
});

app.use('/graphql',graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});