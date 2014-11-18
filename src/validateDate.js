'use strict';

var errorTypes = require('./errorTypes');

function validateDate(candidate, dataType) {
  var error = validateDate(candidate, dataType);
  if(error) return error;

  var date = Date.parse(candidate);
  if(date instanceof Date){
    return new errorTypes.DataTypeValidationError(candidate);
  }
}
exports.validateDate = validateDate;
