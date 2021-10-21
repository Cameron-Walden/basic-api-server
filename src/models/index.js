'use strict';

require('dotenv').config();

//this connects us to the database
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';
// const sequelize = require('sequelize');
const { Sequelize, DataTypes } = require('sequelize');
// const bookModel = require('./book.js');
// const movieModel = require('./movie.js')

// const options = process.env.NODE_ENV === 'production'
//   ? {
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false,
//       }
//     }
//   }
//   : {};


const sequelizeInstance = new Sequelize('sqlite:memory');
// const bookTable = bookModel(sequelizeInstance, Datatypes);
// const movieTable = movieModel(sequelizeInstance, Datatypes)

module.exports = {
  db: sequelizeInstance,
  // book: bookTable,
  // movie: movieTable,
}