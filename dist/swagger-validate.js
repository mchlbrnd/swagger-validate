!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.swaggerValidate=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
'use strict';

function DataTypeValidationError(message){
  this.name = 'DataTypeValidationError';
  this.message = message || 'Invalid data type';
}
DataTypeValidationError.prototype = Object.create(Error.prototype);
DataTypeValidationError.prototype.constructor = DataTypeValidationError;
exports.DataTypeValidationError = DataTypeValidationError;

function NotAnIntegerError(value){
  this.name = 'NotAnIntegerError';
  this.message = '"' + value + '" is not an integer';
  this.value = value;
}
NotAnIntegerError.prototype = Object.create(DataTypeValidationError.prototype);
NotAnIntegerError.prototype.constructor = NotAnIntegerError;
exports.NotAnIntegerError = NotAnIntegerError;

function NotANumberError(value, actualType){
  this.name = 'NotANumberError';
  this.message = '"' + value + '" is not a number';
  if(actualType) this.message += ' (got a ' + actualType + ' instead)';

  this.value = value;
}
NotANumberError.prototype = Object.create(DataTypeValidationError.prototype);
NotANumberError.prototype.constructor = NotANumberError;
exports.NotANumberError = NotANumberError;

function NumberTooLargeError(value, max){
  this.name = 'NumberTooLargeError';
  this.message = '"' + value + '" is above the maximum of ' + max.toString();
  this.value = value;
}
NumberTooLargeError.prototype = Object.create(DataTypeValidationError.prototype);
NumberTooLargeError.prototype.constructor = NumberTooLargeError;
exports.NumberTooLargeError = NumberTooLargeError;

function NumberTooSmallError(value, max){
  this.name = 'NumberTooSmallError';
  this.message = '"' + value + '" is above the maximum of ' + max.toString();
  this.value = value;
}
NumberTooSmallError.prototype = Object.create(DataTypeValidationError.prototype);
NumberTooSmallError.prototype.constructor = NumberTooSmallError;
exports.NumberTooSmallError = NumberTooSmallError;

function NotABooleanError(value, actualType){
  this.name = 'NotABooleanError';
  this.message = '"' + value + '" is not a boolean';
  if(actualType) this.message += ' (got a ' + actualType + ' instead)';

  this.value = value;
}
NotABooleanError.prototype = Object.create(DataTypeValidationError.prototype);
NotABooleanError.prototype.constructor = NotABooleanError;
exports.NotABooleanError = NotABooleanError;

function NotAnArrayError(value, actualType){
  this.name = 'NotAnArrayError';
  this.message = '"' + value + '" is not an array';
  if(actualType) this.message += ' (got a ' + actualType + ' instead)';

  this.value = value;
}
NotAnArrayError.prototype = Object.create(DataTypeValidationError.prototype);
NotAnArrayError.prototype.constructor = NotAnArrayError;
exports.NotAnArrayError = NotAnArrayError;

function DuplicateInSetError(arr, dupes){
  this.name = 'DuplicateInSetError';
  this.message = 'Duplicates ("' + dupes.join('", "') + '") found in set: ["' + arr.join('", "') + '"';
  this.dupes = dupes;
  this.value = arr;
}
DuplicateInSetError.prototype = Object.create(DataTypeValidationError.prototype);
DuplicateInSetError.prototype.constructor = DuplicateInSetError;
exports.DuplicateInSetError = DuplicateInSetError;

function NotVoidError(value, actualType){
  this.name = 'NotVoidError';
  this.message = '"' + value + '" is not null or undefined';
  if(actualType) this.message += ' (got a ' + actualType + ' instead)';

  this.value = value;
}
NotVoidError.prototype = Object.create(DataTypeValidationError.prototype);
NotVoidError.prototype.constructor = NotVoidError;
exports.NotVoidError = NotVoidError;

function NotAStringError(value, actualType){
  this.name = 'NotAStringError';
  this.message = '"' + value + '" is not a string';
  if(actualType) this.message += ' (got a ' + actualType + ' instead)';

  this.value = value;
}
NotAStringError.prototype = Object.create(DataTypeValidationError.prototype);
NotAStringError.prototype.constructor = NotAStringError;
exports.NotAStringError = NotAStringError;

function StringNotInEnumError(value, acceptableValues){
  this.name = 'StringNotInEnumError';
  this.message = '"' + value + '" is not an acceptable value: "' + acceptableValues.join('", "') + '"';
 
  this.value = value;
}
StringNotInEnumError.prototype = Object.create(DataTypeValidationError.prototype);
StringNotInEnumError.prototype.constructor = StringNotInEnumError;
exports.StringNotInEnumError = StringNotInEnumError;


function ErrorsInArrayElementsError(errors){
  this.name = 'ErrorsInArrayElementsError';
  this.message = 'Errors in array elements:\n\t' + errors.join(',\n\t');
  this.errors = errors;
}
ErrorsInArrayElementsError.prototype = Object.create(DataTypeValidationError.prototype);
ErrorsInArrayElementsError.prototype.constructor = ErrorsInArrayElementsError;
exports.ErrorsInArrayElementsError = ErrorsInArrayElementsError;

function MissingValueError(){
  this.name = 'MissingValueError';
  
  this.message = 'This value is required but missing';
}
MissingValueError.prototype = Object.create(DataTypeValidationError.prototype);
MissingValueError.prototype.constructor = MissingValueError;
exports.MissingValueError = MissingValueError;

function ValidationError(specName, spec, error){
  this.name = 'ValidationError';
  this.specName = specName;
  this.spec = spec;
  this.error = error;

  this.message = specName + ' is invalid: ' + error.message;
}
ValidationError.prototype = Object.create(DataTypeValidationError.prototype);
ValidationError.prototype.constructor = ValidationError;
exports.ValidationError = ValidationError;

