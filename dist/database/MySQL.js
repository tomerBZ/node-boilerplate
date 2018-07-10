'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MySQL = function MySQL() {
  _classCallCheck(this, MySQL);

  this.host = process.env.DB_HOST;
  this.user = process.env.DB_USER;
  this.password = process.env.DB_PASS;

  this.dbConnection = _mysql2.default.createPool({
    host: this.host,
    user: this.user,
    password: this.password,
    database: 'test'
  });
  return this.dbConnection;
}

/*  connect () {

    const dbConnection = mysql.createPool({
      host: this.host,
      user: this.user,
      password: this.password,
      database: 'test',
    })
    return dbConnection
    /!*dbConnection.query('SELECT 1 + 1 AS solution',
      (error, results, fields) => {
        if (error) throw error
        console.log('The solution is: ', results[0].solution)
      })*!/
    /!*dbConnection.connect((error) => {
        if (error) console.error('error connecting: ' + error.message)
        console.log('Connected to MySQL')
      })*!/
  }*/

;

exports.default = MySQL;