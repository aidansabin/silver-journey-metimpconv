const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function() {

  suite('Function convertHandler.getNum(input)', function() {

    test('Whole number input', function(done) {
      let input = '32L';
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });

    test('Decimal number input', function(done) {
      let input = '32.2L';
      assert.equal(convertHandler.getNum(input), 32.2);
      done();
    });

    test('Fractional input', function(done) {
      let input = '3/4L';
      assert.equal(convertHandler.getNum(input), 3/4);
      done();
    });

    test('Fractional input with decimal', function(done) {
      let input = '3.5/4L';
      assert.equal(convertHandler.getNum(input), 3.5/4);
      done();
    });

    test('Double fraction input', function(done) {
      let input = '3/2/3L';
      assert.equal(convertHandler.getNum(input), undefined);
      done();
    });

    test('No numerical input', function(done) {
      let input = 'L';
      assert.equal(convertHandler.getNum(input), 1);
      done();
    });
  });

  suite('Function convertHandler.getUnit(input)', function() {

    test('Valid unit input', function(done) {
      let input = '32L';
      assert.equal(convertHandler.getUnit(input), 'L');
      done();
    });

    test('Invalid unit input', function(done) {
      let input = '32Li';
      assert.equal(convertHandler.getUnit(input), undefined);
      done();
    });
  });

  suite('Function convertHandler.getReturnUnit(input)', function() {
    test('Correct return unit', function(done) {
      let input = 'L';
      assert.equal(convertHandler.getReturnUnit(input), 'gal');
      done();
    });
  });

  suite('Function convertHandler.spellOutUnit(input)', function() {
    test('Correct spelled-out string', function(done) {
      let input = 'L';
      assert.equal(convertHandler.spellOutUnit(input), 'liters');
      done();
    });
  });
});

/*
convertHandler should correctly convert gal to L.
convertHandler should correctly convert L to gal.
convertHandler should correctly convert mi to km.
convertHandler should correctly convert km to mi.
convertHandler should correctly convert lbs to kg.
convertHandler should correctly convert kg to lbs.
*/
