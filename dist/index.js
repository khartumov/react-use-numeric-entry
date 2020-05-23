'use strict';

var react = require('react');

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function useNumericEntry() {
  var _useState = react.useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      inputValue = _useState2[0],
      setValue = _useState2[1];

  var isNumeric = function isNumeric(val) {
    return /^\d+(\.\d+)?$/.test(val);
  };

  var onSetValue = function onSetValue(e) {
    var inputValue = e.target.value;
    var first = inputValue.slice(0, 1);
    var last = inputValue.substr(inputValue.length - 1);
    var rest = inputValue.slice(0, -1);

    if (!isNumeric(rest) || +first === 0) {
      setValue(inputValue);
      return;
    }

    switch (last.toUpperCase()) {
      case 'H':
        inputValue = Math.ceil(rest * 100);
        break;

      case 'K':
        inputValue = Math.ceil(rest * 1000);
        break;

      case 'M':
        inputValue = Math.ceil(rest * 1000000);
        break;

      case 'B':
        inputValue = Math.ceil(rest * 1000000000);
        break;

      case 'T':
        inputValue = Math.ceil(rest * 1000000000000);
        break;
    }

    setValue(inputValue);
  };

  return [inputValue, onSetValue];
}

module.exports = useNumericEntry;
//# sourceMappingURL=index.js.map
