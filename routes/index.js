const Movie = require('../models/Movie.model');

const express = require('express');

const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET all movies */
router.get('/movies',function (req, res, next) {
    Movie.find()
        .then(function(moviesFromDb){
            res.render('movies',{
                movies: moviesFromDb
            })
        })
        .catch(err => console.log(err));
})  

/* GET each movie details */
router.get('/movies/:id',function (req, res, next){
    Movie.findById(req.params.id)
        .then(function(movieFromDb){
            res.render('movie-details',{
                movie: movieFromDb
            })
        })
        .catch(err => console.log(err));
})

module.exports = router;
