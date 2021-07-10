'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  let convertHandler = new ConvertHandler();

  app.route('/api/convert').get((req, res) => {
    let input = req.query.input;
    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);

    if (!initNum && !initUnit) {
      return res.send('invalid number and unit');
    } else if (!initNum) {
      return res.send('invalid number');
    } else if (!initUnit) {
      return res.send('invalid unit');
    } else {
      console.log("hello");
      let returnNum = convertHandler.convert(initNum, initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      let string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      if (initUnit === 'l') {
        initUnit = 'L';
      }
      if (returnUnit === 'l') {
        returnUnit = 'L';
      }
      return res.send({ initNum: parseFloat(initNum), initUnit, returnNum: parseFloat(returnNum), returnUnit, string });
    }
  });
};
