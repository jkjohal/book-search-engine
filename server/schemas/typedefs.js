const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: string
    email: email
    savedBooks: [Book]
  }
  type Book {
    bookId: ID
    description: String
    link: String
    title: String
  }`;


module.exports = typeDefs;