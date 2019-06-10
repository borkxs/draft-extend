(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Draft"), require("Immutable"), require("React"), require("ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["Draft", "Immutable", "React", "ReactDOM"], factory);
	else if(typeof exports === 'object')
		exports["DraftExtend"] = factory(require("Draft"), require("Immutable"), require("React"), require("ReactDOM"));
	else
		root["DraftExtend"] = factory(root["Draft"], root["Immutable"], root["React"], root["ReactDOM"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_44__) {
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
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.compose = exports.pluginUtils = exports.createPlugin = exports.KeyCommandController = exports.Toolbar = exports.Editor = undefined;

	var _Editor = __webpack_require__(16);

	var _Editor2 = _interopRequireDefault(_Editor);

	var _Toolbar = __webpack_require__(18);

	var _Toolbar2 = _interopRequireDefault(_Toolbar);

	var _KeyCommandController = __webpack_require__(6);

	var _KeyCommandController2 = _interopRequireDefault(_KeyCommandController);

	var _createPlugin = __webpack_require__(19);

	var _createPlugin2 = _interopRequireDefault(_createPlugin);

	var _utils = __webpack_require__(20);

	var _utils2 = _interopRequireDefault(_utils);

	var _compose = __webpack_require__(10);

	var _compose2 = _interopRequireDefault(_compose);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.Editor = _Editor2.default;
	exports.Toolbar = _Toolbar2.default;
	exports.KeyCommandController = _KeyCommandController2.default;
	exports.createPlugin = _createPlugin2.default;
	exports.pluginUtils = _utils2.default;
	exports.compose = _compose2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var React = __webpack_require__(3);
	var factory = __webpack_require__(24);

	if (typeof React === 'undefined') {
	  throw Error(
	    'create-react-class could not find the React object. If you are using script tags, ' +
	      'make sure that React is being loaded before create-react-class.'
	  );
	}

	// Hack to grab NoopUpdateQueue from isomorphic React
	var ReactNoopUpdateQueue = new React.Component().updater;

	module.exports = factory(
	  React.Component,
	  React.isValidElement,
	  ReactNoopUpdateQueue
	);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (true) {
	  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
	    Symbol.for &&
	    Symbol.for('react.element')) ||
	    0xeac7;

	  var isValidElement = function(object) {
	    return typeof object === 'object' &&
	      object !== null &&
	      object.$$typeof === REACT_ELEMENT_TYPE;
	  };

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(42)(isValidElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = require('./factoryWithThrowingShims')();
	}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _createReactClass = __webpack_require__(4);

	var _createReactClass2 = _interopRequireDefault(_createReactClass);

	var _invariant = __webpack_require__(13);

	var _invariant2 = _interopRequireDefault(_invariant);

	var _immutable = __webpack_require__(2);

	var _draftJs = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var providedProps = {
	  addKeyCommandListener: _propTypes2.default.func,
	  removeKeyCommandListener: _propTypes2.default.func,
	  handleKeyCommand: _propTypes2.default.func
	};

	var KeyCommandController = function KeyCommandController(Component) {
	  return (0, _createReactClass2.default)({
	    displayName: 'KeyCommandController(' + Component.displayName + ')',

	    propTypes: _extends({
	      editorState: _propTypes2.default.object,
	      onChange: _propTypes2.default.func,
	      keyCommandListeners: _propTypes2.default.arrayOf(_propTypes2.default.func)
	    }, providedProps),

	    getDefaultProps: function getDefaultProps() {
	      return {
	        keyCommandListeners: []
	      };
	    },
	    componentWillMount: function componentWillMount() {
	      this.keyCommandOverrides = (0, _immutable.List)(this.props.keyCommandListeners);
	      this.keyCommandListeners = (0, _immutable.List)();
	    },
	    componentDidMount: function componentDidMount() {
	      var _this = this;

	      // ensure valid props for deferral
	      var propNames = Object.keys(providedProps);
	      var presentProps = propNames.filter(function (propName) {
	        return _this.props[propName] !== undefined;
	      });
	      var nonePresent = presentProps.length === 0;
	      var allPresent = presentProps.length === propNames.length;

	      (0, _invariant2.default)(nonePresent || allPresent, 'KeyCommandController: A KeyCommandController is receiving only some props (' + presentProps.join(', ') + ') necessary to defer to a parent key command controller.');

	      if (allPresent) {
	        this.props.keyCommandListeners.forEach(function (listener) {
	          _this.props.addKeyCommandListener(listener);
	        });
	      }
	    },
	    componentWillUnmount: function componentWillUnmount() {
	      var _this2 = this;

	      if (this.props.removeKeyCommandListener) {
	        this.props.keyCommandListeners.forEach(function (listener) {
	          _this2.props.removeKeyCommandListener(listener);
	        });
	      }
	    },
	    addKeyCommandListener: function addKeyCommandListener(listener) {
	      var addKeyCommandListener = this.props.addKeyCommandListener;


	      if (addKeyCommandListener) {
	        addKeyCommandListener(listener);
	        return;
	      }

	      this.keyCommandListeners = this.keyCommandListeners.unshift(listener);
	    },
	    removeKeyCommandListener: function removeKeyCommandListener(listener) {
	      var removeKeyCommandListener = this.props.removeKeyCommandListener;


	      if (removeKeyCommandListener) {
	        removeKeyCommandListener(listener);
	        return;
	      }

	      this.keyCommandListeners = this.keyCommandListeners.filterNot(function (l) {
	        return l === listener;
	      });
	    },
	    handleKeyCommand: function handleKeyCommand(command) {
	      var keyboardEvent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	      var _props = this.props,
	          editorState = _props.editorState,
	          onChange = _props.onChange,
	          handleKeyCommand = _props.handleKeyCommand;


	      if (handleKeyCommand) {
	        return handleKeyCommand(command, keyboardEvent);
	      }

	      var result = this.keyCommandListeners.concat(this.keyCommandOverrides).reduce(function (_ref, listener) {
	        var state = _ref.state,
	            hasChanged = _ref.hasChanged;

	        if (hasChanged === true) {
	          return {
	            state: state,
	            hasChanged: hasChanged
	          };
	        }

	        var listenerResult = listener(state, command, keyboardEvent);
	        var isEditorState = listenerResult instanceof _draftJs.EditorState;

	        if (listenerResult === true || isEditorState && listenerResult !== state) {
	          if (isEditorState) {
	            onChange(listenerResult);
	            return {
	              state: listenerResult,
	              hasChanged: true
	            };
	          }
	          return {
	            state: state,
	            hasChanged: true
	          };
	        }

	        return {
	          state: state,
	          hasChanged: hasChanged
	        };
	      }, { state: editorState, hasChanged: false });

	      return result.hasChanged;
	    },
	    focus: function focus() {
	      this.refs.editor.focus();
	    },
	    blur: function blur() {
	      this.refs.editor.blur();
	    },
	    render: function render() {
	      var _props2 = this.props,
	          editorState = _props2.editorState,
	          onChange = _props2.onChange,
	          keyCommandListeners = _props2.keyCommandListeners,
	          others = _objectWithoutProperties(_props2, ['editorState', 'onChange', 'keyCommandListeners']);

	      return _react2.default.createElement(Component, _extends({}, others, {
	        ref: 'editor',
	        editorState: editorState,
	        onChange: onChange,
	        addKeyCommandListener: this.addKeyCommandListener,
	        removeKeyCommandListener: this.removeKeyCommandListener,
	        handleKeyCommand: this.handleKeyCommand
	      }));
	    }
	  });
	};

	exports.default = KeyCommandController;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var validateFormat = function validateFormat(format) {};

	if (true) {
	  validateFormat = function validateFormat(format) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  };
	}

	function invariant(condition, format, a, b, c, d, e, f) {
	  validateFormat(format);

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	}

	module.exports = invariant;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyFunction = __webpack_require__(12);

	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var warning = emptyFunction;

	if (true) {
	  var printWarning = function printWarning(format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  warning = function warning(condition, format) {
	    if (format === undefined) {
	      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }

	    if (format.indexOf('Failed Composite propType: ') === 0) {
	      return; // Ignore CompositeComponent proptype check.
	    }

	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	module.exports = warning;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/

	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}

			// Detect buggy property enumeration order in older V8 versions.

			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}

			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}

			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}

	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function () {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  return function () {
	    if (funcs.length === 0) {
	      return arguments.length <= 0 ? undefined : arguments[0];
	    }

	    var last = funcs[funcs.length - 1];
	    var rest = funcs.slice(0, -1);

	    return rest.reduceRight(function (composed, f) {
	      return f(composed);
	    }, last.apply(undefined, arguments));
	  };
	};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	"use strict";

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 * 
	 */

	function makeEmptyFunction(arg) {
	  return function () {
	    return arg;
	  };
	}

	/**
	 * This function accepts and discards inputs; it has no side effects. This is
	 * primarily useful idiomatically for overridable function endpoints which
	 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
	 */
	var emptyFunction = function emptyFunction() {};

	emptyFunction.thatReturns = makeEmptyFunction;
	emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
	emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
	emptyFunction.thatReturnsNull = makeEmptyFunction(null);
	emptyFunction.thatReturnsThis = function () {
	  return this;
	};
	emptyFunction.thatReturnsArgument = function (arg) {
	  return arg;
	};

	module.exports = emptyFunction;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	'use strict';

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function(condition, format, a, b, c, d, e, f) {
	  if (true) {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error(
	        'Minified exception occurred; use the non-minified dev environment ' +
	        'for the full error message and additional helpful warnings.'
	      );
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error(
	        format.replace(/%s/g, function() { return args[argIndex++]; })
	      );
	      error.name = 'Invariant Violation';
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	if (false) {
	  module.exports = require('./cjs/react-is.production.min.js');
	} else {
	  module.exports = __webpack_require__(43);
	}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _createReactClass = __webpack_require__(4);

	var _createReactClass2 = _interopRequireDefault(_createReactClass);

	var _draftJs = __webpack_require__(1);

	var _draftJsPluginsEditor = __webpack_require__(34);

	var _draftJsPluginsEditor2 = _interopRequireDefault(_draftJsPluginsEditor);

	var _KeyCommandController = __webpack_require__(6);

	var _KeyCommandController2 = _interopRequireDefault(_KeyCommandController);

	var _OverlayWrapper = __webpack_require__(17);

	var _OverlayWrapper2 = _interopRequireDefault(_OverlayWrapper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var propTypes = {
	  className: _propTypes2.default.string,
	  editorState: _propTypes2.default.object,
	  onChange: _propTypes2.default.func,
	  decorators: _propTypes2.default.array,
	  baseDecorator: _propTypes2.default.func,
	  styleMap: _propTypes2.default.object,
	  styleFn: _propTypes2.default.func,
	  buttons: _propTypes2.default.array,
	  overlays: _propTypes2.default.array,
	  blockRendererFn: _propTypes2.default.func,
	  blockStyleFn: _propTypes2.default.func,
	  keyBindingFn: _propTypes2.default.func,
	  addKeyCommandListener: _propTypes2.default.func.isRequired,
	  removeKeyCommandListener: _propTypes2.default.func.isRequired,
	  handleReturn: _propTypes2.default.func,
	  onEscape: _propTypes2.default.func,
	  onTab: _propTypes2.default.func,
	  onUpArrow: _propTypes2.default.func,
	  onDownArrow: _propTypes2.default.func,
	  readOnly: _propTypes2.default.bool,
	  showButtons: _propTypes2.default.bool,
	  renderTray: _propTypes2.default.func
	};

	var EditorWrapper = (0, _createReactClass2.default)({
	  displayName: 'EditorWrapper',

	  propTypes: propTypes,

	  childContextTypes: {
	    getEditorState: _propTypes2.default.func,
	    getReadOnly: _propTypes2.default.func,
	    setReadOnly: _propTypes2.default.func,
	    onChange: _propTypes2.default.func,
	    focus: _propTypes2.default.func,
	    blur: _propTypes2.default.func
	  },

	  getDefaultProps: function getDefaultProps() {
	    return {
	      className: '',
	      editorState: _draftJs.EditorState.createEmpty(),
	      onChange: function onChange() {},
	      decorators: [],
	      baseDecorator: _draftJs.CompositeDecorator,
	      styleMap: {},
	      styleFn: function styleFn() {},
	      buttons: [],
	      overlays: [],
	      blockRendererFn: function blockRendererFn() {},
	      blockStyleFn: function blockStyleFn() {},
	      keyBindingFn: function keyBindingFn() {},
	      readOnly: false,
	      showButtons: true
	    };
	  },
	  getInitialState: function getInitialState() {
	    var baseDecorator = this.props.baseDecorator;


	    var decorator = new baseDecorator(this.props.decorators);
	    return {
	      decorator: decorator,
	      readOnly: false
	    };
	  },
	  getChildContext: function getChildContext() {
	    return {
	      getEditorState: this.getDecoratedState,
	      getReadOnly: this.getReadOnly,
	      setReadOnly: this.setReadOnly,
	      onChange: this.props.onChange,
	      focus: this.focus,
	      blur: this.blur
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (nextProps.decorators.length === this.state.decorator._decorators.length) {
	      var allDecoratorsMatch = this.state.decorator._decorators.every(function (decorator, i) {
	        return decorator === nextProps.decorators[i];
	      });
	      if (allDecoratorsMatch) {
	        return;
	      }
	    }

	    this.setState({ decorator: new nextProps.baseDecorator(nextProps.decorators) });
	  },
	  keyBindingFn: function keyBindingFn(e) {
	    var pluginsCommand = this.props.keyBindingFn(e);
	    if (pluginsCommand) {
	      return pluginsCommand;
	    }

	    return (0, _draftJs.getDefaultKeyBinding)(e);
	  },
	  handleReturn: function handleReturn(e, editorState) {
	    return this.props.handleReturn && this.props.handleReturn(e, editorState) || this.props.handleKeyCommand('return', e);
	  },
	  onEscape: function onEscape(e) {
	    return this.props.onEscape && this.props.onEscape(e) || this.props.handleKeyCommand('escape', e);
	  },
	  onTab: function onTab(e) {
	    return this.props.onTab && this.props.onTab(e) || this.props.handleKeyCommand('tab', e);
	  },
	  onUpArrow: function onUpArrow(e) {
	    return this.props.onUpArrow && this.props.onUpArrow(e) || this.props.handleKeyCommand('up-arrow', e);
	  },
	  onDownArrow: function onDownArrow(e) {
	    return this.props.onDownArrow && this.props.onDownArrow(e) || this.props.handleKeyCommand('down-arrow', e);
	  },
	  focus: function focus() {
	    this.refs.editor.focus();
	  },
	  blur: function blur() {
	    this.refs.editor.blur();
	  },
	  getOtherProps: function getOtherProps() {
	    var _this = this;

	    var propKeys = Object.keys(this.props);
	    var propTypeKeys = Object.keys(propTypes);

	    var propsToPass = propKeys.filter(function (prop) {
	      return propTypeKeys.indexOf(prop) === -1;
	    });

	    return propsToPass.reduce(function (acc, prop) {
	      acc[prop] = _this.props[prop];
	      return acc;
	    }, {});
	  },
	  getReadOnly: function getReadOnly() {
	    return this.state.readOnly || this.props.readOnly;
	  },
	  setReadOnly: function setReadOnly(readOnly) {
	    this.setState({ readOnly: readOnly });
	  },
	  getDecoratedState: function getDecoratedState() {
	    var editorState = this.props.editorState;
	    var decorator = this.state.decorator;


	    var currentDecorator = editorState.getDecorator();

	    if (currentDecorator && currentDecorator._decorators === decorator._decorators) {
	      return editorState;
	    }

	    return _draftJs.EditorState.set(editorState, { decorator: decorator });
	  },
	  renderTray: function renderTray() {
	    var renderTray = this.props.renderTray;


	    if (typeof renderTray !== 'function') {
	      return null;
	    }

	    return renderTray();
	  },
	  renderPluginButtons: function renderPluginButtons() {
	    var _this2 = this;

	    var _props = this.props,
	        onChange = _props.onChange,
	        addKeyCommandListener = _props.addKeyCommandListener,
	        removeKeyCommandListener = _props.removeKeyCommandListener,
	        showButtons = _props.showButtons;


	    if (showButtons === false) {
	      return null;
	    }

	    var decoratedState = this.getDecoratedState();

	    return this.props.buttons.map(function (Button, index) {
	      return _react2.default.createElement(Button, _extends({}, _this2.getOtherProps(), {
	        key: 'button-' + index,
	        attachedToEditor: true,
	        editorState: decoratedState,
	        onChange: onChange,
	        addKeyCommandListener: addKeyCommandListener,
	        removeKeyCommandListener: removeKeyCommandListener
	      }));
	    });
	  },
	  renderOverlays: function renderOverlays() {
	    var _this3 = this;

	    var _props2 = this.props,
	        onChange = _props2.onChange,
	        addKeyCommandListener = _props2.addKeyCommandListener,
	        removeKeyCommandListener = _props2.removeKeyCommandListener;


	    var decoratedState = this.getDecoratedState();

	    return this.props.overlays.map(function (Overlay, index) {
	      return _react2.default.createElement(
	        _OverlayWrapper2.default,
	        { key: index },
	        _react2.default.createElement(Overlay, _extends({}, _this3.getOtherProps(), {
	          editorState: decoratedState,
	          onChange: onChange,
	          addKeyCommandListener: addKeyCommandListener,
	          removeKeyCommandListener: removeKeyCommandListener
	        }))
	      );
	    });
	  },
	  render: function render() {
	    var _props3 = this.props,
	        styleMap = _props3.styleMap,
	        styleFn = _props3.styleFn,
	        blockRendererFn = _props3.blockRendererFn,
	        blockStyleFn = _props3.blockStyleFn,
	        onChange = _props3.onChange,
	        handleKeyCommand = _props3.handleKeyCommand,
	        otherProps = _objectWithoutProperties(_props3, ['styleMap', 'styleFn', 'blockRendererFn', 'blockStyleFn', 'onChange', 'handleKeyCommand']);

	    var decoratedState = this.getDecoratedState();
	    var className = 'draft-extend ' + this.props.className;

	    var readOnly = this.getReadOnly();

	    return _react2.default.createElement(
	      'div',
	      { className: className },
	      _react2.default.createElement(
	        'div',
	        { className: 'draft-extend-editor' },
	        _react2.default.createElement(_draftJsPluginsEditor2.default, _extends({}, otherProps, {
	          ref: 'editor',
	          editorState: decoratedState,
	          readOnly: readOnly,
	          onChange: onChange,
	          blockStyleFn: blockStyleFn,
	          blockRendererFn: blockRendererFn,
	          customStyleMap: styleMap,
	          customStyleFn: styleFn,
	          handleKeyCommand: handleKeyCommand,
	          keyBindingFn: this.keyBindingFn,
	          handleReturn: this.handleReturn,
	          onEscape: this.onEscape,
	          onTab: this.onTab,
	          onUpArrow: this.onUpArrow,
	          onDownArrow: this.onDownArrow
	        })),
	        _react2.default.createElement(
	          'div',
	          { className: 'draft-extend-tray' },
	          this.renderTray()
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'draft-extend-controls' },
	          this.renderPluginButtons()
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'draft-extend-overlays' },
	          this.renderOverlays()
	        )
	      )
	    );
	  }
	});

	exports.default = (0, _KeyCommandController2.default)(EditorWrapper);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(44);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _createReactClass = __webpack_require__(4);

	var _createReactClass2 = _interopRequireDefault(_createReactClass);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = (0, _createReactClass2.default)({
	  displayName: 'OverlayWrapper',
	  getInitialState: function getInitialState() {
	    var node = document.createElement('div');
	    document.body.appendChild(node);

	    return { node: node };
	  },
	  componentDidMount: function componentDidMount() {
	    this.renderOverlay();
	  },
	  componentDidUpdate: function componentDidUpdate() {
	    this.renderOverlay();
	  },
	  componentWillUnmount: function componentWillUnmount() {
	    _reactDom2.default.unmountComponentAtNode(this.state.node);
	  },
	  renderOverlay: function renderOverlay() {
	    var child = _react2.default.Children.only(this.props.children);
	    _reactDom2.default.render(child, this.state.node);
	  },
	  render: function render() {
	    return null;
	  }
	});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _createReactClass = __webpack_require__(4);

	var _createReactClass2 = _interopRequireDefault(_createReactClass);

	var _KeyCommandController = __webpack_require__(6);

	var _KeyCommandController2 = _interopRequireDefault(_KeyCommandController);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	var Toolbar = (0, _createReactClass2.default)({
	  displayName: 'Toolbar',

	  propTypes: {
	    editorState: _propTypes2.default.object,
	    onChange: _propTypes2.default.func,
	    buttons: _propTypes2.default.array,
	    addKeyCommandListener: _propTypes2.default.func.isRequired,
	    removeKeyCommandListener: _propTypes2.default.func.isRequired
	  },

	  childContextTypes: {
	    getEditorState: _propTypes2.default.func,
	    onChange: _propTypes2.default.func
	  },

	  getChildContext: function getChildContext() {
	    return {
	      getEditorState: this.getEditorState,
	      onChange: this.props.onChange
	    };
	  },
	  getEditorState: function getEditorState() {
	    return this.props.editorState;
	  },
	  renderButtons: function renderButtons() {
	    var _props = this.props,
	        editorState = _props.editorState,
	        onChange = _props.onChange,
	        buttons = _props.buttons,
	        addKeyCommandListener = _props.addKeyCommandListener,
	        removeKeyCommandListener = _props.removeKeyCommandListener,
	        otherProps = _objectWithoutProperties(_props, ['editorState', 'onChange', 'buttons', 'addKeyCommandListener', 'removeKeyCommandListener']);

	    return buttons.map(function (Button, index) {
	      return _react2.default.createElement(Button, _extends({}, otherProps, {
	        key: 'button-' + index,
	        editorState: editorState,
	        onChange: onChange,
	        addKeyCommandListener: addKeyCommandListener,
	        removeKeyCommandListener: removeKeyCommandListener
	      }));
	    });
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'ul',
	      { className: 'draft-extend-controls' },
	      this.renderButtons()
	    );
	  }
	});

	exports.default = (0, _KeyCommandController2.default)(Toolbar);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _createReactClass = __webpack_require__(4);

	var _createReactClass2 = _interopRequireDefault(_createReactClass);

	var _immutable = __webpack_require__(2);

	var _memoize = __webpack_require__(22);

	var _memoize2 = _interopRequireDefault(_memoize);

	var _compose = __webpack_require__(10);

	var _compose2 = _interopRequireDefault(_compose);

	var _accumulateFunction = __webpack_require__(21);

	var _accumulateFunction2 = _interopRequireDefault(_accumulateFunction);

	var _middlewareAdapter = __webpack_require__(23);

	var _middlewareAdapter2 = _interopRequireDefault(_middlewareAdapter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var emptyFunction = function emptyFunction() {};
	var emptyArray = [];
	var emptyObject = {};

	var defaultMiddlewareFunction = function defaultMiddlewareFunction(next) {
	  return function () {
	    return next.apply(undefined, arguments);
	  };
	};
	defaultMiddlewareFunction.__isMiddleware = true;

	var memoizedCompose = (0, _memoize2.default)(_compose2.default);
	var memoizedAccumulateFunction = (0, _memoize2.default)(_accumulateFunction2.default);
	var memoizedAssign = (0, _memoize2.default)(function () {
	  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	    args[_key] = arguments[_key];
	  }

	  return Object.assign.apply(Object, [{}].concat(args));
	});
	var memoizedConcat = (0, _memoize2.default)(function (a1, a2) {
	  return a1.concat(a2);
	});
	var memoizedCoerceArray = (0, _memoize2.default)(function (arg) {
	  return Array.isArray(arg) ? arg : [arg];
	});
	var memoizedPassEmptyStyles = (0, _memoize2.default)(function (func) {
	  return function (nodeName, node) {
	    return func(nodeName, node, (0, _immutable.OrderedSet)());
	  };
	});
	var memoizedMiddlewareAdapter = (0, _memoize2.default)(_middlewareAdapter2.default);

	var createPlugin = function createPlugin(_ref) {
	  var _ref$displayName = _ref.displayName,
	      displayName = _ref$displayName === undefined ? 'Plugin' : _ref$displayName,
	      _ref$decorators = _ref.decorators,
	      decorators = _ref$decorators === undefined ? emptyArray : _ref$decorators,
	      _ref$buttons = _ref.buttons,
	      buttons = _ref$buttons === undefined ? emptyArray : _ref$buttons,
	      _ref$overlays = _ref.overlays,
	      overlays = _ref$overlays === undefined ? emptyArray : _ref$overlays,
	      _ref$styleMap = _ref.styleMap,
	      styleMap = _ref$styleMap === undefined ? emptyObject : _ref$styleMap,
	      _ref$styleFn = _ref.styleFn,
	      styleFn = _ref$styleFn === undefined ? emptyFunction : _ref$styleFn,
	      _ref$blockRendererFn = _ref.blockRendererFn,
	      blockRendererFn = _ref$blockRendererFn === undefined ? emptyFunction : _ref$blockRendererFn,
	      _ref$blockStyleFn = _ref.blockStyleFn,
	      blockStyleFn = _ref$blockStyleFn === undefined ? emptyFunction : _ref$blockStyleFn,
	      _ref$keyBindingFn = _ref.keyBindingFn,
	      keyBindingFn = _ref$keyBindingFn === undefined ? emptyFunction : _ref$keyBindingFn,
	      _ref$keyCommandListen = _ref.keyCommandListener,
	      keyCommandListener = _ref$keyCommandListen === undefined ? emptyFunction : _ref$keyCommandListen,
	      _ref$htmlToStyle = _ref.htmlToStyle,
	      htmlToStyle = _ref$htmlToStyle === undefined ? defaultMiddlewareFunction : _ref$htmlToStyle,
	      _ref$htmlToBlock = _ref.htmlToBlock,
	      htmlToBlock = _ref$htmlToBlock === undefined ? defaultMiddlewareFunction : _ref$htmlToBlock,
	      _ref$htmlToEntity = _ref.htmlToEntity,
	      htmlToEntity = _ref$htmlToEntity === undefined ? defaultMiddlewareFunction : _ref$htmlToEntity,
	      _ref$textToEntity = _ref.textToEntity,
	      textToEntity = _ref$textToEntity === undefined ? defaultMiddlewareFunction : _ref$textToEntity,
	      _ref$styleToHTML = _ref.styleToHTML,
	      styleToHTML = _ref$styleToHTML === undefined ? defaultMiddlewareFunction : _ref$styleToHTML,
	      _ref$blockToHTML = _ref.blockToHTML,
	      blockToHTML = _ref$blockToHTML === undefined ? defaultMiddlewareFunction : _ref$blockToHTML,
	      _ref$entityToHTML = _ref.entityToHTML,
	      entityToHTML = _ref$entityToHTML === undefined ? defaultMiddlewareFunction : _ref$entityToHTML;
	  return function (ToWrap) {
	    decorators = memoizedCoerceArray(decorators);
	    buttons = memoizedCoerceArray(buttons);
	    overlays = memoizedCoerceArray(overlays);

	    if (ToWrap.prototype && ToWrap.prototype.isReactComponent) {
	      // wrapping an Editor component
	      return (0, _createReactClass2.default)({
	        displayName: displayName,

	        propTypes: {
	          styleMap: _propTypes2.default.object,
	          styleFn: _propTypes2.default.func,
	          decorators: _propTypes2.default.array,
	          buttons: _propTypes2.default.array,
	          overlays: _propTypes2.default.array,
	          blockRendererFn: _propTypes2.default.func,
	          blockStyleFn: _propTypes2.default.func,
	          keyBindingFn: _propTypes2.default.func,
	          keyCommandListeners: _propTypes2.default.arrayOf(_propTypes2.default.func)
	        },

	        getDefaultProps: function getDefaultProps() {
	          return {
	            styleMap: emptyObject,
	            styleFn: emptyFunction,
	            decorators: emptyArray,
	            buttons: emptyArray,
	            overlays: emptyArray,
	            blockRendererFn: emptyFunction,
	            blockStyleFn: emptyFunction,
	            keyBindingFn: emptyFunction,
	            keyCommandListeners: emptyArray
	          };
	        },
	        focus: function focus() {
	          if (this.refs.child.focus) {
	            this.refs.child.focus();
	          }
	        },
	        blur: function blur() {
	          if (this.refs.child.blur) {
	            this.refs.child.blur();
	          }
	        },
	        render: function render() {
	          var newStyleMap = memoizedAssign(this.props.styleMap, styleMap);
	          var newStyleFn = memoizedAccumulateFunction(this.props.styleFn, styleFn);
	          var newDecorators = memoizedConcat(this.props.decorators, decorators);
	          var newButtons = memoizedConcat(this.props.buttons, buttons);
	          var newOverlays = memoizedConcat(this.props.overlays, overlays);
	          var newBlockRendererFn = memoizedAccumulateFunction(blockRendererFn, this.props.blockRendererFn);
	          var newBlockStyleFn = memoizedAccumulateFunction(blockStyleFn, this.props.blockStyleFn);
	          var newKeyBindingFn = memoizedAccumulateFunction(keyBindingFn, this.props.keyBindingFn);
	          var newKeyCommandListeners = memoizedConcat(this.props.keyCommandListeners, memoizedCoerceArray(keyCommandListener));

	          return _react2.default.createElement(ToWrap, _extends({}, this.props, {
	            ref: 'child',
	            styleMap: newStyleMap,
	            styleFn: newStyleFn,
	            decorators: newDecorators,
	            buttons: newButtons,
	            overlays: newOverlays,
	            blockRendererFn: newBlockRendererFn,
	            blockStyleFn: newBlockStyleFn,
	            keyBindingFn: newKeyBindingFn,
	            keyCommandListeners: newKeyCommandListeners
	          }));
	        }
	      });
	    } else {
	      // wrapping a converter function
	      return function () {
	        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	          args[_key2] = arguments[_key2];
	        }

	        if (args.length === 1 && (typeof args[0] === 'string' || args[0].hasOwnProperty('_map') && args[0].getBlockMap != null)) {
	          // actively converting an HTML string/ContentState, so pass additional options to the next converter function.
	          return ToWrap({
	            htmlToStyle: htmlToStyle,
	            htmlToBlock: htmlToBlock,
	            htmlToEntity: htmlToEntity,
	            textToEntity: textToEntity,
	            styleToHTML: styleToHTML,
	            blockToHTML: blockToHTML,
	            entityToHTML: entityToHTML
	          }).apply(undefined, args);
	        } else {
	          // receiving a plugin to accumulate upon for a converter - accumulate
	          // options and return a new plugin wrapped around the passed one ready
	          // to take either another plugin or a string/ContentState

	          var oldOptions = args[0];

	          var newHTMLToStyle = memoizedCompose(memoizedMiddlewareAdapter(memoizedPassEmptyStyles(htmlToStyle)), memoizedMiddlewareAdapter(oldOptions.htmlToStyle));
	          newHTMLToStyle.__isMiddleware = true;

	          var newHTMLToBlock = memoizedCompose(memoizedMiddlewareAdapter(htmlToBlock), memoizedMiddlewareAdapter(oldOptions.htmlToBlock));
	          newHTMLToBlock.__isMiddleware = true;

	          var newHTMLToEntity = memoizedCompose(memoizedMiddlewareAdapter(htmlToEntity), memoizedMiddlewareAdapter(oldOptions.htmlToEntity));
	          newHTMLToEntity.__isMiddleware = true;

	          var newTextToEntity = memoizedCompose(memoizedMiddlewareAdapter(textToEntity), memoizedMiddlewareAdapter(oldOptions.textToEntity));
	          newTextToEntity.__isMiddleware = true;

	          var newStyleToHTML = memoizedCompose(memoizedMiddlewareAdapter(styleToHTML), memoizedMiddlewareAdapter(oldOptions.styleToHTML));
	          newStyleToHTML.__isMiddleware = true;

	          var newBlockToHTML = memoizedCompose(memoizedMiddlewareAdapter(blockToHTML), memoizedMiddlewareAdapter(oldOptions.blockToHTML));
	          newBlockToHTML.__isMiddleware = true;

	          var newEntityToHTML = memoizedCompose(memoizedMiddlewareAdapter(entityToHTML), memoizedMiddlewareAdapter(oldOptions.entityToHTML));
	          newEntityToHTML.__isMiddleware = true;

	          return createPlugin({
	            htmlToStyle: newHTMLToStyle,
	            htmlToBlock: newHTMLToBlock,
	            htmlToEntity: newHTMLToEntity,
	            textToEntity: newTextToEntity,
	            styleToHTML: newStyleToHTML,
	            blockToHTML: newBlockToHTML,
	            entityToHTML: newEntityToHTML
	          })(ToWrap);
	        }
	      };
	    }
	  };
	};

	exports.default = createPlugin;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _draftJs = __webpack_require__(1);

	var _immutable = __webpack_require__(2);

	var _invariant = __webpack_require__(13);

	var _invariant2 = _interopRequireDefault(_invariant);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var camelCaseToHyphen = function camelCaseToHyphen(camelCase) {
	  return camelCase.replace(/[a-z][A-Z]/g, function (str) {
	    return str[0] + '-' + str[1].toLowerCase();
	  });
	};

	var getActiveEntity = function getActiveEntity(editorState) {
	  var currentBlock = editorState.getCurrentContent().getBlockForKey(editorState.getSelection().getStartKey());
	  if (currentBlock) {
	    return currentBlock.getEntityAt(editorState.getSelection().getStartOffset());
	  }
	};

	exports.default = {
	  camelCaseToHyphen: camelCaseToHyphen,

	  styleObjectToString: function styleObjectToString(styles) {
	    return Object.keys(styles).map(function (styleName) {
	      return camelCaseToHyphen(styleName) + ': ' + styles[styleName] + ';';
	    }).join(' ').replace(/"/g, '\\"');
	  },


	  entityStrategy: function entityStrategy(entityType) {
	    return function (contentBlock, callback, contentState) {
	      contentBlock.findEntityRanges(function (character) {
	        var entityKey = character.getEntity();

	        if (entityKey === null) {
	          return false;
	        }

	        var entity = contentState && contentState.getEntity ? contentState.getEntity(entityKey) : _draftJs.Entity.get(entityKey);

	        return entity && entity.getType() === entityType;
	      }, callback);
	    };
	  },

	  getEntitySelection: function getEntitySelection(editorState, entityKey) {
	    var selections = [];
	    editorState.getCurrentContent().getBlocksAsArray().forEach(function (block) {
	      block.findEntityRanges(function (c) {
	        return c.getEntity() === entityKey;
	      }, function (start, end) {
	        selections.push(_draftJs.SelectionState.createEmpty(block.getKey()).merge({
	          anchorOffset: start,
	          focusOffset: end,
	          isBackward: false,
	          hasFocus: true
	        }));
	      });
	    });
	    (0, _invariant2.default)(selections.length === 1, 'getEntitySelection: More than one range with the same entityKey. Please use unique entity instances');
	    return selections[0];
	  },
	  insertBlockAtCursor: function insertBlockAtCursor(editorState, block) {
	    var contentState = editorState.getCurrentContent();
	    var selectionState = editorState.getSelection();

	    var afterRemoval = _draftJs.Modifier.removeRange(contentState, selectionState, 'backward');

	    var targetSelection = afterRemoval.getSelectionAfter();
	    var afterSplit = _draftJs.Modifier.splitBlock(afterRemoval, targetSelection);
	    var insertionTarget = afterSplit.getSelectionAfter();

	    var asType = _draftJs.Modifier.setBlockType(afterSplit, insertionTarget, block.getType());

	    var fragmentArray = [block, new _draftJs.ContentBlock({
	      key: (0, _draftJs.genKey)(),
	      type: 'unstyled',
	      text: '',
	      characterList: (0, _immutable.List)()
	    })];

	    var fragment = _draftJs.BlockMapBuilder.createFromArray(fragmentArray);

	    var withBlock = _draftJs.Modifier.replaceWithFragment(asType, insertionTarget, fragment);

	    var newContent = withBlock.merge({
	      selectionBefore: selectionState,
	      selectionAfter: withBlock.getSelectionAfter().set('hasFocus', true)
	    });

	    return _draftJs.EditorState.push(editorState, newContent, 'insert-fragment');
	  },
	  getSelectedInlineStyles: function getSelectedInlineStyles(editorState) {
	    var selection = editorState.getSelection();
	    var contentState = editorState.getCurrentContent();

	    var blocks = contentState.getBlockMap().skipUntil(function (value, key) {
	      return key === selection.getStartKey();
	    }).takeUntil(function (value, key) {
	      return contentState.getKeyBefore(key) === selection.getEndKey();
	    });

	    return blocks.reduce(function (styles, block) {
	      var blockKey = block.getKey();
	      var start = 0;
	      var end = block.getLength() - 1;
	      if (blockKey === selection.getStartKey()) {
	        start = selection.getStartOffset();
	      }
	      if (blockKey === selection.getEndKey()) {
	        end = selection.getEndOffset();
	      }

	      for (var i = start; i <= end; i++) {
	        styles = styles.union(block.getInlineStyleAt(i));
	      }

	      return styles;
	    }, (0, _immutable.Set)());
	  },
	  matchAll: function matchAll(string, regex) {
	    var result = [];
	    var matchArray = regex.exec(string);
	    while (matchArray !== null) {
	      result.push(matchArray.concat([matchArray.index]));
	      matchArray = regex.exec(string);
	    }
	    return result;
	  },


	  getActiveEntity: getActiveEntity,

	  isEntityActive: function isEntityActive(editorState, entityType) {
	    var activeEntityKey = getActiveEntity(editorState);
	    var contentState = editorState.getCurrentContent();
	    if (activeEntityKey) {
	      var entity = contentState.getEntity ? contentState.getEntity(activeEntityKey) : _draftJs.Entity.get(activeEntityKey);
	      return entity && entity.type === entityType;
	    }
	    return false;
	  }
	};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	// utility function to accumulate the common plugin option function pattern of
	// handling args by returning a non-null result or delegate to other plugins
	exports.default = function (newFn, acc) {
	  return function () {
	    var result = newFn.apply(undefined, arguments);
	    if (result === null || result === undefined) {
	      return acc.apply(undefined, arguments);
	    }
	    return result;
	  };
	};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = memoize;

	var _immutable = __webpack_require__(2);

	// memoization higher-order function using Immutable.js.
	// used to memoize accumulated options when rendering plugin wrapper components.

	function memoize(func) {
	  var _cache = (0, _immutable.Map)();

	  return function () {
	    var argList = _immutable.List.of.apply(_immutable.List, arguments);
	    if (!_cache.has(argList)) {
	      _cache = _cache.set(argList, func.apply(undefined, arguments));
	    }
	    return _cache.get(argList);
	  };
	};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _immutable = __webpack_require__(2);

	// function to handle previous techniques to convert to HTML, including
	// plain objects with `{start, end}` values and non-HOF functions that return
	// either a String or ReactElement

	var middlewareAdapter = function middlewareAdapter(middleware) {
	  if (middleware && middleware.__isMiddleware) {
	    return middleware;
	  }
	  return function (next) {
	    return function () {
	      if ((typeof middleware === 'undefined' ? 'undefined' : _typeof(middleware)) === 'object') {
	        // handle old blockToHTML objects
	        var block = arguments.length <= 0 ? undefined : arguments[0];

	        var objectResult = void 0;

	        if (typeof block === 'string') {
	          // handle case of inline style value
	          var style = block;
	          if (true) {
	            console.warn('styleToHTML: Use of plain objects to define HTML output is being deprecated. Please switch to using functions that return a {start, end} object or ReactElement.');
	          }

	          objectResult = middleware[style];
	        } else {
	          if (true) {
	            console.warn('blockToHTML: Use of plain objects to define HTML output is being deprecated. Please switch to using functions that return a {start, end} object or ReactElement.');
	          }

	          objectResult = middleware[block.type];
	        }

	        // check for inline style value instead of a raw block
	        if (objectResult !== null && objectResult !== undefined) {
	          return objectResult;
	        }
	        return next.apply(undefined, arguments);
	      }

	      var returnValue = void 0;
	      try {
	        // try immediately giving the function the content data in case it's a simple
	        // function that doesn't expect a `next` function
	        var nonMiddlewareResult = middleware.apply(undefined, arguments);
	        if (nonMiddlewareResult === null || nonMiddlewareResult === undefined) {
	          // the behavior for non-middleware functions is to delegate by returning
	          // `null` or `undefined`, so do delegation for them
	          returnValue = next.apply(undefined, arguments);
	        } else if (arguments.length === 2 && typeof (arguments.length <= 1 ? undefined : arguments[1]) === 'string' && (arguments.length <= 1 ? undefined : arguments[1]) === nonMiddlewareResult) {
	          // entityToHTML option returned `originalText`, i.e. no change was made
	          returnValue = next.apply(undefined, arguments);
	        } else if (Array.isArray(nonMiddlewareResult)) {
	          // returned an array from a textToEntity function, concat with next
	          returnValue = nonMiddlewareResult.concat(next.apply(undefined, arguments));
	        } else if (_immutable.OrderedSet.isOrderedSet(nonMiddlewareResult)) {
	          var _ref;

	          // returned an OrderedSet from htmlToStyle, pass to next as third argument
	          var previousStyles = (_ref = arguments.length - 1, arguments.length <= _ref ? undefined : arguments[_ref]);
	          returnValue = previousStyles.union(nonMiddlewareResult).union(next.apply(undefined, arguments));
	        } else if (typeof nonMiddlewareResult === 'function') {
	          // most middleware HOFs will return another function when invoked, so we
	          // can assume that it is one here
	          returnValue = middleware(next).apply(undefined, arguments);
	        } else {
	          // the function was a simple non-middleware function and
	          // returned a reasonable value, so return its result
	          returnValue = nonMiddlewareResult;
	        }
	      } catch (e) {
	        // it's possible that trying to use a middleware function like a simple non-
	        // middleware function will throw, so try it as a middleware HOF
	        returnValue = middleware(next).apply(undefined, arguments);
	      } finally {
	        return returnValue;
	      }
	    };
	  };
	};

	exports.default = middlewareAdapter;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var _assign = __webpack_require__(9);

	var emptyObject = __webpack_require__(40);
	var _invariant = __webpack_require__(7);

	if (true) {
	  var warning = __webpack_require__(8);
	}

	var MIXINS_KEY = 'mixins';

	// Helper function to allow the creation of anonymous functions which do not
	// have .name set to the name of the variable being assigned to.
	function identity(fn) {
	  return fn;
	}

	var ReactPropTypeLocationNames;
	if (true) {
	  ReactPropTypeLocationNames = {
	    prop: 'prop',
	    context: 'context',
	    childContext: 'child context'
	  };
	} else {
	  ReactPropTypeLocationNames = {};
	}

	function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
	  /**
	   * Policies that describe methods in `ReactClassInterface`.
	   */

	  var injectedMixins = [];

	  /**
	   * Composite components are higher-level components that compose other composite
	   * or host components.
	   *
	   * To create a new type of `ReactClass`, pass a specification of
	   * your new class to `React.createClass`. The only requirement of your class
	   * specification is that you implement a `render` method.
	   *
	   *   var MyComponent = React.createClass({
	   *     render: function() {
	   *       return <div>Hello World</div>;
	   *     }
	   *   });
	   *
	   * The class specification supports a specific protocol of methods that have
	   * special meaning (e.g. `render`). See `ReactClassInterface` for
	   * more the comprehensive protocol. Any other properties and methods in the
	   * class specification will be available on the prototype.
	   *
	   * @interface ReactClassInterface
	   * @internal
	   */
	  var ReactClassInterface = {
	    /**
	     * An array of Mixin objects to include when defining your component.
	     *
	     * @type {array}
	     * @optional
	     */
	    mixins: 'DEFINE_MANY',

	    /**
	     * An object containing properties and methods that should be defined on
	     * the component's constructor instead of its prototype (static methods).
	     *
	     * @type {object}
	     * @optional
	     */
	    statics: 'DEFINE_MANY',

	    /**
	     * Definition of prop types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    propTypes: 'DEFINE_MANY',

	    /**
	     * Definition of context types for this component.
	     *
	     * @type {object}
	     * @optional
	     */
	    contextTypes: 'DEFINE_MANY',

	    /**
	     * Definition of context types this component sets for its children.
	     *
	     * @type {object}
	     * @optional
	     */
	    childContextTypes: 'DEFINE_MANY',

	    // ==== Definition methods ====

	    /**
	     * Invoked when the component is mounted. Values in the mapping will be set on
	     * `this.props` if that prop is not specified (i.e. using an `in` check).
	     *
	     * This method is invoked before `getInitialState` and therefore cannot rely
	     * on `this.state` or use `this.setState`.
	     *
	     * @return {object}
	     * @optional
	     */
	    getDefaultProps: 'DEFINE_MANY_MERGED',

	    /**
	     * Invoked once before the component is mounted. The return value will be used
	     * as the initial value of `this.state`.
	     *
	     *   getInitialState: function() {
	     *     return {
	     *       isOn: false,
	     *       fooBaz: new BazFoo()
	     *     }
	     *   }
	     *
	     * @return {object}
	     * @optional
	     */
	    getInitialState: 'DEFINE_MANY_MERGED',

	    /**
	     * @return {object}
	     * @optional
	     */
	    getChildContext: 'DEFINE_MANY_MERGED',

	    /**
	     * Uses props from `this.props` and state from `this.state` to render the
	     * structure of the component.
	     *
	     * No guarantees are made about when or how often this method is invoked, so
	     * it must not have side effects.
	     *
	     *   render: function() {
	     *     var name = this.props.name;
	     *     return <div>Hello, {name}!</div>;
	     *   }
	     *
	     * @return {ReactComponent}
	     * @required
	     */
	    render: 'DEFINE_ONCE',

	    // ==== Delegate methods ====

	    /**
	     * Invoked when the component is initially created and about to be mounted.
	     * This may have side effects, but any external subscriptions or data created
	     * by this method must be cleaned up in `componentWillUnmount`.
	     *
	     * @optional
	     */
	    componentWillMount: 'DEFINE_MANY',

	    /**
	     * Invoked when the component has been mounted and has a DOM representation.
	     * However, there is no guarantee that the DOM node is in the document.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been mounted (initialized and rendered) for the first time.
	     *
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidMount: 'DEFINE_MANY',

	    /**
	     * Invoked before the component receives new props.
	     *
	     * Use this as an opportunity to react to a prop transition by updating the
	     * state using `this.setState`. Current props are accessed via `this.props`.
	     *
	     *   componentWillReceiveProps: function(nextProps, nextContext) {
	     *     this.setState({
	     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
	     *     });
	     *   }
	     *
	     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
	     * transition may cause a state change, but the opposite is not true. If you
	     * need it, you are probably looking for `componentWillUpdate`.
	     *
	     * @param {object} nextProps
	     * @optional
	     */
	    componentWillReceiveProps: 'DEFINE_MANY',

	    /**
	     * Invoked while deciding if the component should be updated as a result of
	     * receiving new props, state and/or context.
	     *
	     * Use this as an opportunity to `return false` when you're certain that the
	     * transition to the new props/state/context will not require a component
	     * update.
	     *
	     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
	     *     return !equal(nextProps, this.props) ||
	     *       !equal(nextState, this.state) ||
	     *       !equal(nextContext, this.context);
	     *   }
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @return {boolean} True if the component should update.
	     * @optional
	     */
	    shouldComponentUpdate: 'DEFINE_ONCE',

	    /**
	     * Invoked when the component is about to update due to a transition from
	     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
	     * and `nextContext`.
	     *
	     * Use this as an opportunity to perform preparation before an update occurs.
	     *
	     * NOTE: You **cannot** use `this.setState()` in this method.
	     *
	     * @param {object} nextProps
	     * @param {?object} nextState
	     * @param {?object} nextContext
	     * @param {ReactReconcileTransaction} transaction
	     * @optional
	     */
	    componentWillUpdate: 'DEFINE_MANY',

	    /**
	     * Invoked when the component's DOM representation has been updated.
	     *
	     * Use this as an opportunity to operate on the DOM when the component has
	     * been updated.
	     *
	     * @param {object} prevProps
	     * @param {?object} prevState
	     * @param {?object} prevContext
	     * @param {DOMElement} rootNode DOM element representing the component.
	     * @optional
	     */
	    componentDidUpdate: 'DEFINE_MANY',

	    /**
	     * Invoked when the component is about to be removed from its parent and have
	     * its DOM representation destroyed.
	     *
	     * Use this as an opportunity to deallocate any external resources.
	     *
	     * NOTE: There is no `componentDidUnmount` since your component will have been
	     * destroyed by that point.
	     *
	     * @optional
	     */
	    componentWillUnmount: 'DEFINE_MANY',

	    // ==== Advanced methods ====

	    /**
	     * Updates the component's currently mounted DOM representation.
	     *
	     * By default, this implements React's rendering and reconciliation algorithm.
	     * Sophisticated clients may wish to override this.
	     *
	     * @param {ReactReconcileTransaction} transaction
	     * @internal
	     * @overridable
	     */
	    updateComponent: 'OVERRIDE_BASE'
	  };

	  /**
	   * Mapping from class specification keys to special processing functions.
	   *
	   * Although these are declared like instance properties in the specification
	   * when defining classes using `React.createClass`, they are actually static
	   * and are accessible on the constructor instead of the prototype. Despite
	   * being static, they must be defined outside of the "statics" key under
	   * which all other static methods are defined.
	   */
	  var RESERVED_SPEC_KEYS = {
	    displayName: function(Constructor, displayName) {
	      Constructor.displayName = displayName;
	    },
	    mixins: function(Constructor, mixins) {
	      if (mixins) {
	        for (var i = 0; i < mixins.length; i++) {
	          mixSpecIntoComponent(Constructor, mixins[i]);
	        }
	      }
	    },
	    childContextTypes: function(Constructor, childContextTypes) {
	      if (true) {
	        validateTypeDef(Constructor, childContextTypes, 'childContext');
	      }
	      Constructor.childContextTypes = _assign(
	        {},
	        Constructor.childContextTypes,
	        childContextTypes
	      );
	    },
	    contextTypes: function(Constructor, contextTypes) {
	      if (true) {
	        validateTypeDef(Constructor, contextTypes, 'context');
	      }
	      Constructor.contextTypes = _assign(
	        {},
	        Constructor.contextTypes,
	        contextTypes
	      );
	    },
	    /**
	     * Special case getDefaultProps which should move into statics but requires
	     * automatic merging.
	     */
	    getDefaultProps: function(Constructor, getDefaultProps) {
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps = createMergedResultFunction(
	          Constructor.getDefaultProps,
	          getDefaultProps
	        );
	      } else {
	        Constructor.getDefaultProps = getDefaultProps;
	      }
	    },
	    propTypes: function(Constructor, propTypes) {
	      if (true) {
	        validateTypeDef(Constructor, propTypes, 'prop');
	      }
	      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
	    },
	    statics: function(Constructor, statics) {
	      mixStaticSpecIntoComponent(Constructor, statics);
	    },
	    autobind: function() {}
	  };

	  function validateTypeDef(Constructor, typeDef, location) {
	    for (var propName in typeDef) {
	      if (typeDef.hasOwnProperty(propName)) {
	        // use a warning instead of an _invariant so components
	        // don't show up in prod but only in __DEV__
	        if (true) {
	          warning(
	            typeof typeDef[propName] === 'function',
	            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
	              'React.PropTypes.',
	            Constructor.displayName || 'ReactClass',
	            ReactPropTypeLocationNames[location],
	            propName
	          );
	        }
	      }
	    }
	  }

	  function validateMethodOverride(isAlreadyDefined, name) {
	    var specPolicy = ReactClassInterface.hasOwnProperty(name)
	      ? ReactClassInterface[name]
	      : null;

	    // Disallow overriding of base class methods unless explicitly allowed.
	    if (ReactClassMixin.hasOwnProperty(name)) {
	      _invariant(
	        specPolicy === 'OVERRIDE_BASE',
	        'ReactClassInterface: You are attempting to override ' +
	          '`%s` from your class specification. Ensure that your method names ' +
	          'do not overlap with React methods.',
	        name
	      );
	    }

	    // Disallow defining methods more than once unless explicitly allowed.
	    if (isAlreadyDefined) {
	      _invariant(
	        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
	        'ReactClassInterface: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be due ' +
	          'to a mixin.',
	        name
	      );
	    }
	  }

	  /**
	   * Mixin helper which handles policy validation and reserved
	   * specification keys when building React classes.
	   */
	  function mixSpecIntoComponent(Constructor, spec) {
	    if (!spec) {
	      if (true) {
	        var typeofSpec = typeof spec;
	        var isMixinValid = typeofSpec === 'object' && spec !== null;

	        if (true) {
	          warning(
	            isMixinValid,
	            "%s: You're attempting to include a mixin that is either null " +
	              'or not an object. Check the mixins included by the component, ' +
	              'as well as any mixins they include themselves. ' +
	              'Expected object but got %s.',
	            Constructor.displayName || 'ReactClass',
	            spec === null ? null : typeofSpec
	          );
	        }
	      }

	      return;
	    }

	    _invariant(
	      typeof spec !== 'function',
	      "ReactClass: You're attempting to " +
	        'use a component class or function as a mixin. Instead, just use a ' +
	        'regular object.'
	    );
	    _invariant(
	      !isValidElement(spec),
	      "ReactClass: You're attempting to " +
	        'use a component as a mixin. Instead, just use a regular object.'
	    );

	    var proto = Constructor.prototype;
	    var autoBindPairs = proto.__reactAutoBindPairs;

	    // By handling mixins before any other properties, we ensure the same
	    // chaining order is applied to methods with DEFINE_MANY policy, whether
	    // mixins are listed before or after these methods in the spec.
	    if (spec.hasOwnProperty(MIXINS_KEY)) {
	      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
	    }

	    for (var name in spec) {
	      if (!spec.hasOwnProperty(name)) {
	        continue;
	      }

	      if (name === MIXINS_KEY) {
	        // We have already handled mixins in a special case above.
	        continue;
	      }

	      var property = spec[name];
	      var isAlreadyDefined = proto.hasOwnProperty(name);
	      validateMethodOverride(isAlreadyDefined, name);

	      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
	        RESERVED_SPEC_KEYS[name](Constructor, property);
	      } else {
	        // Setup methods on prototype:
	        // The following member methods should not be automatically bound:
	        // 1. Expected ReactClass methods (in the "interface").
	        // 2. Overridden methods (that were mixed in).
	        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
	        var isFunction = typeof property === 'function';
	        var shouldAutoBind =
	          isFunction &&
	          !isReactClassMethod &&
	          !isAlreadyDefined &&
	          spec.autobind !== false;

	        if (shouldAutoBind) {
	          autoBindPairs.push(name, property);
	          proto[name] = property;
	        } else {
	          if (isAlreadyDefined) {
	            var specPolicy = ReactClassInterface[name];

	            // These cases should already be caught by validateMethodOverride.
	            _invariant(
	              isReactClassMethod &&
	                (specPolicy === 'DEFINE_MANY_MERGED' ||
	                  specPolicy === 'DEFINE_MANY'),
	              'ReactClass: Unexpected spec policy %s for key %s ' +
	                'when mixing in component specs.',
	              specPolicy,
	              name
	            );

	            // For methods which are defined more than once, call the existing
	            // methods before calling the new property, merging if appropriate.
	            if (specPolicy === 'DEFINE_MANY_MERGED') {
	              proto[name] = createMergedResultFunction(proto[name], property);
	            } else if (specPolicy === 'DEFINE_MANY') {
	              proto[name] = createChainedFunction(proto[name], property);
	            }
	          } else {
	            proto[name] = property;
	            if (true) {
	              // Add verbose displayName to the function, which helps when looking
	              // at profiling tools.
	              if (typeof property === 'function' && spec.displayName) {
	                proto[name].displayName = spec.displayName + '_' + name;
	              }
	            }
	          }
	        }
	      }
	    }
	  }

	  function mixStaticSpecIntoComponent(Constructor, statics) {
	    if (!statics) {
	      return;
	    }
	    for (var name in statics) {
	      var property = statics[name];
	      if (!statics.hasOwnProperty(name)) {
	        continue;
	      }

	      var isReserved = name in RESERVED_SPEC_KEYS;
	      _invariant(
	        !isReserved,
	        'ReactClass: You are attempting to define a reserved ' +
	          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
	          'as an instance property instead; it will still be accessible on the ' +
	          'constructor.',
	        name
	      );

	      var isInherited = name in Constructor;
	      _invariant(
	        !isInherited,
	        'ReactClass: You are attempting to define ' +
	          '`%s` on your component more than once. This conflict may be ' +
	          'due to a mixin.',
	        name
	      );
	      Constructor[name] = property;
	    }
	  }

	  /**
	   * Merge two objects, but throw if both contain the same key.
	   *
	   * @param {object} one The first object, which is mutated.
	   * @param {object} two The second object
	   * @return {object} one after it has been mutated to contain everything in two.
	   */
	  function mergeIntoWithNoDuplicateKeys(one, two) {
	    _invariant(
	      one && two && typeof one === 'object' && typeof two === 'object',
	      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
	    );

	    for (var key in two) {
	      if (two.hasOwnProperty(key)) {
	        _invariant(
	          one[key] === undefined,
	          'mergeIntoWithNoDuplicateKeys(): ' +
	            'Tried to merge two objects with the same key: `%s`. This conflict ' +
	            'may be due to a mixin; in particular, this may be caused by two ' +
	            'getInitialState() or getDefaultProps() methods returning objects ' +
	            'with clashing keys.',
	          key
	        );
	        one[key] = two[key];
	      }
	    }
	    return one;
	  }

	  /**
	   * Creates a function that invokes two functions and merges their return values.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createMergedResultFunction(one, two) {
	    return function mergedResult() {
	      var a = one.apply(this, arguments);
	      var b = two.apply(this, arguments);
	      if (a == null) {
	        return b;
	      } else if (b == null) {
	        return a;
	      }
	      var c = {};
	      mergeIntoWithNoDuplicateKeys(c, a);
	      mergeIntoWithNoDuplicateKeys(c, b);
	      return c;
	    };
	  }

	  /**
	   * Creates a function that invokes two functions and ignores their return vales.
	   *
	   * @param {function} one Function to invoke first.
	   * @param {function} two Function to invoke second.
	   * @return {function} Function that invokes the two argument functions.
	   * @private
	   */
	  function createChainedFunction(one, two) {
	    return function chainedFunction() {
	      one.apply(this, arguments);
	      two.apply(this, arguments);
	    };
	  }

	  /**
	   * Binds a method to the component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   * @param {function} method Method to be bound.
	   * @return {function} The bound method.
	   */
	  function bindAutoBindMethod(component, method) {
	    var boundMethod = method.bind(component);
	    if (true) {
	      boundMethod.__reactBoundContext = component;
	      boundMethod.__reactBoundMethod = method;
	      boundMethod.__reactBoundArguments = null;
	      var componentName = component.constructor.displayName;
	      var _bind = boundMethod.bind;
	      boundMethod.bind = function(newThis) {
	        for (
	          var _len = arguments.length,
	            args = Array(_len > 1 ? _len - 1 : 0),
	            _key = 1;
	          _key < _len;
	          _key++
	        ) {
	          args[_key - 1] = arguments[_key];
	        }

	        // User is trying to bind() an autobound method; we effectively will
	        // ignore the value of "this" that the user is trying to use, so
	        // let's warn.
	        if (newThis !== component && newThis !== null) {
	          if (true) {
	            warning(
	              false,
	              'bind(): React component methods may only be bound to the ' +
	                'component instance. See %s',
	              componentName
	            );
	          }
	        } else if (!args.length) {
	          if (true) {
	            warning(
	              false,
	              'bind(): You are binding a component method to the component. ' +
	                'React does this for you automatically in a high-performance ' +
	                'way, so you can safely remove this call. See %s',
	              componentName
	            );
	          }
	          return boundMethod;
	        }
	        var reboundMethod = _bind.apply(boundMethod, arguments);
	        reboundMethod.__reactBoundContext = component;
	        reboundMethod.__reactBoundMethod = method;
	        reboundMethod.__reactBoundArguments = args;
	        return reboundMethod;
	      };
	    }
	    return boundMethod;
	  }

	  /**
	   * Binds all auto-bound methods in a component.
	   *
	   * @param {object} component Component whose method is going to be bound.
	   */
	  function bindAutoBindMethods(component) {
	    var pairs = component.__reactAutoBindPairs;
	    for (var i = 0; i < pairs.length; i += 2) {
	      var autoBindKey = pairs[i];
	      var method = pairs[i + 1];
	      component[autoBindKey] = bindAutoBindMethod(component, method);
	    }
	  }

	  var IsMountedPreMixin = {
	    componentDidMount: function() {
	      this.__isMounted = true;
	    }
	  };

	  var IsMountedPostMixin = {
	    componentWillUnmount: function() {
	      this.__isMounted = false;
	    }
	  };

	  /**
	   * Add more to the ReactClass base class. These are all legacy features and
	   * therefore not already part of the modern ReactComponent.
	   */
	  var ReactClassMixin = {
	    /**
	     * TODO: This will be deprecated because state should always keep a consistent
	     * type signature and the only use case for this, is to avoid that.
	     */
	    replaceState: function(newState, callback) {
	      this.updater.enqueueReplaceState(this, newState, callback);
	    },

	    /**
	     * Checks whether or not this composite component is mounted.
	     * @return {boolean} True if mounted, false otherwise.
	     * @protected
	     * @final
	     */
	    isMounted: function() {
	      if (true) {
	        warning(
	          this.__didWarnIsMounted,
	          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
	            'subscriptions and pending requests in componentWillUnmount to ' +
	            'prevent memory leaks.',
	          (this.constructor && this.constructor.displayName) ||
	            this.name ||
	            'Component'
	        );
	        this.__didWarnIsMounted = true;
	      }
	      return !!this.__isMounted;
	    }
	  };

	  var ReactClassComponent = function() {};
	  _assign(
	    ReactClassComponent.prototype,
	    ReactComponent.prototype,
	    ReactClassMixin
	  );

	  /**
	   * Creates a composite component class given a class specification.
	   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
	   *
	   * @param {object} spec Class specification (which must define `render`).
	   * @return {function} Component constructor function.
	   * @public
	   */
	  function createClass(spec) {
	    // To keep our warnings more understandable, we'll use a little hack here to
	    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
	    // unnecessarily identify a class without displayName as 'Constructor'.
	    var Constructor = identity(function(props, context, updater) {
	      // This constructor gets overridden by mocks. The argument is used
	      // by mocks to assert on what gets mounted.

	      if (true) {
	        warning(
	          this instanceof Constructor,
	          'Something is calling a React component directly. Use a factory or ' +
	            'JSX instead. See: https://fb.me/react-legacyfactory'
	        );
	      }

	      // Wire up auto-binding
	      if (this.__reactAutoBindPairs.length) {
	        bindAutoBindMethods(this);
	      }

	      this.props = props;
	      this.context = context;
	      this.refs = emptyObject;
	      this.updater = updater || ReactNoopUpdateQueue;

	      this.state = null;

	      // ReactClasses doesn't have constructors. Instead, they use the
	      // getInitialState and componentWillMount methods for initialization.

	      var initialState = this.getInitialState ? this.getInitialState() : null;
	      if (true) {
	        // We allow auto-mocks to proceed as if they're returning null.
	        if (
	          initialState === undefined &&
	          this.getInitialState._isMockFunction
	        ) {
	          // This is probably bad practice. Consider warning here and
	          // deprecating this convenience.
	          initialState = null;
	        }
	      }
	      _invariant(
	        typeof initialState === 'object' && !Array.isArray(initialState),
	        '%s.getInitialState(): must return an object or null',
	        Constructor.displayName || 'ReactCompositeComponent'
	      );

	      this.state = initialState;
	    });
	    Constructor.prototype = new ReactClassComponent();
	    Constructor.prototype.constructor = Constructor;
	    Constructor.prototype.__reactAutoBindPairs = [];

	    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

	    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
	    mixSpecIntoComponent(Constructor, spec);
	    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

	    // Initialize the defaultProps property after all mixins have been merged.
	    if (Constructor.getDefaultProps) {
	      Constructor.defaultProps = Constructor.getDefaultProps();
	    }

	    if (true) {
	      // This is a tag to indicate that the use of these method names is ok,
	      // since it's used with createClass. If it's not, then it's likely a
	      // mistake so we'll warn you to use the static property, property
	      // initializer or constructor respectively.
	      if (Constructor.getDefaultProps) {
	        Constructor.getDefaultProps.isReactClassApproved = {};
	      }
	      if (Constructor.prototype.getInitialState) {
	        Constructor.prototype.getInitialState.isReactClassApproved = {};
	      }
	    }

	    _invariant(
	      Constructor.prototype.render,
	      'createClass(...): Class specification must implement a `render` method.'
	    );

	    if (true) {
	      warning(
	        !Constructor.prototype.componentShouldUpdate,
	        '%s has a method called ' +
	          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
	          'The name is phrased as a question because the function is ' +
	          'expected to return a value.',
	        spec.displayName || 'A component'
	      );
	      warning(
	        !Constructor.prototype.componentWillRecieveProps,
	        '%s has a method called ' +
	          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
	        spec.displayName || 'A component'
	      );
	    }

	    // Reduce time spent doing lookups by setting these on the prototype.
	    for (var methodName in ReactClassInterface) {
	      if (!Constructor.prototype[methodName]) {
	        Constructor.prototype[methodName] = null;
	      }
	    }

	    return Constructor;
	  }

	  return createClass;
	}

	module.exports = factory;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var getDisplayName = function getDisplayName(WrappedComponent) {
	  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
	};

	/* eslint-disable space-before-keywords */

	exports.default = function (EmbeddedComponent, props) {
	  var _class, _temp;

	  return _temp = _class = function (_Component) {
	    _inherits(_class, _Component);

	    function _class() {
	      _classCallCheck(this, _class);

	      return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
	    }

	    _createClass(_class, [{
	      key: 'render',
	      value: function render() {
	        return _react2.default.createElement(EmbeddedComponent, _extends({}, this.props, props));
	      }
	    }]);

	    return _class;
	  }(_react.Component), _class.displayName = 'Decorated(' + getDisplayName(EmbeddedComponent) + ')', _temp;
	};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _immutable = __webpack_require__(2);

	var _immutable2 = _interopRequireDefault(_immutable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var KEY_SEPARATOR = '-';

	var MultiDecorator = function () {
	  function MultiDecorator(decorators) {
	    _classCallCheck(this, MultiDecorator);

	    this.decorators = _immutable2.default.List(decorators);
	  }

	  /**
	   * Return list of decoration IDs per character
	   *
	   * @param {ContentBlock} block
	   * @return {List<String>}
	   */


	  _createClass(MultiDecorator, [{
	    key: 'getDecorations',
	    value: function getDecorations(block, contentState) {
	      var decorations = new Array(block.getText().length).fill(null);

	      this.decorators.forEach(function (decorator, i) {
	        var subDecorations = decorator.getDecorations(block, contentState);

	        subDecorations.forEach(function (key, offset) {
	          if (!key) {
	            return;
	          }

	          decorations[offset] = i + KEY_SEPARATOR + key;
	        });
	      });

	      return _immutable2.default.List(decorations);
	    }

	    /**
	     * Return component to render a decoration
	     *
	     * @param {String} key
	     * @return {Function}
	     */

	  }, {
	    key: 'getComponentForKey',
	    value: function getComponentForKey(key) {
	      var decorator = this.getDecoratorForKey(key);
	      return decorator.getComponentForKey(MultiDecorator.getInnerKey(key));
	    }

	    /**
	     * Return props to render a decoration
	     *
	     * @param {String} key
	     * @return {Object}
	     */

	  }, {
	    key: 'getPropsForKey',
	    value: function getPropsForKey(key) {
	      var decorator = this.getDecoratorForKey(key);
	      return decorator.getPropsForKey(MultiDecorator.getInnerKey(key));
	    }

	    /**
	     * Return a decorator for a specific key
	     *
	     * @param {String} key
	     * @return {Decorator}
	     */

	  }, {
	    key: 'getDecoratorForKey',
	    value: function getDecoratorForKey(key) {
	      var parts = key.split(KEY_SEPARATOR);
	      var index = Number(parts[0]);

	      return this.decorators.get(index);
	    }

	    /**
	     * Return inner key for a decorator
	     *
	     * @param {String} key
	     * @return {String}
	     */

	  }], [{
	    key: 'getInnerKey',
	    value: function getInnerKey(key) {
	      var parts = key.split(KEY_SEPARATOR);
	      return parts.slice(1).join(KEY_SEPARATOR);
	    }
	  }]);

	  return MultiDecorator;
	}();

	module.exports = MultiDecorator;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
	                                                                                                                                                                                                                                                                   * Creates a composite decorator based on the provided plugins
	                                                                                                                                                                                                                                                                   */

	var _immutable = __webpack_require__(2);

	var _draftJs = __webpack_require__(1);

	var _decorateComponentWithProps = __webpack_require__(25);

	var _decorateComponentWithProps2 = _interopRequireDefault(_decorateComponentWithProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (decorators, getEditorState, setEditorState) {
	  var convertedDecorators = (0, _immutable.List)(decorators).map(function (decorator) {
	    return _extends({}, decorator, {
	      component: (0, _decorateComponentWithProps2.default)(decorator.component, { getEditorState: getEditorState, setEditorState: setEditorState })
	    });
	  }).toJS();

	  return new _draftJs.CompositeDecorator(convertedDecorators);
	};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _draftJs = __webpack_require__(1);

	exports.default = {
	  keyBindingFn: function keyBindingFn(event) {
	    return (0, _draftJs.getDefaultKeyBinding)(event);
	  }
	};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _draftJs = __webpack_require__(1);

	exports.default = {
	  // handle delete commands
	  handleKeyCommand: function handleKeyCommand(command, editorState, _ref) {
	    var setEditorState = _ref.setEditorState;

	    var newState = void 0;
	    switch (command) {
	      case 'backspace':
	      case 'backspace-word':
	      case 'backspace-to-start-of-line':
	        newState = _draftJs.RichUtils.onBackspace(editorState);
	        break;
	      case 'delete':
	      case 'delete-word':
	      case 'delete-to-end-of-block':
	        newState = _draftJs.RichUtils.onDelete(editorState);
	        break;
	      default:
	        return 'not-handled';
	    }

	    if (newState != null) {
	      setEditorState(newState);
	      return 'handled';
	    }

	    return 'not-handled';
	  }
	};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(39);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	var _draftJs = __webpack_require__(1);

	var _immutable = __webpack_require__(2);

	var _proxies = __webpack_require__(32);

	var _proxies2 = _interopRequireDefault(_proxies);

	var _moveSelectionToEnd = __webpack_require__(31);

	var _moveSelectionToEnd2 = _interopRequireDefault(_moveSelectionToEnd);

	var _resolveDecorators = __webpack_require__(33);

	var _resolveDecorators2 = _interopRequireDefault(_resolveDecorators);

	var _defaultKeyBindings = __webpack_require__(28);

	var _defaultKeyBindings2 = _interopRequireDefault(_defaultKeyBindings);

	var _defaultKeyCommands = __webpack_require__(29);

	var _defaultKeyCommands2 = _interopRequireDefault(_defaultKeyCommands);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-continue,no-restricted-syntax */


	var getDecoratorLength = function getDecoratorLength(obj) {
	  var decorators = void 0;

	  if (obj.decorators != null) {
	    decorators = obj.decorators;
	  } else if (obj._decorators != null) {
	    decorators = obj._decorators;
	  }

	  return decorators.size != null ? decorators.size : decorators.length;
	};

	/**
	 * The main editor component
	 */

	var PluginEditor = function (_Component) {
	  _inherits(PluginEditor, _Component);

	  function PluginEditor(props) {
	    _classCallCheck(this, PluginEditor);

	    var _this = _possibleConstructorReturn(this, (PluginEditor.__proto__ || Object.getPrototypeOf(PluginEditor)).call(this, props));

	    _initialiseProps.call(_this);

	    var plugins = [_this.props].concat(_toConsumableArray(_this.resolvePlugins()));
	    plugins.forEach(function (plugin) {
	      if (typeof plugin.initialize !== 'function') return;
	      plugin.initialize(_this.getPluginMethods());
	    });

	    // attach proxy methods like `focus` or `blur`
	    _proxies2.default.forEach(function (method) {
	      _this[method] = function () {
	        var _this$editor;

	        return (_this$editor = _this.editor)[method].apply(_this$editor, arguments);
	      };
	    });

	    _this.state = {}; // TODO for Nik: ask ben why this is relevent
	    return _this;
	  }

	  _createClass(PluginEditor, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      var decorator = (0, _resolveDecorators2.default)(this.props, this.getEditorState, this.onChange);

	      var editorState = _draftJs.EditorState.set(this.props.editorState, { decorator: decorator });
	      this.onChange((0, _moveSelectionToEnd2.default)(editorState));
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(next) {
	      var curr = this.props;
	      var currDec = curr.editorState.getDecorator();
	      var nextDec = next.editorState.getDecorator();

	      // If there is not current decorator, there's nothing to carry over to the next editor state
	      if (!currDec) return;
	      // If the current decorator is the same as the new one, don't call onChange to avoid infinite loops
	      if (currDec === nextDec) return;
	      // If the old and the new decorator are the same, but no the same object, also don't call onChange to avoid infinite loops
	      if (currDec && nextDec && getDecoratorLength(currDec) === getDecoratorLength(nextDec)) return;

	      var editorState = _draftJs.EditorState.set(next.editorState, { decorator: currDec });
	      this.onChange((0, _moveSelectionToEnd2.default)(editorState));
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      var _this2 = this;

	      this.resolvePlugins().forEach(function (plugin) {
	        if (plugin.willUnmount) {
	          plugin.willUnmount({
	            getEditorState: _this2.getEditorState,
	            setEditorState: _this2.onChange
	          });
	        }
	      });
	    }

	    // Cycle through the plugins, changing the editor state with what the plugins
	    // changed (or didn't)


	    // TODO further down in render we use readOnly={this.props.readOnly || this.state.readOnly}. Ask Ben why readOnly is here just from the props? Why would plugins use this instead of just taking it from getProps?

	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;

	      var pluginHooks = this.createPluginHooks();
	      var customStyleMap = this.resolveCustomStyleMap();
	      var accessibilityProps = this.resolveAccessibilityProps();
	      var blockRenderMap = this.resolveblockRenderMap();
	      return _react2.default.createElement(_draftJs.Editor, _extends({}, this.props, accessibilityProps, pluginHooks, {
	        readOnly: this.props.readOnly || this.state.readOnly,
	        customStyleMap: customStyleMap,
	        blockRenderMap: blockRenderMap,
	        onChange: this.onChange,
	        editorState: this.props.editorState,
	        ref: function ref(element) {
	          _this3.editor = element;
	        }
	      }));
	    }
	  }]);

	  return PluginEditor;
	}(_react.Component);

	PluginEditor.propTypes = {
	  editorState: _propTypes2.default.object.isRequired,
	  onChange: _propTypes2.default.func.isRequired,
	  plugins: _propTypes2.default.array,
	  defaultKeyBindings: _propTypes2.default.bool,
	  defaultKeyCommands: _propTypes2.default.bool,
	  defaultBlockRenderMap: _propTypes2.default.bool,
	  customStyleMap: _propTypes2.default.object,
	  // eslint-disable-next-line react/no-unused-prop-types
	  decorators: _propTypes2.default.array
	};
	PluginEditor.defaultProps = {
	  defaultBlockRenderMap: true,
	  defaultKeyBindings: true,
	  defaultKeyCommands: true,
	  customStyleMap: {},
	  plugins: [],
	  decorators: []
	};

	var _initialiseProps = function _initialiseProps() {
	  var _this4 = this;

	  this.onChange = function (editorState) {
	    var newEditorState = editorState;
	    _this4.resolvePlugins().forEach(function (plugin) {
	      if (plugin.onChange) {
	        newEditorState = plugin.onChange(newEditorState, _this4.getPluginMethods());
	      }
	    });

	    if (_this4.props.onChange) {
	      _this4.props.onChange(newEditorState, _this4.getPluginMethods());
	    }
	  };

	  this.getPlugins = function () {
	    return _this4.props.plugins.slice(0);
	  };

	  this.getProps = function () {
	    return _extends({}, _this4.props);
	  };

	  this.getReadOnly = function () {
	    return _this4.props.readOnly;
	  };

	  this.setReadOnly = function (readOnly) {
	    if (readOnly !== _this4.state.readOnly) _this4.setState({ readOnly: readOnly });
	  };

	  this.getEditorRef = function () {
	    return _this4.editor;
	  };

	  this.getEditorState = function () {
	    return _this4.props.editorState;
	  };

	  this.getPluginMethods = function () {
	    return {
	      getPlugins: _this4.getPlugins,
	      getProps: _this4.getProps,
	      setEditorState: _this4.onChange,
	      getEditorState: _this4.getEditorState,
	      getReadOnly: _this4.getReadOnly,
	      setReadOnly: _this4.setReadOnly,
	      getEditorRef: _this4.getEditorRef
	    };
	  };

	  this.createEventHooks = function (methodName, plugins) {
	    return function () {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      var newArgs = [].slice.apply(args);
	      newArgs.push(_this4.getPluginMethods());

	      return plugins.some(function (plugin) {
	        return typeof plugin[methodName] === 'function' && plugin[methodName].apply(plugin, _toConsumableArray(newArgs)) === true;
	      });
	    };
	  };

	  this.createHandleHooks = function (methodName, plugins) {
	    return function () {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }

	      var newArgs = [].slice.apply(args);
	      newArgs.push(_this4.getPluginMethods());

	      return plugins.some(function (plugin) {
	        return typeof plugin[methodName] === 'function' && plugin[methodName].apply(plugin, _toConsumableArray(newArgs)) === 'handled';
	      }) ? 'handled' : 'not-handled';
	    };
	  };

	  this.createFnHooks = function (methodName, plugins) {
	    return function () {
	      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	        args[_key3] = arguments[_key3];
	      }

	      var newArgs = [].slice.apply(args);

	      newArgs.push(_this4.getPluginMethods());

	      if (methodName === 'blockRendererFn') {
	        var block = { props: {} };
	        plugins.forEach(function (plugin) {
	          if (typeof plugin[methodName] !== 'function') return;
	          var result = plugin[methodName].apply(plugin, _toConsumableArray(newArgs));
	          if (result !== undefined && result !== null) {
	            var pluginProps = result.props,
	                pluginRest = _objectWithoutProperties(result, ['props']); // eslint-disable-line no-use-before-define


	            var _block = block,
	                props = _block.props,
	                rest = _objectWithoutProperties(_block, ['props']); // eslint-disable-line no-use-before-define


	            block = _extends({}, rest, pluginRest, { props: _extends({}, props, pluginProps) });
	          }
	        });

	        return block.component ? block : false;
	      } else if (methodName === 'blockStyleFn') {
	        var styles = void 0;
	        plugins.forEach(function (plugin) {
	          if (typeof plugin[methodName] !== 'function') return;
	          var result = plugin[methodName].apply(plugin, _toConsumableArray(newArgs));
	          if (result !== undefined && result !== null) {
	            styles = (styles ? styles + ' ' : '') + result;
	          }
	        });

	        return styles || '';
	      }

	      var result = void 0;
	      var wasHandled = plugins.some(function (plugin) {
	        if (typeof plugin[methodName] !== 'function') return false;
	        result = plugin[methodName].apply(plugin, _toConsumableArray(newArgs));
	        return result !== undefined;
	      });
	      return wasHandled ? result : false;
	    };
	  };

	  this.createPluginHooks = function () {
	    var pluginHooks = {};
	    var eventHookKeys = [];
	    var handleHookKeys = [];
	    var fnHookKeys = [];
	    var plugins = [_this4.props].concat(_toConsumableArray(_this4.resolvePlugins()));

	    plugins.forEach(function (plugin) {
	      Object.keys(plugin).forEach(function (attrName) {
	        if (attrName === 'onChange') return;

	        // if `attrName` has been added as a hook key already, ignore this one
	        if (eventHookKeys.indexOf(attrName) !== -1 || fnHookKeys.indexOf(attrName) !== -1) return;

	        var isEventHookKey = attrName.indexOf('on') === 0;
	        if (isEventHookKey) {
	          eventHookKeys.push(attrName);
	          return;
	        }

	        var isHandleHookKey = attrName.indexOf('handle') === 0;
	        if (isHandleHookKey) {
	          handleHookKeys.push(attrName);
	          return;
	        }

	        // checks if `attrName` ends with 'Fn'
	        var isFnHookKey = attrName.length - 2 === attrName.indexOf('Fn');
	        if (isFnHookKey) {
	          fnHookKeys.push(attrName);
	        }
	      });
	    });

	    eventHookKeys.forEach(function (attrName) {
	      pluginHooks[attrName] = _this4.createEventHooks(attrName, plugins);
	    });

	    handleHookKeys.forEach(function (attrName) {
	      pluginHooks[attrName] = _this4.createHandleHooks(attrName, plugins);
	    });

	    fnHookKeys.forEach(function (attrName) {
	      pluginHooks[attrName] = _this4.createFnHooks(attrName, plugins);
	    });

	    return pluginHooks;
	  };

	  this.resolvePlugins = function () {
	    var plugins = _this4.props.plugins.slice(0);
	    if (_this4.props.defaultKeyBindings === true) {
	      plugins.push(_defaultKeyBindings2.default);
	    }
	    if (_this4.props.defaultKeyCommands === true) {
	      plugins.push(_defaultKeyCommands2.default);
	    }

	    return plugins;
	  };

	  this.resolveCustomStyleMap = function () {
	    return _this4.props.plugins.filter(function (plug) {
	      return plug.customStyleMap !== undefined;
	    }).map(function (plug) {
	      return plug.customStyleMap;
	    }).concat([_this4.props.customStyleMap]).reduce(function (styles, style) {
	      return _extends({}, styles, style);
	    }, {});
	  };

	  this.resolveblockRenderMap = function () {
	    var blockRenderMap = _this4.props.plugins.filter(function (plug) {
	      return plug.blockRenderMap !== undefined;
	    }).reduce(function (maps, plug) {
	      return maps.merge(plug.blockRenderMap);
	    }, (0, _immutable.Map)({}));
	    if (_this4.props.defaultBlockRenderMap) {
	      blockRenderMap = _draftJs.DefaultDraftBlockRenderMap.merge(blockRenderMap);
	    }
	    if (_this4.props.blockRenderMap) {
	      blockRenderMap = blockRenderMap.merge(_this4.props.blockRenderMap);
	    }
	    return blockRenderMap;
	  };

	  this.resolveAccessibilityProps = function () {
	    var accessibilityProps = {};
	    var plugins = [_this4.props].concat(_toConsumableArray(_this4.resolvePlugins()));
	    plugins.forEach(function (plugin) {
	      if (typeof plugin.getAccessibilityProps !== 'function') return;
	      var props = plugin.getAccessibilityProps();
	      var popupProps = {};

	      if (accessibilityProps.ariaHasPopup === undefined) {
	        popupProps.ariaHasPopup = props.ariaHasPopup;
	      } else if (props.ariaHasPopup === 'true') {
	        popupProps.ariaHasPopup = 'true';
	      }

	      if (accessibilityProps.ariaExpanded === undefined) {
	        popupProps.ariaExpanded = props.ariaExpanded;
	      } else if (props.ariaExpanded === true) {
	        popupProps.ariaExpanded = true;
	      }

	      accessibilityProps = _extends({}, accessibilityProps, props, popupProps);
	    });

	    return accessibilityProps;
	  };
	};

	exports.default = PluginEditor;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _draftJs = __webpack_require__(1);

	/**
	 * Returns a new EditorState where the Selection is at the end.
	 *
	 * This ensures to mimic the textarea behaviour where the Selection is placed at
	 * the end. This is needed when blocks (like stickers or other media) are added
	 * without the editor having had focus yet. It still works to place the
	 * Selection at a specific location by clicking on the text.
	 */
	var moveSelectionToEnd = function moveSelectionToEnd(editorState) {
	  var content = editorState.getCurrentContent();
	  var blockMap = content.getBlockMap();

	  var key = blockMap.last().getKey();
	  var length = blockMap.last().getLength();

	  var selection = new _draftJs.SelectionState({
	    anchorKey: key,
	    anchorOffset: length,
	    focusKey: key,
	    focusOffset: length
	  });

	  return _draftJs.EditorState.acceptSelection(editorState, selection);
	};

	exports.default = moveSelectionToEnd;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// the list of available proxies can be found here: https://github.com/facebook/draft-js/blob/master/src/component/base/DraftEditor.react.js#L120
	var proxies = ['focus', 'blur', 'setMode', 'exitCurrentMode', 'restoreEditorDOM', 'setRenderGuard', 'removeRenderGuard', 'setClipboard', 'getClipboard', 'getEditorKey', 'update', 'onDragEnter', 'onDragLeave'];

	exports.default = proxies;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _immutable = __webpack_require__(2);

	var _createCompositeDecorator = __webpack_require__(27);

	var _createCompositeDecorator2 = _interopRequireDefault(_createCompositeDecorator);

	var _MultiDecorator = __webpack_require__(26);

	var _MultiDecorator2 = _interopRequireDefault(_MultiDecorator);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	// Return true if decorator implements the DraftDecoratorType interface
	// @see https://github.com/facebook/draft-js/blob/master/src/model/decorators/DraftDecoratorType.js
	var decoratorIsCustom = function decoratorIsCustom(decorator) {
	  return typeof decorator.getDecorations === 'function' && typeof decorator.getComponentForKey === 'function' && typeof decorator.getPropsForKey === 'function';
	};

	var getDecoratorsFromProps = function getDecoratorsFromProps(_ref) {
	  var decorators = _ref.decorators,
	      plugins = _ref.plugins;
	  return (0, _immutable.List)([{ decorators: decorators }].concat(_toConsumableArray(plugins))).filter(function (plugin) {
	    return plugin.decorators !== undefined;
	  }).flatMap(function (plugin) {
	    return plugin.decorators;
	  });
	};

	var resolveDecorators = function resolveDecorators(props, getEditorState, onChange) {
	  var decorators = getDecoratorsFromProps(props);
	  var compositeDecorator = (0, _createCompositeDecorator2.default)(decorators.filter(function (decorator) {
	    return !decoratorIsCustom(decorator);
	  }), getEditorState, onChange);

	  var customDecorators = decorators.filter(function (decorator) {
	    return decoratorIsCustom(decorator);
	  });

	  return new _MultiDecorator2.default(customDecorators.push(compositeDecorator));
	};

	exports.default = resolveDecorators;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.composeDecorators = exports.createEditorStateWithText = exports.default = undefined;

	var _createEditorStateWithText = __webpack_require__(36);

	var _createEditorStateWithText2 = _interopRequireDefault(_createEditorStateWithText);

	var _composeDecorators = __webpack_require__(35);

	var _composeDecorators2 = _interopRequireDefault(_composeDecorators);

	var _Editor = __webpack_require__(30);

	var _Editor2 = _interopRequireDefault(_Editor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _Editor2.default;

	// eslint-disable-next-line import/no-named-as-default

	var createEditorStateWithText = exports.createEditorStateWithText = _createEditorStateWithText2.default;
	var composeDecorators = exports.composeDecorators = _composeDecorators2.default;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	// This code originally has been copied from Recompose
	// https://github.com/acdlite/recompose/blob/master/src/packages/recompose/compose.js
	exports.default = function () {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }

	  if (funcs.length === 0) {
	    return function (arg) {
	      return arg;
	    };
	  }

	  if (funcs.length === 1) {
	    return funcs[0];
	  }

	  var last = funcs[funcs.length - 1];
	  return function () {
	    var result = last.apply(undefined, arguments);
	    for (var i = funcs.length - 2; i >= 0; i -= 1) {
	      var f = funcs[i];
	      result = f(result);
	    }
	    return result;
	  };
	};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _draftJs = __webpack_require__(1);

	exports.default = function (text) {
	  return _draftJs.EditorState.createWithContent(_draftJs.ContentState.createFromText(text));
	}; /**
	    * Create an editor state with some text in it already
	    */

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var printWarning = function() {};

	if (true) {
	  var ReactPropTypesSecret = __webpack_require__(11);
	  var loggedTypeFailures = {};
	  var has = Function.call.bind(Object.prototype.hasOwnProperty);

	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (true) {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error(
	              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
	              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
	            );
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning(
	            (componentName || 'React class') + ': type specification of ' +
	            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
	            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
	            'You may have forgotten to pass an argument to the type checker ' +
	            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
	            'shape all require an argument).'
	          );
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          printWarning(
	            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
	          );
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function() {
	  if (true) {
	    loggedTypeFailures = {};
	  }
	}

	module.exports = checkPropTypes;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactIs = __webpack_require__(15);
	var assign = __webpack_require__(9);

	var ReactPropTypesSecret = __webpack_require__(11);
	var checkPropTypes = __webpack_require__(37);

	var has = Function.call.bind(Object.prototype.hasOwnProperty);
	var printWarning = function() {};

	if (true) {
	  printWarning = function(text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	function emptyFunctionThatReturnsNull() {
	  return null;
	}

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (true) {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error(
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (("development") !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            printWarning(
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      if (true) {
	        if (arguments.length > 1) {
	          printWarning(
	            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
	            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
	          );
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunctionThatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning(
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
	        );
	        return emptyFunctionThatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (true) {
	  var ReactIs = __webpack_require__(15);

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = __webpack_require__(38)(ReactIs.isElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = require('./factoryWithThrowingShims')();
	}


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 *
	 */

	'use strict';

	var emptyObject = {};

	if (true) {
	  Object.freeze(emptyObject);
	}

	module.exports = emptyObject;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	if (true) {
	  var invariant = __webpack_require__(7);
	  var warning = __webpack_require__(8);
	  var ReactPropTypesSecret = __webpack_require__(14);
	  var loggedTypeFailures = {};
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  if (true) {
	    for (var typeSpecName in typeSpecs) {
	      if (typeSpecs.hasOwnProperty(typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;

	          var stack = getStack ? getStack() : '';

	          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
	        }
	      }
	    }
	  }
	}

	module.exports = checkPropTypes;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var emptyFunction = __webpack_require__(12);
	var invariant = __webpack_require__(7);
	var warning = __webpack_require__(8);
	var assign = __webpack_require__(9);

	var ReactPropTypesSecret = __webpack_require__(14);
	var checkPropTypes = __webpack_require__(41);

	module.exports = function(isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),

	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker,
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;

	  function createChainableTypeChecker(validate) {
	    if (true) {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;

	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          invariant(
	            false,
	            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	            'Use `PropTypes.checkPropTypes()` to call them. ' +
	            'Read more at http://fb.me/use-check-prop-types'
	          );
	        } else if (("development") !== 'production' && typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (
	            !manualPropTypeCallCache[cacheKey] &&
	            // Avoid spamming the console because they are often not actionable except for lib authors
	            manualPropTypeWarningCount < 3
	          ) {
	            warning(
	              false,
	              'You are manually calling a React.PropTypes validation ' +
	              'function for the `%s` prop on `%s`. This is deprecated ' +
	              'and will throw in the standalone `prop-types` package. ' +
	              'You may be seeing this warning due to a third-party PropTypes ' +
	              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
	              propFullName,
	              componentName
	            );
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }

	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);

	    return chainedCheckType;
	  }

	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);

	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
	  }

	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }

	      var valuesString = JSON.stringify(expectedValues);
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (propValue.hasOwnProperty(key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
	      return emptyFunction.thatReturnsNull;
	    }

	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        warning(
	          false,
	          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
	          'received %s at index %s.',
	          getPostfixForTypeWarning(checker),
	          i
	        );
	        return emptyFunction.thatReturnsNull;
	      }
	    }

	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }

	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }

	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError(
	            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
	            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
	            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
	          );
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }

	    return createChainableTypeChecker(validate);
	  }

	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }

	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }

	        return true;
	      default:
	        return false;
	    }
	  }

	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }

	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }

	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	/** @license React v16.8.6
	 * react-is.development.js
	 *
	 * Copyright (c) Facebook, Inc. and its affiliates.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';



	if (true) {
	  (function() {
	'use strict';

	Object.defineProperty(exports, '__esModule', { value: true });

	// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	// nor polyfill, then a plain number is used for performance.
	var hasSymbol = typeof Symbol === 'function' && Symbol.for;

	var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
	var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

	function isValidElementType(type) {
	  return typeof type === 'string' || typeof type === 'function' ||
	  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
	}

	/**
	 * Forked from fbjs/warning:
	 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
	 *
	 * Only change is we use console.warn instead of console.error,
	 * and do nothing when 'console' is not supported.
	 * This really simplifies the code.
	 * ---
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */

	var lowPriorityWarning = function () {};

	{
	  var printWarning = function (format) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    var argIndex = 0;
	    var message = 'Warning: ' + format.replace(/%s/g, function () {
	      return args[argIndex++];
	    });
	    if (typeof console !== 'undefined') {
	      console.warn(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };

	  lowPriorityWarning = function (condition, format) {
	    if (format === undefined) {
	      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
	    }
	    if (!condition) {
	      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      printWarning.apply(undefined, [format].concat(args));
	    }
	  };
	}

	var lowPriorityWarning$1 = lowPriorityWarning;

	function typeOf(object) {
	  if (typeof object === 'object' && object !== null) {
	    var $$typeof = object.$$typeof;
	    switch ($$typeof) {
	      case REACT_ELEMENT_TYPE:
	        var type = object.type;

	        switch (type) {
	          case REACT_ASYNC_MODE_TYPE:
	          case REACT_CONCURRENT_MODE_TYPE:
	          case REACT_FRAGMENT_TYPE:
	          case REACT_PROFILER_TYPE:
	          case REACT_STRICT_MODE_TYPE:
	          case REACT_SUSPENSE_TYPE:
	            return type;
	          default:
	            var $$typeofType = type && type.$$typeof;

	            switch ($$typeofType) {
	              case REACT_CONTEXT_TYPE:
	              case REACT_FORWARD_REF_TYPE:
	              case REACT_PROVIDER_TYPE:
	                return $$typeofType;
	              default:
	                return $$typeof;
	            }
	        }
	      case REACT_LAZY_TYPE:
	      case REACT_MEMO_TYPE:
	      case REACT_PORTAL_TYPE:
	        return $$typeof;
	    }
	  }

	  return undefined;
	}

	// AsyncMode is deprecated along with isAsyncMode
	var AsyncMode = REACT_ASYNC_MODE_TYPE;
	var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	var ContextConsumer = REACT_CONTEXT_TYPE;
	var ContextProvider = REACT_PROVIDER_TYPE;
	var Element = REACT_ELEMENT_TYPE;
	var ForwardRef = REACT_FORWARD_REF_TYPE;
	var Fragment = REACT_FRAGMENT_TYPE;
	var Lazy = REACT_LAZY_TYPE;
	var Memo = REACT_MEMO_TYPE;
	var Portal = REACT_PORTAL_TYPE;
	var Profiler = REACT_PROFILER_TYPE;
	var StrictMode = REACT_STRICT_MODE_TYPE;
	var Suspense = REACT_SUSPENSE_TYPE;

	var hasWarnedAboutDeprecatedIsAsyncMode = false;

	// AsyncMode should be deprecated
	function isAsyncMode(object) {
	  {
	    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	      hasWarnedAboutDeprecatedIsAsyncMode = true;
	      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	    }
	  }
	  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	}
	function isConcurrentMode(object) {
	  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	}
	function isContextConsumer(object) {
	  return typeOf(object) === REACT_CONTEXT_TYPE;
	}
	function isContextProvider(object) {
	  return typeOf(object) === REACT_PROVIDER_TYPE;
	}
	function isElement(object) {
	  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	}
	function isForwardRef(object) {
	  return typeOf(object) === REACT_FORWARD_REF_TYPE;
	}
	function isFragment(object) {
	  return typeOf(object) === REACT_FRAGMENT_TYPE;
	}
	function isLazy(object) {
	  return typeOf(object) === REACT_LAZY_TYPE;
	}
	function isMemo(object) {
	  return typeOf(object) === REACT_MEMO_TYPE;
	}
	function isPortal(object) {
	  return typeOf(object) === REACT_PORTAL_TYPE;
	}
	function isProfiler(object) {
	  return typeOf(object) === REACT_PROFILER_TYPE;
	}
	function isStrictMode(object) {
	  return typeOf(object) === REACT_STRICT_MODE_TYPE;
	}
	function isSuspense(object) {
	  return typeOf(object) === REACT_SUSPENSE_TYPE;
	}

	exports.typeOf = typeOf;
	exports.AsyncMode = AsyncMode;
	exports.ConcurrentMode = ConcurrentMode;
	exports.ContextConsumer = ContextConsumer;
	exports.ContextProvider = ContextProvider;
	exports.Element = Element;
	exports.ForwardRef = ForwardRef;
	exports.Fragment = Fragment;
	exports.Lazy = Lazy;
	exports.Memo = Memo;
	exports.Portal = Portal;
	exports.Profiler = Profiler;
	exports.StrictMode = StrictMode;
	exports.Suspense = Suspense;
	exports.isValidElementType = isValidElementType;
	exports.isAsyncMode = isAsyncMode;
	exports.isConcurrentMode = isConcurrentMode;
	exports.isContextConsumer = isContextConsumer;
	exports.isContextProvider = isContextProvider;
	exports.isElement = isElement;
	exports.isForwardRef = isForwardRef;
	exports.isFragment = isFragment;
	exports.isLazy = isLazy;
	exports.isMemo = isMemo;
	exports.isPortal = isPortal;
	exports.isProfiler = isProfiler;
	exports.isStrictMode = isStrictMode;
	exports.isSuspense = isSuspense;
	  })();
	}


/***/ }),
/* 44 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_44__;

/***/ })
/******/ ])
});
;