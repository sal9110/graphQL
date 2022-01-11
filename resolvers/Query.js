const Book = require("../models/book")
const Author = require("../models/author")

exports.Query = {
  book: async (parent, args) => await Book.findById(args.id),
  author: async (parent, args) => await Author.findById(args.id),
  books: async (parent, args) => await Book.find({}),
  authors: async (parent, args) => await Author.find({}),
}
