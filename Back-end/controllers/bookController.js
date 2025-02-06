const Book = require("../models/bookModel");

const addBook = async (req, res) => {
  try {
    const { title, author, genre, pages, status, dateStarted, dateFinished } =
      req.body;

    if (!title || !author) {
      return res.status(400).json({ message: "Title and author are required" });
    }

    const book = new Book({
      user: req.user.id,
      title,
      author,
      genre,
      pages,
      status,
      dateStarted,
      dateFinished,
    });

    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.find({ user: req.user.id }).sort({
      createdAt: -1,
    });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    if (book.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    res.json(book);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    if (book.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const { title, author, genre, pages, status, dateStarted, dateFinished } =
      req.body;
    book.title = title || book.title;
    book.author = author || book.author;
    book.genre = genre || book.genre;
    book.pages = pages || book.pages;
    book.status = status || book.status;
    book.dateStarted = dateStarted || book.dateStarted;
    book.dateFinished = dateFinished || book.dateFinished;

    const updatedBook = await book.save();
    res.json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    if (book.user.toString() !== req.user.id) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await book.deleteOne();
    res.json({ message: "Book removed" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { addBook, getBooks, getBookById, updateBook, deleteBook };
