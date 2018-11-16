'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPathParams = exports.setParam = exports.getParam = exports.getParams = undefined;

require('url-search-params-polyfill');

var getParams = function getParams() {
  var search_params = new URLSearchParams(window.location.search);
  var params = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = search_params[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;

      params[i[0]] = i[1];
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return params;
};

var getParam = function getParam(name) {
  var search_params = new URLSearchParams(window.location.search);
  return search_params.get(name);
};

var setParam = function setParam(name, value, i, j) {
  var params = getParams();
  params[name] = value;
  var queryString = Object.keys(params).map(function (key) {
    return key + '=' + params[key];
  }).join('&');
  window.history.pushState(i, j || '', '?' + queryString);
  return params;
};

var getPathParams = function getPathParams(path) {
  var path_params = window.location.pathname.split('/').slice(1);
  var a_path = path.split('/');
  if (path[0] === "") {
    a_path = a_path.slice(1);
  }
  var obj = {};
  for (var i = 0; i < a_path.length; i++) {
    if (a_path[i] !== '*') obj[a_path[i]] = path_params[i];
  }
  return obj;
};

exports.getParams = getParams;
exports.getParam = getParam;
exports.setParam = setParam;
exports.getPathParams = getPathParams;