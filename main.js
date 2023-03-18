/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../dist/img/pexels-rachel-claire.jpg */ "./dist/img/pexels-rachel-claire.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --main-font: clamp(16px, 1.6vw, 1.5rem);\n  --title-font: clamp(20px, 2.5vw, 5rem);\n  --font-color: rgb(252, 253, 235);\n  --background-img: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  --background-color: rgba(9, 12, 12, 0.514);\n  --shadow: rgba(223, 228, 235, 0.4) 0px 0px 0px 2px, rgba(223, 228, 235, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\n}\n\n/* width */\n::-webkit-scrollbar {\n  width: 0.5rem;\n}\n\n/* Track */\n::-webkit-scrollbar-track {\n  background-color: var(--font-color);\n  opacity: 0.5;\n}\n\n/* Handle */\n::-webkit-scrollbar-thumb {\n  background: var(--background-color);\n}\n\n/* Handle on hover */\n::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\nbody {\n  display: flex;\n  font-family: \"Trebuchet MS\", \"Lucida Sans Unicode\", \"Lucida Grande\", \"Lucida Sans\", Arial, sans-serif;\n  font-size: var(--main-font);\n  color: var(--font-color);\n  background-image: var(--background-img);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  margin: auto;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n}\n\n#content {\n  display: grid;\n  grid-template-rows: auto 15fr auto;\n  grid-template-columns: 1fr;\n  background-color: var(--background-color);\n  padding: 1rem;\n  padding-bottom: 0;\n  width: clamp(300px, 60vw, 70rem);\n  border-radius: 0.5rem;\n}\n\n.header {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  grid-row: 1/2;\n  padding-top: 0;\n  max-height: 5rem;\n}\n\n.header-button {\n  font-size: var(--title-font);\n  margin: 1rem;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  border-radius: 0.2rem;\n  transition: all 1s;\n}\n\n.header-button:hover {\n  box-shadow: var(--shadow);\n}\n\n.active-button {\n  box-shadow: var(--shadow);\n}\n\n.main-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 1rem;\n  grid-row: 2/3;\n}\n\n.dishes-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.home-img-holder, .dishes-container div {\n  display: flex;\n  margin: 1rem;\n  box-shadow: var(--shadow);\n  width: clamp(100px, 40vw, 50rem);\n  height: clamp(100px, 40vw, 50rem);\n  overflow: hidden;\n  align-items: center;\n  justify-content: center;\n}\n\n.home-img, .menu-img {\n  display: flex;\n  width: clamp(100px, 40vw, 50rem);\n  margin-top: 0;\n}\n\n.home-text, .menu-text {\n  display: flex;\n  margin: 1rem;\n  align-items: center;\n  justify-content: center;\n  text-align: justify;\n  margin-top: 0;\n}\n\n.home-text::first-letter, .menu-text::first-letter, .contact-text::first-letter {\n  font-size: var(--title-font);\n}\n\n.footer {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  grid-row: 3/4;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(var(--main-font) - 3px);\n  text-align: center;\n  bottom: 0;\n}\n\n.github-mark {\n  width: var(--main-font);\n  filter: invert(1);\n  transition: all 0.3s;\n  margin-left: 0.2rem;\n  margin-right: 0.2rem;\n}\n\n.github-mark:hover {\n  transform: rotate(360deg);\n}\n\na[href] {\n  color: var(--font-color);\n  text-decoration: none;\n  border-radius: 0.2rem;\n  transition: all 0.2s;\n}\n\na[href]:hover {\n  box-shadow: var(--shadow);\n}\n\na:visited {\n  color: var(--font-color);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACI,uCAAA;EACA,sCAAA;EACA,gCAAA;EACA,yDAAA;EACA,0CAAA;EACA,2IAAA;AACJ;;AAEA,UAAA;AACA;EACI,aAAA;AACJ;;AAEA,UAAA;AACA;EACA,mCAAA;EACA,YAAA;AACA;;AAEA,WAAA;AACA;EACA,mCAAA;AACA;;AAEA,oBAAA;AACA;EACA,gBAAA;AACA;;AAGA;EACI,aAAA;EACA,qGAAA;EACA,2BAAA;EACA,wBAAA;EACA,uCAAA;EACA,sBAAA;EACA,4BAAA;EACA,2BAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EACA,aAAA;AAAJ;;AAGA;EACI,aAAA;EACA,kCAAA;EACA,0BAAA;EACA,yCAAA;EACA,aAAA;EACA,iBAAA;EACA,gCAAA;EACA,qBAAA;AAAJ;;AAGA;EACI,aAAA;EACA,eAAA;EACA,mBAAA;EACA,uBAAA;EACA,aAAA;EACA,cAAA;EACA,gBAAA;AAAJ;;AAGA;EACI,4BAAA;EACA,YAAA;EACA,oBAAA;EACA,qBAAA;EACA,qBAAA;EACA,kBAAA;AAAJ;;AAGA;EACI,yBAAA;AAAJ;;AAGA;EACI,yBAAA;AAAJ;;AAGA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,aAAA;EACA,aAAA;AAAJ;;AAKA;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;AAFJ;;AAKA;EACI,aAAA;EACA,YAAA;EACA,yBAAA;EACA,gCAAA;EACA,iCAAA;EACA,gBAAA;EACA,mBAAA;EACA,uBAAA;AAFJ;;AAKA;EACI,aAAA;EACA,gCAAA;EACA,aAAA;AAFJ;;AAKA;EACI,aAAA;EACA,YAAA;EACA,mBAAA;EACA,uBAAA;EACA,mBAAA;EACA,aAAA;AAFJ;;AAKA;EACI,4BAAA;AAFJ;;AAKA;EACI,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,uCAAA;EACA,kBAAA;EACA,SAAA;AAFJ;;AAKA;EACI,uBAAA;EACA,iBAAA;EACA,oBAAA;EACA,mBAAA;EACA,oBAAA;AAFJ;;AAKA;EACI,yBAAA;AAFJ;;AAKA;EACI,wBAAA;EACA,qBAAA;EACA,qBAAA;EACA,oBAAA;AAFJ;;AAKA;EACI,yBAAA;AAFJ;;AAKA;EACI,wBAAA;AAFJ","sourcesContent":[":root {\r\n    --main-font: clamp(16px, 1.6vw, 1.5rem);\r\n    --title-font: clamp(20px, 2.5vw, 5rem);\r\n    --font-color: rgb(252, 253, 235);\r\n    --background-img: url('../dist/img/pexels-rachel-claire.jpg');\r\n    --background-color: rgba(9, 12, 12, 0.514);\r\n    --shadow: rgba(223, 228, 235, 0.4) 0px 0px 0px 2px, rgba(223, 228, 235, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\r\n}\r\n\r\n/* width */\r\n::-webkit-scrollbar {\r\n    width: .5rem;\r\n}\r\n\r\n/* Track */\r\n::-webkit-scrollbar-track {\r\nbackground-color: var(--font-color);\r\nopacity: .5;\r\n}\r\n\r\n/* Handle */\r\n::-webkit-scrollbar-thumb {\r\nbackground: var(--background-color); \r\n}\r\n\r\n/* Handle on hover */\r\n::-webkit-scrollbar-thumb:hover {\r\nbackground: #555; \r\n\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\r\n    font-size: var(--main-font);\r\n    color: var(--font-color);\r\n    background-image: var(--background-img);\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center;\r\n    margin: auto;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 1rem;\r\n}\r\n\r\n#content {\r\n    display: grid;\r\n    grid-template-rows: auto 15fr auto;\r\n    grid-template-columns: 1fr;\r\n    background-color: var(--background-color);\r\n    padding: 1rem;\r\n    padding-bottom: 0;\r\n    width: clamp(300px, 60vw, 70rem);\r\n    border-radius: .5rem;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    align-items: center;\r\n    justify-content: center;\r\n    grid-row: 1 / 2;\r\n    padding-top: 0;\r\n    max-height: 5rem;\r\n}\r\n\r\n.header-button {\r\n    font-size: var(--title-font);\r\n    margin: 1rem;\r\n    padding-left: .5rem;\r\n    padding-right: .5rem;\r\n    border-radius: .2rem;\r\n    transition: all 1s;\r\n}\r\n\r\n.header-button:hover {\r\n    box-shadow: var(--shadow);\r\n}\r\n\r\n.active-button {\r\n    box-shadow: var(--shadow);\r\n}\r\n\r\n.main-content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 1rem;\r\n    grid-row: 2 / 3;\r\n\r\n    \r\n}\r\n\r\n.dishes-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.home-img-holder, .dishes-container div {\r\n    display: flex;\r\n    margin: 1rem;\r\n    box-shadow: var(--shadow);\r\n    width: clamp(100px, 40vw, 50rem);\r\n    height: clamp(100px, 40vw, 50rem);\r\n    overflow: hidden;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.home-img, .menu-img {\r\n    display: flex;\r\n    width: clamp(100px, 40vw, 50rem);\r\n    margin-top: 0;\r\n}\r\n\r\n.home-text, .menu-text {\r\n    display: flex;\r\n    margin: 1rem;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: justify;\r\n    margin-top: 0;\r\n}\r\n\r\n.home-text::first-letter, .menu-text::first-letter, .contact-text::first-letter {\r\n    font-size: var(--title-font);\r\n}\r\n\r\n.footer {\r\n    position: relative;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content:flex-end;\r\n    grid-row: 3 / 4;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: calc(var(--main-font) - 3px);\r\n    text-align: center;\r\n    bottom: 0;\r\n}\r\n\r\n.github-mark {\r\n    width: var(--main-font);\r\n    filter: invert(1);\r\n    transition: all .3s;\r\n    margin-left: .2rem;\r\n    margin-right: .2rem;\r\n}\r\n\r\n.github-mark:hover {\r\n    transform: rotate(360deg);\r\n}\r\n\r\na[href] {\r\n    color: var(--font-color);\r\n    text-decoration: none;\r\n    border-radius: .2rem;\r\n    transition: all .2s;\r\n}\r\n\r\na[href]:hover {\r\n    box-shadow: var(--shadow);\r\n}\r\n\r\na:visited {\r\n    color: var(--font-color);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const CONTACT = 'Restaurant:\n\
123 Main Street\n\
Anytown, USA 12345\n\
Phone: (555) 123-4567\n\
Email: info@restaurant.com\n\
Website: www.restaurant.com\n\
Social Media:\n\
Facebook: www.facebook.com/restaurant\n\
Twitter: www.twitter.com/restaurant\n\
Instagram: www.instagram.com/restaurant\n\
Hours of Operation:\n\
Monday - Thursday: 11:00 am - 9:00 pm\n\
Friday - Saturday: 11:00 am - 10:00 pm\n\
Sunday: 12:00 pm - 8:00 pm\n\
Reservations:\nCall us or book online at www.restaurant.com/reservations\n\
Catering:\n\
We offer catering services for all occasions! Contact us at catering@restaurant.com or call (555) 123-4567 for more information.\n\
Feedback:\n\
We value your feedback! Please email us at feedback@restaurant.com or fill out our online feedback form at www.restaurant.com/feedback';
function contactPageRender() {
    const mainContainer = document.querySelector('.main-content');
    const contactButton = document.querySelector('.contact');
    contactButton.classList.add('active-button');

    const contactText = document.createElement('p');
    contactText.classList.add('contact-text');
    contactText.textContent = CONTACT;
    mainContainer.appendChild(contactText);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPageRender);

/***/ }),

