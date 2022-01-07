/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./isceb-blocks/isceb-news-block/src/components/bannerItem.js":
/*!********************************************************************!*\
  !*** ./isceb-blocks/isceb-news-block/src/components/bannerItem.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerItem": function() { return /* binding */ BannerItem; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const BannerItem = (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)((_ref, ref) => {
  var _props$post, _props$post2, _props$post3, _props$post4, _props$post4$tagText, _props$post5, _props$post6, _props$post7;

  let {
    id,
    ...props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    className: "itemBanner",
    id: (_props$post = props.post) === null || _props$post === void 0 ? void 0 : _props$post.id,
    key: (_props$post2 = props.post) === null || _props$post2 === void 0 ? void 0 : _props$post2.id
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "bannerCardImage",
    style: {
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)) " + (((_props$post3 = props.post) === null || _props$post3 === void 0 ? void 0 : _props$post3.imgurl) != undefined ? ",url(" + props.post.imgurl + ")" : '')
    }
  }), ((_props$post4 = props.post) === null || _props$post4 === void 0 ? void 0 : (_props$post4$tagText = _props$post4.tagText) === null || _props$post4$tagText === void 0 ? void 0 : _props$post4$tagText.length) > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "bannerCardTag"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "bannerTagText"
  }, (_props$post5 = props.post) === null || _props$post5 === void 0 ? void 0 : _props$post5.tagText[0])), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "bannerCardContent"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h3", {
    className: "bannerCardTitle"
  }, (_props$post6 = props.post) === null || _props$post6 === void 0 ? void 0 : _props$post6.title.rendered), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("p", {
    className: "bannerCardDescription"
  }, (_props$post7 = props.post) === null || _props$post7 === void 0 ? void 0 : _props$post7.excerpt.raw), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    className: "bannerCardButton"
  }, "More Info")));
});

/***/ }),

/***/ "./isceb-blocks/isceb-news-block/src/edit.js":
/*!***************************************************!*\
  !*** ./isceb-blocks/isceb-news-block/src/edit.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Item": function() { return /* binding */ Item; },
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@dnd-kit/core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@dnd-kit/sortable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@dnd-kit/utilities'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_bannerItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/bannerItem */ "./isceb-blocks/isceb-news-block/src/components/bannerItem.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editor.scss */ "./isceb-blocks/isceb-news-block/src/editor.scss");



/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */










/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


