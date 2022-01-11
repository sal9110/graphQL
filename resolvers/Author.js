const Book = require("../models/book")
const Author = require("../models/author")

exports.Author = {
  books: async (parent, args) => await Book.find({ authorId: parent.id }),
}
