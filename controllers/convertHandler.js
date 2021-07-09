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
  this.getNum = function(input) {
    let result = input.match(/^[0-9]?.?[0-9]/);
    return result[0];
  };

  this.getUnit = function(input) {
    let result = input.match(/[a-z]+/g);
    return result[0];
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