/***/ "./src/initial.js":
/*!************************!*\
  !*** ./src/initial.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePageRender": () => (/* binding */ homePageRender),
/* harmony export */   "initialPageRender": () => (/* binding */ initialPageRender)
/* harmony export */ });
/* harmony import */ var _dist_img_githubmark_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/img/githubmark.png */ "./dist/img/githubmark.png");
/* harmony import */ var _dist_img_pexels_rachel_claire_home_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/img/pexels-rachel-claire-home.jpg */ "./dist/img/pexels-rachel-claire-home.jpg");



function initialPageRender() {
    const container = document.getElementById('content');

    const header = document.createElement('div');
    const mainContent = document.createElement('div');
    const footer = document.createElement('div');
    
    header.classList.add('header');
    mainContent.classList.add('main-content');
    footer.classList.add('footer');
    
    container.append(header, mainContent, footer);

    const homeButton = document.createElement('div');
    const menuButton = document.createElement('div');
    const contactButton = document.createElement('div');

    homeButton.classList.add('header-button');
    menuButton.classList.add('header-button');
    contactButton.classList.add('header-button');
    homeButton.classList.add('home');
    menuButton.classList.add('menu');
    contactButton.classList.add('contact');

    homeButton.textContent = 'Home';
    menuButton.textContent = 'Menu';
    contactButton.textContent = 'Contact';

    header.append(homeButton, menuButton, contactButton);

    const footerContent = document.createElement('p');
    const footerCopyright = document.createElement('a');
    const footerHref = document.createElement('a');
    const footerImg = document.createElement('img');
    const footerYearContainer = document.createElement('a');
    const footerYear = new Date().getFullYear();
    const footerMailTo = document.createElement('a');
    const footerBackImg = document.createElement('a');
    
    footerCopyright.textContent = 'Copyright';
    footerHref.setAttribute('href', 'https://github.com/proffery/odin-restaurant-page');
    footerImg.classList.add('github-mark');
    footerImg.src = _dist_img_githubmark_png__WEBPACK_IMPORTED_MODULE_0__;
    footerYearContainer.textContent = ` ${footerYear} `;
    footerMailTo.setAttribute('href', 'mailto:proffery@gmail.com');
    footerMailTo.setAttribute('title', 'Mail me');
    footerMailTo.textContent = ' Dmitry Shamko';
    footerBackImg.textContent = 'Photo by Rachel Claire from Pexels'
    footerBackImg.setAttribute('title', 'Go to Pexels');
    footerBackImg.setAttribute('href', 'https://www.pexels.com/@rachel-claire/');
    
    footerHref.appendChild(footerImg);
    footerContent.append(footerCopyright, footerHref,  footerMailTo, footerYearContainer,footerBackImg);
    footer.appendChild(footerContent);
}

