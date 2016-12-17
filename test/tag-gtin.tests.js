import rfidGtin from '../tag-gtin.js';

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
});
