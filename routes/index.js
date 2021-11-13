const express = require('express');
const router = express.Router();

const Movies = require('../models/Movie.model.js');
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET movies page */
router.get('/movies', function(req, res, next){
    Movies.find()
    .then(function (movieList){
        res.render('movies', { mymovie: movieList});
    })
    .catch(function (err){
        console.log("Error!");
    })
})

/*  iteration 4. Display movie Details 
movie/ :id */
router.get('/movies/:_id', function (req, res, next){
    const {movieId} = req.params._id;
    //console.log('the id from url is:', movieId);
    Movies.findById(req.params._id)
    .then (function (movieList){
        res.render('movie-details', {movieId: movieList});
    })
    .catch(function (err){
        console.log("Error! ID per movie not found");
    })
})

module.exports = router;