function homePageRender() {
    const mainContainer = document.querySelector('.main-content');
    const homeButton = document.querySelector('.home')
    homeButton.classList.add('active-button');

    const homeImgHolder = document.createElement('div');
    const homeLogo = document.createElement('img')
    const homeTextContainer = document.createElement('p');

    homeImgHolder.classList.add('home-img-holder');
    homeLogo.classList.add('home-img');
    homeLogo.src = _dist_img_pexels_rachel_claire_home_jpg__WEBPACK_IMPORTED_MODULE_1__;
    homeTextContainer.classList.add('home-text');

    homeTextContainer.textContent = 'Welcome to our restaurant page! We are delighted to present our menu that offers a wide range of delicious dishes that cater to all tastes and preferences. Our team of skilled chefs prepares the dishes using fresh, locally sourced ingredients to ensure the highest quality and taste. Whether you are looking for a quick lunch, a romantic dinner or a family-friendly meal, our restaurant is the perfect spot to satisfy your cravings. We pride ourselves on offering a warm and inviting ambiance that makes you feel at home. We look forward to welcoming you to our restaurant soon!';

    homeImgHolder.appendChild(homeLogo);
    mainContainer.append(homeImgHolder, homeTextContainer);


}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dist_img_pexels_rachel_claire_appetizer_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/img/pexels-rachel-claire-appetizer.jpg */ "./dist/img/pexels-rachel-claire-appetizer.jpg");
/* harmony import */ var _dist_img_pexels_rachel_claire_main_dish_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/img/pexels-rachel-claire-main-dish.jpg */ "./dist/img/pexels-rachel-claire-main-dish.jpg");
/* harmony import */ var _dist_img_pexels_rachel_claire_desert_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dist/img/pexels-rachel-claire-desert.jpg */ "./dist/img/pexels-rachel-claire-desert.jpg");




