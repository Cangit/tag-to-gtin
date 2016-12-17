const rfidGtin =  require('../tag-gtin.js');

const assert = require('assert');

describe('Tag-gtin', function() {
    describe('mod10control()', function() {
        it('should return correct control number', () => {
            const expected = 9;
            const actual = rfidGtin.mod10control('6747553');
            assert.equal(expected, actual);
        });
    });
});
