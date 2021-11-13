const mongoose = require("mongoose")
const schema = new mongoose.Schema({
    title: String,
    director: String,
    stars: Array,
    image: String,
    description: String,
    showtime: Array,

})
const Movie = mongoose.model("Movie",schema)
module.exports = Movie;