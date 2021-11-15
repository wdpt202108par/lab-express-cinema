const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

//Get 'Movies Page'
router.get('/movies', (req, res, next) => { 
  Movie.find()
  .then(function (moviesFromDb) {
    res.render('movies', {
      mymovies: moviesFromDb
    })
  })
  .catch(err => console.log(err))
})

//Get 'Movie Details Page'
router.get('/movies/:movieId', (req, res, next) => { 
    Movie.findById(req.params.movieId)
    .then(function (movieFromDb) {
      res.render('movie-details', {
        mymovie: movieFromDb
      })
    })
    .catch(err => console.log(err))
  })

module.exports = router;
