/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Lato);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  font-family: 'Lato', sans-serif;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  border: 1px solid black;\\r\\n  padding: 10px 15px;\\r\\n}\\r\\n\\r\\n.dish {\\r\\n  width: 250px;\\r\\n}\\r\\n\\r\\nsection {\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto auto;\\r\\n  padding: 10px;\\r\\n}\\r\\n\\r\\n.meal {\\r\\n  padding: 20px;\\r\\n  font-size: 15px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  width: 220px;\\r\\n}\\r\\n\\r\\n.description p {\\r\\n  width: 150px;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  font-size: 17px;\\r\\n  width: 80px;\\r\\n}\\r\\n\\r\\n.likes img {\\r\\n  width: 25x;\\r\\n}\\r\\n\\r\\n.newButton {\\r\\n  width: 100px;\\r\\n  margin-left: 0;\\r\\n  margin-right: auto;\\r\\n  margin-top: 5px;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  justify-content: left;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.links {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  justify-content: left;\\r\\n  width: 700px;\\r\\n}\\r\\n\\r\\n.links li {\\r\\n  margin-left: 100px;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  width: 100px;\\r\\n  margin-left: 40px;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  text-align: center;\\r\\n  flex-direction: column;\\r\\n  border: 2px solid black;\\r\\n  width: 80%;\\r\\n  height: 90%;\\r\\n  margin: 20px auto;\\r\\n}\\r\\n\\r\\n.popupContainer {\\r\\n  position: fixed;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  z-index: 100;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  background-color: white;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n}\\r\\n\\r\\n.close {\\r\\n  height: 10px;\\r\\n  right: 10px;\\r\\n  margin: 10px 10px;\\r\\n}\\r\\n\\r\\n.heading {\\r\\n  display: flex;\\r\\n  justify-content: right;\\r\\n  margin: 10px;\\r\\n}\\r\\n\\r\\n.dishPop {\\r\\n  width: 180px;\\r\\n}\\r\\n\\r\\n.instructions {\\r\\n  font-size: 12px;\\r\\n  text-align: justify;\\r\\n  padding: 0 30px;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-size: 22px;\\r\\n  padding: 0;\\r\\n  margin: 5px 0;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  font-size: 17px;\\r\\n  padding: 0;\\r\\n  margin: 3px;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  width: 30%;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n}\\r\\n\\r\\ninput[type=text] {\\r\\n  width: 100px;\\r\\n  margin: 2px 0;\\r\\n}\\r\\n\\r\\n.area {\\r\\n  margin: 2px 0;\\r\\n}\\r\\n\\r\\n.comments {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  width: 60%;\\r\\n}\\r\\n\\r\\n.comments li {\\r\\n  list-style: none;\\r\\n  font-size: 12px;\\r\\n  text-align: start;\\r\\n}\\r\\n\\r\\n.blurContent {\\r\\n  mix-blend-mode: multiply;\\r\\n  filter: blur(24px);\\r\\n}\\r\\n\\r\\n.content {\\r\\n  overflow: auto;\\r\\n  padding-bottom: 20px;\\r\\n}\\r\\n\\r\\n.bodyOverFlow {\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.commentButton {\\r\\n  width: 100px;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  margin-top: 5px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_involvementApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/involvementApi.js */ \"./src/modules/involvementApi.js\");\n/* harmony import */ var _modules_mealDb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/mealDb.js */ \"./src/modules/mealDb.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _icons_whiteHeart_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/whiteHeart.png */ \"./src/icons/whiteHeart.png\");\n/* harmony import */ var _icons_redHeart_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/redHeart.png */ \"./src/icons/redHeart.png\");\n/* harmony import */ var _icons_restaurant_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/restaurant.png */ \"./src/icons/restaurant.png\");\n/* harmony import */ var _icons_close_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/close.png */ \"./src/icons/close.png\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n// APIs references\r\n\r\n\r\n\r\n// Styles and images references\r\n\r\n\r\n\r\n\r\n\r\n\r\n// DOM references\r\nconst section = document.getElementsByTagName('section')[0];\r\nconst header = document.getElementsByTagName('header')[0];\r\n\r\n// Filter variable\r\nconst MEALS_CATEGORY = 'Seafood';\r\n\r\n// MealsDB API function\r\nconst getMealsCount = async (category) => {\r\n  let mealsCount = 0;\r\n  const meals = await (0,_modules_mealDb_js__WEBPACK_IMPORTED_MODULE_1__.getMeals)(category);\r\n  if (meals !== undefined) {\r\n    const data = Object.values(meals)[0];\r\n    mealsCount = data.length;\r\n  }\r\n  return mealsCount;\r\n};\r\n\r\n// Involvement API functions\r\nconst getInvolvementData = async () => {\r\n  const response = await (0,_modules_involvementApi_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();\r\n  return response;\r\n};\r\n\r\nconst addLike = async (event) => {\r\n  const heart = event.target;\r\n  const response = await (0,_modules_involvementApi_js__WEBPACK_IMPORTED_MODULE_0__.createLike)(heart.id);\r\n  if (response === true) {\r\n    heart.src = _icons_redHeart_png__WEBPACK_IMPORTED_MODULE_4__;\r\n    const container = heart.parentElement;\r\n    const hidden = container.childNodes[0];\r\n    const previous = hidden.value;\r\n    const actual = parseInt(previous, 10) + 1;\r\n    hidden.value = actual;\r\n    const label = container.childNodes[2];\r\n    label.innerText = `${actual} likes`;\r\n  }\r\n};\r\n\r\nconst getCommentsById = async (itemId) => {\r\n  const comments = await (0,_modules_involvementApi_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(itemId);\r\n  const countComments = (comments === undefined) ? 0 : comments.length;\r\n  return { countComments, comments };\r\n};\r\n\r\nconst getReservationsById = async (itemId) => {\r\n  const reservations = await (0,_modules_involvementApi_js__WEBPACK_IMPORTED_MODULE_0__.getReservations)(itemId);\r\n  const countReservations = (reservations === undefined) ? 0 : reservations.length;\r\n  return { countReservations, reservations };\r\n};\r\nconst submitComment = async (e) => {\r\n  e.preventDefault();\r\n  const inputName = document.getElementById('name');\r\n  const inputInsights = document.getElementById('insights');\r\n  const id = document.getElementsByName('mealId')[0].value;\r\n  (0,_modules_involvementApi_js__WEBPACK_IMPORTED_MODULE_0__.addComment)(id, inputName.value, inputInsights.value);\r\n  const commments = document.getElementsByClassName('comments')[0];\r\n  const liComment = document.createElement('li');\r\n  const date = new Date();\r\n  liComment.innerHTML = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${inputName.value}: ${inputInsights.value}`;\r\n  commments.appendChild(liComment);\r\n  const form = document.getElementsByTagName('form')[0];\r\n  form.reset();\r\n};\r\nconst closePopup = () => {\r\n  const popupContainer = document.getElementsByClassName('popupContainer')[0];\r\n  popupContainer.style.display = 'none';\r\n  document.removeChild(popupContainer);\r\n};\r\nconst showCommentsInfo = async (event) => {\r\n  const button = event.target;\r\n  const mealId = button.id;\r\n  const mealInfo = await (0,_modules_mealDb_js__WEBPACK_IMPORTED_MODULE_1__.getMealInfo)(mealId);\r\n  if (mealInfo !== undefined) {\r\n    const meal = Object.values(mealInfo.meals)[0];\r\n\r\n    const { countComments, comments } = await getCommentsById(mealId);\r\n    let commentsSection = '';\r\n    if (countComments > 0) {\r\n      comments.forEach((comment) => {\r\n        commentsSection += `<li>${comment.creation_date} ${comment.username}: ${comment.comment}</li>`;\r\n      });\r\n    }\r\n    const popupContainer = document.createElement('div');\r\n    popupContainer.classList.add('popupContainer');\r\n    const popup = document.createElement('div');\r\n    popup.classList.add('popup');\r\n    popup.innerHTML = `<div class='heading'> <a class='close' href='#'><img src='${_icons_close_png__WEBPACK_IMPORTED_MODULE_6__}' alt='close icon'></a></div>\r\n  <div class=\"content\"><div ><div><img class=\"dishPop\" src=\"${meal.strMealThumb}\" alt=\"mealImage\"></div><h1>${meal.strMeal}</h1><p class='instructions' >${meal.strInstructions}</p></div>\r\n  <h2>Comments(${countComments})</h2>\r\n  <ul class='comments'>${commentsSection}</ul>\r\n  <form>\r\n  <h2>Add a comment</h2>\r\n  <input type=\"text\" name=\"name\" id=\"name\" placeholder=\"Your name\" required>\r\n  <textarea  id=\"insights\" class=\"area\"  name=\"insights\" rows=\"5\" cols=\"15\" maxlength=\"500\" placeholder=\"Your insights\" required></textarea>\r\n  <input class=\"newButton\" type=\"submit\" value=\"Comment\">\r\n  <input type=\"hidden\" name=\"mealId\" value=\"${meal.idMeal}\">\r\n</form>\r\n  </div>`;\r\n\r\n    popupContainer.appendChild(popup);\r\n    document.body.prepend(popupContainer);\r\n    const linkClose = document.getElementsByClassName('close')[0];\r\n    linkClose.addEventListener('click', closePopup);\r\n    const form = document.getElementsByTagName('form')[0];\r\n    form.addEventListener('submit', submitComment);\r\n  }\r\n};\r\n\r\nconst getInitialData = async () => {\r\n  let content = '';\r\n  let mealsCount = 0;\r\n  const meals = await (0,_modules_mealDb_js__WEBPACK_IMPORTED_MODULE_1__.getMeals)(MEALS_CATEGORY);\r\n  if (meals !== undefined) {\r\n    const likes = await getInvolvementData();\r\n    const data = Object.values(meals)[0];\r\n    mealsCount = data.length;\r\n    for (let index = 0; index < mealsCount; index += 1) {\r\n      const meal = data[index];\r\n      const like = likes.filter((l) => l.item_id === meal.idMeal);\r\n      const likesCount = (like.length === 0) ? 0 : like[0].likes;\r\n      const itemTemplate = `<div class='meal'><img class='dish' src='${meal.strMealThumb}' alt='${meal.strMeal} image' ><div class='description'><p>${meal.strMeal}</p><div class='likes'><input type=\"hidden\" name=\"likesCount\" value=\"${likesCount}\"><img class='heart' id='${meal.idMeal}' src='${_icons_whiteHeart_png__WEBPACK_IMPORTED_MODULE_3__}' alt='likeImg' ></img><label >${likesCount} likes</label></div></div><input class='commentButton' type='submit' id='${meal.idMeal}' name='CommentsButton' value='Comments'> <input class='commentButton' type='submit' id='${meal.idMeal}' name='ReservationsButton' value='Reservations'></div>`;\r\n      content += itemTemplate;\r\n    }\r\n  }\r\n  header.innerHTML = `<div class='logoContainer'><a href='./index.html' >\r\n  <img src='${_icons_restaurant_png__WEBPACK_IMPORTED_MODULE_5__}' alt='Logo' class='logo'></a></div><ul class='links'>\r\n  <li><a  href='./index.html'>${MEALS_CATEGORY} (${mealsCount})</a></li><li>\r\n  <a  href=#'>Beef</a></li><li><a  href='#'>Pasta</a></li><li><a  href='#'>Vegan</a></li></ul>`;\r\n  section.innerHTML = content;\r\n  const heartCollection = document.getElementsByClassName('heart');\r\n  const commentsButtonCollection = document.getElementsByName('CommentsButton');\r\n\r\n  [].forEach.call(heartCollection, (heart) => heart.addEventListener('click', addLike));\r\n  [].forEach.call(commentsButtonCollection, (commentButton) => commentButton.addEventListener('click', showCommentsInfo));\r\n};\r\n\r\nwindow.addEventListener('load', () => {\r\n  getInitialData();\r\n});\r\n\r\nmodule.exports = { getCommentsById, getReservationsById, getMealsCount };\r\n\n\n//# sourceURL=webpack://capstone/./src/index.js?");

/***/ }),

