'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _HomeController = require('../http/controllers/HomeController');

var _HomeController2 = _interopRequireDefault(_HomeController);

var _UsersController = require('../http/controllers/UsersController');

var _UsersController2 = _interopRequireDefault(_UsersController);

var _init = require('./migrations/init');

var _init2 = _interopRequireDefault(_init);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var InitMigration = new _init2.default();
var UserController = new _UsersController2.default();
var HomeControllers = new _HomeController2.default();

router.get('/', HomeControllers.index);
router.get('/users', UserController.users);
router.post('/user/create', function (req, res) {
  console.log(req);
  var user = new User(req.body.name, req.body.username, req.body.email);
  res.json(user);
});

/*  Migrations  */
router.get('/migrate', InitMigration.index);

exports.default = router;