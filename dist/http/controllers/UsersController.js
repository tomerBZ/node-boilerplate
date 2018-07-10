'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ControllerInterface2 = require('../../interfaces/ControllerInterface');

var _ControllerInterface3 = _interopRequireDefault(_ControllerInterface2);

var _User = require('../../models/User');

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UsersController = function (_ControllerInterface) {
  _inherits(UsersController, _ControllerInterface);

  function UsersController() {
    _classCallCheck(this, UsersController);

    return _possibleConstructorReturn(this, (UsersController.__proto__ || Object.getPrototypeOf(UsersController)).call(this));
  }

  _createClass(UsersController, [{
    key: 'index',
    value: function index(req, res, next) {
      var users = [new _User2.default('James Coonce', 'jcoonce', 'none@none.com'), new _User2.default('Bob Coonce', 'bcoonce', 'none@none.com'), new _User2.default('Euri', 'euri', 'none@none.com'), new _User2.default('Norman', 'jcoonce', 'none@none.com')];
      res.json(users);
    }
  }, {
    key: 'users',
    value: function users(req, res, next) {
      var users = [new _User2.default('James Coonce', 'jcoonce', 'none@none.com'), new _User2.default('Norman', 'jcoonce', 'none@none.com'), new _User2.default('Euri', 'euri', 'none@none.com')];
      res.json(users);
    }
  }]);

  return UsersController;
}(_ControllerInterface3.default);

exports.default = UsersController;