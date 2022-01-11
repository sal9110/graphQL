const Book = require("../models/book")
const Author = require("../models/author")

exports.Book = {
  author: async (parent, args) => await Author.findById(parent.authorId),
}
