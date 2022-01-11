const { gql } = require("apollo-server-express")

exports.typeDefs = gql`
  type Query {
    book(id: ID!): Book
    author(id: ID!): Author
    books: [Book!]!
    authors: [Author!]!
  }
  type Author {
    id: ID!
    name: String!
    age: Int!
    books: [Book!]!
  }
  type Book {
    id: ID!
    name: String!
    genre: String!
    author: Author!
  }

  input AddBookInput {
    name: String!
    genre: String!
    authorId: ID!
  }
  input UpdateBookInput {
    id: ID!
    name: String
    genre: String
    authorId: ID
  }

  input AddAuthorInput {
    name: String!
    age: Int
  }

  input UpdateAuthorInput {
    id: ID!
    name: String
    age: Int
  }

  type Mutation {
    addBook(input: AddBookInput!): Book!
    updateBook(input: UpdateBookInput): Book
    deleteBook(id: ID!): Book
    addAuthor(input: AddAuthorInput!): Author!
    updateAuthor(input: UpdateAuthorInput): Author
    deleteAuthor(id: ID!): Author
  }
`
