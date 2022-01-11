const Book = require("../models/book")
const Author = require("../models/author")

exports.Mutation = {
  addBook: async (parent, args) => {
    let newBook = new Book(args.input)
    return await newBook.save()
  },
  addAuthor: async (parent, args) => {
    let newAuthor = new Author(args.input)
    return await newAuthor.save()
  },
  updateBook: async (parent, args) => {
    const { id } = args.input
    return await Book.findByIdAndUpdate(id, args.input, { new: true })
  },
  deleteBook: async (parent, { id }) => {
    return await Book.findByIdAndRemove(id)
  },
  updateAuthor: async (parent, args) => {
    const { id } = args.input
    return await Author.findByIdAndUpdate(id, args.input, { new: true })
  },
  deleteAuthor: async (parent, { id }) => {
    const deleted = await Author.findByIdAndRemove(id)
    if (deleted) {
      await Book.deleteMany({ authorId: id })
      return deleted
    }
    return null
  },
}
