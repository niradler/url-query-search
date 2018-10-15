'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getParam = exports.getParams = undefined;

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

exports.getParams = getParams;
exports.getParam = getParam;