'use strict';

const validator = require('../src/middleware/validator.js');

describe('Given validator', () => {
  describe('When it is called', () => {
    it('passes to next the function', async () => {
      let request = {
        param: {
          id: 1
        }
      }
      let response = {};
      let next = jest.fn();
    
      validator(request, response, next);
      expect(next).toHaveBeenCalled();
    });

    it('can throw an error', () => {
      let request = {
        param: {}
      }
      let response = {};
      let next = jest.fn();

      expect(() => validator(request, response, next)).toThrow(Error);
      expect(() => validator(request, response, next)).toThrow("no id");
    });
  });
});