function menuPageRender() {
    const mainContainer = document.querySelector('.main-content');
    const menuButton = document.querySelector('.menu');
    menuButton.classList.add('active-button');

    const appetizerContainer  = document.createElement('div');
    const mainDishContainer = document.createElement('div');
    const dessertContainer = document.createElement('div');

    const appetizerImgContainer  = document.createElement('div');
    const mainDishImgContainer = document.createElement('div');
    const dessertImgContainer = document.createElement('div');

    const appetizerImg = document.createElement('img');
    const mainDishImg = document.createElement('img');
    const dessertImg = document.createElement('img');

    const appetizerText = document.createElement('p');
    const mainDishText = document.createElement('p');
    const dessertText = document.createElement('p');

    appetizerContainer.classList.add('dishes-container');
    mainDishContainer.classList.add('dishes-container');
    dessertContainer.classList.add('dishes-container');

    appetizerImg.classList.add('menu-img');
    mainDishImg.classList.add('menu-img');
    dessertImg.classList.add('menu-img');

    appetizerText.classList.add('menu-text');
    mainDishText.classList.add('menu-text');
    dessertText.classList.add('menu-text');
    
    appetizerText.textContent = 'An appetizer is a small dish or snack served before a main meal, designed to stimulate the appetite and awaken the taste buds. Typically, these delectable morsels are served in small portions, allowing guests to sample a range of flavors and textures. From crispy and crunchy bites to creamy and savory dips, appetizers come in many forms and can be made from a wide range of ingredients. These small plates are often beautifully presented, showcasing the chef\'s creativity and attention to detail. Whether you prefer savory, sweet, or spicy, there is an appetizer to suit every taste bud and occasion.';
    mainDishText.textContent = 'A main dish is the centerpiece of a meal, consisting of a substantial portion of food expected to provide enough nutrition and satisfaction. It is usually served after appetizers and before desserts. Main dishes come in many different varieties, from meat-based to vegetarian options. They are typically accompanied by side dishes, such as vegetables, rice, potatoes, or bread. Examples of popular main dishes include grilled chicken, beef stew, spaghetti carbonara, stir-fry vegetables, fish curry, and many more. Main dishes can also vary depending on cultural traditions and local cuisine. Overall, a good main dish should be flavorful, filling, and visually appealing. It should be cooked to perfection with fresh and high-quality ingredients. A great main dish can elevate the entire meal experience, leaving a lasting impression on the palate and the senses.';
    dessertText.textContent = 'At our restaurant, we offer a delicious and decadent dessert that will truly satisfy your sweet tooth. Our signature dessert is made with rich, velvety chocolate mousse that is layered with moist chocolate cake and drizzled with a luscious chocolate ganache. The dessert is then topped with fresh whipped cream and garnished with a sprinkle of chocolate shavings, making for a picture-perfect presentation. The dessert is served in a charming glass jar that showcases the layers, giving you a visual treat before even digging in. This dessert is the perfect way to end your meal, leaving you feeling happy and satisfied. Whether you\'re celebrating a special occasion or just indulging your sweet cravings, our dessert is sure to be a hit. Come try it today and see for yourself why it\'s a customer favorite!';

    appetizerImg.src = _dist_img_pexels_rachel_claire_appetizer_jpg__WEBPACK_IMPORTED_MODULE_0__;
    mainDishImg.src = _dist_img_pexels_rachel_claire_main_dish_jpg__WEBPACK_IMPORTED_MODULE_1__;
    dessertImg.src = _dist_img_pexels_rachel_claire_desert_jpg__WEBPACK_IMPORTED_MODULE_2__;

    appetizerImgContainer.appendChild(appetizerImg);
    mainDishImgContainer.appendChild(mainDishImg);
    dessertImgContainer.appendChild(dessertImg);

    appetizerContainer.append(appetizerImgContainer, appetizerText);
    mainDishContainer.append(mainDishImgContainer, mainDishText);
    dessertContainer.append(dessertImgContainer, dessertText);

    mainContainer.append(appetizerContainer, mainDishContainer,dessertContainer,);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPageRender);

