//Movie model
const {Schema, model} = require('mongoose');

const schema = new Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String],
});

const Movie = model("Movie", schema)

module.exports = Movie