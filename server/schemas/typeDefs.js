const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Book {
    bookId: String!
    authors: [String]!
    description: String
    title: String
    image: String
    link: String
  }

  input bookInput {
    bookId: Int!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type bookResponse {
    success: Boolean
    book: Book
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(book: bookInput): bookResponse
    removeBook(bookId: ID!): Book
  }

`;

module.exports = typeDefs;