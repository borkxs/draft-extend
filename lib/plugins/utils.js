'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _draftJs = require('draft-js');

var _immutable = require('immutable');

var _invariant = require('invariant');

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