function ValidationErrors(value, specName, spec, errors){
  this.name = 'ValidationErrors';

  this.value = value;
  this.specName = specName;
  this.spec = spec;
  this.errors = errors || [];

  this.message = specName + ' is invalid';

  if(this.errors.length){
    this.message += ':\n\t' + this.errors.map(function(e){ return e.message; }).join('\n\t');
  }
}
ValidationErrors.prototype = Object.create(DataTypeValidationError.prototype);
ValidationErrors.prototype.constructor = ValidationErrors;
exports.ValidationErrors = ValidationErrors;

},{}],2:[function(_dereq_,module,exports){
exports.dataType = _dereq_('./validateDataType');
exports.model = _dereq_('./validateModel');
exports.operation = _dereq_('./validateOperation');
exports.array = _dereq_('./validateArray');
exports.errors = _dereq_('./errorTypes');

var primitives = _dereq_('./validatePrimitiveTypes');
exports.primitive = {
  integer: primitives.validateInteger,
  number: primitives.validateNumber,
  date: primitives.validateDate,
  string: primitives.validateString,
  boolean: primitives.validateBoolean,
  void: primitives.validateVoid,
  file: primitives.validateFile
};

},{"./errorTypes":1,"./validateArray":3,"./validateDataType":4,"./validateModel":5,"./validateOperation":6,"./validatePrimitiveTypes":7}],3:[function(_dereq_,module,exports){
'use strict';

var errorTypes = _dereq_('./errorTypes'),
  validate = _dereq_('./index');

function validateArray(candidate, dataType, models){
  if(!Array.isArray(candidate)){
    return new errorTypes.NotAnArrayError(candidate, typeof candidate);
  }

  var items = dataType.items;

  if(dataType.uniqueItems){
    var dupeCheck = [];
    var dupes = candidate.filter(function(value){
      var signature;
      if(items.$ref){
        signature = JSON.stringify(value);
      } else {
        signature = value;
      }
      if(dupeCheck.indexOf(signature) !== -1){
        return true;
      } else {
        dupeCheck.push(signature);
        return false;
      }
    });

    if(dupes.length) {
      return new errorTypes.DuplicateInSetError(candidate, dupes);
    }
  }

  var errors;

  if(items.$ref){
    var model = models[items.$ref];
    errors = candidate.filter(function(value){
      return validate.model(value, model, models);
    });
  } else {
    errors = candidate.filter(function(value){
      return validate.dataType(value, items, models);
    });
  }

  if(errors.length){
    return new errorTypes.ErrorsInArrayElementsError(errors);
  }
}
module.exports = validateArray;
},{"./errorTypes":1,"./index":2}],4:[function(_dereq_,module,exports){
'use strict';

var validate = _dereq_('./index');

function validateDataType(candidate, dataType, models){
  models = models || {};

  var type = dataType.type || dataType.dataType || dataType.$ref;

  switch(type){
    case 'integer':
      return validate.primitive.integer(candidate, dataType);
    case 'number':
      return validate.primitive.number(candidate, dataType);
    case 'string':
      return validate.primitive.string(candidate, dataType);
    case 'boolean':
      return validate.primitive.boolean(candidate);
    case 'array':
      return validate.array(candidate, dataType, models);
    case 'void':
      return validate.primitive.void(candidate);
    case 'File':
      return validate.primitive.file();
    case 'date':
      return validate.primitive.date(candidate, dataType);
    default:
      // Assumed to be complex model
      var model = models[type];
      return validate.model(candidate, model, models);
  }
}
module.exports = validateDataType;

},{"./index":2}],5:[function(_dereq_,module,exports){
'use strict';

var errorTypes = _dereq_('./errorTypes'),
  ValidationError = errorTypes.ValidationError,
  ValidationErrors = errorTypes.ValidationErrors,
  MissingValueError = errorTypes.MissingValueError,
  validate = _dereq_('./index');

// http://stackoverflow.com/questions/122102/what-is-the-most-efficient-way-to-clone-an-object
function clone(obj){
    if(obj === null || obj === undefined || typeof obj !== 'object') return obj;

    if(Array.isArray(obj)) return obj.slice();

    var temp = {};

    for(var key in obj)
        temp[key] = clone(obj[key]);
    return temp;
}

function addInhertiedProperties(model, modelId, models){
  var parent;

  Object.keys(models).some(function(modelName){
    var potentialParent = models[modelName];
    if (!potentialParent.subTypes) return;

    if(potentialParent.subTypes.indexOf(modelId) !== -1){
      parent = potentialParent;
      return true;
    }
  });

  if(!parent) return;

  for(var propertyName in parent.properties){
    model.properties[propertyName] = parent.properties[propertyName];
  }
  
  if(parent.required) model.required = model.required.concat(parent.required);

  addInhertiedProperties(model, parent.id, models);
}

function validateModel(candidate, model, models){
  if(candidate === null || typeof candidate !== 'object'){
    return new ValidationErrors(candidate, model);
  }

  models = models || {};

  model = clone(model);
  if(!model.required) model.required = [];
  addInhertiedProperties(model, model.id, models);

  var errors = [];

  model.required.forEach(function(propertyName){
    if (candidate[propertyName] !== undefined) return;

    var property = model.properties[propertyName];
    var error = new MissingValueError();
    errors.push(new ValidationError(propertyName, property, error));
  });

  Object.keys(candidate).forEach(function(propertyName){
    var property = model.properties[propertyName];
    
    if(property === undefined) return;

    var error = validate.dataType(candidate[propertyName], property, models);
    if(error){
      errors.push(new ValidationError(propertyName, property, error));
    }
  });
  
  if(errors.length){
    return new ValidationErrors(candidate, model.id, model, errors);
  }
}
module.exports = validateModel;
},{"./errorTypes":1,"./index":2}],6:[function(_dereq_,module,exports){
'use strict';

var errorTypes = _dereq_('./errorTypes'),
  ValidationError = errorTypes.ValidationError,
  ValidationErrors = errorTypes.ValidationErrors,
  MissingValueError = errorTypes.MissingValueError,
  validate = _dereq_('./index');

function validateOperation(candidate, operation, models){
  var errors = [];

  var presentParams = (operation.parameters || []).filter(function(param){
    if (candidate[param.name] !== undefined) return true;

    if (param.required) {
      var error = new MissingValueError();
      errors.push(new ValidationError(param.name, param, error));
    }

    return false;
  });

  presentParams.forEach(function(param){
    var error = validate.dataType(candidate[param.name], param, models);
    if(error){
      errors.push(new ValidationError(param.name, param, error));
    }
  });

  if(errors.length){
    return new ValidationErrors(candidate, operation.nickname, operation, errors);
  }
}
module.exports = validateOperation;

},{"./errorTypes":1,"./index":2}],7:[function(_dereq_,module,exports){
'use strict';

var errorTypes = _dereq_('./errorTypes');

function validateDate(candidate) {
  var date = new Date(candidate);

  if(!(date instanceof Date)) {
    return new errorTypes.DataTypeValidationError(candidate);
  }
}
exports.validateDate = validateDate;

function validateInteger(candidate, dataType){
  var error = validateNumber(candidate, dataType);
  if(error) return error;

  if(candidate % 1){
    return new errorTypes.NotAnIntegerError(candidate);
  }
}
exports.validateInteger = validateInteger;

function validateNumber(candidate, dataType){
  if(!(typeof candidate === 'number' || candidate instanceof Number) || isNaN(candidate)){
    return new errorTypes.NotANumberError(candidate, typeof candidate);
  }

  if((dataType.minimum !== undefined) && candidate < parseInt(dataType.minimum, 10)){
    return new errorTypes.NumberTooSmallError(candidate, dataType.minimum);
  }

  if((dataType.maximum !== undefined) && candidate > parseInt(dataType.maximum, 10)){
    return new errorTypes.NumberTooLargeError(candidate, dataType.maximum);
  }
}
exports.validateNumber = validateNumber;

function validateBoolean(candidate){
  if(!(typeof candidate === 'boolean' || candidate instanceof Boolean)){
    return new errorTypes.NotABooleanError(candidate, typeof candidate);
  }
}
exports.validateBoolean = validateBoolean;


function validateVoid(candidate){
  if(candidate != null){
    return new errorTypes.NotVoidError(candidate, typeof candidate);
  }
}
exports.validateVoid = validateVoid;

function validateFile(){
  // Not sure how to check this, since anything could qualify as 'File'.
}
exports.validateFile = validateFile;

function validateString(candidate, dataType){
  if(typeof candidate !== 'string' && !(candidate instanceof String)){
    return new errorTypes.NotAStringError(candidate, typeof candidate);
  }

  if('enum' in dataType){
    if(dataType.enum.indexOf(candidate) === -1) {
      return new errorTypes.StringNotInEnumError(candidate, dataType.enum);
    }
  }
}
exports.validateString = validateString;

},{"./errorTypes":1}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21pY2hhZWwvc3JjL2dpdGh1Yi9mb3Jrcy9zd2FnZ2VyLXZhbGlkYXRlL25vZGVfbW9kdWxlcy9ib2lsZXJwbGF0ZS1ndWxwL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9taWNoYWVsL3NyYy9naXRodWIvZm9ya3Mvc3dhZ2dlci12YWxpZGF0ZS9zcmMvZXJyb3JUeXBlcy5qcyIsIi9ob21lL21pY2hhZWwvc3JjL2dpdGh1Yi9mb3Jrcy9zd2FnZ2VyLXZhbGlkYXRlL3NyYy9pbmRleC5qcyIsIi9ob21lL21pY2hhZWwvc3JjL2dpdGh1Yi9mb3Jrcy9zd2FnZ2VyLXZhbGlkYXRlL3NyYy92YWxpZGF0ZUFycmF5LmpzIiwiL2hvbWUvbWljaGFlbC9zcmMvZ2l0aHViL2ZvcmtzL3N3YWdnZXItdmFsaWRhdGUvc3JjL3ZhbGlkYXRlRGF0YVR5cGUuanMiLCIvaG9tZS9taWNoYWVsL3NyYy9naXRodWIvZm9ya3Mvc3dhZ2dlci12YWxpZGF0ZS9zcmMvdmFsaWRhdGVNb2RlbC5qcyIsIi9ob21lL21pY2hhZWwvc3JjL2dpdGh1Yi9mb3Jrcy9zd2FnZ2VyLXZhbGlkYXRlL3NyYy92YWxpZGF0ZU9wZXJhdGlvbi5qcyIsIi9ob21lL21pY2hhZWwvc3JjL2dpdGh1Yi9mb3Jrcy9zd2FnZ2VyLXZhbGlkYXRlL3NyYy92YWxpZGF0ZVByaW1pdGl2ZVR5cGVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIERhdGFUeXBlVmFsaWRhdGlvbkVycm9yKG1lc3NhZ2Upe1xuICB0aGlzLm5hbWUgPSAnRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlIHx8ICdJbnZhbGlkIGRhdGEgdHlwZSc7XG59XG5EYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSk7XG5EYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBEYXRhVHlwZVZhbGlkYXRpb25FcnJvcjtcbmV4cG9ydHMuRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IgPSBEYXRhVHlwZVZhbGlkYXRpb25FcnJvcjtcblxuZnVuY3Rpb24gTm90QW5JbnRlZ2VyRXJyb3IodmFsdWUpe1xuICB0aGlzLm5hbWUgPSAnTm90QW5JbnRlZ2VyRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnXCInICsgdmFsdWUgKyAnXCIgaXMgbm90IGFuIGludGVnZXInO1xuICB0aGlzLnZhbHVlID0gdmFsdWU7XG59XG5Ob3RBbkludGVnZXJFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XG5Ob3RBbkludGVnZXJFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBOb3RBbkludGVnZXJFcnJvcjtcbmV4cG9ydHMuTm90QW5JbnRlZ2VyRXJyb3IgPSBOb3RBbkludGVnZXJFcnJvcjtcblxuZnVuY3Rpb24gTm90QU51bWJlckVycm9yKHZhbHVlLCBhY3R1YWxUeXBlKXtcbiAgdGhpcy5uYW1lID0gJ05vdEFOdW1iZXJFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBub3QgYSBudW1iZXInO1xuICBpZihhY3R1YWxUeXBlKSB0aGlzLm1lc3NhZ2UgKz0gJyAoZ290IGEgJyArIGFjdHVhbFR5cGUgKyAnIGluc3RlYWQpJztcblxuICB0aGlzLnZhbHVlID0gdmFsdWU7XG59XG5Ob3RBTnVtYmVyRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xuTm90QU51bWJlckVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE5vdEFOdW1iZXJFcnJvcjtcbmV4cG9ydHMuTm90QU51bWJlckVycm9yID0gTm90QU51bWJlckVycm9yO1xuXG5mdW5jdGlvbiBOdW1iZXJUb29MYXJnZUVycm9yKHZhbHVlLCBtYXgpe1xuICB0aGlzLm5hbWUgPSAnTnVtYmVyVG9vTGFyZ2VFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBhYm92ZSB0aGUgbWF4aW11bSBvZiAnICsgbWF4LnRvU3RyaW5nKCk7XG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbn1cbk51bWJlclRvb0xhcmdlRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xuTnVtYmVyVG9vTGFyZ2VFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBOdW1iZXJUb29MYXJnZUVycm9yO1xuZXhwb3J0cy5OdW1iZXJUb29MYXJnZUVycm9yID0gTnVtYmVyVG9vTGFyZ2VFcnJvcjtcblxuZnVuY3Rpb24gTnVtYmVyVG9vU21hbGxFcnJvcih2YWx1ZSwgbWF4KXtcbiAgdGhpcy5uYW1lID0gJ051bWJlclRvb1NtYWxsRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnXCInICsgdmFsdWUgKyAnXCIgaXMgYWJvdmUgdGhlIG1heGltdW0gb2YgJyArIG1heC50b1N0cmluZygpO1xuICB0aGlzLnZhbHVlID0gdmFsdWU7XG59XG5OdW1iZXJUb29TbWFsbEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcbk51bWJlclRvb1NtYWxsRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTnVtYmVyVG9vU21hbGxFcnJvcjtcbmV4cG9ydHMuTnVtYmVyVG9vU21hbGxFcnJvciA9IE51bWJlclRvb1NtYWxsRXJyb3I7XG5cbmZ1bmN0aW9uIE5vdEFCb29sZWFuRXJyb3IodmFsdWUsIGFjdHVhbFR5cGUpe1xuICB0aGlzLm5hbWUgPSAnTm90QUJvb2xlYW5FcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBub3QgYSBib29sZWFuJztcbiAgaWYoYWN0dWFsVHlwZSkgdGhpcy5tZXNzYWdlICs9ICcgKGdvdCBhICcgKyBhY3R1YWxUeXBlICsgJyBpbnN0ZWFkKSc7XG5cbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xufVxuTm90QUJvb2xlYW5FcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XG5Ob3RBQm9vbGVhbkVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE5vdEFCb29sZWFuRXJyb3I7XG5leHBvcnRzLk5vdEFCb29sZWFuRXJyb3IgPSBOb3RBQm9vbGVhbkVycm9yO1xuXG5mdW5jdGlvbiBOb3RBbkFycmF5RXJyb3IodmFsdWUsIGFjdHVhbFR5cGUpe1xuICB0aGlzLm5hbWUgPSAnTm90QW5BcnJheUVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ1wiJyArIHZhbHVlICsgJ1wiIGlzIG5vdCBhbiBhcnJheSc7XG4gIGlmKGFjdHVhbFR5cGUpIHRoaXMubWVzc2FnZSArPSAnIChnb3QgYSAnICsgYWN0dWFsVHlwZSArICcgaW5zdGVhZCknO1xuXG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbn1cbk5vdEFuQXJyYXlFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XG5Ob3RBbkFycmF5RXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gTm90QW5BcnJheUVycm9yO1xuZXhwb3J0cy5Ob3RBbkFycmF5RXJyb3IgPSBOb3RBbkFycmF5RXJyb3I7XG5cbmZ1bmN0aW9uIER1cGxpY2F0ZUluU2V0RXJyb3IoYXJyLCBkdXBlcyl7XG4gIHRoaXMubmFtZSA9ICdEdXBsaWNhdGVJblNldEVycm9yJztcbiAgdGhpcy5tZXNzYWdlID0gJ0R1cGxpY2F0ZXMgKFwiJyArIGR1cGVzLmpvaW4oJ1wiLCBcIicpICsgJ1wiKSBmb3VuZCBpbiBzZXQ6IFtcIicgKyBhcnIuam9pbignXCIsIFwiJykgKyAnXCInO1xuICB0aGlzLmR1cGVzID0gZHVwZXM7XG4gIHRoaXMudmFsdWUgPSBhcnI7XG59XG5EdXBsaWNhdGVJblNldEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcbkR1cGxpY2F0ZUluU2V0RXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRHVwbGljYXRlSW5TZXRFcnJvcjtcbmV4cG9ydHMuRHVwbGljYXRlSW5TZXRFcnJvciA9IER1cGxpY2F0ZUluU2V0RXJyb3I7XG5cbmZ1bmN0aW9uIE5vdFZvaWRFcnJvcih2YWx1ZSwgYWN0dWFsVHlwZSl7XG4gIHRoaXMubmFtZSA9ICdOb3RWb2lkRXJyb3InO1xuICB0aGlzLm1lc3NhZ2UgPSAnXCInICsgdmFsdWUgKyAnXCIgaXMgbm90IG51bGwgb3IgdW5kZWZpbmVkJztcbiAgaWYoYWN0dWFsVHlwZSkgdGhpcy5tZXNzYWdlICs9ICcgKGdvdCBhICcgKyBhY3R1YWxUeXBlICsgJyBpbnN0ZWFkKSc7XG5cbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xufVxuTm90Vm9pZEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcbk5vdFZvaWRFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBOb3RWb2lkRXJyb3I7XG5leHBvcnRzLk5vdFZvaWRFcnJvciA9IE5vdFZvaWRFcnJvcjtcblxuZnVuY3Rpb24gTm90QVN0cmluZ0Vycm9yKHZhbHVlLCBhY3R1YWxUeXBlKXtcbiAgdGhpcy5uYW1lID0gJ05vdEFTdHJpbmdFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBub3QgYSBzdHJpbmcnO1xuICBpZihhY3R1YWxUeXBlKSB0aGlzLm1lc3NhZ2UgKz0gJyAoZ290IGEgJyArIGFjdHVhbFR5cGUgKyAnIGluc3RlYWQpJztcblxuICB0aGlzLnZhbHVlID0gdmFsdWU7XG59XG5Ob3RBU3RyaW5nRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xuTm90QVN0cmluZ0Vycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE5vdEFTdHJpbmdFcnJvcjtcbmV4cG9ydHMuTm90QVN0cmluZ0Vycm9yID0gTm90QVN0cmluZ0Vycm9yO1xuXG5mdW5jdGlvbiBTdHJpbmdOb3RJbkVudW1FcnJvcih2YWx1ZSwgYWNjZXB0YWJsZVZhbHVlcyl7XG4gIHRoaXMubmFtZSA9ICdTdHJpbmdOb3RJbkVudW1FcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdcIicgKyB2YWx1ZSArICdcIiBpcyBub3QgYW4gYWNjZXB0YWJsZSB2YWx1ZTogXCInICsgYWNjZXB0YWJsZVZhbHVlcy5qb2luKCdcIiwgXCInKSArICdcIic7XG4gXG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbn1cblN0cmluZ05vdEluRW51bUVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRGF0YVR5cGVWYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlKTtcblN0cmluZ05vdEluRW51bUVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFN0cmluZ05vdEluRW51bUVycm9yO1xuZXhwb3J0cy5TdHJpbmdOb3RJbkVudW1FcnJvciA9IFN0cmluZ05vdEluRW51bUVycm9yO1xuXG5cbmZ1bmN0aW9uIEVycm9yc0luQXJyYXlFbGVtZW50c0Vycm9yKGVycm9ycyl7XG4gIHRoaXMubmFtZSA9ICdFcnJvcnNJbkFycmF5RWxlbWVudHNFcnJvcic7XG4gIHRoaXMubWVzc2FnZSA9ICdFcnJvcnMgaW4gYXJyYXkgZWxlbWVudHM6XFxuXFx0JyArIGVycm9ycy5qb2luKCcsXFxuXFx0Jyk7XG4gIHRoaXMuZXJyb3JzID0gZXJyb3JzO1xufVxuRXJyb3JzSW5BcnJheUVsZW1lbnRzRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xuRXJyb3JzSW5BcnJheUVsZW1lbnRzRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRXJyb3JzSW5BcnJheUVsZW1lbnRzRXJyb3I7XG5leHBvcnRzLkVycm9yc0luQXJyYXlFbGVtZW50c0Vycm9yID0gRXJyb3JzSW5BcnJheUVsZW1lbnRzRXJyb3I7XG5cbmZ1bmN0aW9uIE1pc3NpbmdWYWx1ZUVycm9yKCl7XG4gIHRoaXMubmFtZSA9ICdNaXNzaW5nVmFsdWVFcnJvcic7XG4gIFxuICB0aGlzLm1lc3NhZ2UgPSAnVGhpcyB2YWx1ZSBpcyByZXF1aXJlZCBidXQgbWlzc2luZyc7XG59XG5NaXNzaW5nVmFsdWVFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XG5NaXNzaW5nVmFsdWVFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBNaXNzaW5nVmFsdWVFcnJvcjtcbmV4cG9ydHMuTWlzc2luZ1ZhbHVlRXJyb3IgPSBNaXNzaW5nVmFsdWVFcnJvcjtcblxuZnVuY3Rpb24gVmFsaWRhdGlvbkVycm9yKHNwZWNOYW1lLCBzcGVjLCBlcnJvcil7XG4gIHRoaXMubmFtZSA9ICdWYWxpZGF0aW9uRXJyb3InO1xuICB0aGlzLnNwZWNOYW1lID0gc3BlY05hbWU7XG4gIHRoaXMuc3BlYyA9IHNwZWM7XG4gIHRoaXMuZXJyb3IgPSBlcnJvcjtcblxuICB0aGlzLm1lc3NhZ2UgPSBzcGVjTmFtZSArICcgaXMgaW52YWxpZDogJyArIGVycm9yLm1lc3NhZ2U7XG59XG5WYWxpZGF0aW9uRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShEYXRhVHlwZVZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUpO1xuVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFZhbGlkYXRpb25FcnJvcjtcbmV4cG9ydHMuVmFsaWRhdGlvbkVycm9yID0gVmFsaWRhdGlvbkVycm9yO1xuXG5mdW5jdGlvbiBWYWxpZGF0aW9uRXJyb3JzKHZhbHVlLCBzcGVjTmFtZSwgc3BlYywgZXJyb3JzKXtcbiAgdGhpcy5uYW1lID0gJ1ZhbGlkYXRpb25FcnJvcnMnO1xuXG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgdGhpcy5zcGVjTmFtZSA9IHNwZWNOYW1lO1xuICB0aGlzLnNwZWMgPSBzcGVjO1xuICB0aGlzLmVycm9ycyA9IGVycm9ycyB8fCBbXTtcblxuICB0aGlzLm1lc3NhZ2UgPSBzcGVjTmFtZSArICcgaXMgaW52YWxpZCc7XG5cbiAgaWYodGhpcy5lcnJvcnMubGVuZ3RoKXtcbiAgICB0aGlzLm1lc3NhZ2UgKz0gJzpcXG5cXHQnICsgdGhpcy5lcnJvcnMubWFwKGZ1bmN0aW9uKGUpeyByZXR1cm4gZS5tZXNzYWdlOyB9KS5qb2luKCdcXG5cXHQnKTtcbiAgfVxufVxuVmFsaWRhdGlvbkVycm9ycy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKERhdGFUeXBlVmFsaWRhdGlvbkVycm9yLnByb3RvdHlwZSk7XG5WYWxpZGF0aW9uRXJyb3JzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFZhbGlkYXRpb25FcnJvcnM7XG5leHBvcnRzLlZhbGlkYXRpb25FcnJvcnMgPSBWYWxpZGF0aW9uRXJyb3JzO1xuIiwiZXhwb3J0cy5kYXRhVHlwZSA9IHJlcXVpcmUoJy4vdmFsaWRhdGVEYXRhVHlwZScpO1xuZXhwb3J0cy5tb2RlbCA9IHJlcXVpcmUoJy4vdmFsaWRhdGVNb2RlbCcpO1xuZXhwb3J0cy5vcGVyYXRpb24gPSByZXF1aXJlKCcuL3ZhbGlkYXRlT3BlcmF0aW9uJyk7XG5leHBvcnRzLmFycmF5ID0gcmVxdWlyZSgnLi92YWxpZGF0ZUFycmF5Jyk7XG5leHBvcnRzLmVycm9ycyA9IHJlcXVpcmUoJy4vZXJyb3JUeXBlcycpO1xuXG52YXIgcHJpbWl0aXZlcyA9IHJlcXVpcmUoJy4vdmFsaWRhdGVQcmltaXRpdmVUeXBlcycpO1xuZXhwb3J0cy5wcmltaXRpdmUgPSB7XG4gIGludGVnZXI6IHByaW1pdGl2ZXMudmFsaWRhdGVJbnRlZ2VyLFxuICBudW1iZXI6IHByaW1pdGl2ZXMudmFsaWRhdGVOdW1iZXIsXG4gIGRhdGU6IHByaW1pdGl2ZXMudmFsaWRhdGVEYXRlLFxuICBzdHJpbmc6IHByaW1pdGl2ZXMudmFsaWRhdGVTdHJpbmcsXG4gIGJvb2xlYW46IHByaW1pdGl2ZXMudmFsaWRhdGVCb29sZWFuLFxuICB2b2lkOiBwcmltaXRpdmVzLnZhbGlkYXRlVm9pZCxcbiAgZmlsZTogcHJpbWl0aXZlcy52YWxpZGF0ZUZpbGVcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlcnJvclR5cGVzID0gcmVxdWlyZSgnLi9lcnJvclR5cGVzJyksXG4gIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9pbmRleCcpO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUFycmF5KGNhbmRpZGF0ZSwgZGF0YVR5cGUsIG1vZGVscyl7XG4gIGlmKCFBcnJheS5pc0FycmF5KGNhbmRpZGF0ZSkpe1xuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5Ob3RBbkFycmF5RXJyb3IoY2FuZGlkYXRlLCB0eXBlb2YgY2FuZGlkYXRlKTtcbiAgfVxuXG4gIHZhciBpdGVtcyA9IGRhdGFUeXBlLml0ZW1zO1xuXG4gIGlmKGRhdGFUeXBlLnVuaXF1ZUl0ZW1zKXtcbiAgICB2YXIgZHVwZUNoZWNrID0gW107XG4gICAgdmFyIGR1cGVzID0gY2FuZGlkYXRlLmZpbHRlcihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICB2YXIgc2lnbmF0dXJlO1xuICAgICAgaWYoaXRlbXMuJHJlZil7XG4gICAgICAgIHNpZ25hdHVyZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNpZ25hdHVyZSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgaWYoZHVwZUNoZWNrLmluZGV4T2Yoc2lnbmF0dXJlKSAhPT0gLTEpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGR1cGVDaGVjay5wdXNoKHNpZ25hdHVyZSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmKGR1cGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG5ldyBlcnJvclR5cGVzLkR1cGxpY2F0ZUluU2V0RXJyb3IoY2FuZGlkYXRlLCBkdXBlcyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGVycm9ycztcblxuICBpZihpdGVtcy4kcmVmKXtcbiAgICB2YXIgbW9kZWwgPSBtb2RlbHNbaXRlbXMuJHJlZl07XG4gICAgZXJyb3JzID0gY2FuZGlkYXRlLmZpbHRlcihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICByZXR1cm4gdmFsaWRhdGUubW9kZWwodmFsdWUsIG1vZGVsLCBtb2RlbHMpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGVycm9ycyA9IGNhbmRpZGF0ZS5maWx0ZXIoZnVuY3Rpb24odmFsdWUpe1xuICAgICAgcmV0dXJuIHZhbGlkYXRlLmRhdGFUeXBlKHZhbHVlLCBpdGVtcywgbW9kZWxzKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmKGVycm9ycy5sZW5ndGgpe1xuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5FcnJvcnNJbkFycmF5RWxlbWVudHNFcnJvcihlcnJvcnMpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlQXJyYXk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL2luZGV4Jyk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0YVR5cGUoY2FuZGlkYXRlLCBkYXRhVHlwZSwgbW9kZWxzKXtcbiAgbW9kZWxzID0gbW9kZWxzIHx8IHt9O1xuXG4gIHZhciB0eXBlID0gZGF0YVR5cGUudHlwZSB8fCBkYXRhVHlwZS5kYXRhVHlwZSB8fCBkYXRhVHlwZS4kcmVmO1xuXG4gIHN3aXRjaCh0eXBlKXtcbiAgICBjYXNlICdpbnRlZ2VyJzpcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5wcmltaXRpdmUuaW50ZWdlcihjYW5kaWRhdGUsIGRhdGFUeXBlKTtcbiAgICBjYXNlICdudW1iZXInOlxuICAgICAgcmV0dXJuIHZhbGlkYXRlLnByaW1pdGl2ZS5udW1iZXIoY2FuZGlkYXRlLCBkYXRhVHlwZSk7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5wcmltaXRpdmUuc3RyaW5nKGNhbmRpZGF0ZSwgZGF0YVR5cGUpO1xuICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgcmV0dXJuIHZhbGlkYXRlLnByaW1pdGl2ZS5ib29sZWFuKGNhbmRpZGF0ZSk7XG4gICAgY2FzZSAnYXJyYXknOlxuICAgICAgcmV0dXJuIHZhbGlkYXRlLmFycmF5KGNhbmRpZGF0ZSwgZGF0YVR5cGUsIG1vZGVscyk7XG4gICAgY2FzZSAndm9pZCc6XG4gICAgICByZXR1cm4gdmFsaWRhdGUucHJpbWl0aXZlLnZvaWQoY2FuZGlkYXRlKTtcbiAgICBjYXNlICdGaWxlJzpcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5wcmltaXRpdmUuZmlsZSgpO1xuICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgcmV0dXJuIHZhbGlkYXRlLnByaW1pdGl2ZS5kYXRlKGNhbmRpZGF0ZSwgZGF0YVR5cGUpO1xuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBBc3N1bWVkIHRvIGJlIGNvbXBsZXggbW9kZWxcbiAgICAgIHZhciBtb2RlbCA9IG1vZGVsc1t0eXBlXTtcbiAgICAgIHJldHVybiB2YWxpZGF0ZS5tb2RlbChjYW5kaWRhdGUsIG1vZGVsLCBtb2RlbHMpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlRGF0YVR5cGU7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlcnJvclR5cGVzID0gcmVxdWlyZSgnLi9lcnJvclR5cGVzJyksXG4gIFZhbGlkYXRpb25FcnJvciA9IGVycm9yVHlwZXMuVmFsaWRhdGlvbkVycm9yLFxuICBWYWxpZGF0aW9uRXJyb3JzID0gZXJyb3JUeXBlcy5WYWxpZGF0aW9uRXJyb3JzLFxuICBNaXNzaW5nVmFsdWVFcnJvciA9IGVycm9yVHlwZXMuTWlzc2luZ1ZhbHVlRXJyb3IsXG4gIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9pbmRleCcpO1xuXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEyMjEwMi93aGF0LWlzLXRoZS1tb3N0LWVmZmljaWVudC13YXktdG8tY2xvbmUtYW4tb2JqZWN0XG5mdW5jdGlvbiBjbG9uZShvYmope1xuICAgIGlmKG9iaiA9PT0gbnVsbCB8fCBvYmogPT09IHVuZGVmaW5lZCB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JykgcmV0dXJuIG9iajtcblxuICAgIGlmKEFycmF5LmlzQXJyYXkob2JqKSkgcmV0dXJuIG9iai5zbGljZSgpO1xuXG4gICAgdmFyIHRlbXAgPSB7fTtcblxuICAgIGZvcih2YXIga2V5IGluIG9iailcbiAgICAgICAgdGVtcFtrZXldID0gY2xvbmUob2JqW2tleV0pO1xuICAgIHJldHVybiB0ZW1wO1xufVxuXG5mdW5jdGlvbiBhZGRJbmhlcnRpZWRQcm9wZXJ0aWVzKG1vZGVsLCBtb2RlbElkLCBtb2RlbHMpe1xuICB2YXIgcGFyZW50O1xuXG4gIE9iamVjdC5rZXlzKG1vZGVscykuc29tZShmdW5jdGlvbihtb2RlbE5hbWUpe1xuICAgIHZhciBwb3RlbnRpYWxQYXJlbnQgPSBtb2RlbHNbbW9kZWxOYW1lXTtcbiAgICBpZiAoIXBvdGVudGlhbFBhcmVudC5zdWJUeXBlcykgcmV0dXJuO1xuXG4gICAgaWYocG90ZW50aWFsUGFyZW50LnN1YlR5cGVzLmluZGV4T2YobW9kZWxJZCkgIT09IC0xKXtcbiAgICAgIHBhcmVudCA9IHBvdGVudGlhbFBhcmVudDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYoIXBhcmVudCkgcmV0dXJuO1xuXG4gIGZvcih2YXIgcHJvcGVydHlOYW1lIGluIHBhcmVudC5wcm9wZXJ0aWVzKXtcbiAgICBtb2RlbC5wcm9wZXJ0aWVzW3Byb3BlcnR5TmFtZV0gPSBwYXJlbnQucHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xuICB9XG4gIFxuICBpZihwYXJlbnQucmVxdWlyZWQpIG1vZGVsLnJlcXVpcmVkID0gbW9kZWwucmVxdWlyZWQuY29uY2F0KHBhcmVudC5yZXF1aXJlZCk7XG5cbiAgYWRkSW5oZXJ0aWVkUHJvcGVydGllcyhtb2RlbCwgcGFyZW50LmlkLCBtb2RlbHMpO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZU1vZGVsKGNhbmRpZGF0ZSwgbW9kZWwsIG1vZGVscyl7XG4gIGlmKGNhbmRpZGF0ZSA9PT0gbnVsbCB8fCB0eXBlb2YgY2FuZGlkYXRlICE9PSAnb2JqZWN0Jyl7XG4gICAgcmV0dXJuIG5ldyBWYWxpZGF0aW9uRXJyb3JzKGNhbmRpZGF0ZSwgbW9kZWwpO1xuICB9XG5cbiAgbW9kZWxzID0gbW9kZWxzIHx8IHt9O1xuXG4gIG1vZGVsID0gY2xvbmUobW9kZWwpO1xuICBpZighbW9kZWwucmVxdWlyZWQpIG1vZGVsLnJlcXVpcmVkID0gW107XG4gIGFkZEluaGVydGllZFByb3BlcnRpZXMobW9kZWwsIG1vZGVsLmlkLCBtb2RlbHMpO1xuXG4gIHZhciBlcnJvcnMgPSBbXTtcblxuICBtb2RlbC5yZXF1aXJlZC5mb3JFYWNoKGZ1bmN0aW9uKHByb3BlcnR5TmFtZSl7XG4gICAgaWYgKGNhbmRpZGF0ZVtwcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWQpIHJldHVybjtcblxuICAgIHZhciBwcm9wZXJ0eSA9IG1vZGVsLnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcbiAgICB2YXIgZXJyb3IgPSBuZXcgTWlzc2luZ1ZhbHVlRXJyb3IoKTtcbiAgICBlcnJvcnMucHVzaChuZXcgVmFsaWRhdGlvbkVycm9yKHByb3BlcnR5TmFtZSwgcHJvcGVydHksIGVycm9yKSk7XG4gIH0pO1xuXG4gIE9iamVjdC5rZXlzKGNhbmRpZGF0ZSkuZm9yRWFjaChmdW5jdGlvbihwcm9wZXJ0eU5hbWUpe1xuICAgIHZhciBwcm9wZXJ0eSA9IG1vZGVsLnByb3BlcnRpZXNbcHJvcGVydHlOYW1lXTtcbiAgICBcbiAgICBpZihwcm9wZXJ0eSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cbiAgICB2YXIgZXJyb3IgPSB2YWxpZGF0ZS5kYXRhVHlwZShjYW5kaWRhdGVbcHJvcGVydHlOYW1lXSwgcHJvcGVydHksIG1vZGVscyk7XG4gICAgaWYoZXJyb3Ipe1xuICAgICAgZXJyb3JzLnB1c2gobmV3IFZhbGlkYXRpb25FcnJvcihwcm9wZXJ0eU5hbWUsIHByb3BlcnR5LCBlcnJvcikpO1xuICAgIH1cbiAgfSk7XG4gIFxuICBpZihlcnJvcnMubGVuZ3RoKXtcbiAgICByZXR1cm4gbmV3IFZhbGlkYXRpb25FcnJvcnMoY2FuZGlkYXRlLCBtb2RlbC5pZCwgbW9kZWwsIGVycm9ycyk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVNb2RlbDsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBlcnJvclR5cGVzID0gcmVxdWlyZSgnLi9lcnJvclR5cGVzJyksXG4gIFZhbGlkYXRpb25FcnJvciA9IGVycm9yVHlwZXMuVmFsaWRhdGlvbkVycm9yLFxuICBWYWxpZGF0aW9uRXJyb3JzID0gZXJyb3JUeXBlcy5WYWxpZGF0aW9uRXJyb3JzLFxuICBNaXNzaW5nVmFsdWVFcnJvciA9IGVycm9yVHlwZXMuTWlzc2luZ1ZhbHVlRXJyb3IsXG4gIHZhbGlkYXRlID0gcmVxdWlyZSgnLi9pbmRleCcpO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZU9wZXJhdGlvbihjYW5kaWRhdGUsIG9wZXJhdGlvbiwgbW9kZWxzKXtcbiAgdmFyIGVycm9ycyA9IFtdO1xuXG4gIHZhciBwcmVzZW50UGFyYW1zID0gKG9wZXJhdGlvbi5wYXJhbWV0ZXJzIHx8IFtdKS5maWx0ZXIoZnVuY3Rpb24ocGFyYW0pe1xuICAgIGlmIChjYW5kaWRhdGVbcGFyYW0ubmFtZV0gIT09IHVuZGVmaW5lZCkgcmV0dXJuIHRydWU7XG5cbiAgICBpZiAocGFyYW0ucmVxdWlyZWQpIHtcbiAgICAgIHZhciBlcnJvciA9IG5ldyBNaXNzaW5nVmFsdWVFcnJvcigpO1xuICAgICAgZXJyb3JzLnB1c2gobmV3IFZhbGlkYXRpb25FcnJvcihwYXJhbS5uYW1lLCBwYXJhbSwgZXJyb3IpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuXG4gIHByZXNlbnRQYXJhbXMuZm9yRWFjaChmdW5jdGlvbihwYXJhbSl7XG4gICAgdmFyIGVycm9yID0gdmFsaWRhdGUuZGF0YVR5cGUoY2FuZGlkYXRlW3BhcmFtLm5hbWVdLCBwYXJhbSwgbW9kZWxzKTtcbiAgICBpZihlcnJvcil7XG4gICAgICBlcnJvcnMucHVzaChuZXcgVmFsaWRhdGlvbkVycm9yKHBhcmFtLm5hbWUsIHBhcmFtLCBlcnJvcikpO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYoZXJyb3JzLmxlbmd0aCl7XG4gICAgcmV0dXJuIG5ldyBWYWxpZGF0aW9uRXJyb3JzKGNhbmRpZGF0ZSwgb3BlcmF0aW9uLm5pY2tuYW1lLCBvcGVyYXRpb24sIGVycm9ycyk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGVPcGVyYXRpb247XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlcnJvclR5cGVzID0gcmVxdWlyZSgnLi9lcnJvclR5cGVzJyk7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZShjYW5kaWRhdGUpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZShjYW5kaWRhdGUpO1xuXG4gIGlmKCEoZGF0ZSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgcmV0dXJuIG5ldyBlcnJvclR5cGVzLkRhdGFUeXBlVmFsaWRhdGlvbkVycm9yKGNhbmRpZGF0ZSk7XG4gIH1cbn1cbmV4cG9ydHMudmFsaWRhdGVEYXRlID0gdmFsaWRhdGVEYXRlO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZUludGVnZXIoY2FuZGlkYXRlLCBkYXRhVHlwZSl7XG4gIHZhciBlcnJvciA9IHZhbGlkYXRlTnVtYmVyKGNhbmRpZGF0ZSwgZGF0YVR5cGUpO1xuICBpZihlcnJvcikgcmV0dXJuIGVycm9yO1xuXG4gIGlmKGNhbmRpZGF0ZSAlIDEpe1xuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5Ob3RBbkludGVnZXJFcnJvcihjYW5kaWRhdGUpO1xuICB9XG59XG5leHBvcnRzLnZhbGlkYXRlSW50ZWdlciA9IHZhbGlkYXRlSW50ZWdlcjtcblxuZnVuY3Rpb24gdmFsaWRhdGVOdW1iZXIoY2FuZGlkYXRlLCBkYXRhVHlwZSl7XG4gIGlmKCEodHlwZW9mIGNhbmRpZGF0ZSA9PT0gJ251bWJlcicgfHwgY2FuZGlkYXRlIGluc3RhbmNlb2YgTnVtYmVyKSB8fCBpc05hTihjYW5kaWRhdGUpKXtcbiAgICByZXR1cm4gbmV3IGVycm9yVHlwZXMuTm90QU51bWJlckVycm9yKGNhbmRpZGF0ZSwgdHlwZW9mIGNhbmRpZGF0ZSk7XG4gIH1cblxuICBpZigoZGF0YVR5cGUubWluaW11bSAhPT0gdW5kZWZpbmVkKSAmJiBjYW5kaWRhdGUgPCBwYXJzZUludChkYXRhVHlwZS5taW5pbXVtLCAxMCkpe1xuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5OdW1iZXJUb29TbWFsbEVycm9yKGNhbmRpZGF0ZSwgZGF0YVR5cGUubWluaW11bSk7XG4gIH1cblxuICBpZigoZGF0YVR5cGUubWF4aW11bSAhPT0gdW5kZWZpbmVkKSAmJiBjYW5kaWRhdGUgPiBwYXJzZUludChkYXRhVHlwZS5tYXhpbXVtLCAxMCkpe1xuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5OdW1iZXJUb29MYXJnZUVycm9yKGNhbmRpZGF0ZSwgZGF0YVR5cGUubWF4aW11bSk7XG4gIH1cbn1cbmV4cG9ydHMudmFsaWRhdGVOdW1iZXIgPSB2YWxpZGF0ZU51bWJlcjtcblxuZnVuY3Rpb24gdmFsaWRhdGVCb29sZWFuKGNhbmRpZGF0ZSl7XG4gIGlmKCEodHlwZW9mIGNhbmRpZGF0ZSA9PT0gJ2Jvb2xlYW4nIHx8IGNhbmRpZGF0ZSBpbnN0YW5jZW9mIEJvb2xlYW4pKXtcbiAgICByZXR1cm4gbmV3IGVycm9yVHlwZXMuTm90QUJvb2xlYW5FcnJvcihjYW5kaWRhdGUsIHR5cGVvZiBjYW5kaWRhdGUpO1xuICB9XG59XG5leHBvcnRzLnZhbGlkYXRlQm9vbGVhbiA9IHZhbGlkYXRlQm9vbGVhbjtcblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVZvaWQoY2FuZGlkYXRlKXtcbiAgaWYoY2FuZGlkYXRlICE9IG51bGwpe1xuICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5Ob3RWb2lkRXJyb3IoY2FuZGlkYXRlLCB0eXBlb2YgY2FuZGlkYXRlKTtcbiAgfVxufVxuZXhwb3J0cy52YWxpZGF0ZVZvaWQgPSB2YWxpZGF0ZVZvaWQ7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlRmlsZSgpe1xuICAvLyBOb3Qgc3VyZSBob3cgdG8gY2hlY2sgdGhpcywgc2luY2UgYW55dGhpbmcgY291bGQgcXVhbGlmeSBhcyAnRmlsZScuXG59XG5leHBvcnRzLnZhbGlkYXRlRmlsZSA9IHZhbGlkYXRlRmlsZTtcblxuZnVuY3Rpb24gdmFsaWRhdGVTdHJpbmcoY2FuZGlkYXRlLCBkYXRhVHlwZSl7XG4gIGlmKHR5cGVvZiBjYW5kaWRhdGUgIT09ICdzdHJpbmcnICYmICEoY2FuZGlkYXRlIGluc3RhbmNlb2YgU3RyaW5nKSl7XG4gICAgcmV0dXJuIG5ldyBlcnJvclR5cGVzLk5vdEFTdHJpbmdFcnJvcihjYW5kaWRhdGUsIHR5cGVvZiBjYW5kaWRhdGUpO1xuICB9XG5cbiAgaWYoJ2VudW0nIGluIGRhdGFUeXBlKXtcbiAgICBpZihkYXRhVHlwZS5lbnVtLmluZGV4T2YoY2FuZGlkYXRlKSA9PT0gLTEpIHtcbiAgICAgIHJldHVybiBuZXcgZXJyb3JUeXBlcy5TdHJpbmdOb3RJbkVudW1FcnJvcihjYW5kaWRhdGUsIGRhdGFUeXBlLmVudW0pO1xuICAgIH1cbiAgfVxufVxuZXhwb3J0cy52YWxpZGF0ZVN0cmluZyA9IHZhbGlkYXRlU3RyaW5nO1xuIl19
(2)
});
