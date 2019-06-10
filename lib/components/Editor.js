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

var _draftJs = require('draft-js');

var _draftJsPluginsEditor = require('draft-js-plugins-editor');

var _draftJsPluginsEditor2 = _interopRequireDefault(_draftJsPluginsEditor);

var _KeyCommandController = require('./KeyCommandController');

var _KeyCommandController2 = _interopRequireDefault(_KeyCommandController);

var _OverlayWrapper = require('./OverlayWrapper');

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