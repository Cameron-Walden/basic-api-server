'use strict';

//https://expressjs.com/en/guide/routing.html
const express = require('express');
const Book = require('../models/book.js');

const data = require('../models/index.js');
const router = express.Router();


router.get('/book', getBooks);
router.get('/book/:id', getOneBook);
router.post('/book', createBook);
router.put('/book/:id', updateBook);
router.delete('/book/:id', deleteBook);

// app.get('/phrase', async (req, res) => {
//   let phraseData = await phrases.findAll();
//   res.send(phraseData);

async function getBooks(request, response) {
  const allBookData = await Book.findAll();
  response.status(200).send(allBookData);
}

async function getOneBook(request, response) {
  const id = request.params.id
  const singleBookData = await Book.findOne({
    where: {
      id: id
    }
  });
  response.status(200).send(singleBookData);
}

async function createBook(request, response) {
  const bookData = request.body;
  const createBookData = await Book.create(bookData);
  response.status(200).send(createBookData);
}

async function updateBook(request, response) {
  const id = request.params.id;
  const bookObject = request.body;
  const bookData = await data.book.findOne({
    where: {
      id: id
    }
  });
  const updatedBook = await bookData.update(bookObject);
  response.status(200).send(updatedBook)
}

async function deleteBook(request, response) {
  const id = request.params.id;
  const deletedBook = await Book.destroy({
    where: {
      id: id
    } 
  });
  response.status(200).send(deletedBook)
}


module.exports = router;
