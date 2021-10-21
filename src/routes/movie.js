'use strict';

//https://expressjs.com/en/guide/routing.html
const express = require('express');
const Movie = require('../models/movie.js');

const data = require('../models/index.js');
const router = express.Router();


router.get('/movie', getMovie);
router.get('/movie/:id', getOneMovie);
router.post('/movie', createMovie);
router.put('/movie/:id', updateMovie);
router.delete('/movie/:id', deleteMovie);

// app.get('/phrase', async (req, res) => {
//   let phraseData = await phrases.findAll();
//   res.send(phraseData);

async function getMovie(request, response) {
  const allMovieData = await Movie.findAll();
  response.status(200).send(allMovieData);
}

async function getOneMovie(request, response) {
  const id = request.params.id
  const singleMovieData = await Movie.findOne({
    where: {
      id: id
    }
  });
  response.status(200).send(singleMovieData);
}

async function createMovie(request, response) {
  const movieData = request.body;
  const createMovieData = await Movie.create(movieData);
  response.status(200).send(createMovieData);
}

async function updateMovie(request, response) {
  const id = request.params.id;
  const movieObject = request.body;
  const movieData = await data.movie.findOne({
    where: {
      id: id
    }
  });
  const updatedMovie = await movieData.update(movieObject);
  response.status(200).send(updatedMovie)
}

async function deleteMovie(request, response) {
  const id = request.params.id;
  const deletedMovie= await Movie.destroy({
    where: {
      id: id
    } 
  });
  response.status(200).send(deletedMovie)
}

module.exports = router;