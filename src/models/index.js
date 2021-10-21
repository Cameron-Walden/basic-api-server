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


const sequelizeInstance = new Sequelize(DATABASE_URL);
// const bookTable = bookModel(sequelize, Datatypes);
// const movieTable = movieModel(sequelize, Datatypes)

module.exports = {
  db: sequelizeInstance,
  // book: bookTable,
  // movie: movieTable,
}