/***/ "./src/modules/apiAccess.js":
/*!**********************************!*\
  !*** ./src/modules/apiAccess.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"postData\": () => (/* binding */ postData)\n/* harmony export */ });\n// General functions to access GET and POST methods of any API\r\nconst postData = async (url, path = '', data = {}) => {\r\n  const fullUrl = `${url}/${path}`;\r\n  const response = await fetch(fullUrl, {\r\n    method: 'POST',\r\n    body: JSON.stringify(data),\r\n    headers: { 'Content-Type': 'application/json' },\r\n  });\r\n  const answer = await response.ok;\r\n  return answer;\r\n};\r\n\r\nconst getData = async (url, path) => {\r\n  let data = [];\r\n  const fullUrl = `${url}/${path}`;\r\n  const response = await fetch(fullUrl)\r\n    .catch();\r\n  if (response.ok) {\r\n    data = await response.json();\r\n  }\r\n  return data;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://capstone/./src/modules/apiAccess.js?");

/***/ }),

/***/ "./src/modules/involvementApi.js":
/*!***************************************!*\
  !*** ./src/modules/involvementApi.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addComment\": () => (/* binding */ addComment),\n/* harmony export */   \"createLike\": () => (/* binding */ createLike),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"getReservations\": () => (/* binding */ getReservations)\n/* harmony export */ });\n/* harmony import */ var _apiAccess_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiAccess.js */ \"./src/modules/apiAccess.js\");\n// Involvement API methods access\r\n\r\n\r\nconst INVOLVEMENT_API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';\r\n\r\nconst apiId = 'mJ38T1cF1k53CeEkLunA';\r\nconst getLikes = async () => {\r\n  let likes = [];\r\n  const data = await (0,_apiAccess_js__WEBPACK_IMPORTED_MODULE_0__.getData)(INVOLVEMENT_API_URL, `apps/${apiId}/likes`);\r\n  likes = data;\r\n\r\n  return likes;\r\n};\r\nconst createLike = async (itemId) => {\r\n  const data = { item_id: `${itemId}` };\r\n  const response = await (0,_apiAccess_js__WEBPACK_IMPORTED_MODULE_0__.postData)(INVOLVEMENT_API_URL, `apps/${apiId}/likes`, data);\r\n  return response;\r\n};\r\n\r\nconst getComments = async (itemId) => {\r\n  let comments = [];\r\n  const data = await (0,_apiAccess_js__WEBPACK_IMPORTED_MODULE_0__.getData)(INVOLVEMENT_API_URL, `apps/${apiId}/comments?item_id=${itemId}`);\r\n  comments = data;\r\n  return comments;\r\n};\r\nconst addComment = async (itemId, name, comment) => {\r\n  const data = { item_id: `${itemId}`, username: `${name}`, comment: `${comment}` };\r\n  const response = await (0,_apiAccess_js__WEBPACK_IMPORTED_MODULE_0__.postData)(INVOLVEMENT_API_URL, `apps/${apiId}/comments`, data);\r\n  return response;\r\n};\r\nconst getReservations = async (itemId) => {\r\n  let reservations = [];\r\n  const data = await (0,_apiAccess_js__WEBPACK_IMPORTED_MODULE_0__.getData)(INVOLVEMENT_API_URL, `apps/${apiId}/reservations?item_id=${itemId}`);\r\n  reservations = data;\r\n\r\n  return reservations;\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://capstone/./src/modules/involvementApi.js?");