/***/ }),

/***/ "./dist/img/githubmark.png":
/*!*********************************!*\
  !*** ./dist/img/githubmark.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/githubmark.png";

/***/ }),

/***/ "./dist/img/pexels-rachel-claire-appetizer.jpg":
/*!*****************************************************!*\
  !*** ./dist/img/pexels-rachel-claire-appetizer.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/pexels-rachel-claire-appetizer.jpg";

/***/ }),

/***/ "./dist/img/pexels-rachel-claire-desert.jpg":
/*!**************************************************!*\
  !*** ./dist/img/pexels-rachel-claire-desert.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/pexels-rachel-claire-desert.jpg";

/***/ }),

/***/ "./dist/img/pexels-rachel-claire-home.jpg":
/*!************************************************!*\
  !*** ./dist/img/pexels-rachel-claire-home.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/pexels-rachel-claire-home.jpg";

/***/ }),

/***/ "./dist/img/pexels-rachel-claire-main-dish.jpg":
/*!*****************************************************!*\
  !*** ./dist/img/pexels-rachel-claire-main-dish.jpg ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/pexels-rachel-claire-main-dish.jpg";

/***/ }),

/***/ "./dist/img/pexels-rachel-claire.jpg":
/*!*******************************************!*\
  !*** ./dist/img/pexels-rachel-claire.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/pexels-rachel-claire.jpg";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
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
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _initial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial */ "./src/initial.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





(0,_initial__WEBPACK_IMPORTED_MODULE_0__.initialPageRender)();
(0,_initial__WEBPACK_IMPORTED_MODULE_0__.homePageRender)();
const mainContent = document.querySelector('.main-content');
const headerButtons = document.querySelectorAll('.header-button');
headerButtons.forEach(button => button.addEventListener('click', changeContent));

function changeContent(e) {
    headerButtons.forEach(button => button.classList.remove('active-button'));
    
    let child = mainContent.lastElementChild;
    while (child) {
        mainContent.removeChild(child);
        child = mainContent.lastElementChild;
    }

    if (e.target.className.includes('home')) {
        (0,_initial__WEBPACK_IMPORTED_MODULE_0__.homePageRender)();
    }

    else if (e.target.className.includes('menu')) {
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }

    else {
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }


}
})();

/******/ })()
;
//# sourceMappingURL=main.js.map