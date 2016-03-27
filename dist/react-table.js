(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Table"] = factory();
	else
		root["Table"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(9);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	__webpack_require__(4);

	var _tbody = __webpack_require__(5);

	var _tbody2 = _interopRequireDefault(_tbody);

	var _thead = __webpack_require__(7);

	var _thead2 = _interopRequireDefault(_thead);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Table = function (_React$Component) {
	  _inherits(Table, _React$Component);

	  function Table(props) {
	    _classCallCheck(this, Table);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Table).call(this, props));
	  }

	  _createClass(Table, [{
	    key: 'render',
	    value: function render() {
	      return React.createElement(
	        'table',
	        { className: this.props.klass || 'react-table' },
	        React.createElement(_thead2.default, { cols: this.props.cols }),
	        React.createElement(_tbody2.default, { cols: this.props.cols, rows: this.props.rows })
	      );
	    }
	  }]);

	  return Table;
	}(React.Component);

	exports.default = Table;

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _td = __webpack_require__(6);

	var _td2 = _interopRequireDefault(_td);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TBody = function (_React$Component) {
	  _inherits(TBody, _React$Component);

	  function TBody(props) {
	    _classCallCheck(this, TBody);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TBody).call(this, props));
	  }

	  _createClass(TBody, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var rows = [],
	          format = function format(col, row) {
	        switch (_typeof(col.format)) {
	          case 'string':
	            return row[col.format];
	            break;
	          case 'function':
	            return col.format(row);
	            break;
	          default:
	            return row[col.format];
	        }
	      },
	          row = function row(data) {
	        var records = [];
	        _this2.props.cols.forEach(function (col, index) {
	          records.push(React.createElement(
	            _td2.default,
	            { key: index },
	            format(col, data)
	          ));
	        });
	        return records;
	      };

	      this.props.rows.forEach(function (data, index) {
	        rows.push(React.createElement(
	          'tr',
	          { key: index },
	          row(data)
	        ));
	      });

	      return React.createElement(
	        'tbody',
	        null,
	        rows
	      );
	    }
	  }]);

	  return TBody;
	}(React.Component);

	exports.default = TBody;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TD = function (_React$Component) {
	  _inherits(TD, _React$Component);

	  function TD(props) {
	    _classCallCheck(this, TD);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(TD).call(this, props));
	  }

	  _createClass(TD, [{
	    key: "render",
	    value: function render() {
	      return React.createElement(
	        "td",
	        null,
	        this.props.children
	      );
	    }
	  }]);

	  return TD;
	}(React.Component);

	exports.default = TD;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _th = __webpack_require__(8);

	var _th2 = _interopRequireDefault(_th);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var THead = function (_React$Component) {
	  _inherits(THead, _React$Component);

	  function THead(props) {
	    _classCallCheck(this, THead);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(THead).call(this, props));
	  }

	  _createClass(THead, [{
	    key: 'render',
	    value: function render() {
	      var cols = [];
	      this.props.cols.forEach(function (col, index) {
	        cols.push(React.createElement(
	          _th2.default,
	          { sorter: col.sorter, key: index },
	          col.label
	        ));
	      });

	      return React.createElement(
	        'thead',
	        null,
	        React.createElement(
	          'tr',
	          null,
	          cols
	        )
	      );
	    }
	  }]);

	  return THead;
	}(React.Component);

	exports.default = THead;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var TH = function (_React$Component) {
	  _inherits(TH, _React$Component);

	  function TH(props) {
	    _classCallCheck(this, TH);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TH).call(this, props));

	    _this.state = {
	      ordered: _this.props.sorter ? _this.props.sorter.ordered : ''
	    };
	    return _this;
	  }

	  _createClass(TH, [{
	    key: 'clickSorter',
	    value: function clickSorter() {
	      this.setState({
	        ordered: this.state.ordered === 'asc' ? 'desc' : 'asc'
	      });
	      this.props.sorter.change && this.props.sorter.change(this.props, this.state);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var content = function content() {
	        if (!_this2.props.sorter) {
	          return _this2.props.children;
	        } else {
	          return React.createElement(
	            'span',
	            { className: 'pseudo-link sorter ' + _this2.state.ordered, onClick: _this2.clickSorter.bind(_this2) },
	            _this2.props.children
	          );
	        }
	      };

	      return React.createElement(
	        'th',
	        null,
	        content()
	      );
	    }
	  }]);

	  return TH;
	}(React.Component);

	exports.default = TH;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _table = __webpack_require__(3);

	var _table2 = _interopRequireDefault(_table);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _table2.default;

/***/ }
/******/ ])
});
;