'use strict';

const express = require('express');
const app = express();

app.use(express.json());


//comment all of this out to get tests to run
// const notFoundErrorHandler = require('./error-handlers/404.js');
// const unexpectedErrorHandler = require('./error-handlers/500.js');

// const bookRoute = require('./routes/book.js');
// const movieRoute = require('./routes/movie.js');

// const logger = require('./middleware/logger.js')

// app.get('/', (request, response) => {
//   response.status(200).send('This is a test route');
// });

// app.use('/book', bookRoute);
// app.use('/movie', movieRoute);

// app.use('*', notFoundErrorHandler);
// app.use(unexpectedErrorHandler);

// app.use(logger);

module.exports = {
  server: app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log(`Running on PORT ${PORT}`);
    });
  }
}