/***/ }),

/***/ "./src/modules/mealDb.js":
/*!*******************************!*\
  !*** ./src/modules/mealDb.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getMealInfo\": () => (/* binding */ getMealInfo),\n/* harmony export */   \"getMeals\": () => (/* binding */ getMeals)\n/* harmony export */ });\n/* harmony import */ var _apiAccess_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiAccess.js */ \"./src/modules/apiAccess.js\");\n// MealsDB API access methods\r\n\r\n\r\nconst MEAL_DB_URL = 'https://www.themealdb.com/api/json/v1/1';\r\n\r\nconst getMeals = async (categoryId) => {\r\n  let answer = [];\r\n  const meals = await (0,_apiAccess_js__WEBPACK_IMPORTED_MODULE_0__.getData)(MEAL_DB_URL, `filter.php?c=${categoryId}`);\r\n  answer = meals;\r\n  return answer;\r\n};\r\nconst getMealInfo = async (mealId) => {\r\n  const mealInfo = await (0,_apiAccess_js__WEBPACK_IMPORTED_MODULE_0__.getData)(MEAL_DB_URL, `lookup.php?i=${mealId}`);\r\n  return mealInfo;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://capstone/./src/modules/mealDb.js?");

/***/ }),

/***/ "./src/icons/close.png":
/*!*****************************!*\
  !*** ./src/icons/close.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ccfd3dc87fd5447835eb.png\";\n\n//# sourceURL=webpack://capstone/./src/icons/close.png?");

/***/ }),

/***/ "./src/icons/redHeart.png":
/*!********************************!*\
  !*** ./src/icons/redHeart.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7d5550f38831fe9d2237.png\";\n\n//# sourceURL=webpack://capstone/./src/icons/redHeart.png?");

/***/ }),

/***/ "./src/icons/restaurant.png":
/*!**********************************!*\
  !*** ./src/icons/restaurant.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ef25cc2fb652bc88d14f.png\";\n\n//# sourceURL=webpack://capstone/./src/icons/restaurant.png?");

/***/ }),

/***/ "./src/icons/whiteHeart.png":
/*!**********************************!*\
  !*** ./src/icons/whiteHeart.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c0944e5f3e46e52c1cfd.png\";\n\n//# sourceURL=webpack://capstone/./src/icons/whiteHeart.png?");

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
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
/******/ 				scriptUrl = document.currentScript.src
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;