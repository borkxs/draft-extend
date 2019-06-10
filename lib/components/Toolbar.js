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

var _KeyCommandController = require('./KeyCommandController');

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