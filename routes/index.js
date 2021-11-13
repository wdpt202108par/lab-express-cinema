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

module.exports = router;
