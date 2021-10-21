'use strict';

const { db } = require('../src/models/index.js');
const supertest = require('supertest');
const server = require('../src/server.js');

const request = supertest(server.server);

beforeAll( async () => {
  await db.sync();
});
 
afterAll(async () => {
  await db.drop();
});

describe('Testing our express server', () => {

  // 404 on a bad route
  it('should give a 404 on a bad route ', async () => {
    const response = await request.get('/badroute');
    expect(response.status).toBe(404);
  });

  // 404 on a bad method
  it('should give a 404 on a bad method', async () => {
    const response = await request.patch('/book');
    expect(response.status).toBe(404);
  });
  
  //The correct status codes and returned data for each REST route(movie/book)
  it('should respond with a 200 for GET /movie', async () => {
    const response = await request.get('/movie');
  expect(response.status).toBe(200);
  });


  it('should respond with a 200 for GET book', async () => {
    const response = await request.get('/book');
    expect(response.status).toBe(200);
  });
  
  // Create a record using POST(both movie and book)
  it('should respond with a 200 for POST /movie', async () => {
    const response = await request.post('/movie').send({
      title: 'A Nightmare on Elm Street',
      genre: 'horror',
    });
    expect(response.status).toBe(200);
    expect(response.body.title).toEqual('A Nightmare on Elm Street')
  });

  it('should respond with a 200 for POST on /book', async () => {
    const response = await request.post('/book').send({
      title: 'From Hell',
      author: 'Alan Moore',
    });
    expect(response.status).toBe(200);
    expect(response.body.title).toEqual('From Hell')
  });
  
  // Read a list of records using GET
  it('should respond with a 200 for GET /movie/:id', async () => {
    const response = await request.get('/movie/:id');
    expect(response.status).toBe(200);
    expect(response.body.title).toEqual('A Nightmare on Elm Street')
  });

  it('should respond with a 200 for GET on /book/:id', async () => {
    const response = await request.get('/book/:id');
    expect(response.status).toBe(200);
    expect(response.body.title).toEqual('From Hell');
  });

  // Update a record using PUT
  it('should respond with a 200 for PUT on /movie/:id', async () => {
    const response = await (await request.put('/movie/:id')).send({
      title: 'updating',
    });
    expect(response.status).toBe(200);
    expect(response.body.title).toEqual('updating')
  });

  it('should respond with a 200 for PUT on /book/:id', async () => {
    const response = await request.put('/book/:id').send({
      title: 'updating'
    });
    expect(response.status).toBe(200);
    expect(response.body.title).toEqual('updating')
  });

  // Destroy a record using DELETE
  it('should respond with a 200 for DELETE on /movie/:id', async () => {
    const response = await request.put('/movie/:id');
    expect(response.status).toBe(200);
  });

  it('should respond with a 200 for DELETE on /book/:id', async () => {
    const response = await request.put('/book/:id');
    expect(response.status).toBe(200);
  });
});