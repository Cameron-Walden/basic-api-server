'use strict';

require('dotenv').config();

//this connects us to the database
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';
const { Sequelize, DataTypes } = require('sequelize');
const bookModel = require('./book.js');
const movieModel = require('./movie.js')

const options = process.env.NODE_ENV === 'production'
  ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  }
  : {};


let sequelizeInstance = new Sequelize('sqlite:memory');
const bookTable = bookModel(sequelizeInstance, DataTypes);
const movieTable = movieModel(sequelizeInstance, DataTypes)

module.exports = {
  db: sequelizeInstance,
  book: bookTable,
  movie: movieTable,
}
