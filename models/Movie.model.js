// models/Book.model.js

const { Schema, model } = require('mongoose');

const moviesSchema = new Schema(
  {
    title: String,
    director: String,
    stars: [],
    image: String,
    description: String,
    showtimes: []
  },
  {
    timestamps: true
  }
);

module.exports = model('Movie', moviesSchema);