const Item = (0,react__WEBPACK_IMPORTED_MODULE_6__.forwardRef)((_ref, ref) => {
  let {
    id,
    ...props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref
  }), "heee ", id);
});
function Edit(_ref2) {
  let {
    attributes,
    setAttributes
  } = _ref2;
  const {
    selectedPosts
  } = attributes;
  const [activeId, setActiveId] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [items, setItems] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(selectedPosts);
  const {
    options,
    isLoaded
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect)(select => {
    const {
      getEntityRecords,
      getMedia
    } = select('core');
    const {
      isResolving
    } = select('core/data');
    const postCollection = getEntityRecords('postType', 'page', {
      per_page: -1,
      status: 'publish'
    });
    const tagsCollection = getEntityRecords('taxonomy', 'post_tag', {
      per_page: -1
    });
    postCollection === null || postCollection === void 0 ? void 0 : postCollection.forEach(post => {
      if (post.featured_media) {
        var _getMedia;

        post.imgurl = (_getMedia = getMedia(post.featured_media)) === null || _getMedia === void 0 ? void 0 : _getMedia.media_details.sizes.medium_large.source_url;
      }

      if (post.tags) {
        post.tagText = tagsCollection === null || tagsCollection === void 0 ? void 0 : tagsCollection.filter(tag => {
          var _post$tags;

          return (_post$tags = post.tags) === null || _post$tags === void 0 ? void 0 : _post$tags.includes(tag.id);
        }).map(tag => tag.name);
      }
    });
    return {
      options: postCollection,
      isLoaded: !isResolving('core', 'getEntityRecords', ['postType', 'page', {
        per_page: -1,
        status: 'publish'
      }])
    };
  }, []); //Triggers every time items array is changed

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setAttributes({
      selectedPosts: items
    });
  }, [items]);

  function onSelectedPageChange(selectedPages) {
    let selectedPagesNumberParsed = selectedPages.map(post => {
      return parseInt(post);
    });
    setItems(options.filter(post => selectedPagesNumberParsed.includes(post.id)));
  }

  function SortableItem(props) {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition
    } = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@dnd-kit/sortable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
      id: props.id
    });
    const style = {
      transform: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@dnd-kit/utilities'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(transform),
      transition
    };
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components_bannerItem__WEBPACK_IMPORTED_MODULE_8__.BannerItem, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      post: props.post,
      ref: setNodeRef,
      style: style
    }, attributes, listeners));
  }

  const sensors = Object(function webpackMissingModule() { var e = new Error("Cannot find module '@dnd-kit/core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@dnd-kit/core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@dnd-kit/core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())), Object(function webpackMissingModule() { var e = new Error("Cannot find module '@dnd-kit/core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@dnd-kit/core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    coordinateGetter: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@dnd-kit/sortable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  }));

  function handleDragEnd(event) {
    const {
      active,
      over
    } = event;

    if (active.id !== over.id) {
      setItems(items => {
        const oldIndex = items.findIndex(obj => obj.id == active.id);
        const newIndex = items.findIndex(obj => obj.id == over.id);
        items[oldIndex].sortKey = newIndex;
        items[newIndex].sortKey = oldIndex;
        return Object(function webpackMissingModule() { var e = new Error("Cannot find module '@dnd-kit/sortable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(items, oldIndex, newIndex);
        ;
      });
    }

    setActiveId(null);
  }

  function handleDragStart(event) {
    const {
      active
    } = event;
    setActiveId(active.id);
  }

  function onChangeContent() {
    console.log("Working!");
  }

  return [(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, {
    key: "inspector"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
    multiple: true,
    value: items.map(post => {
      return post.id;
    }),
    onChange: onSelectedPageChange,
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Select a Post (use CTRL to select multiple)'),
    options: isLoaded ? options === null || options === void 0 ? void 0 : options.map(post => ({
      label: post.title.rendered,
      value: post.id
    })) : [{
      label: 'loading posts'
    }],
    className: "isceb-gutenberg-select"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("section", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.RichText, {
    tagName: "h3",
    className: "card-subheading",
    value: subheading,
    onChange: onChangeContent(),
    placeholder: "Subheading Goes Here"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("section", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps)({
    className: "homepage-banners"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "container-banners"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@dnd-kit/core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    sensors: sensors,
    collisionDetection: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@dnd-kit/core'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    onDragStart: handleDragStart,
    onDragEnd: handleDragEnd
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@dnd-kit/sortable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    items: items,
    strategy: Object(function webpackMissingModule() { var e = new Error("Cannot find module '@dnd-kit/sortable'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  }, items === null || items === void 0 ? void 0 : items.map(post => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SortableItem, {
    post: post,
    key: post.id,
    id: post.id
  }))))))];
}

/***/ }),

/***/ "./isceb-blocks/isceb-news-block/src/index.js":
/*!****************************************************!*\
  !*** ./isceb-blocks/isceb-news-block/src/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./isceb-blocks/isceb-news-block/src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./isceb-blocks/isceb-news-block/src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./isceb-blocks/isceb-news-block/src/save.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */



/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('isceb-blocks/news-block', {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],

  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  attributes: {
    author: {
      type: 'string'
    },
    authorImage: {
      type: 'string',
      default: null
    },
    titleColor: {
      type: 'string',
      default: 'red'
    },
    topic: {
      type: 'string',
      default: null
    },
    selectedPost: {
      type: 'number',
      default: 0
    },
    selectedPosts: {
      type: 'array',
      default: []
    },
    align: {
      type: 'string',
      default: 'full'
    },
    subheading: {
      type: 'string'
    }
  },
  supports: {
    align: true,
    alignWide: true
  },

  getEditWrapperProps(attributes) {
    return {
      'data-align': 'full'
    };
  }

});

/***/ }),

/***/ "./isceb-blocks/isceb-news-block/src/save.js":
/*!***************************************************!*\
  !*** ./isceb-blocks/isceb-news-block/src/save.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    selectedPosts
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    className: "homepage-banners"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "container-banners"
  }, selectedPosts === null || selectedPosts === void 0 ? void 0 : selectedPosts.map(post => {
    var _post$tagText;

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: post.link
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "itemBanner",
      key: post.id
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: post.id,
      className: "bannerCardImage",
      style: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${post.imgurl})`
      }
    }), (post === null || post === void 0 ? void 0 : (_post$tagText = post.tagText) === null || _post$tagText === void 0 ? void 0 : _post$tagText.length) > 0 && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "bannerCardTag"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "bannerTagText"
    }, post.tagText[0])), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "bannerCardContent"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", {
      className: "bannerCardTitle"
    }, post.title.rendered), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "bannerCardDescription"
    }, post.excerpt.raw), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
      className: "bannerCardButton"
    }, "More Info"))));
  })));
}

/***/ }),

/***/ "./isceb-blocks/isceb-news-block/src/editor.scss":
/*!*******************************************************!*\
  !*** ./isceb-blocks/isceb-news-block/src/editor.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./isceb-blocks/isceb-news-block/src/style.scss":
/*!******************************************************!*\
  !*** ./isceb-blocks/isceb-news-block/src/style.scss ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"isceb-blocks/isceb-news-block": 0,
/******/ 			"style-isceb-blocks/isceb-news-block": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkisceb_block"] = self["webpackChunkisceb_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style-isceb-blocks/isceb-news-block"], function() { return __webpack_require__("./isceb-blocks/isceb-news-block/src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=isceb-news-block.js.map