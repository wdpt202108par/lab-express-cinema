const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => { 
    console.log('page movie affichée');
    Movie.find()
    .then(function (movieFromDb){
        res.render('movies', {
            mymovies: movieFromDb
        })
    });

module.exports = router;
