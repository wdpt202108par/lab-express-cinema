const { Schema, model } = require('mongoose');

const movieSchema = new Schema(
    {
    title: String,
    director: String,
    stars:[String],
    image:String,
    description: String,
    showtimes: [String]
    },
    {
    timestamps: true // created time , updated time
    }
    );

    module.exports = model('Movie', movieSchema);