'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _immutable = require('immutable');

var _memoize = require('../util/memoize');

var _memoize2 = _interopRequireDefault(_memoize);

var _compose = require('../util/compose');

var _compose2 = _interopRequireDefault(_compose);

var _accumulateFunction = require('../util/accumulateFunction');

var _accumulateFunction2 = _interopRequireDefault(_accumulateFunction);

var _middlewareAdapter = require('../util/middlewareAdapter');

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