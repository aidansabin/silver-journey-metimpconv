function ConvertHandler() {
  const unitPhrases = {
    "mi": "miles",
    "km": "kilometers",
    "gal": "gallons",
    "L": "liters",
    "kg": "kilograms",
    "lbs": "pounds"
  }
  const unitPairs = {
    "mi": "km",
    "km": "mi",
    "gal": "L",
    "L": "gal",
    "kg": "lbs",
    "lbs": "kg"
  }

  this.checkFraction = function(input) {
    if (input[0].split('/').length === 2) {
      return true;
    } else if (input[0].split('/').length > 2) {
      return undefined;
    } else {
      return false;
    }
  }

  this.getNum = function(input) {
    let result = input.match(/[.\d\/]+/g) || ['1'];
    if (this.checkFraction(result) === undefined) {
      return undefined;
    } else if (this.checkFraction(result)) {
      let fraction = result[0].split('/');
      return fraction[0] / fraction[1];
    } else {
      return result[0];
    }
  };

  this.getUnit = function(input) {
    let result = input.match(/[a-z]+/ig);
    if (unitPhrases.hasOwnProperty(result[0])) {
      return result[0];
    } else {
      return undefined;
    }
  };

  this.getReturnUnit = function(initUnit) {
    let result = unitPairs[initUnit];
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result = unitPhrases[unit];
    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch(initUnit.toString()) {
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
    }
    return result.toFixed(5);
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = initNum + " " + this.spellOutUnit(initUnit) + " converts to " + returnNum + " " + this.spellOutUnit(returnUnit);
    return result;
  };

}

module.exports = ConvertHandler;
