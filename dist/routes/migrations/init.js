'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MySQL = require('../../database/MySQL');

var _MySQL2 = _interopRequireDefault(_MySQL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Init = function () {
  function Init() {
    _classCallCheck(this, Init);
  }

  _createClass(Init, [{
    key: 'index',
    value: function index() {
      var DB = new _MySQL2.default();
      DB.query('create database node_base', function (error, results, fields) {
        if (error) throw error;
        console.log('node_base schema has been created');
      });
    }
  }]);

  return Init;
}();

exports.default = Init;