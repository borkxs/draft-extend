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

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _immutable = require('immutable');

var _draftJs = require('draft-js');

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