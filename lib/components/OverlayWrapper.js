'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createReactClass = require('create-react-class');

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