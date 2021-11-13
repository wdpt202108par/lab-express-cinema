const express = require('express');
const Movie = require('../models/Movie.model');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

//route movies
router.get('/movies', (req, res, next) => {
    Movie.find()
        .then(function(moviesFromDB){
            res.render('movies', {myMovies: moviesFromDB})
        })
        .catch(err => console.log(err))
        
});

router.get('/movie/:movieid', (req,res,next) => {
    Movie.findById(req.params.movieid)
        .then(function(movieFromDB){
            res.render('movie-details', {myMovie: movieFromDB})
        })
        .catch(err => console.log(err))
})


module.exports = router;
