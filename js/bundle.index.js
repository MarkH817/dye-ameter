webpackJsonp([0],{

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Palette = exports.Color = undefined;

var _Color = __webpack_require__(28);

var _Color2 = _interopRequireDefault(_Color);

var _Palette = __webpack_require__(71);

var _Palette2 = _interopRequireDefault(_Palette);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Color = _Color2.default;
exports.Palette = _Palette2.default;

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Color = function (_Component) {
  _inherits(Color, _Component);

  function Color() {
    _classCallCheck(this, Color);

    return _possibleConstructorReturn(this, (Color.__proto__ || Object.getPrototypeOf(Color)).apply(this, arguments));
  }

  _createClass(Color, [{
    key: 'render',
    value: function render() {
      var bgStyle = {
        backgroundColor: '#' + this.props.value
      };

      var textStyle = {
        backgroundColor: 'rgba(255, 255, 255, .6)',
        margin: '.25em',
        padding: '.125em .5'
      };

      return _react2.default.createElement(
        'button',
        { style: bgStyle },
        _react2.default.createElement(
          'section',
          { style: textStyle },
          '#',
          this.props.value.toUpperCase()
        )
      );
    }
  }]);

  return Color;
}(_react.Component);

exports.default = Color;

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _App = __webpack_require__(40);

var _App2 = _interopRequireDefault(_App);

var _utils = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = [{
  id: 0,
  title: 'Autumn Werewolf',
  colors: ['D3061E', 'E1EAF2', '992D18', 'F46E00', '3F033D']
}, {
  id: 1,
  title: 'Lovely Thing',
  colors: ['080F2B', '132F3A', '6ED79F', 'E3D7C1', 'DA3C6C']
}, {
  id: 2,
  title: 'Headache',
  colors: ['655643', '80BCA3', 'F6F7BD', 'E6AC27', 'BF4D28']
}];

_utils.db.load('palettes').then(function (result) {
  if (result === null) {
    _utils.db.save('palettes', defaults);
  }
  (0, _reactDom.render)(_react2.default.createElement(_App2.default, null), document.getElementById('root'));
});

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _containers = __webpack_require__(69);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.HashRouter,
        null,
        _react2.default.createElement(
          'div',
          { className: 'col-sm-12 col-md-12 col-lg-10 col-lg-offset-1' },
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _containers.Home }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/new', component: _containers.NewPalette }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/edit/:id', component: _containers.EditPalette }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/delete/:id', component: _containers.RemovePalette })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.About = exports.RemovePalette = exports.EditPalette = exports.NewPalette = exports.Home = undefined;

var _Home = __webpack_require__(70);

var _Home2 = _interopRequireDefault(_Home);

var _NewPalette = __webpack_require__(74);

var _NewPalette2 = _interopRequireDefault(_NewPalette);

var _EditPalette = __webpack_require__(75);

var _EditPalette2 = _interopRequireDefault(_EditPalette);

var _RemovePalette = __webpack_require__(76);

var _RemovePalette2 = _interopRequireDefault(_RemovePalette);

var _About = __webpack_require__(77);

var _About2 = _interopRequireDefault(_About);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Home = _Home2.default;
exports.NewPalette = _NewPalette2.default;
exports.EditPalette = _EditPalette2.default;
exports.RemovePalette = _RemovePalette2.default;
exports.About = _About2.default;

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = exports.clipboard = undefined;

var _clipboard = __webpack_require__(72);

var clipboard = _interopRequireWildcard(_clipboard);

var _db = __webpack_require__(73);

var db = _interopRequireWildcard(_db);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.clipboard = clipboard;
exports.db = db;

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _components = __webpack_require__(27);

var _utils = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.state = {
      palettes: []
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      _utils.db.loadAllPalettes().then(function (palettes) {
        // No palettes available
        if (!palettes) {
          return;
        }

        _this2.setState({
          palettes: palettes
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var palettes = this.state.palettes.map(function (item) {
        return _react2.default.createElement(_components.Palette, { key: item.id, id: item.id, title: item.title, colors: item.colors, showControls: true });
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouterDom.Link,
          { style: { float: 'right' }, className: 'button', to: '/new' },
          'Create New Palette'
        ),
        _react2.default.createElement(
          'h2',
          null,
          'Home'
        ),
        _react2.default.createElement(
          'div',
          { style: { clear: 'both' } },
          palettes
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _Color = __webpack_require__(28);

var _Color2 = _interopRequireDefault(_Color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Palette = function (_Component) {
  _inherits(Palette, _Component);

  function Palette() {
    _classCallCheck(this, Palette);

    return _possibleConstructorReturn(this, (Palette.__proto__ || Object.getPrototypeOf(Palette)).apply(this, arguments));
  }

  _createClass(Palette, [{
    key: 'render',
    value: function render() {
      var colors = this.props.colors.map(function (color, index) {
        return _react2.default.createElement(_Color2.default, { key: index, value: color });
      });

      var editUrl = '/edit/' + this.props.id;
      var deleteUrl = '/delete/' + this.props.id;
      var controls = null;

      if (this.props.showControls) {
        controls = _react2.default.createElement(
          'p',
          { className: 'align-right' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'button', to: editUrl },
            'Edit'
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { className: 'button', to: deleteUrl },
            'Delete'
          )
        );
      }

      return _react2.default.createElement(
        'section',
        { className: 'palette card fluid' },
        _react2.default.createElement(
          'h3',
          null,
          this.props.title
        ),
        _react2.default.createElement(
          'section',
          { className: 'button-group' },
          colors
        ),
        controls
      );
    }
  }]);

  return Palette;
}(_react.Component);

exports.default = Palette;

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
  * Reads from clipboard
  * TODO: Fix or scrap this
  */

var read = exports.read = function () {
  var _ref = _asyncToGenerator(function* (inputId) {
    var inputElement = document.getElementById(inputId);
    inputElement.style.display = 'block';

    var lastActive = document.activeElement;

    var result = null;
    inputElement.value = '';
    inputElement.select();

    if (document.execCommand('paste')) {
      result = inputElement.value;
      inputElement.value = '';
    }

    lastActive.focus();
    inputElement.style.display = 'none';

    if (!result) {
      throw new Error('Could not read from clipboard');
    }

    return result;
  });

  return function read(_x) {
    return _ref.apply(this, arguments);
  };
}();

/**
  * Writes to clipboard
  */


var write = exports.write = function () {
  var _ref2 = _asyncToGenerator(function* (inputId, value) {
    var inputElement = document.getElementById(inputId);
    inputElement.style.display = 'block';

    var lastActive = document.activeElement;

    var success = false;
    inputElement.value = value;
    inputElement.select();

    if (document.execCommand('copy')) {
      success = true;
      inputElement.value = '';
    }

    lastActive.focus();
    inputElement.style.display = 'none';

    if (!success) {
      throw new Error('Could not read from clipboard');
    }

    return null;
  });

  return function write(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
  * Saves the item as JSON string
  */
var save = exports.save = function () {
  var _ref = _asyncToGenerator(function* (id, item) {
    if (!hasStorage()) {
      throw new Error('Storage API not supported');
    }

    window.localStorage.setItem(id.toString(), JSON.stringify(item));
    return true;
  });

  return function save(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/**
  * Retreives the item
  */


var load = exports.load = function () {
  var _ref2 = _asyncToGenerator(function* (id) {
    if (!hasStorage()) {
      throw new Error('Storage API not supported');
    }

    var itemJson = window.localStorage.getItem(id.toString());

    if (itemJson === null) {
      return null;
    }

    return JSON.parse(itemJson);
  });

  return function load(_x3) {
    return _ref2.apply(this, arguments);
  };
}();

/**
  *  Removes item from storage
  */


var remove = exports.remove = function () {
  var _ref3 = _asyncToGenerator(function* (id) {
    if (!hasStorage()) {
      throw new Error('Storage API not supported');
    }

    window.localStorage.removeItem(id.toString());
    return true;
  });

  return function remove(_x4) {
    return _ref3.apply(this, arguments);
  };
}();

/**
  * Save new color palette
  */


var savePalette = exports.savePalette = function () {
  var _ref4 = _asyncToGenerator(function* (palette) {
    if (!hasStorage()) {
      throw new Error('Storage API not supported');
    }

    var prevList = yield load('palettes');
    var newList = [].concat(_toConsumableArray(prevList), [palette]);
    yield save('palettes', newList);
    return true;
  });

  return function savePalette(_x5) {
    return _ref4.apply(this, arguments);
  };
}();

/**
  * Get a color palette
  */


var loadPalette = exports.loadPalette = function () {
  var _ref5 = _asyncToGenerator(function* (id) {
    if (!hasStorage()) {
      throw new Error('Storage API not supported');
    }

    var result = null;
    var list = yield load('palettes');

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var palette = _step.value;

        if (palette.id === id) {
          result = palette;
        }
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

    if (!result) {
      throw new Error('Palette not found');
    }

    return result;
  });

  return function loadPalette(_x6) {
    return _ref5.apply(this, arguments);
  };
}();

/**
  * Update color palette
  */


var updatePalette = exports.updatePalette = function () {
  var _ref6 = _asyncToGenerator(function* (palette) {
    if (!hasStorage()) {
      throw new Error('Storage API not supported');
    }

    var list = yield load('palettes');

    var newList = list.map(function (item) {
      if (item.id === palette.id) {
        return palette;
      } else {
        return item;
      }
    });

    yield save('palettes', newList);

    return true;
  });

  return function updatePalette(_x7) {
    return _ref6.apply(this, arguments);
  };
}();

/**
  * Remove color palette from storage
  */


var removePalette = exports.removePalette = function () {
  var _ref7 = _asyncToGenerator(function* (id) {
    if (!hasStorage()) {
      throw new Error('Storage API not supported');
    }

    var list = yield load('palettes');
    var newList = list.filter(function (item) {
      return item.id !== id;
    });
    yield save('palettes', newList);

    return true;
  });

  return function removePalette(_x8) {
    return _ref7.apply(this, arguments);
  };
}();

/**
  * Retreives all color palettes
  */


var loadAllPalettes = exports.loadAllPalettes = function () {
  var _ref8 = _asyncToGenerator(function* () {
    if (!hasStorage()) {
      throw new Error('Storage API not supported');
    }

    var list = yield load('palettes');
    return list;
  });

  return function loadAllPalettes() {
    return _ref8.apply(this, arguments);
  };
}();

exports.hasStorage = hasStorage;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/**
  * Checks if localStorage is available
  */
function hasStorage() {
  return typeof Storage !== 'undefined';
}

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _utils = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewPalette = function (_Component) {
  _inherits(NewPalette, _Component);

  function NewPalette(props) {
    _classCallCheck(this, NewPalette);

    var _this = _possibleConstructorReturn(this, (NewPalette.__proto__ || Object.getPrototypeOf(NewPalette)).call(this, props));

    _this.state = {
      isSaved: false,
      title: '',
      colors: ['D3061E', 'D3061E', 'D3061E', 'D3061E', 'D3061E']
    };

    _this.titleChange = _this.titleChange.bind(_this);
    _this.colorChange = _this.colorChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleCancel = _this.handleCancel.bind(_this);
    return _this;
  }

  _createClass(NewPalette, [{
    key: 'titleChange',
    value: function titleChange(event) {
      this.setState({
        title: event.target.value
      });
    }
  }, {
    key: 'colorChange',
    value: function colorChange(event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      name = Number(name);
      value = value.split('#').join('');

      var updatedList = this.state.colors.map(function (item, index) {
        if (index === name) {
          return value;
        }
        return item;
      });

      this.setState({
        colors: updatedList
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var _this2 = this;

      event.preventDefault();

      if (this.state.title.trim() === '') {
        console.log('No Title');
        return;
      }

      var data = {
        id: Number(Date.now()),
        title: this.state.title.trim(),
        colors: this.state.colors.map(function (value) {
          return value.toUpperCase();
        })
      };

      _utils.db.savePalette(data).then(function (result) {
        _this2.setState({
          isSaved: true
        });
      });
    }
  }, {
    key: 'handleCancel',
    value: function handleCancel(event) {
      this.setState({
        isSaved: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var colorInputs = [];

      for (var i = 0; i < 5; i++) {
        var name = '' + i;
        var value = '#' + this.state.colors[name];

        colorInputs.push(_react2.default.createElement(
          'div',
          { key: i, className: 'input-group fluid' },
          _react2.default.createElement(
            'label',
            null,
            'Color ',
            i + 1
          ),
          _react2.default.createElement('input', { type: 'color', name: name, value: value, onChange: this.colorChange })
        ));
      }

      return _react2.default.createElement(
        'div',
        null,
        !this.state.isSaved ? null : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' }),
        _react2.default.createElement(
          'h2',
          null,
          'Create New Palette'
        ),
        _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement(
            'div',
            { className: 'input-group vertical' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'p-title' },
              'Title'
            ),
            _react2.default.createElement('input', { type: 'text', id: 'p-title', name: 'title', value: this.state.title, onChange: this.titleChange })
          ),
          _react2.default.createElement(
            'legend',
            null,
            'Colors'
          ),
          colorInputs,
          _react2.default.createElement(
            'p',
            { className: 'align-right' },
            _react2.default.createElement(
              'button',
              { className: 'primary', onClick: this.handleSubmit },
              'Save'
            ),
            _react2.default.createElement(
              'button',
              { onClick: this.handleCancel },
              'Cancel'
            )
          )
        )
      );
    }
  }]);

  return NewPalette;
}(_react.Component);

exports.default = NewPalette;

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _utils = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditPalette = function (_Component) {
  _inherits(EditPalette, _Component);

  function EditPalette(props) {
    _classCallCheck(this, EditPalette);

    var _this = _possibleConstructorReturn(this, (EditPalette.__proto__ || Object.getPrototypeOf(EditPalette)).call(this, props));

    _this.state = {
      isSaved: false,
      id: Number(props.match.params.id),
      title: '',
      colors: []
    };

    _this.titleChange = _this.titleChange.bind(_this);
    _this.colorChange = _this.colorChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleCancel = _this.handleCancel.bind(_this);
    return _this;
  }

  _createClass(EditPalette, [{
    key: 'titleChange',
    value: function titleChange(event) {
      this.setState({
        title: event.target.value
      });
    }
  }, {
    key: 'colorChange',
    value: function colorChange(event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      name = Number(name);
      value = value.split('#').join('');

      var updatedList = this.state.colors.map(function (item, index) {
        if (index === name) {
          return value;
        }
        return item;
      });

      this.setState({
        colors: updatedList
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var _this2 = this;

      event.preventDefault();

      if (this.state.title.trim() === '') {
        console.log('No Title');
        return;
      }

      var data = {
        id: this.state.id,
        title: this.state.title.trim(),
        colors: this.state.colors
      };

      _utils.db.updatePalette(data).then(function (result) {
        _this2.setState({
          isSaved: true
        });
      });
    }
  }, {
    key: 'handleCancel',
    value: function handleCancel(event) {
      this.setState({
        isSaved: true
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      _utils.db.loadPalette(this.state.id).then(function (palette) {
        _this3.setState({
          title: palette.title,
          colors: palette.colors
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var colorInputs = [];

      for (var i = 0; i < 5; i++) {
        var name = '' + i;
        var value = '#' + this.state.colors[name];

        colorInputs.push(_react2.default.createElement(
          'div',
          { key: i, className: 'input-group fluid' },
          _react2.default.createElement(
            'label',
            null,
            'Color ',
            i + 1
          ),
          _react2.default.createElement('input', { type: 'color', name: name, value: value, onChange: this.colorChange })
        ));
      }

      return _react2.default.createElement(
        'div',
        null,
        !this.state.isSaved ? null : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' }),
        _react2.default.createElement(
          'h2',
          null,
          'Edit Palette'
        ),
        _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement(
            'div',
            { className: 'input-group vertical' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'p-title' },
              'Title'
            ),
            _react2.default.createElement('input', { type: 'text', id: 'p-title', name: 'title', value: this.state.title, onChange: this.titleChange })
          ),
          _react2.default.createElement(
            'legend',
            null,
            'Colors'
          ),
          colorInputs,
          _react2.default.createElement(
            'p',
            { className: 'align-right' },
            _react2.default.createElement(
              'button',
              { className: 'primary', onClick: this.handleSubmit },
              'Update'
            ),
            _react2.default.createElement(
              'button',
              { onClick: this.handleCancel },
              'Cancel'
            )
          )
        )
      );
    }
  }]);

  return EditPalette;
}(_react.Component);

exports.default = EditPalette;

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(4);

var _components = __webpack_require__(27);

var _utils = __webpack_require__(7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RemovePalette = function (_Component) {
  _inherits(RemovePalette, _Component);

  function RemovePalette(props) {
    _classCallCheck(this, RemovePalette);

    var _this = _possibleConstructorReturn(this, (RemovePalette.__proto__ || Object.getPrototypeOf(RemovePalette)).call(this, props));

    _this.state = {
      isRemoved: false,
      id: Number(props.match.params.id),
      title: '',
      colors: []
    };

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleCancel = _this.handleCancel.bind(_this);
    return _this;
  }

  _createClass(RemovePalette, [{
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var _this2 = this;

      _utils.db.removePalette(this.state.id).then(function (result) {
        _this2.setState({
          isRemoved: true
        });
      });
    }
  }, {
    key: 'handleCancel',
    value: function handleCancel(event) {
      this.setState({
        isRemoved: true
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this3 = this;

      _utils.db.loadPalette(this.state.id).then(function (palette) {
        _this3.setState({
          title: palette.title,
          colors: palette.colors
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        !this.state.isRemoved ? null : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' }),
        _react2.default.createElement(
          'h2',
          null,
          'Remove Palette',
          _react2.default.createElement(
            'small',
            null,
            'Are you sure?'
          )
        ),
        _react2.default.createElement(_components.Palette, { title: this.state.title, colors: this.state.colors }),
        _react2.default.createElement(
          'p',
          { className: 'align-right' },
          _react2.default.createElement(
            'button',
            { className: 'secondary', onClick: this.handleSubmit },
            'Yes, I\'m sure'
          ),
          _react2.default.createElement(
            'button',
            { onClick: this.handleCancel },
            'Cancel'
          )
        )
      );
    }
  }]);

  return RemovePalette;
}(_react.Component);

exports.default = RemovePalette;

/***/ }),

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var About = function (_Component) {
  _inherits(About, _Component);

  function About() {
    _classCallCheck(this, About);

    return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
  }

  _createClass(About, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h1',
        null,
        'About'
      );
    }
  }]);

  return About;
}(_react.Component);

exports.default = About;

/***/ })

},[29]);
//# sourceMappingURL=bundle.index.js.map