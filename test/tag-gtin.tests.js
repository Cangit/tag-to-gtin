// import rfidGtin from '../tag-gtin.js';

const rfidGtin = require('../tag-gtin.js');
const assert = require('assert');

describe('Tag-gtin', () => {
  describe('mod10control()', () => {
    describe('should return correct control number with', () => {
      it('string literal', () => {
        const expected = 9;
        const actual = rfidGtin.mod10control('6747553');
        assert.equal(expected, actual);
      });

      it('numeric value', () => {
        const expected = 9;
        const actual = rfidGtin.mod10control(6747553);
        assert.equal(expected, actual);
      });
    });
  });

  describe('tagToGtin', () => {
    describe('should create gtin tag when feeded with rfid tag', () => {
      it('tag string', (done) => {
        rfidGtin.tagToGtin('3035E8BF60548AED2276206E', function (gtin) {
          const expected = '8007640865718';
          if (expected === gtin) done();
          else done(new Error('expected: ' + expected + ', got: ' + gtin));
        });
      });
    });
  });
});
