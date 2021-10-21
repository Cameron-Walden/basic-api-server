'use strict';

module.exports = (request, response) => {
  response.status(404).send({
    error: 404,
    message: 'Not Found',
  });
}