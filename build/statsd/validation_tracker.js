'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _validation_trackerJs = require('../validation_tracker.js');

var _validation_trackerJs2 = _interopRequireDefault(_validation_trackerJs);

var StatsdValidationTracker = (function (_ValidationTracker) {
  function StatsdValidationTracker(rippledPubKey, statsdClient) {
    _classCallCheck(this, StatsdValidationTracker);

    _get(Object.getPrototypeOf(StatsdValidationTracker.prototype), 'constructor', this).call(this, rippledPubKey);
    this.client = statsdClient;
  }

  _inherits(StatsdValidationTracker, _ValidationTracker);

  _createClass(StatsdValidationTracker, [{
    key: 'onValidation',

    // @override
    value: function onValidation(entry) {
      this.client.increment(entry.public_key, 1);
      console.log('sent increment to graphite for', entry.public_key);
    }
  }]);

  return StatsdValidationTracker;
})(_validation_trackerJs2['default']);

exports['default'] = StatsdValidationTracker;
module.exports = exports['default'];