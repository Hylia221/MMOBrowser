/*! jsframe v1.6.4 Copyright (c) 2007-2020 Tom Misawa */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@riversun/event-emitter/lib/event-emitter.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@riversun/event-emitter/lib/event-emitter.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! event-emitter(https://github.com/riversun/event-emitter) v1.5.2 Copyright (c) 2020 riversun.org@gmail.com */
!function(e,t){ true?module.exports=t():undefined}(this,(function(){return(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,i,o=[],s=!0,u=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);s=!0);}catch(e){u=!0,i=e}finally{try{s||null==n.return||n.return()}finally{if(u)throw i}}return o}(e,t)||i(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=i(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,u=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){c=!0,s=e},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw s}}}}function i(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}e.d(t,{default:()=>a});var a=function(){function e(t){if(s(this,e),this.onListeners=new Map,this.onlyListeners=new Map,t){var n,i=r(t);try{for(i.s();!(n=i.n()).done;){var o=n.value,u=new l;this.onListeners.set(o,u)}}catch(e){i.e(e)}finally{i.f()}}this.childEventEmitters=[],this.onIntercepterFuncs={}}return c(e,[{key:"on",value:function(e,t){var r=this.onListeners.get(e);if(r||(r=new l,this.onListeners.set(e,r)),r.addListenerFunc(t),this.onIntercepterFuncs)for(var i=0,o=Object.entries(this.onIntercepterFuncs);i<o.length;i++){var s=n(o[i],2),u=s[0];(0,s[1])({eventType:e,func:t,onIntercepterFuncname:u})}}},{key:"removeListener",value:function(e,t){var n=this.onListeners.get(e);n&&n.removeListener(t)}},{key:"only",value:function(e,t,n){var r=this.onlyListeners.get(e);r||(r=new f,this.onlyListeners.set(e,r)),r.putListenerFunc(t,n)}},{key:"pipe",value:function(e){this.childEventEmitters.push(e)}},{key:"emit",value:function(e,t){var n=this.onListeners.get(e);n&&(t.eventType=e,n.callListenerFunc(t));var i=this.onlyListeners.get(e);i&&(t.eventType=e,i.callListenerFunc(t));var o,s=r(this.childEventEmitters);try{for(s.s();!(o=s.n()).done;){o.value.emit(e,t)}}catch(e){s.e(e)}finally{s.f()}}},{key:"getAllListeners",value:function(){var e={};this.onListeners.forEach((function(t,n){var r=n,i=t.getAllListeners();e[r]||(e[r]={}),e[r].listeners=i}));var t,n=0,i=r(this.childEventEmitters);try{for(i.s();!(t=i.n()).done;){t.value.onListeners.forEach((function(t,r){var i=r,o=t.getAllListeners();e[i]||(e[i]={}),e[i].childEventEmitters||(e[i].childEventEmitters=[]),e[i].childEventEmitters.push({childEmitterIdx:n,listeners:o})})),n++}}catch(e){i.e(e)}finally{i.f()}return e}},{key:"hasListenerFuncs",value:function(e){if(this.onListeners.has(e)){var t=this.onListeners.get(e);if(t&&t.hasListenerFunc())return!0}var n,i=r(this.childEventEmitters);try{for(i.s();!(n=i.n()).done;){if(n.value.hasListenerFuncs(e))return!0}}catch(e){i.e(e)}finally{i.f()}return!1}},{key:"clearAll",value:function(){var e,t=r(this.onListeners.values());try{for(t.s();!(e=t.n()).done;){e.value.clearAll()}}catch(e){t.e(e)}finally{t.f()}this.onListeners.clear();var n,i=r(this.onlyListeners.values());try{for(i.s();!(n=i.n()).done;){n.value.clearAll()}}catch(e){i.e(e)}finally{i.f()}this.onlyListeners.clear(),this.childEventEmitters=[]}},{key:"addOnIntercepterFunc",value:function(e,t){if(this.onIntercepterFuncs[e])throw Error('Always registered intercepter func "'.concat(e,'".'));this.onIntercepterFuncs[e]=t}},{key:"removeOnIntercepterFunc",value:function(e){delete this.onIntercepterFuncs[e]}},{key:"getAllOnIntercepterFuncs",value:function(){for(var e=[],t=0,r=Object.entries(this.onIntercepterFuncs);t<r.length;t++){var i=n(r[t],2),o=i[0],s=i[1];e.push({funcName:o,func:s})}return e}}]),e}(),l=function(){function e(){s(this,e),this.listenerFuncs=[]}return c(e,[{key:"clearAll",value:function(){this.listenerFuncs=[]}},{key:"getAllListeners",value:function(){return this.listenerFuncs}},{key:"hasListenerFunc",value:function(){return this.listenerFuncs.length>0}},{key:"addListenerFunc",value:function(e){this.listenerFuncs.push(e)}},{key:"callListenerFunc",value:function(e){var t,n=r(this.listenerFuncs);try{for(n.s();!(t=n.n()).done;){var i=t.value;if("Function"!==this.typeOf(i)&&"AsyncFunction"!==this.typeOf(i))throw Error('[@riversun/event-emitter] listenerFunction you set is not a function ( is type of A "'.concat(this.typeOf(i),'" ). listenerFunction:"').concat(i,'".Check args of #only method or #on method.'));i(e)}}catch(e){n.e(e)}finally{n.f()}}},{key:"removeListener",value:function(e){this.removeArrayItemOnce(this.listenerFuncs,e)}},{key:"removeArrayItemOnce",value:function(e,t){var n=e.indexOf(t);return n>-1&&e.splice(n,1),e}},{key:"typeOf",value:function(e){return Object.prototype.toString.call(e).slice(8,-1)}}]),e}(),f=function(){function e(){s(this,e),this.listenerFuncMap=new Map}return c(e,[{key:"clearAll",value:function(){this.listenerFuncMap.clear()}},{key:"hasListenerFunc",value:function(e){return this.listenerFuncMap.has(e)}},{key:"putListenerFunc",value:function(e,t){this.listenerFuncMap.set(e,t)}},{key:"callListenerFunc",value:function(e){var t,n=r(this.listenerFuncMap.values());try{for(n.s();!(t=n.n()).done;){var i=t.value;if("Function"!==this.typeOf(i))throw Error('[@riversun/event-emitter] listenerFunction you set is not a function. listenerFunction:"'.concat(i,'".Check args of #only method or #on method.'));i(e)}}catch(e){n.e(e)}finally{n.f()}}},{key:"typeOf",value:function(e){return Object.prototype.toString.call(e).slice(8,-1)}}]),e}();return t=t.default})()}));

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/JSFrame.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/JSFrame.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".jsframe-titlebar-default {\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #f5f5f5, color-stop(1.0, #f8f7f2)));\n    background: -webkit-linear-gradient(top, #f5f5f5, #f8f7f2);\n    background: -moz-linear-gradient(top, #f5f5f5, #f8f7f2);\n    background: linear-gradient(top, #f5f5f5, #f8f7f2);\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n\n.jsframe-titlebar-focused {\n    /* (c)2015 Johannes Jakob\n       Made with <3 in Germany */\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #ebebeb, color-stop(1.0, #d5d5d5)));\n    background: -webkit-linear-gradient(top, #ebebeb, #d5d5d5);\n    background: -moz-linear-gradient(top, #ebebeb, #d5d5d5);\n    background: linear-gradient(top, #ebebeb, #d5d5d5);\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n\n.jsframe-modal-window-background {\n    background: rgba(0, 0, 0, 0.6);\n    height: 100%;\n    widdth: 100%\n}", "",{"version":3,"sources":["webpack://./src/JSFrame.css"],"names":[],"mappings":"AAAA;IACI,+GAA+G;IAC/G,0DAA0D;IAC1D,uDAAuD;IACvD,kDAAkD;IAClD,2BAA2B;IAC3B,4BAA4B;AAChC;;AAEA;IACI;gCAC4B;IAC5B,+GAA+G;IAC/G,0DAA0D;IAC1D,uDAAuD;IACvD,kDAAkD;IAClD,2BAA2B;IAC3B,4BAA4B;AAChC;;AAEA;IACI,8BAA8B;IAC9B,YAAY;IACZ;AACJ","sourcesContent":[".jsframe-titlebar-default {\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #f5f5f5, color-stop(1.0, #f8f7f2)));\n    background: -webkit-linear-gradient(top, #f5f5f5, #f8f7f2);\n    background: -moz-linear-gradient(top, #f5f5f5, #f8f7f2);\n    background: linear-gradient(top, #f5f5f5, #f8f7f2);\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n\n.jsframe-titlebar-focused {\n    /* (c)2015 Johannes Jakob\n       Made with <3 in Germany */\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #ebebeb, color-stop(1.0, #d5d5d5)));\n    background: -webkit-linear-gradient(top, #ebebeb, #d5d5d5);\n    background: -moz-linear-gradient(top, #ebebeb, #d5d5d5);\n    background: linear-gradient(top, #ebebeb, #d5d5d5);\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n\n.jsframe-modal-window-background {\n    background: rgba(0, 0, 0, 0.6);\n    height: 100%;\n    widdth: 100%\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/presets/appearance/PresetStyleMaterial.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/presets/appearance/PresetStyleMaterial.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".jsframe-preset-style-material-default {\n    background: black;\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n\n.jsframe-preset-style-material-focused {\n    background: black;\n    border-top-left-radius: 36px;\n    border-top-right-radius: 36px;\n}\n", "",{"version":3,"sources":["webpack://./src/presets/appearance/PresetStyleMaterial.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,2BAA2B;IAC3B,4BAA4B;AAChC;;AAEA;IACI,iBAAiB;IACjB,4BAA4B;IAC5B,6BAA6B;AACjC","sourcesContent":[".jsframe-preset-style-material-default {\n    background: black;\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n\n.jsframe-preset-style-material-focused {\n    background: black;\n    border-top-left-radius: 36px;\n    border-top-right-radius: 36px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/presets/appearance/PresetStylePopup.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/presets/appearance/PresetStylePopup.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".jsframe-preset-style-popup-default {\n    background: white;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n}\n\n.jsframe-preset-style-popup-focused {\n    background: white;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n}\n", "",{"version":3,"sources":["webpack://./src/presets/appearance/PresetStylePopup.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,2BAA2B;IAC3B,4BAA4B;AAChC;;AAEA;IACI,iBAAiB;IACjB,2BAA2B;IAC3B,4BAA4B;AAChC","sourcesContent":[".jsframe-preset-style-popup-default {\n    background: white;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n}\n\n.jsframe-preset-style-popup-focused {\n    background: white;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/presets/appearance/PresetStyleRedstone.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/presets/appearance/PresetStyleRedstone.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".jsframe-preset-style-redstone-default {\n    background: white;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n}\n\n.jsframe-preset-style-redstone-focused {\n    background: white;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n}\n", "",{"version":3,"sources":["webpack://./src/presets/appearance/PresetStyleRedstone.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,2BAA2B;IAC3B,4BAA4B;AAChC;;AAEA;IACI,iBAAiB;IACjB,2BAA2B;IAC3B,4BAA4B;AAChC","sourcesContent":[".jsframe-preset-style-redstone-default {\n    background: white;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n}\n\n.jsframe-preset-style-redstone-focused {\n    background: white;\n    border-top-left-radius: 0px;\n    border-top-right-radius: 0px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/presets/appearance/PresetStyleYosemite.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/presets/appearance/PresetStyleYosemite.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".jsframe-preset-style-yosemite-default {\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #f5f5f5, color-stop(1.0, #f8f7f2)));\n    background: -webkit-linear-gradient(top, #f5f5f5, #f8f7f2);\n    background: -moz-linear-gradient(top, #f5f5f5, #f8f7f2);\n    background: linear-gradient(top, #f5f5f5, #f8f7f2);\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n\n.jsframe-preset-style-yosemite-focused {\n    /* (c)2015 Johannes Jakob\n       Made with <3 in Germany */\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #ebebeb, color-stop(1.0, #d5d5d5)));\n    background: -webkit-linear-gradient(top, #ebebeb, #d5d5d5);\n    background: -moz-linear-gradient(top, #ebebeb, #d5d5d5);\n    background: linear-gradient(top, #ebebeb, #d5d5d5);\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n", "",{"version":3,"sources":["webpack://./src/presets/appearance/PresetStyleYosemite.css"],"names":[],"mappings":"AAAA;IACI,+GAA+G;IAC/G,0DAA0D;IAC1D,uDAAuD;IACvD,kDAAkD;IAClD,2BAA2B;IAC3B,4BAA4B;AAChC;;AAEA;IACI;gCAC4B;IAC5B,+GAA+G;IAC/G,0DAA0D;IAC1D,uDAAuD;IACvD,kDAAkD;IAClD,2BAA2B;IAC3B,4BAA4B;AAChC","sourcesContent":[".jsframe-preset-style-yosemite-default {\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #f5f5f5, color-stop(1.0, #f8f7f2)));\n    background: -webkit-linear-gradient(top, #f5f5f5, #f8f7f2);\n    background: -moz-linear-gradient(top, #f5f5f5, #f8f7f2);\n    background: linear-gradient(top, #f5f5f5, #f8f7f2);\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n\n.jsframe-preset-style-yosemite-focused {\n    /* (c)2015 Johannes Jakob\n       Made with <3 in Germany */\n    background: -webkit-gradient(linear, left top, left bottom, color-stop(0.0, #ebebeb, color-stop(1.0, #d5d5d5)));\n    background: -webkit-linear-gradient(top, #ebebeb, #d5d5d5);\n    background: -moz-linear-gradient(top, #ebebeb, #d5d5d5);\n    background: linear-gradient(top, #ebebeb, #d5d5d5);\n    border-top-left-radius: 6px;\n    border-top-right-radius: 6px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/event-listener-helper/lib/event-listener-helper.js":
/*!*************************************************************************!*\
  !*** ./node_modules/event-listener-helper/lib/event-listener-helper.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! event-listener-helper(https://github.com/riversun/event-listener-helper) v1.1.3 Copyright (c) 2020 riversun.org@gmail.com */
!function(e,t){ true?module.exports=t():undefined}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null==n)return;var r,i,o=[],a=!0,s=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(e){s=!0,i=e}finally{try{a||null==n.return||n.return()}finally{if(s)throw i}}return o}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=a(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return s=e.done,e},e:function(e){l=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw o}}}}function a(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t),n.d(t,"default",(function(){return u}));var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.evTargetListenersMap=new Map,this.listenerNum=0}var t,n,a;return t=e,(n=[{key:"addEventListener",value:function(e,t,n,r){var i=this,o=null;if(r&&(o=this._cloneJson(r)),arguments.length>4)throw Error("Too many arguments. Number of arguments can be specified 4.");this._checkTypeOfOptions(o);var a=null;o&&o.listenerName&&(a=o.listenerName);var s=null;o&&o.once&&(delete o.once,o.callbackOnce=!0,s=function(r){n(r),i.removeEventListener(e,t,null,o)});var l={listenerName:null,success:!0};s?e.addEventListener(t,s,o):e.addEventListener(t,n,o);var u=this.evTargetListenersMap.get(e);u||(u=new Map,this.evTargetListenersMap.set(e,u));var c=u.get(t);if(c||(c=new Map,u.set(t,c)),null!==a){if(c.has(a))throw Error('The listenerName "'.concat(a,'" is already used for the specified event type ').concat(t));c.set(a,{listener:n,onceListener:s,options:o}),l.listenerName=a}else{var f="listener-".concat(this.listenerNum);o||(o={}),o.listenerName=f,c.set(f,{listener:n,onceListener:s,options:o}),l.listenerName=f,this.listenerNum+=1}return l}},{key:"removeEventListener",value:function(e,t,n,r){if(arguments.length<3)throw Error("Three or four arguments are required.");if("Function"!==this.typeOf(n)&&"Null"!==this.typeOf(n))throw Error('Type of 3rd arg should be a "Function" or "Null".');this._checkTypeOfOptions(r);var i=null;r&&r.listenerName&&(i=r.listenerName);var o={success:!1,message:"unknown error"},a=this.evTargetListenersMap.get(e);if(!a)return o.message="DOM element ".concat(e,"(id=").concat(e.id,") doesn't have any listeners."),o;var s=a.get(t);if(!s)return o.message="DOM element ".concat(e,"(id=").concat(e.id,") doesn't have \"").concat(t,'" listeners.'),o;if(i){var l=s.get(i);if(!l)return o.message="DOM element ".concat(e,"(id=").concat(e.id,") doesn't have \"").concat(t,'" listener "').concat(i,'"'),o;s.delete(i),l.options&&l.options.callbackOnce?e.removeEventListener(t,l.onceListener,l.options):e.removeEventListener(t,l.listener,l.options),o.success=!0}else if(!i){if(!n)return o.message="options.listenerName is not found",o;var u="listener",c=n,f=this._searchKeyInValueContent(s,u,c);if(f){var v=s.get(f),y=v.onceListener,p=v.options;s.delete(f),y?e.removeEventListener(t,y,p):e.removeEventListener(t,n,p),o.success=!0}else o.success=!1,o.message="Specified listener could not be deleted from DOM element ".concat(e,"(id=").concat(e.id,").\n        Since the specified listener is not registered as an event listener,\n        it may have been registered outside of event-listener-helper.")}return o}},{key:"getEventListeners",value:function(e,t){return e?t?this._getEventListenersWith2Args(e,t):this._getEventListenersWith1Arg(e):[]}},{key:"getAllEventListeners",value:function(){var e=this,t=new Map;return this.evTargetListenersMap.forEach((function(n,r){var i=r,a=e._getEventListenersWith1Arg(i),s=new Map;t.set(i,s);var l,u=o(a);try{for(u.s();!(l=u.n()).done;){var c=l.value;s.set(c.eventType,c.listeners)}}catch(e){u.e(e)}finally{u.f()}})),t}},{key:"_getEventListenersWith1Arg",value:function(e){var t=[],n=this.evTargetListenersMap.get(e);if(!n)return t;var r,a=o(n);try{for(a.s();!(r=a.n()).done;){var s,l=i(r.value,2),u=l[0],c=l[1],f=[],v=o(c.values());try{for(v.s();!(s=v.n()).done;){var y=s.value;f.push(this._getFrozenListenerDef(y))}}catch(e){v.e(e)}finally{v.f()}f.length>0&&t.push({eventType:u,listeners:f})}}catch(e){a.e(e)}finally{a.f()}return t}},{key:"_getEventListenersWith2Args",value:function(e,t){if(2!==arguments.length)throw Error("Only two arguments can be specified");var n=[],r=this.evTargetListenersMap.get(e);if(!r)return n;var i=r.get(t);if(!i)return n;var a,s=o(i.values());try{for(s.s();!(a=s.n()).done;){var l=a.value,u=this._getFrozenListenerDef(l);n.push(u)}}catch(e){s.e(e)}finally{s.f()}return n}},{key:"getEventListener",value:function(e,t,n){if(3!==arguments.length)throw Error("Only 3 arguments can be specified");var r=this.evTargetListenersMap.get(e);if(!r)return null;var i=r.get(t);if(!i)return null;var o=i.get(n),a=this._getFrozenListenerDef(o);return a}},{key:"hasEventListeners",value:function(e,t){if(2!==arguments.length)throw Error("Only two arguments can be specified");var n=this.evTargetListenersMap.get(e);if(!n)return!1;var r=n.get(t);return!(!r||0===r.size)}},{key:"hasEventListener",value:function(e,t,n){if(3!==arguments.length)throw Error("Only 3 arguments can be specified");var r=this.evTargetListenersMap.get(e);if(!r)return!1;var i=r.get(t);if(!i)return!1;var o=i.get(n);return!!o}},{key:"_getFrozenListenerDef",value:function(e){if(!e)return null;var t={},n=null,r=e.options;return r&&(n={},t.options=n,r.capture&&(n.capture=r.capture),r.callbackOnce&&(n.once=r.callbackOnce),r.listenerName&&(n.listenerName=r.listenerName)),t.listener=e.listener,Object.freeze(n),Object.freeze(t),t}},{key:"clearAllEventListeners",value:function(){var e,t=o(this.getAllEventTargets());try{for(t.s();!(e=t.n()).done;){var n=e.value;this.clearEventListeners(n)}}catch(e){t.e(e)}finally{t.f()}}},{key:"clearEventListeners",value:function(e,t){if(!e)throw Error("At least the EventTarget must be specified as an argument");var n=this.getEventListeners(e,t);if(t){if(t){var r,i=o(n);try{for(i.s();!(r=i.n()).done;){var a=r.value;this.removeEventListener(e,t,null,a.options)}}catch(e){i.e(e)}finally{i.f()}}}else{var s,l=o(n);try{for(l.s();!(s=l.n()).done;){var u,c=s.value,f=c.eventType,v=o(c.listeners);try{for(v.s();!(u=v.n()).done;){var y=u.value.options;this.removeEventListener(e,f,null,y)}}catch(e){v.e(e)}finally{v.f()}}}catch(e){l.e(e)}finally{l.f()}}}},{key:"clearEventListener",value:function(e,t,n){var r=this.getEventListener(e,t,n);r&&r.options&&this.removeEventListener(e,t,null,r.options)}},{key:"getAllEventTargets",value:function(){return Array.from(this.evTargetListenersMap.keys())}},{key:"searchEventListenersByName",value:function(e){var t,n=[],r=o(this.getAllEventTargets());try{for(r.s();!(t=r.n()).done;){var i,a=t.value,s=this.evTargetListenersMap.get(a),l=o(s.keys());try{for(l.s();!(i=l.n()).done;){var u=i.value,c=s.get(u),f=this._getFrozenListenerDef(c.get(e));f&&n.push(f)}}catch(e){l.e(e)}finally{l.f()}}}catch(e){r.e(e)}finally{r.f()}return n}},{key:"_searchKeyInValueContent",value:function(e,t,n){var r,a=o(e);try{for(a.s();!(r=a.n()).done;){var s=i(r.value,2),l=s[0];if(s[1][t]===n)return l}}catch(e){a.e(e)}finally{a.f()}return null}},{key:"_checkTypeOfOptions",value:function(e){if("object"!==r(e)&&void 0!==e)throw"boolean"==typeof e?new Error("Type of boolean is not accepted as the fourth argument you specify.\n      If you want to enable useCapture, specify {capture: true} as the fourth parameter instead."):new Error("Type of ".concat(r(e)," is not accepted as the fourth argument you specify.\n      If you want to specify options, specify an object like {capture: true, listenerName:'my-listener-01'}."))}},{key:"_cloneJson",value:function(e){return JSON.parse(JSON.stringify(e))}},{key:"typeOf",value:function(e){return Object.prototype.toString.call(e).slice(8,-1)}}])&&l(t.prototype,n),a&&l(t,a),e}()}]).default}));

/***/ }),

/***/ "./node_modules/merge-deeply/lib/merge-deeply.js":
/*!*******************************************************!*\
  !*** ./node_modules/merge-deeply/lib/merge-deeply.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! merge-deeply v2.1.1 Copyright (c) 2019-2020 riversun.org@gmail.com */
!function(e,t){ true?module.exports=t():undefined}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";function n(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||i(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var c,a=e[Symbol.iterator]();!(n=(c=a.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}(e,t)||i(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t,r){var i=function(e){return e&&"object"===a(e)&&!Array.isArray(e)},c=r&&r.concatArray,f={};r&&r.assignToObject&&(f=r.assignToObject,r.assignToObject=null);var l,y,b,p=null;if(p=f===e?e:Object.assign(f,e),i(e)&&i(t))for(var s=0,d=Object.entries(t);s<d.length;s++){var m=o(d[s],2),j=m[0],g=m[1],v=e[j];c&&Array.isArray(g)&&Array.isArray(v)&&t!==e?p[j]=v.concat.apply(v,n(g)):i(g)&&Object.prototype.hasOwnProperty.call(e,j)?p[j]=u(v,g,r):Object.assign(p,(b=g,(y=j)in(l={})?Object.defineProperty(l,y,{value:b,enumerable:!0,configurable:!0,writable:!0}):l[y]=b,l))}return p}function f(e){var t=null,r=null,n=e.op;if(!n)throw Error('The initialization property "op" cannot be omitted. "merge","overwrite-merge","clone" can be specified.');var o="merge"===n,i="clone"===n,c="overwrite-merge"===n;if(o){if(t=e.object1,r=e.object2,!t||!r)throw Error("object1 or object2 is not specified.")}else if(c){if(t=e.object1,r=e.object2,!t||!r)throw Error("object1 or object2 is not specified.");if(0===Object.keys(r).length)return null}else{if(!i)throw Error('An invalid "op" property value "'.concat(n,'" has been specified.'));t=e.object1,r={}}var a,f=Object.create(Object.getPrototypeOf(t)),l=null,y=(a=t,Object.getPrototypeOf(a)!==Object.prototype);return o&&y||i?(u(t,t,{assignToObject:f,concatArray:e&&e.concatArray}),l=f):l={},u(i?l:t,r,{assignToObject:c?t:l,concatArray:e&&e.concatArray}),l}r.r(t),r.d(t,"default",(function(){return f}))}]).default}));

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/CCommon.js":
/*!************************!*\
  !*** ./src/CCommon.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

CALIGN = {};

CALIGN.LEFT_TOP = 'LEFT_TOP';
CALIGN.HCENTER_TOP = 'CENTER_TOP';
CALIGN.RIGHT_TOP = 'RIGHT_TOP';
CALIGN.LEFT_VCENTER = 'LEFT_CENTER';
CALIGN.HCENTER_VCENTER = 'CENTER_CENTER';
CALIGN.CENTER = CALIGN.HCENTER_VCENTER;
CALIGN.RIGHT_VCENTER = 'RIGHT_CENTER';
CALIGN.LEFT_BOTTOM = 'LEFT_BOTTOM';
CALIGN.HCENTER_BOTTOM = 'CENTER_BOTTOM';
CALIGN.RIGHT_BOTTOM = 'RIGHT_BOTTOM';

module.exports = CALIGN;


/***/ }),

/***/ "./src/JSFrame.css":
/*!*************************!*\
  !*** ./src/JSFrame.css ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_JSFrame_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./JSFrame.css */ "./node_modules/css-loader/dist/cjs.js!./src/JSFrame.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_JSFrame_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_JSFrame_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/JSFrame.js":
/*!************************!*\
  !*** ./src/JSFrame.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./JSFrame.css */ "./src/JSFrame.css");
var EventEmitter = __webpack_require__(/*! @riversun/event-emitter */ "./node_modules/@riversun/event-emitter/lib/event-emitter.js");
var CALIGN = __webpack_require__(/*! ./CCommon.js */ "./src/CCommon.js");
var WindowEventHelper = __webpack_require__(/*! ./utils/WindowEventHelper.js */ "./src/utils/WindowEventHelper.js");
var inherit = __webpack_require__(/*! ./utils/Inherit.js */ "./src/utils/Inherit.js");
var CFrameAppearance = __webpack_require__(/*! ./appearance/CFrameAppearance.js */ "./src/appearance/CFrameAppearance.js");
var CDomPartsBuilder = __webpack_require__(/*! ./appearance/CDomPartsBuilder.js */ "./src/appearance/CDomPartsBuilder.js");
var CSimpleLayoutAnimator = __webpack_require__(/*! ./utils/CSimpleLayoutAnimator.js */ "./src/utils/CSimpleLayoutAnimator.js");
var EventListenerHelper = __webpack_require__(/*! event-listener-helper */ "./node_modules/event-listener-helper/lib/event-listener-helper.js");

//If you don't want to bundle preset styles in JsFrame.js ,comment out below.
var presetStyles = {
  'yosemite': __webpack_require__(/*! ./presets/appearance/PresetStyleYosemite.js */ "./src/presets/appearance/PresetStyleYosemite.js"),
  'redstone': __webpack_require__(/*! ./presets/appearance/PresetStyleRedstone.js */ "./src/presets/appearance/PresetStyleRedstone.js"),
  'popup': __webpack_require__(/*! ./presets/appearance/PresetStylePopup.js */ "./src/presets/appearance/PresetStylePopup.js"),
  'toast': __webpack_require__(/*! ./presets/appearance/PresetStyleToast.js */ "./src/presets/appearance/PresetStyleToast.js"),
  'material': __webpack_require__(/*! ./presets/appearance/PresetStyleMaterial.js */ "./src/presets/appearance/PresetStyleMaterial.js"),
};

var presetWindows = {
  'yosemite': __webpack_require__(/*! ./presets/window/PresetWindowYosemite.js */ "./src/presets/window/PresetWindowYosemite.js"),
};

var DEF = {};

// true:Support mouse on mouse-enabled devices
var MOUSE_ENABLED = true;

// true:Support touch on touch-enabled devices
var TOUCH_ENABLED = true;

//true:Allow the window to be moved only in the case of one finger
// (the window cannot be moved in the case of two or more fingers)
var TOUCH_MOVE_ONLY_WITH_ONE_FINGER = true;


/**
 * DEFINITIONS
 */
DEF.CBEAN = {};
DEF.CBEAN.HTML_ELEMENT = 'span';
DEF.CBEAN.HTML_ELEMENT_ID_PREFIX = 'htmlElement_';
DEF.CBEAN.TYPE_NAME = 'bean';


//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


/**
 * CBeanFrame Class<p>
 * The smallest window. It is responsible for basic processing only.
 *
 * @param beanId id of this small window
 * @param left
 * @param top
 * @param width
 * @param height
 * @param zindex
 * @constructor
 */
function CBeanFrame(beanId, left, top, width, height, zindex, w_border_width, appearance) {

  var me = this;

  me.movable = true;


  //fields
  me.id = beanId;
  me.property = {};

  me.extra = {};

  me.parentCanvas = null;
  me.htmlElement = null;

  me.pullUpDisabled = false;
  if (appearance) {
    me.pullUpDisabled = appearance.pullUpDisabled;
  }


  //initialize
  me.htmlElement = document.createElement(DEF.CBEAN.HTML_ELEMENT);
  me.htmlElement.id = DEF.CBEAN.HTML_ELEMENT_ID_PREFIX + beanId;
  me.htmlElement.style.position = 'absolute';
  me.htmlElement.style.left = parseInt(left, 10) + 'px';
  me.htmlElement.style.top = parseInt(top, 10) + 'px';
  me.htmlElement.style.width = parseInt(width, 10) + 'px';
  me.htmlElement.style.height = parseInt(height, 10) + 'px';


  //Zindex may become 'undefined' in some cases.
  if (zindex !== null) {
    me.htmlElement.style.zIndex = zindex;
  }
  me.htmlElement.style.borderColor = '#000000';

  //If I set a larger font size, width and height of window will be affected....
  me.htmlElement.style.fontSize = '1px';

  //Refer parents to each other.(sougo-sansho)
  me.htmlElement.parent = me;

  if (MOUSE_ENABLED) {
    //Note that 'mouseDown' is mapped to 'onmousedown' of htmlElement,
    //so when 'onmouseDown' fires ,the 'this' will indicate 'htmlElement'
    me.htmlElement.onmousedown = me.onmouseDown;
  }

  if (TOUCH_ENABLED) {
    if ('ontouchstart' in window) {
      var funcOnTouchStart = function(evt) {
        // The "mousedown" event happens right after "touchstart" event,
        // but I don't call #preventdefault because #preventdefault prevents "onclick".
        // So, perform #preventdefault only for "touchmove"
        // evt.preventDefault();
        me.onmouseDown.bind(this)(evt);
      };
      me.htmlElement.ontouchstart = funcOnTouchStart;
    }
  }

  //Type name of this class
  me.htmlElement.typeName = DEF.CBEAN.TYPE_NAME;

  //Special field indicating usage of this class
  me.htmlElement.usage = 'nothing';

  //Whether it can move outside the frame(waku).
  me.htmlElement.isRangeLimited = false;

  //Movement magnification in the X direction
  //(If it is 0, it can not move in the X direction.)
  me.htmlElement.argX = 1;

  //Movement magnification in Y direction
  // (If it is 0, it can not move in Y direction)
  me.htmlElement.argY = 1;
  me.externalAreaClickedListener = null;

  me.onMoveListener = null;
}

CBeanFrame.prototype.getWindowType = function() {
  return 'CBeanFrame';
};

CBeanFrame.prototype.setOnMoveListener = function(listener) {
  var me = this;
  me.onMoveListener = listener;
};
CBeanFrame.prototype._onMove = function(e) {
  var me = this;
  if (me.onMoveListener) {
    me.onMoveListener(e);
  }
};

/**
 * Set whether the frame can be moved while dragging with the mouse
 * @param enabled
 */
CBeanFrame.prototype.setMovable = function(enabled) {
  var me = this;

  if (enabled) {
    me.htmlElement.argX = 1;
    me.htmlElement.argY = 1;
  } else {
    me.htmlElement.argX = 0;
    me.htmlElement.argY = 0;
  }

  me.movable = enabled;

  return me;
};


CBeanFrame.prototype.setParentCanvas = function(parentCanvas) {
  var me = this;
  me.parentCanvas = parentCanvas;
  me.htmlElement.parentCanvas = me.parentCanvas;
  return me;
};
CBeanFrame.prototype.setOnExternalAreaClickedListener = function(listener) {
  var me = this;
  me.externalAreaClickedListener = listener;
  return me;
};
CBeanFrame.prototype.onBodyClicked = function(e) {

  var me = this;

  var clickX = e.pageX;
  var clickY = e.pageY;

  var left = parseInt(me.htmlElement.style.left);
  var top = parseInt(me.htmlElement.style.top);
  var width = parseInt(me.htmlElement.style.width);
  var height = parseInt(me.htmlElement.style.height);

  if (left < clickX && clickX < (left + width) && top < clickY && (clickY < top + height)) {
    //- clicked internal area of this frame
  } else {

    //- clicked external area of this frame
    if (me.externalAreaClickedListener) {
      me.externalAreaClickedListener();
    }

  }


};
CBeanFrame.prototype.onmouseDown = function(evt) {

  // Typically, if you mouse down on the title portion, the onmousedown fires to move the window.
  // Mousing down the bottom of the window, the left side of the window,
  // or the bottom of the window will fire the onmouseDown of the window itself (CBeanFrame)
  // as well as the onmouseDown of the CMarkerWindow for resizing.
  // Each mousedown element is set to a currentObject as being selected,
  // whether it's a window or a marker.

  // this means htmlElement of CBeanFrame object
  var refHtmlElement = this;

  var e = evt;

  if (TOUCH_ENABLED) {
    if (evt.type === 'touchstart') {
      var changedTouches = evt.changedTouches;
      if (TOUCH_MOVE_ONLY_WITH_ONE_FINGER) {
        var touches = evt.touches;
        if (touches.length === 1) {
          e = changedTouches[0];
        } else {
          return true;
        }
      } else {
        e = changedTouches[0];
      }
    }
  }

  //Retrieve CBeanFrame object itself
  var refCBeanFrame = refHtmlElement.parent;

  if (e.button == 0 || evt.type === 'touchstart') {
    // for modal background window
    if (refCBeanFrame.pullUpDisabled) {
      return false;
    } else {

      // Set the current CBeanFrame to be selected(=currentObject) among other CBeanFrames in the parent canvas.
      refHtmlElement.parentCanvas.currentObject = refHtmlElement;

      // Bring the current bean to the top
      refHtmlElement.parentCanvas.pullUp(refCBeanFrame.id);
    }

  } else if (e.button == 2) {
    return false;
  }

  if (refHtmlElement.parentCanvas.currentObject) {

    refHtmlElement.parentCanvas.offsetX = e.pageX - parseInt(refHtmlElement.parentCanvas.currentObject.style.left, 10);
    refHtmlElement.parentCanvas.offsetY = e.pageY - parseInt(refHtmlElement.parentCanvas.currentObject.style.top, 10);
  }


  return false;
};
/**
 * End of CBeanFrame Class <p>
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


DEF.CANVAS = {};
DEF.CANVAS.HTML_ELEMENT = 'div';
DEF.CANVAS.WIDTH_ADJUST_20180722 = 2;
DEF.CANVAS.HEIGHT_ADJUST_20180722 = 3;

/**
 * CCanvas class
 * A canvas is a place where windows are arranged, where you can drag and move freely.
 *
 * @param parentElement
 * @param canvasId
 * @param left
 * @param top
 * @param width
 * @param height
 * @constructor
 */
function CCanvas(parentElement, canvasId, left, top, width, height) {

  //Event data to be transmitted
  function EventData() {
    this.x = 0;
    this.y = 0;
    this.screenX = 0;
    this.screenY = 0;
    this.deltaX = 0;
    this.deltaY = 0;
    this.isMoved = false;
    this.targetTypeName = null;
    this.targetUsage = null;
    this.targetObject = null;
  }

  var me = this;


  me.enablePullUp = true;// true:Pull-up sorting to bring the window to the forefront by clicking to get focus.
  me.currentObject = null;
  me.onTopObject = null;
  me.offsetX = 0;
  me.offsetY = 0;


  //Object which generated 'mouseDown' event at the very beginning(ichiban-saisho)
  me.mouseDownSource = null;

  me.id = canvasId;
  me.canvasElement = null;
  me.parentElement = parentElement;
  me.beanList = new Array();

  me.beanIdName = {};//key:beanId value:beanName
  me.beanNameId = {};//key:beanName value:beanId

  me.eventData = new EventData();


  me.baseZIndex = 0;
  me.setBaseZIndex = function(baseZIndex) {
    me.baseZIndex = baseZIndex;
  };
  me.getBaseZIndex = function() {
    return me.baseZIndex;
  };


  me.canvasElement = document.createElement(DEF.CANVAS.HTML_ELEMENT);

  me.canvasElement.style.zIndex = 2000;
  me.canvasElement.id = me.id;
  me.canvasElement.style.boxSizing = 'border-box';
  me.canvasElement.style.position = 'absolute';
  me.canvasElement.style.left = parseInt(left) + 'px';
  me.canvasElement.style.top = parseInt(top) + 'px';
  //Added an adjustment value.Because transparent part appears at the bottom of the screen,
  me.canvasElement.style.width = (parseInt(width) + DEF.CANVAS.WIDTH_ADJUST_20180722) + 'px';
  me.canvasElement.style.height = (parseInt(height) + DEF.CANVAS.HEIGHT_ADJUST_20180722) + 'px';
  me.canvasElement.style.backgroundColor = 'transparent';
  me.canvasElement.style.borderStyle = 'none';
  me.canvasElement.style.margin = '0px';
  me.canvasElement.style.borderWidth = '0px';
  me.canvasElement.style.borderColor = 'transparent';

  //Add the Canvas's html element into the canvas's parent html element
  me.parentElement.appendChild(me.canvasElement);

}


CCanvas.prototype.mouseMove = function(evt) {

  var me = this;
  var e = evt;
  if (TOUCH_ENABLED) {
    if (evt.type === 'touchmove') {
      var changedTouches = evt.changedTouches;
      if (TOUCH_MOVE_ONLY_WITH_ONE_FINGER) {
        var touches = evt.touches;
        if (touches.length === 1) {
          e = changedTouches[0];
        } else {
          return true;
        }
      } else {
        e = changedTouches[0];
      }
    }
  }
  if (me.currentObject) {

    //eventData.isMoved=true;The presence of event data means that it has moved.
    me.eventData.targetTypeName = me.currentObject.typeName;
    me.eventData.targetUsage = me.currentObject.usage;
    me.eventData.targetObject = me.currentObject;

    //Even when obj is not being dragged, mouse coordinates are used here because they are needed.
    var newObjLeftPx = e.pageX - me.offsetX;
    var newObjTopPx = e.pageY - me.offsetY;

    var absoluteMouseX = e.pageX;
    var absoluteMouseY = e.pageY;

    //Take the snapshot before updating the location.
    var oldObjLeftPx = me.currentObject.style.left;
    var oldObjTopPx = me.currentObject.style.top;

    //When the mouse cursor goes out of range,
    //the addition in the X direction and Y direction (delta X, delta Y) is set to zero.
    //this.left=Cavas's left side edge, this.top=Canvas's top side edge.
    var tmpLeft = parseInt(newObjLeftPx, 10);
    var tmpTop = parseInt(newObjTopPx, 10);

    var tmpRight = tmpLeft + parseInt(me.currentObject.style.width, 10);
    var tmpBottom = tmpTop + parseInt(me.currentObject.style.height, 10);

    var styleWidth = parseInt(me.canvasElement.style.width, 10);
    var styleHeight = parseInt(me.canvasElement.style.height, 10);

    var deltaX = 0;
    var deltaY = 0;

    if (me.currentObject.isRangeLimited == true &&
      (tmpLeft <= 0 || tmpRight > styleWidth || tmpTop <= 0 || tmpBottom > styleHeight)
    ) {
      deltaX = 0;
      deltaY = 0;
    } else {
      deltaX = (parseInt(newObjLeftPx, 10) - parseInt(oldObjLeftPx, 10));
      deltaY = (parseInt(newObjTopPx, 10) - parseInt(oldObjTopPx, 10));
      me.currentObject.style.left = (parseInt(me.currentObject.style.left) + deltaX * me.currentObject.argX) + 'px';
      me.currentObject.style.top = (parseInt(me.currentObject.style.top) + deltaY * me.currentObject.argY) + 'px';

      var parentObject = me.currentObject.parent;
      if (parentObject && parentObject._onMove) {
        parentObject._onMove();
      }

    }
    me.eventData.deltaX = deltaX;
    me.eventData.deltaY = deltaY;

    return me.eventData;

  }
  //Returns null if none of the objects are clicked and the only mouse just moves.
  return null;
};


CCanvas.prototype.mouseUp = function(e) {
  var me = this;
  me.currentObject = null;
  me.mouseDownSource = null;
};


//Bring the object in front
CCanvas.prototype.pullUp = function(targetBeanId) {

  var me = this;

  var tmpBeanArray = [];

  var beanList = me.beanList;

  for (var i in beanList) {
    tmpBeanArray.push(beanList[i]);
  }

  //Bring the target object in front and set zindex to 1.
  var targetBean = beanList[targetBeanId];

  if (me.enablePullUp) {
    me.pullUpSort(targetBean, tmpBeanArray, me.baseZIndex);
  }


  //Remember the top object
  me.onTopObject = targetBean;


};

//Calculate the front / back information of the window accurately.
CCanvas.prototype.pullUpSort = function(pullupObject, objectArray, baseIndex) {
  var me = this;

  //Increase the index number of the target object
  pullupObject.htmlElement.style.zIndex = objectArray.length + baseIndex;

  //sort by index
  objectArray.sort(function(b, a) {
    return -parseInt(b.htmlElement.style.zIndex, 10) + parseInt(a.htmlElement.style.zIndex, 10);
  });

  //Redefine number of the index
  for (var i in objectArray) {
    objectArray[i].htmlElement.style.zIndex = (objectArray.length - 1) - i + baseIndex;
  }

};


/**
 * remove the bean object
 * @param beanId
 */
CCanvas.prototype.removeBean = function(beanId) {

  var me = this;

  //Retrieve the target beanFrame
  var beanList = me.beanList;
  var targetBean = beanList[beanId];

  //Remove bean's htmlElement from canvasElement
  me.canvasElement.removeChild(targetBean.htmlElement);

  //Delete the bean object in the associative array.
  delete beanList[beanId];


};


/**
 * Add bean into this canvas
 * @param bean
 */
CCanvas.prototype.addBean = function(bean) {

  var me = this;

  var beanList = me.beanList;

  var beanIdName = me.beanIdName;//key:beanId value:beanName
  var beanNameId = me.beanNameId; //key:beanName value:beanId


  beanList[bean.id] = bean;

  if (bean.property.name) {
    beanNameId[bean.property.name] = bean.id;
    beanIdName[bean.id] = bean.property.name;
  }

  //In this usage case the 'length' property is invalid ..
  var num = 0;

  for (var j in beanList) {
    num++;
  }

  //Set zIndex so that what you add later will come up.
  bean.htmlElement.style.zIndex = num + me.baseZIndex;

  //On the bean side, specify the parent of the bean to me.
  bean.setParentCanvas(me);


  this.canvasElement.appendChild(bean.htmlElement);
};

CCanvas.prototype.getParentElement = function() {
  var me = this;
  return me.parentElement;
};

/**
 * End of canvas class
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


DEF.CFRAME = {};
DEF.CFRAME.CANVAS_ELEMENT_BGCOLOR = 'transparent';
DEF.CFRAME.MODAL_BACKGROUND_FRAME_ID_PREFIX = 'window__modal_window_background_';


inherit(CFrame, CBeanFrame);


/**
 * CFrame class
 * <p>
 * This class represents a window whose size can be changed ,
 * can move freely on the screen,
 * can have a title bar,
 *
 * @param windowId
 * @param w_left
 * @param w_top
 * @param w_width
 * @param w_height
 * @param zindex
 * @param w_border_width
 * @param appearance
 * @constructor
 */
function CFrame(windowId, w_left, w_top, w_width, w_height, zindex, w_border_width, appearance) {

  var me = this;

  //call constructor of superclass
  CFrame.superConstructor.call(this, windowId, w_left, w_top, w_width, w_height, zindex, w_border_width, appearance);

  me.anchor = CALIGN.LEFT_TOP;

  me.showTitleBar = appearance.showTitleBar;

  me.canvasNetHeight = null;
  me.canvasNetWidth = null;
  me.frameHeightAdjust = appearance.frameHeightAdjust;

  me.frameComponentMap = {};


  //initialize the field
  me.canvas = null;

  //canvas id
  me.myCanvasId = null;

  //Buttons to be placed on the screen (positioning same as the close button)
  me.floatingButton = null;

  me.titleBarClassNameDefault = 'jsframe-titlebar-default';// DEF.CFRAME.TITLE_BAR_CLASS_DEFAULT;
  me.titleBarClassNameFocused = 'jsframe-titlebar-focused';//DEF.CFRAME.TITLE_BAR_CLASS_FOCUSED;


  //height of titlebar
  me.titleBarHeight = appearance.titleBarHeight;

  me.titleBarCaption = appearance.titleBarCaption;
  me.titleBarCaptionLeftMargin = appearance.titleBarCaptionLeftMargin;
  me.titleBarCaptionFontSize = appearance.titleBarCaptionFontSize;
  me.titleBarCaptionFontWeight = appearance.titleBarCaptionFontWeight;
  me.titleBarBorderBottomDefault = appearance.titleBarBorderBottomDefault;
  me.titleBarBorderBottomFocused = appearance.titleBarBorderBottomFocused;
  me.titleBarCaptionTextShadow = appearance.titleBarCaptionTextShadow;
  me.titleBarCaptionTextAlign = appearance.titleBarCaptionTextAlign;

  //Title bar width adjustment value
  me.titleAdjustWidth = 2;

  me.windowId = windowId;

  me.exBorderWidth = 0;


  me.myCanvasId = windowId + '_canvas';


  //img element for icon placed on the left-top
  var appIcon = document.createElement('img');
  //		appIcon.src='img/ico_app_file16.gif';

  //url of icon image
  appIcon.src = '';
  appIcon.style.position = 'absolute';
  appIcon.style.left = '2px';
  appIcon.style.top = '2px';
  appIcon.style.width = '16px';
  appIcon.style.height = '16px';
  appIcon.style.visibility = 'hidden';


  //The title bar must be on the front of the canvas.
  me.titleBar = document.createElement('div');

  me.titleBar.className = 'jsframetitlebar';

  if (me.showTitleBar) {

    me.titleBar.id = windowId + '_title';
    me.titleBar.style.position = 'absolute';
    me.titleBar.style.boxSizing = 'border-box';
    me.titleBar.style.top = '0px';
    me.titleBar.style.left = '0px';
    me.titleBar.style.width = (w_width - me.titleAdjustWidth + DEF.CANVAS.WIDTH_ADJUST_20180722) + 'px';
    me.titleBar.style.userSelect = 'none';


    if (me.titleBarHeight) {

      var titleBarAdjust = 0;

      if (me.titleBarBorderBottomDefault) {
        titleBarAdjust = 0;
      }


      me.titleBar.style.height = (parseInt(me.titleBarHeight, 10) + 0) + 'px';
    }

    if (me.titleBarColorDefault) {
      me.titleBar.style.background = me.titleBarColorDefault;
    }
    me.titleBar.style.zIndex = 0;

    me.titleBar.style.color = me.titleBarCaptionColorDefault;
    me.titleBar.style.fontSize = me.titleBarCaptionFontSize;
    me.titleBar.style.fontWeight = me.titleBarCaptionFontWeight;
    me.titleBar.style.textShadow = me.titleBarCaptionTextShadow;
    me.titleBar.style.textAlign = me.titleBarCaptionTextAlign;
    // me.titleBar.style.textShadow = "0 1px 0 rgba(255,255,255,.7)";
    // me.titleBar.style.textAlign = 'center';

    me.titleBar.style.lineHeight = me.titleBar.style.height;


    me.titleBar.style.borderBottom = me.titleBarBorderBottomDefault;
    //me.titleBar.style.boxShadow = '0 1px 0 rgba(255,255,255,0.5)';


    //Set not to display overflow character string
    me.titleBar.style.overflow = 'hidden';


    var titleBarText = document.createTextNode('');

    //'span' to store text
    var titleBarTextSpan = document.createElement('span');

    titleBarTextSpan.id = me.id + '_titleBarText';
    if (me.titleBarCaptionLeftMargin != null) {
      titleBarTextSpan.style.position = 'absolute';
      titleBarTextSpan.style.left = parseInt(me.titleBarCaptionLeftMargin, 10) + 'px';
    } else {
      titleBarTextSpan.style.position = 'absolute';
      titleBarTextSpan.style.left = '0px';
      titleBarTextSpan.style.right = '0px';
    }
    titleBarTextSpan.style.top = '0px';
    titleBarTextSpan.appendChild(titleBarText);
    me.titleBar.appendChild(titleBarTextSpan);

    //Discontinue appicon(20061011)
    //me.titleBar.appendChild(appIcon);
  }

  me.htmlElement.appendChild(me.titleBar);


  //Set Canvas throughout the window

  //parseInt(me.titleBar.style.height);//me.titleBarHeight);
  var canvasMoreHeight = parseInt(me.titleBarHeight, 10) - titleBarAdjust;
  var canvasMoreSpacing = parseInt(me.titleAdjustWidth, 10);

  if (me.showTitleBar) {


  } else {
    canvasMoreHeight = 0;
    canvasMoreSpacing = 0;
    titleBarAdjust = 0;
  }


  me.canvasNetWidth = w_width - canvasMoreSpacing;
  me.canvasNetHeight = w_height - canvasMoreHeight - canvasMoreSpacing - 1 - titleBarAdjust + me.frameHeightAdjust;


  //Change the style of htmlElement of CFrame (CBean).
  me.htmlElement.style.cursor = 'move';


  //Create a canvas
  me.canvas = new CCanvas(me.htmlElement, me.myCanvasId, 0, canvasMoreHeight, w_width - canvasMoreSpacing, w_height - canvasMoreHeight - canvasMoreSpacing);

  me.canvas.enablePullUp = false;
  me.canvas.canvasElement.style.backgroundColor = DEF.CFRAME.CANVAS_ELEMENT_BGCOLOR;
  me.canvas.canvasElement.style.cursor = 'default';

  if (MOUSE_ENABLED) {
    //Handling the omousedown event that occurred in Canvas which is a child element of CFrame
    me.canvas.canvasElement.onmousedown = me.canvasMouseDown;
  }

  if (TOUCH_ENABLED) {
    if ('ontouchstart' in window) {
      var funcOnTouchStart = function(evt) {
        // The "mousedown" event happens right after "touchstart" event,
        // but I don't call #preventdefault because #preventdefault prevents "onclick" (like button on titlebar).
        // So, perform #preventdefault only for "touchmove"
        // evt.preventDefault();
        var touchStartEvent = evt.changedTouches[0];
        me.canvasMouseDown.bind(this)(touchStartEvent);
      };
      me.canvas.canvasElement.ontouchstart = funcOnTouchStart;
    }
  }

  //Set the canvas as a reference to the parent of the canvas html element canvasElement.
  me.canvas.canvasElement.parentCFrame = me;


  var tmpCanvasWidth = parseInt(me.canvas.canvasElement.style.width, 10);
  var tmpCanvasHeight = parseInt(me.canvas.canvasElement.style.height, 10);

  var markerWidth = appearance.resizeAreaWidth;
  var markerHeight = appearance.resizeAreaHeight;

  //Offset from marker edge
  var edgeMargin = appearance.resizeAreaOffset;
  var markerZIndex = 0;

  var colorRD, colorDD, colorRR;

  if (appearance.resizeAreaVisible) {
    colorRD = 'rgba(255, 0, 0, 0.5)';
    colorDD = 'rgba(0, 0, 255, 0.5)';
    colorRR = 'rgba(0, 255, 0, 0.5)';
  }

  //Lower right(R-D)
  var markerRD = new CMarkerWindow(
    me.myCanvasId + '_RD',
    tmpCanvasWidth + edgeMargin,
    tmpCanvasHeight + edgeMargin,
    markerWidth,
    markerHeight,
    markerZIndex,
    'RD', colorRD);

  markerRD.htmlElement.style.cursor = 'se-resize';//nw-resize';

  //Since only the deltaX and deltaY are acquired and the movement of the marker itself is
  // performed by CFrame_resize, the movement coefficient of the marker itself is set to 0.
  markerRD.htmlElement.argX = 0;
  markerRD.htmlElement.argY = 0;


  //Bottom(D-D)
  var markerDD = new CMarkerWindow(
    me.myCanvasId + '_DD',
    0,
    tmpCanvasHeight + edgeMargin,
    tmpCanvasWidth + edgeMargin,
    markerHeight,
    markerZIndex,
    'DD', colorDD);

  markerDD.htmlElement.style.cursor = 'n-resize';

  //Since only the deltaX and deltaY are acquired and the movement of the marker itself is
  // performed by CFrame_resize, the movement coefficient of the marker itself is set to 0.
  markerDD.htmlElement.argX = 0;
  markerDD.htmlElement.argY = 0;

  //Right(R-R)
  var markerRR = new CMarkerWindow(
    me.myCanvasId + '_RR',
    tmpCanvasWidth + edgeMargin,
    0,
    markerWidth,
    tmpCanvasHeight + edgeMargin,
    markerZIndex,
    'RR', colorRR);

  markerRR.htmlElement.style.cursor = 'w-resize';

  //Since only the deltaX and deltaY are acquired and the movement of the marker itself is
  // performed by CFrame_resize, the movement coefficient of the marker itself is set to 0.
  markerRR.htmlElement.argY = 0;
  markerRR.htmlElement.argX = 0;

  //Add size change marker to canvas.
  me.canvas.addBean(markerRD);
  me.canvas.addBean(markerDD);
  me.canvas.addBean(markerRR);

  //Method to remove size change marker (can not resize)
  me.removeMarkers = function() {
    me.canvas.removeBean(markerRD.id);
    me.canvas.removeBean(markerDD.id);
    me.canvas.removeBean(markerRR.id);
    me.htmlElement.style.cursor = 'default';
  };


  me.removeMarkers2 = function() {
    me.canvas.removeBean(markerRD.id);
    me.canvas.removeBean(markerDD.id);
    me.canvas.removeBean(markerRR.id);
  };
  me.enableMarkers = function(enabled) {
    if (enabled) {

      markerRD.htmlElement.style.display = 'flex';
      markerDD.htmlElement.style.display = 'flex';
      markerRR.htmlElement.style.display = 'flex';
      markerRD.htmlElement.style.cursor = 'se-resize';
      markerDD.htmlElement.style.cursor = 'n-resize';
      markerRR.htmlElement.style.cursor = 'w-resize';
    } else {
      markerRD.htmlElement.style.display = 'none';
      markerDD.htmlElement.style.display = 'none';
      markerRR.htmlElement.style.display = 'none';
    }
    // me.canvas.removeBean(markerRD.id);
    // me.canvas.removeBean(markerDD.id);
    // me.canvas.removeBean(markerRR.id);
  };

  for (var idx in appearance.frameComponents) {

    var frameComponent = appearance.frameComponents[idx];
    frameComponent.setFrame(me);

    //if frameComponent has special name 'closeButton', it will act as a close button.
    if ('closeButton' == frameComponent.id) {
      frameComponent.htmlElement.onclick = me.close;
    }

    // Handle child menu open/close
    var frameComponentHasChildMenu = frameComponent.htmlElement.querySelector('.jsframe-child-menu');
    if (frameComponentHasChildMenu) {
      me.eventListenerHelper.addEventListener(frameComponent.htmlElement, 'click', function(e) {

          var frameComponentId = e.target.getAttribute('component-id');

          // Close all frame component's childmenu once because other frame component's childmenu may be open.
          // If {exceptFrameComponentId:[frameComponentId]} is specified for the argument,
          // the child menu will not be closed.
          me.hideFrameComponentChildMenus({ exceptFrameComponentId: frameComponentId });

          if (frameComponentId) {
            var frameComponentHtmlElement = me.getFrameComponentElement(frameComponentId);
            var frameComponentChildMenu = frameComponentHtmlElement.querySelector('.jsframe-child-menu');
            if (frameComponentChildMenu) {
              // By making the display a table,
              // the width of the childMenu can be accurately reflected.
              // (flex does not set the width correctly.)
              if (frameComponentChildMenu.style.display == 'table') {
                frameComponentChildMenu.style.display = 'none';
              } else {
                frameComponentChildMenu.style.display = 'table';
              }
            } else {
              console.error('frameComponent child menu isnt found. frameComponentId=' + frameComponentId);
            }
          }
        },
        { listenerName: 'frame-component_child-menu-listener' });
    }

    me.addFrameComponent(frameComponent);
  }  // /add frameComponents[end]

  //override the field
  me.htmlElement.style.backgroundColor = 'transparent';

  me.htmlElement.oncontextmenu = this.contextMenu;


  //The policy of Border drawing seems to be different between IE and FF.
  var caribVal = 0;


  me.caribValue = caribVal;

  if (me.exBorderWidth) {
    me.htmlElement.style.borderWidth = me.exBorderWidth + 'px';
  }
  me.htmlElement.style.width = (parseInt(me.htmlElement.style.width, 10) - caribVal) + 'px';
  me.htmlElement.style.height = (parseInt(me.htmlElement.style.height, 10) - caribVal + 1) + 'px';
  me.htmlElement.typeName = 'cwindow';
  me.htmlElement.overflow = 'auto';
  me.htmlElement.style.boxSizing = 'content-box';


  if (appearance.frameBorderStyle) {
    me.htmlElement.style.borderStyle = appearance.frameBorderStyle;
  }

  if (appearance.frameBoxShadow) {
    me.htmlElement.style.boxShadow = appearance.frameBoxShadow;
  }

  //TODO deprecation(because CIfFrame is extended this operation)
  if (parseInt(appearance.frameBorderWidthDefault, 10) >= 0) {
    me.htmlElement.style.borderWidth = appearance.frameBorderWidthDefault;
    me.htmlElement.style.borderColor = appearance.frameBorderColorDefault;

  }
  if (parseInt(appearance.frameBorderRadius, 10) >= 0) {
    me.htmlElement.style.borderRadius = appearance.frameBorderRadius;
  }

  me.onCloseFrameListener = null;

}


CFrame.prototype.setTitleBarClassName = function(classNameForDefault, classNameForFocused) {
  var me = this;
  if (classNameForDefault) {
    me.titleBarClassNameDefault = classNameForDefault;
    me.titleBarClassNameFocused = classNameForDefault;
  }
  if (classNameForFocused) {
    me.titleBarClassNameFocused = classNameForFocused;
  }
  return me;
};
/**
 * Add frameComponent(Wrapped DOM element like 'div' to display above the frame) to frame
 * @param frameComponent
 */
CFrame.prototype.addFrameComponent = function(frameComponent) {
  var me = this;

  me.frameComponentMap[frameComponent.id] = frameComponent;
  me.canvas.canvasElement.appendChild(frameComponent.htmlElement);
  return me;
};

/**
 * Get stored frame component by id
 * @param frameComponent
 */
CFrame.prototype.getFrameComponentElement = function(id) {
  var me = this;
  if (me.frameComponentMap[id]) {
    return me.frameComponentMap[id].htmlElement;
  } else {
    return null;
  }
};


CFrame.prototype.removeFrameComponentById = function(frameComponentId) {
  var me = this;

  var frameComponent = me.frameComponentMap[frameComponentId];

  me.canvas.canvasElement.removeChild(frameComponent.htmlElement);
  delete me.frameComponentMap[frameComponentId];
};

CFrame.prototype.showFrameComponent = function(frameComponentId, display) {
  var me = this;
  var comp = me.getFrameComponentElement(frameComponentId);
  if (comp) {
    if (display) {
      comp.style.display = display;
    } else {
      comp.style.display = 'flex';
    }
  }
  return me;
};

CFrame.prototype.hideFrameComponent = function(frameComponentId) {
  var me = this;
  var comp = me.getFrameComponentElement(frameComponentId);
  if (comp) {
    comp.style.display = 'none';
  }
  return me;
};

CFrame.prototype.hideAllVisibleFrameComponents = function() {
  var me = this;

  var compMap = me.frameComponentMap;
  for (var key in compMap) {
    if (compMap.hasOwnProperty(key)) {
      var comp = compMap[key].htmlElement;
      if (comp.style.display === 'none') {
        comp._alreadyNone = true;
      }
      comp.style.display = 'none';
    }
  }
};
CFrame.prototype.showAllVisibleFrameComponents = function() {
  var me = this;
  var compMap = me.frameComponentMap;
  for (var key in compMap) {
    if (compMap.hasOwnProperty(key)) {
      var comp = compMap[key].htmlElement;
      if (comp._alreadyNone) {
        comp._alreadyNone = null;
      } else {
        comp.style.display = 'flex';
      }
    }
  }
};

/**
 * Close all childMenu
 If {exceptFrameComponentId:[frameComponentId]} is specified for the argument,
 the child menu will not be closed.

 * @param opt
 */
CFrame.prototype.hideFrameComponentChildMenus = function(opt) {
  var me = this;

  var compMap = me.frameComponentMap;
  for (var frameComponentId in compMap) {
    if (compMap.hasOwnProperty(frameComponentId)) {
      if (opt && opt.exceptFrameComponentId) {
        if (frameComponentId === opt.exceptFrameComponentId) {
          continue;
        }
      }
      var comp = compMap[frameComponentId];
      if (comp.childMenu) {
        comp.childMenu.style.display = 'none';
      }
    }
  }
};


CFrame.prototype.setTitle = function(str) {
  var me = this;
  me.title = str;
  if (me.showTitleBar) {

    var textNode = document.createTextNode(str);
    //firstChildのfirstChildがspan
    me.titleBar.firstChild.replaceChild(textNode, me.titleBar.firstChild.firstChild);
  }
  return me;
};

CFrame.prototype.resize = function(deltaLeft, deltaTop, deltaWidth, deltaHeight) {

  var me = this;

  var tmpLeft = parseInt(me.htmlElement.style.left, 10);
  var tmpTop = parseInt(me.htmlElement.style.top, 10);
  var tmpWidth = parseInt(me.htmlElement.style.width, 10);
  var tmpHeight = parseInt(me.htmlElement.style.height, 10);

  me.htmlElement.style.left = parseInt(tmpLeft + deltaLeft, 10) + 'px';
  me.htmlElement.style.top = parseInt(tmpTop + deltaTop, 10) + 'px';

  me.htmlElement.style.width = parseInt(tmpWidth + deltaWidth, 10) + 'px';
  me.htmlElement.style.height = parseInt(tmpHeight + deltaHeight, 10) + 'px';


  var tmpCanvasWidth = parseInt(me.canvas.canvasElement.style.width, 10);
  var tmpCanvasHeight = parseInt(me.canvas.canvasElement.style.height, 10);

  //Since canvasElement is a (0, 0) relative coordinate with respect to the parent element,
  // so it is not necessary to change left and top.
  me.canvas.canvasElement.style.width = (tmpCanvasWidth + deltaWidth) + 'px';
  me.canvas.canvasElement.style.height = (tmpCanvasHeight + deltaHeight) + 'px';


  if (me.showTitleBar) {

    //Change the size of the title bar. TitleAdjustWidth etc.
    //The reason why you do not have to use titleAdjustWidth is because
    // these scaling are done with differences (deltaX, deltaY).
    //Therefore, if you adjust with the titleAdjustWidth as
    // the initial value, the other will stretch relative.
    //You do not think you can use ifDelta
    me.titleBar.style.width = (tmpCanvasWidth + deltaWidth) + 'px';

  } else {


  }


  for (var beanName in me.canvas.beanList) {
    var tmpBean = me.canvas.beanList[beanName];

    if (tmpBean.htmlElement.typeName == 'cmarkerwindow') {
      if (tmpBean.htmlElement.usage == 'RD') {
        //Move the size change lower right(RD) marker according to the amount of movement.
        tmpBean.htmlElement.style.left = (parseInt(tmpBean.htmlElement.style.left, 10) + deltaWidth) + 'px';
        tmpBean.htmlElement.style.top = (parseInt(tmpBean.htmlElement.style.top, 10) + deltaHeight) + 'px';
      } else if (tmpBean.htmlElement.usage == 'DD') {
        //Move the size change lower marker according to the movement amount.
        // Do not move left.Only the width wil increase or decrease.
        tmpBean.htmlElement.style.width = (parseInt(tmpBean.htmlElement.style.width, 10) + deltaWidth) + 'px';
        tmpBean.htmlElement.style.top = (parseInt(tmpBean.htmlElement.style.top, 10) + deltaHeight) + 'px';
      } else if (tmpBean.htmlElement.usage == 'RR') {
        //Move the size change right marker according to the movement amount
        //Do not move top,Only the height will increase or decrease.
        tmpBean.htmlElement.style.left = (parseInt(tmpBean.htmlElement.style.left, 10) + deltaWidth) + 'px';
        tmpBean.htmlElement.style.height = (parseInt(tmpBean.htmlElement.style.height, 10) + deltaHeight) + 'px';
      }

    }
  }
};


CFrame.prototype.canvasMouseDown = function(e) {
  var me = this;

  //Mousedown processing of CFrame.canvas

  //'This' in this method indicates 'Cwindow.canvas.canvasElement'.
  if (this.parentCFrame.parentCanvas.mouseDownSource == null) {
    this.parentCFrame.parentCanvas.mouseDownSource = 'childcanvas';
  }


};
CFrame.prototype.mouseUp = function(e) {
  this.canvas.mouseUp(e);
};

CFrame.prototype.close = function(e) {

  var me = this;
  //Close processing of CFrame from CloseButton


  var parentCanvas = this.parentObject.parentCanvas;
  var cframeObj = this.parentObject;

  console.log('CFrame#close "' + cframeObj.title + '(@' + cframeObj.getName() + ')' + '" @' + cframeObj.windowId);

  var windowId = cframeObj.id;
  cframeObj.closeInternally(e, parentCanvas, windowId);


};

CFrame.prototype.closeFrame = function(e) {


  //Close processing of CFrame
  var me = this;

  console.log('CFrame#closeFrame "' + me.title + '(' + me.getName() + ')' + '" @' + me.windowId);

  var parentCanvas = this.parentCanvas;
  me.closeInternally(e, parentCanvas, me.windowId);


};

CFrame.prototype.closeInternally = function(e, parentCanvas, windowId) {
  var me = this;

  if (!parentCanvas) {
    console.error('Window(' + windowId + ') may have been closed');
    return;
  }
  parentCanvas.removeBean(windowId);


  //added for modal window
  if (me.modalBackgroundWindowId) {
    parentCanvas.removeBean(me.modalBackgroundWindowId);
    me.modalBackgroundWindowId = null;
  }

  if (me.onCloseFrameListener) {
    me.onCloseFrameListener(me);
  }
};

CFrame.prototype.setOnCloseFrameListener = function(listener) {
  var me = this;
  me.onCloseFrameListener = listener;

};

CFrame.prototype.contextMenu = function() {
  //If you issue the right-click menu in the window, set the source to CFrame.
  var contextMenuSource = 'CFrame';
  return false;
};


CFrame.prototype.setTitleBarTextColor = function(str) {
  var me = this;
  me.titleBar.style.color = str;
};

/**
 * Set window position with anchor
 * @param {number} x
 * @param {number} y
 * @param {string} anchor anchor means the position of the window with respect to which the position is specified.<br>
 *   The following values can be specified for the anchor
 LEFT_TOP
 CENTER_TOP
 RIGHT_TOP
 LEFT_CENTER
 CENTER_CENTER
 RIGHT_CENTER
 LEFT_BOTTOM
 CENTER_BOTTOM
 RIGHT_BOTTOM
 * @returns {CFrame}
 */
CFrame.prototype.setPosition = function(x, y, anchor) {
  var me = this;

  var frameWidth = me.getWidth();
  var frameHeight = me.getHeight();

  me._setPositionInternally(x, y, anchor, frameWidth, frameHeight);

  return me;
};
CFrame.prototype._setPositionInternally = function(x, y, anchor, frameWidth, frameHeight) {
  var me = this;

  if (anchor) {
    me.anchor = anchor;
  }

  if (!anchor || CALIGN.LEFT_TOP == anchor) {
    me.htmlElement.style.left = x + 'px';
    me.htmlElement.style.top = y + 'px';
  } else if (CALIGN.HCENTER_TOP == anchor) {
    me.htmlElement.style.left = (-frameWidth / 2 + x) + 'px';
    me.htmlElement.style.top = y + 'px';
  } else if (CALIGN.RIGHT_TOP == anchor) {
    me.htmlElement.style.left = (-frameWidth + x) + 'px';
    me.htmlElement.style.top = y + 'px';
  } else if (CALIGN.LEFT_VCENTER == anchor) {
    me.htmlElement.style.left = x + 'px';
    me.htmlElement.style.top = (-frameHeight / 2 + y) + 'px';
  } else if (CALIGN.HCENTER_VCENTER == anchor) {
    me.htmlElement.style.left = (-frameWidth / 2 + x) + 'px';
    me.htmlElement.style.top = (-frameHeight / 2 + y) + 'px';
  } else if (CALIGN.RIGHT_VCENTER == anchor) {
    me.htmlElement.style.left = (-frameWidth + x) + 'px';
    me.htmlElement.style.top = (-frameHeight / 2 + y) + 'px';
  } else if (CALIGN.LEFT_BOTTOM == anchor) {
    me.htmlElement.style.left = x + 'px';
    me.htmlElement.style.top = (-frameHeight + y) + 'px';
  } else if (CALIGN.HCENTER_BOTTOM == anchor) {
    me.htmlElement.style.left = (-frameWidth / 2 + x) + 'px';
    me.htmlElement.style.top = (-frameHeight + y) + 'px';
  } else if (CALIGN.RIGHT_BOTTOM == anchor) {
    me.htmlElement.style.left = (-frameWidth + x) + 'px';
    me.htmlElement.style.top = (-frameHeight + y) + 'px';
  }
};

/**
 * Returns relative position with anchor
 * @returns {{x: *, y: *, anchor: *}}
 */
CFrame.prototype.getPosition = function() {
  var me = this;
  var frameWidth = me.getWidth();
  var frameHeight = me.getHeight();
  var x;
  var y;
  var anchor = me.anchor;
  if (!anchor || CALIGN.LEFT_TOP == anchor) {
    x = parseInt(me.htmlElement.style.left, 10);
    y = parseInt(me.htmlElement.style.top, 10);
  } else if (CALIGN.HCENTER_TOP == anchor) {
    x = parseInt(me.htmlElement.style.left, 10) + frameWidth / 2;
    y = parseInt(me.htmlElement.style.top, 10);
  } else if (CALIGN.RIGHT_TOP == anchor) {
    x = parseInt(me.htmlElement.style.left, 10) + frameWidth;
    y = parseInt(me.htmlElement.style.top, 10);
  } else if (CALIGN.LEFT_VCENTER == anchor) {
    x = parseInt(me.htmlElement.style.left, 10);
    y = parseInt(me.htmlElement.style.top, 10) + frameHeight / 2;
  } else if (CALIGN.HCENTER_VCENTER == anchor) {
    x = parseInt(me.htmlElement.style.left, 10) + frameWidth / 2;
    y = parseInt(me.htmlElement.style.top, 10) + frameHeight / 2;
  } else if (CALIGN.RIGHT_VCENTER == anchor) {
    x = parseInt(me.htmlElement.style.left, 10) + frameWidth;
    y = parseInt(me.htmlElement.style.top, 10) + frameHeight / 2;
  } else if (CALIGN.LEFT_BOTTOM == anchor) {
    x = parseInt(me.htmlElement.style.left, 10);
    y = parseInt(me.htmlElement.style.top, 10) + frameHeight;
  } else if (CALIGN.HCENTER_BOTTOM == anchor) {
    x = parseInt(me.htmlElement.style.left, 10) + frameWidth / 2;
    y = parseInt(me.htmlElement.style.top, 10) + frameHeight;
  } else if (CALIGN.RIGHT_BOTTOM == anchor) {
    x = parseInt(me.htmlElement.style.left, 10) + frameWidth;
    y = parseInt(me.htmlElement.style.top, 10) + frameHeight;
  }
  return { x: x, y: y, anchor: anchor };
};

CFrame.prototype.getLeft = function() {
  var me = this;
  return parseInt(me.htmlElement.style.left, 10);
};


CFrame.prototype.getTop = function() {
  var me = this;
  return parseInt(me.htmlElement.style.top, 10);
};
CFrame.prototype.getWidth = function() {
  var me = this;
  return parseInt(me.htmlElement.style.width, 10);
};
CFrame.prototype.getHeight = function() {
  var me = this;
  return parseInt(me.htmlElement.style.height, 10);
};

CFrame.prototype.getSize = function() {
  var me = this;
  return { width: me.getWidth(), height: me.getHeight() };
};

CFrame.prototype.setSize = function(width, height, force) {
  var me = this;

  var byUser = true;

  if (force) {
    byUser = false;
  }


  //call CIFrame#resize instead of CFrame#resize
  me.resize(0, 0, width - me.getWidth(), height - me.getHeight(), byUser);
  return me;
};

CFrame.prototype.getWindowId = function() {
  var me = this;
  return me.windowId;
};

CFrame.prototype.getName = function() {
  var me = this;
  return me.property.name;
};

CFrame.prototype.setName = function(name) {
  var me = this;
  me.property.name = name;
};
/**
 * end of CFrame class
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


inherit(CIfFrame, CFrame);

/**
 * CIfFrame class
 * Extension class with contents frame of CFrame as iframe
 * @param windowId
 * @param appearance
 * @constructor
 */
function CIfFrame(windowId, left, top, width, height, appearance) {


  var wleft = left;
  var wtop = top;
  var wwidth = width;
  var wheight = height;
  var zindex = appearance.zindex;
  var wborderwidth = null;


  var me = this;

  this.jsFrame = null;
  this.control = null;

  this.minFrameWidth = 128;
  this.minWindowHeight = 32;

  this.eventListenerHelper = new EventListenerHelper();

  /**
   * If this value is true, the focus will move when tapping the iframe area,
   * but if the window do not have the focus, you can not click on the element in the iframe.
   */
  this.overrayTransparentScreenEnabled = false;

  /**
   *  Only in the case of resizing a transparent screen can be displayed on the iframe
   *  and the size can be adjusted smoothly.
   *  true is recommended.
   */
  //Change history
  //20181226
  //Changed to false.
  // So it becomes necessary to click twice to react when you call the #setSize,I changed the value to false.
  //20181231
  //I found the way that iframe will be changed the size smoothly.so the final answer is true.
  this.overrayTransparentScreenOnResize = true;

  this.titleBarColorFocused = appearance.titleBarColorFocused;

  this.titleBarColorDefault = appearance.titleBarColorDefault;

  this.titleBarCaptionColorDefault = appearance.titleBarCaptionColorDefault;
  this.titleBarCaptionColorFocused = appearance.titleBarCaptionColorFocused;

  //call super constructor
  CIfFrame.superConstructor.call(me, windowId, wleft, wtop, wwidth, wheight, zindex, wborderwidth, appearance);

  //border color
  me.frameBorderColorDefault = appearance.frameBorderColorDefault;
  me.frameBorderColorFocused = appearance.frameBorderColorFocused;

  //border width
  me.frameBorderWidthDefault = appearance.frameBorderWidthDefault;
  me.frameBorderWidthFocused = appearance.frameBorderWidthFocused;

  me.iframe = null;


  //Offset value for width adjustment of iframe
  me.ifDelta = 0;

  me.resizable = true;


  me.onMouseMoveOnIframe = null;
  me.onMouseUpOnIframe = null;

  me._hasFocus = false;

  me._hasFocusTime = 0;


  me.htmlElement.typeName = 'cifwindow';

  //name of iframe
  var exIframeName = 'riversun_' + windowId;


  me.dframe = document.createElement('div');


  me.iframe = document.createElement('iframe');


  me.iframe.name = exIframeName;

  me.iframe.id = exIframeName;

  me.iframe.frameBorder = '0';
  //me.iframe.scrolling = 'no';

  me.iframe.zIndex = -1;

  //Allow transparent of iframe background.
  me.iframe.allowTransparency = 'true';
  me.iframe.width = me.canvasNetWidth - me.ifDelta + 0;
  me.iframe.height = me.canvasNetHeight - me.ifDelta + 0;

  me.showTitleBar = appearance.showTitleBar;

  me.getFrameInnerBorderRadius = appearance.getFrameInnerBorderRadius;

  me.frameBorderRadius = appearance.frameBorderRadius;


  me.adjustFrameBorderRadius();

  me.useIframe = false;


  me.canvas.canvasElement.appendChild(me.iframe);

  me.canvas.canvasElement.appendChild(me.dframe);


  this.setUseIframe = function(useIframe) {
    me.useIframe = useIframe;
    me.iframe.style.visibility = 'hidden';
    me.iframe.style.position = 'absolute';
    me.iframe.style.left = '0px';
    me.iframe.style.top = '0px';
    me.iframe.style.width = '100%';
    me.iframe.style.height = '100%';

    me.dframe.style.visibility = 'hidden';
    me.dframe.style.position = 'absolute';
    me.dframe.style.left = '0px';
    me.dframe.style.boxSizing = 'content-box';

    me.dframe.style.top = '0px';
    me.dframe.style.width = '100%';
    me.dframe.style.height = '100%';
    //me.dframe.style.borderStyle="solid";
    me.dframe.style.backgroundColor = 'white';

    if (useIframe) {
      me.iframe.style.visibility = 'visible';
      me.dframe.style.visibility = 'hidden';
    } else {
      me.iframe.style.visibility = 'hidden';
      me.dframe.style.visibility = 'visible';
    }
  };

  me.setUseIframe(appearance.useIframe);

  // If it is IE, set the canvasElement of the canvas which is the parent of the iframe to transparent.

  if (me.overrayTransparentScreenEnabled || me.overrayTransparentScreenOnResize) {
    //Create a transparent screen.
    me.transparence = document.createElement('span');
    // me.transparence.style.backgroundImage = 'url(img/img_baron_tp.gif)';

    me.transparence.style.position = 'absolute';
    me.transparence.style.left = '0px';
    me.transparence.style.top = '0px';

    //Transparent screen is 0px when creating window
    me.transparence.style.width = '0px';
    me.transparence.style.height = '0px';

    me.transparence.style.zIndex = 4;
    me.transparence.style.borderWidth = '0px';
    me.transparence.style.borderColor = '#ff00ee';
    me.transparence.style.borderStyle = 'none';
    me.transparence.style.cursor = 'default';

    me.transparence.style.pointerEvents = 'none';
    me.canvas.canvasElement.style.backgroundColor = appearance.frameBackgroundColor;


    me.canvas.canvasElement.appendChild(me.transparence);
  }

  me.eventEmitter = new EventEmitter();

  me.appearance = appearance;

}


CIfFrame.prototype.getFrameView = function() {
  var me = this;
  return me.dframe;
};

CIfFrame.prototype.getFrameAppearance = function() {
  var me = this;
  return me.appearance;
};

CIfFrame.prototype.setHTML = function(html) {
  var me = this;
  me.dframe.innerHTML = html;
};
CIfFrame.prototype.setFrameInFrame = function(enabled) {

  // Why i had to (bother to:) ) make a setFrameInFrame
  // The element specified at the top of the content of the parent window (for example, div element)
  // may NOT be able to get the resize event using addEventListener.
  // Therefore, when the resize event issued by jsFrame in the parent window occurs,
  // its custom attribute (WindowEventHelper.MATCH_PARENT_CHANGE_MARKER_ATTR) is attached
  // to the element at the top of the parent window content
  // and it is captured by the mutationObserver on the child window side.

  var me = this;

  var contentsEle = me.dframe ? me.dframe.firstChild : null;

  if (contentsEle) {
    // polyfill for #now
    if (!Date.now) {
      Date.now = function now() {
        return new Date().getTime();
      };
    }
    if (enabled) {
      me.eventEmitter.only('resize', 'fif-listener', function() {
        contentsEle.setAttribute(WindowEventHelper.MATCH_PARENT_CHANGE_MARKER_ATTR, Date.now());
      });
    } else {
      contentsEle.removeAttribute(WindowEventHelper.MATCH_PARENT_CHANGE_MARKER_ATTR);
      me.eventEmitter.only('resize', 'fif-listener', function() {
        // do nothing
      });
    }
  }
};
/**
 * Find DOM Element in the frame by querySelector<br>
 *  Examples<br>
 *      frame.$("#my_id_name");
 *      frame.$(".my_class_name");
 *      frame.$("div>img");
 *      frame.$("input[type='submit]");
 * @param {string} q selector query
 * @returns {Node}
 */
CIfFrame.prototype.$ = function(q) {
  var me = this;

  if (me.useIframe) {

    var docInIframe = me.iframe.contentWindow.document;
    return docInIframe.querySelector(q);

  } else {
    return me.dframe.querySelector(q);
  }
};

/**
 * Sets an event listener for the window itself or elements in the contents of the window.
 It is possible to register multiple listeners to the same event type.

 * @param {string} id
 If the "id" is prefixed with "#",
 an event listener can be set to a DOM element (eventTarget) identified by the id in the content.<br>
 This is the same behavior as the usual eventTarget#addEventListener.<br>
 <br>
 In addition to the DOM element in the content, the following special names are reserved for the "id"<br>
 "closeButton" ... close button.<br>
 "minimizeButton" ... Minimize Button<br>
 "zoomButton"...zoom button.<br>
 "restoreButton" ... the button that restores the window size.<br>
 "deminimizeButton" ... the button to return from the minimized state.<br>
 <br>
 You can also receive events such as window resizing, moving, and focusing.
 In this case, specify the following as "id"<br>
 "frame" or "window".<br>
 <br>
 You can specify a frameComponent name that is uniquely defined by addFrameComponent.
 (Generic buttons such as closeButton are one of the frame components.
 * @param {string} eventType The element in the content (HTML) of a window whose "id" starts with "#"
 * can be the same as the eventType(https://developer.mozilla.org/en-US/docs/Web/API/Event/type) used by the normal addEventListener.<br>
 <br>
 If the "id" is a frame or a window, the following can be used<br>
 "move"... When a window is moved, it fires.<br>
 "resize"... Fires when the window is resized.<br>
 "focus"... "focus" means got focus. It fires when the window is in focus.<br>
 "blur"... "blur" means lost focus.It fires when the window loses focus.<br>
 <br>
 * @param {function} callbackFunc
 */
CIfFrame.prototype.on = function(id, eventType, callbackFunc) {
  var me = this;
  var component = me.getFrameComponentElement(id);

  // if id indicates frame component like CTextButton,CImageButton
  if (component) {

    //Since we want to specify only one handler for frame components at the same time,
    // use eventListenerHelper instead of an event listener
    me.eventListenerHelper.addEventListener(component, eventType, function(e) {
      callbackFunc(me, e,
        {
          type: 'frameComponent',
          id: id,
          eventType: eventType,
          //child: childMenuEle
        });
    }, { listenerName: 'frame-component-listener' });
  }

  if (id === 'frame' || id === 'window') {

    if (eventType === 'move' && !me.eventEmitter.hasListenerFuncs('move')) {
      me.setOnMoveListener(function(e) {
        //refCIfFrame.eventEmitter.emit('resize',);
        me.eventEmitter.emit('move', me._getCurrentSizePos());
      });
    }


    me.eventEmitter.on(eventType, callbackFunc);
  }

  // DOM element in iframe or DOM element on dframe
  var domElement = me.$(id);

  if (domElement) {
    if (me.eventListenerHelper.hasEventListener(domElement, eventType, 'frame-dom-listener')) {
      me.eventListenerHelper.removeEventListener(domElement, eventType, null, { listenerName: 'frame-dom-listener' });
    }
    me.eventListenerHelper.addEventListener(domElement, eventType, function(e) {
      callbackFunc(me, e, {
        type: 'dom',
        id: id,
        eventType: eventType
      });
    }, { listenerName: 'frame-dom-listener' });
  }

  // Search DOM element on frameComponent
  if (!domElement) {

    var domElementOnCanvasElement = me.canvas.canvasElement.querySelector(id);
    if (domElementOnCanvasElement) {
      domElementOnCanvasElement.addEventListener(eventType, function(e) {
        callbackFunc(me, e, {
          type: 'dom',
          id: id,
          eventType: eventType
        });
      });
    }
  }
};


CIfFrame.prototype.adjustFrameBorderRadius = function() {
  var me = this;

  if (parseInt(me.frameBorderRadius, 10) > 0) {

    var borderData = me.getFrameInnerBorderRadius(me, me._hasFocus);
    var frameAppearance = borderData.frameAppearance;
    var innerBorderRadius = borderData.innerBorderRadius;
    var titleBarHeight = parseInt(frameAppearance.titleBarHeight, 10);

    if (me.showTitleBar) {

      //title bar exists
      me.canvas.canvasElement.style.borderBottomRightRadius = innerBorderRadius;
      me.canvas.canvasElement.style.borderBottomLeftRadius = innerBorderRadius;
      me.iframe.style.borderBottomRightRadius = innerBorderRadius;
      me.iframe.style.borderBottomLeftRadius = innerBorderRadius;

      me.titleBar.style.borderTopLeftRadius = innerBorderRadius;
      me.titleBar.style.borderTopRightRadius = innerBorderRadius;


    } else {

      //title bar not exits
      me.canvas.canvasElement.style.borderRadius = innerBorderRadius;
      me.iframe.style.borderRadius = innerBorderRadius;

    }

    if (me.dframe) {
      if (titleBarHeight === 0) {
        if (!me.dframe.style.borderTopRightRadius) {
          me.dframe.style.borderTopRightRadius = innerBorderRadius;
        }
        if (!me.dframe.style.borderTopLeftRadius) {
          me.dframe.style.borderTopLeftRadius = innerBorderRadius;
        }
      }
      me.dframe.style.borderBottomRightRadius = innerBorderRadius;
      me.dframe.style.borderBottomLeftRadius = innerBorderRadius;
    }


  }
};

CIfFrame.prototype.handleReleasingFocus = function(e) {
  var me = this;

  var focused = me._hasFocus;

  me._hasFocus = false;

  //update style class
  me.titleBar.className = me.titleBarClassNameDefault;

  if (me.titleBarColorDefault) {
    me.titleBar.style.background = me.titleBarColorDefault;
  }
  me.titleBar.style.color = me.titleBarCaptionColorDefault;

  //border color
  if (me.frameBorderColorDefault) {
    me.htmlElement.style.borderColor = me.frameBorderColorDefault;
  }

  //border width
  if (me.frameBorderWidthDefault) {
    me.htmlElement.style.borderWidth = me.frameBorderWidthDefault;
    me.adjustFrameBorderRadius();
  }

  if (me.htmlElement.typeName == 'cifwindow') {
    if (me.overrayTransparentScreenEnabled) {
      me.transparence.style.width = parseInt(me.iframe.width, 10) + 'px';
      me.transparence.style.height = parseInt(me.iframe.height, 10) + 'px';
    }
  }

  //handling for child frameComponents
  for (var frameComponentId in me.frameComponentMap) {
    var frameComponent = me.frameComponentMap[frameComponentId];
    frameComponent.handleReleasingFocus();
  }

  //border bottom
  if (me.titleBarBorderBottomDefault) {
    me.titleBar.style.borderBottom = me.titleBarBorderBottomDefault;
  }

  if (focused) {
    me.eventEmitter.emit('blur', { target: me });
  }


  return me;
};

CIfFrame.prototype.handleTakingFocus = function(e) {
  var me = this;
  var focused = me._hasFocus;
  me._hasFocus = true;
  me._hasFocus = Date.now();

  if (me.overrayTransparentScreenEnabled) {

    //close transparence screen
    me.transparence.style.width = '0px';
    me.transparence.style.height = '0px';

  }

  //update style class
  me.titleBar.className = me.titleBarClassNameFocused;

  if (me.titleBarColorFocused) {
    me.titleBar.style.background = me.titleBarColorFocused;
  }
  me.titleBar.style.color = me.titleBarCaptionColorFocused;


  //border color
  if (me.frameBorderColorFocused) {
    me.htmlElement.style.borderColor = me.frameBorderColorFocused;
  }

  //border width
  if (me.frameBorderWidthFocused) {
    me.htmlElement.style.borderWidth = me.frameBorderWidthFocused;
    me.adjustFrameBorderRadius();
  }

  //border bottom
  if (me.titleBarBorderBottomFocused) {
    me.titleBar.style.borderBottom = me.titleBarBorderBottomFocused;
  }

  //handling for child frameComponents
  for (var frameComponentId in me.frameComponentMap) {
    var frameComponent = me.frameComponentMap[frameComponentId];
    frameComponent.handleTakingFocus();
  }


  if (!focused) {
    me.eventEmitter.emit('focus', { target: me });
  }

  return me;
};


CFrame.prototype.show = function(model) {
  var me = this;
  //me.htmlElement.style.visibility = 'visible';
  me.htmlElement.style.display = 'flex';//hidden';

  if (model && model.requestFocus == false) {

  } else {
    me.requestFocus();
  }
  return me;
};


CFrame.prototype.showModal = function(onCloseListener) {
  var me = this;

  var appearance = new CFrameAppearance();
  appearance.showTitleBar = true;
  appearance.showCloseButton = false;
  appearance.frameBorderRadius = '0px';
  appearance.frameBorderStyle = 'none';
  appearance.frameBorderWidthDefault = '0px';
  appearance.frameBorderWidthFocused = '0px';
  appearance.frameBoxShadow = null;
  appearance.frameBackgroundColor = 'transparent';
  appearance.frameComponents = [];
  appearance.frameHeightAdjust = 0;
  appearance.titleBarHeight = '0px';
  appearance.titleBarBorderBottomFocused = null;
  appearance.titleBarCaptionLeftMargin = '0px';


  appearance.onInitialize = function() {
  };

  //added for modal window
  appearance.pullUpDisabled = true;

  var windowManager = me.parentCanvas;

  var modalBackgroundWindowId = DEF.CFRAME.MODAL_BACKGROUND_FRAME_ID_PREFIX + me.id;

  //create background window for preventing click background
  var modalBackgroundFrame = new CIfFrame(modalBackgroundWindowId, 0, 0, 1, 1, appearance);
  modalBackgroundFrame.setSize(window.innerWidth, window.innerHeight, true);
  modalBackgroundFrame.setResizable(false);

  window.addEventListener('resize', function() {
    modalBackgroundFrame.setSize(window.innerWidth, window.innerHeight, true);
  });


  //remember id of modal background frame
  me.modalBackgroundWindowId = modalBackgroundWindowId;

  // if (properties && properties.windowName) {
  //     frame.setName(properties.windowName);
  // }

  modalBackgroundFrame.hide();
  windowManager.addWindow(modalBackgroundFrame);


  modalBackgroundFrame.setTitle('').getFrameView().innerHTML = '<div class="jsframe-modal-window-background"></div>';
  modalBackgroundFrame.getFrameView().style.backgroundColor = 'rgba(0,0,0,0.0)';
  modalBackgroundFrame.show();

  me.show();

  if (onCloseListener) {
    me.setOnCloseFrameListener(onCloseListener);
  }
};
CFrame.prototype.getWindowManager = function() {
  var me = this;
  return me.parentCanvas;
}


CIfFrame.prototype.hide = function() {
  var me = this;
  //  me.htmlElement.style.visibility = 'hidden';
  me.htmlElement.style.display = 'none';//hidden';
  return me;
};

//Overriding CBeanFrame.prototype.onmouseDown
CIfFrame.prototype.onmouseDown = function(e) {

  var refHtmlElement = this;

  //Do not select it when dragging by the mouse.
  document.body.ondrag = function() {
    return false;
  };
  // document.body.onselectstart = function () {
  //     return false;
  // };


  //Override decorator with onmouseDown of parent class
  refHtmlElement.decorator = CFrame.prototype.onmouseDown;
  refHtmlElement.decorator(e);

  //Deploy a transparent screen.
  // Since mouseDown is pointed to this.htmlElement.onmousedown in the CBean class,
  // this 'this' will indicate this.htmlElement.
  //In other words,
  //if you want to refer 'CIfFrame',you need to specify 'this.parent.'
  //See CBeanFrame class, you can find 'this.htmlElement.parent = this'
  var refCIfFrame = refHtmlElement.parent;


  var refCWindowManager = refHtmlElement.parentCanvas;

  //When somewhere window(CFrame,CIfFrame) fires 'mouseDown',
  // Close all transparency screens so that the mouse cursor can pass over any iFrame
  for (var windowId in refCWindowManager.beanList) {
    var objCIfFrame = refCWindowManager.beanList[windowId];
    if (windowId == refCIfFrame.getWindowId()) {
      //skip
    } else {
      objCIfFrame.handleReleasingFocus();
    }
  }

  refCIfFrame.handleTakingFocus();

};

CIfFrame.prototype.mouseUp = function(e) {
  var refCIfFrame = this;


  if (refCIfFrame.overrayTransparentScreenEnabled || refCIfFrame.overrayTransparentScreenOnResize) {
    if (refCIfFrame.parentCanvas.onTopObject == refCIfFrame) {
      //Minimize the window at the front.
      refCIfFrame.transparence.style.width = '0px';
      refCIfFrame.transparence.style.height = '0px';
    } else {
      //The window which is not the at the front expands the screen so that it can respond to clicks.

      if (refCIfFrame.overrayTransparentScreenEnabled) {
        refCIfFrame.transparence.style.width = parseInt(refCIfFrame.iframe.width) + 'px';
        refCIfFrame.transparence.style.height = parseInt(refCIfFrame.iframe.height) + 'px';
      }
    }
  }

  refCIfFrame.decorator = CFrame.prototype.mouseUp;
  refCIfFrame.decorator(e);


  //Cancel selecting "Do not select when dragging mouse while releasing button" is canceled
  document.body.ondrag = null;
  document.body.onselectstart = null;

  //Disable when stopping moving.(Enable transparent window only when moving.)
  //This will work smoothly even with iframe content
  refCIfFrame.transparence.style.pointerEvents = 'none';
};

CIfFrame.prototype.setMinFrameSize = function(width, height) {
  var me = this;
  me.minFrameWidth = width;
  me.minWindowHeight = height;
};

CIfFrame.prototype.resize = function(deltaLeft, deltaTop, deltaWidth, deltaHeight, byUser) {


  var refCIfFrame = this;

  if (!refCIfFrame.resizable && byUser) {
    return null;
  }

  var prevSize = refCIfFrame.getSize();


  //Resize processing should be overridden directly rather than adopting a decorator pattern because it has better performance.
  var tmpLeft = parseInt(refCIfFrame.htmlElement.style.left, 10);
  var tmpTop = parseInt(refCIfFrame.htmlElement.style.top, 10);
  var tmpWidth = parseInt(refCIfFrame.htmlElement.style.width, 10);
  var tmpHeight = parseInt(refCIfFrame.htmlElement.style.height, 10);

  //Important logic to handle the minimum of Window well
  if (byUser && (tmpWidth + deltaWidth < refCIfFrame.minFrameWidth & deltaWidth < 0)) {
    //Minimum adjustment of width
    refCIfFrame.htmlElement.style.width = tmpWidth + 'px';
    deltaWidth = 0;
  }

  if (byUser && (tmpHeight + deltaHeight < refCIfFrame.minWindowHeight & deltaHeight < 0)) {
    //Minimum adjustment of height
    refCIfFrame.htmlElement.style.height = tmpHeight + 'px';
    deltaHeight = 0;
  }
  refCIfFrame.htmlElement.style.left = (tmpLeft + deltaLeft) + 'px';
  refCIfFrame.htmlElement.style.top = (tmpTop + deltaTop) + 'px';
  refCIfFrame.htmlElement.style.width = (tmpWidth + deltaWidth) + 'px';
  refCIfFrame.htmlElement.style.height = (tmpHeight + deltaHeight) + 'px';


  var tmpCanvasWidth = parseInt(refCIfFrame.canvas.canvasElement.style.width, 10);
  var tmpCanvasHeight = parseInt(refCIfFrame.canvas.canvasElement.style.height, 10);

  //Since canvasElement is a (0, 0) relative coordinate with respect
  // to the parent element, it is not necessary to change left and top.
  refCIfFrame.canvas.canvasElement.style.width = (tmpCanvasWidth + deltaWidth) + 'px';
  refCIfFrame.canvas.canvasElement.style.height = (tmpCanvasHeight + deltaHeight) + 'px';

  //Change the size of the title bar. TitleAdjustWidth etc.
  // The reason why you do not have to use titleAdjustWidth is
  // because these scaling are done with differences (deltaX, deltaY).
  //Therefore, if you adjust with the titleAdjustWidth
  // as the initial value, the other will stretch relative.
  refCIfFrame.titleBar.style.width = (tmpCanvasWidth - refCIfFrame.ifDelta + deltaWidth + 0) + 'px';

  //Image resizing for iframe that is the child element of canvas
  refCIfFrame.iframe.width = (tmpCanvasWidth - refCIfFrame.ifDelta + deltaWidth + 0) + 'px';
  refCIfFrame.iframe.height = (tmpCanvasHeight - refCIfFrame.ifDelta + deltaHeight + refCIfFrame.frameHeightAdjust) + 'px';

  if (refCIfFrame.overrayTransparentScreenEnabled || refCIfFrame.overrayTransparentScreenOnResize) {
    //Deploy a transparent screen.
    refCIfFrame.transparence.style.width = parseInt(refCIfFrame.iframe.width) + 'px';
    refCIfFrame.transparence.style.height = parseInt(refCIfFrame.iframe.height) + 'px';
  }

  //move frameComponent(like closeButton) corresponding to moving window edge for resize
  for (var frameComponentId in refCIfFrame.frameComponentMap) {
    var frameComponent = refCIfFrame.frameComponentMap[frameComponentId];
    //update alignment of frameComponent corresponding to moving window edge for resize
    frameComponent.updateAlign();
  }


  for (var beanName in refCIfFrame.canvas.beanList) {
    var tmpBean = refCIfFrame.canvas.beanList[beanName];

    if (tmpBean.htmlElement.typeName == 'cmarkerwindow') {

      if (tmpBean.htmlElement.usage == 'RD') {
        tmpBean.htmlElement.style.left = (parseInt(tmpBean.htmlElement.style.left) + deltaWidth) + 'px';
        tmpBean.htmlElement.style.top = (parseInt(tmpBean.htmlElement.style.top) + deltaHeight) + 'px';
      } else if (tmpBean.htmlElement.usage == 'DD') {
        tmpBean.htmlElement.style.width = (parseInt(tmpBean.htmlElement.style.width) + deltaWidth) + 'px';
        tmpBean.htmlElement.style.top = (parseInt(tmpBean.htmlElement.style.top) + deltaHeight) + 'px';
      } else if (tmpBean.htmlElement.usage == 'RR') {
        tmpBean.htmlElement.style.left = (parseInt(tmpBean.htmlElement.style.left) + deltaWidth) + 'px';
        tmpBean.htmlElement.style.height = (parseInt(tmpBean.htmlElement.style.height) + deltaHeight) + 'px';
      }
    }
  }

  var crrSize = refCIfFrame.getSize();
  if (prevSize.width !== crrSize.width || prevSize.height !== crrSize.height) {
    refCIfFrame.eventEmitter.emit('resize', refCIfFrame._getCurrentSizePos());
  }


};//resize

CIfFrame.prototype._getCurrentSizePos = function() {
  var me = this;
  var crrSize = me.getSize();
  var crrPos = me.getPosition();
  return { target: me, pos: crrPos, size: crrSize };
};

CIfFrame.prototype.resizeDirect = function(width, height, byUser) {

  var refCIfFrame = this;


  if (!refCIfFrame.resizable && byUser) {
    return null;
  }

  refCIfFrame.htmlElement.style.width = width + 'px';
  refCIfFrame.htmlElement.style.height = height + 'px';


  var tmpCanvasWidth = parseInt(refCIfFrame.canvas.canvasElement.style.width);
  var tmpCanvasHeight = parseInt(refCIfFrame.canvas.canvasElement.style.height);

  //Since canvasElement is a (0, 0) relative coordinate with respect
  // to the parent element, it is not necessary to change left and top.
  refCIfFrame.canvas.canvasElement.style.width = width + 'px';
  refCIfFrame.canvas.canvasElement.style.height = (height - refCIfFrame.titleBar.style.height) + 'px';

  //Change the size of the title bar. TitleAdjustWidth etc.
  // The reason why you do not have to use titleAdjustWidth is
  // because these scaling are done with differences (deltaX, deltaY).
  //Therefore, if you adjust with the titleAdjustWidth
  // as the initial value, the other will stretch relative.
  refCIfFrame.titleBar.style.width = (width - refCIfFrame.ifDelta) + 'px';

  //Image resizing for iframe that is the child element of canvas
  refCIfFrame.iframe.width = width - refCIfFrame.ifDelta + 'px';
  refCIfFrame.iframe.height = height - refCIfFrame.ifDelta + refCIfFrame.frameHeightAdjust + 'px';


  if (refCIfFrame.overrayTransparentScreenEnabled || refCIfFrame.overrayTransparentScreenOnResize) {
    //Deploy a transparent screen.
    refCIfFrame.transparence.style.width = parseInt(refCIfFrame.iframe.width) + 'px';
    refCIfFrame.transparence.style.height = parseInt(refCIfFrame.iframe.height) + 'px';
  }

  //move frameComponent(like closeButton) corresponding to moving window edge for resize
  for (var frameComponentId in refCIfFrame.frameComponentMap) {
    var frameComponent = refCIfFrame.frameComponentMap[frameComponentId];
    //update alignment of frameComponent corresponding to moving window edge for resize
    frameComponent.updateAlign();
  }


  for (var beanName in refCIfFrame.canvas.beanList) {
    var tmpBean = refCIfFrame.canvas.beanList[beanName];

    if (tmpBean.htmlElement.typeName == 'cmarkerwindow') {

      if (tmpBean.htmlElement.usage == 'RD') {
        tmpBean.htmlElement.style.left = width + 'px';// parseInt(tmpBean.htmlElement.style.left) + deltaWidth + 'px';
        tmpBean.htmlElement.style.top = height + 'px';//parseInt(tmpBean.htmlElement.style.top) + deltaHeight + 'px';
      } else if (tmpBean.htmlElement.usage == 'DD') {
        tmpBean.htmlElement.style.width = width + 'px';
        tmpBean.htmlElement.style.top = height + 'px';//heightparseInt(tmpBean.htmlElement.style.top) + deltaHeight + 'px';
      } else if (tmpBean.htmlElement.usage == 'RR') {
        tmpBean.htmlElement.style.left = width + 'px';//+parseInt(tmpBean.htmlElement.style.left) + deltaWidth + 'px';
        tmpBean.htmlElement.style.height = height + 'px';
      }
    }
  }
};//resize

/**
 * Focus on this frame
 */
CIfFrame.prototype.requestFocus = function() {


  var me = this;

  var beanList = me.parentCanvas.beanList;

  for (var windowId in beanList) {

    var tmpIfWindow = beanList[windowId];

    //If it's my own window, minimize the transparent screen and change the color of the title bar.
    if (windowId == me.getWindowId()) {

      //if this frame is a target frame
      tmpIfWindow.handleTakingFocus();
    } else {

      //if this frame is NOT a target frame
      tmpIfWindow.handleReleasingFocus();
    }
  }

  me.parentCanvas.pullUp(me.id);

};

/**
 * URL for iframe
 * @param url
 */
CIfFrame.prototype.setUrl = function(url) {

  var me = this;

  return new Promise(function(resolve, reject) {


    if (url) {
      me.setUseIframe(true);
    } else {
      me.setUseIframe(false);
      resolve();
    }


    me.iframe.src = url;

    me.iframe.onload = function() {
      var funcOnMouseMove = function(e) {

        var clientX = e.pageX;
        var clientY = e.pageY;

        if (TOUCH_ENABLED) {
          if (e.type === 'touchmove') {
            var changedTouches = e.changedTouches;
            if (TOUCH_MOVE_ONLY_WITH_ONE_FINGER) {
              var touches = e.touches;
              if (touches.length === 1) {
                clientX = changedTouches[0].pageX;
                clientY = changedTouches[0].pageY;
              } else {
                return true;
              }
            } else {
              clientX = changedTouches[0].pageX;
              clientY = changedTouches[0].pageY;
            }
          }
        }
        var frameLeft = me.getLeft();
        var frameTop = me.getTop();
        var eventFromIframe = document.createEvent('MouseEvents');
        // Processing to make it look like mouse move even if you are moving by touch
        eventFromIframe.initMouseEvent('mousemove', true, false, window, e.detail, e.screenX, e.screenY, (clientX + frameLeft), (clientY + frameTop),
          e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, null);

        //smooth dragging during iframe mode
        me.parentCanvas.windowMouseMove(eventFromIframe);

        if (me.onMouseMoveOnIframe) {
          me.onMouseMoveOnIframe(eventFromIframe);
        }
      };
      me.iframe.contentWindow.document.onmousemove = funcOnMouseMove;
      me.iframe.contentWindow.document.ontouchmove = funcOnMouseMove;


      //mouse up
      var funcOnMouseUp = function(e) {

        var clientX = e.pageX;
        var clientY = e.pageY;

        if (TOUCH_ENABLED) {
          if (e.type === 'touchend') {
            var changedTouches = e.changedTouches;
            clientX = changedTouches[0].pageX;
            clientY = changedTouches[0].pageY;
          }
        }
        var frameLeft = me.getLeft();
        var frameTop = me.getTop();
        var eventFromIframe = document.createEvent('MouseEvents');
        // Processing to make it look like mouse up even if you mouseup by touch
        eventFromIframe.initMouseEvent('mouseup', true, false, window, e.detail, e.screenX, e.screenY, (clientX + frameLeft), (clientY + frameTop),
          e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, null);

        //smooth dragging during iframe mode
        me.parentCanvas.windowMouseUp(eventFromIframe);

        if (me.onMouseUpOnIframe) {
          me.onMouseUpOnIframe(eventFromIframe);
        }
      };
      me.iframe.contentWindow.document.onmouseup = funcOnMouseUp;
      me.iframe.contentWindow.document.ontouchend = funcOnMouseUp;

      resolve(me, me.iframe.contentWindow.document);
    };
  });
};


/**
 * Returns DOM-document of iframe
 * @returns {*|HTMLDocument}
 */
CIfFrame.prototype.getIfDocument = function() {
  var me = this;
  return me.iframe.contentWindow.document;
};


CIfFrame.prototype.setScrolling = function(str) {
  var me = this;
  me.iframe.scrolling = str;
};

CIfFrame.prototype.getScrolling = function(str) {
  var me = this;
  return me.iframe.scrolling;
};


CIfFrame.prototype.setResizable = function(enabled) {
  var me = this;
  me.resizable = enabled;
  me.enableMarkers(enabled);
  return me;
};


CIfFrame.prototype.setControl = function(model) {
  var me = this;

  if (model) {
    model.frame = me;
    me.control = me.jsFrame.createWindowEventHelper(model);
    me.control.setupDefaultEvents();
  }

};

/**
 * end of CIFrame class
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


inherit(CWindowManager, CCanvas);

/**
 * CWindowManager class
 * <p>
 * A canvas class that displays multiple frames. Handle events on the window to coordinate multiple windows<br>
 *
 * @param parentElement
 * @param canvasId
 * @param left
 * @param top
 * @param width
 * @param height
 * @constructor
 */
function CWindowManager(parentElement, canvasId, left, top, width, height) {
  CWindowManager.superConstructor.call(this, parentElement, canvasId, left, top, width, height);
  var me = this;
  // document.body.addEventListener('click', function(evt) {
  document.addEventListener('click', function(evt) {
    for (var windowId in me.beanList) {
      var beanFrame = me.beanList[windowId];
      beanFrame.onBodyClicked(evt);
    }
  });

}

CWindowManager.prototype.getWindow = function(windowId) {
  var me = this;
  return me.beanList[windowId];
};

//Wrapping the 'addBean' of the parent class
CWindowManager.prototype.addWindow = function(window) {
  var me = this;

  var windowId = window.getWindowId();
  var name = window.getName();
  me.beanIdName[windowId] = name;
  me.beanNameId[name] = windowId;

  me.addBean(window);
};

//if contains window named specified name
CWindowManager.prototype.containsWindowName = function(name) {
  var me = this;


  var windowId = me.beanNameId[name];

  if (windowId) {
    return true;
  }
  return false;
};

CWindowManager.prototype.getWindowByName = function(name) {
  var me = this;
  var windowId = me.beanNameId[name];

  if (windowId) {
    return me.getWindow(windowId);
  } else {
    return null;
  }
};

//Wrapping the 'mouseMove' method of the parent class
CWindowManager.prototype.windowMouseMove = function(e) {

  var me = this;
  if (me.currentObject == null) {
    return null;
  }

  var childWindowMoved = false;

  //Loop processing of each CWindow held by CWindowManager
  var beanList = me.beanList;

  for (var windowId in beanList) {

    var targetWindow = beanList[windowId];


    //Since this 'mouseMove' is canvas of CWindow's 'mouseMove',so do move CBeanFrames in the canvas.
    var eventData = targetWindow.canvas.mouseMove(e);

    //Whether any one of the beans in the Canvas has moved or not.
    //Yes.(When it moves), eventData is set.
    //NO. If it does not move it is set to null.
    childWindowMoved = childWindowMoved | (eventData != null);
    if (eventData != null) {

      //If it is the marker for resizing
      if (eventData.targetTypeName == 'cmarkerwindow') {

        var targetObject = eventData.targetObject;

        //Enable transparent window only when moving.
        //This will work smoothly even with iframe content
        targetWindow.transparence.style.pointerEvents = 'auto';

        if (targetObject.usage == 'RD') {
          targetWindow.resize(0, 0, eventData.deltaX, eventData.deltaY, true);
        } else if (targetObject.usage == 'DD') {
          targetWindow.resize(0, 0, 0, eventData.deltaY, true);
        } else if (targetObject.usage == 'RR') {
          targetWindow.resize(0, 0, eventData.deltaX, 0, true);
        }

      }
    }
  }

  //If any one of the beans in the Canvas has moved.Do not do 'Cwindow's mouseMove'
  if (!childWindowMoved && this.mouseDownSource != 'childcanvas') {

    //Moving logic for CWindow which is holded by CWindowManager as a child window.
    me.mouseMove(e);
  }

};

//Wrapping the method 'mouseUp' of the parent class
CWindowManager.prototype.windowMouseUp = function(e) {
  var me = this;

  //run 'mouseUp' of parent class
  me.mouseUp(e);

  var beanList = me.beanList;

  for (var windowId in beanList) {

    var objWindow = beanList[windowId];

    //run CWindow's 'mouseUp'(it's child window).
    objWindow.mouseUp(e);
  }

};

/**
 * (override CCanvas.removeBean)
 * @param windowId
 */
CWindowManager.prototype.removeBean = function(windowId) {


  var me = this;

  //Retrieve the target beanFrame
  var beanList = me.beanList;
  var targetBean = beanList[windowId];

  if (targetBean == null) {
    return;
  }

  var removeTargetBeanHasFocus = targetBean._hasFocus;


  //Remove bean's htmlElement from canvasElement
  me.canvasElement.removeChild(targetBean.htmlElement);

  //Delete the bean object in the associative array.
  delete beanList[windowId];


  var beanName = me.beanIdName[windowId];
  if (beanName) {
    //-if bean name exist
    delete me.beanIdName[windowId];
    delete me.beanNameId[beanName];
  }


  //focus on last focused window after removing
  var maxFocusTime = 0;
  var lastFocusedFrame = null;

  if (removeTargetBeanHasFocus) {
    for (var windowId in beanList) {
      var frame = beanList[windowId];

      //pullUpDisabled=true means that the frame is modal background window
      if (maxFocusTime <= frame._hasFocusTime && !frame.pullUpDisabled) {

        maxFocusTime = frame._hasFocusTime;

        lastFocusedFrame = frame;

      }
    }
    if (lastFocusedFrame) {
      lastFocusedFrame.requestFocus();
    }
  }

  targetBean.parentCanvas = null;

};
/**
 * end of CWindowManager class
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

inherit(CMarkerWindow, CBeanFrame);

/**
 * CMarkerWindow class
 * @param windowId
 * @param left
 * @param top
 * @param width
 * @param height
 * @param zindex
 * @param usage
 * @constructor
 */
function CMarkerWindow(windowId, left, top, width, height, zindex, usage, color) {

  var me = this;

  CMarkerWindow.superConstructor.call(this, windowId, left, top, width, height, zindex, usage);

  me.htmlElement.typeName = 'cmarkerwindow';
  me.htmlElement.usage = usage;
  me.htmlElement.isRangeLimited = false;
  me.htmlElement.style.borderStyle = 'none';
  me.htmlElement.style.zIndex = 1;
  if (color) {
    me.htmlElement.style.background = color;
  }
  //me.pullUpDisabled = true;

  me.getWindowType = function() {
    return 'CMarkerWindow';
  };
}

/**
 * End of CMarkerWindow class
 * @constructor
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

/**
 * FrameManager class
 * @constructor
 */
function JSFrame(model) {

  var me = this;

  var parentElement = null;

  // Frames will be fixed(Frames keep staying in the same place) even if the user scrolls the browser.
  me.isWindowManagerFixed = true;//default is true.

  //Initialization parameter check

  if (model && model.fixed == false) {
    me.isWindowManagerFixed = false;
  }

  if (model && model.parentElement) {
    parentElement = model.parentElement;
  }

  me.hAlign = 'left';
  me.vAlign = 'top';

  if (model && model.horizontalAlign) {
    me.hAlign = model.horizontalAlign;
  }

  if (model && model.verticalAlign) {
    me.vAlign = model.verticalAlign;
  }

  me.pullToRefresh = false;
  if (model && typeof model.pullToRefresh === 'boolean') {
    me.pullToRefresh = model.pullToRefresh;
  }

  me.touchActionManipulation = true;
  if (model && typeof model.touchActionManipulation === 'boolean') {
    me.touchActionManipulation = model.touchActionManipulation;
  }

  if (!parentElement) {
    if (me.isWindowManagerFixed) {
      var topParentDiv = document.createElement('div');
      topParentDiv.id = 'jsFrame_fixed_' + me.generateUUID();
      topParentDiv.setAttribute('style',
        'position:fixed;' + me.hAlign + ':0px;' + me.vAlign + ':0px;margin:0px;padding:0px;z-index:10000;'
      );
      document.body.appendChild(topParentDiv);
      parentElement = topParentDiv;
    } else {
      var topParentDiv = document.createElement('div');
      topParentDiv.id = 'jsFrame_absolute_' + me.generateUUID();
      topParentDiv.setAttribute('style',
        'position:absolute;' + me.hAlign + ':0px;' + me.vAlign + ':0px;margin:0px;padding:0px;'
      );
      document.body.appendChild(topParentDiv);
      parentElement = topParentDiv;
    }
  } else {
    if (me.isWindowManagerFixed) {
      //parentElement set
      var topParentDiv = document.createElement('div');
      topParentDiv.id = 'jsFrame_fixed_' + me.generateUUID();
      topParentDiv.setAttribute('style',
        'position:fixed;' + me.hAlign + ':0px;' + me.vAlign + ':0px;margin:0px;padding:0px;'
      );
      parentElement.appendChild(topParentDiv);
    } else {

      var topParentDiv = document.createElement('div');
      topParentDiv.id = 'jsFrame_absolute_' + me.generateUUID();
      topParentDiv.setAttribute('style',
        'position:absolute;' + me.hAlign + ':0px;' + me.vAlign + ':0px;margin:0px;padding:0px;'
      );
      parentElement.appendChild(topParentDiv);

    }
  }

  if (MOUSE_ENABLED) {
    document.addEventListener('mouseup', mouseUp);
    document.addEventListener('mousemove', mouseMove);
  }

  if (TOUCH_ENABLED) {
    if ('ontouchend' in window) {
      var funcOnTouchEnd = function(evt) {
        // The "mouseup" event happens right after "touchend" event,
        // but I don't call #preventdefault because #preventdefault prevents "onclick".
        // So, perform #preventdefault only for "touchmove"
        // evt.preventDefault();
        mouseUp.bind(this)(evt);
      };
      document.addEventListener('touchend', funcOnTouchEnd);
    }

    if ('ontouchmove' in window) {

      // To remove the 300ms tap delay between touchend and click,
      // To disable double-tap to zoom
      if (me.touchActionManipulation) {
        me.doEnableTouchActionManipulation();
      }

      if (!me.pullToRefresh) {
        // The Android version of Chrome has a feature that refreshes the page by sliding downward
        // while touching on the screen, but when this feature is enabled, the downward movement of the window is inhibited,
        // so this feature can be explicitly turned off.
        me.doDisablePullToRefresh();
      }

      var funcOnTouchMove = function(evt) {
        // Call #preventDefault to prevent simultaneous ignition of mousemove
        evt.preventDefault();
        mouseMove.bind(this)(evt);
      };
      document.addEventListener('touchmove', funcOnTouchMove);
    }
  }


  me.windowManager = new CWindowManager(parentElement, 'windowManager_' + me.generateUUID(), 0, 0, 0, 0);
  //me.windowManager = new CWindowManager(document.body, 'windowManager_' + me.generateUUID(), 0, 0, 0, 0);
  me.domPartsBuilder = null;

  function mouseUp(e) {
    me.windowManager.windowMouseUp(e);
  }

  function mouseMove(e) {
    me.windowManager.windowMouseMove(e);
  }
}

JSFrame.prototype.doEnableTouchActionManipulation = function() {
  var bodyStyle = document.documentElement.getAttribute('style');
  if (!bodyStyle) {
    bodyStyle = '';
  } else {
    if (!bodyStyle.endsWith(';')) {
      bodyStyle += ';';
    }
  }
  if (bodyStyle.indexOf('touch-action') === -1) {
    bodyStyle += '-ms-touch-action: manipulation;touch-action: manipulation;';
    document.documentElement.setAttribute('style', bodyStyle);
  }
};

JSFrame.prototype.doDisablePullToRefresh = function() {
  var bodyStyle = document.body.getAttribute('style');
  if (!bodyStyle) {
    bodyStyle = '';
  } else {
    if (!bodyStyle.endsWith(';')) {
      bodyStyle += ';';
    }
  }
  if (bodyStyle.indexOf('overscroll-behavior-y') === -1) {
    bodyStyle += 'overscroll-behavior-y: contain;';
    document.body.setAttribute('style', bodyStyle);
  }
};
JSFrame.prototype.getDomPartsBuilder = function() {
  var me = this;

  if (!me.domPartsBuilder) {
    me.domPartsBuilder = new CDomPartsBuilder();
  }
  return me.domPartsBuilder;
};

JSFrame.prototype.create = function(model) {
  var me = this;

  var properties = {};
  properties.name = model.name;
  var title = model.title;
  var left = model.left;
  var top = model.top;
  var width = model.width;
  var height = model.height;
  var appearance = model.appearance;
  var presetWindowName = model.preset;
  var presetWindowParam = model.presetParam;
  var appearanceName = model.appearanceName;
  var appearanceParam = model.appearanceParam;
  var style = model.style;

  var minWidth = model.minWidth;
  var minHeight = model.minHeight;


  var html = model.html;
  var resizable = model.resizable;
  var movable = model.movable;
  var url = model.url;
  var urlLoaded = model.urlLoaded;

  var presetParam = model.presetParam;
  var presetWindow;

  if (presetWindowName) {

    var presetWindowObj = this.getPresetWindow(presetWindowName);
    presetWindow = presetWindowObj.getPresetWindow(presetParam);
    appearance = this.createPresetStyle(presetWindow.appearanceName,
      { appearanceParam: presetWindow.appearanceParam });

  } else if (appearanceName) {
    appearance = this.createPresetStyle(appearanceName,
      { appearanceParam: appearanceParam });
  }

  if (model.clientHeight) {
    var windowTitleBarHeight = parseInt(appearance.titleBarHeight || 0) - appearance.frameHeightAdjust;
    height = model.clientHeight + windowTitleBarHeight;
  }


  var frame = this.createFrame(left, top, width, height, appearance, properties);

  if (title) {
    frame.setTitle(title);
  }

  if (html) {
    frame.setHTML(html);
  }
  if (url) {
    var urlPromise = frame.setUrl(url);
    if (urlLoaded) {
      urlPromise.then(urlLoaded);
    }
  }
  if (resizable == false) {
    frame.setResizable(false);
  }
  if (movable == false) {
    frame.setMovable(false);
  }

  if (minWidth && minHeight) {
    frame.minFrameWidth = minWidth;
  }
  if (minHeight) {
    frame.minWindowHeight = minHeight;

    if (model.clientHeight) {
      frame.minWindowHeight = minHeight + windowTitleBarHeight;
    }
  }

  if (style) {
    var frameView = frame.getFrameView();

    for (var name in style) {
      if (style.hasOwnProperty(name)) {
        frameView.style[name] = style[name];
      }
    }
  }

  if (presetWindow) {
    presetWindow.setupPresetWindow(frame);
  }

  return frame;
};

/**
 * Create a new window
 *
 * @returns {CIfFrame}
 */
JSFrame.prototype.createFrame = function(left, top, width, height, appearance, properties) {
  var me = this;

  if (!appearance) {
    appearance = me.createFrameAppearance();
  }


  appearance.initialize();

  var windowId = 'window_' + me.generateUUID();

  if (!left) {
    left = 0;
  }
  if (!top) {
    top = 0;
  }
  if (!width) {
    width = 128;
  }
  if (!height) {
    height = 128;
  }


  var frame = new CIfFrame(windowId, left, top, width, height, appearance);

  //experimental
  frame.jsFrame = me;

  if (properties && properties.name) {
    frame.setName(properties.name);
  }
  frame.hide();

  me.windowManager.addWindow(frame);


  // getTitleBarStyle is deprecated
  if (appearance.getTitleBarStyle) {

    var titleBarStyle = appearance.getTitleBarStyle();
    if (titleBarStyle) {
      frame.setTitleBarClassName(titleBarStyle.titleBarClassNameDefault, titleBarStyle.titleBarClassNameFocused);
    }
  } else if (appearance.titleBarClassNameDefault && appearance.titleBarClassNameFocused) {
    frame.setTitleBarClassName(appearance.titleBarClassNameDefault, appearance.titleBarClassNameFocused);
  } else if (appearance.titleBarClassNameDefault) {
    frame.setTitleBarClassName(appearance.titleBarClassNameDefault, appearance.titleBarClassNameDefault);
  }

  return frame;

};


JSFrame.prototype.containsWindowName = function(windowName) {
  var me = this;
  return me.windowManager.containsWindowName(windowName);
};

JSFrame.prototype.getWindowByName = function(windowName) {
  var me = this;
  return me.windowManager.getWindowByName(windowName);
};

JSFrame.prototype.generateUUID = function() {

  var unixTime = Date.now();

  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (unixTime + Math.random() * 16) % 16 | 0;
    unixTime = Math.floor(unixTime / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;

};

JSFrame.prototype.createFrameAppearance = function() {
  return new CFrameAppearance();
};

JSFrame.prototype.createAnimator = function() {

  return new CSimpleLayoutAnimator();
};

/**
 * Helper class for maximizing and minimizing windows(frames) and handling animations accordingly
 */
JSFrame.prototype.createWindowEventHelper = function(model) {

  var me = this;

  if (!model) {
    model = {};
  }

  model.verticalAlign = me.vAlign;
  model.horizontalAlign = me.hAlign;

  var wndEventHelper = new WindowEventHelper(model);
  return wndEventHelper;
};

JSFrame.prototype.getPresetWindow = function(presetName, param) {

  if (presetWindows[presetName]) {
    var presetObj = presetWindows[presetName];
    return presetObj;
  } else {
    return null;
  }
}
JSFrame.prototype.createPresetStyle = function(presetName, param) {

  var me = this;
  var apr = me.createFrameAppearance();
  if (param && param.focusedFrameOnly) {
    apr.focusedFrameOnly = param.focusedFrameOnly;
  }

  if (presetStyles[presetName]) {
    var styleObj = presetStyles[presetName];
    var appearanceParam = null;

    if (param && param.appearanceParam) {
      appearanceParam = param.appearanceParam;
    }

    return styleObj.getStyle(apr, appearanceParam);
  }

  console.error('[JSFrame] Preset appearance "' + presetName + '" not found.');
  return apr;
};

JSFrame.prototype.showToast = function(model) {
  if (!model) {
    return;
  }

  var me = this;
  var toastHeight = 60;
  var toastWidth = 260;
  var openCloseDurationMs = 300;
  var stayDurationMs = 1000;
  var startY = window.innerHeight - 10 - toastHeight / 2;
  var endY = window.innerHeight - 20 - toastHeight / 2;
  var myHtml = '';
  var showButton = false;
  var style = {
    borderRadius: '10px',
    background: 'rgba(0,0,0,0.8)',
  };

  if (model.style) {
    style = model.style;
  }
  if (model.height) {
    toastHeight = model.height;
  }
  if (model.width) {
    toastWidth = model.width;
  }
  if (model.duration) {
    stayDurationMs = model.duration;
  }
  if (model.align) {

    if (model.align == 'top') {
      startY = 10 + toastHeight / 2;
      endY = 20 + toastHeight / 2;
    } else if (model.align == 'center') {
      startY = window.innerHeight / 2;
      endY = window.innerHeight / 2;
    } else {
      //bottom
    }
  }
  if (model.html) {
    myHtml = model.html;
  }
  if (model.text) {
    myHtml = model.text;
  }
  if (model.closeButton == true) {
    showButton = true;
  } else {
    showButton = false;
  }


  var apr = me.createPresetStyle('toast');

  if (style.borderRadius) {
    apr.frameBorderRadius = style.borderRadius;
  }

  if (model.closeButtonColor) {
    apr.captionClor = model.closeButtonColor;

  }


  var frame = me.create({
    name: 'toast_' + me.generateUUID(),
    width: toastWidth, height: toastHeight,
    movable: false,
    resizable: false,
    appearance: apr,
    style: style,
    html: '<div id="my_element" style="box-sizing:border-box;display: flex;justify-content: center;align-items: center;padding:10px;font-size:16px;color:darkgray;height:' + (toastHeight) + 'px">' +
      myHtml +
      '</div>'
  });


  if (showButton) {
  } else {
    frame.hideFrameComponent('closeButton');
  }

  var requestFocusAfterAnimation = false;

  var startX = window.innerWidth / 2;

  if (me.hAlign == 'right') {
    startX = -startX;// -500;
  }

  if (me.vAlign == 'bottom') {
    startY = startY - window.innerHeight;
    endY = endY - window.innerHeight;
  }


  var animator = me.createAnimator();
  animator.set(frame)
    .setDuration(openCloseDurationMs)
    .fromPosition(startX, startY, 'CENTER_CENTER')
    .toPosition(startX, endY, 'CENTER_CENTER')
    .toAlpha(1.0)
    .fromAlpha(0.0)
    .start(0, requestFocusAfterAnimation)
    .then(function(animatorObj) {
      return animatorObj
        .setDuration(openCloseDurationMs)
        .fromPosition(startX, endY, 'CENTER_CENTER')
        .toPosition(startX, startY, 'CENTER_CENTER')
        .fromAlpha(1.0)
        .toAlpha(0.5)
        .start(stayDurationMs, requestFocusAfterAnimation);
    })
    .then(function(animatorObj) {
      var _frame = animatorObj.get();
      _frame.closeFrame();
    });

};

/**
 * end of FrameManager class
 */


Object.freeze(DEF);

module.exports = JSFrame;


/***/ }),

/***/ "./src/appearance/CButtonAppearance.js":
/*!*********************************************!*\
  !*** ./src/appearance/CButtonAppearance.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function CTextButtonAppearance() {

  var crossMark0 = '\u274c';

  this.size = 14;
  this.width = null;
  this.height = null;

  //border
  this.borderRadius = 2;
  this.borderWidth = 0;
  this.borderColorDefault = '#aaaaaa';
  this.borderColorFocused = this.borderColorDefault;
  this.borderColorHovered = null;
  this.borderColorPressed = this.borderColorDefault;

  this.borderStyleDefault = 'solid';
  this.borderStyleFocused = this.borderStyleDefault;
  this.borderStyleHovered = null;
  this.borderStylePressed = this.borderStyleDefault;

  this.backgroundBoxShadow = null;


  //background
  this.backgroundColorDefault = 'transparent';
  this.backgroundColorFocused = this.backgroundColorDefault;
  this.backgroundColorHovered = null;
  this.backgroundColorPressed = this.backgroundColorDefault;

  //caption
  this.caption = null;
  this.captionColorDefault = 'white';
  this.captionColorFocused = this.captionColorDefault;
  this.captionColorHovered = null;
  this.captionColorPressed = this.captionColorDefault;
  this.captionShiftYpx = 0;
  this.captionFontRatio = 1.0;


}
module.exports = CTextButtonAppearance;

/***/ }),

/***/ "./src/appearance/CChildMenuAppearance.js":
/*!************************************************!*\
  !*** ./src/appearance/CChildMenuAppearance.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function CChildMenuAppearance(model) {
  this.childMenuHTML = '';
  this.childMenuWidth = 0;
  this.childMenuAlign = 'LEFT';// off set position from parent frameComponent "LEFT" "RIGHT" "CENTER"
  this.yOffset = 0;
  this.xOffset = 0;
}

module.exports = CChildMenuAppearance;

/***/ }),

/***/ "./src/appearance/CDomPartsBuilder.js":
/*!********************************************!*\
  !*** ./src/appearance/CDomPartsBuilder.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mergeDeeply = __webpack_require__(/*! merge-deeply */ "./node_modules/merge-deeply/lib/merge-deeply.js");
var CTextButtonAppearance = __webpack_require__(/*! ./CButtonAppearance.js */ "./src/appearance/CButtonAppearance.js");
var CImageButtonAppearance = __webpack_require__(/*! ./CImageButtonAppearance.js */ "./src/appearance/CImageButtonAppearance.js");
var CChildMenuAppearance = __webpack_require__(/*! ./CChildMenuAppearance.js */ "./src/appearance/CChildMenuAppearance.js");

/**
 * CDomPartsBuilder class
 * Easy to build a beautiful or typical dom parts(htmlElement)
 * @constructor
 */
function CDomPartsBuilder() {
}

CDomPartsBuilder.prototype.buildChildMenuAppearance = function(frameAppearance) {
  return new CChildMenuAppearance(frameAppearance);
};
CDomPartsBuilder.prototype.buildTextButtonAppearance = function(src) {
  if (src) {
    var result = mergeDeeply({ op: 'clone', object1: src, concatArray: true });
    return result;
  } else {
    return new CTextButtonAppearance();
  }
};
CDomPartsBuilder.prototype.buildImageButtonAppearance = function(src) {
  if (src) {
    var clonedImageButtonAppearance = mergeDeeply({ op: 'clone', object1: src });
    return clonedImageButtonAppearance;
  } else {
    return new CImageButtonAppearance();
  }
};

CDomPartsBuilder.prototype.buildButton = function(btnAppearance) {
  var me = this;
  return me.buildTextButton(btnAppearance);
};

CDomPartsBuilder.prototype.appendChildMenuTo = function(childMenuAppearance, parentEle) {
  var me = this;
  var ndiv = document.createElement('div');
  ndiv.classList.add('jsframe-child-menu');
  ndiv.innerHTML = childMenuAppearance.childMenuHTML;
  ndiv.style.position = 'absolute';
  ndiv.style.pointerEvents = 'none';
  ndiv.style.width = childMenuAppearance.childMenuWidth + 'px';
  // ndiv.style.top = childMenuAppearance.childMenuTop + 'px';
  // ndiv.style.left = childMenuAppearance.childMenuLeft + 'px';
  ndiv.style.display = 'none';

  var posX = childMenuAppearance.xOffset;
  var posY = parseInt(parentEle.style.height, 10) + childMenuAppearance.yOffset + 2;

  if (childMenuAppearance.childMenuAlign === 'LEFT') {
    ndiv.style.left = posX + 'px';
  } else if (childMenuAppearance.childMenuAlign === 'RIGHT') {
    ndiv.style.right = posX + 'px';
  } else if (childMenuAppearance.childMenuAlign === 'CENTER') {
    posX = -childMenuAppearance.childMenuWidth / 2 + parseInt(parentEle.style.height, 10) / 2;
    ndiv.style.left = posX + 'px';
  }
  ndiv.style.top = posY + 'px';

  // ndiv.style.pointerEvents is none to avoid referring clicks to extra areas.
  // But we want its children to be responsive, so we set pointerEvents to auto
  ndiv.firstChild.style.pointerEvents = 'auto';

  parentEle.appendChild(ndiv);
  //return ndiv;
};


/**
 * Creates an actual DOM element from the specified appearance
 * @param btnAppearance
 * @returns {HTMLDivElement}
 */
CDomPartsBuilder.prototype.buildTextButton = function(btnAppearance) {

  var size = btnAppearance.size;
  var width = size;
  var height = size;

  if (btnAppearance.width != null) {
    width = btnAppearance.width;
  }

  if (btnAppearance.height != null) {
    height = btnAppearance.height;
  }


  var divElement = document.createElement('div');

  //border
  var borderWidth = btnAppearance.borderWidth;
  var borderRadius = btnAppearance.borderRadius;

  var borderColorDefault = btnAppearance.borderColorDefault;
  var borderColorFocused = btnAppearance.borderColorFocused;
  var borderColorHovered = btnAppearance.borderColorHovered;
  var borderColorPressed = btnAppearance.borderColorPressed;

  var borderStyleDefault = btnAppearance.borderStyleDefault;
  var borderStyleFocused = btnAppearance.borderStyleFocused;
  var borderStyleHovered = btnAppearance.borderStyleHovered;
  var borderStylePressed = btnAppearance.borderStylePressed;

  //background
  var backgroundColorDefault = btnAppearance.backgroundColorDefault;
  var backgroundColorFocused = btnAppearance.backgroundColorFocused;
  var backgroundColorHovered = btnAppearance.backgroundColorHovered;
  var backgroundColorPressed = btnAppearance.backgroundColorPressed;

  var backgroundBoxShadow = btnAppearance.backgroundBoxShadow;

  var fa = btnAppearance.fa;

  //caption
  var caption = btnAppearance.caption;
  var btnImageDefault = btnAppearance.imageDefault;
  var btnImageFocused = btnAppearance.imageFocused;
  var btnImageHovered = btnAppearance.imageHovered;
  var btnImagePressed = btnAppearance.imagePressed;

  //prevent to catch mouse events
  if (btnImageDefault) {
    btnImageDefault.style.pointerEvents = 'none';
  }
  if (btnImageFocused) {
    btnImageFocused.style.pointerEvents = 'none';
  }
  if (btnImageHovered) {
    btnImageHovered.style.pointerEvents = 'none';
  }
  if (btnImagePressed) {
    btnImagePressed.style.pointerEvents = 'none';
  }

  var _captionColorDefault = btnAppearance.captionColorDefault;
  var captionColorFocused = btnAppearance.captionColorFocused;
  var captionColorHovered = btnAppearance.captionColorHovered;
  var captionColorPressed = btnAppearance.captionColorPressed;

  var captionShiftYpx = btnAppearance.captionShiftYpx;
  var captionFontRatio = btnAppearance.captionFontRatio;

  //Set whether parent frame has focus or not internally
  divElement._hasFrameFocus = false;

  //Set whether mouse is pressing or not internally.
  divElement._isMouseDown = false;

  divElement.style.position = 'absolute';

  divElement.style.top = '0px';
  divElement.style.left = '0px';
  divElement.style.width = (width) + 'px';
  divElement.style.height = (height) + 'px';

  if (btnAppearance.cursor) {
    divElement.style.cursor = btnAppearance.cursor;
  } else {
    divElement.style.cursor = 'pointer';
  }
  divElement.style.margin = '0px';
  divElement.style.padding = '0px';
  //added for preventing bootstrap.css pollution
  divElement.style.boxSizing = 'content-box';
  divElement.style.fontFamily = 'sans-serif';

  divElement.onmousedown = function(e) {
    divElement._isMouseDown = true;
    divElement._handleFocusDrawing('onmousedown');
  };

  divElement.onmouseout = function(e) {
    divElement._isMouseDown = false;
    divElement._handleFocusDrawing('onmouseout');
  };

  divElement.onmouseover = function(e) {
    divElement._handleHoverDrawing();
  };

  divElement.onmouseup = function(e) {
    divElement._isMouseDown = false;
    divElement._handleFocusDrawing('onmouseup');
  };


  /**
   * The parent notifies that the parent's frame got focus
   */
  divElement._onTakeFocus = function() {
    divElement._hasFrameFocus = true;
    divElement._handleFocusDrawing('_onTakeFocus');
  };

  /**
   * The parent notifies that the parent's frame has lost focus
   */
  divElement._onReleaseFocus = function() {

    divElement._hasFrameFocus = false;
    divElement._handleFocusDrawing('_onReleaseFocus');
  };

  /**
   *  To handle 2x2 matrix.
   *  (_hasFrameFocus true/false x _isMouseDown true/false)
   */
  divElement._handleFocusDrawing = function(evtName) {
    if (divElement._hasFrameFocus) {
      //When this element has focus

      if (divElement._isMouseDown) {
        //border
        divElement.style.borderColor = borderColorPressed;
        divElement.style.borderStyle = borderStylePressed;

        //background
        divElement.style.backgroundColor = backgroundColorPressed;

        //caption
        divElement.style.color = captionColorPressed;

        if (btnImagePressed) {
          // divElement.innerHTML = '';
          // divElement.appendChild(btnImagePressed);
          updateImage(btnImagePressed, divElement);
        }
      } else {
        //border
        divElement.style.borderColor = borderColorFocused;
        divElement.style.borderStyle = borderStyleFocused;

        //background
        divElement.style.backgroundColor = backgroundColorFocused;

        //caption
        divElement.style.color = captionColorFocused;

        if (btnImageFocused) {
          // divElement.innerHTML = '';
          // divElement.appendChild(btnImageFocused);
          updateImage(btnImageFocused, divElement);
        }
      }

    } else {
      //When this element doesn't have focus
      if (divElement._isMouseDown) {
        //border
        divElement.style.borderColor = borderColorPressed;
        divElement.style.borderStyle = borderStylePressed;

        //background
        divElement.style.backgroundColor = backgroundColorPressed;

        //caption
        divElement.style.color = captionColorPressed;

        if (btnImagePressed) {
          // divElement.innerHTML = '';
          // divElement.appendChild(btnImagePressed);
          updateImage(btnImagePressed, divElement);
        }

      } else {

        //border
        divElement.style.borderColor = borderColorDefault;
        divElement.style.borderStyle = borderStyleDefault;

        //background
        divElement.style.backgroundColor = backgroundColorDefault;

        //caption
        divElement.style.color = _captionColorDefault;

        if (btnImageDefault) {
          // divElement.innerHTML = '';
          // divElement.appendChild(btnImageDefault);
          updateImage(btnImageDefault, divElement);
        }
      }
    }
  };

  divElement._handleHoverDrawing = function() {

    if (divElement._hasFrameFocus) {
      //When this element has focus
    } else {
      //When this element doesn't have focus
    }
    //border
    if (borderColorHovered) {
      divElement.style.borderColor = borderColorHovered;
    }
    if (borderStyleHovered) {
      divElement.style.borderStyle = borderStyleHovered;
    }

    //background
    if (backgroundColorHovered) {
      divElement.style.backgroundColor = backgroundColorHovered;
    }

    if (captionColorHovered) {
      //caption
      divElement.style.color = captionColorHovered;
    }
    if (btnImageHovered) {
      // divElement.innerHTML = '';
      // divElement.appendChild(btnImageHovered);
      updateImage(btnImageHovered, divElement);
    }
  };
  divElement.style.padding = '0px';

  divElement.style.textAlign = 'center';
  divElement.style.fontSize = (height * captionFontRatio) + 'px';

  divElement.style.lineHeight = (height) + 'px';

  divElement.style.borderWidth = '1px';

  if (borderWidth != null) {
    divElement.style.borderWidth = borderWidth + 'px';
  }

  if (backgroundBoxShadow != null) {
    divElement.style.boxShadow = backgroundBoxShadow;
  }

  divElement.style.borderRadius = (borderRadius + parseInt(divElement.style.borderWidth)) + 'px';

  var childMode = true;

  if (childMode && btnImageDefault) {
    // divElement.innerHTML = '';
    // divElement.appendChild(btnImageDefault);
    updateImage(btnImageDefault, divElement);
  } else if (childMode && caption) {

    var span = document.createElement('span');
    //span.style.position='absolute';
    span.style.width = '100%';
    span.style.marginTop = captionShiftYpx + 'px';
    span.style.display = 'inline-block';
    span.style.textAlign = 'center';
    span.style.fontFamily = 'sans-serif';
    span.appendChild(document.createTextNode(caption));
    divElement.appendChild(span);

  } else if (childMode && fa) {

    var span = document.createElement('span');
    span.style.pointerEvents = 'none';
    span.style.width = '100%';
    span.style.marginTop = captionShiftYpx + 'px';
    span.style.display = 'inline-block';
    span.style.textAlign = 'center';
    span.style.fontFamily = 'sans-serif';
    span.innerHTML = '<i class="' + fa + '"></i>';
    divElement.appendChild(span);
  } else if (!childMode && caption) {
    divElement.style.paddingTop = captionShiftYpx + 'px';
    divElement.appendChild(document.createTextNode(caption));
  }

  divElement._handleFocusDrawing();
  return divElement;

};

// Don't use innerHTML='' because there may be a child below this 'img' element.
// A child that may be a child is a childMenu.
function updateImage(image, parentElement) {
  var imgs = parentElement.querySelectorAll('img');
  if (parentElement.firstChild) {
    parentElement.insertBefore(image, parentElement.firstChild);
  } else {
    parentElement.appendChild(image);
  }
  for (var i = 0; i < imgs.length; i++) {
    var img = imgs[i];
    if (image !== img) {
      parentElement.removeChild(img);
    }
  }
}

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


/**
 * end of CDomPartsBuilder class
 */
module.exports = CDomPartsBuilder;


/***/ }),

/***/ "./src/appearance/CFrameAppearance.js":
/*!********************************************!*\
  !*** ./src/appearance/CFrameAppearance.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var CDomPartsBuilder = __webpack_require__(/*! ./CDomPartsBuilder.js */ "./src/appearance/CDomPartsBuilder.js");
var CFrameComponent = __webpack_require__(/*! ./CFrameComponent.js */ "./src/appearance/CFrameComponent.js");

/**
 * CFrameAppearance class<br>
 * Appearance Model Class for Frame
 *
 */
function CFrameAppearance() {

  var me = this;

  this.showTitleBar = true;
  this.showCloseButton = true;
  this.titleBarCaption = '';
  this.titleBarCaptionFontSize = '12px';
  this.titleBarCaptionFontWeight = 'bold';
  this.titleBarHeight = '24px';
  this.useIframe = false;
  this.useFrame = true;

  this.titleBarClassNameDefault=null;
  this.titleBarClassNameFocused=null;

  this.setUseIFrame = function(value) {
    me.useIframe = value;
    me.useFrame = !value;
    return me;
  };


  /**
   * The position from the left side of the caption. If this value is null, caption will be centered.
   */
  this.titleBarCaptionLeftMargin = '5px';

  this.titleBarColorDefault = null;
  this.titleBarColorFocused = null;
  this.titleBarCaptionColorDefault = '';
  this.titleBarCaptionColorFocused = '';
  this.titleBarCaptionTextShadow = '0 1px 0 rgba(255,255,255,.7)';
  this.titleBarCaptionTextAlign = 'center';

  this.titleBarBorderBottomDefault = '1px solid rgba(0,0,0,0.2)';
  this.titleBarBorderBottomFocused = null;

  this.frameBorderRadius = '6px';

  this.frameBorderWidthDefault = '1px';
  this.frameBorderWidthFocused = this.frameBorderWidthDefault;

  this.frameBorderColorDefault = 'rgba(1, 1, 1, 0.2)';
  this.frameBorderColorFocused = this.frameBorderColorDefault;

  this.frameBorderStyle = 'solid';
  this.frameBoxShadow = '2px 3px 16px rgba(0,0,0,.6)';
  this.frameBackgroundColor = 'transparent';

  this._partsBuilder = null;

  this.frameComponents = [];

  this.frameHeightAdjust = 1;

  this.resizeAreaWidth = 20;
  this.resizeAreaHeight = 20;
  this.resizeAreaOffset = 0;
  this.resizeAreaVisible = false;

  this.getFrameInnerBorderRadius = function(ref, hasFocus) {

    if (!ref) {
      return null;
    }
    if (hasFocus) {
      return {
        frameAppearance: me,
        innerBorderRadius: (parseInt(ref.frameBorderRadius, 10) - parseInt(ref.frameBorderWidthFocused, 10)) + 'px'
      };
    }
    return {
      frameAppearance: me,
      innerBorderRadius: (parseInt(ref.frameBorderRadius, 10) - parseInt(ref.frameBorderWidthDefault, 10)) + 'px'
    };
  };


  this.onInitialize = function() {

    //Add close button if needed
    if (me.showCloseButton) {
      var partsBuilder = me.getPartsBuilder(),
        crossMark0 = '\u274c',
        crossMark1 = '\u2716',
        crossMark2 = '\u274e';


      var btnAppearance = partsBuilder.buildTextButtonAppearance();

      btnAppearance.size = 14;
      btnAppearance.captionShiftYpx = 0;
      btnAppearance.captionFontRatio = 1.0;
      btnAppearance.borderRadius = 2;
      btnAppearance.backgroundColorPressed = 'transparent';
      btnAppearance.backgroundColorDefault = 'transparent';
      btnAppearance.caption = crossMark1;

      btnAppearance.captionColorDefault = 'gray';
      btnAppearance.captionColorFocused = 'gray';
      btnAppearance.captionColorHovered = 'silver';
      btnAppearance.captionColorPressed = 'black';

      btnAppearance.borderWidth = 0;
      btnAppearance.borderColorDefault = '#aaaaaa';
      btnAppearance.borderStyle = 'solid';

      var closeBtnEle = partsBuilder.buildTextButton(btnAppearance);
      var eleLeft = -10;
      var eleTop = -18;
      var eleAlign = 'RIGHT_TOP';

      //closeButton is a special name
      var frameComponent = me.addFrameComponent('closeButton', closeBtnEle, eleLeft, eleTop, eleAlign);
    }
  };

  this.onTitleBarStyleInitialize = function() {

  };

}


CFrameAppearance.prototype.getPartsBuilder = function() {
  var me = this;
  if (me._partsBuilder === null) {
    me._partsBuilder = new CDomPartsBuilder();
  }
  return me._partsBuilder;
};
CFrameAppearance.prototype.initialize = function() {
  var me = this;
  me.onInitialize();
};

/**
 *  Add FrameComponent into frame
 *  FrameComponent is attached to Frame and it moves with Frame.
 *
 * @param id
 * @param myDomElement DOM element.
 * @param x  Relative x coodinate from the snap position specified by alignment
 * @param y  Relative y coodinate from the snap position specified by alignment
 * @param align 'LEFT_TOP' 'CENTER_TOP' 'RIGHT_TOP' 'LEFT_CENTER' 'CENTER_CENTER' 'RIGHT_CENTER' 'LEFT_BOTTOM' 'CENTER_BOTTOM' 'RIGHT_BOTTOM'
 * @returns {CFrameComponent}
 *
 */
CFrameAppearance.prototype.addFrameComponent = function(id, myDomElement, x, y, align, extra) {

  //(id, frame, htmlElement, x, y, align)
  var frameComponent = new CFrameComponent(id, myDomElement, x, y, align, extra);

  if (myDomElement._onTakeFocus && myDomElement._onReleaseFocus) {
    //if this DOM element has special method for focus
    //set focus callback
    frameComponent.setFocusCallback(myDomElement._onTakeFocus, myDomElement._onReleaseFocus);
  }

  this.frameComponents.push(frameComponent);

  return frameComponent;
};


//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

/**
 *  End of CFrameAppearance class
 */
module.exports = CFrameAppearance;


/***/ }),

/***/ "./src/appearance/CFrameComponent.js":
/*!*******************************************!*\
  !*** ./src/appearance/CFrameComponent.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * CFrameComponent class
 * <p>
 * Wrapped DOM element like 'div' to display above the frame<br>
 *
 * ex.An object such as closeButton
 *
 * @param id
 * @param frame
 * @param htmlElement DOM-element
 * @param x relative x-position in the frame respect to align
 * @param y relative y-position in the frame respect to align
 * @param align relative alignment in the frame
 * @constructor
 */
function CFrameComponent(id, htmlElement, x, y, align, extra) {
  var me = this;

  me.id = id;
  me.x = x;
  me.y = y;
  me.frame = null;

  me._focusTakingCallabck = null;
  me._focusReleasingCallabck = null;

  if (align) {
    me.frameComponentAlign = align;
  } else {
    me.frameComponentAlign = CALIGN.LEFT_TOP;
  }
  me.htmlElement = htmlElement;
  me.htmlElement.style.zIndex = 50;
  me.htmlElement.setAttribute('component-id', id);

  if (extra && extra.childMenu) {
    me.childMenu = extra.childMenu;
  } else if (htmlElement.querySelector('.jsframe-child-menu')) {
    me.childMenu = htmlElement.querySelector('.jsframe-child-menu');
  }

}

CFrameComponent.prototype.setFocusCallback = function(focusTakingCallback, focusReleasingCallback) {
  var me = this;
  me._focusTakingCallabck = focusTakingCallback;
  me._focusReleasingCallabck = focusReleasingCallback;
};

/**
 * Set parent frame of this frameComponent
 * @param frame
 */
CFrameComponent.prototype.setFrame = function(frame) {
  var me = this;

  me.frame = frame;
  me.htmlElement.parentObject = frame;
  me.updateAlign();
};

/**
 * Place the FrameComponent relative to the parent's frame.
 * Relocate relative to parent frame when window resize event occurs
 */
CFrameComponent.prototype.updateAlign = function() {

  var me = this;

  var frameComponentAlign = me.frameComponentAlign;

  var frame = me.frame;
  var eleStyle = me.htmlElement.style;
  eleStyle.userSelect = 'none';

  var x = me.x;
  var y = me.y;

  var frameWidth = frame.getWidth();
  var frameHeight = frame.getHeight();
  var eleStyleWidth = eleStyle.width;
  var eleStyleHeight = eleStyle.height;

  if (CALIGN.LEFT_TOP == frameComponentAlign) {
    eleStyle.left = x + 'px';
    eleStyle.top = y + 'px';
  } else if (CALIGN.HCENTER_TOP == frameComponentAlign) {
    eleStyle.left = (parseInt(frameWidth) / 2 - parseInt(eleStyleWidth) / 2 + x) + 'px';
    eleStyle.top = y + 'px';
  } else if (CALIGN.RIGHT_TOP == frameComponentAlign) {
    eleStyle.left = (parseInt(frameWidth) - parseInt(eleStyleWidth) + x) + 'px';
    eleStyle.top = y + 'px';
  } else if (CALIGN.LEFT_VCENTER == frameComponentAlign) {
    eleStyle.left = x + 'px';
    eleStyle.top = (parseInt(frameHeight) / 2 - parseInt(eleStyleHeight) / 2 + y) + 'px';
  } else if (CALIGN.HCENTER_VCENTER == frameComponentAlign) {
    eleStyle.left = (parseInt(frameWidth) / 2 - parseInt(eleStyleWidth) / 2 + x) + 'px';
    eleStyle.top = (parseInt(frameHeight) / 2 - parseInt(eleStyleHeight) / 2 + y) + 'px';
  } else if (CALIGN.RIGHT_VCENTER == frameComponentAlign) {
    eleStyle.left = (parseInt(frameWidth) - parseInt(eleStyleWidth) + x) + 'px';
    eleStyle.top = (parseInt(frameHeight) / 2 - parseInt(eleStyleHeight) / 2 + y) + 'px';
  } else if (CALIGN.LEFT_BOTTOM == frameComponentAlign) {
    eleStyle.left = x + 'px';
    eleStyle.top = (parseInt(frameHeight) - parseInt(eleStyleHeight) + y) + 'px';
  } else if (CALIGN.HCENTER_BOTTOM == frameComponentAlign) {
    eleStyle.left = (parseInt(frameWidth) / 2 - parseInt(eleStyleWidth) / 2 + x) + 'px';
    eleStyle.top = (parseInt(frameHeight) - parseInt(eleStyleHeight) + y) + 'px';
  } else if (CALIGN.RIGHT_BOTTOM == frameComponentAlign) {
    eleStyle.left = (parseInt(frameWidth) - parseInt(eleStyleWidth) + x) + 'px';
    eleStyle.top = (parseInt(frameHeight) - parseInt(eleStyleHeight) + y) + 'px';
  }
};

CFrameComponent.prototype.handleTakingFocus = function() {
  var me = this;
  if (me._focusTakingCallabck) {
    me._focusTakingCallabck();
  }
};

CFrameComponent.prototype.handleReleasingFocus = function() {
  var me = this;
  if (me._focusReleasingCallabck) {
    me._focusReleasingCallabck();
  }
};

/**
 * end of CFrameComponent class
 */

module.exports = CFrameComponent;


/***/ }),

/***/ "./src/appearance/CImageButtonAppearance.js":
/*!**************************************************!*\
  !*** ./src/appearance/CImageButtonAppearance.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var inherit = __webpack_require__(/*! ../utils/Inherit.js */ "./src/utils/Inherit.js")
var CTextButtonAppearance = __webpack_require__(/*! ./CButtonAppearance.js */ "./src/appearance/CButtonAppearance.js");

inherit(CImageButtonAppearance, CTextButtonAppearance);

function CImageButtonAppearance() {


  this.imageDefault = null;
  this.imageHovered = null;
  this.imagePressed = null;
  this.imageFocused = null;

  this.imageStore = {};
}

CImageButtonAppearance.prototype._setImage = function(src, width, height) {
  var me = this;

  var storedImgEle = me.imageStore[src];

  if (storedImgEle) {
    return storedImgEle;
  } else {
    var imgEle = document.createElement('img');
    imgEle.src = src;
    if (width && height) {
      var imgWidth = width;
      var imgHeight = height;
      var imgStyle = 'margin:0px;padding:0px;width:' + imgWidth + 'px;height:' + imgHeight + 'px';
      imgEle.setAttribute('style', imgStyle);
    }
    me.imageStore[src] = imgEle;

    return imgEle;
  }
}
CImageButtonAppearance.prototype.setSrc = function(model) {
  var me = this;
  if (model.default) {
    me.imageDefault = me._setImage(model.default, model.width, model.height);
  }
  if (model.hovered) {
    me.imageHovered = me._setImage(model.hovered, model.width, model.height);
  }
  if (model.pressed) {
    me.imagePressed = me._setImage(model.pressed, model.width, model.height);
  }
  if (model.focused) {
    me.imageFocused = me._setImage(model.focused, model.width, model.height);
  }
}

module.exports = CImageButtonAppearance;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

//export { default as JSFrame } from './JSFrame.js';
module.exports = {
  JSFrame: __webpack_require__(/*! ./JSFrame */ "./src/JSFrame.js")
}



/***/ }),

/***/ "./src/presets/appearance/PresetStyleMaterial.css":
/*!********************************************************!*\
  !*** ./src/presets/appearance/PresetStyleMaterial.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_PresetStyleMaterial_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./PresetStyleMaterial.css */ "./node_modules/css-loader/dist/cjs.js!./src/presets/appearance/PresetStyleMaterial.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_PresetStyleMaterial_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_PresetStyleMaterial_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/presets/appearance/PresetStyleMaterial.js":
/*!*******************************************************!*\
  !*** ./src/presets/appearance/PresetStyleMaterial.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./PresetStyleMaterial.css */ "./src/presets/appearance/PresetStyleMaterial.css");
var ObjectAssigner = __webpack_require__(/*! ../../utils/ObjectAssigner.js */ "./src/utils/ObjectAssigner.js");


function getStyle(fApr, userParam) {

  var srcParam = {
    border: {
      color: 'transparent',
      width: 0,
      radius: 6,

    },
    control: {
      maximizeWithoutTitleBar: false,
      restoreKey: 'Escape',
    },
    titleBar: {
      color: 'white',
      background: 'black',
      leftMargin: 20,
      height: 30,
      fontSize: 12,
      buttonWidth: 36,
      buttonHeight: 16,
      buttonColor: 'white',
      buttons: [
        {
          fa: 'fas fa-times',
          name: 'closeButton',
          visible: true
        },
        {
          fa: 'far fa-window-maximize',
          name: 'maximizeButton',
          visible: true
        },
        {
          fa: 'far fa-window-restore',
          name: 'restoreButton',
          visible: false
        },
        {
          fa: 'far fa-window-minimize',
          name: 'minimizeButton',
          visible: true
        },
        {
          fa: 'fas fa-caret-up',
          name: 'deminimizeButton',
          visible: false
        }

      ],
      buttonsOnLeft: [],
    },


  };

  var param = srcParam;

  if (userParam) {
    //param=Object.assign({},srcParam, userParam);
    ObjectAssigner.objectAssign(srcParam, userParam);

  }


  fApr.showTitleBar = true;
  fApr.showCloseButton = true;

  fApr.titleBarCaptionFontSize = param.titleBar.fontSize + 'px';//'12px';
  fApr.titleBarCaptionFontWeight = 'normal';
  fApr.titleBarCaptionLeftMargin = param.titleBar.leftMargin + 'px';
  fApr.titleBarCaptionColorDefault = param.titleBar.color;
  fApr.titleBarCaptionColorFocused = param.titleBar.color;
  fApr.titleBarCaptionTextShadow = null;
  fApr.titleBarCaptionTextAlign = 'left';

  fApr.titleBarHeight = param.titleBar.height + 'px';// '50px';

  fApr.titleBarColorDefault = param.titleBar.background;
  fApr.titleBarColorFocused = param.titleBar.background;

  fApr.titleBarBorderBottomDefault = 'solid 0px #aaaaaa';
  fApr.titleBarBorderBottomFocused = 'solid 0px #1883d7';

  fApr.frameBorderRadius = param.border.radius + 'px';// '6px';

  //border width
  fApr.frameBorderWidthDefault = param.border.width + 'px';
  fApr.frameBorderWidthFocused = param.border.width + 'px';


  //border color
  fApr.frameBorderColorDefault = param.border.color;
  fApr.frameBorderColorFocused = param.border.color;

  fApr.frameBorderStyle = 'solid';

  //window shadow
  fApr.frameBoxShadow = param.border.shadow;//'2px 2px 10px  rgba(0, 0, 0, 0.5)';

  fApr.frameBackgroundColor = 'transparent';

  fApr.frameComponents = new Array();

  fApr.frameHeightAdjust = 0;//default is 1

  fApr.getTitleBarStyle = function() {

    if (fApr.focusedFrameOnly) {
      return {
        titleBarClassNameDefault: ' ',
        titleBarClassNameFocused: ' '
      };
    } else {
      return {
        titleBarClassNameDefault: ' ',
        titleBarClassNameFocused: ' '
      };
    }
  };

  fApr.onInitialize = function() {

    alignButtons(fApr, param, false);
    alignButtons(fApr, param, true);

  };

  //

  return fApr;
}

function alignButtons(fApr, param, fromLeft) {
  var partsBuilder = fApr.getPartsBuilder();
  var rbtX = 0;
  var buttons;

  if (fromLeft) {
    buttons = param.titleBar.buttonsOnLeft;

  } else {
    buttons = param.titleBar.buttons;
  }

  for (var rbtIdx in buttons) {

    var rbtSrc = buttons[rbtIdx];

    var rbt = partsBuilder.buildTextButtonAppearance();

    //caption
    rbt.fa = rbtSrc.fa;

    rbt.width = param.titleBar.buttonWidth;
    rbt.height = param.titleBar.buttonHeight;

    rbt.borderRadius = 0;
    rbt.borderWidth = 0;

    rbt.borderColorDefault = '#c6c6c6';
    rbt.borderColorFocused = '#fc615c';
    rbt.borderColorHovered = rbt.borderColorFocused;
    rbt.borderColorPressed = '#e64842';

    rbt.borderStyleDefault = 'solid';
    rbt.borderStyleFocused = rbt.borderStyleDefault;
    rbt.borderStyleHovered = rbt.borderStyleDefault;
    rbt.borderStylePressed = rbt.borderStyleDefault;

    //background
    rbt.backgroundColorDefault = 'transparent';
    rbt.backgroundColorFocused = 'transparent';
    rbt.backgroundColorHovered = 'transparent';
    rbt.backgroundColorPressed = 'transparent';

    var colors = getSubColor(param.titleBar.buttonColor);
    rbt.captionColorDefault = param.titleBar.buttonColor;
    rbt.captionColorFocused = param.titleBar.buttonColor;
    rbt.captionColorHovered = colors.hovered;
    rbt.captionColorPressed = colors.pressed;

    rbt.captionShiftYpx = 0;
    rbt.captionFontRatio = 1;

    var rbtEle = partsBuilder.buildTextButton(rbt);

    if (rbtSrc.visible) {
      rbtEle.style.display = 'flex';
    } else {
      if (fromLeft) {
        rbtX -= param.titleBar.buttonWidth;
      } else {
        rbtX += param.titleBar.buttonWidth;
      }
      rbtEle.style.display = 'none';
    }

    var titleBarHeight = parseInt(fApr.titleBarHeight);

    var rbtEleLeft = rbtX;

    //compute vertical center

    var rbtEleTop = -titleBarHeight + (titleBarHeight - rbt.height) / 2;

    var rbtEleAlign;
    if (fromLeft) {
      rbtEleAlign = 'LEFT_TOP';
    } else {
      rbtEleAlign = 'RIGHT_TOP';
    }

    var ndiv;
    if (rbtSrc.childMenuHTML) {

      ndiv = document.createElement('div');
      ndiv.id = rbtSrc.name + '_child_menu';

      ndiv.innerHTML = rbtSrc.childMenuHTML;
      ndiv.style.position = 'absolute';
      ndiv.style.width = (rbtSrc.childMenuWidth ? rbtSrc.childMenuWidth : 200) + 'px';
      ndiv.style.top = (parseInt(rbtEle.style.top, 10) + parseInt(rbtEle.style.height, 10) / 2 + titleBarHeight / 2) + 'px';
      ndiv.style.left = rbtEle.style.left;
      ndiv.style.display = 'none';

      rbtEle.appendChild(ndiv);
    }


    fApr.addFrameComponent(rbtSrc.name, rbtEle, rbtEleLeft, rbtEleTop, rbtEleAlign, { childMenu: ndiv });

    if (fromLeft) {
      rbtX += param.titleBar.buttonWidth;
    } else {
      rbtX += -param.titleBar.buttonWidth;
    }

  }
}


function getSubColor(color) {

  var canvas = document.createElement('canvas');
  canvas.height = 1;
  canvas.width = 1;
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 1, 1);
  var colorData = ctx.getImageData(0, 0, 1, 1).data;

  var r = colorData[0];
  var g = colorData[1];
  var b = colorData[2];
  var alpha = colorData[3] / 255;
  var alpha2 = alpha * 0.85;
  var alpha3 = alpha * 0.75;

  var ret = 'rgb(' + r + ',' + g + ',' + b + ',' + alpha2 + ')';
  var ret2 = 'rgb(' + r + ',' + g + ',' + b + ',' + alpha2 + ')';
  var ret3 = 'rgb(' + r + ',' + g + ',' + b + ',' + alpha3 + ')';
  return { src: ret, hovered: ret2, pressed: ret3 };
}


module.exports.getStyle = getStyle;


/***/ }),

/***/ "./src/presets/appearance/PresetStylePopup.css":
/*!*****************************************************!*\
  !*** ./src/presets/appearance/PresetStylePopup.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_PresetStylePopup_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./PresetStylePopup.css */ "./node_modules/css-loader/dist/cjs.js!./src/presets/appearance/PresetStylePopup.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_PresetStylePopup_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_PresetStylePopup_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/presets/appearance/PresetStylePopup.js":
/*!****************************************************!*\
  !*** ./src/presets/appearance/PresetStylePopup.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./PresetStylePopup.css */ "./src/presets/appearance/PresetStylePopup.css");

function getStyle(fApr) {


  fApr.showTitleBar = false;
  fApr.showCloseButton = true;


  fApr.titleBarCaptionFontSize = '12px';
  fApr.titleBarCaptionFontWeight = 'normal';
  fApr.titleBarCaptionLeftMargin = '10px';
  fApr.titleBarCaptionColorDefault = '#4d494d';
  fApr.titleBarCaptionColorFocused = '#4d494d';

  fApr.titleBarHeight = '5px';

  fApr.titleBarColorDefault = 'white';
  fApr.titleBarColorFocused = 'white';

  fApr.titleBarBorderBottomDefault = null;
  fApr.titleBarBorderBottomFocused = null;

  fApr.frameBorderRadius = '6px';

  //border width
  fApr.frameBorderWidthDefault = '1px';
  fApr.frameBorderWidthFocused = '1px';


  //border color
  fApr.frameBorderColorDefault = '#aaaaaa';
  fApr.frameBorderColorFocused = '#aaaaaa';

  fApr.frameBorderStyle = 'solid';

  //window shadow
  fApr.frameBoxShadow = '2px 2px 5px  rgba(0, 0, 0, 0.5)';

  fApr.frameBackgroundColor = 'white';


  fApr.frameComponents = new Array();

  //adjustment value
  fApr.frameHeightAdjust = 2;//default is 1
  fApr.getTitleBarStyle = function() {

    if (fApr.focusedFrameOnly) {
      return {
        titleBarClassNameDefault: 'jsframe-preset-style-popup-focused',
        titleBarClassNameFocused: 'jsframe-preset-style-popup-focused'
      };
    } else {
      return {
        titleBarClassNameDefault: 'jsframe-preset-style-popup-default',
        titleBarClassNameFocused: 'jsframe-preset-style-popup-focused'
      };
    }
  };
  fApr.onInitialize = function() {


    var partsBuilder = fApr.getPartsBuilder();


    //configure close button appearance[begin]//////////////

    var crossMark0 = '\u274c';
    var crossMark1 = '\u2716';
    var crossMark2 = '\u274e';
    var CROSS_MARK = crossMark1;


    var cbApr = partsBuilder.buildTextButtonAppearance();

    cbApr.width = 20;
    cbApr.height = 20;


    cbApr.borderRadius = 10;
    cbApr.borderWidth = 1;

    cbApr.borderColorDefault = '#cccccc';
    cbApr.borderColorFocused = '#cccccc';
    cbApr.borderColorHovered = '#dddddd';
    cbApr.borderColorPressed = '#eeeeee';

    cbApr.borderStyleDefault = 'solid';
    cbApr.borderStyleFocused = cbApr.borderStyleDefault;
    cbApr.borderStyleHovered = cbApr.borderStyleDefault;
    cbApr.borderStylePressed = cbApr.borderStyleDefault;

    //background
    cbApr.backgroundColorDefault = 'white';
    cbApr.backgroundColorFocused = 'white';
    cbApr.backgroundColorHovered = '#eeeeee';
    cbApr.backgroundColorPressed = '#dddddd';

    cbApr.backgroundBoxShadow = '2px 2px 5px  rgba(0, 0, 0, 0.5)';

    //caption
    cbApr.caption = CROSS_MARK;

    cbApr.captionColorDefault = 'black';
    cbApr.captionColorFocused = 'black';
    cbApr.captionColorHovered = 'white';
    cbApr.captionColorPressed = 'white';

    cbApr.captionShiftYpx = 1;
    cbApr.captionFontRatio = 0.6;

    var closeBtnEle = partsBuilder.buildTextButton(cbApr);
    var eleLeft = 10;
    var eleTop = -6 - parseInt(fApr.titleBarHeight);
    var eleAlign = 'RIGHT_TOP';

    // 'closeButton' is a special name
    fApr.addFrameComponent('closeButton', closeBtnEle, eleLeft, eleTop, eleAlign);

    //configure close button appearance[end]//////////////


  };
  //

  return fApr;


}


module.exports.getStyle = getStyle;


/***/ }),

/***/ "./src/presets/appearance/PresetStyleRedstone.css":
/*!********************************************************!*\
  !*** ./src/presets/appearance/PresetStyleRedstone.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_PresetStyleRedstone_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./PresetStyleRedstone.css */ "./node_modules/css-loader/dist/cjs.js!./src/presets/appearance/PresetStyleRedstone.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_PresetStyleRedstone_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_PresetStyleRedstone_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/presets/appearance/PresetStyleRedstone.js":
/*!*******************************************************!*\
  !*** ./src/presets/appearance/PresetStyleRedstone.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./PresetStyleRedstone.css */ "./src/presets/appearance/PresetStyleRedstone.css");

function getStyle(fApr) {

  fApr.showTitleBar = true;
  fApr.showCloseButton = true;

  fApr.titleBarCaptionFontSize = '12px';
  fApr.titleBarCaptionFontWeight = 'normal';
  fApr.titleBarCaptionLeftMargin = '10px';
  fApr.titleBarCaptionColorDefault = '#9b9a9b';
  fApr.titleBarCaptionColorFocused = '#4d494d';

  fApr.titleBarHeight = '30px';

  fApr.titleBarColorDefault = null;
  fApr.titleBarColorFocused = null;

  fApr.titleBarBorderBottomDefault = 'solid 1px #aaaaaa';
  fApr.titleBarBorderBottomFocused = 'solid 1px #1883d7';

  fApr.frameBorderRadius = '0px';

  //border width
  fApr.frameBorderWidthDefault = '1px';
  fApr.frameBorderWidthFocused = '1px';


  //border color
  fApr.frameBorderColorDefault = '#aaaaaa';
  fApr.frameBorderColorFocused = '#1883d7';

  fApr.frameBorderStyle = 'solid';

  //window shadow
  fApr.frameBoxShadow = null;

  fApr.frameBackgroundColor = 'transparent';


  fApr.frameComponents = new Array();

  //adjustment value
  fApr.frameHeightAdjust = 0;//default is 1

  fApr.getTitleBarStyle = function() {

    if (fApr.focusedFrameOnly) {
      return {
        titleBarClassNameDefault: 'jsframe-preset-style-redstone-focused',
        titleBarClassNameFocused: 'jsframe-preset-style-redstone-focused'
      };
    } else {
      return {
        titleBarClassNameDefault: 'jsframe-preset-style-redstone-default',
        titleBarClassNameFocused: 'jsframe-preset-style-redstone-focused'
      };
    }
  };

  fApr.onInitialize = function() {


    var partsBuilder = fApr.getPartsBuilder();


    {
      //configure close button appearance[begin]//////////////

      var CROSS_MARK = '\u2573';

      var cbApr = partsBuilder.buildTextButtonAppearance();

      cbApr.width = 45;
      cbApr.height = 28;


      cbApr.borderRadius = 0;
      cbApr.borderWidth = 0;

      cbApr.borderColorDefault = '#c6c6c6';
      cbApr.borderColorFocused = '#fc615c';
      cbApr.borderColorHovered = cbApr.borderColorFocused;
      cbApr.borderColorPressed = '#e64842';

      cbApr.borderStyleDefault = 'solid';
      cbApr.borderStyleFocused = cbApr.borderStyleDefault;
      cbApr.borderStyleHovered = cbApr.borderStyleDefault;
      cbApr.borderStylePressed = cbApr.borderStyleDefault;

      //background
      cbApr.backgroundColorDefault = 'white';
      cbApr.backgroundColorFocused = 'white';
      cbApr.backgroundColorHovered = '#e81123';
      cbApr.backgroundColorPressed = '#f1707a';

      //caption
      cbApr.caption = CROSS_MARK;

      cbApr.captionColorDefault = '#9b9a9b';
      cbApr.captionColorFocused = 'black';
      cbApr.captionColorHovered = 'white';
      cbApr.captionColorPressed = 'white';

      cbApr.captionShiftYpx = 1;
      cbApr.captionFontRatio = 0.6;

      var closeBtnEle = partsBuilder.buildTextButton(cbApr);
      var eleLeft = 0;
      var eleTop = -parseInt(fApr.titleBarHeight);
      var eleAlign = 'RIGHT_TOP';

      // 'closeButton' is a special name
      fApr.addFrameComponent('closeButton', closeBtnEle, eleLeft, eleTop, eleAlign);

      //configure close button appearance[end]//////////////
    }

    {
      //configure close button appearance[begin]//////////////

      var MAXIMIZE_MARK = '\u2610';

      var maxApr = partsBuilder.buildTextButtonAppearance();

      maxApr.width = 45;
      maxApr.height = 28;


      maxApr.borderRadius = 0;
      maxApr.borderWidth = 0;

      maxApr.borderColorDefault = '#c6c6c6';
      maxApr.borderColorFocused = '#fc615c';
      maxApr.borderColorHovered = maxApr.borderColorFocused;
      maxApr.borderColorPressed = '#e64842';

      maxApr.borderStyleDefault = 'solid';
      maxApr.borderStyleFocused = maxApr.borderStyleDefault;
      maxApr.borderStyleHovered = maxApr.borderStyleDefault;
      maxApr.borderStylePressed = maxApr.borderStyleDefault;

      //background
      maxApr.backgroundColorDefault = 'white';
      maxApr.backgroundColorFocused = 'white';
      maxApr.backgroundColorHovered = '#e5e5e5';
      maxApr.backgroundColorPressed = '#cccccc';

      //caption
      maxApr.caption = MAXIMIZE_MARK;

      maxApr.captionColorDefault = '#9b9a9b';
      maxApr.captionColorFocused = 'black';
      maxApr.captionColorHovered = 'black';
      maxApr.captionColorPressed = 'black';

      maxApr.captionShiftYpx = 1;
      maxApr.captionFontRatio = 0.55;

      var maxBtnEle = partsBuilder.buildTextButton(maxApr);
      var eleLeft = -46;
      var eleTop = -parseInt(fApr.titleBarHeight);
      var eleAlign = 'RIGHT_TOP';

      // 'closeButton' is a special name
      fApr.addFrameComponent('maximizeButton', maxBtnEle, eleLeft, eleTop, eleAlign);

      //configure close button appearance[end]//////////////
    }

    {
      //configure close button appearance[begin]//////////////

      var MINIMIZE_MARK = '\uff3f';

      var minApr = partsBuilder.buildTextButtonAppearance();

      minApr.width = 45;
      minApr.height = 28;


      minApr.borderRadius = 0;
      minApr.borderWidth = 0;

      minApr.borderColorDefault = '#c6c6c6';
      minApr.borderColorFocused = '#fc615c';
      minApr.borderColorHovered = minApr.borderColorFocused;
      minApr.borderColorPressed = '#e64842';

      minApr.borderStyleDefault = 'solid';
      minApr.borderStyleFocused = minApr.borderStyleDefault;
      minApr.borderStyleHovered = minApr.borderStyleDefault;
      minApr.borderStylePressed = minApr.borderStyleDefault;

      //background
      minApr.backgroundColorDefault = 'white';
      minApr.backgroundColorFocused = 'white';
      minApr.backgroundColorHovered = '#e5e5e5';
      minApr.backgroundColorPressed = '#cccccc';

      //caption
      minApr.caption = MINIMIZE_MARK;

      minApr.captionColorDefault = '#9b9a9b';
      minApr.captionColorFocused = 'black';
      minApr.captionColorHovered = 'black';
      minApr.captionColorPressed = 'black';

      minApr.captionShiftYpx = -2;
      minApr.captionFontRatio = 0.3;

      var minBtnEle = partsBuilder.buildTextButton(minApr);
      var eleLeft = -92;
      var eleTop = -parseInt(fApr.titleBarHeight);
      var eleAlign = 'RIGHT_TOP';

      // 'closeButton' is a special name
      fApr.addFrameComponent('minimizeButton', minBtnEle, eleLeft, eleTop, eleAlign);

      //configure close button appearance[end]//////////////
    }
    {
      //configure close button appearance[begin]//////////////


      var deminApr = partsBuilder.buildTextButtonAppearance();

      deminApr.width = 45;
      deminApr.height = 28;


      deminApr.borderRadius = 0;
      deminApr.borderWidth = 0;

      deminApr.borderColorDefault = '#c6c6c6';
      deminApr.borderColorFocused = '#fc615c';
      deminApr.borderColorHovered = deminApr.borderColorFocused;
      deminApr.borderColorPressed = '#e64842';

      deminApr.borderStyleDefault = 'solid';
      deminApr.borderStyleFocused = deminApr.borderStyleDefault;
      deminApr.borderStyleHovered = deminApr.borderStyleDefault;
      deminApr.borderStylePressed = deminApr.borderStyleDefault;

      //background
      deminApr.backgroundColorDefault = 'white';
      deminApr.backgroundColorFocused = 'white';
      deminApr.backgroundColorHovered = '#e5e5e5';
      deminApr.backgroundColorPressed = '#cccccc';

      //caption
      deminApr.caption = '\u25A3';

      deminApr.captionColorDefault = '#9b9a9b';
      deminApr.captionColorFocused = 'black';
      deminApr.captionColorHovered = 'black';
      deminApr.captionColorPressed = 'black';

      deminApr.captionShiftYpx = 1;
      deminApr.captionFontRatio = 0.6;

      var deminBtnEle = partsBuilder.buildTextButton(deminApr);
      var eleLeft = -92;
      var eleTop = -parseInt(fApr.titleBarHeight);
      var eleAlign = 'RIGHT_TOP';

      deminBtnEle.style.display = 'none';

      // 'closeButton' is a special name
      fApr.addFrameComponent('deminimizeButton', deminBtnEle, eleLeft, eleTop, eleAlign);

      //configure close button appearance[end]//////////////
    }
    {
      //configure close button appearance[begin]//////////////

      var RESTORE_MARK = '\u274F';

      var rbApr = partsBuilder.buildTextButtonAppearance();

      rbApr.width = 45;
      rbApr.height = 28;


      rbApr.borderRadius = 0;
      rbApr.borderWidth = 0;

      rbApr.borderColorDefault = '#c6c6c6';
      rbApr.borderColorFocused = '#fc615c';
      rbApr.borderColorHovered = rbApr.borderColorFocused;
      rbApr.borderColorPressed = '#e64842';

      rbApr.borderStyleDefault = 'solid';
      rbApr.borderStyleFocused = rbApr.borderStyleDefault;
      rbApr.borderStyleHovered = rbApr.borderStyleDefault;
      rbApr.borderStylePressed = rbApr.borderStyleDefault;

      //background
      rbApr.backgroundColorDefault = 'white';
      rbApr.backgroundColorFocused = 'white';
      rbApr.backgroundColorHovered = '#e5e5e5';
      rbApr.backgroundColorPressed = '#cccccc';

      //caption
      rbApr.caption = RESTORE_MARK;

      rbApr.captionColorDefault = '#9b9a9b';
      rbApr.captionColorFocused = 'black';
      rbApr.captionColorHovered = 'black';
      rbApr.captionColorPressed = 'black';

      rbApr.captionShiftYpx = 1;
      rbApr.captionFontRatio = 0.55;

      var restoreBtnEle = partsBuilder.buildTextButton(rbApr);
      var eleLeft = -46;
      var eleTop = -parseInt(fApr.titleBarHeight);
      var eleAlign = 'RIGHT_TOP';

      restoreBtnEle.style.display = 'none';

      // 'closeButton' is a special name
      fApr.addFrameComponent('restoreButton', restoreBtnEle, eleLeft, eleTop, eleAlign);

      //configure close button appearance[end]//////////////
    }


  };
  //

  return fApr;
}


module.exports.getStyle = getStyle;


/***/ }),

/***/ "./src/presets/appearance/PresetStyleToast.js":
/*!****************************************************!*\
  !*** ./src/presets/appearance/PresetStyleToast.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function getStyle(fApr) {


  fApr.showTitleBar = false;
  fApr.showCloseButton = true;


  fApr.titleBarCaptionFontSize = '0px';
  fApr.titleBarCaptionFontWeight = 'normal';
  fApr.titleBarCaptionLeftMargin = '0px';
  fApr.titleBarCaptionColorDefault = 'transparent';
  fApr.titleBarCaptionColorFocused = 'transparent';

  fApr.titleBarHeight = '0px';

  fApr.titleBarColorDefault = 'transparent';
  fApr.titleBarColorFocused = 'transparent';

  fApr.titleBarBorderBottomDefault = null;
  fApr.titleBarBorderBottomFocused = null;

  fApr.frameBorderRadius = '10px';

  //border width
  fApr.frameBorderWidthDefault = '0px';
  fApr.frameBorderWidthFocused = '0px';

  //border color
  fApr.frameBorderColorDefault = 'transparent';
  fApr.frameBorderColorFocused = 'transparent';
  fApr.frameBorderStyle = 'solid';
  fApr.frameBoxShadow = '2px 2px 15px  rgba(0, 0, 0, 0.5)';
  fApr.frameBackgroundColor = 'transparent';


  fApr.frameComponents = [];
  fApr.frameHeightAdjust = 1;//default is 1

  fApr.captionClor = 'darkgray';

  fApr.pullUpDisabled = false;

  fApr.getTitleBarStyle = function() {

    if (fApr.focusedFrameOnly) {
      return {
        titleBarClassNameDefault: ' ',
        titleBarClassNameFocused: ' '
      };
    } else {
      return {
        titleBarClassNameDefault: ' ',
        titleBarClassNameFocused: ' '
      };
    }
  };


  fApr.onInitialize = function() {


    var partsBuilder = fApr.getPartsBuilder();


    //configure close button appearance[begin]//////////////

    var crossMark0 = '\u274c';
    var crossMark1 = '\u2716';
    var crossMark2 = '\u274e';
    var CROSS_MARK = crossMark1;


    var cbApr = partsBuilder.buildTextButtonAppearance();

    cbApr.width = 20;
    cbApr.height = 20;


    cbApr.borderRadius = 10;
    cbApr.borderWidth = 0;

    cbApr.borderColorDefault = '#cccccc';
    cbApr.borderColorFocused = '#cccccc';
    cbApr.borderColorHovered = '#dddddd';
    cbApr.borderColorPressed = '#eeeeee';

    cbApr.borderStyleDefault = 'solid';
    cbApr.borderStyleFocused = cbApr.borderStyleDefault;
    cbApr.borderStyleHovered = cbApr.borderStyleDefault;
    cbApr.borderStylePressed = cbApr.borderStyleDefault;

    //background
    cbApr.backgroundColorDefault = 'transparent';
    cbApr.backgroundColorFocused = 'transparent';
    cbApr.backgroundColorHovered = 'transparent';
    cbApr.backgroundColorPressed = 'transparent';

    cbApr.backgroundBoxShadow = null;// '2px 2px 5px  rgba(0, 0, 0, 0.5)';

    //caption
    cbApr.caption = CROSS_MARK;

    cbApr.captionColorDefault = fApr.captionClor;
    cbApr.captionColorFocused = fApr.captionClor;
    cbApr.captionColorHovered = fApr.captionClor;
    cbApr.captionColorPressed = fApr.captionClor;

    cbApr.captionShiftYpx = 1;
    cbApr.captionFontRatio = 0.6;

    var closeBtnEle = partsBuilder.buildTextButton(cbApr);
    var eleLeft = -6;
    var eleTop = 3;
    var eleAlign = 'RIGHT_TOP';

    // 'closeButton' is a special name
    fApr.addFrameComponent('closeButton', closeBtnEle, eleLeft, eleTop, eleAlign);

    //configure close button appearance[end]//////////////


  };
  //


  return fApr;
}


module.exports.getStyle = getStyle;


/***/ }),

/***/ "./src/presets/appearance/PresetStyleYosemite.css":
/*!********************************************************!*\
  !*** ./src/presets/appearance/PresetStyleYosemite.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_PresetStyleYosemite_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./PresetStyleYosemite.css */ "./node_modules/css-loader/dist/cjs.js!./src/presets/appearance/PresetStyleYosemite.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_PresetStyleYosemite_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_PresetStyleYosemite_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/presets/appearance/PresetStyleYosemite.js":
/*!*******************************************************!*\
  !*** ./src/presets/appearance/PresetStyleYosemite.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./PresetStyleYosemite.css */ "./src/presets/appearance/PresetStyleYosemite.css");
var ObjectAssigner = __webpack_require__(/*! ../../utils/ObjectAssigner.js */ "./src/utils/ObjectAssigner.js");

function getStyle(fApr, userParam) {

  var srcParam = {
    titleBar: {
      greenButton: 'maximize',//'maximize' or 'fullscreen'
    }
  };

  var param = srcParam;

  if (userParam) {
    //param=Object.assign({},srcParam, userParam);
    ObjectAssigner.objectAssign(srcParam, userParam);

  }

  fApr.showTitleBar = true;
  fApr.showCloseButton = true;

  fApr.titleBarCaptionFontSize = '11px';
  fApr.titleBarCaptionFontWeight = 'normal';
  fApr.titleBarCaptionLeftMargin = null;
  fApr.titleBarCaptionColorDefault = '#4d494d';
  fApr.titleBarCaptionColorFocused = '#4d494d';

  fApr.titleBarHeight = '26px';

  fApr.titleBarColorDefault = null;
  fApr.titleBarColorFocused = null;

  fApr.titleBarBorderBottomDefault = '1px solid #b1aeb1';
  fApr.titleBarBorderBottomFocused = fApr.titleBarBorderBottomDefault;

  fApr.frameBorderRadius = '6px';

  //border width
  fApr.frameBorderWidthDefault = '1px';
  fApr.frameBorderWidthFocused = '1px';


  //border color
  fApr.frameBorderColorDefault = '#acacac';
  fApr.frameBorderColorFocused = '#acacac';

  fApr.frameBorderStyle = 'solid';

  //window shadow
  fApr.frameBoxShadow = '0px 0px 20px rgba(0, 0, 0, 0.3)';

  fApr.frameBackgroundColor = 'transparent';


  fApr.frameComponents = new Array();

  fApr.getTitleBarStyle = function() {

    if (fApr.focusedFrameOnly) {
      return {
        titleBarClassNameDefault: 'jsframe-preset-style-yosemite-focused',
        titleBarClassNameFocused: 'jsframe-preset-style-yosemite-focused'
      };
    } else {
      return {
        titleBarClassNameDefault: 'jsframe-preset-style-yosemite-default',
        titleBarClassNameFocused: 'jsframe-preset-style-yosemite-focused'
      };
    }
  };

  fApr.onInitialize = function() {

    var partsBuilder = fApr.getPartsBuilder();

    var img_data_close_hovered = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAWElEQVQoU2NkIBIwEqmOAa6wgZWlH6Sp4fefQjCNxkdRyMjAUPCf4f8CkEJGBsaE/wwME2AaUaxuYGWeD1IAUgjS0PD7byLMaaQrBLmJKKuJ9gyhYCI6HAGlFDALf9s7eQAAAABJRU5ErkJggg==';
    var img_data_maximize_hovered = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAVElEQVQoU2NkIBIwoqvjixFoAIl9WvIBTMMAhkLeGP79IMnPSz46kq8QZN1/hv/2IBMYGRgMQPR/BoYLED7jQZAzwFYTrRDZLdRxI7KJRAcPrvAHAATYKgvLH0fAAAAAAElFTkSuQmCC';
    if (param.titleBar.greenButton === 'fullscreen') {
      img_data_maximize_hovered = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAZElEQVQoU2NkIBIwEqmOAUWhQIKAwL8///czMDAYwAz4tOQjWA1cIUjRhwUfPqArxlDIF8N/nomF0RFdMTaF/xkYGC6gK/605KMhitV8MfwghSCAohhkAy6FKIphniIvePCFKQDzGzsLS+7n2AAAAABJRU5ErkJggg==';
    }
    var img_data_demaximize_hovered = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAiUlEQVQoU2NkwAIEogQMPiz7cAFZihGbQt4Y/v0MjIwLPy/+sAAmj1MhIwODw39GxkSYYrwKQabBFGNVyBfL1///P6MBzFrmf4yFjCCH/2X63w93C+P/C58WfypEdzvYRN5YgQTG///ng61iYDjweclHR6wKkRUTVAhTzPD/fzxeE2FWYQtskBwAKwQ7tVjAL4MAAAAASUVORK5CYII=';
    var img_data_minimize_hovered = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAMUlEQVQoU2NkIBIwEqmOgUYKa7w4Ghj+M9hjdQYjw8GWbT8awFYTrZAYD9HIM8RYDQBsEAwLkq4IAgAAAABJRU5ErkJggg==';
    var img_data_1dot_transparent = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABBJREFUeNpi+P//PwNAgAEACPwC/tuiTRYAAAAASUVORK5CYII=';
    var img_width = 10;
    var img_height = 10;
    var img_style = 'margin:0px;padding:0px;width:' + img_width + 'px;height:' + img_height + 'px';

    var imageMaximize = document.createElement('img');
    imageMaximize.src = img_data_maximize_hovered;
    imageMaximize.setAttribute('style', img_style);

    var imageDemaximize = document.createElement('img');
    imageDemaximize.src = img_data_demaximize_hovered;
    imageDemaximize.setAttribute('style', img_style);

    // var imageFullScreen = document.createElement('img');
    // imageFullScreen.src = img_data_maximize_hovered;
    // imageFullScreen.setAttribute('style', img_style);

    var imageMinimize = document.createElement('img');
    imageMinimize.src = img_data_minimize_hovered;
    imageMinimize.setAttribute('style', img_style);

    var imageClose = document.createElement('img');
    imageClose.src = img_data_close_hovered;
    imageClose.setAttribute('style', img_style);


    var imgTransparent = document.createElement('img');
    imgTransparent.src = img_data_1dot_transparent;
    imgTransparent.setAttribute('style', 'margin:0px;padding:0px;width:6px;height:6px');

    {
      //configure close button appearance[begin]//////////////


      var cbApr = partsBuilder.buildImageButtonAppearance();
      cbApr.imageDefault = imgTransparent;
      cbApr.imageHovered = imageClose;
      cbApr.imagePressed = imageClose;
      cbApr.imageFocused = imgTransparent;
      cbApr.size = 10;

      cbApr.borderRadius = 5;
      cbApr.borderWidth = 1;

      cbApr.borderColorDefault = '#c6c6c6';
      cbApr.borderColorFocused = '#d3524e';
      cbApr.borderColorHovered = cbApr.borderColorFocused;
      cbApr.borderColorPressed = '#e64842';

      cbApr.borderStyleDefault = 'solid';
      cbApr.borderStyleFocused = cbApr.borderStyleDefault;
      cbApr.borderStyleHovered = cbApr.borderStyleDefault;
      cbApr.borderStylePressed = cbApr.borderStyleDefault;

      //background
      cbApr.backgroundColorDefault = '#d0d0d0';
      cbApr.backgroundColorFocused = '#fc615c';
      cbApr.backgroundColorHovered = cbApr.backgroundColorFocused;
      cbApr.backgroundColorPressed = cbApr.backgroundColorDefault;
      cbApr.setSrc({
        default: img_data_1dot_transparent,
        focused: img_data_1dot_transparent,
        hovered: img_data_close_hovered,
        pressed: img_data_close_hovered,
      });

      var closeBtnEle = partsBuilder.buildButton(cbApr);
      var eleLeft = 8;
      var eleTop = -19;
      var eleAlign = 'LEFT_TOP';

      // 'closeButton' is a special name
      fApr.addFrameComponent(param.closeButtonName || 'closeButton', closeBtnEle, eleLeft, eleTop, eleAlign);

      //prepare [minimize button]
      var minBtnApr = partsBuilder.buildImageButtonAppearance(cbApr);
      minBtnApr.borderColorDefault = '#c6c6c6';
      minBtnApr.borderColorFocused = '#e6b347';
      minBtnApr.borderColorHovered = minBtnApr.borderColorFocused;
      minBtnApr.borderColorPressed = '#e1a12d';
      minBtnApr.backgroundColorDefault = '#d0d0d0';
      minBtnApr.backgroundColorFocused = '#fdbe40';
      minBtnApr.backgroundColorHovered = minBtnApr.backgroundColorFocused;
      minBtnApr.backgroundColorPressed = minBtnApr.backgroundColorDefault;
      minBtnApr.imageDefault = imgTransparent;
      minBtnApr.imageHovered = imageMinimize;
      minBtnApr.imagePressed = imageMinimize;
      minBtnApr.imageFocused = imgTransparent;

      var minBtnEle = partsBuilder.buildButton(minBtnApr);
      var deminimizeBtnEle = partsBuilder.buildButton(minBtnApr);
      deminimizeBtnEle.style.display = 'none';
      var eleLeft = 28;
      var eleTop = -19;
      var eleAlign = 'LEFT_TOP';
      fApr.addFrameComponent('minimizeButton', minBtnEle, eleLeft, eleTop, eleAlign);
      fApr.addFrameComponent('deminimizeButton', deminimizeBtnEle, eleLeft, eleTop, eleAlign);


      // prepare [maximize button]
      //configure zoom button appearance[begin]//////////////
      var maxBtnApr = partsBuilder.buildImageButtonAppearance(cbApr);
      maxBtnApr.borderColorDefault = '#c6c6c6';
      maxBtnApr.borderColorFocused = '#67b657';
      maxBtnApr.borderColorHovered = maxBtnApr.borderColorFocused;
      maxBtnApr.borderColorPressed = '#00af38';
      maxBtnApr.backgroundColorDefault = '#d0d0d0';
      maxBtnApr.backgroundColorFocused = '#34ca49';
      maxBtnApr.backgroundColorHovered = maxBtnApr.backgroundColorFocused;
      maxBtnApr.backgroundColorPressed = maxBtnApr.backgroundColorDefault;
      maxBtnApr.imageDefault = imgTransparent;
      maxBtnApr.imageHovered = imageMaximize;
      maxBtnApr.imagePressed = imageMaximize;
      maxBtnApr.imageFocused = imgTransparent;

      var zoomBtnEle = partsBuilder.buildButton(maxBtnApr);


      var demaxBtnApr = partsBuilder.buildImageButtonAppearance(cbApr);
      demaxBtnApr.borderColorDefault = '#c6c6c6';
      demaxBtnApr.borderColorFocused = '#67b657';
      demaxBtnApr.borderColorHovered = demaxBtnApr.borderColorFocused;
      demaxBtnApr.borderColorPressed = '#00af38';
      demaxBtnApr.backgroundColorDefault = '#d0d0d0';
      demaxBtnApr.backgroundColorFocused = '#34ca49';
      demaxBtnApr.backgroundColorHovered = demaxBtnApr.backgroundColorFocused;
      demaxBtnApr.backgroundColorPressed = demaxBtnApr.backgroundColorDefault;
      demaxBtnApr.imageDefault = imgTransparent;
      demaxBtnApr.imageHovered = imageDemaximize;
      demaxBtnApr.imagePressed = imageDemaximize;
      demaxBtnApr.imageFocused = imgTransparent;
      var demaxBtnEle = partsBuilder.buildButton(demaxBtnApr);
      demaxBtnEle.style.display = 'none';

      var eleLeft = 48;
      var eleTop = -19;
      var eleAlign = 'LEFT_TOP';


      fApr.addFrameComponent('dezoomButton', demaxBtnEle, eleLeft, eleTop, eleAlign);
      fApr.addFrameComponent('zoomButton', zoomBtnEle, eleLeft, eleTop, eleAlign);

      //configure zoom button appearance[end]//////////////
    }
    //

  };
  //

  return fApr;
}

module.exports.getStyle = getStyle;


/***/ }),

/***/ "./src/presets/window/PresetWindowYosemite.js":
/*!****************************************************!*\
  !*** ./src/presets/window/PresetWindowYosemite.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mergeDeeply = __webpack_require__(/*! merge-deeply */ "./node_modules/merge-deeply/lib/merge-deeply.js");

function getPreset(param) {

  var result = {};
  result.appearanceName = 'yosemite';
  result.appearanceParam = {};

  var presetParam = {};

  if (param) {
    presetParam = param;
  }

  var isFullScreen = presetParam.maximizeButtonBehavior === 'fullscreen';
  var minimizeButton = presetParam.minimizeButtonBehavior === 'minimize' ? 'minimizeButton' : null;
  var hideButton1 = presetParam.minimizeButtonBehavior === 'hide' ? 'minimizeButton' : null;
  var hideButton2 = presetParam.closeButtonBehavior === 'hide' ? 'custom-close-button' : null;
  var windowControlParam = presetParam.control;

  var closeButtonNameByCloseButtonBehavior = hideButton2;
  var closeButtonName = presetParam.closeButtonName;

  if (isFullScreen) {
    result.appearanceParam.titleBar = {
      greenButton: 'fullscreen',//'maximize' icon or 'fullscreen' icon
    };
  }
  // Set this to 'closeButton' to automatically close when clicking
  result.appearanceParam.closeButtonName = closeButtonNameByCloseButtonBehavior || closeButtonName || 'closeButton';

  result.setupPresetWindow = function(frame) {
    var defaultWindowControlParam = {
      maximizeButton: 'zoomButton',
      maximizeParam: {
        fullScreen: isFullScreen,// true:maximized without title bar,false:maximized with title bar
        restoreKey: 'Escape',//Set key code from https://www.w3.org/TR/uievents-code/#keyboard-key-codes
      },

      demaximizeButton: 'dezoomButton',
      deminimizeButton: 'deminimizeButton',
      minimizeButton: minimizeButton,
      hideButtons: [hideButton1, hideButton2],
      hideParam: {
        align: 'CENTER_CENTER',//ABSOLUTE:If you want the window to disappear after transitioning to the position you specified

        duration: 300
      },
      dehideParam: {
        duration: 300
      },
      styleDisplay: 'inline',
      animation: true,
      animationDuration: 100,//The whole animation duration(millisec)
    };

    if (windowControlParam) {
      mergeDeeply({ op: 'overwrite-merge', object1: defaultWindowControlParam, object2: windowControlParam });
    }

    frame.setControl(defaultWindowControlParam);
  };
  return result;
}


module.exports.getPresetWindow = getPreset;


/***/ }),

/***/ "./src/utils/CSimpleLayoutAnimator.js":
/*!********************************************!*\
  !*** ./src/utils/CSimpleLayoutAnimator.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var CTimer = __webpack_require__(/*! ./CTimer.js */ "./src/utils/CTimer.js");

/**
 * CSimpleLayoutAnimator class
 * Class for moving animation · scaling animation of frame.
 * <p>
 * @constructor
 */
function CSimpleLayoutAnimator() {

  this.fps = 30;
  this.durationMillis = 200;
  this.targetFrame = null;

  this._crrAlpha = 1.0;
  this._toAlpha = 1.0;

  //current width/height
  this._crrWidth = 0;
  this._crrHeight = 0;
  this._toWidth = 0;
  this._toHeight = 0;

  //current position(x,y)
  //this._crrX = 0;
  //this._crrY = 0;
  this._toX = 0;
  this._toY = 0;


  this.pinnedAnimationEnabled = false;
  this._pinX = 0;
  this._pinY = 0;
  this._pinAnchor = null;

}

/**
 * Set CIFrame object to be resized
 * @param ciframe
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.set = function(ciframe) {
  var me = this;
  me.targetFrame = ciframe;


  me.fromWidth(ciframe.getWidth());
  me.fromHeight(ciframe.getHeight());

  me.toWidth(ciframe.getWidth());
  me.toHeight(ciframe.getHeight());

  var crrPos = ciframe.getPosition();

  me.fromPosition(crrPos.x, crrPos.y, crrPos.anchor);


  return me;

};

/**
 * Get CIFrame object
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.get = function() {
  var me = this;
  return me.targetFrame;
};

/**
 * Set animation duration time millis
 * @param durationMillis
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.setDuration = function(durationMillis) {
  var me = this;

  me.durationMillis = durationMillis;
  return me;
};

/**
 * Set expected FPS
 * @param fps
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.setFPS = function(fps) {
  var me = this;
  me.fps = fps;
  return me;
};

/**
 * Set PIN position
 * @param x
 * @param y
 * @param anchor Position where animation starts from.Expected parameters as follows.
 'LEFT_TOP':Default.Specify the position starting from the upper left.
 'CENTER_TOP'
 'RIGHT_TOP'
 'LEFT_CENTER'
 'CENTER_CENTER'
 'RIGHT_CENTER'
 'LEFT_BOTTOM'
 'CENTER_BOTTOM'
 'RIGHT_BOTTOM'
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.fromPosition = function(x, y, anchor) {
  var me = this;
  me.pinnedAnimationEnabled = true;

  me._pinX = x;
  me._pinY = y;

  me.toPosition(x, y);

  if (anchor) {
    me._pinAnchor = anchor;
  }
  return me;
};
/**
 * Set resizeFrom width
 * @param fromWidth
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.fromWidth = function(fromWidth) {
  var me = this;
  me._crrWidth = fromWidth;

  return me;
};

/**
 * Set resizeFrom height
 * @param fromHeight
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.fromHeight = function(fromHeight) {
  var me = this;
  me._crrHeight = fromHeight;

  return me;
};

/**
 * Set resizeTo width
 * @param toWidth
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toWidth = function(toWidth) {
  var me = this;
  me._toWidth = toWidth;

  return me;
};

/**
 * Set resizeTo height
 * @param toHeight
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toHeight = function(toHeight) {
  var me = this;
  me._toHeight = toHeight;
  return me;
};

/**
 * Set from alpha
 * @param fromAlpha
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.fromAlpha = function(fromAlpha) {
  var me = this;
  me._crrAlpha = fromAlpha;

  return me;
};

/**
 * Set to alpha
 * @param toAlpha
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toAlpha = function(toAlpha) {
  var me = this;
  me._toAlpha = toAlpha;

  return me;
};

/**
 * Get CIFrame object
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.ease = function(ease) {
  var me = this;
  me._ease=ease;
  return me;
};

/**
 * Set move to position
 * @param x
 * @param y
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toPosition = function(x, y) {
  var me = this;
  me._toX = x;
  me._toY = y;
  return me;
};

/**
 * Set move to x
 * @param x
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toX = function(x) {
  var me = this;
  me._toX = x;
  return me;
};

/**
 * Set move to y
 * @param t
 * @returns {*}
 */
CSimpleLayoutAnimator.prototype.toY = function(t) {
  var me = this;
  me._toY = t;
  return me;
};


CSimpleLayoutAnimator.prototype.start = function(waitMillis, requestFocusEnabled) {


  var me = this;

  var fromWidth = me._crrWidth;
  var fromHeight = me._crrHeight;

  var fromX = me._pinX;
  var fromY = me._pinY;

  var fromAlpha = me._crrAlpha;


  return new Promise(function(resolve, reject) {


    var numOfSteps = parseInt(me.fps * (me.durationMillis / 1000));
    if (numOfSteps == 0) {
      numOfSteps = 1;
    }

    var deltaWidth = (me._toWidth - fromWidth) / numOfSteps;
    var deltaHeight = (me._toHeight - fromHeight) / numOfSteps;

    var deltaX = (me._toX - fromX) / numOfSteps;
    var deltaY = (me._toY - fromY) / numOfSteps;

    var deltaAlpha = (me._toAlpha - fromAlpha) / numOfSteps;
    if(me._ease){
      deltaAlpha=deltaAlpha/1.24;
    }

    var unitMillis = me.durationMillis / numOfSteps;

    var idx = 0;


    function loop() {
      var timer = new CTimer();

      timer.setIntervalMillis(unitMillis);

      timer.setCallback(function(timer) {

        if (idx == numOfSteps) {

          var _width = me._toWidth;
          var _height = me._toHeight;

          var _x = fromX + deltaX * idx;
          var _y = fromY + deltaY * idx;

          var _alpha = me._toAlpha;

          if (me.pinnedAnimationEnabled) {
            //me.targetFrame._setPositionInternally(me._pinX, me._pinY, me._pinAnchor, _width, _height);

            me.targetFrame._setPositionInternally(_x, _y, me._pinAnchor, _width, _height);
          }


          if (me.targetFrame.htmlElement.style) {
            me.targetFrame.htmlElement.style.opacity = _alpha;
          }

          //me.targetFrame.resizeDirect(_width, _height,false);
          me.targetFrame.setSize(_width, _height, true);

          me._crrWidth = _width;
          me._crrHeight = _height;

          me._pinX = _x;
          me._pinY = _y;
        }

        if (idx == (numOfSteps + 1)) {
          //Stop timer after last draw update.
          timer.stopTimer();

          if (me.targetFrame.htmlElement.style) {
            me.targetFrame.htmlElement.style.opacity = me._toAlpha;
          }
          resolve(me);
          return;
        }


        var _width = fromWidth + deltaWidth * idx;
        var _height = fromHeight + deltaHeight * idx;

        var _x = fromX + deltaX * idx;
        var _y = fromY + deltaY * idx;

        var _alpha = fromAlpha + deltaAlpha * idx;

        if (me.pinnedAnimationEnabled) {
          //me.targetFrame._setPositionInternally(me._pinX, me._pinY, me._pinAnchor, _width, _height);
          me.targetFrame._setPositionInternally(_x, _y, me._pinAnchor, _width, _height);
        }

        if (me.targetFrame.htmlElement.style) {
          me.targetFrame.htmlElement.style.opacity = _alpha;
        }

        //me.targetFrame.resizeDirect(_width, _height,false);
        me.targetFrame.setSize(_width, _height, true);

        if (idx == 0) {

          //check window existence
          var wmgr = me.targetFrame.parentCanvas;
          if (wmgr) {
            var _targetFrame = wmgr.getWindow(me.targetFrame.id);
            if (_targetFrame) {
              me.targetFrame.show({ requestFocus: requestFocusEnabled });
            } else {
              //the target window must be deleted.
            }
          }
        }

        idx++;
      });


      timer.startTimer();
    }

    if (waitMillis) {

      var waiter = new CTimer();
      waiter.setIntervalMillis(waitMillis);
      waiter.setCallback(function(_timer) {
        _timer.stopTimer();

        loop();
      });
      waiter.startTimer();
    } else {
      loop();
    }


  });

};//start

/**
 * end of CSimpleLayoutAnimator class
 */
//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-


module.exports = CSimpleLayoutAnimator;


/***/ }),

/***/ "./src/utils/CTimer.js":
/*!*****************************!*\
  !*** ./src/utils/CTimer.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * CTimer class<br>
 *
 * How to use:
 *  var timer = new CTimer();
 *    var value = 0;
 *
 *    timer.setCallback(function (timerObj) {
 *        value++;
 *        console.log(value);
 *        if (value == 100) {
 *            timerObj.stopTimer();
 *        }
 *    });
 *    timer.setIntervalMillis(100);
 *    timer.startTimer();
 *
 * @author Tom Misawa (riversun.org@gmail.com)
 */
var CTimer =
  (function() {
    function CTimer() {
      var me = this;

      me._timerId = null;
      me._isRunning = false;
      me._timerInterval = 0;

      me._internalCallback = _internalCallback;
      me._timerMethod = null;


      function _internalCallback() {
        if (me._timerMethod) {
          me._timerMethod(me);
        }
        if (me._isRunning) {
          clearTimeout(me._timerId);
          me._timerId = setTimeout(me._internalCallback, me._timerInterval);
        }
      }
    }

    CTimer.prototype.setCallback = function(callback_func) {
      var me = this;
      me._timerMethod = callback_func;
      return me;
    };

    CTimer.prototype.setIntervalMillis = function(interval) {
      var me = this;
      me._timerInterval = interval;
      return me;
    };

    CTimer.prototype.stopTimer = function() {
      var me = this;
      me._isRunning = false;
      return me;
    };

    CTimer.prototype.startTimer = function() {
      var me = this;
      if (me._timerInterval > 0) {
        me._timerId = setTimeout(me._internalCallback, me._timerInterval);
        me._isRunning = true;

      }
      return me;
    };


    return CTimer;
  })();
/**
 * end of CTimer class
 */
//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
module.exports = CTimer;


/***/ }),

/***/ "./src/utils/Inherit.js":
/*!******************************!*\
  !*** ./src/utils/Inherit.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Inheritance function
 *
 * @param subClass
 * @param baseClass
 */
function inherit(subClass, baseClass) {

  function clazz() {
  }

  clazz.prototype = baseClass.prototype;
  subClass.prototype = new clazz();

  subClass.prototype.constructor = subClass;
  subClass.superConstructor = baseClass;
  subClass.superClass = baseClass.prototype;

}

/**
 * End of inheritance function
 */

//+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-

module.exports = inherit;

/***/ }),

/***/ "./src/utils/ObjectAssigner.js":
/*!*************************************!*\
  !*** ./src/utils/ObjectAssigner.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _typeof =
    typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
        ? function (obj) {
            return typeof obj;
        }
        : function (obj) {
            return obj &&
            typeof Symbol === "function" &&
            obj.constructor === Symbol &&
            obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
        };

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

function isObject(item) {
    return (
        item &&
        (typeof item === "undefined" ? "undefined" : _typeof(item)) === "object" &&
        !Array.isArray(item)
    );
}

function objectAssign(target) {
    for (
        var _len = arguments.length,
            sources = Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
        _key < _len;
        _key++
    ) {
        sources[_key - 1] = arguments[_key];
    }

    if (!sources.length) return target;
    var source = sources.shift();

    if (isObject(target) && isObject(source)) {
        for (var key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, _defineProperty({}, key, {}));
                objectAssign(target[key], source[key]);
            } else {
                Object.assign(target, _defineProperty({}, key, source[key]));
            }
        }
    }
    return objectAssign.apply(undefined, [target].concat(sources));
}



module.exports.objectAssign = objectAssign;


/***/ }),

/***/ "./src/utils/WindowEventHelper.js":
/*!****************************************!*\
  !*** ./src/utils/WindowEventHelper.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CSimpleLayoutAnimator = __webpack_require__(/*! ./CSimpleLayoutAnimator.js */ "./src/utils/CSimpleLayoutAnimator.js");
var CALIGN = __webpack_require__(/*! ../CCommon.js */ "./src/CCommon.js");
var mergeDeeply = __webpack_require__(/*! merge-deeply */ "./node_modules/merge-deeply/lib/merge-deeply.js");
var EventListenerHelper = __webpack_require__(/*! event-listener-helper */ "./node_modules/event-listener-helper/lib/event-listener-helper.js");

function WindowEventHelper(model) {

  this.eventListenerHelper = new EventListenerHelper();
  this.windowMode = 'default';
  this.styleDisplay = 'flex';
  this.horizontalAlign = 'left';
  this.verticalAlign = 'top';

  this.keyListener = null;

  this.minimizeButton = null;
  this.maximizeButton = null;
  this.demaximizeButton = null;
  this.deminimizeButton = null;

  this.opts = model;

  this.isWindowManagerFixed = model.frame.jsFrame.isWindowManagerFixed;

  if (model.styleDisplay) {
    this.styleDisplay = model.styleDisplay;
  }
  if (model.minimizeButton) {
    this.minimizeButton = model.minimizeButton;
  }
  if (model.deminimizeButton) {
    this.deminimizeButton = model.deminimizeButton;
  }
  if (model.maximizeButton) {
    this.maximizeButton = model.maximizeButton;
  }
  if (model.demaximizeButton) {
    this.demaximizeButton = model.demaximizeButton;
  }

  if (model.hideButton) {
    this.hideButton = model.hideButton;
  }
  if (model.hideButtons) {
    this.hideButtons = model.hideButtons;
  }

  this.maximizeParam = model.maximizeParam;
  this.demaximizeParam = model.demaximizeParam;
  this.minimizeParam = model.minimizeParam;
  this.deminimizeParam = model.deminimizeParam;
  this.hideParam = model.hideParam;
  this.dehideParam = model.dehideParam;


  if (model.horizontalAlign) {
    this.horizontalAlign = model.horizontalAlign;
  }
  if (model.verticalAlign) {
    this.verticalAlign = model.verticalAlign;
  }


  this.animationEnabled = false;
  this.animationDuration = 100;
  this.frame = model.frame;
  this.hideFrameBorder = true;
  this.hideTitleBar = true;

  this.restoreKey = null;
  this.restoreDuration = null;
  this.restoreCallback = null;

  this.statsStore = {};

  if (model.animation) {
    this.animationEnabled = model.animation;
  }
  if (model.animationDuration) {
    this.animationDuration = model.animationDuration;
  }
  this.eventListeners = {};


  //If the user changes the window size when the window is maximized state,
  // adjust the size so that window looks maximized.
  this.resizeListener = this.handleOnResize.bind(this);

  if (this.maximizeParam && this.maximizeParam.matchParent) {
    this.resizeListener = this.handleOnVirtualResize.bind(this);
  }


}

WindowEventHelper.MATCH_PARENT_CHANGE_MARKER_ATTR = '__jsframe-mp-marker';

WindowEventHelper.prototype.on = function(eventType, callback) {
  var me = this;
  me.eventListeners[eventType] = callback;
};

//---------------------------------------------------------------------------------------------------------------------
WindowEventHelper.prototype.doMaximize = function(model) {
  var me = this;

  if (me.windowMode === 'hid') {
    throw Error('[JSrame] It is not possible to change directly from the hid state to the maximized state');
    return;
  }


  if (me.windowMode === 'maximized' || me.windowMode === 'maximizing') {
    // If it's already 'maximized' status, it doesn't do anything.
    return;
  }

  me.windowMode = 'maximizing';


  var frame = me.frame;

  if (model && model.matchParent) {
    // The div element does not issue the resize event. Furthermore,
    // div is specified as 100%, so style.width is always 100%.
    // So I want to get the clientWidth but I can't get it with mutationObserver.
    // Therefore, we adopt a mechanism to catch the parent window
    // resize event and change the attribute of the parent window content
    // by differentiation to catch it.
    var windowManager = frame.getWindowManager();
    var parentElement = windowManager.getParentElement();

    if (!me.matchParentResizeObserver) {
      var matchParentResizeObserver = new MutationObserver(function() {
        // console.log("on virtual resize");
        me.resizeListener();
      });
      matchParentResizeObserver.observe(parentElement, {
        attributeFilter: [WindowEventHelper.MATCH_PARENT_CHANGE_MARKER_ATTR],
        attributes: true
      });
      me.matchParentResizeObserver = matchParentResizeObserver;
    }
  }
    //set onresize listener
  //window.addEventListener('resize', me.resizeListener);
  else if (!me.eventListenerHelper.hasEventListener(window, 'resize', 'window-resize-listener')) {
    me.eventListenerHelper.addEventListener(window, 'resize', me.resizeListener,
      { listenerName: 'window-resize-listener' });
  }

  //Remember the status of the window before maximizing the window size
  me.saveCurrentWindowStats('maximize_mode');

  me.hideTitleBar = model ? model.fullScreen : false;

  if (me.hideTitleBar) {

    //Hide only the currently visible FrameComponent
    //ウィンドウのモードを変更する前の今の状態で可視状態にあるフレームコンポーネント（閉じるボタン類）を不可視にする
    //(タイトルバー非表示の場合には最大化するときのアニメーションでフレームコンポーネントを見せないようにする)
    frame.hideAllVisibleFrameComponents();

    //またhideAllVisibleFrameComponentを実施するときに、個別のhideFrameComponentやshowFrameComponentを実行すると
    //管理ステートが破綻するため、タイトルバー非表示の場合はどうせ操作できないということもあり
    //hideFrameComponent や showFrameComponentは実行しない

  } else {

    //Process required for maximization
    if (me.maximizeButton) {
      frame.hideFrameComponent(me.maximizeButton);
    }
    if (me.demaximizeButton) {
      frame.showFrameComponent(me.demaximizeButton, me.styleDisplay);
    }
  }


  frame.setMovable(false);
  frame.setResizable(false);


  if (model && model.restoreKey) {
    me.restoreKey = model.restoreKey;
  }
  if (model && model.restoreDuration) {
    me.restoreDuration = model.restoreDuration;
  }
  if (model && model.restoreCallback) {
    me.restoreCallback = model.restoreCallback;
  }
  //Render maximization itself
  me.renderMaximizedMode({
    animation: me.animationEnabled,
    callback: (model && model.callback) ? model.callback : null, //set maximized finished callback
    duration: (model && model.duration) ? model.duration : null,
    matchParent: (model && model.matchParent) ? model.matchParent : false,
  });
};


/**
 * Render window as a maximized mode( full screen )
 */
WindowEventHelper.prototype.renderMaximizedMode = function(model) {
  var me = this;
  var frame = me.frame;
  var from = me.loadWindowStats('maximize_mode');

  var _toX = 0;
  var _toY = 0;
  var _toWidth = 0;
  var _toHeight = 0;

  //compute position and size[begin]
  if (me.hideTitleBar) {
    _toX = 0;
    _toY = -from.titleBarHeight;
  }

  var parentWidth = window.innerWidth;
  var parentHeight = window.innerHeight;

  if (model.matchParent) {
    // If matchParent is specified
    // When maximizing, use the size of parentElement specified at initialization
    // ParentlElement is often used only for adjusting the display order.
    // Therefore, only if matchParent is specified, match the size of parentElement
    var windowManager = frame.getWindowManager();
    var parentElement = windowManager.getParentElement();
    parentWidth = parentElement.clientWidth;
    parentHeight = parentElement.clientHeight;
  }

  if (me.hideFrameBorder) {
    _toWidth = parentWidth;
    _toHeight = parentHeight + (me.hideTitleBar ? from.titleBarHeight : 0);
  } else {
    _toWidth = parentWidth - from.frameBorderWidthDefault * 2;
    _toHeight = parentHeight - from.frameBorderWidthDefault * 2 + (me.hideTitleBar ? from.titleBarHeight : 0);
  }
  //compute position and size[end]

  if (me.horizontalAlign == 'right') {
    _toX = -_toWidth;
  }
  if (me.verticalAlign == 'bottom') {
    _toY = -_toHeight;
  }


  //render position and size[begin]
  var funcDoRender = function(opt) {

    var disableCallback = opt && opt.disableCallback;

    frame.setPosition(_toX, _toY);

    if (me.hideFrameBorder) {
      frame.frameBorderWidthDefault = 0;
      frame.frameBorderWidthFocused = 0;
      frame.htmlElement.style.borderWidth = '0px';
    }
    frame.setSize(_toWidth, _toHeight, true);

    if (disableCallback) {
      return;
    }

    if (me.hideTitleBar) {
      // when full screen mode(means hidden title bar)

      if (me.restoreKey) {
        me.keyListener = function(event) {
          if (event.code === me.restoreKey) {
            me.doCommand('restore');
          }
        };
      }
      window.addEventListener('keydown', me.keyListener);

      //add keylistener for inside the iframe
      if (frame.iframe) {
        frame.iframe.contentWindow.addEventListener('keydown', me.keyListener);
      }
    }

    me.windowMode = 'maximized';


    if (model && model.callback) {
      model.callback(me.frame, { eventType: 'maximized' });
    }
    if (me.eventListeners['maximized']) {
      me.eventListeners['maximized'](me.frame, { eventType: 'maximized' });
    }

  };// end of funcDoRender


  if (model && model.animation) {


    me.animateFrame({
      frame: frame,
      from: from,
      to: {
        left: _toX,
        top: _toY,
        width: _toWidth,
        height: _toHeight
      },
      duration: model.duration ? model.duration : me.animationDuration,
      callback: funcDoRender
    });
  } else {
    if (model && model.caller === 'handleOnResize') {
      funcDoRender({ disableCallback: true });
    } else {
      funcDoRender();
    }
  }
  //render position and size[end]
};

WindowEventHelper.prototype.getWindowMode = function() {
  return this.windowMode;
};
/**
 * Restore window from maximized mode
 */
WindowEventHelper.prototype.doDemaximize = function(model) {
  var me = this;
  var frame = me.frame;

  if (me.windowMode === 'hid') {
    //console.error('demaximize(=recovery from maximized) cannot be performed in hid state.');
    throw Error('[JSFrame] demaximize(=recovery from maximized) cannot be performed in hid state.');
    return;
  }

  if (!me.hasWindowStats('maximize_mode')) {
    return;
  }

  if (me.hideTitleBar) {

  } else {
    if (me.maximizeButton) {
      frame.showFrameComponent(me.maximizeButton, me.styleDisplay);
    }
    if (me.demaximizeButton) {
      frame.hideFrameComponent(me.demaximizeButton);
    }
  }

  me.restoreWindow({
    restorePosition: true,
    restoreMode: 'maximize_mode',
    animation: me.animationEnabled,
    callback: (model && model.callback) ? model.callback : null,
    forceShowFrameComponents: (me.animationEnabled && me.hideTitleBar),
    duration: (model && model.duration) ? model.duration : null,
    eventType: 'demaximized'
  });
};


/**
 * Called when changing the window size by user operation in maximized mode
 */
WindowEventHelper.prototype.handleOnResize = function() {
  var me = this;
  me.renderMaximizedMode({
    caller: 'handleOnResize',
    //matchParent: true
  });
};
WindowEventHelper.prototype.handleOnVirtualResize = function() {
  var me = this;
  me.renderMaximizedMode({
    caller: 'handleOnResize',
    matchParent: true
  });
};

//---------------------------------------------------------------------------------------------------------------------

/**
 * Make window minimized mode
 */
WindowEventHelper.prototype.doMinimize = function(model) {
  var me = this;

  if (me.windowMode === 'minimized' || me.windowMode === 'minimizing') {
    // If it's already 'minimized' status, it doesn't do anything.
    return;
  }

  me.windowMode = 'minimizing';


  var frame = me.frame;

  //Remember the stats of the window before maximizing the window
  me.saveCurrentWindowStats('minimize_mode');


  frame.setResizable(false);

  me.renderMinimizedMode({
    animation: me.animationEnabled,
    callback: (model && model.callback) ? model.callback : null,
    duration: (model && model.duration) ? model.duration : null,
    toWidth: (model && model.toWidth) ? model.toWidth : null,
  });
};


/**
 * Render window as minimized mode
 */
WindowEventHelper.prototype.renderMinimizedMode = function(model) {
  var me = this;
  var frame = me.frame;
  var ri = me.loadWindowStats('minimize_mode');

  var from = me.getCurrentWindowStats();
  var to = me.getCurrentWindowStats();

  to.height = ri.titleBarHeight;
  if (model && model.toWidth) {
    to.width = model.toWidth
  }

  var funcDoRender = function() {
    var forceSetSize = true;
    frame.setSize(to.width, to.height, forceSetSize);

    me.windowMode = 'minimized';

    if (me.minimizeButton) {
      frame.hideFrameComponent(me.minimizeButton);
    }

    if (me.deminimizeButton) {
      frame.showFrameComponent(me.deminimizeButton, me.styleDisplay);
    }

    if (model.callback) {
      model.callback(me.frame, { eventType: 'minimized' });
    }
    if (me.eventListeners['minimized']) {
      me.eventListeners['minimized'](me.frame, { eventType: 'minimized' });
    }
  };

  if (model && model.animation) {
    me.animateFrame({
      toAlpha: 1.0,
      duration: model.duration ? model.duration : me.animationDuration,
      frame: frame,
      from: from,
      to: to,
      callback: funcDoRender
    });
  } else {
    funcDoRender();
  }


};


/**
 * Restore window from minimized mode
 */
WindowEventHelper.prototype.doDeminimize = function(model) {
  var me = this;

  var frame = me.frame;

  if (!me.hasWindowStats('minimize_mode')) {
    return;
  }

  if (me.minimizeButton) {
    frame.showFrameComponent(me.minimizeButton, me.styleDisplay);
  }
  if (me.deminimizeButton) {
    frame.hideFrameComponent(me.deminimizeButton);
  }

  me.restoreWindow(
    {
      restorePosition: false,
      restoreMode: 'minimize_mode',
      animation: me.animationEnabled,
      duration: (model && model.duration) ? model.duration : null,
      callback: (model && model.callback) ? model.callback : null,
      eventType: 'deminimized'
    });
};

//---------------------------------------------------------------------------------------------------------------------
/**
 * Make window hidden mode
 */
WindowEventHelper.prototype.doHide = function(model) {

  var me = this;

  if (me.windowMode === 'hid' || me.windowMode === 'hiding') {
    // If it's already 'hid' status, it doesn't do anything.
    return;
  }

  me.windowMode = 'hiding';

  var frame = me.frame;

  //Remember the stats of the window before maximizing the window
  me.saveCurrentWindowStats('hide_mode');


  frame.setResizable(false);


  var arg = {
//    silent: model.silent,
    animation: me.animationEnabled,
    // duration: (model && model.duration) ? model.duration : null,
    // callback: (model && model.callback) ? model.callback : null,
    // align: (model && model.align) ? model.align : null,
    // offset: (model && model.align) ? model.offset : null,
  };
  if (model) {
    mergeDeeply({ op: 'overwrite-merge', object1: arg, object2: model });
  }
  me.renderHideMode(arg);
};


/**
 * Render window as hidden mode
 */
WindowEventHelper.prototype.renderHideMode = function(model) {
  var me = this;
  var frame = me.frame;
  var ri = me.loadWindowStats('hide_mode');

  var from = me.getCurrentWindowStats();

  var offset = { x: 0, y: 0 };
  var toElement = model.toElement;

  if (model.offset) {
    offset = model.offset;
  }

  var left = 0;
  var top = 0;
  {
    var align = (model && model.align) ? model.align : 'LEFT_TOP';


    if (!align || CALIGN.LEFT_TOP == align) {
      left = from.left;
      top = from.top;
    } else if (CALIGN.HCENTER_TOP == align) {
      left = from.left + from.width / 2;
      top = from.top;
    } else if (CALIGN.RIGHT_TOP == align) {
      left = from.left + from.width;
      top = from.top;
    } else if (CALIGN.LEFT_VCENTER == align) {
      left = from.left;
      top = from.top + from.height / 2;
    } else if (CALIGN.HCENTER_VCENTER == align) {
      left = from.left + from.width / 2;
      top = from.top + from.height / 2;
    } else if (CALIGN.RIGHT_VCENTER == align) {
      left = from.left + from.width;
      top = from.top + from.height / 2;
    } else if (CALIGN.LEFT_BOTTOM == align) {
      left = from.left;
      top = from.top + from.height;
    } else if (CALIGN.HCENTER_BOTTOM == align) {
      left = from.left + from.width / 2;
      top = from.top + from.height;
    } else if (CALIGN.RIGHT_BOTTOM == align) {
      left = from.left + from.width;
      top = from.top + from.height;

    } else if ('ABSOLUTE' == align) {
      if (toElement) {
        var elementRect = toElement.getBoundingClientRect();
        if (me.isWindowManagerFixed) {
          left = elementRect.left;
          top = elementRect.top;
        } else {
          left = elementRect.left + window.pageXOffset;
          top = elementRect.top + window.pageYOffset;
        }
      } else {
        left = offset.x;
        top = offset.y;
      }
    }

  }

  var to = {
    left: left,
    top: top,
    width: 0,
    //minimum height must be titleBarHeight
    height: ri.titleBarHeight
  };

  var funcDoRender = function() {
    var forceSetSize = true;
    frame.setSize(to.width, to.height, forceSetSize);
    //frame.hide();

    me.windowMode = 'hid';

    if (model && model.callback) {
      model.callback(me.frame, { eventType: 'hid' });
    }
    if (me.eventListeners['hid']) {
      me.eventListeners['hid'](me.frame, { eventType: 'hid' });
    }
  };

  //Hide only the currently visible FrameComponent
  frame.hideAllVisibleFrameComponents();

  if (model && model.animation) {
    me.animateFrame({
      fromAlpha: model.silent ? 0 : 1.0,
      toAlpha: 0,
      ease: true,
      duration: model.duration ? model.duration : me.animationDuration,
      frame: frame,
      from: from,
      to: to,
      callback: funcDoRender
    });
  } else {
    funcDoRender();
  }


};


/**
 * Restore window from hided mode
 */
WindowEventHelper.prototype.doDehide = function(model) {
  var me = this;
  var frame = me.frame;

  if (!me.hasWindowStats('hide_mode')) {
    return;
  }

  me.restoreWindow(
    {
      duration: (model && model.duration) ? model.duration : null,
      restorePosition: true,
      restoreMode: 'hide_mode',
      animation: me.animationEnabled,
      forceShowFrameComponents: true,
      callback: (model && model.callback) ? model.callback : null,
      eventType: 'dehided'
    });
};
//---------------------------------------------------------------------------------------------------------------------
WindowEventHelper.prototype.loadWindowStats = function(storeKeyName) {
  var me = this;
  return me.statsStore[storeKeyName];
};


/**
 * Remember the status of the window before maximizing or minimizing the window size
 * @param storeKeyName
 * @returns {boolean} Returns true if the status of the window has been updated or is a new status.
 * Returns false if the status has not been updated.
 */
WindowEventHelper.prototype.saveCurrentWindowStats = function(storeKeyName) {
  var me = this;

  var crrWindowStats = me.getCurrentWindowStats();

  if (me.hasWindowStats(storeKeyName)) {

    var storedStats = me.loadWindowStats(storeKeyName);
    var isWindowStatsUpdated = !me.windowStatsEquals(crrWindowStats, storedStats);

    if (isWindowStatsUpdated) {
      me.statsStore[storeKeyName] = crrWindowStats;
    }

    return isWindowStatsUpdated;

  } else {
    me.statsStore[storeKeyName] = crrWindowStats;
    return true;
  }


};

WindowEventHelper.prototype.windowStatsEquals = function(windowStats1, windowStats2) {

  if (windowStats1 && windowStats2) {
    var result = JSON.stringify(windowStats1) === JSON.stringify(windowStats2);
    return result;
  } else {
    return false;
  }

};

WindowEventHelper.prototype.clearWindowStats = function(storeKeyName) {
  var me = this;
  me.statsStore[storeKeyName] = null;
};

WindowEventHelper.prototype.hasWindowStats = function(storeKeyName) {
  var me = this;
  return me.statsStore[storeKeyName];
};

WindowEventHelper.prototype.getCurrentWindowStats = function() {
  var me = this;
  var frame = me.frame;

  //Acquire window's stats
  var __titleBarHeight = parseInt(frame.titleBar.style.height, 10);
  var __frameBorderWidthDefault = frame.frameBorderWidthDefault;// parseInt(frame.htmlElement.style.borderWidth, 10);
  var __frameBorderWidthFocused = frame.frameBorderWidthFocused;
  var __left = frame.getLeft();
  var __top = frame.getTop();
  var __width = frame.getWidth();
  var __height = frame.getHeight();
  var __resizable = frame.resizable;
  var __movable = frame.movable;


  return {
    left: __left,
    top: __top,
    width: __width,
    height: __height,
    titleBarHeight: __titleBarHeight,
    frameBorderWidthDefault: __frameBorderWidthDefault,
    frameBorderWidthFocused: __frameBorderWidthFocused,
    resizable: __resizable,
    movable: __movable,
  };
};


/**
 * Restore the state of the window
 * @param model
 */
WindowEventHelper.prototype.restoreWindow = function(model) {
  var me = this;
  var frame = me.frame;
  var to = me.loadWindowStats(model.restoreMode);
  //現在の状態を一時保存する
  //me.saveCurrentWindowStats('temp');
  var crr = me.getCurrentWindowStats();//loadWindowStats('temp');


  //以下の3つは、ボーダーを太さを変更するためのものだが
  // funcDoRender内で処理してしまうとアニメーション中にはボーダーが描かれなくなる
  //アニメーション中にはボーダーは復活していたほうが自然なのでfuncDoRender外で実行する
  frame.frameBorderWidthDefault = to.frameBorderWidthDefault;
  frame.frameBorderWidthFocused = to.frameBorderWidthFocused;
  frame.htmlElement.style.borderWidth = frame.frameBorderWidthFocused;

  var funcDoRender = function() {


    if (model && model.restorePosition == false) {
      //位置の移動を伴わない場合（最小化から戻すときなど)
      to.left = crr.left;
      to.top = crr.top;
    }

    frame.setPosition(to.left, to.top);

    var force = true;
    frame.setSize(to.width, to.height, force);

    frame.setResizable(to.resizable);
    frame.setMovable(to.movable);

    me.clearWindowStats(model.restoreMode);

    if (me.keyListener) {
      //タイトルバー無し最大化状態から戻すためのキーリスナーは削除する

      window.removeEventListener('keydown', me.keyListener);
      if (frame.iframe) {
        frame.iframe.contentWindow.removeEventListener('keydown', me.keyListener);
      }
      me.keyListener = null;
    }

    me.windowMode = 'default';

    if (model && model.forceShowFrameComponents) {
      //ウィンドウのモード変更前に可視状態にあったフレームコンポーネント（閉じるボタン類）を可視状態にする
      frame.showAllVisibleFrameComponents();
    }

    frame.show();

    var eventType = 'restored';
    if (model && model.eventType) {
      eventType = model.eventType;
    }

    if (model && model.callback) {
      model.callback(
        me.frame, { eventType: eventType });
    }
    if (me.eventListeners[eventType]) {
      me.eventListeners[eventType](me.frame, { eventType: eventType });
    }
  };


  if (model && model.animation) {
    me.animateFrame({
      duration: model.duration ? model.duration : me.animationDuration,
      frame: frame,
      fromAlpha: 0,
      toAlpha: 1,
      from: crr,
      to: to,
      callback: funcDoRender
    });
  } else {

    funcDoRender();
  }

  //window.removeEventListener('resize', me.resizeListener);
  me.eventListenerHelper.removeEventListener(window, 'resize', me.resizeListener);
  if (me.matchParentResizeObserver) {
    me.matchParentResizeObserver.disconnect();
    me.matchParentResizeObserver = null;
  }

};


WindowEventHelper.prototype.animateFrame = function(model) {
  var me = this;
  var needRequestFocusAfterAnimation = false;


  var fromAlpha = !isNaN(model.fromAlpha) ? model.fromAlpha : 1.0;

  var from = model.from;
  var to = model.to;

  var animator = new CSimpleLayoutAnimator();

  animator.set(model.frame)
    .setDuration(model.duration ? model.duration : me.animationDuration)
    .fromPosition(from.left, from.top, 'LEFT_TOP')
    .toPosition(to.left, to.top, 'LEFT_TOP')
    .fromWidth(from.width)
    .fromHeight(from.height)
    .toWidth(to.width)
    .toHeight(to.height)
    .fromAlpha(fromAlpha)
    .toAlpha((model.toAlpha == 0) ? 0 : 1.0)
    .ease(model.ease)
    .start(0, needRequestFocusAfterAnimation)
    .then(function(animatorObj) {
      model['callback']();
    });
};

/**
 * Perform complex windowing with simple commands
 * @param cmd
 * @param opt
 */
WindowEventHelper.prototype.doCommand = function(cmd, opt) {
  var me = this;


  if (cmd === 'maximize') {
    me._defaultFunctionMaximize(me.frame);
  }
  if (cmd === 'demaximize') {
    me._defaultFunctionDemaximize(me.frame);
  }
  if (cmd === 'restore') {
    me._defaultFunctionRestoreFromFullscreen(me.frame)
  }
  if (cmd === 'minimize') {
    me._defaultFunctionMinimize(me.frame);
  }
  if (cmd === 'deminimize') {
    me._defaultFunctionDeminimize(me.frame);
  }
  if (cmd === 'hide') {
    me._defaultFunctionHide(me.frame);
  }
  if (cmd === 'dehide') {
    me._defaultFunctionDehide(me.frame);
  }
}

WindowEventHelper.prototype._defaultFunctionMaximize = function(_frame, evt) {
  var me = this;
  var model = me.opts;

  var param = {
    // DEPRECATED: maximizeWithoutTitleBar is deprecated
    // USE maximizeParam.fullScreen
    fullScreen: (model.maximizeWithoutTitleBar === true) ? true : false,

    // DEPRECATED: model.restoreKey is deprecated
    // USE maximizeParam.restoreKey

    // If you want to use the key input instead of the title bar,
    // you can specify the key because it is not possible
    // to recover with the button when hiding the title bar.
    restoreKey: model.restoreKey ? model.restoreKey : 'Escape',

    // DEPRECATED: model.restoreDuration is deprecated
    // USE maximizeParam.restoreDuration
    restoreDuration: model.restoreDuration,
  };

  if (this.maximizeParam) {
    // write maximizeParam into param
    mergeDeeply({ op: 'overwrite-merge', object1: param, object2: this.maximizeParam });
  }

  //ウィンドウを最大化する
  _frame.control.doMaximize(param);
};

WindowEventHelper.prototype._defaultFunctionDemaximize = function(_frame, evt) {
  _frame.control.doDemaximize(
    {});
};

WindowEventHelper.prototype._defaultFunctionRestoreFromFullscreen = function(_frame, evt) {
  var me = this;
  _frame.control.doDemaximize({
    duration: me.restoreDuration ? me.restoreDuration : null,
    callback: me.restoreCallback ? me.restoreCallback : null
  });
};

WindowEventHelper.prototype._defaultFunctionMinimize = function(_frame, evt) {

  //'minimizeButton'が押されたときに、最小化したい場合
  _frame.control.doMinimize(this.minimizeParam);

};

WindowEventHelper.prototype._defaultFunctionDeminimize = function(_frame, evt) {
  _frame.control.doDeminimize(this.deminimizeParam);
};

WindowEventHelper.prototype._defaultFunctionHide = function(_frame, evt) {

  var param = {
    align: 'CENTER_BOTTOM'
  };
  if (this.hideParam) {
    param = this.hideParam;
  }
  _frame.control.doHide(param);

};

WindowEventHelper.prototype._defaultFunctionDehide = function(_frame, evt) {
  var me = this;
  _frame.control.doDehide(me.dehideParam);
};

WindowEventHelper.prototype.setupDefaultEvents = function() {
  var me = this;

  if (me.maximizeButton) {
    //イベントはオーバーライドされる
    me.frame.on(me.maximizeButton, 'click', me._defaultFunctionMaximize.bind(me));
  }

  if (me.demaximizeButton) {
    me.frame.on(me.demaximizeButton, 'click', me._defaultFunctionDemaximize.bind(me));
  }

  if (me.minimizeButton) {
    me.frame.on(me.minimizeButton, 'click', me._defaultFunctionMinimize.bind(me));
  }

  if (me.deminimizeButton) {
    me.frame.on(me.deminimizeButton, 'click', me._defaultFunctionDeminimize.bind(me));
  }

  if (me.hideButton) {
    me.frame.on(me.hideButton, 'click', me._defaultFunctionHide.bind(me));
  }

  if (me.hideButtons) {
    for (var key in me.hideButtons) {
      var hideButton = me.hideButtons[key];
      if (hideButton) {
        me.frame.on(hideButton, 'click', me._defaultFunctionHide.bind(me));
      }
    }
  }

};

module.exports = WindowEventHelper;


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHJpdmVyc3VuL2V2ZW50LWVtaXR0ZXIvbGliL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0pTRnJhbWUuY3NzIiwid2VicGFjazovLy8uL3NyYy9wcmVzZXRzL2FwcGVhcmFuY2UvUHJlc2V0U3R5bGVNYXRlcmlhbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ByZXNldHMvYXBwZWFyYW5jZS9QcmVzZXRTdHlsZVBvcHVwLmNzcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJlc2V0cy9hcHBlYXJhbmNlL1ByZXNldFN0eWxlUmVkc3RvbmUuY3NzIiwid2VicGFjazovLy8uL3NyYy9wcmVzZXRzL2FwcGVhcmFuY2UvUHJlc2V0U3R5bGVZb3NlbWl0ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXZlbnQtbGlzdGVuZXItaGVscGVyL2xpYi9ldmVudC1saXN0ZW5lci1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21lcmdlLWRlZXBseS9saWIvbWVyZ2UtZGVlcGx5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ0NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvSlNGcmFtZS5jc3M/NmJlZCIsIndlYnBhY2s6Ly8vLi9zcmMvSlNGcmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwZWFyYW5jZS9DQnV0dG9uQXBwZWFyYW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwZWFyYW5jZS9DQ2hpbGRNZW51QXBwZWFyYW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwZWFyYW5jZS9DRG9tUGFydHNCdWlsZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHBlYXJhbmNlL0NGcmFtZUFwcGVhcmFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcGVhcmFuY2UvQ0ZyYW1lQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9hcHBlYXJhbmNlL0NJbWFnZUJ1dHRvbkFwcGVhcmFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wcmVzZXRzL2FwcGVhcmFuY2UvUHJlc2V0U3R5bGVNYXRlcmlhbC5jc3M/YjNlOSIsIndlYnBhY2s6Ly8vLi9zcmMvcHJlc2V0cy9hcHBlYXJhbmNlL1ByZXNldFN0eWxlTWF0ZXJpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ByZXNldHMvYXBwZWFyYW5jZS9QcmVzZXRTdHlsZVBvcHVwLmNzcz84YTc4Iiwid2VicGFjazovLy8uL3NyYy9wcmVzZXRzL2FwcGVhcmFuY2UvUHJlc2V0U3R5bGVQb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJlc2V0cy9hcHBlYXJhbmNlL1ByZXNldFN0eWxlUmVkc3RvbmUuY3NzPzZkYmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ByZXNldHMvYXBwZWFyYW5jZS9QcmVzZXRTdHlsZVJlZHN0b25lLmpzIiwid2VicGFjazovLy8uL3NyYy9wcmVzZXRzL2FwcGVhcmFuY2UvUHJlc2V0U3R5bGVUb2FzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHJlc2V0cy9hcHBlYXJhbmNlL1ByZXNldFN0eWxlWW9zZW1pdGUuY3NzP2NlYzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ByZXNldHMvYXBwZWFyYW5jZS9QcmVzZXRTdHlsZVlvc2VtaXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9wcmVzZXRzL3dpbmRvdy9QcmVzZXRXaW5kb3dZb3NlbWl0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvQ1NpbXBsZUxheW91dEFuaW1hdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9DVGltZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL0luaGVyaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL09iamVjdEFzc2lnbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9XaW5kb3dFdmVudEhlbHBlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGVBQWUsS0FBaUQsb0JBQW9CLFNBQXNJLENBQUMsa0JBQWtCLFlB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O0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCO0FBQ3JCLHFCQUFxQjs7QUFFckI7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsaUNBQWlDO0FBQ2pDLGlDQUFpQzs7O0FBR2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMkRBQTJEO0FBQzNELDJEQUEyRDs7O0FBRzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBLHVDQUF1QztBQUN2QztBQUNBOztBQUVBOzs7QUFHQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0RBQWtEOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGlCQUFpQiwwQ0FBMEM7QUFDM0Q7QUFDQSwyQ0FBMkMsMkNBQTJDOztBQUV0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsU0FBUyxzREFBc0Q7QUFDL0Q7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLLDBDQUEwQztBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7OztBQUdIOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTs7O0FBR0E7OztBQUdBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTs7QUFFQTs7O0FBR0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLLEdBQUcsMkNBQTJDO0FBQ25EOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtFQUErRSxxQ0FBcUM7QUFDcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUssR0FBRyxxQ0FBcUM7QUFDN0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0NBQWtDLGFBQWE7QUFDL0M7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLG1DQUFtQyxhQUFhO0FBQ2hEOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3Qzs7QUFFeEM7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNEQUFzRDtBQUN0RCxzREFBc0Q7QUFDdEQsT0FBTztBQUNQO0FBQ0Esc0RBQXNEO0FBQ3RELE9BQU87QUFDUCxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLGlDQUFpQzs7QUFFakM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzQkFBc0Isc0JBQXNCLFdBQVcsWUFBWTtBQUMzRjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHNCQUFzQixzQkFBc0IsV0FBVyxZQUFZO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0JBQXNCLHNCQUFzQixXQUFXLFlBQVk7QUFDM0Y7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHNCQUFzQixzQkFBc0IsV0FBVyxZQUFZO0FBQzlGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsOEJBQThCO0FBQzlCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsMkJBQTJCO0FBQzVFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCw4QkFBOEI7QUFDOUIscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnREFBZ0Q7O0FBRXZELEdBQUc7QUFDSDtBQUNBLE9BQU8sbUNBQW1DO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqWkEsdUJBQXVCLG1CQUFPLENBQUMsbUVBQXVCO0FBQ3RELHNCQUFzQixtQkFBTyxDQUFDLGlFQUFzQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDbklBLGNBQWMsbUJBQU8sQ0FBQyxtREFBcUI7QUFDM0MsNEJBQTRCLG1CQUFPLENBQUMscUVBQXdCOztBQUU1RDs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxZQUFZLHlCQUF5QjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ3JEQSxVQUFVLHFCQUFxQjtBQUMvQjtBQUNBLFdBQVcsbUJBQU8sQ0FBQyxtQ0FBVztBQUM5Qjs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUErRjtBQUMvRixZQUEyRzs7QUFFM0c7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsb0dBQU87Ozs7QUFJVCxtS0FBTyxhQUFhLEU7Ozs7Ozs7Ozs7O0FDWm5DLG1CQUFPLENBQUMsbUZBQTJCO0FBQ25DLHFCQUFxQixtQkFBTyxDQUFDLG9FQUErQjs7O0FBRzVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBOztBQUVBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBLGdFQUFnRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscURBQXFEOztBQUVyRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDRDQUE0Qzs7QUFFNUM7O0FBRUE7O0FBRUEsNkJBQTZCOztBQUU3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQSxxRkFBcUYsa0JBQWtCOztBQUV2RztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUM5UUE7QUFBQTtBQUFBO0FBQUE7QUFBK0Y7QUFDL0YsWUFBd0c7O0FBRXhHOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLGlHQUFPOzs7O0FBSVQsZ0tBQU8sYUFBYSxFOzs7Ozs7Ozs7OztBQ1puQyxtQkFBTyxDQUFDLDZFQUF3Qjs7QUFFaEM7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0EsNkJBQTZCO0FBQzdCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBOzs7QUFHQTs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUNwSUE7QUFBQTtBQUFBO0FBQUE7QUFBK0Y7QUFDL0YsWUFBMkc7O0FBRTNHOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLG9HQUFPOzs7O0FBSVQsbUtBQU8sYUFBYSxFOzs7Ozs7Ozs7OztBQ1puQyxtQkFBTyxDQUFDLG1GQUEyQjs7QUFFbkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBLDZCQUE2Qjs7QUFFN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7Ozs7Ozs7Ozs7O0FDL1VBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLDZCQUE2Qjs7QUFFN0I7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTs7Ozs7Ozs7Ozs7OztBQ2pJQTtBQUFBO0FBQUE7QUFBQTtBQUErRjtBQUMvRixZQUEyRzs7QUFFM0c7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsb0dBQU87Ozs7QUFJVCxtS0FBTyxhQUFhLEU7Ozs7Ozs7Ozs7O0FDWm5DLG1CQUFPLENBQUMsbUZBQTJCO0FBQ25DLHFCQUFxQixtQkFBTyxDQUFDLG9FQUErQjs7QUFFNUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGlEQUFpRDtBQUNqRCxvREFBb0Q7QUFDcEQ7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQSxzREFBc0Q7QUFDdEQsb0RBQW9EO0FBQ3BELG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0EsZ0NBQWdDLFlBQVksMEJBQTBCOztBQUV0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EscURBQXFELFlBQVksVUFBVTs7QUFFM0U7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDM09BLGtCQUFrQixtQkFBTyxDQUFDLHFFQUFjOztBQUV4Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHlGQUF5RjtBQUM1Rzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7Ozs7Ozs7OztBQ2xFQSxhQUFhLG1CQUFPLENBQUMsMENBQWE7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVB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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyx5QkFBeUI7QUFDekQ7QUFDQTtBQUNBLGdEQUFnRCx5QkFBeUI7QUFDekU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNEQUFzRDtBQUN2RTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZ0NBQWdDLG1CQUFtQjtBQUNuRDtBQUNBO0FBQ0EsMENBQTBDLG1CQUFtQjtBQUM3RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qzs7O0FBR3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQix1QkFBdUI7QUFDMUM7QUFDQTtBQUNBLDhDQUE4Qyx1QkFBdUI7QUFDckU7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLHFFQUFxRTtBQUN0Rjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEiLCJmaWxlIjoianNmcmFtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSB7XG5cdFx0dmFyIGEgPSBmYWN0b3J5KCk7XG5cdFx0Zm9yKHZhciBpIGluIGEpICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgPyBleHBvcnRzIDogcm9vdClbaV0gPSBhW2ldO1xuXHR9XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLyohIGV2ZW50LWVtaXR0ZXIoaHR0cHM6Ly9naXRodWIuY29tL3JpdmVyc3VuL2V2ZW50LWVtaXR0ZXIpIHYxLjUuMiBDb3B5cmlnaHQgKGMpIDIwMjAgcml2ZXJzdW4ub3JnQGdtYWlsLmNvbSAqL1xuIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJFdmVudEVtaXR0ZXJcIixbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLkV2ZW50RW1pdHRlcj10KCk6ZS5FdmVudEVtaXR0ZXI9dCgpfSh0aGlzLChmdW5jdGlvbigpe3JldHVybigoKT0+e1widXNlIHN0cmljdFwiO3ZhciBlPXtkOih0LG4pPT57Zm9yKHZhciByIGluIG4pZS5vKG4scikmJiFlLm8odCxyKSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KHQscix7ZW51bWVyYWJsZTohMCxnZXQ6bltyXX0pfSxvOihlLHQpPT5PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSx0KX0sdD17fTtmdW5jdGlvbiBuKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIGV9KGUpfHxmdW5jdGlvbihlLHQpe3ZhciBuPWUmJihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZlW1N5bWJvbC5pdGVyYXRvcl18fGVbXCJAQGl0ZXJhdG9yXCJdKTtpZihudWxsPT1uKXJldHVybjt2YXIgcixpLG89W10scz0hMCx1PSExO3RyeXtmb3Iobj1uLmNhbGwoZSk7IShzPShyPW4ubmV4dCgpKS5kb25lKSYmKG8ucHVzaChyLnZhbHVlKSwhdHx8by5sZW5ndGghPT10KTtzPSEwKTt9Y2F0Y2goZSl7dT0hMCxpPWV9ZmluYWxseXt0cnl7c3x8bnVsbD09bi5yZXR1cm58fG4ucmV0dXJuKCl9ZmluYWxseXtpZih1KXRocm93IGl9fXJldHVybiBvfShlLHQpfHxpKGUsdCl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiByKGUsdCl7dmFyIG49XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmZVtTeW1ib2wuaXRlcmF0b3JdfHxlW1wiQEBpdGVyYXRvclwiXTtpZighbil7aWYoQXJyYXkuaXNBcnJheShlKXx8KG49aShlKSl8fHQmJmUmJlwibnVtYmVyXCI9PXR5cGVvZiBlLmxlbmd0aCl7biYmKGU9bik7dmFyIHI9MCxvPWZ1bmN0aW9uKCl7fTtyZXR1cm57czpvLG46ZnVuY3Rpb24oKXtyZXR1cm4gcj49ZS5sZW5ndGg/e2RvbmU6ITB9Ontkb25lOiExLHZhbHVlOmVbcisrXX19LGU6ZnVuY3Rpb24oZSl7dGhyb3cgZX0sZjpvfX10aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9dmFyIHMsdT0hMCxjPSExO3JldHVybntzOmZ1bmN0aW9uKCl7bj1uLmNhbGwoZSl9LG46ZnVuY3Rpb24oKXt2YXIgZT1uLm5leHQoKTtyZXR1cm4gdT1lLmRvbmUsZX0sZTpmdW5jdGlvbihlKXtjPSEwLHM9ZX0sZjpmdW5jdGlvbigpe3RyeXt1fHxudWxsPT1uLnJldHVybnx8bi5yZXR1cm4oKX1maW5hbGx5e2lmKGMpdGhyb3cgc319fX1mdW5jdGlvbiBpKGUsdCl7aWYoZSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpcmV0dXJuIG8oZSx0KTt2YXIgbj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkuc2xpY2UoOCwtMSk7cmV0dXJuXCJPYmplY3RcIj09PW4mJmUuY29uc3RydWN0b3ImJihuPWUuY29uc3RydWN0b3IubmFtZSksXCJNYXBcIj09PW58fFwiU2V0XCI9PT1uP0FycmF5LmZyb20oZSk6XCJBcmd1bWVudHNcIj09PW58fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pP28oZSx0KTp2b2lkIDB9fWZ1bmN0aW9uIG8oZSx0KXsobnVsbD09dHx8dD5lLmxlbmd0aCkmJih0PWUubGVuZ3RoKTtmb3IodmFyIG49MCxyPW5ldyBBcnJheSh0KTtuPHQ7bisrKXJbbl09ZVtuXTtyZXR1cm4gcn1mdW5jdGlvbiBzKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiB1KGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciByPXRbbl07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIua2V5LHIpfX1mdW5jdGlvbiBjKGUsdCxuKXtyZXR1cm4gdCYmdShlLnByb3RvdHlwZSx0KSxuJiZ1KGUsbiksZX1lLmQodCx7ZGVmYXVsdDooKT0+YX0pO3ZhciBhPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0KXtpZihzKHRoaXMsZSksdGhpcy5vbkxpc3RlbmVycz1uZXcgTWFwLHRoaXMub25seUxpc3RlbmVycz1uZXcgTWFwLHQpe3ZhciBuLGk9cih0KTt0cnl7Zm9yKGkucygpOyEobj1pLm4oKSkuZG9uZTspe3ZhciBvPW4udmFsdWUsdT1uZXcgbDt0aGlzLm9uTGlzdGVuZXJzLnNldChvLHUpfX1jYXRjaChlKXtpLmUoZSl9ZmluYWxseXtpLmYoKX19dGhpcy5jaGlsZEV2ZW50RW1pdHRlcnM9W10sdGhpcy5vbkludGVyY2VwdGVyRnVuY3M9e319cmV0dXJuIGMoZSxbe2tleTpcIm9uXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgcj10aGlzLm9uTGlzdGVuZXJzLmdldChlKTtpZihyfHwocj1uZXcgbCx0aGlzLm9uTGlzdGVuZXJzLnNldChlLHIpKSxyLmFkZExpc3RlbmVyRnVuYyh0KSx0aGlzLm9uSW50ZXJjZXB0ZXJGdW5jcylmb3IodmFyIGk9MCxvPU9iamVjdC5lbnRyaWVzKHRoaXMub25JbnRlcmNlcHRlckZ1bmNzKTtpPG8ubGVuZ3RoO2krKyl7dmFyIHM9bihvW2ldLDIpLHU9c1swXTsoMCxzWzFdKSh7ZXZlbnRUeXBlOmUsZnVuYzp0LG9uSW50ZXJjZXB0ZXJGdW5jbmFtZTp1fSl9fX0se2tleTpcInJlbW92ZUxpc3RlbmVyXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt2YXIgbj10aGlzLm9uTGlzdGVuZXJzLmdldChlKTtuJiZuLnJlbW92ZUxpc3RlbmVyKHQpfX0se2tleTpcIm9ubHlcIix2YWx1ZTpmdW5jdGlvbihlLHQsbil7dmFyIHI9dGhpcy5vbmx5TGlzdGVuZXJzLmdldChlKTtyfHwocj1uZXcgZix0aGlzLm9ubHlMaXN0ZW5lcnMuc2V0KGUscikpLHIucHV0TGlzdGVuZXJGdW5jKHQsbil9fSx7a2V5OlwicGlwZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuY2hpbGRFdmVudEVtaXR0ZXJzLnB1c2goZSl9fSx7a2V5OlwiZW1pdFwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG49dGhpcy5vbkxpc3RlbmVycy5nZXQoZSk7biYmKHQuZXZlbnRUeXBlPWUsbi5jYWxsTGlzdGVuZXJGdW5jKHQpKTt2YXIgaT10aGlzLm9ubHlMaXN0ZW5lcnMuZ2V0KGUpO2kmJih0LmV2ZW50VHlwZT1lLGkuY2FsbExpc3RlbmVyRnVuYyh0KSk7dmFyIG8scz1yKHRoaXMuY2hpbGRFdmVudEVtaXR0ZXJzKTt0cnl7Zm9yKHMucygpOyEobz1zLm4oKSkuZG9uZTspe28udmFsdWUuZW1pdChlLHQpfX1jYXRjaChlKXtzLmUoZSl9ZmluYWxseXtzLmYoKX19fSx7a2V5OlwiZ2V0QWxsTGlzdGVuZXJzXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT17fTt0aGlzLm9uTGlzdGVuZXJzLmZvckVhY2goKGZ1bmN0aW9uKHQsbil7dmFyIHI9bixpPXQuZ2V0QWxsTGlzdGVuZXJzKCk7ZVtyXXx8KGVbcl09e30pLGVbcl0ubGlzdGVuZXJzPWl9KSk7dmFyIHQsbj0wLGk9cih0aGlzLmNoaWxkRXZlbnRFbWl0dGVycyk7dHJ5e2ZvcihpLnMoKTshKHQ9aS5uKCkpLmRvbmU7KXt0LnZhbHVlLm9uTGlzdGVuZXJzLmZvckVhY2goKGZ1bmN0aW9uKHQscil7dmFyIGk9cixvPXQuZ2V0QWxsTGlzdGVuZXJzKCk7ZVtpXXx8KGVbaV09e30pLGVbaV0uY2hpbGRFdmVudEVtaXR0ZXJzfHwoZVtpXS5jaGlsZEV2ZW50RW1pdHRlcnM9W10pLGVbaV0uY2hpbGRFdmVudEVtaXR0ZXJzLnB1c2goe2NoaWxkRW1pdHRlcklkeDpuLGxpc3RlbmVyczpvfSl9KSksbisrfX1jYXRjaChlKXtpLmUoZSl9ZmluYWxseXtpLmYoKX1yZXR1cm4gZX19LHtrZXk6XCJoYXNMaXN0ZW5lckZ1bmNzXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYodGhpcy5vbkxpc3RlbmVycy5oYXMoZSkpe3ZhciB0PXRoaXMub25MaXN0ZW5lcnMuZ2V0KGUpO2lmKHQmJnQuaGFzTGlzdGVuZXJGdW5jKCkpcmV0dXJuITB9dmFyIG4saT1yKHRoaXMuY2hpbGRFdmVudEVtaXR0ZXJzKTt0cnl7Zm9yKGkucygpOyEobj1pLm4oKSkuZG9uZTspe2lmKG4udmFsdWUuaGFzTGlzdGVuZXJGdW5jcyhlKSlyZXR1cm4hMH19Y2F0Y2goZSl7aS5lKGUpfWZpbmFsbHl7aS5mKCl9cmV0dXJuITF9fSx7a2V5OlwiY2xlYXJBbGxcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlLHQ9cih0aGlzLm9uTGlzdGVuZXJzLnZhbHVlcygpKTt0cnl7Zm9yKHQucygpOyEoZT10Lm4oKSkuZG9uZTspe2UudmFsdWUuY2xlYXJBbGwoKX19Y2F0Y2goZSl7dC5lKGUpfWZpbmFsbHl7dC5mKCl9dGhpcy5vbkxpc3RlbmVycy5jbGVhcigpO3ZhciBuLGk9cih0aGlzLm9ubHlMaXN0ZW5lcnMudmFsdWVzKCkpO3RyeXtmb3IoaS5zKCk7IShuPWkubigpKS5kb25lOyl7bi52YWx1ZS5jbGVhckFsbCgpfX1jYXRjaChlKXtpLmUoZSl9ZmluYWxseXtpLmYoKX10aGlzLm9ubHlMaXN0ZW5lcnMuY2xlYXIoKSx0aGlzLmNoaWxkRXZlbnRFbWl0dGVycz1bXX19LHtrZXk6XCJhZGRPbkludGVyY2VwdGVyRnVuY1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7aWYodGhpcy5vbkludGVyY2VwdGVyRnVuY3NbZV0pdGhyb3cgRXJyb3IoJ0Fsd2F5cyByZWdpc3RlcmVkIGludGVyY2VwdGVyIGZ1bmMgXCInLmNvbmNhdChlLCdcIi4nKSk7dGhpcy5vbkludGVyY2VwdGVyRnVuY3NbZV09dH19LHtrZXk6XCJyZW1vdmVPbkludGVyY2VwdGVyRnVuY1wiLHZhbHVlOmZ1bmN0aW9uKGUpe2RlbGV0ZSB0aGlzLm9uSW50ZXJjZXB0ZXJGdW5jc1tlXX19LHtrZXk6XCJnZXRBbGxPbkludGVyY2VwdGVyRnVuY3NcIix2YWx1ZTpmdW5jdGlvbigpe2Zvcih2YXIgZT1bXSx0PTAscj1PYmplY3QuZW50cmllcyh0aGlzLm9uSW50ZXJjZXB0ZXJGdW5jcyk7dDxyLmxlbmd0aDt0Kyspe3ZhciBpPW4oclt0XSwyKSxvPWlbMF0scz1pWzFdO2UucHVzaCh7ZnVuY05hbWU6byxmdW5jOnN9KX1yZXR1cm4gZX19XSksZX0oKSxsPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe3ModGhpcyxlKSx0aGlzLmxpc3RlbmVyRnVuY3M9W119cmV0dXJuIGMoZSxbe2tleTpcImNsZWFyQWxsXCIsdmFsdWU6ZnVuY3Rpb24oKXt0aGlzLmxpc3RlbmVyRnVuY3M9W119fSx7a2V5OlwiZ2V0QWxsTGlzdGVuZXJzXCIsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5saXN0ZW5lckZ1bmNzfX0se2tleTpcImhhc0xpc3RlbmVyRnVuY1wiLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubGlzdGVuZXJGdW5jcy5sZW5ndGg+MH19LHtrZXk6XCJhZGRMaXN0ZW5lckZ1bmNcIix2YWx1ZTpmdW5jdGlvbihlKXt0aGlzLmxpc3RlbmVyRnVuY3MucHVzaChlKX19LHtrZXk6XCJjYWxsTGlzdGVuZXJGdW5jXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQsbj1yKHRoaXMubGlzdGVuZXJGdW5jcyk7dHJ5e2ZvcihuLnMoKTshKHQ9bi5uKCkpLmRvbmU7KXt2YXIgaT10LnZhbHVlO2lmKFwiRnVuY3Rpb25cIiE9PXRoaXMudHlwZU9mKGkpJiZcIkFzeW5jRnVuY3Rpb25cIiE9PXRoaXMudHlwZU9mKGkpKXRocm93IEVycm9yKCdbQHJpdmVyc3VuL2V2ZW50LWVtaXR0ZXJdIGxpc3RlbmVyRnVuY3Rpb24geW91IHNldCBpcyBub3QgYSBmdW5jdGlvbiAoIGlzIHR5cGUgb2YgQSBcIicuY29uY2F0KHRoaXMudHlwZU9mKGkpLCdcIiApLiBsaXN0ZW5lckZ1bmN0aW9uOlwiJykuY29uY2F0KGksJ1wiLkNoZWNrIGFyZ3Mgb2YgI29ubHkgbWV0aG9kIG9yICNvbiBtZXRob2QuJykpO2koZSl9fWNhdGNoKGUpe24uZShlKX1maW5hbGx5e24uZigpfX19LHtrZXk6XCJyZW1vdmVMaXN0ZW5lclwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMucmVtb3ZlQXJyYXlJdGVtT25jZSh0aGlzLmxpc3RlbmVyRnVuY3MsZSl9fSx7a2V5OlwicmVtb3ZlQXJyYXlJdGVtT25jZVwiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dmFyIG49ZS5pbmRleE9mKHQpO3JldHVybiBuPi0xJiZlLnNwbGljZShuLDEpLGV9fSx7a2V5OlwidHlwZU9mXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LC0xKX19XSksZX0oKSxmPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe3ModGhpcyxlKSx0aGlzLmxpc3RlbmVyRnVuY01hcD1uZXcgTWFwfXJldHVybiBjKGUsW3trZXk6XCJjbGVhckFsbFwiLHZhbHVlOmZ1bmN0aW9uKCl7dGhpcy5saXN0ZW5lckZ1bmNNYXAuY2xlYXIoKX19LHtrZXk6XCJoYXNMaXN0ZW5lckZ1bmNcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5saXN0ZW5lckZ1bmNNYXAuaGFzKGUpfX0se2tleTpcInB1dExpc3RlbmVyRnVuY1wiLHZhbHVlOmZ1bmN0aW9uKGUsdCl7dGhpcy5saXN0ZW5lckZ1bmNNYXAuc2V0KGUsdCl9fSx7a2V5OlwiY2FsbExpc3RlbmVyRnVuY1wiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0LG49cih0aGlzLmxpc3RlbmVyRnVuY01hcC52YWx1ZXMoKSk7dHJ5e2ZvcihuLnMoKTshKHQ9bi5uKCkpLmRvbmU7KXt2YXIgaT10LnZhbHVlO2lmKFwiRnVuY3Rpb25cIiE9PXRoaXMudHlwZU9mKGkpKXRocm93IEVycm9yKCdbQHJpdmVyc3VuL2V2ZW50LWVtaXR0ZXJdIGxpc3RlbmVyRnVuY3Rpb24geW91IHNldCBpcyBub3QgYSBmdW5jdGlvbi4gbGlzdGVuZXJGdW5jdGlvbjpcIicuY29uY2F0KGksJ1wiLkNoZWNrIGFyZ3Mgb2YgI29ubHkgbWV0aG9kIG9yICNvbiBtZXRob2QuJykpO2koZSl9fWNhdGNoKGUpe24uZShlKX1maW5hbGx5e24uZigpfX19LHtrZXk6XCJ0eXBlT2ZcIix2YWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsLTEpfX1dKSxlfSgpO3JldHVybiB0PXQuZGVmYXVsdH0pKCl9KSk7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuanNmcmFtZS10aXRsZWJhci1kZWZhdWx0IHtcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLjAsICNmNWY1ZjUsIGNvbG9yLXN0b3AoMS4wLCAjZjhmN2YyKSkpO1xcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmNWY1ZjUsICNmOGY3ZjIpO1xcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNmNWY1ZjUsICNmOGY3ZjIpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG9wLCAjZjVmNWY1LCAjZjhmN2YyKTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xcbn1cXG5cXG4uanNmcmFtZS10aXRsZWJhci1mb2N1c2VkIHtcXG4gICAgLyogKGMpMjAxNSBKb2hhbm5lcyBKYWtvYlxcbiAgICAgICBNYWRlIHdpdGggPDMgaW4gR2VybWFueSAqL1xcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuMCwgI2ViZWJlYiwgY29sb3Itc3RvcCgxLjAsICNkNWQ1ZDUpKSk7XFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ViZWJlYiwgI2Q1ZDVkNSk7XFxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2ViZWJlYiwgI2Q1ZDVkNSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0b3AsICNlYmViZWIsICNkNWQ1ZDUpO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XFxufVxcblxcbi5qc2ZyYW1lLW1vZGFsLXdpbmRvdy1iYWNrZ3JvdW5kIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZGR0aDogMTAwJVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvSlNGcmFtZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwrR0FBK0c7SUFDL0csMERBQTBEO0lBQzFELHVEQUF1RDtJQUN2RCxrREFBa0Q7SUFDbEQsMkJBQTJCO0lBQzNCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJO2dDQUM0QjtJQUM1QiwrR0FBK0c7SUFDL0csMERBQTBEO0lBQzFELHVEQUF1RDtJQUN2RCxrREFBa0Q7SUFDbEQsMkJBQTJCO0lBQzNCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1o7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuanNmcmFtZS10aXRsZWJhci1kZWZhdWx0IHtcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLjAsICNmNWY1ZjUsIGNvbG9yLXN0b3AoMS4wLCAjZjhmN2YyKSkpO1xcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0b3AsICNmNWY1ZjUsICNmOGY3ZjIpO1xcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICNmNWY1ZjUsICNmOGY3ZjIpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG9wLCAjZjVmNWY1LCAjZjhmN2YyKTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xcbn1cXG5cXG4uanNmcmFtZS10aXRsZWJhci1mb2N1c2VkIHtcXG4gICAgLyogKGMpMjAxNSBKb2hhbm5lcyBKYWtvYlxcbiAgICAgICBNYWRlIHdpdGggPDMgaW4gR2VybWFueSAqL1xcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuMCwgI2ViZWJlYiwgY29sb3Itc3RvcCgxLjAsICNkNWQ1ZDUpKSk7XFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ViZWJlYiwgI2Q1ZDVkNSk7XFxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2ViZWJlYiwgI2Q1ZDVkNSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0b3AsICNlYmViZWIsICNkNWQ1ZDUpO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XFxufVxcblxcbi5qc2ZyYW1lLW1vZGFsLXdpbmRvdy1iYWNrZ3JvdW5kIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZGR0aDogMTAwJVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuanNmcmFtZS1wcmVzZXQtc3R5bGUtbWF0ZXJpYWwtZGVmYXVsdCB7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XFxufVxcblxcbi5qc2ZyYW1lLXByZXNldC1zdHlsZS1tYXRlcmlhbC1mb2N1c2VkIHtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDM2cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzNnB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcHJlc2V0cy9hcHBlYXJhbmNlL1ByZXNldFN0eWxlTWF0ZXJpYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLDZCQUE2QjtBQUNqQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuanNmcmFtZS1wcmVzZXQtc3R5bGUtbWF0ZXJpYWwtZGVmYXVsdCB7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XFxufVxcblxcbi5qc2ZyYW1lLXByZXNldC1zdHlsZS1tYXRlcmlhbC1mb2N1c2VkIHtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDM2cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAzNnB4O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuanNmcmFtZS1wcmVzZXQtc3R5bGUtcG9wdXAtZGVmYXVsdCB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XFxufVxcblxcbi5qc2ZyYW1lLXByZXNldC1zdHlsZS1wb3B1cC1mb2N1c2VkIHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3ByZXNldHMvYXBwZWFyYW5jZS9QcmVzZXRTdHlsZVBvcHVwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQiw0QkFBNEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmpzZnJhbWUtcHJlc2V0LXN0eWxlLXBvcHVwLWRlZmF1bHQge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xcbn1cXG5cXG4uanNmcmFtZS1wcmVzZXQtc3R5bGUtcG9wdXAtZm9jdXNlZCB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5qc2ZyYW1lLXByZXNldC1zdHlsZS1yZWRzdG9uZS1kZWZhdWx0IHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcXG59XFxuXFxuLmpzZnJhbWUtcHJlc2V0LXN0eWxlLXJlZHN0b25lLWZvY3VzZWQge1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcHJlc2V0cy9hcHBlYXJhbmNlL1ByZXNldFN0eWxlUmVkc3RvbmUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLDJCQUEyQjtJQUMzQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLDRCQUE0QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuanNmcmFtZS1wcmVzZXQtc3R5bGUtcmVkc3RvbmUtZGVmYXVsdCB7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XFxufVxcblxcbi5qc2ZyYW1lLXByZXNldC1zdHlsZS1yZWRzdG9uZS1mb2N1c2VkIHtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmpzZnJhbWUtcHJlc2V0LXN0eWxlLXlvc2VtaXRlLWRlZmF1bHQge1xcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuMCwgI2Y1ZjVmNSwgY29sb3Itc3RvcCgxLjAsICNmOGY3ZjIpKSk7XFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y1ZjVmNSwgI2Y4ZjdmMik7XFxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y1ZjVmNSwgI2Y4ZjdmMik7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0b3AsICNmNWY1ZjUsICNmOGY3ZjIpO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XFxufVxcblxcbi5qc2ZyYW1lLXByZXNldC1zdHlsZS15b3NlbWl0ZS1mb2N1c2VkIHtcXG4gICAgLyogKGMpMjAxNSBKb2hhbm5lcyBKYWtvYlxcbiAgICAgICBNYWRlIHdpdGggPDMgaW4gR2VybWFueSAqL1xcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAuMCwgI2ViZWJlYiwgY29sb3Itc3RvcCgxLjAsICNkNWQ1ZDUpKSk7XFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2ViZWJlYiwgI2Q1ZDVkNSk7XFxuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgI2ViZWJlYiwgI2Q1ZDVkNSk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0b3AsICNlYmViZWIsICNkNWQ1ZDUpO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9wcmVzZXRzL2FwcGVhcmFuY2UvUHJlc2V0U3R5bGVZb3NlbWl0ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwrR0FBK0c7SUFDL0csMERBQTBEO0lBQzFELHVEQUF1RDtJQUN2RCxrREFBa0Q7SUFDbEQsMkJBQTJCO0lBQzNCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJO2dDQUM0QjtJQUM1QiwrR0FBK0c7SUFDL0csMERBQTBEO0lBQzFELHVEQUF1RDtJQUN2RCxrREFBa0Q7SUFDbEQsMkJBQTJCO0lBQzNCLDRCQUE0QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuanNmcmFtZS1wcmVzZXQtc3R5bGUteW9zZW1pdGUtZGVmYXVsdCB7XFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMC4wLCAjZjVmNWY1LCBjb2xvci1zdG9wKDEuMCwgI2Y4ZjdmMikpKTtcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZjVmNWY1LCAjZjhmN2YyKTtcXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZjVmNWY1LCAjZjhmN2YyKTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvcCwgI2Y1ZjVmNSwgI2Y4ZjdmMik7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcXG59XFxuXFxuLmpzZnJhbWUtcHJlc2V0LXN0eWxlLXlvc2VtaXRlLWZvY3VzZWQge1xcbiAgICAvKiAoYykyMDE1IEpvaGFubmVzIEpha29iXFxuICAgICAgIE1hZGUgd2l0aCA8MyBpbiBHZXJtYW55ICovXFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMC4wLCAjZWJlYmViLCBjb2xvci1zdG9wKDEuMCwgI2Q1ZDVkNSkpKTtcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjZWJlYmViLCAjZDVkNWQ1KTtcXG4gICAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAjZWJlYmViLCAjZDVkNWQ1KTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvcCwgI2ViZWJlYiwgI2Q1ZDVkNSk7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDZweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvKiEgZXZlbnQtbGlzdGVuZXItaGVscGVyKGh0dHBzOi8vZ2l0aHViLmNvbS9yaXZlcnN1bi9ldmVudC1saXN0ZW5lci1oZWxwZXIpIHYxLjEuMyBDb3B5cmlnaHQgKGMpIDIwMjAgcml2ZXJzdW4ub3JnQGdtYWlsLmNvbSAqL1xuIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJFdmVudExpc3RlbmVySGVscGVyXCIsW10sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5FdmVudExpc3RlbmVySGVscGVyPXQoKTplLkV2ZW50TGlzdGVuZXJIZWxwZXI9dCgpfSh0aGlzLChmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD17fTtmdW5jdGlvbiBuKHIpe2lmKHRbcl0pcmV0dXJuIHRbcl0uZXhwb3J0czt2YXIgaT10W3JdPXtpOnIsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtyXS5jYWxsKGkuZXhwb3J0cyxpLGkuZXhwb3J0cyxuKSxpLmw9ITAsaS5leHBvcnRzfXJldHVybiBuLm09ZSxuLmM9dCxuLmQ9ZnVuY3Rpb24oZSx0LHIpe24ubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpyfSl9LG4ucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxuLnQ9ZnVuY3Rpb24oZSx0KXtpZigxJnQmJihlPW4oZSkpLDgmdClyZXR1cm4gZTtpZig0JnQmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIHI9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihuLnIociksT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciBpIGluIGUpbi5kKHIsaSxmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0uYmluZChudWxsLGkpKTtyZXR1cm4gcn0sbi5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiBuLmQodCxcImFcIix0KSx0fSxuLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LG4ucD1cIi9cIixuKG4ucz0wKX0oW2Z1bmN0aW9uKGUsdCxuKXtlLmV4cG9ydHM9bigxKX0sZnVuY3Rpb24oZSx0LG4pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIHIoZSl7cmV0dXJuKHI9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0pKGUpfWZ1bmN0aW9uIGkoZSx0KXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZX0oZSl8fGZ1bmN0aW9uKGUsdCl7dmFyIG49ZSYmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJmVbU3ltYm9sLml0ZXJhdG9yXXx8ZVtcIkBAaXRlcmF0b3JcIl0pO2lmKG51bGw9PW4pcmV0dXJuO3ZhciByLGksbz1bXSxhPSEwLHM9ITE7dHJ5e2ZvcihuPW4uY2FsbChlKTshKGE9KHI9bi5uZXh0KCkpLmRvbmUpJiYoby5wdXNoKHIudmFsdWUpLCF0fHxvLmxlbmd0aCE9PXQpO2E9ITApO31jYXRjaChlKXtzPSEwLGk9ZX1maW5hbGx5e3RyeXthfHxudWxsPT1uLnJldHVybnx8bi5yZXR1cm4oKX1maW5hbGx5e2lmKHMpdGhyb3cgaX19cmV0dXJuIG99KGUsdCl8fGEoZSx0KXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIG8oZSx0KXt2YXIgbj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZlW1N5bWJvbC5pdGVyYXRvcl18fGVbXCJAQGl0ZXJhdG9yXCJdO2lmKCFuKXtpZihBcnJheS5pc0FycmF5KGUpfHwobj1hKGUpKXx8dCYmZSYmXCJudW1iZXJcIj09dHlwZW9mIGUubGVuZ3RoKXtuJiYoZT1uKTt2YXIgcj0wLGk9ZnVuY3Rpb24oKXt9O3JldHVybntzOmksbjpmdW5jdGlvbigpe3JldHVybiByPj1lLmxlbmd0aD97ZG9uZTohMH06e2RvbmU6ITEsdmFsdWU6ZVtyKytdfX0sZTpmdW5jdGlvbihlKXt0aHJvdyBlfSxmOml9fXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX12YXIgbyxzPSEwLGw9ITE7cmV0dXJue3M6ZnVuY3Rpb24oKXtuPW4uY2FsbChlKX0sbjpmdW5jdGlvbigpe3ZhciBlPW4ubmV4dCgpO3JldHVybiBzPWUuZG9uZSxlfSxlOmZ1bmN0aW9uKGUpe2w9ITAsbz1lfSxmOmZ1bmN0aW9uKCl7dHJ5e3N8fG51bGw9PW4ucmV0dXJufHxuLnJldHVybigpfWZpbmFsbHl7aWYobCl0aHJvdyBvfX19fWZ1bmN0aW9uIGEoZSx0KXtpZihlKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZSlyZXR1cm4gcyhlLHQpO3ZhciBuPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LC0xKTtyZXR1cm5cIk9iamVjdFwiPT09biYmZS5jb25zdHJ1Y3RvciYmKG49ZS5jb25zdHJ1Y3Rvci5uYW1lKSxcIk1hcFwiPT09bnx8XCJTZXRcIj09PW4/QXJyYXkuZnJvbShlKTpcIkFyZ3VtZW50c1wiPT09bnx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3Qobik/cyhlLHQpOnZvaWQgMH19ZnVuY3Rpb24gcyhlLHQpeyhudWxsPT10fHx0PmUubGVuZ3RoKSYmKHQ9ZS5sZW5ndGgpO2Zvcih2YXIgbj0wLHI9bmV3IEFycmF5KHQpO248dDtuKyspcltuXT1lW25dO3JldHVybiByfWZ1bmN0aW9uIGwoZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIHI9dFtuXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsci5rZXkscil9fW4ucih0KSxuLmQodCxcImRlZmF1bHRcIiwoZnVuY3Rpb24oKXtyZXR1cm4gdX0pKTt2YXIgdT1mdW5jdGlvbigpe2Z1bmN0aW9uIGUoKXshZnVuY3Rpb24oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLGUpLHRoaXMuZXZUYXJnZXRMaXN0ZW5lcnNNYXA9bmV3IE1hcCx0aGlzLmxpc3RlbmVyTnVtPTB9dmFyIHQsbixhO3JldHVybiB0PWUsKG49W3trZXk6XCJhZGRFdmVudExpc3RlbmVyXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG4scil7dmFyIGk9dGhpcyxvPW51bGw7aWYociYmKG89dGhpcy5fY2xvbmVKc29uKHIpKSxhcmd1bWVudHMubGVuZ3RoPjQpdGhyb3cgRXJyb3IoXCJUb28gbWFueSBhcmd1bWVudHMuIE51bWJlciBvZiBhcmd1bWVudHMgY2FuIGJlIHNwZWNpZmllZCA0LlwiKTt0aGlzLl9jaGVja1R5cGVPZk9wdGlvbnMobyk7dmFyIGE9bnVsbDtvJiZvLmxpc3RlbmVyTmFtZSYmKGE9by5saXN0ZW5lck5hbWUpO3ZhciBzPW51bGw7byYmby5vbmNlJiYoZGVsZXRlIG8ub25jZSxvLmNhbGxiYWNrT25jZT0hMCxzPWZ1bmN0aW9uKHIpe24ociksaS5yZW1vdmVFdmVudExpc3RlbmVyKGUsdCxudWxsLG8pfSk7dmFyIGw9e2xpc3RlbmVyTmFtZTpudWxsLHN1Y2Nlc3M6ITB9O3M/ZS5hZGRFdmVudExpc3RlbmVyKHQscyxvKTplLmFkZEV2ZW50TGlzdGVuZXIodCxuLG8pO3ZhciB1PXRoaXMuZXZUYXJnZXRMaXN0ZW5lcnNNYXAuZ2V0KGUpO3V8fCh1PW5ldyBNYXAsdGhpcy5ldlRhcmdldExpc3RlbmVyc01hcC5zZXQoZSx1KSk7dmFyIGM9dS5nZXQodCk7aWYoY3x8KGM9bmV3IE1hcCx1LnNldCh0LGMpKSxudWxsIT09YSl7aWYoYy5oYXMoYSkpdGhyb3cgRXJyb3IoJ1RoZSBsaXN0ZW5lck5hbWUgXCInLmNvbmNhdChhLCdcIiBpcyBhbHJlYWR5IHVzZWQgZm9yIHRoZSBzcGVjaWZpZWQgZXZlbnQgdHlwZSAnKS5jb25jYXQodCkpO2Muc2V0KGEse2xpc3RlbmVyOm4sb25jZUxpc3RlbmVyOnMsb3B0aW9uczpvfSksbC5saXN0ZW5lck5hbWU9YX1lbHNle3ZhciBmPVwibGlzdGVuZXItXCIuY29uY2F0KHRoaXMubGlzdGVuZXJOdW0pO298fChvPXt9KSxvLmxpc3RlbmVyTmFtZT1mLGMuc2V0KGYse2xpc3RlbmVyOm4sb25jZUxpc3RlbmVyOnMsb3B0aW9uczpvfSksbC5saXN0ZW5lck5hbWU9Zix0aGlzLmxpc3RlbmVyTnVtKz0xfXJldHVybiBsfX0se2tleTpcInJlbW92ZUV2ZW50TGlzdGVuZXJcIix2YWx1ZTpmdW5jdGlvbihlLHQsbixyKXtpZihhcmd1bWVudHMubGVuZ3RoPDMpdGhyb3cgRXJyb3IoXCJUaHJlZSBvciBmb3VyIGFyZ3VtZW50cyBhcmUgcmVxdWlyZWQuXCIpO2lmKFwiRnVuY3Rpb25cIiE9PXRoaXMudHlwZU9mKG4pJiZcIk51bGxcIiE9PXRoaXMudHlwZU9mKG4pKXRocm93IEVycm9yKCdUeXBlIG9mIDNyZCBhcmcgc2hvdWxkIGJlIGEgXCJGdW5jdGlvblwiIG9yIFwiTnVsbFwiLicpO3RoaXMuX2NoZWNrVHlwZU9mT3B0aW9ucyhyKTt2YXIgaT1udWxsO3ImJnIubGlzdGVuZXJOYW1lJiYoaT1yLmxpc3RlbmVyTmFtZSk7dmFyIG89e3N1Y2Nlc3M6ITEsbWVzc2FnZTpcInVua25vd24gZXJyb3JcIn0sYT10aGlzLmV2VGFyZ2V0TGlzdGVuZXJzTWFwLmdldChlKTtpZighYSlyZXR1cm4gby5tZXNzYWdlPVwiRE9NIGVsZW1lbnQgXCIuY29uY2F0KGUsXCIoaWQ9XCIpLmNvbmNhdChlLmlkLFwiKSBkb2Vzbid0IGhhdmUgYW55IGxpc3RlbmVycy5cIiksbzt2YXIgcz1hLmdldCh0KTtpZighcylyZXR1cm4gby5tZXNzYWdlPVwiRE9NIGVsZW1lbnQgXCIuY29uY2F0KGUsXCIoaWQ9XCIpLmNvbmNhdChlLmlkLFwiKSBkb2Vzbid0IGhhdmUgXFxcIlwiKS5jb25jYXQodCwnXCIgbGlzdGVuZXJzLicpLG87aWYoaSl7dmFyIGw9cy5nZXQoaSk7aWYoIWwpcmV0dXJuIG8ubWVzc2FnZT1cIkRPTSBlbGVtZW50IFwiLmNvbmNhdChlLFwiKGlkPVwiKS5jb25jYXQoZS5pZCxcIikgZG9lc24ndCBoYXZlIFxcXCJcIikuY29uY2F0KHQsJ1wiIGxpc3RlbmVyIFwiJykuY29uY2F0KGksJ1wiJyksbztzLmRlbGV0ZShpKSxsLm9wdGlvbnMmJmwub3B0aW9ucy5jYWxsYmFja09uY2U/ZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsbC5vbmNlTGlzdGVuZXIsbC5vcHRpb25zKTplLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxsLmxpc3RlbmVyLGwub3B0aW9ucyksby5zdWNjZXNzPSEwfWVsc2UgaWYoIWkpe2lmKCFuKXJldHVybiBvLm1lc3NhZ2U9XCJvcHRpb25zLmxpc3RlbmVyTmFtZSBpcyBub3QgZm91bmRcIixvO3ZhciB1PVwibGlzdGVuZXJcIixjPW4sZj10aGlzLl9zZWFyY2hLZXlJblZhbHVlQ29udGVudChzLHUsYyk7aWYoZil7dmFyIHY9cy5nZXQoZikseT12Lm9uY2VMaXN0ZW5lcixwPXYub3B0aW9ucztzLmRlbGV0ZShmKSx5P2UucmVtb3ZlRXZlbnRMaXN0ZW5lcih0LHkscCk6ZS5yZW1vdmVFdmVudExpc3RlbmVyKHQsbixwKSxvLnN1Y2Nlc3M9ITB9ZWxzZSBvLnN1Y2Nlc3M9ITEsby5tZXNzYWdlPVwiU3BlY2lmaWVkIGxpc3RlbmVyIGNvdWxkIG5vdCBiZSBkZWxldGVkIGZyb20gRE9NIGVsZW1lbnQgXCIuY29uY2F0KGUsXCIoaWQ9XCIpLmNvbmNhdChlLmlkLFwiKS5cXG4gICAgICAgIFNpbmNlIHRoZSBzcGVjaWZpZWQgbGlzdGVuZXIgaXMgbm90IHJlZ2lzdGVyZWQgYXMgYW4gZXZlbnQgbGlzdGVuZXIsXFxuICAgICAgICBpdCBtYXkgaGF2ZSBiZWVuIHJlZ2lzdGVyZWQgb3V0c2lkZSBvZiBldmVudC1saXN0ZW5lci1oZWxwZXIuXCIpfXJldHVybiBvfX0se2tleTpcImdldEV2ZW50TGlzdGVuZXJzXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZT90P3RoaXMuX2dldEV2ZW50TGlzdGVuZXJzV2l0aDJBcmdzKGUsdCk6dGhpcy5fZ2V0RXZlbnRMaXN0ZW5lcnNXaXRoMUFyZyhlKTpbXX19LHtrZXk6XCJnZXRBbGxFdmVudExpc3RlbmVyc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PW5ldyBNYXA7cmV0dXJuIHRoaXMuZXZUYXJnZXRMaXN0ZW5lcnNNYXAuZm9yRWFjaCgoZnVuY3Rpb24obixyKXt2YXIgaT1yLGE9ZS5fZ2V0RXZlbnRMaXN0ZW5lcnNXaXRoMUFyZyhpKSxzPW5ldyBNYXA7dC5zZXQoaSxzKTt2YXIgbCx1PW8oYSk7dHJ5e2Zvcih1LnMoKTshKGw9dS5uKCkpLmRvbmU7KXt2YXIgYz1sLnZhbHVlO3Muc2V0KGMuZXZlbnRUeXBlLGMubGlzdGVuZXJzKX19Y2F0Y2goZSl7dS5lKGUpfWZpbmFsbHl7dS5mKCl9fSkpLHR9fSx7a2V5OlwiX2dldEV2ZW50TGlzdGVuZXJzV2l0aDFBcmdcIix2YWx1ZTpmdW5jdGlvbihlKXt2YXIgdD1bXSxuPXRoaXMuZXZUYXJnZXRMaXN0ZW5lcnNNYXAuZ2V0KGUpO2lmKCFuKXJldHVybiB0O3ZhciByLGE9byhuKTt0cnl7Zm9yKGEucygpOyEocj1hLm4oKSkuZG9uZTspe3ZhciBzLGw9aShyLnZhbHVlLDIpLHU9bFswXSxjPWxbMV0sZj1bXSx2PW8oYy52YWx1ZXMoKSk7dHJ5e2Zvcih2LnMoKTshKHM9di5uKCkpLmRvbmU7KXt2YXIgeT1zLnZhbHVlO2YucHVzaCh0aGlzLl9nZXRGcm96ZW5MaXN0ZW5lckRlZih5KSl9fWNhdGNoKGUpe3YuZShlKX1maW5hbGx5e3YuZigpfWYubGVuZ3RoPjAmJnQucHVzaCh7ZXZlbnRUeXBlOnUsbGlzdGVuZXJzOmZ9KX19Y2F0Y2goZSl7YS5lKGUpfWZpbmFsbHl7YS5mKCl9cmV0dXJuIHR9fSx7a2V5OlwiX2dldEV2ZW50TGlzdGVuZXJzV2l0aDJBcmdzXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtpZigyIT09YXJndW1lbnRzLmxlbmd0aCl0aHJvdyBFcnJvcihcIk9ubHkgdHdvIGFyZ3VtZW50cyBjYW4gYmUgc3BlY2lmaWVkXCIpO3ZhciBuPVtdLHI9dGhpcy5ldlRhcmdldExpc3RlbmVyc01hcC5nZXQoZSk7aWYoIXIpcmV0dXJuIG47dmFyIGk9ci5nZXQodCk7aWYoIWkpcmV0dXJuIG47dmFyIGEscz1vKGkudmFsdWVzKCkpO3RyeXtmb3Iocy5zKCk7IShhPXMubigpKS5kb25lOyl7dmFyIGw9YS52YWx1ZSx1PXRoaXMuX2dldEZyb3plbkxpc3RlbmVyRGVmKGwpO24ucHVzaCh1KX19Y2F0Y2goZSl7cy5lKGUpfWZpbmFsbHl7cy5mKCl9cmV0dXJuIG59fSx7a2V5OlwiZ2V0RXZlbnRMaXN0ZW5lclwiLHZhbHVlOmZ1bmN0aW9uKGUsdCxuKXtpZigzIT09YXJndW1lbnRzLmxlbmd0aCl0aHJvdyBFcnJvcihcIk9ubHkgMyBhcmd1bWVudHMgY2FuIGJlIHNwZWNpZmllZFwiKTt2YXIgcj10aGlzLmV2VGFyZ2V0TGlzdGVuZXJzTWFwLmdldChlKTtpZighcilyZXR1cm4gbnVsbDt2YXIgaT1yLmdldCh0KTtpZighaSlyZXR1cm4gbnVsbDt2YXIgbz1pLmdldChuKSxhPXRoaXMuX2dldEZyb3plbkxpc3RlbmVyRGVmKG8pO3JldHVybiBhfX0se2tleTpcImhhc0V2ZW50TGlzdGVuZXJzXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtpZigyIT09YXJndW1lbnRzLmxlbmd0aCl0aHJvdyBFcnJvcihcIk9ubHkgdHdvIGFyZ3VtZW50cyBjYW4gYmUgc3BlY2lmaWVkXCIpO3ZhciBuPXRoaXMuZXZUYXJnZXRMaXN0ZW5lcnNNYXAuZ2V0KGUpO2lmKCFuKXJldHVybiExO3ZhciByPW4uZ2V0KHQpO3JldHVybiEoIXJ8fDA9PT1yLnNpemUpfX0se2tleTpcImhhc0V2ZW50TGlzdGVuZXJcIix2YWx1ZTpmdW5jdGlvbihlLHQsbil7aWYoMyE9PWFyZ3VtZW50cy5sZW5ndGgpdGhyb3cgRXJyb3IoXCJPbmx5IDMgYXJndW1lbnRzIGNhbiBiZSBzcGVjaWZpZWRcIik7dmFyIHI9dGhpcy5ldlRhcmdldExpc3RlbmVyc01hcC5nZXQoZSk7aWYoIXIpcmV0dXJuITE7dmFyIGk9ci5nZXQodCk7aWYoIWkpcmV0dXJuITE7dmFyIG89aS5nZXQobik7cmV0dXJuISFvfX0se2tleTpcIl9nZXRGcm96ZW5MaXN0ZW5lckRlZlwiLHZhbHVlOmZ1bmN0aW9uKGUpe2lmKCFlKXJldHVybiBudWxsO3ZhciB0PXt9LG49bnVsbCxyPWUub3B0aW9ucztyZXR1cm4gciYmKG49e30sdC5vcHRpb25zPW4sci5jYXB0dXJlJiYobi5jYXB0dXJlPXIuY2FwdHVyZSksci5jYWxsYmFja09uY2UmJihuLm9uY2U9ci5jYWxsYmFja09uY2UpLHIubGlzdGVuZXJOYW1lJiYobi5saXN0ZW5lck5hbWU9ci5saXN0ZW5lck5hbWUpKSx0Lmxpc3RlbmVyPWUubGlzdGVuZXIsT2JqZWN0LmZyZWV6ZShuKSxPYmplY3QuZnJlZXplKHQpLHR9fSx7a2V5OlwiY2xlYXJBbGxFdmVudExpc3RlbmVyc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGUsdD1vKHRoaXMuZ2V0QWxsRXZlbnRUYXJnZXRzKCkpO3RyeXtmb3IodC5zKCk7IShlPXQubigpKS5kb25lOyl7dmFyIG49ZS52YWx1ZTt0aGlzLmNsZWFyRXZlbnRMaXN0ZW5lcnMobil9fWNhdGNoKGUpe3QuZShlKX1maW5hbGx5e3QuZigpfX19LHtrZXk6XCJjbGVhckV2ZW50TGlzdGVuZXJzXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXtpZighZSl0aHJvdyBFcnJvcihcIkF0IGxlYXN0IHRoZSBFdmVudFRhcmdldCBtdXN0IGJlIHNwZWNpZmllZCBhcyBhbiBhcmd1bWVudFwiKTt2YXIgbj10aGlzLmdldEV2ZW50TGlzdGVuZXJzKGUsdCk7aWYodCl7aWYodCl7dmFyIHIsaT1vKG4pO3RyeXtmb3IoaS5zKCk7IShyPWkubigpKS5kb25lOyl7dmFyIGE9ci52YWx1ZTt0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZSx0LG51bGwsYS5vcHRpb25zKX19Y2F0Y2goZSl7aS5lKGUpfWZpbmFsbHl7aS5mKCl9fX1lbHNle3ZhciBzLGw9byhuKTt0cnl7Zm9yKGwucygpOyEocz1sLm4oKSkuZG9uZTspe3ZhciB1LGM9cy52YWx1ZSxmPWMuZXZlbnRUeXBlLHY9byhjLmxpc3RlbmVycyk7dHJ5e2Zvcih2LnMoKTshKHU9di5uKCkpLmRvbmU7KXt2YXIgeT11LnZhbHVlLm9wdGlvbnM7dGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGUsZixudWxsLHkpfX1jYXRjaChlKXt2LmUoZSl9ZmluYWxseXt2LmYoKX19fWNhdGNoKGUpe2wuZShlKX1maW5hbGx5e2wuZigpfX19fSx7a2V5OlwiY2xlYXJFdmVudExpc3RlbmVyXCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByPXRoaXMuZ2V0RXZlbnRMaXN0ZW5lcihlLHQsbik7ciYmci5vcHRpb25zJiZ0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoZSx0LG51bGwsci5vcHRpb25zKX19LHtrZXk6XCJnZXRBbGxFdmVudFRhcmdldHNcIix2YWx1ZTpmdW5jdGlvbigpe3JldHVybiBBcnJheS5mcm9tKHRoaXMuZXZUYXJnZXRMaXN0ZW5lcnNNYXAua2V5cygpKX19LHtrZXk6XCJzZWFyY2hFdmVudExpc3RlbmVyc0J5TmFtZVwiLHZhbHVlOmZ1bmN0aW9uKGUpe3ZhciB0LG49W10scj1vKHRoaXMuZ2V0QWxsRXZlbnRUYXJnZXRzKCkpO3RyeXtmb3Ioci5zKCk7ISh0PXIubigpKS5kb25lOyl7dmFyIGksYT10LnZhbHVlLHM9dGhpcy5ldlRhcmdldExpc3RlbmVyc01hcC5nZXQoYSksbD1vKHMua2V5cygpKTt0cnl7Zm9yKGwucygpOyEoaT1sLm4oKSkuZG9uZTspe3ZhciB1PWkudmFsdWUsYz1zLmdldCh1KSxmPXRoaXMuX2dldEZyb3plbkxpc3RlbmVyRGVmKGMuZ2V0KGUpKTtmJiZuLnB1c2goZil9fWNhdGNoKGUpe2wuZShlKX1maW5hbGx5e2wuZigpfX19Y2F0Y2goZSl7ci5lKGUpfWZpbmFsbHl7ci5mKCl9cmV0dXJuIG59fSx7a2V5OlwiX3NlYXJjaEtleUluVmFsdWVDb250ZW50XCIsdmFsdWU6ZnVuY3Rpb24oZSx0LG4pe3ZhciByLGE9byhlKTt0cnl7Zm9yKGEucygpOyEocj1hLm4oKSkuZG9uZTspe3ZhciBzPWkoci52YWx1ZSwyKSxsPXNbMF07aWYoc1sxXVt0XT09PW4pcmV0dXJuIGx9fWNhdGNoKGUpe2EuZShlKX1maW5hbGx5e2EuZigpfXJldHVybiBudWxsfX0se2tleTpcIl9jaGVja1R5cGVPZk9wdGlvbnNcIix2YWx1ZTpmdW5jdGlvbihlKXtpZihcIm9iamVjdFwiIT09cihlKSYmdm9pZCAwIT09ZSl0aHJvd1wiYm9vbGVhblwiPT10eXBlb2YgZT9uZXcgRXJyb3IoXCJUeXBlIG9mIGJvb2xlYW4gaXMgbm90IGFjY2VwdGVkIGFzIHRoZSBmb3VydGggYXJndW1lbnQgeW91IHNwZWNpZnkuXFxuICAgICAgSWYgeW91IHdhbnQgdG8gZW5hYmxlIHVzZUNhcHR1cmUsIHNwZWNpZnkge2NhcHR1cmU6IHRydWV9IGFzIHRoZSBmb3VydGggcGFyYW1ldGVyIGluc3RlYWQuXCIpOm5ldyBFcnJvcihcIlR5cGUgb2YgXCIuY29uY2F0KHIoZSksXCIgaXMgbm90IGFjY2VwdGVkIGFzIHRoZSBmb3VydGggYXJndW1lbnQgeW91IHNwZWNpZnkuXFxuICAgICAgSWYgeW91IHdhbnQgdG8gc3BlY2lmeSBvcHRpb25zLCBzcGVjaWZ5IGFuIG9iamVjdCBsaWtlIHtjYXB0dXJlOiB0cnVlLCBsaXN0ZW5lck5hbWU6J215LWxpc3RlbmVyLTAxJ30uXCIpKX19LHtrZXk6XCJfY2xvbmVKc29uXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZSkpfX0se2tleTpcInR5cGVPZlwiLHZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkuc2xpY2UoOCwtMSl9fV0pJiZsKHQucHJvdG90eXBlLG4pLGEmJmwodCxhKSxlfSgpfV0pLmRlZmF1bHR9KSk7IiwiLyohIG1lcmdlLWRlZXBseSB2Mi4xLjEgQ29weXJpZ2h0IChjKSAyMDE5LTIwMjAgcml2ZXJzdW4ub3JnQGdtYWlsLmNvbSAqL1xuIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoXCJtZXJnZURlZXBseVwiLFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMubWVyZ2VEZWVwbHk9dCgpOmUubWVyZ2VEZWVwbHk9dCgpfSh0aGlzLChmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD17fTtmdW5jdGlvbiByKG4pe2lmKHRbbl0pcmV0dXJuIHRbbl0uZXhwb3J0czt2YXIgbz10W25dPXtpOm4sbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtuXS5jYWxsKG8uZXhwb3J0cyxvLG8uZXhwb3J0cyxyKSxvLmw9ITAsby5leHBvcnRzfXJldHVybiByLm09ZSxyLmM9dCxyLmQ9ZnVuY3Rpb24oZSx0LG4pe3IubyhlLHQpfHxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHtlbnVtZXJhYmxlOiEwLGdldDpufSl9LHIucj1mdW5jdGlvbihlKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxyLnQ9ZnVuY3Rpb24oZSx0KXtpZigxJnQmJihlPXIoZSkpLDgmdClyZXR1cm4gZTtpZig0JnQmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZlJiZlLl9fZXNNb2R1bGUpcmV0dXJuIGU7dmFyIG49T2JqZWN0LmNyZWF0ZShudWxsKTtpZihyLnIobiksT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6ZX0pLDImdCYmXCJzdHJpbmdcIiE9dHlwZW9mIGUpZm9yKHZhciBvIGluIGUpci5kKG4sbyxmdW5jdGlvbih0KXtyZXR1cm4gZVt0XX0uYmluZChudWxsLG8pKTtyZXR1cm4gbn0sci5uPWZ1bmN0aW9uKGUpe3ZhciB0PWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiByLmQodCxcImFcIix0KSx0fSxyLm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LHIucD1cIi9cIixyKHIucz0wKX0oW2Z1bmN0aW9uKGUsdCxyKXtlLmV4cG9ydHM9cigxKX0sZnVuY3Rpb24oZSx0LHIpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIGMoZSl9KGUpfHxmdW5jdGlvbihlKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGUpKXJldHVybiBBcnJheS5mcm9tKGUpfShlKXx8aShlKXx8ZnVuY3Rpb24oKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiBvKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIGV9KGUpfHxmdW5jdGlvbihlLHQpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBTeW1ib2x8fCEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChlKSkpcmV0dXJuO3ZhciByPVtdLG49ITAsbz0hMSxpPXZvaWQgMDt0cnl7Zm9yKHZhciBjLGE9ZVtTeW1ib2wuaXRlcmF0b3JdKCk7IShuPShjPWEubmV4dCgpKS5kb25lKSYmKHIucHVzaChjLnZhbHVlKSwhdHx8ci5sZW5ndGghPT10KTtuPSEwKTt9Y2F0Y2goZSl7bz0hMCxpPWV9ZmluYWxseXt0cnl7bnx8bnVsbD09YS5yZXR1cm58fGEucmV0dXJuKCl9ZmluYWxseXtpZihvKXRocm93IGl9fXJldHVybiByfShlLHQpfHxpKGUsdCl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiBpKGUsdCl7aWYoZSl7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpcmV0dXJuIGMoZSx0KTt2YXIgcj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkuc2xpY2UoOCwtMSk7cmV0dXJuXCJPYmplY3RcIj09PXImJmUuY29uc3RydWN0b3ImJihyPWUuY29uc3RydWN0b3IubmFtZSksXCJNYXBcIj09PXJ8fFwiU2V0XCI9PT1yP0FycmF5LmZyb20oZSk6XCJBcmd1bWVudHNcIj09PXJ8fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KHIpP2MoZSx0KTp2b2lkIDB9fWZ1bmN0aW9uIGMoZSx0KXsobnVsbD09dHx8dD5lLmxlbmd0aCkmJih0PWUubGVuZ3RoKTtmb3IodmFyIHI9MCxuPW5ldyBBcnJheSh0KTtyPHQ7cisrKW5bcl09ZVtyXTtyZXR1cm4gbn1mdW5jdGlvbiBhKGUpe3JldHVybihhPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9KShlKX1mdW5jdGlvbiB1KGUsdCxyKXt2YXIgaT1mdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJvYmplY3RcIj09PWEoZSkmJiFBcnJheS5pc0FycmF5KGUpfSxjPXImJnIuY29uY2F0QXJyYXksZj17fTtyJiZyLmFzc2lnblRvT2JqZWN0JiYoZj1yLmFzc2lnblRvT2JqZWN0LHIuYXNzaWduVG9PYmplY3Q9bnVsbCk7dmFyIGwseSxiLHA9bnVsbDtpZihwPWY9PT1lP2U6T2JqZWN0LmFzc2lnbihmLGUpLGkoZSkmJmkodCkpZm9yKHZhciBzPTAsZD1PYmplY3QuZW50cmllcyh0KTtzPGQubGVuZ3RoO3MrKyl7dmFyIG09byhkW3NdLDIpLGo9bVswXSxnPW1bMV0sdj1lW2pdO2MmJkFycmF5LmlzQXJyYXkoZykmJkFycmF5LmlzQXJyYXkodikmJnQhPT1lP3Bbal09di5jb25jYXQuYXBwbHkodixuKGcpKTppKGcpJiZPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSxqKT9wW2pdPXUodixnLHIpOk9iamVjdC5hc3NpZ24ocCwoYj1nLCh5PWopaW4obD17fSk/T2JqZWN0LmRlZmluZVByb3BlcnR5KGwseSx7dmFsdWU6YixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmxbeV09YixsKSl9cmV0dXJuIHB9ZnVuY3Rpb24gZihlKXt2YXIgdD1udWxsLHI9bnVsbCxuPWUub3A7aWYoIW4pdGhyb3cgRXJyb3IoJ1RoZSBpbml0aWFsaXphdGlvbiBwcm9wZXJ0eSBcIm9wXCIgY2Fubm90IGJlIG9taXR0ZWQuIFwibWVyZ2VcIixcIm92ZXJ3cml0ZS1tZXJnZVwiLFwiY2xvbmVcIiBjYW4gYmUgc3BlY2lmaWVkLicpO3ZhciBvPVwibWVyZ2VcIj09PW4saT1cImNsb25lXCI9PT1uLGM9XCJvdmVyd3JpdGUtbWVyZ2VcIj09PW47aWYobyl7aWYodD1lLm9iamVjdDEscj1lLm9iamVjdDIsIXR8fCFyKXRocm93IEVycm9yKFwib2JqZWN0MSBvciBvYmplY3QyIGlzIG5vdCBzcGVjaWZpZWQuXCIpfWVsc2UgaWYoYyl7aWYodD1lLm9iamVjdDEscj1lLm9iamVjdDIsIXR8fCFyKXRocm93IEVycm9yKFwib2JqZWN0MSBvciBvYmplY3QyIGlzIG5vdCBzcGVjaWZpZWQuXCIpO2lmKDA9PT1PYmplY3Qua2V5cyhyKS5sZW5ndGgpcmV0dXJuIG51bGx9ZWxzZXtpZighaSl0aHJvdyBFcnJvcignQW4gaW52YWxpZCBcIm9wXCIgcHJvcGVydHkgdmFsdWUgXCInLmNvbmNhdChuLCdcIiBoYXMgYmVlbiBzcGVjaWZpZWQuJykpO3Q9ZS5vYmplY3QxLHI9e319dmFyIGEsZj1PYmplY3QuY3JlYXRlKE9iamVjdC5nZXRQcm90b3R5cGVPZih0KSksbD1udWxsLHk9KGE9dCxPYmplY3QuZ2V0UHJvdG90eXBlT2YoYSkhPT1PYmplY3QucHJvdG90eXBlKTtyZXR1cm4gbyYmeXx8aT8odSh0LHQse2Fzc2lnblRvT2JqZWN0OmYsY29uY2F0QXJyYXk6ZSYmZS5jb25jYXRBcnJheX0pLGw9Zik6bD17fSx1KGk/bDp0LHIse2Fzc2lnblRvT2JqZWN0OmM/dDpsLGNvbmNhdEFycmF5OmUmJmUuY29uY2F0QXJyYXl9KSxsfXIucih0KSxyLmQodCxcImRlZmF1bHRcIiwoZnVuY3Rpb24oKXtyZXR1cm4gZn0pKX1dKS5kZWZhdWx0fSkpOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiQ0FMSUdOID0ge307XG5cbkNBTElHTi5MRUZUX1RPUCA9ICdMRUZUX1RPUCc7XG5DQUxJR04uSENFTlRFUl9UT1AgPSAnQ0VOVEVSX1RPUCc7XG5DQUxJR04uUklHSFRfVE9QID0gJ1JJR0hUX1RPUCc7XG5DQUxJR04uTEVGVF9WQ0VOVEVSID0gJ0xFRlRfQ0VOVEVSJztcbkNBTElHTi5IQ0VOVEVSX1ZDRU5URVIgPSAnQ0VOVEVSX0NFTlRFUic7XG5DQUxJR04uQ0VOVEVSID0gQ0FMSUdOLkhDRU5URVJfVkNFTlRFUjtcbkNBTElHTi5SSUdIVF9WQ0VOVEVSID0gJ1JJR0hUX0NFTlRFUic7XG5DQUxJR04uTEVGVF9CT1RUT00gPSAnTEVGVF9CT1RUT00nO1xuQ0FMSUdOLkhDRU5URVJfQk9UVE9NID0gJ0NFTlRFUl9CT1RUT00nO1xuQ0FMSUdOLlJJR0hUX0JPVFRPTSA9ICdSSUdIVF9CT1RUT00nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENBTElHTjtcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vSlNGcmFtZS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4vSlNGcmFtZS5jc3MnKTtcbnZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdAcml2ZXJzdW4vZXZlbnQtZW1pdHRlcicpO1xudmFyIENBTElHTiA9IHJlcXVpcmUoJy4vQ0NvbW1vbi5qcycpO1xudmFyIFdpbmRvd0V2ZW50SGVscGVyID0gcmVxdWlyZSgnLi91dGlscy9XaW5kb3dFdmVudEhlbHBlci5qcycpO1xudmFyIGluaGVyaXQgPSByZXF1aXJlKCcuL3V0aWxzL0luaGVyaXQuanMnKTtcbnZhciBDRnJhbWVBcHBlYXJhbmNlID0gcmVxdWlyZSgnLi9hcHBlYXJhbmNlL0NGcmFtZUFwcGVhcmFuY2UuanMnKTtcbnZhciBDRG9tUGFydHNCdWlsZGVyID0gcmVxdWlyZSgnLi9hcHBlYXJhbmNlL0NEb21QYXJ0c0J1aWxkZXIuanMnKTtcbnZhciBDU2ltcGxlTGF5b3V0QW5pbWF0b3IgPSByZXF1aXJlKCcuL3V0aWxzL0NTaW1wbGVMYXlvdXRBbmltYXRvci5qcycpO1xudmFyIEV2ZW50TGlzdGVuZXJIZWxwZXIgPSByZXF1aXJlKCdldmVudC1saXN0ZW5lci1oZWxwZXInKTtcblxuLy9JZiB5b3UgZG9uJ3Qgd2FudCB0byBidW5kbGUgcHJlc2V0IHN0eWxlcyBpbiBKc0ZyYW1lLmpzICxjb21tZW50IG91dCBiZWxvdy5cbnZhciBwcmVzZXRTdHlsZXMgPSB7XG4gICd5b3NlbWl0ZSc6IHJlcXVpcmUoJy4vcHJlc2V0cy9hcHBlYXJhbmNlL1ByZXNldFN0eWxlWW9zZW1pdGUuanMnKSxcbiAgJ3JlZHN0b25lJzogcmVxdWlyZSgnLi9wcmVzZXRzL2FwcGVhcmFuY2UvUHJlc2V0U3R5bGVSZWRzdG9uZS5qcycpLFxuICAncG9wdXAnOiByZXF1aXJlKCcuL3ByZXNldHMvYXBwZWFyYW5jZS9QcmVzZXRTdHlsZVBvcHVwLmpzJyksXG4gICd0b2FzdCc6IHJlcXVpcmUoJy4vcHJlc2V0cy9hcHBlYXJhbmNlL1ByZXNldFN0eWxlVG9hc3QuanMnKSxcbiAgJ21hdGVyaWFsJzogcmVxdWlyZSgnLi9wcmVzZXRzL2FwcGVhcmFuY2UvUHJlc2V0U3R5bGVNYXRlcmlhbC5qcycpLFxufTtcblxudmFyIHByZXNldFdpbmRvd3MgPSB7XG4gICd5b3NlbWl0ZSc6IHJlcXVpcmUoJy4vcHJlc2V0cy93aW5kb3cvUHJlc2V0V2luZG93WW9zZW1pdGUuanMnKSxcbn07XG5cbnZhciBERUYgPSB7fTtcblxuLy8gdHJ1ZTpTdXBwb3J0IG1vdXNlIG9uIG1vdXNlLWVuYWJsZWQgZGV2aWNlc1xudmFyIE1PVVNFX0VOQUJMRUQgPSB0cnVlO1xuXG4vLyB0cnVlOlN1cHBvcnQgdG91Y2ggb24gdG91Y2gtZW5hYmxlZCBkZXZpY2VzXG52YXIgVE9VQ0hfRU5BQkxFRCA9IHRydWU7XG5cbi8vdHJ1ZTpBbGxvdyB0aGUgd2luZG93IHRvIGJlIG1vdmVkIG9ubHkgaW4gdGhlIGNhc2Ugb2Ygb25lIGZpbmdlclxuLy8gKHRoZSB3aW5kb3cgY2Fubm90IGJlIG1vdmVkIGluIHRoZSBjYXNlIG9mIHR3byBvciBtb3JlIGZpbmdlcnMpXG52YXIgVE9VQ0hfTU9WRV9PTkxZX1dJVEhfT05FX0ZJTkdFUiA9IHRydWU7XG5cblxuLyoqXG4gKiBERUZJTklUSU9OU1xuICovXG5ERUYuQ0JFQU4gPSB7fTtcbkRFRi5DQkVBTi5IVE1MX0VMRU1FTlQgPSAnc3Bhbic7XG5ERUYuQ0JFQU4uSFRNTF9FTEVNRU5UX0lEX1BSRUZJWCA9ICdodG1sRWxlbWVudF8nO1xuREVGLkNCRUFOLlRZUEVfTkFNRSA9ICdiZWFuJztcblxuXG4vLystKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy1cblxuXG4vKipcbiAqIENCZWFuRnJhbWUgQ2xhc3M8cD5cbiAqIFRoZSBzbWFsbGVzdCB3aW5kb3cuIEl0IGlzIHJlc3BvbnNpYmxlIGZvciBiYXNpYyBwcm9jZXNzaW5nIG9ubHkuXG4gKlxuICogQHBhcmFtIGJlYW5JZCBpZCBvZiB0aGlzIHNtYWxsIHdpbmRvd1xuICogQHBhcmFtIGxlZnRcbiAqIEBwYXJhbSB0b3BcbiAqIEBwYXJhbSB3aWR0aFxuICogQHBhcmFtIGhlaWdodFxuICogQHBhcmFtIHppbmRleFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIENCZWFuRnJhbWUoYmVhbklkLCBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQsIHppbmRleCwgd19ib3JkZXJfd2lkdGgsIGFwcGVhcmFuY2UpIHtcblxuICB2YXIgbWUgPSB0aGlzO1xuXG4gIG1lLm1vdmFibGUgPSB0cnVlO1xuXG5cbiAgLy9maWVsZHNcbiAgbWUuaWQgPSBiZWFuSWQ7XG4gIG1lLnByb3BlcnR5ID0ge307XG5cbiAgbWUuZXh0cmEgPSB7fTtcblxuICBtZS5wYXJlbnRDYW52YXMgPSBudWxsO1xuICBtZS5odG1sRWxlbWVudCA9IG51bGw7XG5cbiAgbWUucHVsbFVwRGlzYWJsZWQgPSBmYWxzZTtcbiAgaWYgKGFwcGVhcmFuY2UpIHtcbiAgICBtZS5wdWxsVXBEaXNhYmxlZCA9IGFwcGVhcmFuY2UucHVsbFVwRGlzYWJsZWQ7XG4gIH1cblxuXG4gIC8vaW5pdGlhbGl6ZVxuICBtZS5odG1sRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoREVGLkNCRUFOLkhUTUxfRUxFTUVOVCk7XG4gIG1lLmh0bWxFbGVtZW50LmlkID0gREVGLkNCRUFOLkhUTUxfRUxFTUVOVF9JRF9QUkVGSVggKyBiZWFuSWQ7XG4gIG1lLmh0bWxFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgbWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9IHBhcnNlSW50KGxlZnQsIDEwKSArICdweCc7XG4gIG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCA9IHBhcnNlSW50KHRvcCwgMTApICsgJ3B4JztcbiAgbWUuaHRtbEVsZW1lbnQuc3R5bGUud2lkdGggPSBwYXJzZUludCh3aWR0aCwgMTApICsgJ3B4JztcbiAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gcGFyc2VJbnQoaGVpZ2h0LCAxMCkgKyAncHgnO1xuXG5cbiAgLy9aaW5kZXggbWF5IGJlY29tZSAndW5kZWZpbmVkJyBpbiBzb21lIGNhc2VzLlxuICBpZiAoemluZGV4ICE9PSBudWxsKSB7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuekluZGV4ID0gemluZGV4O1xuICB9XG4gIG1lLmh0bWxFbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gJyMwMDAwMDAnO1xuXG4gIC8vSWYgSSBzZXQgYSBsYXJnZXIgZm9udCBzaXplLCB3aWR0aCBhbmQgaGVpZ2h0IG9mIHdpbmRvdyB3aWxsIGJlIGFmZmVjdGVkLi4uLlxuICBtZS5odG1sRWxlbWVudC5zdHlsZS5mb250U2l6ZSA9ICcxcHgnO1xuXG4gIC8vUmVmZXIgcGFyZW50cyB0byBlYWNoIG90aGVyLihzb3Vnby1zYW5zaG8pXG4gIG1lLmh0bWxFbGVtZW50LnBhcmVudCA9IG1lO1xuXG4gIGlmIChNT1VTRV9FTkFCTEVEKSB7XG4gICAgLy9Ob3RlIHRoYXQgJ21vdXNlRG93bicgaXMgbWFwcGVkIHRvICdvbm1vdXNlZG93bicgb2YgaHRtbEVsZW1lbnQsXG4gICAgLy9zbyB3aGVuICdvbm1vdXNlRG93bicgZmlyZXMgLHRoZSAndGhpcycgd2lsbCBpbmRpY2F0ZSAnaHRtbEVsZW1lbnQnXG4gICAgbWUuaHRtbEVsZW1lbnQub25tb3VzZWRvd24gPSBtZS5vbm1vdXNlRG93bjtcbiAgfVxuXG4gIGlmIChUT1VDSF9FTkFCTEVEKSB7XG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykge1xuICAgICAgdmFyIGZ1bmNPblRvdWNoU3RhcnQgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgLy8gVGhlIFwibW91c2Vkb3duXCIgZXZlbnQgaGFwcGVucyByaWdodCBhZnRlciBcInRvdWNoc3RhcnRcIiBldmVudCxcbiAgICAgICAgLy8gYnV0IEkgZG9uJ3QgY2FsbCAjcHJldmVudGRlZmF1bHQgYmVjYXVzZSAjcHJldmVudGRlZmF1bHQgcHJldmVudHMgXCJvbmNsaWNrXCIuXG4gICAgICAgIC8vIFNvLCBwZXJmb3JtICNwcmV2ZW50ZGVmYXVsdCBvbmx5IGZvciBcInRvdWNobW92ZVwiXG4gICAgICAgIC8vIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBtZS5vbm1vdXNlRG93bi5iaW5kKHRoaXMpKGV2dCk7XG4gICAgICB9O1xuICAgICAgbWUuaHRtbEVsZW1lbnQub250b3VjaHN0YXJ0ID0gZnVuY09uVG91Y2hTdGFydDtcbiAgICB9XG4gIH1cblxuICAvL1R5cGUgbmFtZSBvZiB0aGlzIGNsYXNzXG4gIG1lLmh0bWxFbGVtZW50LnR5cGVOYW1lID0gREVGLkNCRUFOLlRZUEVfTkFNRTtcblxuICAvL1NwZWNpYWwgZmllbGQgaW5kaWNhdGluZyB1c2FnZSBvZiB0aGlzIGNsYXNzXG4gIG1lLmh0bWxFbGVtZW50LnVzYWdlID0gJ25vdGhpbmcnO1xuXG4gIC8vV2hldGhlciBpdCBjYW4gbW92ZSBvdXRzaWRlIHRoZSBmcmFtZSh3YWt1KS5cbiAgbWUuaHRtbEVsZW1lbnQuaXNSYW5nZUxpbWl0ZWQgPSBmYWxzZTtcblxuICAvL01vdmVtZW50IG1hZ25pZmljYXRpb24gaW4gdGhlIFggZGlyZWN0aW9uXG4gIC8vKElmIGl0IGlzIDAsIGl0IGNhbiBub3QgbW92ZSBpbiB0aGUgWCBkaXJlY3Rpb24uKVxuICBtZS5odG1sRWxlbWVudC5hcmdYID0gMTtcblxuICAvL01vdmVtZW50IG1hZ25pZmljYXRpb24gaW4gWSBkaXJlY3Rpb25cbiAgLy8gKElmIGl0IGlzIDAsIGl0IGNhbiBub3QgbW92ZSBpbiBZIGRpcmVjdGlvbilcbiAgbWUuaHRtbEVsZW1lbnQuYXJnWSA9IDE7XG4gIG1lLmV4dGVybmFsQXJlYUNsaWNrZWRMaXN0ZW5lciA9IG51bGw7XG5cbiAgbWUub25Nb3ZlTGlzdGVuZXIgPSBudWxsO1xufVxuXG5DQmVhbkZyYW1lLnByb3RvdHlwZS5nZXRXaW5kb3dUeXBlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnQ0JlYW5GcmFtZSc7XG59O1xuXG5DQmVhbkZyYW1lLnByb3RvdHlwZS5zZXRPbk1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIG1lLm9uTW92ZUxpc3RlbmVyID0gbGlzdGVuZXI7XG59O1xuQ0JlYW5GcmFtZS5wcm90b3R5cGUuX29uTW92ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgaWYgKG1lLm9uTW92ZUxpc3RlbmVyKSB7XG4gICAgbWUub25Nb3ZlTGlzdGVuZXIoZSk7XG4gIH1cbn07XG5cbi8qKlxuICogU2V0IHdoZXRoZXIgdGhlIGZyYW1lIGNhbiBiZSBtb3ZlZCB3aGlsZSBkcmFnZ2luZyB3aXRoIHRoZSBtb3VzZVxuICogQHBhcmFtIGVuYWJsZWRcbiAqL1xuQ0JlYW5GcmFtZS5wcm90b3R5cGUuc2V0TW92YWJsZSA9IGZ1bmN0aW9uKGVuYWJsZWQpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICBpZiAoZW5hYmxlZCkge1xuICAgIG1lLmh0bWxFbGVtZW50LmFyZ1ggPSAxO1xuICAgIG1lLmh0bWxFbGVtZW50LmFyZ1kgPSAxO1xuICB9IGVsc2Uge1xuICAgIG1lLmh0bWxFbGVtZW50LmFyZ1ggPSAwO1xuICAgIG1lLmh0bWxFbGVtZW50LmFyZ1kgPSAwO1xuICB9XG5cbiAgbWUubW92YWJsZSA9IGVuYWJsZWQ7XG5cbiAgcmV0dXJuIG1lO1xufTtcblxuXG5DQmVhbkZyYW1lLnByb3RvdHlwZS5zZXRQYXJlbnRDYW52YXMgPSBmdW5jdGlvbihwYXJlbnRDYW52YXMpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgbWUucGFyZW50Q2FudmFzID0gcGFyZW50Q2FudmFzO1xuICBtZS5odG1sRWxlbWVudC5wYXJlbnRDYW52YXMgPSBtZS5wYXJlbnRDYW52YXM7XG4gIHJldHVybiBtZTtcbn07XG5DQmVhbkZyYW1lLnByb3RvdHlwZS5zZXRPbkV4dGVybmFsQXJlYUNsaWNrZWRMaXN0ZW5lciA9IGZ1bmN0aW9uKGxpc3RlbmVyKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIG1lLmV4dGVybmFsQXJlYUNsaWNrZWRMaXN0ZW5lciA9IGxpc3RlbmVyO1xuICByZXR1cm4gbWU7XG59O1xuQ0JlYW5GcmFtZS5wcm90b3R5cGUub25Cb2R5Q2xpY2tlZCA9IGZ1bmN0aW9uKGUpIHtcblxuICB2YXIgbWUgPSB0aGlzO1xuXG4gIHZhciBjbGlja1ggPSBlLnBhZ2VYO1xuICB2YXIgY2xpY2tZID0gZS5wYWdlWTtcblxuICB2YXIgbGVmdCA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQpO1xuICB2YXIgdG9wID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wKTtcbiAgdmFyIHdpZHRoID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUud2lkdGgpO1xuICB2YXIgaGVpZ2h0ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0KTtcblxuICBpZiAobGVmdCA8IGNsaWNrWCAmJiBjbGlja1ggPCAobGVmdCArIHdpZHRoKSAmJiB0b3AgPCBjbGlja1kgJiYgKGNsaWNrWSA8IHRvcCArIGhlaWdodCkpIHtcbiAgICAvLy0gY2xpY2tlZCBpbnRlcm5hbCBhcmVhIG9mIHRoaXMgZnJhbWVcbiAgfSBlbHNlIHtcblxuICAgIC8vLSBjbGlja2VkIGV4dGVybmFsIGFyZWEgb2YgdGhpcyBmcmFtZVxuICAgIGlmIChtZS5leHRlcm5hbEFyZWFDbGlja2VkTGlzdGVuZXIpIHtcbiAgICAgIG1lLmV4dGVybmFsQXJlYUNsaWNrZWRMaXN0ZW5lcigpO1xuICAgIH1cblxuICB9XG5cblxufTtcbkNCZWFuRnJhbWUucHJvdG90eXBlLm9ubW91c2VEb3duID0gZnVuY3Rpb24oZXZ0KSB7XG5cbiAgLy8gVHlwaWNhbGx5LCBpZiB5b3UgbW91c2UgZG93biBvbiB0aGUgdGl0bGUgcG9ydGlvbiwgdGhlIG9ubW91c2Vkb3duIGZpcmVzIHRvIG1vdmUgdGhlIHdpbmRvdy5cbiAgLy8gTW91c2luZyBkb3duIHRoZSBib3R0b20gb2YgdGhlIHdpbmRvdywgdGhlIGxlZnQgc2lkZSBvZiB0aGUgd2luZG93LFxuICAvLyBvciB0aGUgYm90dG9tIG9mIHRoZSB3aW5kb3cgd2lsbCBmaXJlIHRoZSBvbm1vdXNlRG93biBvZiB0aGUgd2luZG93IGl0c2VsZiAoQ0JlYW5GcmFtZSlcbiAgLy8gYXMgd2VsbCBhcyB0aGUgb25tb3VzZURvd24gb2YgdGhlIENNYXJrZXJXaW5kb3cgZm9yIHJlc2l6aW5nLlxuICAvLyBFYWNoIG1vdXNlZG93biBlbGVtZW50IGlzIHNldCB0byBhIGN1cnJlbnRPYmplY3QgYXMgYmVpbmcgc2VsZWN0ZWQsXG4gIC8vIHdoZXRoZXIgaXQncyBhIHdpbmRvdyBvciBhIG1hcmtlci5cblxuICAvLyB0aGlzIG1lYW5zIGh0bWxFbGVtZW50IG9mIENCZWFuRnJhbWUgb2JqZWN0XG4gIHZhciByZWZIdG1sRWxlbWVudCA9IHRoaXM7XG5cbiAgdmFyIGUgPSBldnQ7XG5cbiAgaWYgKFRPVUNIX0VOQUJMRUQpIHtcbiAgICBpZiAoZXZ0LnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgICAgdmFyIGNoYW5nZWRUb3VjaGVzID0gZXZ0LmNoYW5nZWRUb3VjaGVzO1xuICAgICAgaWYgKFRPVUNIX01PVkVfT05MWV9XSVRIX09ORV9GSU5HRVIpIHtcbiAgICAgICAgdmFyIHRvdWNoZXMgPSBldnQudG91Y2hlcztcbiAgICAgICAgaWYgKHRvdWNoZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgZSA9IGNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlID0gY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy9SZXRyaWV2ZSBDQmVhbkZyYW1lIG9iamVjdCBpdHNlbGZcbiAgdmFyIHJlZkNCZWFuRnJhbWUgPSByZWZIdG1sRWxlbWVudC5wYXJlbnQ7XG5cbiAgaWYgKGUuYnV0dG9uID09IDAgfHwgZXZ0LnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgIC8vIGZvciBtb2RhbCBiYWNrZ3JvdW5kIHdpbmRvd1xuICAgIGlmIChyZWZDQmVhbkZyYW1lLnB1bGxVcERpc2FibGVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcblxuICAgICAgLy8gU2V0IHRoZSBjdXJyZW50IENCZWFuRnJhbWUgdG8gYmUgc2VsZWN0ZWQoPWN1cnJlbnRPYmplY3QpIGFtb25nIG90aGVyIENCZWFuRnJhbWVzIGluIHRoZSBwYXJlbnQgY2FudmFzLlxuICAgICAgcmVmSHRtbEVsZW1lbnQucGFyZW50Q2FudmFzLmN1cnJlbnRPYmplY3QgPSByZWZIdG1sRWxlbWVudDtcblxuICAgICAgLy8gQnJpbmcgdGhlIGN1cnJlbnQgYmVhbiB0byB0aGUgdG9wXG4gICAgICByZWZIdG1sRWxlbWVudC5wYXJlbnRDYW52YXMucHVsbFVwKHJlZkNCZWFuRnJhbWUuaWQpO1xuICAgIH1cblxuICB9IGVsc2UgaWYgKGUuYnV0dG9uID09IDIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAocmVmSHRtbEVsZW1lbnQucGFyZW50Q2FudmFzLmN1cnJlbnRPYmplY3QpIHtcblxuICAgIHJlZkh0bWxFbGVtZW50LnBhcmVudENhbnZhcy5vZmZzZXRYID0gZS5wYWdlWCAtIHBhcnNlSW50KHJlZkh0bWxFbGVtZW50LnBhcmVudENhbnZhcy5jdXJyZW50T2JqZWN0LnN0eWxlLmxlZnQsIDEwKTtcbiAgICByZWZIdG1sRWxlbWVudC5wYXJlbnRDYW52YXMub2Zmc2V0WSA9IGUucGFnZVkgLSBwYXJzZUludChyZWZIdG1sRWxlbWVudC5wYXJlbnRDYW52YXMuY3VycmVudE9iamVjdC5zdHlsZS50b3AsIDEwKTtcbiAgfVxuXG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbi8qKlxuICogRW5kIG9mIENCZWFuRnJhbWUgQ2xhc3MgPHA+XG4gKi9cblxuLy8rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstXG5cblxuREVGLkNBTlZBUyA9IHt9O1xuREVGLkNBTlZBUy5IVE1MX0VMRU1FTlQgPSAnZGl2JztcbkRFRi5DQU5WQVMuV0lEVEhfQURKVVNUXzIwMTgwNzIyID0gMjtcbkRFRi5DQU5WQVMuSEVJR0hUX0FESlVTVF8yMDE4MDcyMiA9IDM7XG5cbi8qKlxuICogQ0NhbnZhcyBjbGFzc1xuICogQSBjYW52YXMgaXMgYSBwbGFjZSB3aGVyZSB3aW5kb3dzIGFyZSBhcnJhbmdlZCwgd2hlcmUgeW91IGNhbiBkcmFnIGFuZCBtb3ZlIGZyZWVseS5cbiAqXG4gKiBAcGFyYW0gcGFyZW50RWxlbWVudFxuICogQHBhcmFtIGNhbnZhc0lkXG4gKiBAcGFyYW0gbGVmdFxuICogQHBhcmFtIHRvcFxuICogQHBhcmFtIHdpZHRoXG4gKiBAcGFyYW0gaGVpZ2h0XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQ0NhbnZhcyhwYXJlbnRFbGVtZW50LCBjYW52YXNJZCwgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0KSB7XG5cbiAgLy9FdmVudCBkYXRhIHRvIGJlIHRyYW5zbWl0dGVkXG4gIGZ1bmN0aW9uIEV2ZW50RGF0YSgpIHtcbiAgICB0aGlzLnggPSAwO1xuICAgIHRoaXMueSA9IDA7XG4gICAgdGhpcy5zY3JlZW5YID0gMDtcbiAgICB0aGlzLnNjcmVlblkgPSAwO1xuICAgIHRoaXMuZGVsdGFYID0gMDtcbiAgICB0aGlzLmRlbHRhWSA9IDA7XG4gICAgdGhpcy5pc01vdmVkID0gZmFsc2U7XG4gICAgdGhpcy50YXJnZXRUeXBlTmFtZSA9IG51bGw7XG4gICAgdGhpcy50YXJnZXRVc2FnZSA9IG51bGw7XG4gICAgdGhpcy50YXJnZXRPYmplY3QgPSBudWxsO1xuICB9XG5cbiAgdmFyIG1lID0gdGhpcztcblxuXG4gIG1lLmVuYWJsZVB1bGxVcCA9IHRydWU7Ly8gdHJ1ZTpQdWxsLXVwIHNvcnRpbmcgdG8gYnJpbmcgdGhlIHdpbmRvdyB0byB0aGUgZm9yZWZyb250IGJ5IGNsaWNraW5nIHRvIGdldCBmb2N1cy5cbiAgbWUuY3VycmVudE9iamVjdCA9IG51bGw7XG4gIG1lLm9uVG9wT2JqZWN0ID0gbnVsbDtcbiAgbWUub2Zmc2V0WCA9IDA7XG4gIG1lLm9mZnNldFkgPSAwO1xuXG5cbiAgLy9PYmplY3Qgd2hpY2ggZ2VuZXJhdGVkICdtb3VzZURvd24nIGV2ZW50IGF0IHRoZSB2ZXJ5IGJlZ2lubmluZyhpY2hpYmFuLXNhaXNobylcbiAgbWUubW91c2VEb3duU291cmNlID0gbnVsbDtcblxuICBtZS5pZCA9IGNhbnZhc0lkO1xuICBtZS5jYW52YXNFbGVtZW50ID0gbnVsbDtcbiAgbWUucGFyZW50RWxlbWVudCA9IHBhcmVudEVsZW1lbnQ7XG4gIG1lLmJlYW5MaXN0ID0gbmV3IEFycmF5KCk7XG5cbiAgbWUuYmVhbklkTmFtZSA9IHt9Oy8va2V5OmJlYW5JZCB2YWx1ZTpiZWFuTmFtZVxuICBtZS5iZWFuTmFtZUlkID0ge307Ly9rZXk6YmVhbk5hbWUgdmFsdWU6YmVhbklkXG5cbiAgbWUuZXZlbnREYXRhID0gbmV3IEV2ZW50RGF0YSgpO1xuXG5cbiAgbWUuYmFzZVpJbmRleCA9IDA7XG4gIG1lLnNldEJhc2VaSW5kZXggPSBmdW5jdGlvbihiYXNlWkluZGV4KSB7XG4gICAgbWUuYmFzZVpJbmRleCA9IGJhc2VaSW5kZXg7XG4gIH07XG4gIG1lLmdldEJhc2VaSW5kZXggPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbWUuYmFzZVpJbmRleDtcbiAgfTtcblxuXG4gIG1lLmNhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KERFRi5DQU5WQVMuSFRNTF9FTEVNRU5UKTtcblxuICBtZS5jYW52YXNFbGVtZW50LnN0eWxlLnpJbmRleCA9IDIwMDA7XG4gIG1lLmNhbnZhc0VsZW1lbnQuaWQgPSBtZS5pZDtcbiAgbWUuY2FudmFzRWxlbWVudC5zdHlsZS5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG4gIG1lLmNhbnZhc0VsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICBtZS5jYW52YXNFbGVtZW50LnN0eWxlLmxlZnQgPSBwYXJzZUludChsZWZ0KSArICdweCc7XG4gIG1lLmNhbnZhc0VsZW1lbnQuc3R5bGUudG9wID0gcGFyc2VJbnQodG9wKSArICdweCc7XG4gIC8vQWRkZWQgYW4gYWRqdXN0bWVudCB2YWx1ZS5CZWNhdXNlIHRyYW5zcGFyZW50IHBhcnQgYXBwZWFycyBhdCB0aGUgYm90dG9tIG9mIHRoZSBzY3JlZW4sXG4gIG1lLmNhbnZhc0VsZW1lbnQuc3R5bGUud2lkdGggPSAocGFyc2VJbnQod2lkdGgpICsgREVGLkNBTlZBUy5XSURUSF9BREpVU1RfMjAxODA3MjIpICsgJ3B4JztcbiAgbWUuY2FudmFzRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAocGFyc2VJbnQoaGVpZ2h0KSArIERFRi5DQU5WQVMuSEVJR0hUX0FESlVTVF8yMDE4MDcyMikgKyAncHgnO1xuICBtZS5jYW52YXNFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gIG1lLmNhbnZhc0VsZW1lbnQuc3R5bGUuYm9yZGVyU3R5bGUgPSAnbm9uZSc7XG4gIG1lLmNhbnZhc0VsZW1lbnQuc3R5bGUubWFyZ2luID0gJzBweCc7XG4gIG1lLmNhbnZhc0VsZW1lbnQuc3R5bGUuYm9yZGVyV2lkdGggPSAnMHB4JztcbiAgbWUuY2FudmFzRWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9ICd0cmFuc3BhcmVudCc7XG5cbiAgLy9BZGQgdGhlIENhbnZhcydzIGh0bWwgZWxlbWVudCBpbnRvIHRoZSBjYW52YXMncyBwYXJlbnQgaHRtbCBlbGVtZW50XG4gIG1lLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobWUuY2FudmFzRWxlbWVudCk7XG5cbn1cblxuXG5DQ2FudmFzLnByb3RvdHlwZS5tb3VzZU1vdmUgPSBmdW5jdGlvbihldnQpIHtcblxuICB2YXIgbWUgPSB0aGlzO1xuICB2YXIgZSA9IGV2dDtcbiAgaWYgKFRPVUNIX0VOQUJMRUQpIHtcbiAgICBpZiAoZXZ0LnR5cGUgPT09ICd0b3VjaG1vdmUnKSB7XG4gICAgICB2YXIgY2hhbmdlZFRvdWNoZXMgPSBldnQuY2hhbmdlZFRvdWNoZXM7XG4gICAgICBpZiAoVE9VQ0hfTU9WRV9PTkxZX1dJVEhfT05FX0ZJTkdFUikge1xuICAgICAgICB2YXIgdG91Y2hlcyA9IGV2dC50b3VjaGVzO1xuICAgICAgICBpZiAodG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICBlID0gY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGUgPSBjaGFuZ2VkVG91Y2hlc1swXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKG1lLmN1cnJlbnRPYmplY3QpIHtcblxuICAgIC8vZXZlbnREYXRhLmlzTW92ZWQ9dHJ1ZTtUaGUgcHJlc2VuY2Ugb2YgZXZlbnQgZGF0YSBtZWFucyB0aGF0IGl0IGhhcyBtb3ZlZC5cbiAgICBtZS5ldmVudERhdGEudGFyZ2V0VHlwZU5hbWUgPSBtZS5jdXJyZW50T2JqZWN0LnR5cGVOYW1lO1xuICAgIG1lLmV2ZW50RGF0YS50YXJnZXRVc2FnZSA9IG1lLmN1cnJlbnRPYmplY3QudXNhZ2U7XG4gICAgbWUuZXZlbnREYXRhLnRhcmdldE9iamVjdCA9IG1lLmN1cnJlbnRPYmplY3Q7XG5cbiAgICAvL0V2ZW4gd2hlbiBvYmogaXMgbm90IGJlaW5nIGRyYWdnZWQsIG1vdXNlIGNvb3JkaW5hdGVzIGFyZSB1c2VkIGhlcmUgYmVjYXVzZSB0aGV5IGFyZSBuZWVkZWQuXG4gICAgdmFyIG5ld09iakxlZnRQeCA9IGUucGFnZVggLSBtZS5vZmZzZXRYO1xuICAgIHZhciBuZXdPYmpUb3BQeCA9IGUucGFnZVkgLSBtZS5vZmZzZXRZO1xuXG4gICAgdmFyIGFic29sdXRlTW91c2VYID0gZS5wYWdlWDtcbiAgICB2YXIgYWJzb2x1dGVNb3VzZVkgPSBlLnBhZ2VZO1xuXG4gICAgLy9UYWtlIHRoZSBzbmFwc2hvdCBiZWZvcmUgdXBkYXRpbmcgdGhlIGxvY2F0aW9uLlxuICAgIHZhciBvbGRPYmpMZWZ0UHggPSBtZS5jdXJyZW50T2JqZWN0LnN0eWxlLmxlZnQ7XG4gICAgdmFyIG9sZE9ialRvcFB4ID0gbWUuY3VycmVudE9iamVjdC5zdHlsZS50b3A7XG5cbiAgICAvL1doZW4gdGhlIG1vdXNlIGN1cnNvciBnb2VzIG91dCBvZiByYW5nZSxcbiAgICAvL3RoZSBhZGRpdGlvbiBpbiB0aGUgWCBkaXJlY3Rpb24gYW5kIFkgZGlyZWN0aW9uIChkZWx0YSBYLCBkZWx0YSBZKSBpcyBzZXQgdG8gemVyby5cbiAgICAvL3RoaXMubGVmdD1DYXZhcydzIGxlZnQgc2lkZSBlZGdlLCB0aGlzLnRvcD1DYW52YXMncyB0b3Agc2lkZSBlZGdlLlxuICAgIHZhciB0bXBMZWZ0ID0gcGFyc2VJbnQobmV3T2JqTGVmdFB4LCAxMCk7XG4gICAgdmFyIHRtcFRvcCA9IHBhcnNlSW50KG5ld09ialRvcFB4LCAxMCk7XG5cbiAgICB2YXIgdG1wUmlnaHQgPSB0bXBMZWZ0ICsgcGFyc2VJbnQobWUuY3VycmVudE9iamVjdC5zdHlsZS53aWR0aCwgMTApO1xuICAgIHZhciB0bXBCb3R0b20gPSB0bXBUb3AgKyBwYXJzZUludChtZS5jdXJyZW50T2JqZWN0LnN0eWxlLmhlaWdodCwgMTApO1xuXG4gICAgdmFyIHN0eWxlV2lkdGggPSBwYXJzZUludChtZS5jYW52YXNFbGVtZW50LnN0eWxlLndpZHRoLCAxMCk7XG4gICAgdmFyIHN0eWxlSGVpZ2h0ID0gcGFyc2VJbnQobWUuY2FudmFzRWxlbWVudC5zdHlsZS5oZWlnaHQsIDEwKTtcblxuICAgIHZhciBkZWx0YVggPSAwO1xuICAgIHZhciBkZWx0YVkgPSAwO1xuXG4gICAgaWYgKG1lLmN1cnJlbnRPYmplY3QuaXNSYW5nZUxpbWl0ZWQgPT0gdHJ1ZSAmJlxuICAgICAgKHRtcExlZnQgPD0gMCB8fCB0bXBSaWdodCA+IHN0eWxlV2lkdGggfHwgdG1wVG9wIDw9IDAgfHwgdG1wQm90dG9tID4gc3R5bGVIZWlnaHQpXG4gICAgKSB7XG4gICAgICBkZWx0YVggPSAwO1xuICAgICAgZGVsdGFZID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsdGFYID0gKHBhcnNlSW50KG5ld09iakxlZnRQeCwgMTApIC0gcGFyc2VJbnQob2xkT2JqTGVmdFB4LCAxMCkpO1xuICAgICAgZGVsdGFZID0gKHBhcnNlSW50KG5ld09ialRvcFB4LCAxMCkgLSBwYXJzZUludChvbGRPYmpUb3BQeCwgMTApKTtcbiAgICAgIG1lLmN1cnJlbnRPYmplY3Quc3R5bGUubGVmdCA9IChwYXJzZUludChtZS5jdXJyZW50T2JqZWN0LnN0eWxlLmxlZnQpICsgZGVsdGFYICogbWUuY3VycmVudE9iamVjdC5hcmdYKSArICdweCc7XG4gICAgICBtZS5jdXJyZW50T2JqZWN0LnN0eWxlLnRvcCA9IChwYXJzZUludChtZS5jdXJyZW50T2JqZWN0LnN0eWxlLnRvcCkgKyBkZWx0YVkgKiBtZS5jdXJyZW50T2JqZWN0LmFyZ1kpICsgJ3B4JztcblxuICAgICAgdmFyIHBhcmVudE9iamVjdCA9IG1lLmN1cnJlbnRPYmplY3QucGFyZW50O1xuICAgICAgaWYgKHBhcmVudE9iamVjdCAmJiBwYXJlbnRPYmplY3QuX29uTW92ZSkge1xuICAgICAgICBwYXJlbnRPYmplY3QuX29uTW92ZSgpO1xuICAgICAgfVxuXG4gICAgfVxuICAgIG1lLmV2ZW50RGF0YS5kZWx0YVggPSBkZWx0YVg7XG4gICAgbWUuZXZlbnREYXRhLmRlbHRhWSA9IGRlbHRhWTtcblxuICAgIHJldHVybiBtZS5ldmVudERhdGE7XG5cbiAgfVxuICAvL1JldHVybnMgbnVsbCBpZiBub25lIG9mIHRoZSBvYmplY3RzIGFyZSBjbGlja2VkIGFuZCB0aGUgb25seSBtb3VzZSBqdXN0IG1vdmVzLlxuICByZXR1cm4gbnVsbDtcbn07XG5cblxuQ0NhbnZhcy5wcm90b3R5cGUubW91c2VVcCA9IGZ1bmN0aW9uKGUpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgbWUuY3VycmVudE9iamVjdCA9IG51bGw7XG4gIG1lLm1vdXNlRG93blNvdXJjZSA9IG51bGw7XG59O1xuXG5cbi8vQnJpbmcgdGhlIG9iamVjdCBpbiBmcm9udFxuQ0NhbnZhcy5wcm90b3R5cGUucHVsbFVwID0gZnVuY3Rpb24odGFyZ2V0QmVhbklkKSB7XG5cbiAgdmFyIG1lID0gdGhpcztcblxuICB2YXIgdG1wQmVhbkFycmF5ID0gW107XG5cbiAgdmFyIGJlYW5MaXN0ID0gbWUuYmVhbkxpc3Q7XG5cbiAgZm9yICh2YXIgaSBpbiBiZWFuTGlzdCkge1xuICAgIHRtcEJlYW5BcnJheS5wdXNoKGJlYW5MaXN0W2ldKTtcbiAgfVxuXG4gIC8vQnJpbmcgdGhlIHRhcmdldCBvYmplY3QgaW4gZnJvbnQgYW5kIHNldCB6aW5kZXggdG8gMS5cbiAgdmFyIHRhcmdldEJlYW4gPSBiZWFuTGlzdFt0YXJnZXRCZWFuSWRdO1xuXG4gIGlmIChtZS5lbmFibGVQdWxsVXApIHtcbiAgICBtZS5wdWxsVXBTb3J0KHRhcmdldEJlYW4sIHRtcEJlYW5BcnJheSwgbWUuYmFzZVpJbmRleCk7XG4gIH1cblxuXG4gIC8vUmVtZW1iZXIgdGhlIHRvcCBvYmplY3RcbiAgbWUub25Ub3BPYmplY3QgPSB0YXJnZXRCZWFuO1xuXG5cbn07XG5cbi8vQ2FsY3VsYXRlIHRoZSBmcm9udCAvIGJhY2sgaW5mb3JtYXRpb24gb2YgdGhlIHdpbmRvdyBhY2N1cmF0ZWx5LlxuQ0NhbnZhcy5wcm90b3R5cGUucHVsbFVwU29ydCA9IGZ1bmN0aW9uKHB1bGx1cE9iamVjdCwgb2JqZWN0QXJyYXksIGJhc2VJbmRleCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIC8vSW5jcmVhc2UgdGhlIGluZGV4IG51bWJlciBvZiB0aGUgdGFyZ2V0IG9iamVjdFxuICBwdWxsdXBPYmplY3QuaHRtbEVsZW1lbnQuc3R5bGUuekluZGV4ID0gb2JqZWN0QXJyYXkubGVuZ3RoICsgYmFzZUluZGV4O1xuXG4gIC8vc29ydCBieSBpbmRleFxuICBvYmplY3RBcnJheS5zb3J0KGZ1bmN0aW9uKGIsIGEpIHtcbiAgICByZXR1cm4gLXBhcnNlSW50KGIuaHRtbEVsZW1lbnQuc3R5bGUuekluZGV4LCAxMCkgKyBwYXJzZUludChhLmh0bWxFbGVtZW50LnN0eWxlLnpJbmRleCwgMTApO1xuICB9KTtcblxuICAvL1JlZGVmaW5lIG51bWJlciBvZiB0aGUgaW5kZXhcbiAgZm9yICh2YXIgaSBpbiBvYmplY3RBcnJheSkge1xuICAgIG9iamVjdEFycmF5W2ldLmh0bWxFbGVtZW50LnN0eWxlLnpJbmRleCA9IChvYmplY3RBcnJheS5sZW5ndGggLSAxKSAtIGkgKyBiYXNlSW5kZXg7XG4gIH1cblxufTtcblxuXG4vKipcbiAqIHJlbW92ZSB0aGUgYmVhbiBvYmplY3RcbiAqIEBwYXJhbSBiZWFuSWRcbiAqL1xuQ0NhbnZhcy5wcm90b3R5cGUucmVtb3ZlQmVhbiA9IGZ1bmN0aW9uKGJlYW5JZCkge1xuXG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgLy9SZXRyaWV2ZSB0aGUgdGFyZ2V0IGJlYW5GcmFtZVxuICB2YXIgYmVhbkxpc3QgPSBtZS5iZWFuTGlzdDtcbiAgdmFyIHRhcmdldEJlYW4gPSBiZWFuTGlzdFtiZWFuSWRdO1xuXG4gIC8vUmVtb3ZlIGJlYW4ncyBodG1sRWxlbWVudCBmcm9tIGNhbnZhc0VsZW1lbnRcbiAgbWUuY2FudmFzRWxlbWVudC5yZW1vdmVDaGlsZCh0YXJnZXRCZWFuLmh0bWxFbGVtZW50KTtcblxuICAvL0RlbGV0ZSB0aGUgYmVhbiBvYmplY3QgaW4gdGhlIGFzc29jaWF0aXZlIGFycmF5LlxuICBkZWxldGUgYmVhbkxpc3RbYmVhbklkXTtcblxuXG59O1xuXG5cbi8qKlxuICogQWRkIGJlYW4gaW50byB0aGlzIGNhbnZhc1xuICogQHBhcmFtIGJlYW5cbiAqL1xuQ0NhbnZhcy5wcm90b3R5cGUuYWRkQmVhbiA9IGZ1bmN0aW9uKGJlYW4pIHtcblxuICB2YXIgbWUgPSB0aGlzO1xuXG4gIHZhciBiZWFuTGlzdCA9IG1lLmJlYW5MaXN0O1xuXG4gIHZhciBiZWFuSWROYW1lID0gbWUuYmVhbklkTmFtZTsvL2tleTpiZWFuSWQgdmFsdWU6YmVhbk5hbWVcbiAgdmFyIGJlYW5OYW1lSWQgPSBtZS5iZWFuTmFtZUlkOyAvL2tleTpiZWFuTmFtZSB2YWx1ZTpiZWFuSWRcblxuXG4gIGJlYW5MaXN0W2JlYW4uaWRdID0gYmVhbjtcblxuICBpZiAoYmVhbi5wcm9wZXJ0eS5uYW1lKSB7XG4gICAgYmVhbk5hbWVJZFtiZWFuLnByb3BlcnR5Lm5hbWVdID0gYmVhbi5pZDtcbiAgICBiZWFuSWROYW1lW2JlYW4uaWRdID0gYmVhbi5wcm9wZXJ0eS5uYW1lO1xuICB9XG5cbiAgLy9JbiB0aGlzIHVzYWdlIGNhc2UgdGhlICdsZW5ndGgnIHByb3BlcnR5IGlzIGludmFsaWQgLi5cbiAgdmFyIG51bSA9IDA7XG5cbiAgZm9yICh2YXIgaiBpbiBiZWFuTGlzdCkge1xuICAgIG51bSsrO1xuICB9XG5cbiAgLy9TZXQgekluZGV4IHNvIHRoYXQgd2hhdCB5b3UgYWRkIGxhdGVyIHdpbGwgY29tZSB1cC5cbiAgYmVhbi5odG1sRWxlbWVudC5zdHlsZS56SW5kZXggPSBudW0gKyBtZS5iYXNlWkluZGV4O1xuXG4gIC8vT24gdGhlIGJlYW4gc2lkZSwgc3BlY2lmeSB0aGUgcGFyZW50IG9mIHRoZSBiZWFuIHRvIG1lLlxuICBiZWFuLnNldFBhcmVudENhbnZhcyhtZSk7XG5cblxuICB0aGlzLmNhbnZhc0VsZW1lbnQuYXBwZW5kQ2hpbGQoYmVhbi5odG1sRWxlbWVudCk7XG59O1xuXG5DQ2FudmFzLnByb3RvdHlwZS5nZXRQYXJlbnRFbGVtZW50ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIHJldHVybiBtZS5wYXJlbnRFbGVtZW50O1xufTtcblxuLyoqXG4gKiBFbmQgb2YgY2FudmFzIGNsYXNzXG4gKi9cblxuLy8rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstXG5cblxuREVGLkNGUkFNRSA9IHt9O1xuREVGLkNGUkFNRS5DQU5WQVNfRUxFTUVOVF9CR0NPTE9SID0gJ3RyYW5zcGFyZW50JztcbkRFRi5DRlJBTUUuTU9EQUxfQkFDS0dST1VORF9GUkFNRV9JRF9QUkVGSVggPSAnd2luZG93X19tb2RhbF93aW5kb3dfYmFja2dyb3VuZF8nO1xuXG5cbmluaGVyaXQoQ0ZyYW1lLCBDQmVhbkZyYW1lKTtcblxuXG4vKipcbiAqIENGcmFtZSBjbGFzc1xuICogPHA+XG4gKiBUaGlzIGNsYXNzIHJlcHJlc2VudHMgYSB3aW5kb3cgd2hvc2Ugc2l6ZSBjYW4gYmUgY2hhbmdlZCAsXG4gKiBjYW4gbW92ZSBmcmVlbHkgb24gdGhlIHNjcmVlbixcbiAqIGNhbiBoYXZlIGEgdGl0bGUgYmFyLFxuICpcbiAqIEBwYXJhbSB3aW5kb3dJZFxuICogQHBhcmFtIHdfbGVmdFxuICogQHBhcmFtIHdfdG9wXG4gKiBAcGFyYW0gd193aWR0aFxuICogQHBhcmFtIHdfaGVpZ2h0XG4gKiBAcGFyYW0gemluZGV4XG4gKiBAcGFyYW0gd19ib3JkZXJfd2lkdGhcbiAqIEBwYXJhbSBhcHBlYXJhbmNlXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQ0ZyYW1lKHdpbmRvd0lkLCB3X2xlZnQsIHdfdG9wLCB3X3dpZHRoLCB3X2hlaWdodCwgemluZGV4LCB3X2JvcmRlcl93aWR0aCwgYXBwZWFyYW5jZSkge1xuXG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgLy9jYWxsIGNvbnN0cnVjdG9yIG9mIHN1cGVyY2xhc3NcbiAgQ0ZyYW1lLnN1cGVyQ29uc3RydWN0b3IuY2FsbCh0aGlzLCB3aW5kb3dJZCwgd19sZWZ0LCB3X3RvcCwgd193aWR0aCwgd19oZWlnaHQsIHppbmRleCwgd19ib3JkZXJfd2lkdGgsIGFwcGVhcmFuY2UpO1xuXG4gIG1lLmFuY2hvciA9IENBTElHTi5MRUZUX1RPUDtcblxuICBtZS5zaG93VGl0bGVCYXIgPSBhcHBlYXJhbmNlLnNob3dUaXRsZUJhcjtcblxuICBtZS5jYW52YXNOZXRIZWlnaHQgPSBudWxsO1xuICBtZS5jYW52YXNOZXRXaWR0aCA9IG51bGw7XG4gIG1lLmZyYW1lSGVpZ2h0QWRqdXN0ID0gYXBwZWFyYW5jZS5mcmFtZUhlaWdodEFkanVzdDtcblxuICBtZS5mcmFtZUNvbXBvbmVudE1hcCA9IHt9O1xuXG5cbiAgLy9pbml0aWFsaXplIHRoZSBmaWVsZFxuICBtZS5jYW52YXMgPSBudWxsO1xuXG4gIC8vY2FudmFzIGlkXG4gIG1lLm15Q2FudmFzSWQgPSBudWxsO1xuXG4gIC8vQnV0dG9ucyB0byBiZSBwbGFjZWQgb24gdGhlIHNjcmVlbiAocG9zaXRpb25pbmcgc2FtZSBhcyB0aGUgY2xvc2UgYnV0dG9uKVxuICBtZS5mbG9hdGluZ0J1dHRvbiA9IG51bGw7XG5cbiAgbWUudGl0bGVCYXJDbGFzc05hbWVEZWZhdWx0ID0gJ2pzZnJhbWUtdGl0bGViYXItZGVmYXVsdCc7Ly8gREVGLkNGUkFNRS5USVRMRV9CQVJfQ0xBU1NfREVGQVVMVDtcbiAgbWUudGl0bGVCYXJDbGFzc05hbWVGb2N1c2VkID0gJ2pzZnJhbWUtdGl0bGViYXItZm9jdXNlZCc7Ly9ERUYuQ0ZSQU1FLlRJVExFX0JBUl9DTEFTU19GT0NVU0VEO1xuXG5cbiAgLy9oZWlnaHQgb2YgdGl0bGViYXJcbiAgbWUudGl0bGVCYXJIZWlnaHQgPSBhcHBlYXJhbmNlLnRpdGxlQmFySGVpZ2h0O1xuXG4gIG1lLnRpdGxlQmFyQ2FwdGlvbiA9IGFwcGVhcmFuY2UudGl0bGVCYXJDYXB0aW9uO1xuICBtZS50aXRsZUJhckNhcHRpb25MZWZ0TWFyZ2luID0gYXBwZWFyYW5jZS50aXRsZUJhckNhcHRpb25MZWZ0TWFyZ2luO1xuICBtZS50aXRsZUJhckNhcHRpb25Gb250U2l6ZSA9IGFwcGVhcmFuY2UudGl0bGVCYXJDYXB0aW9uRm9udFNpemU7XG4gIG1lLnRpdGxlQmFyQ2FwdGlvbkZvbnRXZWlnaHQgPSBhcHBlYXJhbmNlLnRpdGxlQmFyQ2FwdGlvbkZvbnRXZWlnaHQ7XG4gIG1lLnRpdGxlQmFyQm9yZGVyQm90dG9tRGVmYXVsdCA9IGFwcGVhcmFuY2UudGl0bGVCYXJCb3JkZXJCb3R0b21EZWZhdWx0O1xuICBtZS50aXRsZUJhckJvcmRlckJvdHRvbUZvY3VzZWQgPSBhcHBlYXJhbmNlLnRpdGxlQmFyQm9yZGVyQm90dG9tRm9jdXNlZDtcbiAgbWUudGl0bGVCYXJDYXB0aW9uVGV4dFNoYWRvdyA9IGFwcGVhcmFuY2UudGl0bGVCYXJDYXB0aW9uVGV4dFNoYWRvdztcbiAgbWUudGl0bGVCYXJDYXB0aW9uVGV4dEFsaWduID0gYXBwZWFyYW5jZS50aXRsZUJhckNhcHRpb25UZXh0QWxpZ247XG5cbiAgLy9UaXRsZSBiYXIgd2lkdGggYWRqdXN0bWVudCB2YWx1ZVxuICBtZS50aXRsZUFkanVzdFdpZHRoID0gMjtcblxuICBtZS53aW5kb3dJZCA9IHdpbmRvd0lkO1xuXG4gIG1lLmV4Qm9yZGVyV2lkdGggPSAwO1xuXG5cbiAgbWUubXlDYW52YXNJZCA9IHdpbmRvd0lkICsgJ19jYW52YXMnO1xuXG5cbiAgLy9pbWcgZWxlbWVudCBmb3IgaWNvbiBwbGFjZWQgb24gdGhlIGxlZnQtdG9wXG4gIHZhciBhcHBJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIC8vXHRcdGFwcEljb24uc3JjPSdpbWcvaWNvX2FwcF9maWxlMTYuZ2lmJztcblxuICAvL3VybCBvZiBpY29uIGltYWdlXG4gIGFwcEljb24uc3JjID0gJyc7XG4gIGFwcEljb24uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICBhcHBJY29uLnN0eWxlLmxlZnQgPSAnMnB4JztcbiAgYXBwSWNvbi5zdHlsZS50b3AgPSAnMnB4JztcbiAgYXBwSWNvbi5zdHlsZS53aWR0aCA9ICcxNnB4JztcbiAgYXBwSWNvbi5zdHlsZS5oZWlnaHQgPSAnMTZweCc7XG4gIGFwcEljb24uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG5cbiAgLy9UaGUgdGl0bGUgYmFyIG11c3QgYmUgb24gdGhlIGZyb250IG9mIHRoZSBjYW52YXMuXG4gIG1lLnRpdGxlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgbWUudGl0bGVCYXIuY2xhc3NOYW1lID0gJ2pzZnJhbWV0aXRsZWJhcic7XG5cbiAgaWYgKG1lLnNob3dUaXRsZUJhcikge1xuXG4gICAgbWUudGl0bGVCYXIuaWQgPSB3aW5kb3dJZCArICdfdGl0bGUnO1xuICAgIG1lLnRpdGxlQmFyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBtZS50aXRsZUJhci5zdHlsZS5ib3hTaXppbmcgPSAnYm9yZGVyLWJveCc7XG4gICAgbWUudGl0bGVCYXIuc3R5bGUudG9wID0gJzBweCc7XG4gICAgbWUudGl0bGVCYXIuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgIG1lLnRpdGxlQmFyLnN0eWxlLndpZHRoID0gKHdfd2lkdGggLSBtZS50aXRsZUFkanVzdFdpZHRoICsgREVGLkNBTlZBUy5XSURUSF9BREpVU1RfMjAxODA3MjIpICsgJ3B4JztcbiAgICBtZS50aXRsZUJhci5zdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnO1xuXG5cbiAgICBpZiAobWUudGl0bGVCYXJIZWlnaHQpIHtcblxuICAgICAgdmFyIHRpdGxlQmFyQWRqdXN0ID0gMDtcblxuICAgICAgaWYgKG1lLnRpdGxlQmFyQm9yZGVyQm90dG9tRGVmYXVsdCkge1xuICAgICAgICB0aXRsZUJhckFkanVzdCA9IDA7XG4gICAgICB9XG5cblxuICAgICAgbWUudGl0bGVCYXIuc3R5bGUuaGVpZ2h0ID0gKHBhcnNlSW50KG1lLnRpdGxlQmFySGVpZ2h0LCAxMCkgKyAwKSArICdweCc7XG4gICAgfVxuXG4gICAgaWYgKG1lLnRpdGxlQmFyQ29sb3JEZWZhdWx0KSB7XG4gICAgICBtZS50aXRsZUJhci5zdHlsZS5iYWNrZ3JvdW5kID0gbWUudGl0bGVCYXJDb2xvckRlZmF1bHQ7XG4gICAgfVxuICAgIG1lLnRpdGxlQmFyLnN0eWxlLnpJbmRleCA9IDA7XG5cbiAgICBtZS50aXRsZUJhci5zdHlsZS5jb2xvciA9IG1lLnRpdGxlQmFyQ2FwdGlvbkNvbG9yRGVmYXVsdDtcbiAgICBtZS50aXRsZUJhci5zdHlsZS5mb250U2l6ZSA9IG1lLnRpdGxlQmFyQ2FwdGlvbkZvbnRTaXplO1xuICAgIG1lLnRpdGxlQmFyLnN0eWxlLmZvbnRXZWlnaHQgPSBtZS50aXRsZUJhckNhcHRpb25Gb250V2VpZ2h0O1xuICAgIG1lLnRpdGxlQmFyLnN0eWxlLnRleHRTaGFkb3cgPSBtZS50aXRsZUJhckNhcHRpb25UZXh0U2hhZG93O1xuICAgIG1lLnRpdGxlQmFyLnN0eWxlLnRleHRBbGlnbiA9IG1lLnRpdGxlQmFyQ2FwdGlvblRleHRBbGlnbjtcbiAgICAvLyBtZS50aXRsZUJhci5zdHlsZS50ZXh0U2hhZG93ID0gXCIwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsLjcpXCI7XG4gICAgLy8gbWUudGl0bGVCYXIuc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG5cbiAgICBtZS50aXRsZUJhci5zdHlsZS5saW5lSGVpZ2h0ID0gbWUudGl0bGVCYXIuc3R5bGUuaGVpZ2h0O1xuXG5cbiAgICBtZS50aXRsZUJhci5zdHlsZS5ib3JkZXJCb3R0b20gPSBtZS50aXRsZUJhckJvcmRlckJvdHRvbURlZmF1bHQ7XG4gICAgLy9tZS50aXRsZUJhci5zdHlsZS5ib3hTaGFkb3cgPSAnMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuNSknO1xuXG5cbiAgICAvL1NldCBub3QgdG8gZGlzcGxheSBvdmVyZmxvdyBjaGFyYWN0ZXIgc3RyaW5nXG4gICAgbWUudGl0bGVCYXIuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcblxuXG4gICAgdmFyIHRpdGxlQmFyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcblxuICAgIC8vJ3NwYW4nIHRvIHN0b3JlIHRleHRcbiAgICB2YXIgdGl0bGVCYXJUZXh0U3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgIHRpdGxlQmFyVGV4dFNwYW4uaWQgPSBtZS5pZCArICdfdGl0bGVCYXJUZXh0JztcbiAgICBpZiAobWUudGl0bGVCYXJDYXB0aW9uTGVmdE1hcmdpbiAhPSBudWxsKSB7XG4gICAgICB0aXRsZUJhclRleHRTcGFuLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgIHRpdGxlQmFyVGV4dFNwYW4uc3R5bGUubGVmdCA9IHBhcnNlSW50KG1lLnRpdGxlQmFyQ2FwdGlvbkxlZnRNYXJnaW4sIDEwKSArICdweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpdGxlQmFyVGV4dFNwYW4uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgdGl0bGVCYXJUZXh0U3Bhbi5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgICB0aXRsZUJhclRleHRTcGFuLnN0eWxlLnJpZ2h0ID0gJzBweCc7XG4gICAgfVxuICAgIHRpdGxlQmFyVGV4dFNwYW4uc3R5bGUudG9wID0gJzBweCc7XG4gICAgdGl0bGVCYXJUZXh0U3Bhbi5hcHBlbmRDaGlsZCh0aXRsZUJhclRleHQpO1xuICAgIG1lLnRpdGxlQmFyLmFwcGVuZENoaWxkKHRpdGxlQmFyVGV4dFNwYW4pO1xuXG4gICAgLy9EaXNjb250aW51ZSBhcHBpY29uKDIwMDYxMDExKVxuICAgIC8vbWUudGl0bGVCYXIuYXBwZW5kQ2hpbGQoYXBwSWNvbik7XG4gIH1cblxuICBtZS5odG1sRWxlbWVudC5hcHBlbmRDaGlsZChtZS50aXRsZUJhcik7XG5cblxuICAvL1NldCBDYW52YXMgdGhyb3VnaG91dCB0aGUgd2luZG93XG5cbiAgLy9wYXJzZUludChtZS50aXRsZUJhci5zdHlsZS5oZWlnaHQpOy8vbWUudGl0bGVCYXJIZWlnaHQpO1xuICB2YXIgY2FudmFzTW9yZUhlaWdodCA9IHBhcnNlSW50KG1lLnRpdGxlQmFySGVpZ2h0LCAxMCkgLSB0aXRsZUJhckFkanVzdDtcbiAgdmFyIGNhbnZhc01vcmVTcGFjaW5nID0gcGFyc2VJbnQobWUudGl0bGVBZGp1c3RXaWR0aCwgMTApO1xuXG4gIGlmIChtZS5zaG93VGl0bGVCYXIpIHtcblxuXG4gIH0gZWxzZSB7XG4gICAgY2FudmFzTW9yZUhlaWdodCA9IDA7XG4gICAgY2FudmFzTW9yZVNwYWNpbmcgPSAwO1xuICAgIHRpdGxlQmFyQWRqdXN0ID0gMDtcbiAgfVxuXG5cbiAgbWUuY2FudmFzTmV0V2lkdGggPSB3X3dpZHRoIC0gY2FudmFzTW9yZVNwYWNpbmc7XG4gIG1lLmNhbnZhc05ldEhlaWdodCA9IHdfaGVpZ2h0IC0gY2FudmFzTW9yZUhlaWdodCAtIGNhbnZhc01vcmVTcGFjaW5nIC0gMSAtIHRpdGxlQmFyQWRqdXN0ICsgbWUuZnJhbWVIZWlnaHRBZGp1c3Q7XG5cblxuICAvL0NoYW5nZSB0aGUgc3R5bGUgb2YgaHRtbEVsZW1lbnQgb2YgQ0ZyYW1lIChDQmVhbikuXG4gIG1lLmh0bWxFbGVtZW50LnN0eWxlLmN1cnNvciA9ICdtb3ZlJztcblxuXG4gIC8vQ3JlYXRlIGEgY2FudmFzXG4gIG1lLmNhbnZhcyA9IG5ldyBDQ2FudmFzKG1lLmh0bWxFbGVtZW50LCBtZS5teUNhbnZhc0lkLCAwLCBjYW52YXNNb3JlSGVpZ2h0LCB3X3dpZHRoIC0gY2FudmFzTW9yZVNwYWNpbmcsIHdfaGVpZ2h0IC0gY2FudmFzTW9yZUhlaWdodCAtIGNhbnZhc01vcmVTcGFjaW5nKTtcblxuICBtZS5jYW52YXMuZW5hYmxlUHVsbFVwID0gZmFsc2U7XG4gIG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IERFRi5DRlJBTUUuQ0FOVkFTX0VMRU1FTlRfQkdDT0xPUjtcbiAgbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ2RlZmF1bHQnO1xuXG4gIGlmIChNT1VTRV9FTkFCTEVEKSB7XG4gICAgLy9IYW5kbGluZyB0aGUgb21vdXNlZG93biBldmVudCB0aGF0IG9jY3VycmVkIGluIENhbnZhcyB3aGljaCBpcyBhIGNoaWxkIGVsZW1lbnQgb2YgQ0ZyYW1lXG4gICAgbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQub25tb3VzZWRvd24gPSBtZS5jYW52YXNNb3VzZURvd247XG4gIH1cblxuICBpZiAoVE9VQ0hfRU5BQkxFRCkge1xuICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHtcbiAgICAgIHZhciBmdW5jT25Ub3VjaFN0YXJ0ID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgICAgIC8vIFRoZSBcIm1vdXNlZG93blwiIGV2ZW50IGhhcHBlbnMgcmlnaHQgYWZ0ZXIgXCJ0b3VjaHN0YXJ0XCIgZXZlbnQsXG4gICAgICAgIC8vIGJ1dCBJIGRvbid0IGNhbGwgI3ByZXZlbnRkZWZhdWx0IGJlY2F1c2UgI3ByZXZlbnRkZWZhdWx0IHByZXZlbnRzIFwib25jbGlja1wiIChsaWtlIGJ1dHRvbiBvbiB0aXRsZWJhcikuXG4gICAgICAgIC8vIFNvLCBwZXJmb3JtICNwcmV2ZW50ZGVmYXVsdCBvbmx5IGZvciBcInRvdWNobW92ZVwiXG4gICAgICAgIC8vIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgdG91Y2hTdGFydEV2ZW50ID0gZXZ0LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgICAgICBtZS5jYW52YXNNb3VzZURvd24uYmluZCh0aGlzKSh0b3VjaFN0YXJ0RXZlbnQpO1xuICAgICAgfTtcbiAgICAgIG1lLmNhbnZhcy5jYW52YXNFbGVtZW50Lm9udG91Y2hzdGFydCA9IGZ1bmNPblRvdWNoU3RhcnQ7XG4gICAgfVxuICB9XG5cbiAgLy9TZXQgdGhlIGNhbnZhcyBhcyBhIHJlZmVyZW5jZSB0byB0aGUgcGFyZW50IG9mIHRoZSBjYW52YXMgaHRtbCBlbGVtZW50IGNhbnZhc0VsZW1lbnQuXG4gIG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnBhcmVudENGcmFtZSA9IG1lO1xuXG5cbiAgdmFyIHRtcENhbnZhc1dpZHRoID0gcGFyc2VJbnQobWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUud2lkdGgsIDEwKTtcbiAgdmFyIHRtcENhbnZhc0hlaWdodCA9IHBhcnNlSW50KG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLmhlaWdodCwgMTApO1xuXG4gIHZhciBtYXJrZXJXaWR0aCA9IGFwcGVhcmFuY2UucmVzaXplQXJlYVdpZHRoO1xuICB2YXIgbWFya2VySGVpZ2h0ID0gYXBwZWFyYW5jZS5yZXNpemVBcmVhSGVpZ2h0O1xuXG4gIC8vT2Zmc2V0IGZyb20gbWFya2VyIGVkZ2VcbiAgdmFyIGVkZ2VNYXJnaW4gPSBhcHBlYXJhbmNlLnJlc2l6ZUFyZWFPZmZzZXQ7XG4gIHZhciBtYXJrZXJaSW5kZXggPSAwO1xuXG4gIHZhciBjb2xvclJELCBjb2xvckRELCBjb2xvclJSO1xuXG4gIGlmIChhcHBlYXJhbmNlLnJlc2l6ZUFyZWFWaXNpYmxlKSB7XG4gICAgY29sb3JSRCA9ICdyZ2JhKDI1NSwgMCwgMCwgMC41KSc7XG4gICAgY29sb3JERCA9ICdyZ2JhKDAsIDAsIDI1NSwgMC41KSc7XG4gICAgY29sb3JSUiA9ICdyZ2JhKDAsIDI1NSwgMCwgMC41KSc7XG4gIH1cblxuICAvL0xvd2VyIHJpZ2h0KFItRClcbiAgdmFyIG1hcmtlclJEID0gbmV3IENNYXJrZXJXaW5kb3coXG4gICAgbWUubXlDYW52YXNJZCArICdfUkQnLFxuICAgIHRtcENhbnZhc1dpZHRoICsgZWRnZU1hcmdpbixcbiAgICB0bXBDYW52YXNIZWlnaHQgKyBlZGdlTWFyZ2luLFxuICAgIG1hcmtlcldpZHRoLFxuICAgIG1hcmtlckhlaWdodCxcbiAgICBtYXJrZXJaSW5kZXgsXG4gICAgJ1JEJywgY29sb3JSRCk7XG5cbiAgbWFya2VyUkQuaHRtbEVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ3NlLXJlc2l6ZSc7Ly9udy1yZXNpemUnO1xuXG4gIC8vU2luY2Ugb25seSB0aGUgZGVsdGFYIGFuZCBkZWx0YVkgYXJlIGFjcXVpcmVkIGFuZCB0aGUgbW92ZW1lbnQgb2YgdGhlIG1hcmtlciBpdHNlbGYgaXNcbiAgLy8gcGVyZm9ybWVkIGJ5IENGcmFtZV9yZXNpemUsIHRoZSBtb3ZlbWVudCBjb2VmZmljaWVudCBvZiB0aGUgbWFya2VyIGl0c2VsZiBpcyBzZXQgdG8gMC5cbiAgbWFya2VyUkQuaHRtbEVsZW1lbnQuYXJnWCA9IDA7XG4gIG1hcmtlclJELmh0bWxFbGVtZW50LmFyZ1kgPSAwO1xuXG5cbiAgLy9Cb3R0b20oRC1EKVxuICB2YXIgbWFya2VyREQgPSBuZXcgQ01hcmtlcldpbmRvdyhcbiAgICBtZS5teUNhbnZhc0lkICsgJ19ERCcsXG4gICAgMCxcbiAgICB0bXBDYW52YXNIZWlnaHQgKyBlZGdlTWFyZ2luLFxuICAgIHRtcENhbnZhc1dpZHRoICsgZWRnZU1hcmdpbixcbiAgICBtYXJrZXJIZWlnaHQsXG4gICAgbWFya2VyWkluZGV4LFxuICAgICdERCcsIGNvbG9yREQpO1xuXG4gIG1hcmtlckRELmh0bWxFbGVtZW50LnN0eWxlLmN1cnNvciA9ICduLXJlc2l6ZSc7XG5cbiAgLy9TaW5jZSBvbmx5IHRoZSBkZWx0YVggYW5kIGRlbHRhWSBhcmUgYWNxdWlyZWQgYW5kIHRoZSBtb3ZlbWVudCBvZiB0aGUgbWFya2VyIGl0c2VsZiBpc1xuICAvLyBwZXJmb3JtZWQgYnkgQ0ZyYW1lX3Jlc2l6ZSwgdGhlIG1vdmVtZW50IGNvZWZmaWNpZW50IG9mIHRoZSBtYXJrZXIgaXRzZWxmIGlzIHNldCB0byAwLlxuICBtYXJrZXJERC5odG1sRWxlbWVudC5hcmdYID0gMDtcbiAgbWFya2VyREQuaHRtbEVsZW1lbnQuYXJnWSA9IDA7XG5cbiAgLy9SaWdodChSLVIpXG4gIHZhciBtYXJrZXJSUiA9IG5ldyBDTWFya2VyV2luZG93KFxuICAgIG1lLm15Q2FudmFzSWQgKyAnX1JSJyxcbiAgICB0bXBDYW52YXNXaWR0aCArIGVkZ2VNYXJnaW4sXG4gICAgMCxcbiAgICBtYXJrZXJXaWR0aCxcbiAgICB0bXBDYW52YXNIZWlnaHQgKyBlZGdlTWFyZ2luLFxuICAgIG1hcmtlclpJbmRleCxcbiAgICAnUlInLCBjb2xvclJSKTtcblxuICBtYXJrZXJSUi5odG1sRWxlbWVudC5zdHlsZS5jdXJzb3IgPSAndy1yZXNpemUnO1xuXG4gIC8vU2luY2Ugb25seSB0aGUgZGVsdGFYIGFuZCBkZWx0YVkgYXJlIGFjcXVpcmVkIGFuZCB0aGUgbW92ZW1lbnQgb2YgdGhlIG1hcmtlciBpdHNlbGYgaXNcbiAgLy8gcGVyZm9ybWVkIGJ5IENGcmFtZV9yZXNpemUsIHRoZSBtb3ZlbWVudCBjb2VmZmljaWVudCBvZiB0aGUgbWFya2VyIGl0c2VsZiBpcyBzZXQgdG8gMC5cbiAgbWFya2VyUlIuaHRtbEVsZW1lbnQuYXJnWSA9IDA7XG4gIG1hcmtlclJSLmh0bWxFbGVtZW50LmFyZ1ggPSAwO1xuXG4gIC8vQWRkIHNpemUgY2hhbmdlIG1hcmtlciB0byBjYW52YXMuXG4gIG1lLmNhbnZhcy5hZGRCZWFuKG1hcmtlclJEKTtcbiAgbWUuY2FudmFzLmFkZEJlYW4obWFya2VyREQpO1xuICBtZS5jYW52YXMuYWRkQmVhbihtYXJrZXJSUik7XG5cbiAgLy9NZXRob2QgdG8gcmVtb3ZlIHNpemUgY2hhbmdlIG1hcmtlciAoY2FuIG5vdCByZXNpemUpXG4gIG1lLnJlbW92ZU1hcmtlcnMgPSBmdW5jdGlvbigpIHtcbiAgICBtZS5jYW52YXMucmVtb3ZlQmVhbihtYXJrZXJSRC5pZCk7XG4gICAgbWUuY2FudmFzLnJlbW92ZUJlYW4obWFya2VyREQuaWQpO1xuICAgIG1lLmNhbnZhcy5yZW1vdmVCZWFuKG1hcmtlclJSLmlkKTtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XG4gIH07XG5cblxuICBtZS5yZW1vdmVNYXJrZXJzMiA9IGZ1bmN0aW9uKCkge1xuICAgIG1lLmNhbnZhcy5yZW1vdmVCZWFuKG1hcmtlclJELmlkKTtcbiAgICBtZS5jYW52YXMucmVtb3ZlQmVhbihtYXJrZXJERC5pZCk7XG4gICAgbWUuY2FudmFzLnJlbW92ZUJlYW4obWFya2VyUlIuaWQpO1xuICB9O1xuICBtZS5lbmFibGVNYXJrZXJzID0gZnVuY3Rpb24oZW5hYmxlZCkge1xuICAgIGlmIChlbmFibGVkKSB7XG5cbiAgICAgIG1hcmtlclJELmh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICBtYXJrZXJERC5odG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgbWFya2VyUlIuaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgIG1hcmtlclJELmh0bWxFbGVtZW50LnN0eWxlLmN1cnNvciA9ICdzZS1yZXNpemUnO1xuICAgICAgbWFya2VyREQuaHRtbEVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ24tcmVzaXplJztcbiAgICAgIG1hcmtlclJSLmh0bWxFbGVtZW50LnN0eWxlLmN1cnNvciA9ICd3LXJlc2l6ZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1hcmtlclJELmh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBtYXJrZXJERC5odG1sRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgbWFya2VyUlIuaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gICAgLy8gbWUuY2FudmFzLnJlbW92ZUJlYW4obWFya2VyUkQuaWQpO1xuICAgIC8vIG1lLmNhbnZhcy5yZW1vdmVCZWFuKG1hcmtlckRELmlkKTtcbiAgICAvLyBtZS5jYW52YXMucmVtb3ZlQmVhbihtYXJrZXJSUi5pZCk7XG4gIH07XG5cbiAgZm9yICh2YXIgaWR4IGluIGFwcGVhcmFuY2UuZnJhbWVDb21wb25lbnRzKSB7XG5cbiAgICB2YXIgZnJhbWVDb21wb25lbnQgPSBhcHBlYXJhbmNlLmZyYW1lQ29tcG9uZW50c1tpZHhdO1xuICAgIGZyYW1lQ29tcG9uZW50LnNldEZyYW1lKG1lKTtcblxuICAgIC8vaWYgZnJhbWVDb21wb25lbnQgaGFzIHNwZWNpYWwgbmFtZSAnY2xvc2VCdXR0b24nLCBpdCB3aWxsIGFjdCBhcyBhIGNsb3NlIGJ1dHRvbi5cbiAgICBpZiAoJ2Nsb3NlQnV0dG9uJyA9PSBmcmFtZUNvbXBvbmVudC5pZCkge1xuICAgICAgZnJhbWVDb21wb25lbnQuaHRtbEVsZW1lbnQub25jbGljayA9IG1lLmNsb3NlO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBjaGlsZCBtZW51IG9wZW4vY2xvc2VcbiAgICB2YXIgZnJhbWVDb21wb25lbnRIYXNDaGlsZE1lbnUgPSBmcmFtZUNvbXBvbmVudC5odG1sRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuanNmcmFtZS1jaGlsZC1tZW51Jyk7XG4gICAgaWYgKGZyYW1lQ29tcG9uZW50SGFzQ2hpbGRNZW51KSB7XG4gICAgICBtZS5ldmVudExpc3RlbmVySGVscGVyLmFkZEV2ZW50TGlzdGVuZXIoZnJhbWVDb21wb25lbnQuaHRtbEVsZW1lbnQsICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICAgIHZhciBmcmFtZUNvbXBvbmVudElkID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdjb21wb25lbnQtaWQnKTtcblxuICAgICAgICAgIC8vIENsb3NlIGFsbCBmcmFtZSBjb21wb25lbnQncyBjaGlsZG1lbnUgb25jZSBiZWNhdXNlIG90aGVyIGZyYW1lIGNvbXBvbmVudCdzIGNoaWxkbWVudSBtYXkgYmUgb3Blbi5cbiAgICAgICAgICAvLyBJZiB7ZXhjZXB0RnJhbWVDb21wb25lbnRJZDpbZnJhbWVDb21wb25lbnRJZF19IGlzIHNwZWNpZmllZCBmb3IgdGhlIGFyZ3VtZW50LFxuICAgICAgICAgIC8vIHRoZSBjaGlsZCBtZW51IHdpbGwgbm90IGJlIGNsb3NlZC5cbiAgICAgICAgICBtZS5oaWRlRnJhbWVDb21wb25lbnRDaGlsZE1lbnVzKHsgZXhjZXB0RnJhbWVDb21wb25lbnRJZDogZnJhbWVDb21wb25lbnRJZCB9KTtcblxuICAgICAgICAgIGlmIChmcmFtZUNvbXBvbmVudElkKSB7XG4gICAgICAgICAgICB2YXIgZnJhbWVDb21wb25lbnRIdG1sRWxlbWVudCA9IG1lLmdldEZyYW1lQ29tcG9uZW50RWxlbWVudChmcmFtZUNvbXBvbmVudElkKTtcbiAgICAgICAgICAgIHZhciBmcmFtZUNvbXBvbmVudENoaWxkTWVudSA9IGZyYW1lQ29tcG9uZW50SHRtbEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmpzZnJhbWUtY2hpbGQtbWVudScpO1xuICAgICAgICAgICAgaWYgKGZyYW1lQ29tcG9uZW50Q2hpbGRNZW51KSB7XG4gICAgICAgICAgICAgIC8vIEJ5IG1ha2luZyB0aGUgZGlzcGxheSBhIHRhYmxlLFxuICAgICAgICAgICAgICAvLyB0aGUgd2lkdGggb2YgdGhlIGNoaWxkTWVudSBjYW4gYmUgYWNjdXJhdGVseSByZWZsZWN0ZWQuXG4gICAgICAgICAgICAgIC8vIChmbGV4IGRvZXMgbm90IHNldCB0aGUgd2lkdGggY29ycmVjdGx5LilcbiAgICAgICAgICAgICAgaWYgKGZyYW1lQ29tcG9uZW50Q2hpbGRNZW51LnN0eWxlLmRpc3BsYXkgPT0gJ3RhYmxlJykge1xuICAgICAgICAgICAgICAgIGZyYW1lQ29tcG9uZW50Q2hpbGRNZW51LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZnJhbWVDb21wb25lbnRDaGlsZE1lbnUuc3R5bGUuZGlzcGxheSA9ICd0YWJsZSc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2ZyYW1lQ29tcG9uZW50IGNoaWxkIG1lbnUgaXNudCBmb3VuZC4gZnJhbWVDb21wb25lbnRJZD0nICsgZnJhbWVDb21wb25lbnRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7IGxpc3RlbmVyTmFtZTogJ2ZyYW1lLWNvbXBvbmVudF9jaGlsZC1tZW51LWxpc3RlbmVyJyB9KTtcbiAgICB9XG5cbiAgICBtZS5hZGRGcmFtZUNvbXBvbmVudChmcmFtZUNvbXBvbmVudCk7XG4gIH0gIC8vIC9hZGQgZnJhbWVDb21wb25lbnRzW2VuZF1cblxuICAvL292ZXJyaWRlIHRoZSBmaWVsZFxuICBtZS5odG1sRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuXG4gIG1lLmh0bWxFbGVtZW50Lm9uY29udGV4dG1lbnUgPSB0aGlzLmNvbnRleHRNZW51O1xuXG5cbiAgLy9UaGUgcG9saWN5IG9mIEJvcmRlciBkcmF3aW5nIHNlZW1zIHRvIGJlIGRpZmZlcmVudCBiZXR3ZWVuIElFIGFuZCBGRi5cbiAgdmFyIGNhcmliVmFsID0gMDtcblxuXG4gIG1lLmNhcmliVmFsdWUgPSBjYXJpYlZhbDtcblxuICBpZiAobWUuZXhCb3JkZXJXaWR0aCkge1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmJvcmRlcldpZHRoID0gbWUuZXhCb3JkZXJXaWR0aCArICdweCc7XG4gIH1cbiAgbWUuaHRtbEVsZW1lbnQuc3R5bGUud2lkdGggPSAocGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUud2lkdGgsIDEwKSAtIGNhcmliVmFsKSArICdweCc7XG4gIG1lLmh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCA9IChwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQsIDEwKSAtIGNhcmliVmFsICsgMSkgKyAncHgnO1xuICBtZS5odG1sRWxlbWVudC50eXBlTmFtZSA9ICdjd2luZG93JztcbiAgbWUuaHRtbEVsZW1lbnQub3ZlcmZsb3cgPSAnYXV0byc7XG4gIG1lLmh0bWxFbGVtZW50LnN0eWxlLmJveFNpemluZyA9ICdjb250ZW50LWJveCc7XG5cblxuICBpZiAoYXBwZWFyYW5jZS5mcmFtZUJvcmRlclN0eWxlKSB7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuYm9yZGVyU3R5bGUgPSBhcHBlYXJhbmNlLmZyYW1lQm9yZGVyU3R5bGU7XG4gIH1cblxuICBpZiAoYXBwZWFyYW5jZS5mcmFtZUJveFNoYWRvdykge1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmJveFNoYWRvdyA9IGFwcGVhcmFuY2UuZnJhbWVCb3hTaGFkb3c7XG4gIH1cblxuICAvL1RPRE8gZGVwcmVjYXRpb24oYmVjYXVzZSBDSWZGcmFtZSBpcyBleHRlbmRlZCB0aGlzIG9wZXJhdGlvbilcbiAgaWYgKHBhcnNlSW50KGFwcGVhcmFuY2UuZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQsIDEwKSA+PSAwKSB7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuYm9yZGVyV2lkdGggPSBhcHBlYXJhbmNlLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0O1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gYXBwZWFyYW5jZS5mcmFtZUJvcmRlckNvbG9yRGVmYXVsdDtcblxuICB9XG4gIGlmIChwYXJzZUludChhcHBlYXJhbmNlLmZyYW1lQm9yZGVyUmFkaXVzLCAxMCkgPj0gMCkge1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmJvcmRlclJhZGl1cyA9IGFwcGVhcmFuY2UuZnJhbWVCb3JkZXJSYWRpdXM7XG4gIH1cblxuICBtZS5vbkNsb3NlRnJhbWVMaXN0ZW5lciA9IG51bGw7XG5cbn1cblxuXG5DRnJhbWUucHJvdG90eXBlLnNldFRpdGxlQmFyQ2xhc3NOYW1lID0gZnVuY3Rpb24oY2xhc3NOYW1lRm9yRGVmYXVsdCwgY2xhc3NOYW1lRm9yRm9jdXNlZCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICBpZiAoY2xhc3NOYW1lRm9yRGVmYXVsdCkge1xuICAgIG1lLnRpdGxlQmFyQ2xhc3NOYW1lRGVmYXVsdCA9IGNsYXNzTmFtZUZvckRlZmF1bHQ7XG4gICAgbWUudGl0bGVCYXJDbGFzc05hbWVGb2N1c2VkID0gY2xhc3NOYW1lRm9yRGVmYXVsdDtcbiAgfVxuICBpZiAoY2xhc3NOYW1lRm9yRm9jdXNlZCkge1xuICAgIG1lLnRpdGxlQmFyQ2xhc3NOYW1lRm9jdXNlZCA9IGNsYXNzTmFtZUZvckZvY3VzZWQ7XG4gIH1cbiAgcmV0dXJuIG1lO1xufTtcbi8qKlxuICogQWRkIGZyYW1lQ29tcG9uZW50KFdyYXBwZWQgRE9NIGVsZW1lbnQgbGlrZSAnZGl2JyB0byBkaXNwbGF5IGFib3ZlIHRoZSBmcmFtZSkgdG8gZnJhbWVcbiAqIEBwYXJhbSBmcmFtZUNvbXBvbmVudFxuICovXG5DRnJhbWUucHJvdG90eXBlLmFkZEZyYW1lQ29tcG9uZW50ID0gZnVuY3Rpb24oZnJhbWVDb21wb25lbnQpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICBtZS5mcmFtZUNvbXBvbmVudE1hcFtmcmFtZUNvbXBvbmVudC5pZF0gPSBmcmFtZUNvbXBvbmVudDtcbiAgbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuYXBwZW5kQ2hpbGQoZnJhbWVDb21wb25lbnQuaHRtbEVsZW1lbnQpO1xuICByZXR1cm4gbWU7XG59O1xuXG4vKipcbiAqIEdldCBzdG9yZWQgZnJhbWUgY29tcG9uZW50IGJ5IGlkXG4gKiBAcGFyYW0gZnJhbWVDb21wb25lbnRcbiAqL1xuQ0ZyYW1lLnByb3RvdHlwZS5nZXRGcmFtZUNvbXBvbmVudEVsZW1lbnQgPSBmdW5jdGlvbihpZCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICBpZiAobWUuZnJhbWVDb21wb25lbnRNYXBbaWRdKSB7XG4gICAgcmV0dXJuIG1lLmZyYW1lQ29tcG9uZW50TWFwW2lkXS5odG1sRWxlbWVudDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuXG5DRnJhbWUucHJvdG90eXBlLnJlbW92ZUZyYW1lQ29tcG9uZW50QnlJZCA9IGZ1bmN0aW9uKGZyYW1lQ29tcG9uZW50SWQpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICB2YXIgZnJhbWVDb21wb25lbnQgPSBtZS5mcmFtZUNvbXBvbmVudE1hcFtmcmFtZUNvbXBvbmVudElkXTtcblxuICBtZS5jYW52YXMuY2FudmFzRWxlbWVudC5yZW1vdmVDaGlsZChmcmFtZUNvbXBvbmVudC5odG1sRWxlbWVudCk7XG4gIGRlbGV0ZSBtZS5mcmFtZUNvbXBvbmVudE1hcFtmcmFtZUNvbXBvbmVudElkXTtcbn07XG5cbkNGcmFtZS5wcm90b3R5cGUuc2hvd0ZyYW1lQ29tcG9uZW50ID0gZnVuY3Rpb24oZnJhbWVDb21wb25lbnRJZCwgZGlzcGxheSkge1xuICB2YXIgbWUgPSB0aGlzO1xuICB2YXIgY29tcCA9IG1lLmdldEZyYW1lQ29tcG9uZW50RWxlbWVudChmcmFtZUNvbXBvbmVudElkKTtcbiAgaWYgKGNvbXApIHtcbiAgICBpZiAoZGlzcGxheSkge1xuICAgICAgY29tcC5zdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbWU7XG59O1xuXG5DRnJhbWUucHJvdG90eXBlLmhpZGVGcmFtZUNvbXBvbmVudCA9IGZ1bmN0aW9uKGZyYW1lQ29tcG9uZW50SWQpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgdmFyIGNvbXAgPSBtZS5nZXRGcmFtZUNvbXBvbmVudEVsZW1lbnQoZnJhbWVDb21wb25lbnRJZCk7XG4gIGlmIChjb21wKSB7XG4gICAgY29tcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG4gIHJldHVybiBtZTtcbn07XG5cbkNGcmFtZS5wcm90b3R5cGUuaGlkZUFsbFZpc2libGVGcmFtZUNvbXBvbmVudHMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICB2YXIgY29tcE1hcCA9IG1lLmZyYW1lQ29tcG9uZW50TWFwO1xuICBmb3IgKHZhciBrZXkgaW4gY29tcE1hcCkge1xuICAgIGlmIChjb21wTWFwLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHZhciBjb21wID0gY29tcE1hcFtrZXldLmh0bWxFbGVtZW50O1xuICAgICAgaWYgKGNvbXAuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIGNvbXAuX2FscmVhZHlOb25lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGNvbXAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH1cbn07XG5DRnJhbWUucHJvdG90eXBlLnNob3dBbGxWaXNpYmxlRnJhbWVDb21wb25lbnRzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIHZhciBjb21wTWFwID0gbWUuZnJhbWVDb21wb25lbnRNYXA7XG4gIGZvciAodmFyIGtleSBpbiBjb21wTWFwKSB7XG4gICAgaWYgKGNvbXBNYXAuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgdmFyIGNvbXAgPSBjb21wTWFwW2tleV0uaHRtbEVsZW1lbnQ7XG4gICAgICBpZiAoY29tcC5fYWxyZWFkeU5vbmUpIHtcbiAgICAgICAgY29tcC5fYWxyZWFkeU5vbmUgPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tcC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBDbG9zZSBhbGwgY2hpbGRNZW51XG4gSWYge2V4Y2VwdEZyYW1lQ29tcG9uZW50SWQ6W2ZyYW1lQ29tcG9uZW50SWRdfSBpcyBzcGVjaWZpZWQgZm9yIHRoZSBhcmd1bWVudCxcbiB0aGUgY2hpbGQgbWVudSB3aWxsIG5vdCBiZSBjbG9zZWQuXG5cbiAqIEBwYXJhbSBvcHRcbiAqL1xuQ0ZyYW1lLnByb3RvdHlwZS5oaWRlRnJhbWVDb21wb25lbnRDaGlsZE1lbnVzID0gZnVuY3Rpb24ob3B0KSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgdmFyIGNvbXBNYXAgPSBtZS5mcmFtZUNvbXBvbmVudE1hcDtcbiAgZm9yICh2YXIgZnJhbWVDb21wb25lbnRJZCBpbiBjb21wTWFwKSB7XG4gICAgaWYgKGNvbXBNYXAuaGFzT3duUHJvcGVydHkoZnJhbWVDb21wb25lbnRJZCkpIHtcbiAgICAgIGlmIChvcHQgJiYgb3B0LmV4Y2VwdEZyYW1lQ29tcG9uZW50SWQpIHtcbiAgICAgICAgaWYgKGZyYW1lQ29tcG9uZW50SWQgPT09IG9wdC5leGNlcHRGcmFtZUNvbXBvbmVudElkKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBjb21wID0gY29tcE1hcFtmcmFtZUNvbXBvbmVudElkXTtcbiAgICAgIGlmIChjb21wLmNoaWxkTWVudSkge1xuICAgICAgICBjb21wLmNoaWxkTWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuXG5DRnJhbWUucHJvdG90eXBlLnNldFRpdGxlID0gZnVuY3Rpb24oc3RyKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIG1lLnRpdGxlID0gc3RyO1xuICBpZiAobWUuc2hvd1RpdGxlQmFyKSB7XG5cbiAgICB2YXIgdGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShzdHIpO1xuICAgIC8vZmlyc3RDaGlsZOOBrmZpcnN0Q2hpbGTjgYxzcGFuXG4gICAgbWUudGl0bGVCYXIuZmlyc3RDaGlsZC5yZXBsYWNlQ2hpbGQodGV4dE5vZGUsIG1lLnRpdGxlQmFyLmZpcnN0Q2hpbGQuZmlyc3RDaGlsZCk7XG4gIH1cbiAgcmV0dXJuIG1lO1xufTtcblxuQ0ZyYW1lLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbihkZWx0YUxlZnQsIGRlbHRhVG9wLCBkZWx0YVdpZHRoLCBkZWx0YUhlaWdodCkge1xuXG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgdmFyIHRtcExlZnQgPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0LCAxMCk7XG4gIHZhciB0bXBUb3AgPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS50b3AsIDEwKTtcbiAgdmFyIHRtcFdpZHRoID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUud2lkdGgsIDEwKTtcbiAgdmFyIHRtcEhlaWdodCA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCwgMTApO1xuXG4gIG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPSBwYXJzZUludCh0bXBMZWZ0ICsgZGVsdGFMZWZ0LCAxMCkgKyAncHgnO1xuICBtZS5odG1sRWxlbWVudC5zdHlsZS50b3AgPSBwYXJzZUludCh0bXBUb3AgKyBkZWx0YVRvcCwgMTApICsgJ3B4JztcblxuICBtZS5odG1sRWxlbWVudC5zdHlsZS53aWR0aCA9IHBhcnNlSW50KHRtcFdpZHRoICsgZGVsdGFXaWR0aCwgMTApICsgJ3B4JztcbiAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gcGFyc2VJbnQodG1wSGVpZ2h0ICsgZGVsdGFIZWlnaHQsIDEwKSArICdweCc7XG5cblxuICB2YXIgdG1wQ2FudmFzV2lkdGggPSBwYXJzZUludChtZS5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS53aWR0aCwgMTApO1xuICB2YXIgdG1wQ2FudmFzSGVpZ2h0ID0gcGFyc2VJbnQobWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUuaGVpZ2h0LCAxMCk7XG5cbiAgLy9TaW5jZSBjYW52YXNFbGVtZW50IGlzIGEgKDAsIDApIHJlbGF0aXZlIGNvb3JkaW5hdGUgd2l0aCByZXNwZWN0IHRvIHRoZSBwYXJlbnQgZWxlbWVudCxcbiAgLy8gc28gaXQgaXMgbm90IG5lY2Vzc2FyeSB0byBjaGFuZ2UgbGVmdCBhbmQgdG9wLlxuICBtZS5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS53aWR0aCA9ICh0bXBDYW52YXNXaWR0aCArIGRlbHRhV2lkdGgpICsgJ3B4JztcbiAgbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gKHRtcENhbnZhc0hlaWdodCArIGRlbHRhSGVpZ2h0KSArICdweCc7XG5cblxuICBpZiAobWUuc2hvd1RpdGxlQmFyKSB7XG5cbiAgICAvL0NoYW5nZSB0aGUgc2l6ZSBvZiB0aGUgdGl0bGUgYmFyLiBUaXRsZUFkanVzdFdpZHRoIGV0Yy5cbiAgICAvL1RoZSByZWFzb24gd2h5IHlvdSBkbyBub3QgaGF2ZSB0byB1c2UgdGl0bGVBZGp1c3RXaWR0aCBpcyBiZWNhdXNlXG4gICAgLy8gdGhlc2Ugc2NhbGluZyBhcmUgZG9uZSB3aXRoIGRpZmZlcmVuY2VzIChkZWx0YVgsIGRlbHRhWSkuXG4gICAgLy9UaGVyZWZvcmUsIGlmIHlvdSBhZGp1c3Qgd2l0aCB0aGUgdGl0bGVBZGp1c3RXaWR0aCBhc1xuICAgIC8vIHRoZSBpbml0aWFsIHZhbHVlLCB0aGUgb3RoZXIgd2lsbCBzdHJldGNoIHJlbGF0aXZlLlxuICAgIC8vWW91IGRvIG5vdCB0aGluayB5b3UgY2FuIHVzZSBpZkRlbHRhXG4gICAgbWUudGl0bGVCYXIuc3R5bGUud2lkdGggPSAodG1wQ2FudmFzV2lkdGggKyBkZWx0YVdpZHRoKSArICdweCc7XG5cbiAgfSBlbHNlIHtcblxuXG4gIH1cblxuXG4gIGZvciAodmFyIGJlYW5OYW1lIGluIG1lLmNhbnZhcy5iZWFuTGlzdCkge1xuICAgIHZhciB0bXBCZWFuID0gbWUuY2FudmFzLmJlYW5MaXN0W2JlYW5OYW1lXTtcblxuICAgIGlmICh0bXBCZWFuLmh0bWxFbGVtZW50LnR5cGVOYW1lID09ICdjbWFya2Vyd2luZG93Jykge1xuICAgICAgaWYgKHRtcEJlYW4uaHRtbEVsZW1lbnQudXNhZ2UgPT0gJ1JEJykge1xuICAgICAgICAvL01vdmUgdGhlIHNpemUgY2hhbmdlIGxvd2VyIHJpZ2h0KFJEKSBtYXJrZXIgYWNjb3JkaW5nIHRvIHRoZSBhbW91bnQgb2YgbW92ZW1lbnQuXG4gICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9IChwYXJzZUludCh0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQsIDEwKSArIGRlbHRhV2lkdGgpICsgJ3B4JztcbiAgICAgICAgdG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS50b3AgPSAocGFyc2VJbnQodG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS50b3AsIDEwKSArIGRlbHRhSGVpZ2h0KSArICdweCc7XG4gICAgICB9IGVsc2UgaWYgKHRtcEJlYW4uaHRtbEVsZW1lbnQudXNhZ2UgPT0gJ0REJykge1xuICAgICAgICAvL01vdmUgdGhlIHNpemUgY2hhbmdlIGxvd2VyIG1hcmtlciBhY2NvcmRpbmcgdG8gdGhlIG1vdmVtZW50IGFtb3VudC5cbiAgICAgICAgLy8gRG8gbm90IG1vdmUgbGVmdC5Pbmx5IHRoZSB3aWR0aCB3aWwgaW5jcmVhc2Ugb3IgZGVjcmVhc2UuXG4gICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUud2lkdGggPSAocGFyc2VJbnQodG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS53aWR0aCwgMTApICsgZGVsdGFXaWR0aCkgKyAncHgnO1xuICAgICAgICB0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLnRvcCA9IChwYXJzZUludCh0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwgMTApICsgZGVsdGFIZWlnaHQpICsgJ3B4JztcbiAgICAgIH0gZWxzZSBpZiAodG1wQmVhbi5odG1sRWxlbWVudC51c2FnZSA9PSAnUlInKSB7XG4gICAgICAgIC8vTW92ZSB0aGUgc2l6ZSBjaGFuZ2UgcmlnaHQgbWFya2VyIGFjY29yZGluZyB0byB0aGUgbW92ZW1lbnQgYW1vdW50XG4gICAgICAgIC8vRG8gbm90IG1vdmUgdG9wLE9ubHkgdGhlIGhlaWdodCB3aWxsIGluY3JlYXNlIG9yIGRlY3JlYXNlLlxuICAgICAgICB0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPSAocGFyc2VJbnQodG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS5sZWZ0LCAxMCkgKyBkZWx0YVdpZHRoKSArICdweCc7XG4gICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gKHBhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0LCAxMCkgKyBkZWx0YUhlaWdodCkgKyAncHgnO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG59O1xuXG5cbkNGcmFtZS5wcm90b3R5cGUuY2FudmFzTW91c2VEb3duID0gZnVuY3Rpb24oZSkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIC8vTW91c2Vkb3duIHByb2Nlc3Npbmcgb2YgQ0ZyYW1lLmNhbnZhc1xuXG4gIC8vJ1RoaXMnIGluIHRoaXMgbWV0aG9kIGluZGljYXRlcyAnQ3dpbmRvdy5jYW52YXMuY2FudmFzRWxlbWVudCcuXG4gIGlmICh0aGlzLnBhcmVudENGcmFtZS5wYXJlbnRDYW52YXMubW91c2VEb3duU291cmNlID09IG51bGwpIHtcbiAgICB0aGlzLnBhcmVudENGcmFtZS5wYXJlbnRDYW52YXMubW91c2VEb3duU291cmNlID0gJ2NoaWxkY2FudmFzJztcbiAgfVxuXG5cbn07XG5DRnJhbWUucHJvdG90eXBlLm1vdXNlVXAgPSBmdW5jdGlvbihlKSB7XG4gIHRoaXMuY2FudmFzLm1vdXNlVXAoZSk7XG59O1xuXG5DRnJhbWUucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oZSkge1xuXG4gIHZhciBtZSA9IHRoaXM7XG4gIC8vQ2xvc2UgcHJvY2Vzc2luZyBvZiBDRnJhbWUgZnJvbSBDbG9zZUJ1dHRvblxuXG5cbiAgdmFyIHBhcmVudENhbnZhcyA9IHRoaXMucGFyZW50T2JqZWN0LnBhcmVudENhbnZhcztcbiAgdmFyIGNmcmFtZU9iaiA9IHRoaXMucGFyZW50T2JqZWN0O1xuXG4gIGNvbnNvbGUubG9nKCdDRnJhbWUjY2xvc2UgXCInICsgY2ZyYW1lT2JqLnRpdGxlICsgJyhAJyArIGNmcmFtZU9iai5nZXROYW1lKCkgKyAnKScgKyAnXCIgQCcgKyBjZnJhbWVPYmoud2luZG93SWQpO1xuXG4gIHZhciB3aW5kb3dJZCA9IGNmcmFtZU9iai5pZDtcbiAgY2ZyYW1lT2JqLmNsb3NlSW50ZXJuYWxseShlLCBwYXJlbnRDYW52YXMsIHdpbmRvd0lkKTtcblxuXG59O1xuXG5DRnJhbWUucHJvdG90eXBlLmNsb3NlRnJhbWUgPSBmdW5jdGlvbihlKSB7XG5cblxuICAvL0Nsb3NlIHByb2Nlc3Npbmcgb2YgQ0ZyYW1lXG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgY29uc29sZS5sb2coJ0NGcmFtZSNjbG9zZUZyYW1lIFwiJyArIG1lLnRpdGxlICsgJygnICsgbWUuZ2V0TmFtZSgpICsgJyknICsgJ1wiIEAnICsgbWUud2luZG93SWQpO1xuXG4gIHZhciBwYXJlbnRDYW52YXMgPSB0aGlzLnBhcmVudENhbnZhcztcbiAgbWUuY2xvc2VJbnRlcm5hbGx5KGUsIHBhcmVudENhbnZhcywgbWUud2luZG93SWQpO1xuXG5cbn07XG5cbkNGcmFtZS5wcm90b3R5cGUuY2xvc2VJbnRlcm5hbGx5ID0gZnVuY3Rpb24oZSwgcGFyZW50Q2FudmFzLCB3aW5kb3dJZCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIGlmICghcGFyZW50Q2FudmFzKSB7XG4gICAgY29uc29sZS5lcnJvcignV2luZG93KCcgKyB3aW5kb3dJZCArICcpIG1heSBoYXZlIGJlZW4gY2xvc2VkJyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHBhcmVudENhbnZhcy5yZW1vdmVCZWFuKHdpbmRvd0lkKTtcblxuXG4gIC8vYWRkZWQgZm9yIG1vZGFsIHdpbmRvd1xuICBpZiAobWUubW9kYWxCYWNrZ3JvdW5kV2luZG93SWQpIHtcbiAgICBwYXJlbnRDYW52YXMucmVtb3ZlQmVhbihtZS5tb2RhbEJhY2tncm91bmRXaW5kb3dJZCk7XG4gICAgbWUubW9kYWxCYWNrZ3JvdW5kV2luZG93SWQgPSBudWxsO1xuICB9XG5cbiAgaWYgKG1lLm9uQ2xvc2VGcmFtZUxpc3RlbmVyKSB7XG4gICAgbWUub25DbG9zZUZyYW1lTGlzdGVuZXIobWUpO1xuICB9XG59O1xuXG5DRnJhbWUucHJvdG90eXBlLnNldE9uQ2xvc2VGcmFtZUxpc3RlbmVyID0gZnVuY3Rpb24obGlzdGVuZXIpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgbWUub25DbG9zZUZyYW1lTGlzdGVuZXIgPSBsaXN0ZW5lcjtcblxufTtcblxuQ0ZyYW1lLnByb3RvdHlwZS5jb250ZXh0TWVudSA9IGZ1bmN0aW9uKCkge1xuICAvL0lmIHlvdSBpc3N1ZSB0aGUgcmlnaHQtY2xpY2sgbWVudSBpbiB0aGUgd2luZG93LCBzZXQgdGhlIHNvdXJjZSB0byBDRnJhbWUuXG4gIHZhciBjb250ZXh0TWVudVNvdXJjZSA9ICdDRnJhbWUnO1xuICByZXR1cm4gZmFsc2U7XG59O1xuXG5cbkNGcmFtZS5wcm90b3R5cGUuc2V0VGl0bGVCYXJUZXh0Q29sb3IgPSBmdW5jdGlvbihzdHIpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgbWUudGl0bGVCYXIuc3R5bGUuY29sb3IgPSBzdHI7XG59O1xuXG4vKipcbiAqIFNldCB3aW5kb3cgcG9zaXRpb24gd2l0aCBhbmNob3JcbiAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gKiBAcGFyYW0ge251bWJlcn0geVxuICogQHBhcmFtIHtzdHJpbmd9IGFuY2hvciBhbmNob3IgbWVhbnMgdGhlIHBvc2l0aW9uIG9mIHRoZSB3aW5kb3cgd2l0aCByZXNwZWN0IHRvIHdoaWNoIHRoZSBwb3NpdGlvbiBpcyBzcGVjaWZpZWQuPGJyPlxuICogICBUaGUgZm9sbG93aW5nIHZhbHVlcyBjYW4gYmUgc3BlY2lmaWVkIGZvciB0aGUgYW5jaG9yXG4gTEVGVF9UT1BcbiBDRU5URVJfVE9QXG4gUklHSFRfVE9QXG4gTEVGVF9DRU5URVJcbiBDRU5URVJfQ0VOVEVSXG4gUklHSFRfQ0VOVEVSXG4gTEVGVF9CT1RUT01cbiBDRU5URVJfQk9UVE9NXG4gUklHSFRfQk9UVE9NXG4gKiBAcmV0dXJucyB7Q0ZyYW1lfVxuICovXG5DRnJhbWUucHJvdG90eXBlLnNldFBvc2l0aW9uID0gZnVuY3Rpb24oeCwgeSwgYW5jaG9yKSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgdmFyIGZyYW1lV2lkdGggPSBtZS5nZXRXaWR0aCgpO1xuICB2YXIgZnJhbWVIZWlnaHQgPSBtZS5nZXRIZWlnaHQoKTtcblxuICBtZS5fc2V0UG9zaXRpb25JbnRlcm5hbGx5KHgsIHksIGFuY2hvciwgZnJhbWVXaWR0aCwgZnJhbWVIZWlnaHQpO1xuXG4gIHJldHVybiBtZTtcbn07XG5DRnJhbWUucHJvdG90eXBlLl9zZXRQb3NpdGlvbkludGVybmFsbHkgPSBmdW5jdGlvbih4LCB5LCBhbmNob3IsIGZyYW1lV2lkdGgsIGZyYW1lSGVpZ2h0KSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgaWYgKGFuY2hvcikge1xuICAgIG1lLmFuY2hvciA9IGFuY2hvcjtcbiAgfVxuXG4gIGlmICghYW5jaG9yIHx8IENBTElHTi5MRUZUX1RPUCA9PSBhbmNob3IpIHtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0ID0geCArICdweCc7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wID0geSArICdweCc7XG4gIH0gZWxzZSBpZiAoQ0FMSUdOLkhDRU5URVJfVE9QID09IGFuY2hvcikge1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPSAoLWZyYW1lV2lkdGggLyAyICsgeCkgKyAncHgnO1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCA9IHkgKyAncHgnO1xuICB9IGVsc2UgaWYgKENBTElHTi5SSUdIVF9UT1AgPT0gYW5jaG9yKSB7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9ICgtZnJhbWVXaWR0aCArIHgpICsgJ3B4JztcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS50b3AgPSB5ICsgJ3B4JztcbiAgfSBlbHNlIGlmIChDQUxJR04uTEVGVF9WQ0VOVEVSID09IGFuY2hvcikge1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS50b3AgPSAoLWZyYW1lSGVpZ2h0IC8gMiArIHkpICsgJ3B4JztcbiAgfSBlbHNlIGlmIChDQUxJR04uSENFTlRFUl9WQ0VOVEVSID09IGFuY2hvcikge1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPSAoLWZyYW1lV2lkdGggLyAyICsgeCkgKyAncHgnO1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCA9ICgtZnJhbWVIZWlnaHQgLyAyICsgeSkgKyAncHgnO1xuICB9IGVsc2UgaWYgKENBTElHTi5SSUdIVF9WQ0VOVEVSID09IGFuY2hvcikge1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPSAoLWZyYW1lV2lkdGggKyB4KSArICdweCc7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wID0gKC1mcmFtZUhlaWdodCAvIDIgKyB5KSArICdweCc7XG4gIH0gZWxzZSBpZiAoQ0FMSUdOLkxFRlRfQk9UVE9NID09IGFuY2hvcikge1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQgPSB4ICsgJ3B4JztcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS50b3AgPSAoLWZyYW1lSGVpZ2h0ICsgeSkgKyAncHgnO1xuICB9IGVsc2UgaWYgKENBTElHTi5IQ0VOVEVSX0JPVFRPTSA9PSBhbmNob3IpIHtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0ID0gKC1mcmFtZVdpZHRoIC8gMiArIHgpICsgJ3B4JztcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS50b3AgPSAoLWZyYW1lSGVpZ2h0ICsgeSkgKyAncHgnO1xuICB9IGVsc2UgaWYgKENBTElHTi5SSUdIVF9CT1RUT00gPT0gYW5jaG9yKSB7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9ICgtZnJhbWVXaWR0aCArIHgpICsgJ3B4JztcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS50b3AgPSAoLWZyYW1lSGVpZ2h0ICsgeSkgKyAncHgnO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgcmVsYXRpdmUgcG9zaXRpb24gd2l0aCBhbmNob3JcbiAqIEByZXR1cm5zIHt7eDogKiwgeTogKiwgYW5jaG9yOiAqfX1cbiAqL1xuQ0ZyYW1lLnByb3RvdHlwZS5nZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICB2YXIgZnJhbWVXaWR0aCA9IG1lLmdldFdpZHRoKCk7XG4gIHZhciBmcmFtZUhlaWdodCA9IG1lLmdldEhlaWdodCgpO1xuICB2YXIgeDtcbiAgdmFyIHk7XG4gIHZhciBhbmNob3IgPSBtZS5hbmNob3I7XG4gIGlmICghYW5jaG9yIHx8IENBTElHTi5MRUZUX1RPUCA9PSBhbmNob3IpIHtcbiAgICB4ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCwgMTApO1xuICAgIHkgPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS50b3AsIDEwKTtcbiAgfSBlbHNlIGlmIChDQUxJR04uSENFTlRFUl9UT1AgPT0gYW5jaG9yKSB7XG4gICAgeCA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQsIDEwKSArIGZyYW1lV2lkdGggLyAyO1xuICAgIHkgPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS50b3AsIDEwKTtcbiAgfSBlbHNlIGlmIChDQUxJR04uUklHSFRfVE9QID09IGFuY2hvcikge1xuICAgIHggPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0LCAxMCkgKyBmcmFtZVdpZHRoO1xuICAgIHkgPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS50b3AsIDEwKTtcbiAgfSBlbHNlIGlmIChDQUxJR04uTEVGVF9WQ0VOVEVSID09IGFuY2hvcikge1xuICAgIHggPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0LCAxMCk7XG4gICAgeSA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwgMTApICsgZnJhbWVIZWlnaHQgLyAyO1xuICB9IGVsc2UgaWYgKENBTElHTi5IQ0VOVEVSX1ZDRU5URVIgPT0gYW5jaG9yKSB7XG4gICAgeCA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQsIDEwKSArIGZyYW1lV2lkdGggLyAyO1xuICAgIHkgPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS50b3AsIDEwKSArIGZyYW1lSGVpZ2h0IC8gMjtcbiAgfSBlbHNlIGlmIChDQUxJR04uUklHSFRfVkNFTlRFUiA9PSBhbmNob3IpIHtcbiAgICB4ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCwgMTApICsgZnJhbWVXaWR0aDtcbiAgICB5ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wLCAxMCkgKyBmcmFtZUhlaWdodCAvIDI7XG4gIH0gZWxzZSBpZiAoQ0FMSUdOLkxFRlRfQk9UVE9NID09IGFuY2hvcikge1xuICAgIHggPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0LCAxMCk7XG4gICAgeSA9IHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwgMTApICsgZnJhbWVIZWlnaHQ7XG4gIH0gZWxzZSBpZiAoQ0FMSUdOLkhDRU5URVJfQk9UVE9NID09IGFuY2hvcikge1xuICAgIHggPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0LCAxMCkgKyBmcmFtZVdpZHRoIC8gMjtcbiAgICB5ID0gcGFyc2VJbnQobWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wLCAxMCkgKyBmcmFtZUhlaWdodDtcbiAgfSBlbHNlIGlmIChDQUxJR04uUklHSFRfQk9UVE9NID09IGFuY2hvcikge1xuICAgIHggPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0LCAxMCkgKyBmcmFtZVdpZHRoO1xuICAgIHkgPSBwYXJzZUludChtZS5odG1sRWxlbWVudC5zdHlsZS50b3AsIDEwKSArIGZyYW1lSGVpZ2h0O1xuICB9XG4gIHJldHVybiB7IHg6IHgsIHk6IHksIGFuY2hvcjogYW5jaG9yIH07XG59O1xuXG5DRnJhbWUucHJvdG90eXBlLmdldExlZnQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgcmV0dXJuIHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQsIDEwKTtcbn07XG5cblxuQ0ZyYW1lLnByb3RvdHlwZS5nZXRUb3AgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgcmV0dXJuIHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLnRvcCwgMTApO1xufTtcbkNGcmFtZS5wcm90b3R5cGUuZ2V0V2lkdGggPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgcmV0dXJuIHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLndpZHRoLCAxMCk7XG59O1xuQ0ZyYW1lLnByb3RvdHlwZS5nZXRIZWlnaHQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgcmV0dXJuIHBhcnNlSW50KG1lLmh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCwgMTApO1xufTtcblxuQ0ZyYW1lLnByb3RvdHlwZS5nZXRTaXplID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIHJldHVybiB7IHdpZHRoOiBtZS5nZXRXaWR0aCgpLCBoZWlnaHQ6IG1lLmdldEhlaWdodCgpIH07XG59O1xuXG5DRnJhbWUucHJvdG90eXBlLnNldFNpemUgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0LCBmb3JjZSkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIHZhciBieVVzZXIgPSB0cnVlO1xuXG4gIGlmIChmb3JjZSkge1xuICAgIGJ5VXNlciA9IGZhbHNlO1xuICB9XG5cblxuICAvL2NhbGwgQ0lGcmFtZSNyZXNpemUgaW5zdGVhZCBvZiBDRnJhbWUjcmVzaXplXG4gIG1lLnJlc2l6ZSgwLCAwLCB3aWR0aCAtIG1lLmdldFdpZHRoKCksIGhlaWdodCAtIG1lLmdldEhlaWdodCgpLCBieVVzZXIpO1xuICByZXR1cm4gbWU7XG59O1xuXG5DRnJhbWUucHJvdG90eXBlLmdldFdpbmRvd0lkID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIHJldHVybiBtZS53aW5kb3dJZDtcbn07XG5cbkNGcmFtZS5wcm90b3R5cGUuZ2V0TmFtZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICByZXR1cm4gbWUucHJvcGVydHkubmFtZTtcbn07XG5cbkNGcmFtZS5wcm90b3R5cGUuc2V0TmFtZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgbWUucHJvcGVydHkubmFtZSA9IG5hbWU7XG59O1xuLyoqXG4gKiBlbmQgb2YgQ0ZyYW1lIGNsYXNzXG4gKi9cblxuLy8rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstXG5cblxuaW5oZXJpdChDSWZGcmFtZSwgQ0ZyYW1lKTtcblxuLyoqXG4gKiBDSWZGcmFtZSBjbGFzc1xuICogRXh0ZW5zaW9uIGNsYXNzIHdpdGggY29udGVudHMgZnJhbWUgb2YgQ0ZyYW1lIGFzIGlmcmFtZVxuICogQHBhcmFtIHdpbmRvd0lkXG4gKiBAcGFyYW0gYXBwZWFyYW5jZVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIENJZkZyYW1lKHdpbmRvd0lkLCBsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQsIGFwcGVhcmFuY2UpIHtcblxuXG4gIHZhciB3bGVmdCA9IGxlZnQ7XG4gIHZhciB3dG9wID0gdG9wO1xuICB2YXIgd3dpZHRoID0gd2lkdGg7XG4gIHZhciB3aGVpZ2h0ID0gaGVpZ2h0O1xuICB2YXIgemluZGV4ID0gYXBwZWFyYW5jZS56aW5kZXg7XG4gIHZhciB3Ym9yZGVyd2lkdGggPSBudWxsO1xuXG5cbiAgdmFyIG1lID0gdGhpcztcblxuICB0aGlzLmpzRnJhbWUgPSBudWxsO1xuICB0aGlzLmNvbnRyb2wgPSBudWxsO1xuXG4gIHRoaXMubWluRnJhbWVXaWR0aCA9IDEyODtcbiAgdGhpcy5taW5XaW5kb3dIZWlnaHQgPSAzMjtcblxuICB0aGlzLmV2ZW50TGlzdGVuZXJIZWxwZXIgPSBuZXcgRXZlbnRMaXN0ZW5lckhlbHBlcigpO1xuXG4gIC8qKlxuICAgKiBJZiB0aGlzIHZhbHVlIGlzIHRydWUsIHRoZSBmb2N1cyB3aWxsIG1vdmUgd2hlbiB0YXBwaW5nIHRoZSBpZnJhbWUgYXJlYSxcbiAgICogYnV0IGlmIHRoZSB3aW5kb3cgZG8gbm90IGhhdmUgdGhlIGZvY3VzLCB5b3UgY2FuIG5vdCBjbGljayBvbiB0aGUgZWxlbWVudCBpbiB0aGUgaWZyYW1lLlxuICAgKi9cbiAgdGhpcy5vdmVycmF5VHJhbnNwYXJlbnRTY3JlZW5FbmFibGVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqICBPbmx5IGluIHRoZSBjYXNlIG9mIHJlc2l6aW5nIGEgdHJhbnNwYXJlbnQgc2NyZWVuIGNhbiBiZSBkaXNwbGF5ZWQgb24gdGhlIGlmcmFtZVxuICAgKiAgYW5kIHRoZSBzaXplIGNhbiBiZSBhZGp1c3RlZCBzbW9vdGhseS5cbiAgICogIHRydWUgaXMgcmVjb21tZW5kZWQuXG4gICAqL1xuICAvL0NoYW5nZSBoaXN0b3J5XG4gIC8vMjAxODEyMjZcbiAgLy9DaGFuZ2VkIHRvIGZhbHNlLlxuICAvLyBTbyBpdCBiZWNvbWVzIG5lY2Vzc2FyeSB0byBjbGljayB0d2ljZSB0byByZWFjdCB3aGVuIHlvdSBjYWxsIHRoZSAjc2V0U2l6ZSxJIGNoYW5nZWQgdGhlIHZhbHVlIHRvIGZhbHNlLlxuICAvLzIwMTgxMjMxXG4gIC8vSSBmb3VuZCB0aGUgd2F5IHRoYXQgaWZyYW1lIHdpbGwgYmUgY2hhbmdlZCB0aGUgc2l6ZSBzbW9vdGhseS5zbyB0aGUgZmluYWwgYW5zd2VyIGlzIHRydWUuXG4gIHRoaXMub3ZlcnJheVRyYW5zcGFyZW50U2NyZWVuT25SZXNpemUgPSB0cnVlO1xuXG4gIHRoaXMudGl0bGVCYXJDb2xvckZvY3VzZWQgPSBhcHBlYXJhbmNlLnRpdGxlQmFyQ29sb3JGb2N1c2VkO1xuXG4gIHRoaXMudGl0bGVCYXJDb2xvckRlZmF1bHQgPSBhcHBlYXJhbmNlLnRpdGxlQmFyQ29sb3JEZWZhdWx0O1xuXG4gIHRoaXMudGl0bGVCYXJDYXB0aW9uQ29sb3JEZWZhdWx0ID0gYXBwZWFyYW5jZS50aXRsZUJhckNhcHRpb25Db2xvckRlZmF1bHQ7XG4gIHRoaXMudGl0bGVCYXJDYXB0aW9uQ29sb3JGb2N1c2VkID0gYXBwZWFyYW5jZS50aXRsZUJhckNhcHRpb25Db2xvckZvY3VzZWQ7XG5cbiAgLy9jYWxsIHN1cGVyIGNvbnN0cnVjdG9yXG4gIENJZkZyYW1lLnN1cGVyQ29uc3RydWN0b3IuY2FsbChtZSwgd2luZG93SWQsIHdsZWZ0LCB3dG9wLCB3d2lkdGgsIHdoZWlnaHQsIHppbmRleCwgd2JvcmRlcndpZHRoLCBhcHBlYXJhbmNlKTtcblxuICAvL2JvcmRlciBjb2xvclxuICBtZS5mcmFtZUJvcmRlckNvbG9yRGVmYXVsdCA9IGFwcGVhcmFuY2UuZnJhbWVCb3JkZXJDb2xvckRlZmF1bHQ7XG4gIG1lLmZyYW1lQm9yZGVyQ29sb3JGb2N1c2VkID0gYXBwZWFyYW5jZS5mcmFtZUJvcmRlckNvbG9yRm9jdXNlZDtcblxuICAvL2JvcmRlciB3aWR0aFxuICBtZS5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCA9IGFwcGVhcmFuY2UuZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQ7XG4gIG1lLmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkID0gYXBwZWFyYW5jZS5mcmFtZUJvcmRlcldpZHRoRm9jdXNlZDtcblxuICBtZS5pZnJhbWUgPSBudWxsO1xuXG5cbiAgLy9PZmZzZXQgdmFsdWUgZm9yIHdpZHRoIGFkanVzdG1lbnQgb2YgaWZyYW1lXG4gIG1lLmlmRGVsdGEgPSAwO1xuXG4gIG1lLnJlc2l6YWJsZSA9IHRydWU7XG5cblxuICBtZS5vbk1vdXNlTW92ZU9uSWZyYW1lID0gbnVsbDtcbiAgbWUub25Nb3VzZVVwT25JZnJhbWUgPSBudWxsO1xuXG4gIG1lLl9oYXNGb2N1cyA9IGZhbHNlO1xuXG4gIG1lLl9oYXNGb2N1c1RpbWUgPSAwO1xuXG5cbiAgbWUuaHRtbEVsZW1lbnQudHlwZU5hbWUgPSAnY2lmd2luZG93JztcblxuICAvL25hbWUgb2YgaWZyYW1lXG4gIHZhciBleElmcmFtZU5hbWUgPSAncml2ZXJzdW5fJyArIHdpbmRvd0lkO1xuXG5cbiAgbWUuZGZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblxuICBtZS5pZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcblxuXG4gIG1lLmlmcmFtZS5uYW1lID0gZXhJZnJhbWVOYW1lO1xuXG4gIG1lLmlmcmFtZS5pZCA9IGV4SWZyYW1lTmFtZTtcblxuICBtZS5pZnJhbWUuZnJhbWVCb3JkZXIgPSAnMCc7XG4gIC8vbWUuaWZyYW1lLnNjcm9sbGluZyA9ICdubyc7XG5cbiAgbWUuaWZyYW1lLnpJbmRleCA9IC0xO1xuXG4gIC8vQWxsb3cgdHJhbnNwYXJlbnQgb2YgaWZyYW1lIGJhY2tncm91bmQuXG4gIG1lLmlmcmFtZS5hbGxvd1RyYW5zcGFyZW5jeSA9ICd0cnVlJztcbiAgbWUuaWZyYW1lLndpZHRoID0gbWUuY2FudmFzTmV0V2lkdGggLSBtZS5pZkRlbHRhICsgMDtcbiAgbWUuaWZyYW1lLmhlaWdodCA9IG1lLmNhbnZhc05ldEhlaWdodCAtIG1lLmlmRGVsdGEgKyAwO1xuXG4gIG1lLnNob3dUaXRsZUJhciA9IGFwcGVhcmFuY2Uuc2hvd1RpdGxlQmFyO1xuXG4gIG1lLmdldEZyYW1lSW5uZXJCb3JkZXJSYWRpdXMgPSBhcHBlYXJhbmNlLmdldEZyYW1lSW5uZXJCb3JkZXJSYWRpdXM7XG5cbiAgbWUuZnJhbWVCb3JkZXJSYWRpdXMgPSBhcHBlYXJhbmNlLmZyYW1lQm9yZGVyUmFkaXVzO1xuXG5cbiAgbWUuYWRqdXN0RnJhbWVCb3JkZXJSYWRpdXMoKTtcblxuICBtZS51c2VJZnJhbWUgPSBmYWxzZTtcblxuXG4gIG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LmFwcGVuZENoaWxkKG1lLmlmcmFtZSk7XG5cbiAgbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuYXBwZW5kQ2hpbGQobWUuZGZyYW1lKTtcblxuXG4gIHRoaXMuc2V0VXNlSWZyYW1lID0gZnVuY3Rpb24odXNlSWZyYW1lKSB7XG4gICAgbWUudXNlSWZyYW1lID0gdXNlSWZyYW1lO1xuICAgIG1lLmlmcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgbWUuaWZyYW1lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBtZS5pZnJhbWUuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgIG1lLmlmcmFtZS5zdHlsZS50b3AgPSAnMHB4JztcbiAgICBtZS5pZnJhbWUuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgbWUuaWZyYW1lLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcblxuICAgIG1lLmRmcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgbWUuZGZyYW1lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBtZS5kZnJhbWUuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgIG1lLmRmcmFtZS5zdHlsZS5ib3hTaXppbmcgPSAnY29udGVudC1ib3gnO1xuXG4gICAgbWUuZGZyYW1lLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgIG1lLmRmcmFtZS5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICBtZS5kZnJhbWUuc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIC8vbWUuZGZyYW1lLnN0eWxlLmJvcmRlclN0eWxlPVwic29saWRcIjtcbiAgICBtZS5kZnJhbWUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcblxuICAgIGlmICh1c2VJZnJhbWUpIHtcbiAgICAgIG1lLmlmcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgbWUuZGZyYW1lLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICB9IGVsc2Uge1xuICAgICAgbWUuaWZyYW1lLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgICAgIG1lLmRmcmFtZS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIH1cbiAgfTtcblxuICBtZS5zZXRVc2VJZnJhbWUoYXBwZWFyYW5jZS51c2VJZnJhbWUpO1xuXG4gIC8vIElmIGl0IGlzIElFLCBzZXQgdGhlIGNhbnZhc0VsZW1lbnQgb2YgdGhlIGNhbnZhcyB3aGljaCBpcyB0aGUgcGFyZW50IG9mIHRoZSBpZnJhbWUgdG8gdHJhbnNwYXJlbnQuXG5cbiAgaWYgKG1lLm92ZXJyYXlUcmFuc3BhcmVudFNjcmVlbkVuYWJsZWQgfHwgbWUub3ZlcnJheVRyYW5zcGFyZW50U2NyZWVuT25SZXNpemUpIHtcbiAgICAvL0NyZWF0ZSBhIHRyYW5zcGFyZW50IHNjcmVlbi5cbiAgICBtZS50cmFuc3BhcmVuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgLy8gbWUudHJhbnNwYXJlbmNlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoaW1nL2ltZ19iYXJvbl90cC5naWYpJztcblxuICAgIG1lLnRyYW5zcGFyZW5jZS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgbWUudHJhbnNwYXJlbmNlLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICBtZS50cmFuc3BhcmVuY2Uuc3R5bGUudG9wID0gJzBweCc7XG5cbiAgICAvL1RyYW5zcGFyZW50IHNjcmVlbiBpcyAwcHggd2hlbiBjcmVhdGluZyB3aW5kb3dcbiAgICBtZS50cmFuc3BhcmVuY2Uuc3R5bGUud2lkdGggPSAnMHB4JztcbiAgICBtZS50cmFuc3BhcmVuY2Uuc3R5bGUuaGVpZ2h0ID0gJzBweCc7XG5cbiAgICBtZS50cmFuc3BhcmVuY2Uuc3R5bGUuekluZGV4ID0gNDtcbiAgICBtZS50cmFuc3BhcmVuY2Uuc3R5bGUuYm9yZGVyV2lkdGggPSAnMHB4JztcbiAgICBtZS50cmFuc3BhcmVuY2Uuc3R5bGUuYm9yZGVyQ29sb3IgPSAnI2ZmMDBlZSc7XG4gICAgbWUudHJhbnNwYXJlbmNlLnN0eWxlLmJvcmRlclN0eWxlID0gJ25vbmUnO1xuICAgIG1lLnRyYW5zcGFyZW5jZS5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XG5cbiAgICBtZS50cmFuc3BhcmVuY2Uuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICBtZS5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBhcHBlYXJhbmNlLmZyYW1lQmFja2dyb3VuZENvbG9yO1xuXG5cbiAgICBtZS5jYW52YXMuY2FudmFzRWxlbWVudC5hcHBlbmRDaGlsZChtZS50cmFuc3BhcmVuY2UpO1xuICB9XG5cbiAgbWUuZXZlbnRFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIG1lLmFwcGVhcmFuY2UgPSBhcHBlYXJhbmNlO1xuXG59XG5cblxuQ0lmRnJhbWUucHJvdG90eXBlLmdldEZyYW1lVmlldyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICByZXR1cm4gbWUuZGZyYW1lO1xufTtcblxuQ0lmRnJhbWUucHJvdG90eXBlLmdldEZyYW1lQXBwZWFyYW5jZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICByZXR1cm4gbWUuYXBwZWFyYW5jZTtcbn07XG5cbkNJZkZyYW1lLnByb3RvdHlwZS5zZXRIVE1MID0gZnVuY3Rpb24oaHRtbCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS5kZnJhbWUuaW5uZXJIVE1MID0gaHRtbDtcbn07XG5DSWZGcmFtZS5wcm90b3R5cGUuc2V0RnJhbWVJbkZyYW1lID0gZnVuY3Rpb24oZW5hYmxlZCkge1xuXG4gIC8vIFdoeSBpIGhhZCB0byAoYm90aGVyIHRvOikgKSBtYWtlIGEgc2V0RnJhbWVJbkZyYW1lXG4gIC8vIFRoZSBlbGVtZW50IHNwZWNpZmllZCBhdCB0aGUgdG9wIG9mIHRoZSBjb250ZW50IG9mIHRoZSBwYXJlbnQgd2luZG93IChmb3IgZXhhbXBsZSwgZGl2IGVsZW1lbnQpXG4gIC8vIG1heSBOT1QgYmUgYWJsZSB0byBnZXQgdGhlIHJlc2l6ZSBldmVudCB1c2luZyBhZGRFdmVudExpc3RlbmVyLlxuICAvLyBUaGVyZWZvcmUsIHdoZW4gdGhlIHJlc2l6ZSBldmVudCBpc3N1ZWQgYnkganNGcmFtZSBpbiB0aGUgcGFyZW50IHdpbmRvdyBvY2N1cnMsXG4gIC8vIGl0cyBjdXN0b20gYXR0cmlidXRlIChXaW5kb3dFdmVudEhlbHBlci5NQVRDSF9QQVJFTlRfQ0hBTkdFX01BUktFUl9BVFRSKSBpcyBhdHRhY2hlZFxuICAvLyB0byB0aGUgZWxlbWVudCBhdCB0aGUgdG9wIG9mIHRoZSBwYXJlbnQgd2luZG93IGNvbnRlbnRcbiAgLy8gYW5kIGl0IGlzIGNhcHR1cmVkIGJ5IHRoZSBtdXRhdGlvbk9ic2VydmVyIG9uIHRoZSBjaGlsZCB3aW5kb3cgc2lkZS5cblxuICB2YXIgbWUgPSB0aGlzO1xuXG4gIHZhciBjb250ZW50c0VsZSA9IG1lLmRmcmFtZSA/IG1lLmRmcmFtZS5maXJzdENoaWxkIDogbnVsbDtcblxuICBpZiAoY29udGVudHNFbGUpIHtcbiAgICAvLyBwb2x5ZmlsbCBmb3IgI25vd1xuICAgIGlmICghRGF0ZS5ub3cpIHtcbiAgICAgIERhdGUubm93ID0gZnVuY3Rpb24gbm93KCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoZW5hYmxlZCkge1xuICAgICAgbWUuZXZlbnRFbWl0dGVyLm9ubHkoJ3Jlc2l6ZScsICdmaWYtbGlzdGVuZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGVudHNFbGUuc2V0QXR0cmlidXRlKFdpbmRvd0V2ZW50SGVscGVyLk1BVENIX1BBUkVOVF9DSEFOR0VfTUFSS0VSX0FUVFIsIERhdGUubm93KCkpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRlbnRzRWxlLnJlbW92ZUF0dHJpYnV0ZShXaW5kb3dFdmVudEhlbHBlci5NQVRDSF9QQVJFTlRfQ0hBTkdFX01BUktFUl9BVFRSKTtcbiAgICAgIG1lLmV2ZW50RW1pdHRlci5vbmx5KCdyZXNpemUnLCAnZmlmLWxpc3RlbmVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcbi8qKlxuICogRmluZCBET00gRWxlbWVudCBpbiB0aGUgZnJhbWUgYnkgcXVlcnlTZWxlY3Rvcjxicj5cbiAqICBFeGFtcGxlczxicj5cbiAqICAgICAgZnJhbWUuJChcIiNteV9pZF9uYW1lXCIpO1xuICogICAgICBmcmFtZS4kKFwiLm15X2NsYXNzX25hbWVcIik7XG4gKiAgICAgIGZyYW1lLiQoXCJkaXY+aW1nXCIpO1xuICogICAgICBmcmFtZS4kKFwiaW5wdXRbdHlwZT0nc3VibWl0XVwiKTtcbiAqIEBwYXJhbSB7c3RyaW5nfSBxIHNlbGVjdG9yIHF1ZXJ5XG4gKiBAcmV0dXJucyB7Tm9kZX1cbiAqL1xuQ0lmRnJhbWUucHJvdG90eXBlLiQgPSBmdW5jdGlvbihxKSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgaWYgKG1lLnVzZUlmcmFtZSkge1xuXG4gICAgdmFyIGRvY0luSWZyYW1lID0gbWUuaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gICAgcmV0dXJuIGRvY0luSWZyYW1lLnF1ZXJ5U2VsZWN0b3IocSk7XG5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbWUuZGZyYW1lLnF1ZXJ5U2VsZWN0b3IocSk7XG4gIH1cbn07XG5cbi8qKlxuICogU2V0cyBhbiBldmVudCBsaXN0ZW5lciBmb3IgdGhlIHdpbmRvdyBpdHNlbGYgb3IgZWxlbWVudHMgaW4gdGhlIGNvbnRlbnRzIG9mIHRoZSB3aW5kb3cuXG4gSXQgaXMgcG9zc2libGUgdG8gcmVnaXN0ZXIgbXVsdGlwbGUgbGlzdGVuZXJzIHRvIHRoZSBzYW1lIGV2ZW50IHR5cGUuXG5cbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuIElmIHRoZSBcImlkXCIgaXMgcHJlZml4ZWQgd2l0aCBcIiNcIixcbiBhbiBldmVudCBsaXN0ZW5lciBjYW4gYmUgc2V0IHRvIGEgRE9NIGVsZW1lbnQgKGV2ZW50VGFyZ2V0KSBpZGVudGlmaWVkIGJ5IHRoZSBpZCBpbiB0aGUgY29udGVudC48YnI+XG4gVGhpcyBpcyB0aGUgc2FtZSBiZWhhdmlvciBhcyB0aGUgdXN1YWwgZXZlbnRUYXJnZXQjYWRkRXZlbnRMaXN0ZW5lci48YnI+XG4gPGJyPlxuIEluIGFkZGl0aW9uIHRvIHRoZSBET00gZWxlbWVudCBpbiB0aGUgY29udGVudCwgdGhlIGZvbGxvd2luZyBzcGVjaWFsIG5hbWVzIGFyZSByZXNlcnZlZCBmb3IgdGhlIFwiaWRcIjxicj5cbiBcImNsb3NlQnV0dG9uXCIgLi4uIGNsb3NlIGJ1dHRvbi48YnI+XG4gXCJtaW5pbWl6ZUJ1dHRvblwiIC4uLiBNaW5pbWl6ZSBCdXR0b248YnI+XG4gXCJ6b29tQnV0dG9uXCIuLi56b29tIGJ1dHRvbi48YnI+XG4gXCJyZXN0b3JlQnV0dG9uXCIgLi4uIHRoZSBidXR0b24gdGhhdCByZXN0b3JlcyB0aGUgd2luZG93IHNpemUuPGJyPlxuIFwiZGVtaW5pbWl6ZUJ1dHRvblwiIC4uLiB0aGUgYnV0dG9uIHRvIHJldHVybiBmcm9tIHRoZSBtaW5pbWl6ZWQgc3RhdGUuPGJyPlxuIDxicj5cbiBZb3UgY2FuIGFsc28gcmVjZWl2ZSBldmVudHMgc3VjaCBhcyB3aW5kb3cgcmVzaXppbmcsIG1vdmluZywgYW5kIGZvY3VzaW5nLlxuIEluIHRoaXMgY2FzZSwgc3BlY2lmeSB0aGUgZm9sbG93aW5nIGFzIFwiaWRcIjxicj5cbiBcImZyYW1lXCIgb3IgXCJ3aW5kb3dcIi48YnI+XG4gPGJyPlxuIFlvdSBjYW4gc3BlY2lmeSBhIGZyYW1lQ29tcG9uZW50IG5hbWUgdGhhdCBpcyB1bmlxdWVseSBkZWZpbmVkIGJ5IGFkZEZyYW1lQ29tcG9uZW50LlxuIChHZW5lcmljIGJ1dHRvbnMgc3VjaCBhcyBjbG9zZUJ1dHRvbiBhcmUgb25lIG9mIHRoZSBmcmFtZSBjb21wb25lbnRzLlxuICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50VHlwZSBUaGUgZWxlbWVudCBpbiB0aGUgY29udGVudCAoSFRNTCkgb2YgYSB3aW5kb3cgd2hvc2UgXCJpZFwiIHN0YXJ0cyB3aXRoIFwiI1wiXG4gKiBjYW4gYmUgdGhlIHNhbWUgYXMgdGhlIGV2ZW50VHlwZShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRXZlbnQvdHlwZSkgdXNlZCBieSB0aGUgbm9ybWFsIGFkZEV2ZW50TGlzdGVuZXIuPGJyPlxuIDxicj5cbiBJZiB0aGUgXCJpZFwiIGlzIGEgZnJhbWUgb3IgYSB3aW5kb3csIHRoZSBmb2xsb3dpbmcgY2FuIGJlIHVzZWQ8YnI+XG4gXCJtb3ZlXCIuLi4gV2hlbiBhIHdpbmRvdyBpcyBtb3ZlZCwgaXQgZmlyZXMuPGJyPlxuIFwicmVzaXplXCIuLi4gRmlyZXMgd2hlbiB0aGUgd2luZG93IGlzIHJlc2l6ZWQuPGJyPlxuIFwiZm9jdXNcIi4uLiBcImZvY3VzXCIgbWVhbnMgZ290IGZvY3VzLiBJdCBmaXJlcyB3aGVuIHRoZSB3aW5kb3cgaXMgaW4gZm9jdXMuPGJyPlxuIFwiYmx1clwiLi4uIFwiYmx1clwiIG1lYW5zIGxvc3QgZm9jdXMuSXQgZmlyZXMgd2hlbiB0aGUgd2luZG93IGxvc2VzIGZvY3VzLjxicj5cbiA8YnI+XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja0Z1bmNcbiAqL1xuQ0lmRnJhbWUucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oaWQsIGV2ZW50VHlwZSwgY2FsbGJhY2tGdW5jKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIHZhciBjb21wb25lbnQgPSBtZS5nZXRGcmFtZUNvbXBvbmVudEVsZW1lbnQoaWQpO1xuXG4gIC8vIGlmIGlkIGluZGljYXRlcyBmcmFtZSBjb21wb25lbnQgbGlrZSBDVGV4dEJ1dHRvbixDSW1hZ2VCdXR0b25cbiAgaWYgKGNvbXBvbmVudCkge1xuXG4gICAgLy9TaW5jZSB3ZSB3YW50IHRvIHNwZWNpZnkgb25seSBvbmUgaGFuZGxlciBmb3IgZnJhbWUgY29tcG9uZW50cyBhdCB0aGUgc2FtZSB0aW1lLFxuICAgIC8vIHVzZSBldmVudExpc3RlbmVySGVscGVyIGluc3RlYWQgb2YgYW4gZXZlbnQgbGlzdGVuZXJcbiAgICBtZS5ldmVudExpc3RlbmVySGVscGVyLmFkZEV2ZW50TGlzdGVuZXIoY29tcG9uZW50LCBldmVudFR5cGUsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGNhbGxiYWNrRnVuYyhtZSwgZSxcbiAgICAgICAge1xuICAgICAgICAgIHR5cGU6ICdmcmFtZUNvbXBvbmVudCcsXG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgIGV2ZW50VHlwZTogZXZlbnRUeXBlLFxuICAgICAgICAgIC8vY2hpbGQ6IGNoaWxkTWVudUVsZVxuICAgICAgICB9KTtcbiAgICB9LCB7IGxpc3RlbmVyTmFtZTogJ2ZyYW1lLWNvbXBvbmVudC1saXN0ZW5lcicgfSk7XG4gIH1cblxuICBpZiAoaWQgPT09ICdmcmFtZScgfHwgaWQgPT09ICd3aW5kb3cnKSB7XG5cbiAgICBpZiAoZXZlbnRUeXBlID09PSAnbW92ZScgJiYgIW1lLmV2ZW50RW1pdHRlci5oYXNMaXN0ZW5lckZ1bmNzKCdtb3ZlJykpIHtcbiAgICAgIG1lLnNldE9uTW92ZUxpc3RlbmVyKGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgLy9yZWZDSWZGcmFtZS5ldmVudEVtaXR0ZXIuZW1pdCgncmVzaXplJywpO1xuICAgICAgICBtZS5ldmVudEVtaXR0ZXIuZW1pdCgnbW92ZScsIG1lLl9nZXRDdXJyZW50U2l6ZVBvcygpKTtcbiAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgbWUuZXZlbnRFbWl0dGVyLm9uKGV2ZW50VHlwZSwgY2FsbGJhY2tGdW5jKTtcbiAgfVxuXG4gIC8vIERPTSBlbGVtZW50IGluIGlmcmFtZSBvciBET00gZWxlbWVudCBvbiBkZnJhbWVcbiAgdmFyIGRvbUVsZW1lbnQgPSBtZS4kKGlkKTtcblxuICBpZiAoZG9tRWxlbWVudCkge1xuICAgIGlmIChtZS5ldmVudExpc3RlbmVySGVscGVyLmhhc0V2ZW50TGlzdGVuZXIoZG9tRWxlbWVudCwgZXZlbnRUeXBlLCAnZnJhbWUtZG9tLWxpc3RlbmVyJykpIHtcbiAgICAgIG1lLmV2ZW50TGlzdGVuZXJIZWxwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihkb21FbGVtZW50LCBldmVudFR5cGUsIG51bGwsIHsgbGlzdGVuZXJOYW1lOiAnZnJhbWUtZG9tLWxpc3RlbmVyJyB9KTtcbiAgICB9XG4gICAgbWUuZXZlbnRMaXN0ZW5lckhlbHBlci5hZGRFdmVudExpc3RlbmVyKGRvbUVsZW1lbnQsIGV2ZW50VHlwZSwgZnVuY3Rpb24oZSkge1xuICAgICAgY2FsbGJhY2tGdW5jKG1lLCBlLCB7XG4gICAgICAgIHR5cGU6ICdkb20nLFxuICAgICAgICBpZDogaWQsXG4gICAgICAgIGV2ZW50VHlwZTogZXZlbnRUeXBlXG4gICAgICB9KTtcbiAgICB9LCB7IGxpc3RlbmVyTmFtZTogJ2ZyYW1lLWRvbS1saXN0ZW5lcicgfSk7XG4gIH1cblxuICAvLyBTZWFyY2ggRE9NIGVsZW1lbnQgb24gZnJhbWVDb21wb25lbnRcbiAgaWYgKCFkb21FbGVtZW50KSB7XG5cbiAgICB2YXIgZG9tRWxlbWVudE9uQ2FudmFzRWxlbWVudCA9IG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xuICAgIGlmIChkb21FbGVtZW50T25DYW52YXNFbGVtZW50KSB7XG4gICAgICBkb21FbGVtZW50T25DYW52YXNFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGNhbGxiYWNrRnVuYyhtZSwgZSwge1xuICAgICAgICAgIHR5cGU6ICdkb20nLFxuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICBldmVudFR5cGU6IGV2ZW50VHlwZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxuXG5DSWZGcmFtZS5wcm90b3R5cGUuYWRqdXN0RnJhbWVCb3JkZXJSYWRpdXMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICBpZiAocGFyc2VJbnQobWUuZnJhbWVCb3JkZXJSYWRpdXMsIDEwKSA+IDApIHtcblxuICAgIHZhciBib3JkZXJEYXRhID0gbWUuZ2V0RnJhbWVJbm5lckJvcmRlclJhZGl1cyhtZSwgbWUuX2hhc0ZvY3VzKTtcbiAgICB2YXIgZnJhbWVBcHBlYXJhbmNlID0gYm9yZGVyRGF0YS5mcmFtZUFwcGVhcmFuY2U7XG4gICAgdmFyIGlubmVyQm9yZGVyUmFkaXVzID0gYm9yZGVyRGF0YS5pbm5lckJvcmRlclJhZGl1cztcbiAgICB2YXIgdGl0bGVCYXJIZWlnaHQgPSBwYXJzZUludChmcmFtZUFwcGVhcmFuY2UudGl0bGVCYXJIZWlnaHQsIDEwKTtcblxuICAgIGlmIChtZS5zaG93VGl0bGVCYXIpIHtcblxuICAgICAgLy90aXRsZSBiYXIgZXhpc3RzXG4gICAgICBtZS5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS5ib3JkZXJCb3R0b21SaWdodFJhZGl1cyA9IGlubmVyQm9yZGVyUmFkaXVzO1xuICAgICAgbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUuYm9yZGVyQm90dG9tTGVmdFJhZGl1cyA9IGlubmVyQm9yZGVyUmFkaXVzO1xuICAgICAgbWUuaWZyYW1lLnN0eWxlLmJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzID0gaW5uZXJCb3JkZXJSYWRpdXM7XG4gICAgICBtZS5pZnJhbWUuc3R5bGUuYm9yZGVyQm90dG9tTGVmdFJhZGl1cyA9IGlubmVyQm9yZGVyUmFkaXVzO1xuXG4gICAgICBtZS50aXRsZUJhci5zdHlsZS5ib3JkZXJUb3BMZWZ0UmFkaXVzID0gaW5uZXJCb3JkZXJSYWRpdXM7XG4gICAgICBtZS50aXRsZUJhci5zdHlsZS5ib3JkZXJUb3BSaWdodFJhZGl1cyA9IGlubmVyQm9yZGVyUmFkaXVzO1xuXG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAvL3RpdGxlIGJhciBub3QgZXhpdHNcbiAgICAgIG1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLmJvcmRlclJhZGl1cyA9IGlubmVyQm9yZGVyUmFkaXVzO1xuICAgICAgbWUuaWZyYW1lLnN0eWxlLmJvcmRlclJhZGl1cyA9IGlubmVyQm9yZGVyUmFkaXVzO1xuXG4gICAgfVxuXG4gICAgaWYgKG1lLmRmcmFtZSkge1xuICAgICAgaWYgKHRpdGxlQmFySGVpZ2h0ID09PSAwKSB7XG4gICAgICAgIGlmICghbWUuZGZyYW1lLnN0eWxlLmJvcmRlclRvcFJpZ2h0UmFkaXVzKSB7XG4gICAgICAgICAgbWUuZGZyYW1lLnN0eWxlLmJvcmRlclRvcFJpZ2h0UmFkaXVzID0gaW5uZXJCb3JkZXJSYWRpdXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFtZS5kZnJhbWUuc3R5bGUuYm9yZGVyVG9wTGVmdFJhZGl1cykge1xuICAgICAgICAgIG1lLmRmcmFtZS5zdHlsZS5ib3JkZXJUb3BMZWZ0UmFkaXVzID0gaW5uZXJCb3JkZXJSYWRpdXM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG1lLmRmcmFtZS5zdHlsZS5ib3JkZXJCb3R0b21SaWdodFJhZGl1cyA9IGlubmVyQm9yZGVyUmFkaXVzO1xuICAgICAgbWUuZGZyYW1lLnN0eWxlLmJvcmRlckJvdHRvbUxlZnRSYWRpdXMgPSBpbm5lckJvcmRlclJhZGl1cztcbiAgICB9XG5cblxuICB9XG59O1xuXG5DSWZGcmFtZS5wcm90b3R5cGUuaGFuZGxlUmVsZWFzaW5nRm9jdXMgPSBmdW5jdGlvbihlKSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgdmFyIGZvY3VzZWQgPSBtZS5faGFzRm9jdXM7XG5cbiAgbWUuX2hhc0ZvY3VzID0gZmFsc2U7XG5cbiAgLy91cGRhdGUgc3R5bGUgY2xhc3NcbiAgbWUudGl0bGVCYXIuY2xhc3NOYW1lID0gbWUudGl0bGVCYXJDbGFzc05hbWVEZWZhdWx0O1xuXG4gIGlmIChtZS50aXRsZUJhckNvbG9yRGVmYXVsdCkge1xuICAgIG1lLnRpdGxlQmFyLnN0eWxlLmJhY2tncm91bmQgPSBtZS50aXRsZUJhckNvbG9yRGVmYXVsdDtcbiAgfVxuICBtZS50aXRsZUJhci5zdHlsZS5jb2xvciA9IG1lLnRpdGxlQmFyQ2FwdGlvbkNvbG9yRGVmYXVsdDtcblxuICAvL2JvcmRlciBjb2xvclxuICBpZiAobWUuZnJhbWVCb3JkZXJDb2xvckRlZmF1bHQpIHtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9IG1lLmZyYW1lQm9yZGVyQ29sb3JEZWZhdWx0O1xuICB9XG5cbiAgLy9ib3JkZXIgd2lkdGhcbiAgaWYgKG1lLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0KSB7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuYm9yZGVyV2lkdGggPSBtZS5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdDtcbiAgICBtZS5hZGp1c3RGcmFtZUJvcmRlclJhZGl1cygpO1xuICB9XG5cbiAgaWYgKG1lLmh0bWxFbGVtZW50LnR5cGVOYW1lID09ICdjaWZ3aW5kb3cnKSB7XG4gICAgaWYgKG1lLm92ZXJyYXlUcmFuc3BhcmVudFNjcmVlbkVuYWJsZWQpIHtcbiAgICAgIG1lLnRyYW5zcGFyZW5jZS5zdHlsZS53aWR0aCA9IHBhcnNlSW50KG1lLmlmcmFtZS53aWR0aCwgMTApICsgJ3B4JztcbiAgICAgIG1lLnRyYW5zcGFyZW5jZS5zdHlsZS5oZWlnaHQgPSBwYXJzZUludChtZS5pZnJhbWUuaGVpZ2h0LCAxMCkgKyAncHgnO1xuICAgIH1cbiAgfVxuXG4gIC8vaGFuZGxpbmcgZm9yIGNoaWxkIGZyYW1lQ29tcG9uZW50c1xuICBmb3IgKHZhciBmcmFtZUNvbXBvbmVudElkIGluIG1lLmZyYW1lQ29tcG9uZW50TWFwKSB7XG4gICAgdmFyIGZyYW1lQ29tcG9uZW50ID0gbWUuZnJhbWVDb21wb25lbnRNYXBbZnJhbWVDb21wb25lbnRJZF07XG4gICAgZnJhbWVDb21wb25lbnQuaGFuZGxlUmVsZWFzaW5nRm9jdXMoKTtcbiAgfVxuXG4gIC8vYm9yZGVyIGJvdHRvbVxuICBpZiAobWUudGl0bGVCYXJCb3JkZXJCb3R0b21EZWZhdWx0KSB7XG4gICAgbWUudGl0bGVCYXIuc3R5bGUuYm9yZGVyQm90dG9tID0gbWUudGl0bGVCYXJCb3JkZXJCb3R0b21EZWZhdWx0O1xuICB9XG5cbiAgaWYgKGZvY3VzZWQpIHtcbiAgICBtZS5ldmVudEVtaXR0ZXIuZW1pdCgnYmx1cicsIHsgdGFyZ2V0OiBtZSB9KTtcbiAgfVxuXG5cbiAgcmV0dXJuIG1lO1xufTtcblxuQ0lmRnJhbWUucHJvdG90eXBlLmhhbmRsZVRha2luZ0ZvY3VzID0gZnVuY3Rpb24oZSkge1xuICB2YXIgbWUgPSB0aGlzO1xuICB2YXIgZm9jdXNlZCA9IG1lLl9oYXNGb2N1cztcbiAgbWUuX2hhc0ZvY3VzID0gdHJ1ZTtcbiAgbWUuX2hhc0ZvY3VzID0gRGF0ZS5ub3coKTtcblxuICBpZiAobWUub3ZlcnJheVRyYW5zcGFyZW50U2NyZWVuRW5hYmxlZCkge1xuXG4gICAgLy9jbG9zZSB0cmFuc3BhcmVuY2Ugc2NyZWVuXG4gICAgbWUudHJhbnNwYXJlbmNlLnN0eWxlLndpZHRoID0gJzBweCc7XG4gICAgbWUudHJhbnNwYXJlbmNlLnN0eWxlLmhlaWdodCA9ICcwcHgnO1xuXG4gIH1cblxuICAvL3VwZGF0ZSBzdHlsZSBjbGFzc1xuICBtZS50aXRsZUJhci5jbGFzc05hbWUgPSBtZS50aXRsZUJhckNsYXNzTmFtZUZvY3VzZWQ7XG5cbiAgaWYgKG1lLnRpdGxlQmFyQ29sb3JGb2N1c2VkKSB7XG4gICAgbWUudGl0bGVCYXIuc3R5bGUuYmFja2dyb3VuZCA9IG1lLnRpdGxlQmFyQ29sb3JGb2N1c2VkO1xuICB9XG4gIG1lLnRpdGxlQmFyLnN0eWxlLmNvbG9yID0gbWUudGl0bGVCYXJDYXB0aW9uQ29sb3JGb2N1c2VkO1xuXG5cbiAgLy9ib3JkZXIgY29sb3JcbiAgaWYgKG1lLmZyYW1lQm9yZGVyQ29sb3JGb2N1c2VkKSB7XG4gICAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSBtZS5mcmFtZUJvcmRlckNvbG9yRm9jdXNlZDtcbiAgfVxuXG4gIC8vYm9yZGVyIHdpZHRoXG4gIGlmIChtZS5mcmFtZUJvcmRlcldpZHRoRm9jdXNlZCkge1xuICAgIG1lLmh0bWxFbGVtZW50LnN0eWxlLmJvcmRlcldpZHRoID0gbWUuZnJhbWVCb3JkZXJXaWR0aEZvY3VzZWQ7XG4gICAgbWUuYWRqdXN0RnJhbWVCb3JkZXJSYWRpdXMoKTtcbiAgfVxuXG4gIC8vYm9yZGVyIGJvdHRvbVxuICBpZiAobWUudGl0bGVCYXJCb3JkZXJCb3R0b21Gb2N1c2VkKSB7XG4gICAgbWUudGl0bGVCYXIuc3R5bGUuYm9yZGVyQm90dG9tID0gbWUudGl0bGVCYXJCb3JkZXJCb3R0b21Gb2N1c2VkO1xuICB9XG5cbiAgLy9oYW5kbGluZyBmb3IgY2hpbGQgZnJhbWVDb21wb25lbnRzXG4gIGZvciAodmFyIGZyYW1lQ29tcG9uZW50SWQgaW4gbWUuZnJhbWVDb21wb25lbnRNYXApIHtcbiAgICB2YXIgZnJhbWVDb21wb25lbnQgPSBtZS5mcmFtZUNvbXBvbmVudE1hcFtmcmFtZUNvbXBvbmVudElkXTtcbiAgICBmcmFtZUNvbXBvbmVudC5oYW5kbGVUYWtpbmdGb2N1cygpO1xuICB9XG5cblxuICBpZiAoIWZvY3VzZWQpIHtcbiAgICBtZS5ldmVudEVtaXR0ZXIuZW1pdCgnZm9jdXMnLCB7IHRhcmdldDogbWUgfSk7XG4gIH1cblxuICByZXR1cm4gbWU7XG59O1xuXG5cbkNGcmFtZS5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKG1vZGVsKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIC8vbWUuaHRtbEVsZW1lbnQuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JzsvL2hpZGRlbic7XG5cbiAgaWYgKG1vZGVsICYmIG1vZGVsLnJlcXVlc3RGb2N1cyA9PSBmYWxzZSkge1xuXG4gIH0gZWxzZSB7XG4gICAgbWUucmVxdWVzdEZvY3VzKCk7XG4gIH1cbiAgcmV0dXJuIG1lO1xufTtcblxuXG5DRnJhbWUucHJvdG90eXBlLnNob3dNb2RhbCA9IGZ1bmN0aW9uKG9uQ2xvc2VMaXN0ZW5lcikge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIHZhciBhcHBlYXJhbmNlID0gbmV3IENGcmFtZUFwcGVhcmFuY2UoKTtcbiAgYXBwZWFyYW5jZS5zaG93VGl0bGVCYXIgPSB0cnVlO1xuICBhcHBlYXJhbmNlLnNob3dDbG9zZUJ1dHRvbiA9IGZhbHNlO1xuICBhcHBlYXJhbmNlLmZyYW1lQm9yZGVyUmFkaXVzID0gJzBweCc7XG4gIGFwcGVhcmFuY2UuZnJhbWVCb3JkZXJTdHlsZSA9ICdub25lJztcbiAgYXBwZWFyYW5jZS5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCA9ICcwcHgnO1xuICBhcHBlYXJhbmNlLmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkID0gJzBweCc7XG4gIGFwcGVhcmFuY2UuZnJhbWVCb3hTaGFkb3cgPSBudWxsO1xuICBhcHBlYXJhbmNlLmZyYW1lQmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgYXBwZWFyYW5jZS5mcmFtZUNvbXBvbmVudHMgPSBbXTtcbiAgYXBwZWFyYW5jZS5mcmFtZUhlaWdodEFkanVzdCA9IDA7XG4gIGFwcGVhcmFuY2UudGl0bGVCYXJIZWlnaHQgPSAnMHB4JztcbiAgYXBwZWFyYW5jZS50aXRsZUJhckJvcmRlckJvdHRvbUZvY3VzZWQgPSBudWxsO1xuICBhcHBlYXJhbmNlLnRpdGxlQmFyQ2FwdGlvbkxlZnRNYXJnaW4gPSAnMHB4JztcblxuXG4gIGFwcGVhcmFuY2Uub25Jbml0aWFsaXplID0gZnVuY3Rpb24oKSB7XG4gIH07XG5cbiAgLy9hZGRlZCBmb3IgbW9kYWwgd2luZG93XG4gIGFwcGVhcmFuY2UucHVsbFVwRGlzYWJsZWQgPSB0cnVlO1xuXG4gIHZhciB3aW5kb3dNYW5hZ2VyID0gbWUucGFyZW50Q2FudmFzO1xuXG4gIHZhciBtb2RhbEJhY2tncm91bmRXaW5kb3dJZCA9IERFRi5DRlJBTUUuTU9EQUxfQkFDS0dST1VORF9GUkFNRV9JRF9QUkVGSVggKyBtZS5pZDtcblxuICAvL2NyZWF0ZSBiYWNrZ3JvdW5kIHdpbmRvdyBmb3IgcHJldmVudGluZyBjbGljayBiYWNrZ3JvdW5kXG4gIHZhciBtb2RhbEJhY2tncm91bmRGcmFtZSA9IG5ldyBDSWZGcmFtZShtb2RhbEJhY2tncm91bmRXaW5kb3dJZCwgMCwgMCwgMSwgMSwgYXBwZWFyYW5jZSk7XG4gIG1vZGFsQmFja2dyb3VuZEZyYW1lLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCwgdHJ1ZSk7XG4gIG1vZGFsQmFja2dyb3VuZEZyYW1lLnNldFJlc2l6YWJsZShmYWxzZSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZ1bmN0aW9uKCkge1xuICAgIG1vZGFsQmFja2dyb3VuZEZyYW1lLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCwgdHJ1ZSk7XG4gIH0pO1xuXG5cbiAgLy9yZW1lbWJlciBpZCBvZiBtb2RhbCBiYWNrZ3JvdW5kIGZyYW1lXG4gIG1lLm1vZGFsQmFja2dyb3VuZFdpbmRvd0lkID0gbW9kYWxCYWNrZ3JvdW5kV2luZG93SWQ7XG5cbiAgLy8gaWYgKHByb3BlcnRpZXMgJiYgcHJvcGVydGllcy53aW5kb3dOYW1lKSB7XG4gIC8vICAgICBmcmFtZS5zZXROYW1lKHByb3BlcnRpZXMud2luZG93TmFtZSk7XG4gIC8vIH1cblxuICBtb2RhbEJhY2tncm91bmRGcmFtZS5oaWRlKCk7XG4gIHdpbmRvd01hbmFnZXIuYWRkV2luZG93KG1vZGFsQmFja2dyb3VuZEZyYW1lKTtcblxuXG4gIG1vZGFsQmFja2dyb3VuZEZyYW1lLnNldFRpdGxlKCcnKS5nZXRGcmFtZVZpZXcoKS5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cImpzZnJhbWUtbW9kYWwtd2luZG93LWJhY2tncm91bmRcIj48L2Rpdj4nO1xuICBtb2RhbEJhY2tncm91bmRGcmFtZS5nZXRGcmFtZVZpZXcoKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLDAsMCwwLjApJztcbiAgbW9kYWxCYWNrZ3JvdW5kRnJhbWUuc2hvdygpO1xuXG4gIG1lLnNob3coKTtcblxuICBpZiAob25DbG9zZUxpc3RlbmVyKSB7XG4gICAgbWUuc2V0T25DbG9zZUZyYW1lTGlzdGVuZXIob25DbG9zZUxpc3RlbmVyKTtcbiAgfVxufTtcbkNGcmFtZS5wcm90b3R5cGUuZ2V0V2luZG93TWFuYWdlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICByZXR1cm4gbWUucGFyZW50Q2FudmFzO1xufVxuXG5cbkNJZkZyYW1lLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIC8vICBtZS5odG1sRWxlbWVudC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gIG1lLmh0bWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7Ly9oaWRkZW4nO1xuICByZXR1cm4gbWU7XG59O1xuXG4vL092ZXJyaWRpbmcgQ0JlYW5GcmFtZS5wcm90b3R5cGUub25tb3VzZURvd25cbkNJZkZyYW1lLnByb3RvdHlwZS5vbm1vdXNlRG93biA9IGZ1bmN0aW9uKGUpIHtcblxuICB2YXIgcmVmSHRtbEVsZW1lbnQgPSB0aGlzO1xuXG4gIC8vRG8gbm90IHNlbGVjdCBpdCB3aGVuIGRyYWdnaW5nIGJ5IHRoZSBtb3VzZS5cbiAgZG9jdW1lbnQuYm9keS5vbmRyYWcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIC8vIGRvY3VtZW50LmJvZHkub25zZWxlY3RzdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gICAgIHJldHVybiBmYWxzZTtcbiAgLy8gfTtcblxuXG4gIC8vT3ZlcnJpZGUgZGVjb3JhdG9yIHdpdGggb25tb3VzZURvd24gb2YgcGFyZW50IGNsYXNzXG4gIHJlZkh0bWxFbGVtZW50LmRlY29yYXRvciA9IENGcmFtZS5wcm90b3R5cGUub25tb3VzZURvd247XG4gIHJlZkh0bWxFbGVtZW50LmRlY29yYXRvcihlKTtcblxuICAvL0RlcGxveSBhIHRyYW5zcGFyZW50IHNjcmVlbi5cbiAgLy8gU2luY2UgbW91c2VEb3duIGlzIHBvaW50ZWQgdG8gdGhpcy5odG1sRWxlbWVudC5vbm1vdXNlZG93biBpbiB0aGUgQ0JlYW4gY2xhc3MsXG4gIC8vIHRoaXMgJ3RoaXMnIHdpbGwgaW5kaWNhdGUgdGhpcy5odG1sRWxlbWVudC5cbiAgLy9JbiBvdGhlciB3b3JkcyxcbiAgLy9pZiB5b3Ugd2FudCB0byByZWZlciAnQ0lmRnJhbWUnLHlvdSBuZWVkIHRvIHNwZWNpZnkgJ3RoaXMucGFyZW50LidcbiAgLy9TZWUgQ0JlYW5GcmFtZSBjbGFzcywgeW91IGNhbiBmaW5kICd0aGlzLmh0bWxFbGVtZW50LnBhcmVudCA9IHRoaXMnXG4gIHZhciByZWZDSWZGcmFtZSA9IHJlZkh0bWxFbGVtZW50LnBhcmVudDtcblxuXG4gIHZhciByZWZDV2luZG93TWFuYWdlciA9IHJlZkh0bWxFbGVtZW50LnBhcmVudENhbnZhcztcblxuICAvL1doZW4gc29tZXdoZXJlIHdpbmRvdyhDRnJhbWUsQ0lmRnJhbWUpIGZpcmVzICdtb3VzZURvd24nLFxuICAvLyBDbG9zZSBhbGwgdHJhbnNwYXJlbmN5IHNjcmVlbnMgc28gdGhhdCB0aGUgbW91c2UgY3Vyc29yIGNhbiBwYXNzIG92ZXIgYW55IGlGcmFtZVxuICBmb3IgKHZhciB3aW5kb3dJZCBpbiByZWZDV2luZG93TWFuYWdlci5iZWFuTGlzdCkge1xuICAgIHZhciBvYmpDSWZGcmFtZSA9IHJlZkNXaW5kb3dNYW5hZ2VyLmJlYW5MaXN0W3dpbmRvd0lkXTtcbiAgICBpZiAod2luZG93SWQgPT0gcmVmQ0lmRnJhbWUuZ2V0V2luZG93SWQoKSkge1xuICAgICAgLy9za2lwXG4gICAgfSBlbHNlIHtcbiAgICAgIG9iakNJZkZyYW1lLmhhbmRsZVJlbGVhc2luZ0ZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcmVmQ0lmRnJhbWUuaGFuZGxlVGFraW5nRm9jdXMoKTtcblxufTtcblxuQ0lmRnJhbWUucHJvdG90eXBlLm1vdXNlVXAgPSBmdW5jdGlvbihlKSB7XG4gIHZhciByZWZDSWZGcmFtZSA9IHRoaXM7XG5cblxuICBpZiAocmVmQ0lmRnJhbWUub3ZlcnJheVRyYW5zcGFyZW50U2NyZWVuRW5hYmxlZCB8fCByZWZDSWZGcmFtZS5vdmVycmF5VHJhbnNwYXJlbnRTY3JlZW5PblJlc2l6ZSkge1xuICAgIGlmIChyZWZDSWZGcmFtZS5wYXJlbnRDYW52YXMub25Ub3BPYmplY3QgPT0gcmVmQ0lmRnJhbWUpIHtcbiAgICAgIC8vTWluaW1pemUgdGhlIHdpbmRvdyBhdCB0aGUgZnJvbnQuXG4gICAgICByZWZDSWZGcmFtZS50cmFuc3BhcmVuY2Uuc3R5bGUud2lkdGggPSAnMHB4JztcbiAgICAgIHJlZkNJZkZyYW1lLnRyYW5zcGFyZW5jZS5zdHlsZS5oZWlnaHQgPSAnMHB4JztcbiAgICB9IGVsc2Uge1xuICAgICAgLy9UaGUgd2luZG93IHdoaWNoIGlzIG5vdCB0aGUgYXQgdGhlIGZyb250IGV4cGFuZHMgdGhlIHNjcmVlbiBzbyB0aGF0IGl0IGNhbiByZXNwb25kIHRvIGNsaWNrcy5cblxuICAgICAgaWYgKHJlZkNJZkZyYW1lLm92ZXJyYXlUcmFuc3BhcmVudFNjcmVlbkVuYWJsZWQpIHtcbiAgICAgICAgcmVmQ0lmRnJhbWUudHJhbnNwYXJlbmNlLnN0eWxlLndpZHRoID0gcGFyc2VJbnQocmVmQ0lmRnJhbWUuaWZyYW1lLndpZHRoKSArICdweCc7XG4gICAgICAgIHJlZkNJZkZyYW1lLnRyYW5zcGFyZW5jZS5zdHlsZS5oZWlnaHQgPSBwYXJzZUludChyZWZDSWZGcmFtZS5pZnJhbWUuaGVpZ2h0KSArICdweCc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVmQ0lmRnJhbWUuZGVjb3JhdG9yID0gQ0ZyYW1lLnByb3RvdHlwZS5tb3VzZVVwO1xuICByZWZDSWZGcmFtZS5kZWNvcmF0b3IoZSk7XG5cblxuICAvL0NhbmNlbCBzZWxlY3RpbmcgXCJEbyBub3Qgc2VsZWN0IHdoZW4gZHJhZ2dpbmcgbW91c2Ugd2hpbGUgcmVsZWFzaW5nIGJ1dHRvblwiIGlzIGNhbmNlbGVkXG4gIGRvY3VtZW50LmJvZHkub25kcmFnID0gbnVsbDtcbiAgZG9jdW1lbnQuYm9keS5vbnNlbGVjdHN0YXJ0ID0gbnVsbDtcblxuICAvL0Rpc2FibGUgd2hlbiBzdG9wcGluZyBtb3ZpbmcuKEVuYWJsZSB0cmFuc3BhcmVudCB3aW5kb3cgb25seSB3aGVuIG1vdmluZy4pXG4gIC8vVGhpcyB3aWxsIHdvcmsgc21vb3RobHkgZXZlbiB3aXRoIGlmcmFtZSBjb250ZW50XG4gIHJlZkNJZkZyYW1lLnRyYW5zcGFyZW5jZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xufTtcblxuQ0lmRnJhbWUucHJvdG90eXBlLnNldE1pbkZyYW1lU2l6ZSA9IGZ1bmN0aW9uKHdpZHRoLCBoZWlnaHQpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgbWUubWluRnJhbWVXaWR0aCA9IHdpZHRoO1xuICBtZS5taW5XaW5kb3dIZWlnaHQgPSBoZWlnaHQ7XG59O1xuXG5DSWZGcmFtZS5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24oZGVsdGFMZWZ0LCBkZWx0YVRvcCwgZGVsdGFXaWR0aCwgZGVsdGFIZWlnaHQsIGJ5VXNlcikge1xuXG5cbiAgdmFyIHJlZkNJZkZyYW1lID0gdGhpcztcblxuICBpZiAoIXJlZkNJZkZyYW1lLnJlc2l6YWJsZSAmJiBieVVzZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBwcmV2U2l6ZSA9IHJlZkNJZkZyYW1lLmdldFNpemUoKTtcblxuXG4gIC8vUmVzaXplIHByb2Nlc3Npbmcgc2hvdWxkIGJlIG92ZXJyaWRkZW4gZGlyZWN0bHkgcmF0aGVyIHRoYW4gYWRvcHRpbmcgYSBkZWNvcmF0b3IgcGF0dGVybiBiZWNhdXNlIGl0IGhhcyBiZXR0ZXIgcGVyZm9ybWFuY2UuXG4gIHZhciB0bXBMZWZ0ID0gcGFyc2VJbnQocmVmQ0lmRnJhbWUuaHRtbEVsZW1lbnQuc3R5bGUubGVmdCwgMTApO1xuICB2YXIgdG1wVG9wID0gcGFyc2VJbnQocmVmQ0lmRnJhbWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wLCAxMCk7XG4gIHZhciB0bXBXaWR0aCA9IHBhcnNlSW50KHJlZkNJZkZyYW1lLmh0bWxFbGVtZW50LnN0eWxlLndpZHRoLCAxMCk7XG4gIHZhciB0bXBIZWlnaHQgPSBwYXJzZUludChyZWZDSWZGcmFtZS5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQsIDEwKTtcblxuICAvL0ltcG9ydGFudCBsb2dpYyB0byBoYW5kbGUgdGhlIG1pbmltdW0gb2YgV2luZG93IHdlbGxcbiAgaWYgKGJ5VXNlciAmJiAodG1wV2lkdGggKyBkZWx0YVdpZHRoIDwgcmVmQ0lmRnJhbWUubWluRnJhbWVXaWR0aCAmIGRlbHRhV2lkdGggPCAwKSkge1xuICAgIC8vTWluaW11bSBhZGp1c3RtZW50IG9mIHdpZHRoXG4gICAgcmVmQ0lmRnJhbWUuaHRtbEVsZW1lbnQuc3R5bGUud2lkdGggPSB0bXBXaWR0aCArICdweCc7XG4gICAgZGVsdGFXaWR0aCA9IDA7XG4gIH1cblxuICBpZiAoYnlVc2VyICYmICh0bXBIZWlnaHQgKyBkZWx0YUhlaWdodCA8IHJlZkNJZkZyYW1lLm1pbldpbmRvd0hlaWdodCAmIGRlbHRhSGVpZ2h0IDwgMCkpIHtcbiAgICAvL01pbmltdW0gYWRqdXN0bWVudCBvZiBoZWlnaHRcbiAgICByZWZDSWZGcmFtZS5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0bXBIZWlnaHQgKyAncHgnO1xuICAgIGRlbHRhSGVpZ2h0ID0gMDtcbiAgfVxuICByZWZDSWZGcmFtZS5odG1sRWxlbWVudC5zdHlsZS5sZWZ0ID0gKHRtcExlZnQgKyBkZWx0YUxlZnQpICsgJ3B4JztcbiAgcmVmQ0lmRnJhbWUuaHRtbEVsZW1lbnQuc3R5bGUudG9wID0gKHRtcFRvcCArIGRlbHRhVG9wKSArICdweCc7XG4gIHJlZkNJZkZyYW1lLmh0bWxFbGVtZW50LnN0eWxlLndpZHRoID0gKHRtcFdpZHRoICsgZGVsdGFXaWR0aCkgKyAncHgnO1xuICByZWZDSWZGcmFtZS5odG1sRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAodG1wSGVpZ2h0ICsgZGVsdGFIZWlnaHQpICsgJ3B4JztcblxuXG4gIHZhciB0bXBDYW52YXNXaWR0aCA9IHBhcnNlSW50KHJlZkNJZkZyYW1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLndpZHRoLCAxMCk7XG4gIHZhciB0bXBDYW52YXNIZWlnaHQgPSBwYXJzZUludChyZWZDSWZGcmFtZS5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS5oZWlnaHQsIDEwKTtcblxuICAvL1NpbmNlIGNhbnZhc0VsZW1lbnQgaXMgYSAoMCwgMCkgcmVsYXRpdmUgY29vcmRpbmF0ZSB3aXRoIHJlc3BlY3RcbiAgLy8gdG8gdGhlIHBhcmVudCBlbGVtZW50LCBpdCBpcyBub3QgbmVjZXNzYXJ5IHRvIGNoYW5nZSBsZWZ0IGFuZCB0b3AuXG4gIHJlZkNJZkZyYW1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLndpZHRoID0gKHRtcENhbnZhc1dpZHRoICsgZGVsdGFXaWR0aCkgKyAncHgnO1xuICByZWZDSWZGcmFtZS5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAodG1wQ2FudmFzSGVpZ2h0ICsgZGVsdGFIZWlnaHQpICsgJ3B4JztcblxuICAvL0NoYW5nZSB0aGUgc2l6ZSBvZiB0aGUgdGl0bGUgYmFyLiBUaXRsZUFkanVzdFdpZHRoIGV0Yy5cbiAgLy8gVGhlIHJlYXNvbiB3aHkgeW91IGRvIG5vdCBoYXZlIHRvIHVzZSB0aXRsZUFkanVzdFdpZHRoIGlzXG4gIC8vIGJlY2F1c2UgdGhlc2Ugc2NhbGluZyBhcmUgZG9uZSB3aXRoIGRpZmZlcmVuY2VzIChkZWx0YVgsIGRlbHRhWSkuXG4gIC8vVGhlcmVmb3JlLCBpZiB5b3UgYWRqdXN0IHdpdGggdGhlIHRpdGxlQWRqdXN0V2lkdGhcbiAgLy8gYXMgdGhlIGluaXRpYWwgdmFsdWUsIHRoZSBvdGhlciB3aWxsIHN0cmV0Y2ggcmVsYXRpdmUuXG4gIHJlZkNJZkZyYW1lLnRpdGxlQmFyLnN0eWxlLndpZHRoID0gKHRtcENhbnZhc1dpZHRoIC0gcmVmQ0lmRnJhbWUuaWZEZWx0YSArIGRlbHRhV2lkdGggKyAwKSArICdweCc7XG5cbiAgLy9JbWFnZSByZXNpemluZyBmb3IgaWZyYW1lIHRoYXQgaXMgdGhlIGNoaWxkIGVsZW1lbnQgb2YgY2FudmFzXG4gIHJlZkNJZkZyYW1lLmlmcmFtZS53aWR0aCA9ICh0bXBDYW52YXNXaWR0aCAtIHJlZkNJZkZyYW1lLmlmRGVsdGEgKyBkZWx0YVdpZHRoICsgMCkgKyAncHgnO1xuICByZWZDSWZGcmFtZS5pZnJhbWUuaGVpZ2h0ID0gKHRtcENhbnZhc0hlaWdodCAtIHJlZkNJZkZyYW1lLmlmRGVsdGEgKyBkZWx0YUhlaWdodCArIHJlZkNJZkZyYW1lLmZyYW1lSGVpZ2h0QWRqdXN0KSArICdweCc7XG5cbiAgaWYgKHJlZkNJZkZyYW1lLm92ZXJyYXlUcmFuc3BhcmVudFNjcmVlbkVuYWJsZWQgfHwgcmVmQ0lmRnJhbWUub3ZlcnJheVRyYW5zcGFyZW50U2NyZWVuT25SZXNpemUpIHtcbiAgICAvL0RlcGxveSBhIHRyYW5zcGFyZW50IHNjcmVlbi5cbiAgICByZWZDSWZGcmFtZS50cmFuc3BhcmVuY2Uuc3R5bGUud2lkdGggPSBwYXJzZUludChyZWZDSWZGcmFtZS5pZnJhbWUud2lkdGgpICsgJ3B4JztcbiAgICByZWZDSWZGcmFtZS50cmFuc3BhcmVuY2Uuc3R5bGUuaGVpZ2h0ID0gcGFyc2VJbnQocmVmQ0lmRnJhbWUuaWZyYW1lLmhlaWdodCkgKyAncHgnO1xuICB9XG5cbiAgLy9tb3ZlIGZyYW1lQ29tcG9uZW50KGxpa2UgY2xvc2VCdXR0b24pIGNvcnJlc3BvbmRpbmcgdG8gbW92aW5nIHdpbmRvdyBlZGdlIGZvciByZXNpemVcbiAgZm9yICh2YXIgZnJhbWVDb21wb25lbnRJZCBpbiByZWZDSWZGcmFtZS5mcmFtZUNvbXBvbmVudE1hcCkge1xuICAgIHZhciBmcmFtZUNvbXBvbmVudCA9IHJlZkNJZkZyYW1lLmZyYW1lQ29tcG9uZW50TWFwW2ZyYW1lQ29tcG9uZW50SWRdO1xuICAgIC8vdXBkYXRlIGFsaWdubWVudCBvZiBmcmFtZUNvbXBvbmVudCBjb3JyZXNwb25kaW5nIHRvIG1vdmluZyB3aW5kb3cgZWRnZSBmb3IgcmVzaXplXG4gICAgZnJhbWVDb21wb25lbnQudXBkYXRlQWxpZ24oKTtcbiAgfVxuXG5cbiAgZm9yICh2YXIgYmVhbk5hbWUgaW4gcmVmQ0lmRnJhbWUuY2FudmFzLmJlYW5MaXN0KSB7XG4gICAgdmFyIHRtcEJlYW4gPSByZWZDSWZGcmFtZS5jYW52YXMuYmVhbkxpc3RbYmVhbk5hbWVdO1xuXG4gICAgaWYgKHRtcEJlYW4uaHRtbEVsZW1lbnQudHlwZU5hbWUgPT0gJ2NtYXJrZXJ3aW5kb3cnKSB7XG5cbiAgICAgIGlmICh0bXBCZWFuLmh0bWxFbGVtZW50LnVzYWdlID09ICdSRCcpIHtcbiAgICAgICAgdG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS5sZWZ0ID0gKHBhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUubGVmdCkgKyBkZWx0YVdpZHRoKSArICdweCc7XG4gICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUudG9wID0gKHBhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUudG9wKSArIGRlbHRhSGVpZ2h0KSArICdweCc7XG4gICAgICB9IGVsc2UgaWYgKHRtcEJlYW4uaHRtbEVsZW1lbnQudXNhZ2UgPT0gJ0REJykge1xuICAgICAgICB0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLndpZHRoID0gKHBhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUud2lkdGgpICsgZGVsdGFXaWR0aCkgKyAncHgnO1xuICAgICAgICB0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLnRvcCA9IChwYXJzZUludCh0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLnRvcCkgKyBkZWx0YUhlaWdodCkgKyAncHgnO1xuICAgICAgfSBlbHNlIGlmICh0bXBCZWFuLmh0bWxFbGVtZW50LnVzYWdlID09ICdSUicpIHtcbiAgICAgICAgdG1wQmVhbi5odG1sRWxlbWVudC5zdHlsZS5sZWZ0ID0gKHBhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUubGVmdCkgKyBkZWx0YVdpZHRoKSArICdweCc7XG4gICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gKHBhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0KSArIGRlbHRhSGVpZ2h0KSArICdweCc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGNyclNpemUgPSByZWZDSWZGcmFtZS5nZXRTaXplKCk7XG4gIGlmIChwcmV2U2l6ZS53aWR0aCAhPT0gY3JyU2l6ZS53aWR0aCB8fCBwcmV2U2l6ZS5oZWlnaHQgIT09IGNyclNpemUuaGVpZ2h0KSB7XG4gICAgcmVmQ0lmRnJhbWUuZXZlbnRFbWl0dGVyLmVtaXQoJ3Jlc2l6ZScsIHJlZkNJZkZyYW1lLl9nZXRDdXJyZW50U2l6ZVBvcygpKTtcbiAgfVxuXG5cbn07Ly9yZXNpemVcblxuQ0lmRnJhbWUucHJvdG90eXBlLl9nZXRDdXJyZW50U2l6ZVBvcyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICB2YXIgY3JyU2l6ZSA9IG1lLmdldFNpemUoKTtcbiAgdmFyIGNyclBvcyA9IG1lLmdldFBvc2l0aW9uKCk7XG4gIHJldHVybiB7IHRhcmdldDogbWUsIHBvczogY3JyUG9zLCBzaXplOiBjcnJTaXplIH07XG59O1xuXG5DSWZGcmFtZS5wcm90b3R5cGUucmVzaXplRGlyZWN0ID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCwgYnlVc2VyKSB7XG5cbiAgdmFyIHJlZkNJZkZyYW1lID0gdGhpcztcblxuXG4gIGlmICghcmVmQ0lmRnJhbWUucmVzaXphYmxlICYmIGJ5VXNlcikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmVmQ0lmRnJhbWUuaHRtbEVsZW1lbnQuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gIHJlZkNJZkZyYW1lLmh0bWxFbGVtZW50LnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG5cblxuICB2YXIgdG1wQ2FudmFzV2lkdGggPSBwYXJzZUludChyZWZDSWZGcmFtZS5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS53aWR0aCk7XG4gIHZhciB0bXBDYW52YXNIZWlnaHQgPSBwYXJzZUludChyZWZDSWZGcmFtZS5jYW52YXMuY2FudmFzRWxlbWVudC5zdHlsZS5oZWlnaHQpO1xuXG4gIC8vU2luY2UgY2FudmFzRWxlbWVudCBpcyBhICgwLCAwKSByZWxhdGl2ZSBjb29yZGluYXRlIHdpdGggcmVzcGVjdFxuICAvLyB0byB0aGUgcGFyZW50IGVsZW1lbnQsIGl0IGlzIG5vdCBuZWNlc3NhcnkgdG8gY2hhbmdlIGxlZnQgYW5kIHRvcC5cbiAgcmVmQ0lmRnJhbWUuY2FudmFzLmNhbnZhc0VsZW1lbnQuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gIHJlZkNJZkZyYW1lLmNhbnZhcy5jYW52YXNFbGVtZW50LnN0eWxlLmhlaWdodCA9IChoZWlnaHQgLSByZWZDSWZGcmFtZS50aXRsZUJhci5zdHlsZS5oZWlnaHQpICsgJ3B4JztcblxuICAvL0NoYW5nZSB0aGUgc2l6ZSBvZiB0aGUgdGl0bGUgYmFyLiBUaXRsZUFkanVzdFdpZHRoIGV0Yy5cbiAgLy8gVGhlIHJlYXNvbiB3aHkgeW91IGRvIG5vdCBoYXZlIHRvIHVzZSB0aXRsZUFkanVzdFdpZHRoIGlzXG4gIC8vIGJlY2F1c2UgdGhlc2Ugc2NhbGluZyBhcmUgZG9uZSB3aXRoIGRpZmZlcmVuY2VzIChkZWx0YVgsIGRlbHRhWSkuXG4gIC8vVGhlcmVmb3JlLCBpZiB5b3UgYWRqdXN0IHdpdGggdGhlIHRpdGxlQWRqdXN0V2lkdGhcbiAgLy8gYXMgdGhlIGluaXRpYWwgdmFsdWUsIHRoZSBvdGhlciB3aWxsIHN0cmV0Y2ggcmVsYXRpdmUuXG4gIHJlZkNJZkZyYW1lLnRpdGxlQmFyLnN0eWxlLndpZHRoID0gKHdpZHRoIC0gcmVmQ0lmRnJhbWUuaWZEZWx0YSkgKyAncHgnO1xuXG4gIC8vSW1hZ2UgcmVzaXppbmcgZm9yIGlmcmFtZSB0aGF0IGlzIHRoZSBjaGlsZCBlbGVtZW50IG9mIGNhbnZhc1xuICByZWZDSWZGcmFtZS5pZnJhbWUud2lkdGggPSB3aWR0aCAtIHJlZkNJZkZyYW1lLmlmRGVsdGEgKyAncHgnO1xuICByZWZDSWZGcmFtZS5pZnJhbWUuaGVpZ2h0ID0gaGVpZ2h0IC0gcmVmQ0lmRnJhbWUuaWZEZWx0YSArIHJlZkNJZkZyYW1lLmZyYW1lSGVpZ2h0QWRqdXN0ICsgJ3B4JztcblxuXG4gIGlmIChyZWZDSWZGcmFtZS5vdmVycmF5VHJhbnNwYXJlbnRTY3JlZW5FbmFibGVkIHx8IHJlZkNJZkZyYW1lLm92ZXJyYXlUcmFuc3BhcmVudFNjcmVlbk9uUmVzaXplKSB7XG4gICAgLy9EZXBsb3kgYSB0cmFuc3BhcmVudCBzY3JlZW4uXG4gICAgcmVmQ0lmRnJhbWUudHJhbnNwYXJlbmNlLnN0eWxlLndpZHRoID0gcGFyc2VJbnQocmVmQ0lmRnJhbWUuaWZyYW1lLndpZHRoKSArICdweCc7XG4gICAgcmVmQ0lmRnJhbWUudHJhbnNwYXJlbmNlLnN0eWxlLmhlaWdodCA9IHBhcnNlSW50KHJlZkNJZkZyYW1lLmlmcmFtZS5oZWlnaHQpICsgJ3B4JztcbiAgfVxuXG4gIC8vbW92ZSBmcmFtZUNvbXBvbmVudChsaWtlIGNsb3NlQnV0dG9uKSBjb3JyZXNwb25kaW5nIHRvIG1vdmluZyB3aW5kb3cgZWRnZSBmb3IgcmVzaXplXG4gIGZvciAodmFyIGZyYW1lQ29tcG9uZW50SWQgaW4gcmVmQ0lmRnJhbWUuZnJhbWVDb21wb25lbnRNYXApIHtcbiAgICB2YXIgZnJhbWVDb21wb25lbnQgPSByZWZDSWZGcmFtZS5mcmFtZUNvbXBvbmVudE1hcFtmcmFtZUNvbXBvbmVudElkXTtcbiAgICAvL3VwZGF0ZSBhbGlnbm1lbnQgb2YgZnJhbWVDb21wb25lbnQgY29ycmVzcG9uZGluZyB0byBtb3Zpbmcgd2luZG93IGVkZ2UgZm9yIHJlc2l6ZVxuICAgIGZyYW1lQ29tcG9uZW50LnVwZGF0ZUFsaWduKCk7XG4gIH1cblxuXG4gIGZvciAodmFyIGJlYW5OYW1lIGluIHJlZkNJZkZyYW1lLmNhbnZhcy5iZWFuTGlzdCkge1xuICAgIHZhciB0bXBCZWFuID0gcmVmQ0lmRnJhbWUuY2FudmFzLmJlYW5MaXN0W2JlYW5OYW1lXTtcblxuICAgIGlmICh0bXBCZWFuLmh0bWxFbGVtZW50LnR5cGVOYW1lID09ICdjbWFya2Vyd2luZG93Jykge1xuXG4gICAgICBpZiAodG1wQmVhbi5odG1sRWxlbWVudC51c2FnZSA9PSAnUkQnKSB7XG4gICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9IHdpZHRoICsgJ3B4JzsvLyBwYXJzZUludCh0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQpICsgZGVsdGFXaWR0aCArICdweCc7XG4gICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUudG9wID0gaGVpZ2h0ICsgJ3B4JzsvL3BhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUudG9wKSArIGRlbHRhSGVpZ2h0ICsgJ3B4JztcbiAgICAgIH0gZWxzZSBpZiAodG1wQmVhbi5odG1sRWxlbWVudC51c2FnZSA9PSAnREQnKSB7XG4gICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUudG9wID0gaGVpZ2h0ICsgJ3B4JzsvL2hlaWdodHBhcnNlSW50KHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUudG9wKSArIGRlbHRhSGVpZ2h0ICsgJ3B4JztcbiAgICAgIH0gZWxzZSBpZiAodG1wQmVhbi5odG1sRWxlbWVudC51c2FnZSA9PSAnUlInKSB7XG4gICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUubGVmdCA9IHdpZHRoICsgJ3B4JzsvLytwYXJzZUludCh0bXBCZWFuLmh0bWxFbGVtZW50LnN0eWxlLmxlZnQpICsgZGVsdGFXaWR0aCArICdweCc7XG4gICAgICAgIHRtcEJlYW4uaHRtbEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07Ly9yZXNpemVcblxuLyoqXG4gKiBGb2N1cyBvbiB0aGlzIGZyYW1lXG4gKi9cbkNJZkZyYW1lLnByb3RvdHlwZS5yZXF1ZXN0Rm9jdXMgPSBmdW5jdGlvbigpIHtcblxuXG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgdmFyIGJlYW5MaXN0ID0gbWUucGFyZW50Q2FudmFzLmJlYW5MaXN0O1xuXG4gIGZvciAodmFyIHdpbmRvd0lkIGluIGJlYW5MaXN0KSB7XG5cbiAgICB2YXIgdG1wSWZXaW5kb3cgPSBiZWFuTGlzdFt3aW5kb3dJZF07XG5cbiAgICAvL0lmIGl0J3MgbXkgb3duIHdpbmRvdywgbWluaW1pemUgdGhlIHRyYW5zcGFyZW50IHNjcmVlbiBhbmQgY2hhbmdlIHRoZSBjb2xvciBvZiB0aGUgdGl0bGUgYmFyLlxuICAgIGlmICh3aW5kb3dJZCA9PSBtZS5nZXRXaW5kb3dJZCgpKSB7XG5cbiAgICAgIC8vaWYgdGhpcyBmcmFtZSBpcyBhIHRhcmdldCBmcmFtZVxuICAgICAgdG1wSWZXaW5kb3cuaGFuZGxlVGFraW5nRm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICAvL2lmIHRoaXMgZnJhbWUgaXMgTk9UIGEgdGFyZ2V0IGZyYW1lXG4gICAgICB0bXBJZldpbmRvdy5oYW5kbGVSZWxlYXNpbmdGb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIG1lLnBhcmVudENhbnZhcy5wdWxsVXAobWUuaWQpO1xuXG59O1xuXG4vKipcbiAqIFVSTCBmb3IgaWZyYW1lXG4gKiBAcGFyYW0gdXJsXG4gKi9cbkNJZkZyYW1lLnByb3RvdHlwZS5zZXRVcmwgPSBmdW5jdGlvbih1cmwpIHtcblxuICB2YXIgbWUgPSB0aGlzO1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblxuXG4gICAgaWYgKHVybCkge1xuICAgICAgbWUuc2V0VXNlSWZyYW1lKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtZS5zZXRVc2VJZnJhbWUoZmFsc2UpO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH1cblxuXG4gICAgbWUuaWZyYW1lLnNyYyA9IHVybDtcblxuICAgIG1lLmlmcmFtZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBmdW5jT25Nb3VzZU1vdmUgPSBmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgdmFyIGNsaWVudFggPSBlLnBhZ2VYO1xuICAgICAgICB2YXIgY2xpZW50WSA9IGUucGFnZVk7XG5cbiAgICAgICAgaWYgKFRPVUNIX0VOQUJMRUQpIHtcbiAgICAgICAgICBpZiAoZS50eXBlID09PSAndG91Y2htb3ZlJykge1xuICAgICAgICAgICAgdmFyIGNoYW5nZWRUb3VjaGVzID0gZS5jaGFuZ2VkVG91Y2hlcztcbiAgICAgICAgICAgIGlmIChUT1VDSF9NT1ZFX09OTFlfV0lUSF9PTkVfRklOR0VSKSB7XG4gICAgICAgICAgICAgIHZhciB0b3VjaGVzID0gZS50b3VjaGVzO1xuICAgICAgICAgICAgICBpZiAodG91Y2hlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBjbGllbnRYID0gY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgICAgY2xpZW50WSA9IGNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjbGllbnRYID0gY2hhbmdlZFRvdWNoZXNbMF0ucGFnZVg7XG4gICAgICAgICAgICAgIGNsaWVudFkgPSBjaGFuZ2VkVG91Y2hlc1swXS5wYWdlWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZyYW1lTGVmdCA9IG1lLmdldExlZnQoKTtcbiAgICAgICAgdmFyIGZyYW1lVG9wID0gbWUuZ2V0VG9wKCk7XG4gICAgICAgIHZhciBldmVudEZyb21JZnJhbWUgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnTW91c2VFdmVudHMnKTtcbiAgICAgICAgLy8gUHJvY2Vzc2luZyB0byBtYWtlIGl0IGxvb2sgbGlrZSBtb3VzZSBtb3ZlIGV2ZW4gaWYgeW91IGFyZSBtb3ZpbmcgYnkgdG91Y2hcbiAgICAgICAgZXZlbnRGcm9tSWZyYW1lLmluaXRNb3VzZUV2ZW50KCdtb3VzZW1vdmUnLCB0cnVlLCBmYWxzZSwgd2luZG93LCBlLmRldGFpbCwgZS5zY3JlZW5YLCBlLnNjcmVlblksIChjbGllbnRYICsgZnJhbWVMZWZ0KSwgKGNsaWVudFkgKyBmcmFtZVRvcCksXG4gICAgICAgICAgZS5jdHJsS2V5LCBlLmFsdEtleSwgZS5zaGlmdEtleSwgZS5tZXRhS2V5LCBlLmJ1dHRvbiwgbnVsbCk7XG5cbiAgICAgICAgLy9zbW9vdGggZHJhZ2dpbmcgZHVyaW5nIGlmcmFtZSBtb2RlXG4gICAgICAgIG1lLnBhcmVudENhbnZhcy53aW5kb3dNb3VzZU1vdmUoZXZlbnRGcm9tSWZyYW1lKTtcblxuICAgICAgICBpZiAobWUub25Nb3VzZU1vdmVPbklmcmFtZSkge1xuICAgICAgICAgIG1lLm9uTW91c2VNb3ZlT25JZnJhbWUoZXZlbnRGcm9tSWZyYW1lKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIG1lLmlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gZnVuY09uTW91c2VNb3ZlO1xuICAgICAgbWUuaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQub250b3VjaG1vdmUgPSBmdW5jT25Nb3VzZU1vdmU7XG5cblxuICAgICAgLy9tb3VzZSB1cFxuICAgICAgdmFyIGZ1bmNPbk1vdXNlVXAgPSBmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgdmFyIGNsaWVudFggPSBlLnBhZ2VYO1xuICAgICAgICB2YXIgY2xpZW50WSA9IGUucGFnZVk7XG5cbiAgICAgICAgaWYgKFRPVUNIX0VOQUJMRUQpIHtcbiAgICAgICAgICBpZiAoZS50eXBlID09PSAndG91Y2hlbmQnKSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlZFRvdWNoZXMgPSBlLmNoYW5nZWRUb3VjaGVzO1xuICAgICAgICAgICAgY2xpZW50WCA9IGNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VYO1xuICAgICAgICAgICAgY2xpZW50WSA9IGNoYW5nZWRUb3VjaGVzWzBdLnBhZ2VZO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgZnJhbWVMZWZ0ID0gbWUuZ2V0TGVmdCgpO1xuICAgICAgICB2YXIgZnJhbWVUb3AgPSBtZS5nZXRUb3AoKTtcbiAgICAgICAgdmFyIGV2ZW50RnJvbUlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdNb3VzZUV2ZW50cycpO1xuICAgICAgICAvLyBQcm9jZXNzaW5nIHRvIG1ha2UgaXQgbG9vayBsaWtlIG1vdXNlIHVwIGV2ZW4gaWYgeW91IG1vdXNldXAgYnkgdG91Y2hcbiAgICAgICAgZXZlbnRGcm9tSWZyYW1lLmluaXRNb3VzZUV2ZW50KCdtb3VzZXVwJywgdHJ1ZSwgZmFsc2UsIHdpbmRvdywgZS5kZXRhaWwsIGUuc2NyZWVuWCwgZS5zY3JlZW5ZLCAoY2xpZW50WCArIGZyYW1lTGVmdCksIChjbGllbnRZICsgZnJhbWVUb3ApLFxuICAgICAgICAgIGUuY3RybEtleSwgZS5hbHRLZXksIGUuc2hpZnRLZXksIGUubWV0YUtleSwgZS5idXR0b24sIG51bGwpO1xuXG4gICAgICAgIC8vc21vb3RoIGRyYWdnaW5nIGR1cmluZyBpZnJhbWUgbW9kZVxuICAgICAgICBtZS5wYXJlbnRDYW52YXMud2luZG93TW91c2VVcChldmVudEZyb21JZnJhbWUpO1xuXG4gICAgICAgIGlmIChtZS5vbk1vdXNlVXBPbklmcmFtZSkge1xuICAgICAgICAgIG1lLm9uTW91c2VVcE9uSWZyYW1lKGV2ZW50RnJvbUlmcmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBtZS5pZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudC5vbm1vdXNldXAgPSBmdW5jT25Nb3VzZVVwO1xuICAgICAgbWUuaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQub250b3VjaGVuZCA9IGZ1bmNPbk1vdXNlVXA7XG5cbiAgICAgIHJlc29sdmUobWUsIG1lLmlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50KTtcbiAgICB9O1xuICB9KTtcbn07XG5cblxuLyoqXG4gKiBSZXR1cm5zIERPTS1kb2N1bWVudCBvZiBpZnJhbWVcbiAqIEByZXR1cm5zIHsqfEhUTUxEb2N1bWVudH1cbiAqL1xuQ0lmRnJhbWUucHJvdG90eXBlLmdldElmRG9jdW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgcmV0dXJuIG1lLmlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xufTtcblxuXG5DSWZGcmFtZS5wcm90b3R5cGUuc2V0U2Nyb2xsaW5nID0gZnVuY3Rpb24oc3RyKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIG1lLmlmcmFtZS5zY3JvbGxpbmcgPSBzdHI7XG59O1xuXG5DSWZGcmFtZS5wcm90b3R5cGUuZ2V0U2Nyb2xsaW5nID0gZnVuY3Rpb24oc3RyKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIHJldHVybiBtZS5pZnJhbWUuc2Nyb2xsaW5nO1xufTtcblxuXG5DSWZGcmFtZS5wcm90b3R5cGUuc2V0UmVzaXphYmxlID0gZnVuY3Rpb24oZW5hYmxlZCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS5yZXNpemFibGUgPSBlbmFibGVkO1xuICBtZS5lbmFibGVNYXJrZXJzKGVuYWJsZWQpO1xuICByZXR1cm4gbWU7XG59O1xuXG5cbkNJZkZyYW1lLnByb3RvdHlwZS5zZXRDb250cm9sID0gZnVuY3Rpb24obW9kZWwpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICBpZiAobW9kZWwpIHtcbiAgICBtb2RlbC5mcmFtZSA9IG1lO1xuICAgIG1lLmNvbnRyb2wgPSBtZS5qc0ZyYW1lLmNyZWF0ZVdpbmRvd0V2ZW50SGVscGVyKG1vZGVsKTtcbiAgICBtZS5jb250cm9sLnNldHVwRGVmYXVsdEV2ZW50cygpO1xuICB9XG5cbn07XG5cbi8qKlxuICogZW5kIG9mIENJRnJhbWUgY2xhc3NcbiAqL1xuXG4vLystKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy1cblxuXG5pbmhlcml0KENXaW5kb3dNYW5hZ2VyLCBDQ2FudmFzKTtcblxuLyoqXG4gKiBDV2luZG93TWFuYWdlciBjbGFzc1xuICogPHA+XG4gKiBBIGNhbnZhcyBjbGFzcyB0aGF0IGRpc3BsYXlzIG11bHRpcGxlIGZyYW1lcy4gSGFuZGxlIGV2ZW50cyBvbiB0aGUgd2luZG93IHRvIGNvb3JkaW5hdGUgbXVsdGlwbGUgd2luZG93czxicj5cbiAqXG4gKiBAcGFyYW0gcGFyZW50RWxlbWVudFxuICogQHBhcmFtIGNhbnZhc0lkXG4gKiBAcGFyYW0gbGVmdFxuICogQHBhcmFtIHRvcFxuICogQHBhcmFtIHdpZHRoXG4gKiBAcGFyYW0gaGVpZ2h0XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQ1dpbmRvd01hbmFnZXIocGFyZW50RWxlbWVudCwgY2FudmFzSWQsIGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCkge1xuICBDV2luZG93TWFuYWdlci5zdXBlckNvbnN0cnVjdG9yLmNhbGwodGhpcywgcGFyZW50RWxlbWVudCwgY2FudmFzSWQsIGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCk7XG4gIHZhciBtZSA9IHRoaXM7XG4gIC8vIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldnQpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldnQpIHtcbiAgICBmb3IgKHZhciB3aW5kb3dJZCBpbiBtZS5iZWFuTGlzdCkge1xuICAgICAgdmFyIGJlYW5GcmFtZSA9IG1lLmJlYW5MaXN0W3dpbmRvd0lkXTtcbiAgICAgIGJlYW5GcmFtZS5vbkJvZHlDbGlja2VkKGV2dCk7XG4gICAgfVxuICB9KTtcblxufVxuXG5DV2luZG93TWFuYWdlci5wcm90b3R5cGUuZ2V0V2luZG93ID0gZnVuY3Rpb24od2luZG93SWQpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgcmV0dXJuIG1lLmJlYW5MaXN0W3dpbmRvd0lkXTtcbn07XG5cbi8vV3JhcHBpbmcgdGhlICdhZGRCZWFuJyBvZiB0aGUgcGFyZW50IGNsYXNzXG5DV2luZG93TWFuYWdlci5wcm90b3R5cGUuYWRkV2luZG93ID0gZnVuY3Rpb24od2luZG93KSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgdmFyIHdpbmRvd0lkID0gd2luZG93LmdldFdpbmRvd0lkKCk7XG4gIHZhciBuYW1lID0gd2luZG93LmdldE5hbWUoKTtcbiAgbWUuYmVhbklkTmFtZVt3aW5kb3dJZF0gPSBuYW1lO1xuICBtZS5iZWFuTmFtZUlkW25hbWVdID0gd2luZG93SWQ7XG5cbiAgbWUuYWRkQmVhbih3aW5kb3cpO1xufTtcblxuLy9pZiBjb250YWlucyB3aW5kb3cgbmFtZWQgc3BlY2lmaWVkIG5hbWVcbkNXaW5kb3dNYW5hZ2VyLnByb3RvdHlwZS5jb250YWluc1dpbmRvd05hbWUgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cblxuICB2YXIgd2luZG93SWQgPSBtZS5iZWFuTmFtZUlkW25hbWVdO1xuXG4gIGlmICh3aW5kb3dJZCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbkNXaW5kb3dNYW5hZ2VyLnByb3RvdHlwZS5nZXRXaW5kb3dCeU5hbWUgPSBmdW5jdGlvbihuYW1lKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIHZhciB3aW5kb3dJZCA9IG1lLmJlYW5OYW1lSWRbbmFtZV07XG5cbiAgaWYgKHdpbmRvd0lkKSB7XG4gICAgcmV0dXJuIG1lLmdldFdpbmRvdyh3aW5kb3dJZCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn07XG5cbi8vV3JhcHBpbmcgdGhlICdtb3VzZU1vdmUnIG1ldGhvZCBvZiB0aGUgcGFyZW50IGNsYXNzXG5DV2luZG93TWFuYWdlci5wcm90b3R5cGUud2luZG93TW91c2VNb3ZlID0gZnVuY3Rpb24oZSkge1xuXG4gIHZhciBtZSA9IHRoaXM7XG4gIGlmIChtZS5jdXJyZW50T2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBjaGlsZFdpbmRvd01vdmVkID0gZmFsc2U7XG5cbiAgLy9Mb29wIHByb2Nlc3Npbmcgb2YgZWFjaCBDV2luZG93IGhlbGQgYnkgQ1dpbmRvd01hbmFnZXJcbiAgdmFyIGJlYW5MaXN0ID0gbWUuYmVhbkxpc3Q7XG5cbiAgZm9yICh2YXIgd2luZG93SWQgaW4gYmVhbkxpc3QpIHtcblxuICAgIHZhciB0YXJnZXRXaW5kb3cgPSBiZWFuTGlzdFt3aW5kb3dJZF07XG5cblxuICAgIC8vU2luY2UgdGhpcyAnbW91c2VNb3ZlJyBpcyBjYW52YXMgb2YgQ1dpbmRvdydzICdtb3VzZU1vdmUnLHNvIGRvIG1vdmUgQ0JlYW5GcmFtZXMgaW4gdGhlIGNhbnZhcy5cbiAgICB2YXIgZXZlbnREYXRhID0gdGFyZ2V0V2luZG93LmNhbnZhcy5tb3VzZU1vdmUoZSk7XG5cbiAgICAvL1doZXRoZXIgYW55IG9uZSBvZiB0aGUgYmVhbnMgaW4gdGhlIENhbnZhcyBoYXMgbW92ZWQgb3Igbm90LlxuICAgIC8vWWVzLihXaGVuIGl0IG1vdmVzKSwgZXZlbnREYXRhIGlzIHNldC5cbiAgICAvL05PLiBJZiBpdCBkb2VzIG5vdCBtb3ZlIGl0IGlzIHNldCB0byBudWxsLlxuICAgIGNoaWxkV2luZG93TW92ZWQgPSBjaGlsZFdpbmRvd01vdmVkIHwgKGV2ZW50RGF0YSAhPSBudWxsKTtcbiAgICBpZiAoZXZlbnREYXRhICE9IG51bGwpIHtcblxuICAgICAgLy9JZiBpdCBpcyB0aGUgbWFya2VyIGZvciByZXNpemluZ1xuICAgICAgaWYgKGV2ZW50RGF0YS50YXJnZXRUeXBlTmFtZSA9PSAnY21hcmtlcndpbmRvdycpIHtcblxuICAgICAgICB2YXIgdGFyZ2V0T2JqZWN0ID0gZXZlbnREYXRhLnRhcmdldE9iamVjdDtcblxuICAgICAgICAvL0VuYWJsZSB0cmFuc3BhcmVudCB3aW5kb3cgb25seSB3aGVuIG1vdmluZy5cbiAgICAgICAgLy9UaGlzIHdpbGwgd29yayBzbW9vdGhseSBldmVuIHdpdGggaWZyYW1lIGNvbnRlbnRcbiAgICAgICAgdGFyZ2V0V2luZG93LnRyYW5zcGFyZW5jZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xuXG4gICAgICAgIGlmICh0YXJnZXRPYmplY3QudXNhZ2UgPT0gJ1JEJykge1xuICAgICAgICAgIHRhcmdldFdpbmRvdy5yZXNpemUoMCwgMCwgZXZlbnREYXRhLmRlbHRhWCwgZXZlbnREYXRhLmRlbHRhWSwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0T2JqZWN0LnVzYWdlID09ICdERCcpIHtcbiAgICAgICAgICB0YXJnZXRXaW5kb3cucmVzaXplKDAsIDAsIDAsIGV2ZW50RGF0YS5kZWx0YVksIHRydWUpO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldE9iamVjdC51c2FnZSA9PSAnUlInKSB7XG4gICAgICAgICAgdGFyZ2V0V2luZG93LnJlc2l6ZSgwLCAwLCBldmVudERhdGEuZGVsdGFYLCAwLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy9JZiBhbnkgb25lIG9mIHRoZSBiZWFucyBpbiB0aGUgQ2FudmFzIGhhcyBtb3ZlZC5EbyBub3QgZG8gJ0N3aW5kb3cncyBtb3VzZU1vdmUnXG4gIGlmICghY2hpbGRXaW5kb3dNb3ZlZCAmJiB0aGlzLm1vdXNlRG93blNvdXJjZSAhPSAnY2hpbGRjYW52YXMnKSB7XG5cbiAgICAvL01vdmluZyBsb2dpYyBmb3IgQ1dpbmRvdyB3aGljaCBpcyBob2xkZWQgYnkgQ1dpbmRvd01hbmFnZXIgYXMgYSBjaGlsZCB3aW5kb3cuXG4gICAgbWUubW91c2VNb3ZlKGUpO1xuICB9XG5cbn07XG5cbi8vV3JhcHBpbmcgdGhlIG1ldGhvZCAnbW91c2VVcCcgb2YgdGhlIHBhcmVudCBjbGFzc1xuQ1dpbmRvd01hbmFnZXIucHJvdG90eXBlLndpbmRvd01vdXNlVXAgPSBmdW5jdGlvbihlKSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgLy9ydW4gJ21vdXNlVXAnIG9mIHBhcmVudCBjbGFzc1xuICBtZS5tb3VzZVVwKGUpO1xuXG4gIHZhciBiZWFuTGlzdCA9IG1lLmJlYW5MaXN0O1xuXG4gIGZvciAodmFyIHdpbmRvd0lkIGluIGJlYW5MaXN0KSB7XG5cbiAgICB2YXIgb2JqV2luZG93ID0gYmVhbkxpc3Rbd2luZG93SWRdO1xuXG4gICAgLy9ydW4gQ1dpbmRvdydzICdtb3VzZVVwJyhpdCdzIGNoaWxkIHdpbmRvdykuXG4gICAgb2JqV2luZG93Lm1vdXNlVXAoZSk7XG4gIH1cblxufTtcblxuLyoqXG4gKiAob3ZlcnJpZGUgQ0NhbnZhcy5yZW1vdmVCZWFuKVxuICogQHBhcmFtIHdpbmRvd0lkXG4gKi9cbkNXaW5kb3dNYW5hZ2VyLnByb3RvdHlwZS5yZW1vdmVCZWFuID0gZnVuY3Rpb24od2luZG93SWQpIHtcblxuXG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgLy9SZXRyaWV2ZSB0aGUgdGFyZ2V0IGJlYW5GcmFtZVxuICB2YXIgYmVhbkxpc3QgPSBtZS5iZWFuTGlzdDtcbiAgdmFyIHRhcmdldEJlYW4gPSBiZWFuTGlzdFt3aW5kb3dJZF07XG5cbiAgaWYgKHRhcmdldEJlYW4gPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciByZW1vdmVUYXJnZXRCZWFuSGFzRm9jdXMgPSB0YXJnZXRCZWFuLl9oYXNGb2N1cztcblxuXG4gIC8vUmVtb3ZlIGJlYW4ncyBodG1sRWxlbWVudCBmcm9tIGNhbnZhc0VsZW1lbnRcbiAgbWUuY2FudmFzRWxlbWVudC5yZW1vdmVDaGlsZCh0YXJnZXRCZWFuLmh0bWxFbGVtZW50KTtcblxuICAvL0RlbGV0ZSB0aGUgYmVhbiBvYmplY3QgaW4gdGhlIGFzc29jaWF0aXZlIGFycmF5LlxuICBkZWxldGUgYmVhbkxpc3Rbd2luZG93SWRdO1xuXG5cbiAgdmFyIGJlYW5OYW1lID0gbWUuYmVhbklkTmFtZVt3aW5kb3dJZF07XG4gIGlmIChiZWFuTmFtZSkge1xuICAgIC8vLWlmIGJlYW4gbmFtZSBleGlzdFxuICAgIGRlbGV0ZSBtZS5iZWFuSWROYW1lW3dpbmRvd0lkXTtcbiAgICBkZWxldGUgbWUuYmVhbk5hbWVJZFtiZWFuTmFtZV07XG4gIH1cblxuXG4gIC8vZm9jdXMgb24gbGFzdCBmb2N1c2VkIHdpbmRvdyBhZnRlciByZW1vdmluZ1xuICB2YXIgbWF4Rm9jdXNUaW1lID0gMDtcbiAgdmFyIGxhc3RGb2N1c2VkRnJhbWUgPSBudWxsO1xuXG4gIGlmIChyZW1vdmVUYXJnZXRCZWFuSGFzRm9jdXMpIHtcbiAgICBmb3IgKHZhciB3aW5kb3dJZCBpbiBiZWFuTGlzdCkge1xuICAgICAgdmFyIGZyYW1lID0gYmVhbkxpc3Rbd2luZG93SWRdO1xuXG4gICAgICAvL3B1bGxVcERpc2FibGVkPXRydWUgbWVhbnMgdGhhdCB0aGUgZnJhbWUgaXMgbW9kYWwgYmFja2dyb3VuZCB3aW5kb3dcbiAgICAgIGlmIChtYXhGb2N1c1RpbWUgPD0gZnJhbWUuX2hhc0ZvY3VzVGltZSAmJiAhZnJhbWUucHVsbFVwRGlzYWJsZWQpIHtcblxuICAgICAgICBtYXhGb2N1c1RpbWUgPSBmcmFtZS5faGFzRm9jdXNUaW1lO1xuXG4gICAgICAgIGxhc3RGb2N1c2VkRnJhbWUgPSBmcmFtZTtcblxuICAgICAgfVxuICAgIH1cbiAgICBpZiAobGFzdEZvY3VzZWRGcmFtZSkge1xuICAgICAgbGFzdEZvY3VzZWRGcmFtZS5yZXF1ZXN0Rm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICB0YXJnZXRCZWFuLnBhcmVudENhbnZhcyA9IG51bGw7XG5cbn07XG4vKipcbiAqIGVuZCBvZiBDV2luZG93TWFuYWdlciBjbGFzc1xuICovXG5cbi8vKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLVxuXG5pbmhlcml0KENNYXJrZXJXaW5kb3csIENCZWFuRnJhbWUpO1xuXG4vKipcbiAqIENNYXJrZXJXaW5kb3cgY2xhc3NcbiAqIEBwYXJhbSB3aW5kb3dJZFxuICogQHBhcmFtIGxlZnRcbiAqIEBwYXJhbSB0b3BcbiAqIEBwYXJhbSB3aWR0aFxuICogQHBhcmFtIGhlaWdodFxuICogQHBhcmFtIHppbmRleFxuICogQHBhcmFtIHVzYWdlXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQ01hcmtlcldpbmRvdyh3aW5kb3dJZCwgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0LCB6aW5kZXgsIHVzYWdlLCBjb2xvcikge1xuXG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgQ01hcmtlcldpbmRvdy5zdXBlckNvbnN0cnVjdG9yLmNhbGwodGhpcywgd2luZG93SWQsIGxlZnQsIHRvcCwgd2lkdGgsIGhlaWdodCwgemluZGV4LCB1c2FnZSk7XG5cbiAgbWUuaHRtbEVsZW1lbnQudHlwZU5hbWUgPSAnY21hcmtlcndpbmRvdyc7XG4gIG1lLmh0bWxFbGVtZW50LnVzYWdlID0gdXNhZ2U7XG4gIG1lLmh0bWxFbGVtZW50LmlzUmFuZ2VMaW1pdGVkID0gZmFsc2U7XG4gIG1lLmh0bWxFbGVtZW50LnN0eWxlLmJvcmRlclN0eWxlID0gJ25vbmUnO1xuICBtZS5odG1sRWxlbWVudC5zdHlsZS56SW5kZXggPSAxO1xuICBpZiAoY29sb3IpIHtcbiAgICBtZS5odG1sRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gY29sb3I7XG4gIH1cbiAgLy9tZS5wdWxsVXBEaXNhYmxlZCA9IHRydWU7XG5cbiAgbWUuZ2V0V2luZG93VHlwZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAnQ01hcmtlcldpbmRvdyc7XG4gIH07XG59XG5cbi8qKlxuICogRW5kIG9mIENNYXJrZXJXaW5kb3cgY2xhc3NcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5cbi8vKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLVxuXG4vKipcbiAqIEZyYW1lTWFuYWdlciBjbGFzc1xuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEpTRnJhbWUobW9kZWwpIHtcblxuICB2YXIgbWUgPSB0aGlzO1xuXG4gIHZhciBwYXJlbnRFbGVtZW50ID0gbnVsbDtcblxuICAvLyBGcmFtZXMgd2lsbCBiZSBmaXhlZChGcmFtZXMga2VlcCBzdGF5aW5nIGluIHRoZSBzYW1lIHBsYWNlKSBldmVuIGlmIHRoZSB1c2VyIHNjcm9sbHMgdGhlIGJyb3dzZXIuXG4gIG1lLmlzV2luZG93TWFuYWdlckZpeGVkID0gdHJ1ZTsvL2RlZmF1bHQgaXMgdHJ1ZS5cblxuICAvL0luaXRpYWxpemF0aW9uIHBhcmFtZXRlciBjaGVja1xuXG4gIGlmIChtb2RlbCAmJiBtb2RlbC5maXhlZCA9PSBmYWxzZSkge1xuICAgIG1lLmlzV2luZG93TWFuYWdlckZpeGVkID0gZmFsc2U7XG4gIH1cblxuICBpZiAobW9kZWwgJiYgbW9kZWwucGFyZW50RWxlbWVudCkge1xuICAgIHBhcmVudEVsZW1lbnQgPSBtb2RlbC5wYXJlbnRFbGVtZW50O1xuICB9XG5cbiAgbWUuaEFsaWduID0gJ2xlZnQnO1xuICBtZS52QWxpZ24gPSAndG9wJztcblxuICBpZiAobW9kZWwgJiYgbW9kZWwuaG9yaXpvbnRhbEFsaWduKSB7XG4gICAgbWUuaEFsaWduID0gbW9kZWwuaG9yaXpvbnRhbEFsaWduO1xuICB9XG5cbiAgaWYgKG1vZGVsICYmIG1vZGVsLnZlcnRpY2FsQWxpZ24pIHtcbiAgICBtZS52QWxpZ24gPSBtb2RlbC52ZXJ0aWNhbEFsaWduO1xuICB9XG5cbiAgbWUucHVsbFRvUmVmcmVzaCA9IGZhbHNlO1xuICBpZiAobW9kZWwgJiYgdHlwZW9mIG1vZGVsLnB1bGxUb1JlZnJlc2ggPT09ICdib29sZWFuJykge1xuICAgIG1lLnB1bGxUb1JlZnJlc2ggPSBtb2RlbC5wdWxsVG9SZWZyZXNoO1xuICB9XG5cbiAgbWUudG91Y2hBY3Rpb25NYW5pcHVsYXRpb24gPSB0cnVlO1xuICBpZiAobW9kZWwgJiYgdHlwZW9mIG1vZGVsLnRvdWNoQWN0aW9uTWFuaXB1bGF0aW9uID09PSAnYm9vbGVhbicpIHtcbiAgICBtZS50b3VjaEFjdGlvbk1hbmlwdWxhdGlvbiA9IG1vZGVsLnRvdWNoQWN0aW9uTWFuaXB1bGF0aW9uO1xuICB9XG5cbiAgaWYgKCFwYXJlbnRFbGVtZW50KSB7XG4gICAgaWYgKG1lLmlzV2luZG93TWFuYWdlckZpeGVkKSB7XG4gICAgICB2YXIgdG9wUGFyZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0b3BQYXJlbnREaXYuaWQgPSAnanNGcmFtZV9maXhlZF8nICsgbWUuZ2VuZXJhdGVVVUlEKCk7XG4gICAgICB0b3BQYXJlbnREaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsXG4gICAgICAgICdwb3NpdGlvbjpmaXhlZDsnICsgbWUuaEFsaWduICsgJzowcHg7JyArIG1lLnZBbGlnbiArICc6MHB4O21hcmdpbjowcHg7cGFkZGluZzowcHg7J1xuICAgICAgKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9wUGFyZW50RGl2KTtcbiAgICAgIHBhcmVudEVsZW1lbnQgPSB0b3BQYXJlbnREaXY7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB0b3BQYXJlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRvcFBhcmVudERpdi5pZCA9ICdqc0ZyYW1lX2Fic29sdXRlXycgKyBtZS5nZW5lcmF0ZVVVSUQoKTtcbiAgICAgIHRvcFBhcmVudERpdi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJyxcbiAgICAgICAgJ3Bvc2l0aW9uOmFic29sdXRlOycgKyBtZS5oQWxpZ24gKyAnOjBweDsnICsgbWUudkFsaWduICsgJzowcHg7bWFyZ2luOjBweDtwYWRkaW5nOjBweDsnXG4gICAgICApO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0b3BQYXJlbnREaXYpO1xuICAgICAgcGFyZW50RWxlbWVudCA9IHRvcFBhcmVudERpdjtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKG1lLmlzV2luZG93TWFuYWdlckZpeGVkKSB7XG4gICAgICAvL3BhcmVudEVsZW1lbnQgc2V0XG4gICAgICB2YXIgdG9wUGFyZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0b3BQYXJlbnREaXYuaWQgPSAnanNGcmFtZV9maXhlZF8nICsgbWUuZ2VuZXJhdGVVVUlEKCk7XG4gICAgICB0b3BQYXJlbnREaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsXG4gICAgICAgICdwb3NpdGlvbjpmaXhlZDsnICsgbWUuaEFsaWduICsgJzowcHg7JyArIG1lLnZBbGlnbiArICc6MHB4O21hcmdpbjowcHg7cGFkZGluZzowcHg7J1xuICAgICAgKTtcbiAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodG9wUGFyZW50RGl2KTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICB2YXIgdG9wUGFyZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICB0b3BQYXJlbnREaXYuaWQgPSAnanNGcmFtZV9hYnNvbHV0ZV8nICsgbWUuZ2VuZXJhdGVVVUlEKCk7XG4gICAgICB0b3BQYXJlbnREaXYuc2V0QXR0cmlidXRlKCdzdHlsZScsXG4gICAgICAgICdwb3NpdGlvbjphYnNvbHV0ZTsnICsgbWUuaEFsaWduICsgJzowcHg7JyArIG1lLnZBbGlnbiArICc6MHB4O21hcmdpbjowcHg7cGFkZGluZzowcHg7J1xuICAgICAgKTtcbiAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQodG9wUGFyZW50RGl2KTtcblxuICAgIH1cbiAgfVxuXG4gIGlmIChNT1VTRV9FTkFCTEVEKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlVXApO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG1vdXNlTW92ZSk7XG4gIH1cblxuICBpZiAoVE9VQ0hfRU5BQkxFRCkge1xuICAgIGlmICgnb250b3VjaGVuZCcgaW4gd2luZG93KSB7XG4gICAgICB2YXIgZnVuY09uVG91Y2hFbmQgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgLy8gVGhlIFwibW91c2V1cFwiIGV2ZW50IGhhcHBlbnMgcmlnaHQgYWZ0ZXIgXCJ0b3VjaGVuZFwiIGV2ZW50LFxuICAgICAgICAvLyBidXQgSSBkb24ndCBjYWxsICNwcmV2ZW50ZGVmYXVsdCBiZWNhdXNlICNwcmV2ZW50ZGVmYXVsdCBwcmV2ZW50cyBcIm9uY2xpY2tcIi5cbiAgICAgICAgLy8gU28sIHBlcmZvcm0gI3ByZXZlbnRkZWZhdWx0IG9ubHkgZm9yIFwidG91Y2htb3ZlXCJcbiAgICAgICAgLy8gZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG1vdXNlVXAuYmluZCh0aGlzKShldnQpO1xuICAgICAgfTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZnVuY09uVG91Y2hFbmQpO1xuICAgIH1cblxuICAgIGlmICgnb250b3VjaG1vdmUnIGluIHdpbmRvdykge1xuXG4gICAgICAvLyBUbyByZW1vdmUgdGhlIDMwMG1zIHRhcCBkZWxheSBiZXR3ZWVuIHRvdWNoZW5kIGFuZCBjbGljayxcbiAgICAgIC8vIFRvIGRpc2FibGUgZG91YmxlLXRhcCB0byB6b29tXG4gICAgICBpZiAobWUudG91Y2hBY3Rpb25NYW5pcHVsYXRpb24pIHtcbiAgICAgICAgbWUuZG9FbmFibGVUb3VjaEFjdGlvbk1hbmlwdWxhdGlvbigpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW1lLnB1bGxUb1JlZnJlc2gpIHtcbiAgICAgICAgLy8gVGhlIEFuZHJvaWQgdmVyc2lvbiBvZiBDaHJvbWUgaGFzIGEgZmVhdHVyZSB0aGF0IHJlZnJlc2hlcyB0aGUgcGFnZSBieSBzbGlkaW5nIGRvd253YXJkXG4gICAgICAgIC8vIHdoaWxlIHRvdWNoaW5nIG9uIHRoZSBzY3JlZW4sIGJ1dCB3aGVuIHRoaXMgZmVhdHVyZSBpcyBlbmFibGVkLCB0aGUgZG93bndhcmQgbW92ZW1lbnQgb2YgdGhlIHdpbmRvdyBpcyBpbmhpYml0ZWQsXG4gICAgICAgIC8vIHNvIHRoaXMgZmVhdHVyZSBjYW4gYmUgZXhwbGljaXRseSB0dXJuZWQgb2ZmLlxuICAgICAgICBtZS5kb0Rpc2FibGVQdWxsVG9SZWZyZXNoKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBmdW5jT25Ub3VjaE1vdmUgPSBmdW5jdGlvbihldnQpIHtcbiAgICAgICAgLy8gQ2FsbCAjcHJldmVudERlZmF1bHQgdG8gcHJldmVudCBzaW11bHRhbmVvdXMgaWduaXRpb24gb2YgbW91c2Vtb3ZlXG4gICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBtb3VzZU1vdmUuYmluZCh0aGlzKShldnQpO1xuICAgICAgfTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGZ1bmNPblRvdWNoTW92ZSk7XG4gICAgfVxuICB9XG5cblxuICBtZS53aW5kb3dNYW5hZ2VyID0gbmV3IENXaW5kb3dNYW5hZ2VyKHBhcmVudEVsZW1lbnQsICd3aW5kb3dNYW5hZ2VyXycgKyBtZS5nZW5lcmF0ZVVVSUQoKSwgMCwgMCwgMCwgMCk7XG4gIC8vbWUud2luZG93TWFuYWdlciA9IG5ldyBDV2luZG93TWFuYWdlcihkb2N1bWVudC5ib2R5LCAnd2luZG93TWFuYWdlcl8nICsgbWUuZ2VuZXJhdGVVVUlEKCksIDAsIDAsIDAsIDApO1xuICBtZS5kb21QYXJ0c0J1aWxkZXIgPSBudWxsO1xuXG4gIGZ1bmN0aW9uIG1vdXNlVXAoZSkge1xuICAgIG1lLndpbmRvd01hbmFnZXIud2luZG93TW91c2VVcChlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1vdXNlTW92ZShlKSB7XG4gICAgbWUud2luZG93TWFuYWdlci53aW5kb3dNb3VzZU1vdmUoZSk7XG4gIH1cbn1cblxuSlNGcmFtZS5wcm90b3R5cGUuZG9FbmFibGVUb3VjaEFjdGlvbk1hbmlwdWxhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICB2YXIgYm9keVN0eWxlID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgaWYgKCFib2R5U3R5bGUpIHtcbiAgICBib2R5U3R5bGUgPSAnJztcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWJvZHlTdHlsZS5lbmRzV2l0aCgnOycpKSB7XG4gICAgICBib2R5U3R5bGUgKz0gJzsnO1xuICAgIH1cbiAgfVxuICBpZiAoYm9keVN0eWxlLmluZGV4T2YoJ3RvdWNoLWFjdGlvbicpID09PSAtMSkge1xuICAgIGJvZHlTdHlsZSArPSAnLW1zLXRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO3RvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uOyc7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBib2R5U3R5bGUpO1xuICB9XG59O1xuXG5KU0ZyYW1lLnByb3RvdHlwZS5kb0Rpc2FibGVQdWxsVG9SZWZyZXNoID0gZnVuY3Rpb24oKSB7XG4gIHZhciBib2R5U3R5bGUgPSBkb2N1bWVudC5ib2R5LmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgaWYgKCFib2R5U3R5bGUpIHtcbiAgICBib2R5U3R5bGUgPSAnJztcbiAgfSBlbHNlIHtcbiAgICBpZiAoIWJvZHlTdHlsZS5lbmRzV2l0aCgnOycpKSB7XG4gICAgICBib2R5U3R5bGUgKz0gJzsnO1xuICAgIH1cbiAgfVxuICBpZiAoYm9keVN0eWxlLmluZGV4T2YoJ292ZXJzY3JvbGwtYmVoYXZpb3IteScpID09PSAtMSkge1xuICAgIGJvZHlTdHlsZSArPSAnb3ZlcnNjcm9sbC1iZWhhdmlvci15OiBjb250YWluOyc7XG4gICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgYm9keVN0eWxlKTtcbiAgfVxufTtcbkpTRnJhbWUucHJvdG90eXBlLmdldERvbVBhcnRzQnVpbGRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIGlmICghbWUuZG9tUGFydHNCdWlsZGVyKSB7XG4gICAgbWUuZG9tUGFydHNCdWlsZGVyID0gbmV3IENEb21QYXJ0c0J1aWxkZXIoKTtcbiAgfVxuICByZXR1cm4gbWUuZG9tUGFydHNCdWlsZGVyO1xufTtcblxuSlNGcmFtZS5wcm90b3R5cGUuY3JlYXRlID0gZnVuY3Rpb24obW9kZWwpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICB2YXIgcHJvcGVydGllcyA9IHt9O1xuICBwcm9wZXJ0aWVzLm5hbWUgPSBtb2RlbC5uYW1lO1xuICB2YXIgdGl0bGUgPSBtb2RlbC50aXRsZTtcbiAgdmFyIGxlZnQgPSBtb2RlbC5sZWZ0O1xuICB2YXIgdG9wID0gbW9kZWwudG9wO1xuICB2YXIgd2lkdGggPSBtb2RlbC53aWR0aDtcbiAgdmFyIGhlaWdodCA9IG1vZGVsLmhlaWdodDtcbiAgdmFyIGFwcGVhcmFuY2UgPSBtb2RlbC5hcHBlYXJhbmNlO1xuICB2YXIgcHJlc2V0V2luZG93TmFtZSA9IG1vZGVsLnByZXNldDtcbiAgdmFyIHByZXNldFdpbmRvd1BhcmFtID0gbW9kZWwucHJlc2V0UGFyYW07XG4gIHZhciBhcHBlYXJhbmNlTmFtZSA9IG1vZGVsLmFwcGVhcmFuY2VOYW1lO1xuICB2YXIgYXBwZWFyYW5jZVBhcmFtID0gbW9kZWwuYXBwZWFyYW5jZVBhcmFtO1xuICB2YXIgc3R5bGUgPSBtb2RlbC5zdHlsZTtcblxuICB2YXIgbWluV2lkdGggPSBtb2RlbC5taW5XaWR0aDtcbiAgdmFyIG1pbkhlaWdodCA9IG1vZGVsLm1pbkhlaWdodDtcblxuXG4gIHZhciBodG1sID0gbW9kZWwuaHRtbDtcbiAgdmFyIHJlc2l6YWJsZSA9IG1vZGVsLnJlc2l6YWJsZTtcbiAgdmFyIG1vdmFibGUgPSBtb2RlbC5tb3ZhYmxlO1xuICB2YXIgdXJsID0gbW9kZWwudXJsO1xuICB2YXIgdXJsTG9hZGVkID0gbW9kZWwudXJsTG9hZGVkO1xuXG4gIHZhciBwcmVzZXRQYXJhbSA9IG1vZGVsLnByZXNldFBhcmFtO1xuICB2YXIgcHJlc2V0V2luZG93O1xuXG4gIGlmIChwcmVzZXRXaW5kb3dOYW1lKSB7XG5cbiAgICB2YXIgcHJlc2V0V2luZG93T2JqID0gdGhpcy5nZXRQcmVzZXRXaW5kb3cocHJlc2V0V2luZG93TmFtZSk7XG4gICAgcHJlc2V0V2luZG93ID0gcHJlc2V0V2luZG93T2JqLmdldFByZXNldFdpbmRvdyhwcmVzZXRQYXJhbSk7XG4gICAgYXBwZWFyYW5jZSA9IHRoaXMuY3JlYXRlUHJlc2V0U3R5bGUocHJlc2V0V2luZG93LmFwcGVhcmFuY2VOYW1lLFxuICAgICAgeyBhcHBlYXJhbmNlUGFyYW06IHByZXNldFdpbmRvdy5hcHBlYXJhbmNlUGFyYW0gfSk7XG5cbiAgfSBlbHNlIGlmIChhcHBlYXJhbmNlTmFtZSkge1xuICAgIGFwcGVhcmFuY2UgPSB0aGlzLmNyZWF0ZVByZXNldFN0eWxlKGFwcGVhcmFuY2VOYW1lLFxuICAgICAgeyBhcHBlYXJhbmNlUGFyYW06IGFwcGVhcmFuY2VQYXJhbSB9KTtcbiAgfVxuXG4gIGlmIChtb2RlbC5jbGllbnRIZWlnaHQpIHtcbiAgICB2YXIgd2luZG93VGl0bGVCYXJIZWlnaHQgPSBwYXJzZUludChhcHBlYXJhbmNlLnRpdGxlQmFySGVpZ2h0IHx8IDApIC0gYXBwZWFyYW5jZS5mcmFtZUhlaWdodEFkanVzdDtcbiAgICBoZWlnaHQgPSBtb2RlbC5jbGllbnRIZWlnaHQgKyB3aW5kb3dUaXRsZUJhckhlaWdodDtcbiAgfVxuXG5cbiAgdmFyIGZyYW1lID0gdGhpcy5jcmVhdGVGcmFtZShsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQsIGFwcGVhcmFuY2UsIHByb3BlcnRpZXMpO1xuXG4gIGlmICh0aXRsZSkge1xuICAgIGZyYW1lLnNldFRpdGxlKHRpdGxlKTtcbiAgfVxuXG4gIGlmIChodG1sKSB7XG4gICAgZnJhbWUuc2V0SFRNTChodG1sKTtcbiAgfVxuICBpZiAodXJsKSB7XG4gICAgdmFyIHVybFByb21pc2UgPSBmcmFtZS5zZXRVcmwodXJsKTtcbiAgICBpZiAodXJsTG9hZGVkKSB7XG4gICAgICB1cmxQcm9taXNlLnRoZW4odXJsTG9hZGVkKTtcbiAgICB9XG4gIH1cbiAgaWYgKHJlc2l6YWJsZSA9PSBmYWxzZSkge1xuICAgIGZyYW1lLnNldFJlc2l6YWJsZShmYWxzZSk7XG4gIH1cbiAgaWYgKG1vdmFibGUgPT0gZmFsc2UpIHtcbiAgICBmcmFtZS5zZXRNb3ZhYmxlKGZhbHNlKTtcbiAgfVxuXG4gIGlmIChtaW5XaWR0aCAmJiBtaW5IZWlnaHQpIHtcbiAgICBmcmFtZS5taW5GcmFtZVdpZHRoID0gbWluV2lkdGg7XG4gIH1cbiAgaWYgKG1pbkhlaWdodCkge1xuICAgIGZyYW1lLm1pbldpbmRvd0hlaWdodCA9IG1pbkhlaWdodDtcblxuICAgIGlmIChtb2RlbC5jbGllbnRIZWlnaHQpIHtcbiAgICAgIGZyYW1lLm1pbldpbmRvd0hlaWdodCA9IG1pbkhlaWdodCArIHdpbmRvd1RpdGxlQmFySGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIGlmIChzdHlsZSkge1xuICAgIHZhciBmcmFtZVZpZXcgPSBmcmFtZS5nZXRGcmFtZVZpZXcoKTtcblxuICAgIGZvciAodmFyIG5hbWUgaW4gc3R5bGUpIHtcbiAgICAgIGlmIChzdHlsZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBmcmFtZVZpZXcuc3R5bGVbbmFtZV0gPSBzdHlsZVtuYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAocHJlc2V0V2luZG93KSB7XG4gICAgcHJlc2V0V2luZG93LnNldHVwUHJlc2V0V2luZG93KGZyYW1lKTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IHdpbmRvd1xuICpcbiAqIEByZXR1cm5zIHtDSWZGcmFtZX1cbiAqL1xuSlNGcmFtZS5wcm90b3R5cGUuY3JlYXRlRnJhbWUgPSBmdW5jdGlvbihsZWZ0LCB0b3AsIHdpZHRoLCBoZWlnaHQsIGFwcGVhcmFuY2UsIHByb3BlcnRpZXMpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICBpZiAoIWFwcGVhcmFuY2UpIHtcbiAgICBhcHBlYXJhbmNlID0gbWUuY3JlYXRlRnJhbWVBcHBlYXJhbmNlKCk7XG4gIH1cblxuXG4gIGFwcGVhcmFuY2UuaW5pdGlhbGl6ZSgpO1xuXG4gIHZhciB3aW5kb3dJZCA9ICd3aW5kb3dfJyArIG1lLmdlbmVyYXRlVVVJRCgpO1xuXG4gIGlmICghbGVmdCkge1xuICAgIGxlZnQgPSAwO1xuICB9XG4gIGlmICghdG9wKSB7XG4gICAgdG9wID0gMDtcbiAgfVxuICBpZiAoIXdpZHRoKSB7XG4gICAgd2lkdGggPSAxMjg7XG4gIH1cbiAgaWYgKCFoZWlnaHQpIHtcbiAgICBoZWlnaHQgPSAxMjg7XG4gIH1cblxuXG4gIHZhciBmcmFtZSA9IG5ldyBDSWZGcmFtZSh3aW5kb3dJZCwgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0LCBhcHBlYXJhbmNlKTtcblxuICAvL2V4cGVyaW1lbnRhbFxuICBmcmFtZS5qc0ZyYW1lID0gbWU7XG5cbiAgaWYgKHByb3BlcnRpZXMgJiYgcHJvcGVydGllcy5uYW1lKSB7XG4gICAgZnJhbWUuc2V0TmFtZShwcm9wZXJ0aWVzLm5hbWUpO1xuICB9XG4gIGZyYW1lLmhpZGUoKTtcblxuICBtZS53aW5kb3dNYW5hZ2VyLmFkZFdpbmRvdyhmcmFtZSk7XG5cblxuICAvLyBnZXRUaXRsZUJhclN0eWxlIGlzIGRlcHJlY2F0ZWRcbiAgaWYgKGFwcGVhcmFuY2UuZ2V0VGl0bGVCYXJTdHlsZSkge1xuXG4gICAgdmFyIHRpdGxlQmFyU3R5bGUgPSBhcHBlYXJhbmNlLmdldFRpdGxlQmFyU3R5bGUoKTtcbiAgICBpZiAodGl0bGVCYXJTdHlsZSkge1xuICAgICAgZnJhbWUuc2V0VGl0bGVCYXJDbGFzc05hbWUodGl0bGVCYXJTdHlsZS50aXRsZUJhckNsYXNzTmFtZURlZmF1bHQsIHRpdGxlQmFyU3R5bGUudGl0bGVCYXJDbGFzc05hbWVGb2N1c2VkKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoYXBwZWFyYW5jZS50aXRsZUJhckNsYXNzTmFtZURlZmF1bHQgJiYgYXBwZWFyYW5jZS50aXRsZUJhckNsYXNzTmFtZUZvY3VzZWQpIHtcbiAgICBmcmFtZS5zZXRUaXRsZUJhckNsYXNzTmFtZShhcHBlYXJhbmNlLnRpdGxlQmFyQ2xhc3NOYW1lRGVmYXVsdCwgYXBwZWFyYW5jZS50aXRsZUJhckNsYXNzTmFtZUZvY3VzZWQpO1xuICB9IGVsc2UgaWYgKGFwcGVhcmFuY2UudGl0bGVCYXJDbGFzc05hbWVEZWZhdWx0KSB7XG4gICAgZnJhbWUuc2V0VGl0bGVCYXJDbGFzc05hbWUoYXBwZWFyYW5jZS50aXRsZUJhckNsYXNzTmFtZURlZmF1bHQsIGFwcGVhcmFuY2UudGl0bGVCYXJDbGFzc05hbWVEZWZhdWx0KTtcbiAgfVxuXG4gIHJldHVybiBmcmFtZTtcblxufTtcblxuXG5KU0ZyYW1lLnByb3RvdHlwZS5jb250YWluc1dpbmRvd05hbWUgPSBmdW5jdGlvbih3aW5kb3dOYW1lKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIHJldHVybiBtZS53aW5kb3dNYW5hZ2VyLmNvbnRhaW5zV2luZG93TmFtZSh3aW5kb3dOYW1lKTtcbn07XG5cbkpTRnJhbWUucHJvdG90eXBlLmdldFdpbmRvd0J5TmFtZSA9IGZ1bmN0aW9uKHdpbmRvd05hbWUpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgcmV0dXJuIG1lLndpbmRvd01hbmFnZXIuZ2V0V2luZG93QnlOYW1lKHdpbmRvd05hbWUpO1xufTtcblxuSlNGcmFtZS5wcm90b3R5cGUuZ2VuZXJhdGVVVUlEID0gZnVuY3Rpb24oKSB7XG5cbiAgdmFyIHVuaXhUaW1lID0gRGF0ZS5ub3coKTtcblxuICB2YXIgdXVpZCA9ICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24oYykge1xuICAgIHZhciByID0gKHVuaXhUaW1lICsgTWF0aC5yYW5kb20oKSAqIDE2KSAlIDE2IHwgMDtcbiAgICB1bml4VGltZSA9IE1hdGguZmxvb3IodW5peFRpbWUgLyAxNik7XG4gICAgcmV0dXJuIChjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCkpLnRvU3RyaW5nKDE2KTtcbiAgfSk7XG4gIHJldHVybiB1dWlkO1xuXG59O1xuXG5KU0ZyYW1lLnByb3RvdHlwZS5jcmVhdGVGcmFtZUFwcGVhcmFuY2UgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBDRnJhbWVBcHBlYXJhbmNlKCk7XG59O1xuXG5KU0ZyYW1lLnByb3RvdHlwZS5jcmVhdGVBbmltYXRvciA9IGZ1bmN0aW9uKCkge1xuXG4gIHJldHVybiBuZXcgQ1NpbXBsZUxheW91dEFuaW1hdG9yKCk7XG59O1xuXG4vKipcbiAqIEhlbHBlciBjbGFzcyBmb3IgbWF4aW1pemluZyBhbmQgbWluaW1pemluZyB3aW5kb3dzKGZyYW1lcykgYW5kIGhhbmRsaW5nIGFuaW1hdGlvbnMgYWNjb3JkaW5nbHlcbiAqL1xuSlNGcmFtZS5wcm90b3R5cGUuY3JlYXRlV2luZG93RXZlbnRIZWxwZXIgPSBmdW5jdGlvbihtb2RlbCkge1xuXG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgaWYgKCFtb2RlbCkge1xuICAgIG1vZGVsID0ge307XG4gIH1cblxuICBtb2RlbC52ZXJ0aWNhbEFsaWduID0gbWUudkFsaWduO1xuICBtb2RlbC5ob3Jpem9udGFsQWxpZ24gPSBtZS5oQWxpZ247XG5cbiAgdmFyIHduZEV2ZW50SGVscGVyID0gbmV3IFdpbmRvd0V2ZW50SGVscGVyKG1vZGVsKTtcbiAgcmV0dXJuIHduZEV2ZW50SGVscGVyO1xufTtcblxuSlNGcmFtZS5wcm90b3R5cGUuZ2V0UHJlc2V0V2luZG93ID0gZnVuY3Rpb24ocHJlc2V0TmFtZSwgcGFyYW0pIHtcblxuICBpZiAocHJlc2V0V2luZG93c1twcmVzZXROYW1lXSkge1xuICAgIHZhciBwcmVzZXRPYmogPSBwcmVzZXRXaW5kb3dzW3ByZXNldE5hbWVdO1xuICAgIHJldHVybiBwcmVzZXRPYmo7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbkpTRnJhbWUucHJvdG90eXBlLmNyZWF0ZVByZXNldFN0eWxlID0gZnVuY3Rpb24ocHJlc2V0TmFtZSwgcGFyYW0pIHtcblxuICB2YXIgbWUgPSB0aGlzO1xuICB2YXIgYXByID0gbWUuY3JlYXRlRnJhbWVBcHBlYXJhbmNlKCk7XG4gIGlmIChwYXJhbSAmJiBwYXJhbS5mb2N1c2VkRnJhbWVPbmx5KSB7XG4gICAgYXByLmZvY3VzZWRGcmFtZU9ubHkgPSBwYXJhbS5mb2N1c2VkRnJhbWVPbmx5O1xuICB9XG5cbiAgaWYgKHByZXNldFN0eWxlc1twcmVzZXROYW1lXSkge1xuICAgIHZhciBzdHlsZU9iaiA9IHByZXNldFN0eWxlc1twcmVzZXROYW1lXTtcbiAgICB2YXIgYXBwZWFyYW5jZVBhcmFtID0gbnVsbDtcblxuICAgIGlmIChwYXJhbSAmJiBwYXJhbS5hcHBlYXJhbmNlUGFyYW0pIHtcbiAgICAgIGFwcGVhcmFuY2VQYXJhbSA9IHBhcmFtLmFwcGVhcmFuY2VQYXJhbTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVPYmouZ2V0U3R5bGUoYXByLCBhcHBlYXJhbmNlUGFyYW0pO1xuICB9XG5cbiAgY29uc29sZS5lcnJvcignW0pTRnJhbWVdIFByZXNldCBhcHBlYXJhbmNlIFwiJyArIHByZXNldE5hbWUgKyAnXCIgbm90IGZvdW5kLicpO1xuICByZXR1cm4gYXByO1xufTtcblxuSlNGcmFtZS5wcm90b3R5cGUuc2hvd1RvYXN0ID0gZnVuY3Rpb24obW9kZWwpIHtcbiAgaWYgKCFtb2RlbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBtZSA9IHRoaXM7XG4gIHZhciB0b2FzdEhlaWdodCA9IDYwO1xuICB2YXIgdG9hc3RXaWR0aCA9IDI2MDtcbiAgdmFyIG9wZW5DbG9zZUR1cmF0aW9uTXMgPSAzMDA7XG4gIHZhciBzdGF5RHVyYXRpb25NcyA9IDEwMDA7XG4gIHZhciBzdGFydFkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMCAtIHRvYXN0SGVpZ2h0IC8gMjtcbiAgdmFyIGVuZFkgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAyMCAtIHRvYXN0SGVpZ2h0IC8gMjtcbiAgdmFyIG15SHRtbCA9ICcnO1xuICB2YXIgc2hvd0J1dHRvbiA9IGZhbHNlO1xuICB2YXIgc3R5bGUgPSB7XG4gICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXG4gICAgYmFja2dyb3VuZDogJ3JnYmEoMCwwLDAsMC44KScsXG4gIH07XG5cbiAgaWYgKG1vZGVsLnN0eWxlKSB7XG4gICAgc3R5bGUgPSBtb2RlbC5zdHlsZTtcbiAgfVxuICBpZiAobW9kZWwuaGVpZ2h0KSB7XG4gICAgdG9hc3RIZWlnaHQgPSBtb2RlbC5oZWlnaHQ7XG4gIH1cbiAgaWYgKG1vZGVsLndpZHRoKSB7XG4gICAgdG9hc3RXaWR0aCA9IG1vZGVsLndpZHRoO1xuICB9XG4gIGlmIChtb2RlbC5kdXJhdGlvbikge1xuICAgIHN0YXlEdXJhdGlvbk1zID0gbW9kZWwuZHVyYXRpb247XG4gIH1cbiAgaWYgKG1vZGVsLmFsaWduKSB7XG5cbiAgICBpZiAobW9kZWwuYWxpZ24gPT0gJ3RvcCcpIHtcbiAgICAgIHN0YXJ0WSA9IDEwICsgdG9hc3RIZWlnaHQgLyAyO1xuICAgICAgZW5kWSA9IDIwICsgdG9hc3RIZWlnaHQgLyAyO1xuICAgIH0gZWxzZSBpZiAobW9kZWwuYWxpZ24gPT0gJ2NlbnRlcicpIHtcbiAgICAgIHN0YXJ0WSA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDI7XG4gICAgICBlbmRZID0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy9ib3R0b21cbiAgICB9XG4gIH1cbiAgaWYgKG1vZGVsLmh0bWwpIHtcbiAgICBteUh0bWwgPSBtb2RlbC5odG1sO1xuICB9XG4gIGlmIChtb2RlbC50ZXh0KSB7XG4gICAgbXlIdG1sID0gbW9kZWwudGV4dDtcbiAgfVxuICBpZiAobW9kZWwuY2xvc2VCdXR0b24gPT0gdHJ1ZSkge1xuICAgIHNob3dCdXR0b24gPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHNob3dCdXR0b24gPSBmYWxzZTtcbiAgfVxuXG5cbiAgdmFyIGFwciA9IG1lLmNyZWF0ZVByZXNldFN0eWxlKCd0b2FzdCcpO1xuXG4gIGlmIChzdHlsZS5ib3JkZXJSYWRpdXMpIHtcbiAgICBhcHIuZnJhbWVCb3JkZXJSYWRpdXMgPSBzdHlsZS5ib3JkZXJSYWRpdXM7XG4gIH1cblxuICBpZiAobW9kZWwuY2xvc2VCdXR0b25Db2xvcikge1xuICAgIGFwci5jYXB0aW9uQ2xvciA9IG1vZGVsLmNsb3NlQnV0dG9uQ29sb3I7XG5cbiAgfVxuXG5cbiAgdmFyIGZyYW1lID0gbWUuY3JlYXRlKHtcbiAgICBuYW1lOiAndG9hc3RfJyArIG1lLmdlbmVyYXRlVVVJRCgpLFxuICAgIHdpZHRoOiB0b2FzdFdpZHRoLCBoZWlnaHQ6IHRvYXN0SGVpZ2h0LFxuICAgIG1vdmFibGU6IGZhbHNlLFxuICAgIHJlc2l6YWJsZTogZmFsc2UsXG4gICAgYXBwZWFyYW5jZTogYXByLFxuICAgIHN0eWxlOiBzdHlsZSxcbiAgICBodG1sOiAnPGRpdiBpZD1cIm15X2VsZW1lbnRcIiBzdHlsZT1cImJveC1zaXppbmc6Ym9yZGVyLWJveDtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLWl0ZW1zOiBjZW50ZXI7cGFkZGluZzoxMHB4O2ZvbnQtc2l6ZToxNnB4O2NvbG9yOmRhcmtncmF5O2hlaWdodDonICsgKHRvYXN0SGVpZ2h0KSArICdweFwiPicgK1xuICAgICAgbXlIdG1sICtcbiAgICAgICc8L2Rpdj4nXG4gIH0pO1xuXG5cbiAgaWYgKHNob3dCdXR0b24pIHtcbiAgfSBlbHNlIHtcbiAgICBmcmFtZS5oaWRlRnJhbWVDb21wb25lbnQoJ2Nsb3NlQnV0dG9uJyk7XG4gIH1cblxuICB2YXIgcmVxdWVzdEZvY3VzQWZ0ZXJBbmltYXRpb24gPSBmYWxzZTtcblxuICB2YXIgc3RhcnRYID0gd2luZG93LmlubmVyV2lkdGggLyAyO1xuXG4gIGlmIChtZS5oQWxpZ24gPT0gJ3JpZ2h0Jykge1xuICAgIHN0YXJ0WCA9IC1zdGFydFg7Ly8gLTUwMDtcbiAgfVxuXG4gIGlmIChtZS52QWxpZ24gPT0gJ2JvdHRvbScpIHtcbiAgICBzdGFydFkgPSBzdGFydFkgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgZW5kWSA9IGVuZFkgLSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIH1cblxuXG4gIHZhciBhbmltYXRvciA9IG1lLmNyZWF0ZUFuaW1hdG9yKCk7XG4gIGFuaW1hdG9yLnNldChmcmFtZSlcbiAgICAuc2V0RHVyYXRpb24ob3BlbkNsb3NlRHVyYXRpb25NcylcbiAgICAuZnJvbVBvc2l0aW9uKHN0YXJ0WCwgc3RhcnRZLCAnQ0VOVEVSX0NFTlRFUicpXG4gICAgLnRvUG9zaXRpb24oc3RhcnRYLCBlbmRZLCAnQ0VOVEVSX0NFTlRFUicpXG4gICAgLnRvQWxwaGEoMS4wKVxuICAgIC5mcm9tQWxwaGEoMC4wKVxuICAgIC5zdGFydCgwLCByZXF1ZXN0Rm9jdXNBZnRlckFuaW1hdGlvbilcbiAgICAudGhlbihmdW5jdGlvbihhbmltYXRvck9iaikge1xuICAgICAgcmV0dXJuIGFuaW1hdG9yT2JqXG4gICAgICAgIC5zZXREdXJhdGlvbihvcGVuQ2xvc2VEdXJhdGlvbk1zKVxuICAgICAgICAuZnJvbVBvc2l0aW9uKHN0YXJ0WCwgZW5kWSwgJ0NFTlRFUl9DRU5URVInKVxuICAgICAgICAudG9Qb3NpdGlvbihzdGFydFgsIHN0YXJ0WSwgJ0NFTlRFUl9DRU5URVInKVxuICAgICAgICAuZnJvbUFscGhhKDEuMClcbiAgICAgICAgLnRvQWxwaGEoMC41KVxuICAgICAgICAuc3RhcnQoc3RheUR1cmF0aW9uTXMsIHJlcXVlc3RGb2N1c0FmdGVyQW5pbWF0aW9uKTtcbiAgICB9KVxuICAgIC50aGVuKGZ1bmN0aW9uKGFuaW1hdG9yT2JqKSB7XG4gICAgICB2YXIgX2ZyYW1lID0gYW5pbWF0b3JPYmouZ2V0KCk7XG4gICAgICBfZnJhbWUuY2xvc2VGcmFtZSgpO1xuICAgIH0pO1xuXG59O1xuXG4vKipcbiAqIGVuZCBvZiBGcmFtZU1hbmFnZXIgY2xhc3NcbiAqL1xuXG5cbk9iamVjdC5mcmVlemUoREVGKTtcblxubW9kdWxlLmV4cG9ydHMgPSBKU0ZyYW1lO1xuIiwiZnVuY3Rpb24gQ1RleHRCdXR0b25BcHBlYXJhbmNlKCkge1xuXG4gIHZhciBjcm9zc01hcmswID0gJ1xcdTI3NGMnO1xuXG4gIHRoaXMuc2l6ZSA9IDE0O1xuICB0aGlzLndpZHRoID0gbnVsbDtcbiAgdGhpcy5oZWlnaHQgPSBudWxsO1xuXG4gIC8vYm9yZGVyXG4gIHRoaXMuYm9yZGVyUmFkaXVzID0gMjtcbiAgdGhpcy5ib3JkZXJXaWR0aCA9IDA7XG4gIHRoaXMuYm9yZGVyQ29sb3JEZWZhdWx0ID0gJyNhYWFhYWEnO1xuICB0aGlzLmJvcmRlckNvbG9yRm9jdXNlZCA9IHRoaXMuYm9yZGVyQ29sb3JEZWZhdWx0O1xuICB0aGlzLmJvcmRlckNvbG9ySG92ZXJlZCA9IG51bGw7XG4gIHRoaXMuYm9yZGVyQ29sb3JQcmVzc2VkID0gdGhpcy5ib3JkZXJDb2xvckRlZmF1bHQ7XG5cbiAgdGhpcy5ib3JkZXJTdHlsZURlZmF1bHQgPSAnc29saWQnO1xuICB0aGlzLmJvcmRlclN0eWxlRm9jdXNlZCA9IHRoaXMuYm9yZGVyU3R5bGVEZWZhdWx0O1xuICB0aGlzLmJvcmRlclN0eWxlSG92ZXJlZCA9IG51bGw7XG4gIHRoaXMuYm9yZGVyU3R5bGVQcmVzc2VkID0gdGhpcy5ib3JkZXJTdHlsZURlZmF1bHQ7XG5cbiAgdGhpcy5iYWNrZ3JvdW5kQm94U2hhZG93ID0gbnVsbDtcblxuXG4gIC8vYmFja2dyb3VuZFxuICB0aGlzLmJhY2tncm91bmRDb2xvckRlZmF1bHQgPSAndHJhbnNwYXJlbnQnO1xuICB0aGlzLmJhY2tncm91bmRDb2xvckZvY3VzZWQgPSB0aGlzLmJhY2tncm91bmRDb2xvckRlZmF1bHQ7XG4gIHRoaXMuYmFja2dyb3VuZENvbG9ySG92ZXJlZCA9IG51bGw7XG4gIHRoaXMuYmFja2dyb3VuZENvbG9yUHJlc3NlZCA9IHRoaXMuYmFja2dyb3VuZENvbG9yRGVmYXVsdDtcblxuICAvL2NhcHRpb25cbiAgdGhpcy5jYXB0aW9uID0gbnVsbDtcbiAgdGhpcy5jYXB0aW9uQ29sb3JEZWZhdWx0ID0gJ3doaXRlJztcbiAgdGhpcy5jYXB0aW9uQ29sb3JGb2N1c2VkID0gdGhpcy5jYXB0aW9uQ29sb3JEZWZhdWx0O1xuICB0aGlzLmNhcHRpb25Db2xvckhvdmVyZWQgPSBudWxsO1xuICB0aGlzLmNhcHRpb25Db2xvclByZXNzZWQgPSB0aGlzLmNhcHRpb25Db2xvckRlZmF1bHQ7XG4gIHRoaXMuY2FwdGlvblNoaWZ0WXB4ID0gMDtcbiAgdGhpcy5jYXB0aW9uRm9udFJhdGlvID0gMS4wO1xuXG5cbn1cbm1vZHVsZS5leHBvcnRzID0gQ1RleHRCdXR0b25BcHBlYXJhbmNlOyIsImZ1bmN0aW9uIENDaGlsZE1lbnVBcHBlYXJhbmNlKG1vZGVsKSB7XG4gIHRoaXMuY2hpbGRNZW51SFRNTCA9ICcnO1xuICB0aGlzLmNoaWxkTWVudVdpZHRoID0gMDtcbiAgdGhpcy5jaGlsZE1lbnVBbGlnbiA9ICdMRUZUJzsvLyBvZmYgc2V0IHBvc2l0aW9uIGZyb20gcGFyZW50IGZyYW1lQ29tcG9uZW50IFwiTEVGVFwiIFwiUklHSFRcIiBcIkNFTlRFUlwiXG4gIHRoaXMueU9mZnNldCA9IDA7XG4gIHRoaXMueE9mZnNldCA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ0NoaWxkTWVudUFwcGVhcmFuY2U7IiwidmFyIG1lcmdlRGVlcGx5ID0gcmVxdWlyZSgnbWVyZ2UtZGVlcGx5Jyk7XG52YXIgQ1RleHRCdXR0b25BcHBlYXJhbmNlID0gcmVxdWlyZSgnLi9DQnV0dG9uQXBwZWFyYW5jZS5qcycpO1xudmFyIENJbWFnZUJ1dHRvbkFwcGVhcmFuY2UgPSByZXF1aXJlKCcuL0NJbWFnZUJ1dHRvbkFwcGVhcmFuY2UuanMnKTtcbnZhciBDQ2hpbGRNZW51QXBwZWFyYW5jZSA9IHJlcXVpcmUoJy4vQ0NoaWxkTWVudUFwcGVhcmFuY2UuanMnKTtcblxuLyoqXG4gKiBDRG9tUGFydHNCdWlsZGVyIGNsYXNzXG4gKiBFYXN5IHRvIGJ1aWxkIGEgYmVhdXRpZnVsIG9yIHR5cGljYWwgZG9tIHBhcnRzKGh0bWxFbGVtZW50KVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIENEb21QYXJ0c0J1aWxkZXIoKSB7XG59XG5cbkNEb21QYXJ0c0J1aWxkZXIucHJvdG90eXBlLmJ1aWxkQ2hpbGRNZW51QXBwZWFyYW5jZSA9IGZ1bmN0aW9uKGZyYW1lQXBwZWFyYW5jZSkge1xuICByZXR1cm4gbmV3IENDaGlsZE1lbnVBcHBlYXJhbmNlKGZyYW1lQXBwZWFyYW5jZSk7XG59O1xuQ0RvbVBhcnRzQnVpbGRlci5wcm90b3R5cGUuYnVpbGRUZXh0QnV0dG9uQXBwZWFyYW5jZSA9IGZ1bmN0aW9uKHNyYykge1xuICBpZiAoc3JjKSB7XG4gICAgdmFyIHJlc3VsdCA9IG1lcmdlRGVlcGx5KHsgb3A6ICdjbG9uZScsIG9iamVjdDE6IHNyYywgY29uY2F0QXJyYXk6IHRydWUgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IENUZXh0QnV0dG9uQXBwZWFyYW5jZSgpO1xuICB9XG59O1xuQ0RvbVBhcnRzQnVpbGRlci5wcm90b3R5cGUuYnVpbGRJbWFnZUJ1dHRvbkFwcGVhcmFuY2UgPSBmdW5jdGlvbihzcmMpIHtcbiAgaWYgKHNyYykge1xuICAgIHZhciBjbG9uZWRJbWFnZUJ1dHRvbkFwcGVhcmFuY2UgPSBtZXJnZURlZXBseSh7IG9wOiAnY2xvbmUnLCBvYmplY3QxOiBzcmMgfSk7XG4gICAgcmV0dXJuIGNsb25lZEltYWdlQnV0dG9uQXBwZWFyYW5jZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IENJbWFnZUJ1dHRvbkFwcGVhcmFuY2UoKTtcbiAgfVxufTtcblxuQ0RvbVBhcnRzQnVpbGRlci5wcm90b3R5cGUuYnVpbGRCdXR0b24gPSBmdW5jdGlvbihidG5BcHBlYXJhbmNlKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIHJldHVybiBtZS5idWlsZFRleHRCdXR0b24oYnRuQXBwZWFyYW5jZSk7XG59O1xuXG5DRG9tUGFydHNCdWlsZGVyLnByb3RvdHlwZS5hcHBlbmRDaGlsZE1lbnVUbyA9IGZ1bmN0aW9uKGNoaWxkTWVudUFwcGVhcmFuY2UsIHBhcmVudEVsZSkge1xuICB2YXIgbWUgPSB0aGlzO1xuICB2YXIgbmRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZGl2LmNsYXNzTGlzdC5hZGQoJ2pzZnJhbWUtY2hpbGQtbWVudScpO1xuICBuZGl2LmlubmVySFRNTCA9IGNoaWxkTWVudUFwcGVhcmFuY2UuY2hpbGRNZW51SFRNTDtcbiAgbmRpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gIG5kaXYuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgbmRpdi5zdHlsZS53aWR0aCA9IGNoaWxkTWVudUFwcGVhcmFuY2UuY2hpbGRNZW51V2lkdGggKyAncHgnO1xuICAvLyBuZGl2LnN0eWxlLnRvcCA9IGNoaWxkTWVudUFwcGVhcmFuY2UuY2hpbGRNZW51VG9wICsgJ3B4JztcbiAgLy8gbmRpdi5zdHlsZS5sZWZ0ID0gY2hpbGRNZW51QXBwZWFyYW5jZS5jaGlsZE1lbnVMZWZ0ICsgJ3B4JztcbiAgbmRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIHZhciBwb3NYID0gY2hpbGRNZW51QXBwZWFyYW5jZS54T2Zmc2V0O1xuICB2YXIgcG9zWSA9IHBhcnNlSW50KHBhcmVudEVsZS5zdHlsZS5oZWlnaHQsIDEwKSArIGNoaWxkTWVudUFwcGVhcmFuY2UueU9mZnNldCArIDI7XG5cbiAgaWYgKGNoaWxkTWVudUFwcGVhcmFuY2UuY2hpbGRNZW51QWxpZ24gPT09ICdMRUZUJykge1xuICAgIG5kaXYuc3R5bGUubGVmdCA9IHBvc1ggKyAncHgnO1xuICB9IGVsc2UgaWYgKGNoaWxkTWVudUFwcGVhcmFuY2UuY2hpbGRNZW51QWxpZ24gPT09ICdSSUdIVCcpIHtcbiAgICBuZGl2LnN0eWxlLnJpZ2h0ID0gcG9zWCArICdweCc7XG4gIH0gZWxzZSBpZiAoY2hpbGRNZW51QXBwZWFyYW5jZS5jaGlsZE1lbnVBbGlnbiA9PT0gJ0NFTlRFUicpIHtcbiAgICBwb3NYID0gLWNoaWxkTWVudUFwcGVhcmFuY2UuY2hpbGRNZW51V2lkdGggLyAyICsgcGFyc2VJbnQocGFyZW50RWxlLnN0eWxlLmhlaWdodCwgMTApIC8gMjtcbiAgICBuZGl2LnN0eWxlLmxlZnQgPSBwb3NYICsgJ3B4JztcbiAgfVxuICBuZGl2LnN0eWxlLnRvcCA9IHBvc1kgKyAncHgnO1xuXG4gIC8vIG5kaXYuc3R5bGUucG9pbnRlckV2ZW50cyBpcyBub25lIHRvIGF2b2lkIHJlZmVycmluZyBjbGlja3MgdG8gZXh0cmEgYXJlYXMuXG4gIC8vIEJ1dCB3ZSB3YW50IGl0cyBjaGlsZHJlbiB0byBiZSByZXNwb25zaXZlLCBzbyB3ZSBzZXQgcG9pbnRlckV2ZW50cyB0byBhdXRvXG4gIG5kaXYuZmlyc3RDaGlsZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xuXG4gIHBhcmVudEVsZS5hcHBlbmRDaGlsZChuZGl2KTtcbiAgLy9yZXR1cm4gbmRpdjtcbn07XG5cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFjdHVhbCBET00gZWxlbWVudCBmcm9tIHRoZSBzcGVjaWZpZWQgYXBwZWFyYW5jZVxuICogQHBhcmFtIGJ0bkFwcGVhcmFuY2VcbiAqIEByZXR1cm5zIHtIVE1MRGl2RWxlbWVudH1cbiAqL1xuQ0RvbVBhcnRzQnVpbGRlci5wcm90b3R5cGUuYnVpbGRUZXh0QnV0dG9uID0gZnVuY3Rpb24oYnRuQXBwZWFyYW5jZSkge1xuXG4gIHZhciBzaXplID0gYnRuQXBwZWFyYW5jZS5zaXplO1xuICB2YXIgd2lkdGggPSBzaXplO1xuICB2YXIgaGVpZ2h0ID0gc2l6ZTtcblxuICBpZiAoYnRuQXBwZWFyYW5jZS53aWR0aCAhPSBudWxsKSB7XG4gICAgd2lkdGggPSBidG5BcHBlYXJhbmNlLndpZHRoO1xuICB9XG5cbiAgaWYgKGJ0bkFwcGVhcmFuY2UuaGVpZ2h0ICE9IG51bGwpIHtcbiAgICBoZWlnaHQgPSBidG5BcHBlYXJhbmNlLmhlaWdodDtcbiAgfVxuXG5cbiAgdmFyIGRpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAvL2JvcmRlclxuICB2YXIgYm9yZGVyV2lkdGggPSBidG5BcHBlYXJhbmNlLmJvcmRlcldpZHRoO1xuICB2YXIgYm9yZGVyUmFkaXVzID0gYnRuQXBwZWFyYW5jZS5ib3JkZXJSYWRpdXM7XG5cbiAgdmFyIGJvcmRlckNvbG9yRGVmYXVsdCA9IGJ0bkFwcGVhcmFuY2UuYm9yZGVyQ29sb3JEZWZhdWx0O1xuICB2YXIgYm9yZGVyQ29sb3JGb2N1c2VkID0gYnRuQXBwZWFyYW5jZS5ib3JkZXJDb2xvckZvY3VzZWQ7XG4gIHZhciBib3JkZXJDb2xvckhvdmVyZWQgPSBidG5BcHBlYXJhbmNlLmJvcmRlckNvbG9ySG92ZXJlZDtcbiAgdmFyIGJvcmRlckNvbG9yUHJlc3NlZCA9IGJ0bkFwcGVhcmFuY2UuYm9yZGVyQ29sb3JQcmVzc2VkO1xuXG4gIHZhciBib3JkZXJTdHlsZURlZmF1bHQgPSBidG5BcHBlYXJhbmNlLmJvcmRlclN0eWxlRGVmYXVsdDtcbiAgdmFyIGJvcmRlclN0eWxlRm9jdXNlZCA9IGJ0bkFwcGVhcmFuY2UuYm9yZGVyU3R5bGVGb2N1c2VkO1xuICB2YXIgYm9yZGVyU3R5bGVIb3ZlcmVkID0gYnRuQXBwZWFyYW5jZS5ib3JkZXJTdHlsZUhvdmVyZWQ7XG4gIHZhciBib3JkZXJTdHlsZVByZXNzZWQgPSBidG5BcHBlYXJhbmNlLmJvcmRlclN0eWxlUHJlc3NlZDtcblxuICAvL2JhY2tncm91bmRcbiAgdmFyIGJhY2tncm91bmRDb2xvckRlZmF1bHQgPSBidG5BcHBlYXJhbmNlLmJhY2tncm91bmRDb2xvckRlZmF1bHQ7XG4gIHZhciBiYWNrZ3JvdW5kQ29sb3JGb2N1c2VkID0gYnRuQXBwZWFyYW5jZS5iYWNrZ3JvdW5kQ29sb3JGb2N1c2VkO1xuICB2YXIgYmFja2dyb3VuZENvbG9ySG92ZXJlZCA9IGJ0bkFwcGVhcmFuY2UuYmFja2dyb3VuZENvbG9ySG92ZXJlZDtcbiAgdmFyIGJhY2tncm91bmRDb2xvclByZXNzZWQgPSBidG5BcHBlYXJhbmNlLmJhY2tncm91bmRDb2xvclByZXNzZWQ7XG5cbiAgdmFyIGJhY2tncm91bmRCb3hTaGFkb3cgPSBidG5BcHBlYXJhbmNlLmJhY2tncm91bmRCb3hTaGFkb3c7XG5cbiAgdmFyIGZhID0gYnRuQXBwZWFyYW5jZS5mYTtcblxuICAvL2NhcHRpb25cbiAgdmFyIGNhcHRpb24gPSBidG5BcHBlYXJhbmNlLmNhcHRpb247XG4gIHZhciBidG5JbWFnZURlZmF1bHQgPSBidG5BcHBlYXJhbmNlLmltYWdlRGVmYXVsdDtcbiAgdmFyIGJ0bkltYWdlRm9jdXNlZCA9IGJ0bkFwcGVhcmFuY2UuaW1hZ2VGb2N1c2VkO1xuICB2YXIgYnRuSW1hZ2VIb3ZlcmVkID0gYnRuQXBwZWFyYW5jZS5pbWFnZUhvdmVyZWQ7XG4gIHZhciBidG5JbWFnZVByZXNzZWQgPSBidG5BcHBlYXJhbmNlLmltYWdlUHJlc3NlZDtcblxuICAvL3ByZXZlbnQgdG8gY2F0Y2ggbW91c2UgZXZlbnRzXG4gIGlmIChidG5JbWFnZURlZmF1bHQpIHtcbiAgICBidG5JbWFnZURlZmF1bHQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgfVxuICBpZiAoYnRuSW1hZ2VGb2N1c2VkKSB7XG4gICAgYnRuSW1hZ2VGb2N1c2VkLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gIH1cbiAgaWYgKGJ0bkltYWdlSG92ZXJlZCkge1xuICAgIGJ0bkltYWdlSG92ZXJlZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICB9XG4gIGlmIChidG5JbWFnZVByZXNzZWQpIHtcbiAgICBidG5JbWFnZVByZXNzZWQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgfVxuXG4gIHZhciBfY2FwdGlvbkNvbG9yRGVmYXVsdCA9IGJ0bkFwcGVhcmFuY2UuY2FwdGlvbkNvbG9yRGVmYXVsdDtcbiAgdmFyIGNhcHRpb25Db2xvckZvY3VzZWQgPSBidG5BcHBlYXJhbmNlLmNhcHRpb25Db2xvckZvY3VzZWQ7XG4gIHZhciBjYXB0aW9uQ29sb3JIb3ZlcmVkID0gYnRuQXBwZWFyYW5jZS5jYXB0aW9uQ29sb3JIb3ZlcmVkO1xuICB2YXIgY2FwdGlvbkNvbG9yUHJlc3NlZCA9IGJ0bkFwcGVhcmFuY2UuY2FwdGlvbkNvbG9yUHJlc3NlZDtcblxuICB2YXIgY2FwdGlvblNoaWZ0WXB4ID0gYnRuQXBwZWFyYW5jZS5jYXB0aW9uU2hpZnRZcHg7XG4gIHZhciBjYXB0aW9uRm9udFJhdGlvID0gYnRuQXBwZWFyYW5jZS5jYXB0aW9uRm9udFJhdGlvO1xuXG4gIC8vU2V0IHdoZXRoZXIgcGFyZW50IGZyYW1lIGhhcyBmb2N1cyBvciBub3QgaW50ZXJuYWxseVxuICBkaXZFbGVtZW50Ll9oYXNGcmFtZUZvY3VzID0gZmFsc2U7XG5cbiAgLy9TZXQgd2hldGhlciBtb3VzZSBpcyBwcmVzc2luZyBvciBub3QgaW50ZXJuYWxseS5cbiAgZGl2RWxlbWVudC5faXNNb3VzZURvd24gPSBmYWxzZTtcblxuICBkaXZFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcblxuICBkaXZFbGVtZW50LnN0eWxlLnRvcCA9ICcwcHgnO1xuICBkaXZFbGVtZW50LnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgZGl2RWxlbWVudC5zdHlsZS53aWR0aCA9ICh3aWR0aCkgKyAncHgnO1xuICBkaXZFbGVtZW50LnN0eWxlLmhlaWdodCA9IChoZWlnaHQpICsgJ3B4JztcblxuICBpZiAoYnRuQXBwZWFyYW5jZS5jdXJzb3IpIHtcbiAgICBkaXZFbGVtZW50LnN0eWxlLmN1cnNvciA9IGJ0bkFwcGVhcmFuY2UuY3Vyc29yO1xuICB9IGVsc2Uge1xuICAgIGRpdkVsZW1lbnQuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuICB9XG4gIGRpdkVsZW1lbnQuc3R5bGUubWFyZ2luID0gJzBweCc7XG4gIGRpdkVsZW1lbnQuc3R5bGUucGFkZGluZyA9ICcwcHgnO1xuICAvL2FkZGVkIGZvciBwcmV2ZW50aW5nIGJvb3RzdHJhcC5jc3MgcG9sbHV0aW9uXG4gIGRpdkVsZW1lbnQuc3R5bGUuYm94U2l6aW5nID0gJ2NvbnRlbnQtYm94JztcbiAgZGl2RWxlbWVudC5zdHlsZS5mb250RmFtaWx5ID0gJ3NhbnMtc2VyaWYnO1xuXG4gIGRpdkVsZW1lbnQub25tb3VzZWRvd24gPSBmdW5jdGlvbihlKSB7XG4gICAgZGl2RWxlbWVudC5faXNNb3VzZURvd24gPSB0cnVlO1xuICAgIGRpdkVsZW1lbnQuX2hhbmRsZUZvY3VzRHJhd2luZygnb25tb3VzZWRvd24nKTtcbiAgfTtcblxuICBkaXZFbGVtZW50Lm9ubW91c2VvdXQgPSBmdW5jdGlvbihlKSB7XG4gICAgZGl2RWxlbWVudC5faXNNb3VzZURvd24gPSBmYWxzZTtcbiAgICBkaXZFbGVtZW50Ll9oYW5kbGVGb2N1c0RyYXdpbmcoJ29ubW91c2VvdXQnKTtcbiAgfTtcblxuICBkaXZFbGVtZW50Lm9ubW91c2VvdmVyID0gZnVuY3Rpb24oZSkge1xuICAgIGRpdkVsZW1lbnQuX2hhbmRsZUhvdmVyRHJhd2luZygpO1xuICB9O1xuXG4gIGRpdkVsZW1lbnQub25tb3VzZXVwID0gZnVuY3Rpb24oZSkge1xuICAgIGRpdkVsZW1lbnQuX2lzTW91c2VEb3duID0gZmFsc2U7XG4gICAgZGl2RWxlbWVudC5faGFuZGxlRm9jdXNEcmF3aW5nKCdvbm1vdXNldXAnKTtcbiAgfTtcblxuXG4gIC8qKlxuICAgKiBUaGUgcGFyZW50IG5vdGlmaWVzIHRoYXQgdGhlIHBhcmVudCdzIGZyYW1lIGdvdCBmb2N1c1xuICAgKi9cbiAgZGl2RWxlbWVudC5fb25UYWtlRm9jdXMgPSBmdW5jdGlvbigpIHtcbiAgICBkaXZFbGVtZW50Ll9oYXNGcmFtZUZvY3VzID0gdHJ1ZTtcbiAgICBkaXZFbGVtZW50Ll9oYW5kbGVGb2N1c0RyYXdpbmcoJ19vblRha2VGb2N1cycpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBUaGUgcGFyZW50IG5vdGlmaWVzIHRoYXQgdGhlIHBhcmVudCdzIGZyYW1lIGhhcyBsb3N0IGZvY3VzXG4gICAqL1xuICBkaXZFbGVtZW50Ll9vblJlbGVhc2VGb2N1cyA9IGZ1bmN0aW9uKCkge1xuXG4gICAgZGl2RWxlbWVudC5faGFzRnJhbWVGb2N1cyA9IGZhbHNlO1xuICAgIGRpdkVsZW1lbnQuX2hhbmRsZUZvY3VzRHJhd2luZygnX29uUmVsZWFzZUZvY3VzJyk7XG4gIH07XG5cbiAgLyoqXG4gICAqICBUbyBoYW5kbGUgMngyIG1hdHJpeC5cbiAgICogIChfaGFzRnJhbWVGb2N1cyB0cnVlL2ZhbHNlIHggX2lzTW91c2VEb3duIHRydWUvZmFsc2UpXG4gICAqL1xuICBkaXZFbGVtZW50Ll9oYW5kbGVGb2N1c0RyYXdpbmcgPSBmdW5jdGlvbihldnROYW1lKSB7XG4gICAgaWYgKGRpdkVsZW1lbnQuX2hhc0ZyYW1lRm9jdXMpIHtcbiAgICAgIC8vV2hlbiB0aGlzIGVsZW1lbnQgaGFzIGZvY3VzXG5cbiAgICAgIGlmIChkaXZFbGVtZW50Ll9pc01vdXNlRG93bikge1xuICAgICAgICAvL2JvcmRlclxuICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gYm9yZGVyQ29sb3JQcmVzc2VkO1xuICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmJvcmRlclN0eWxlID0gYm9yZGVyU3R5bGVQcmVzc2VkO1xuXG4gICAgICAgIC8vYmFja2dyb3VuZFxuICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvclByZXNzZWQ7XG5cbiAgICAgICAgLy9jYXB0aW9uXG4gICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuY29sb3IgPSBjYXB0aW9uQ29sb3JQcmVzc2VkO1xuXG4gICAgICAgIGlmIChidG5JbWFnZVByZXNzZWQpIHtcbiAgICAgICAgICAvLyBkaXZFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgIC8vIGRpdkVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuSW1hZ2VQcmVzc2VkKTtcbiAgICAgICAgICB1cGRhdGVJbWFnZShidG5JbWFnZVByZXNzZWQsIGRpdkVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL2JvcmRlclxuICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gYm9yZGVyQ29sb3JGb2N1c2VkO1xuICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmJvcmRlclN0eWxlID0gYm9yZGVyU3R5bGVGb2N1c2VkO1xuXG4gICAgICAgIC8vYmFja2dyb3VuZFxuICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvckZvY3VzZWQ7XG5cbiAgICAgICAgLy9jYXB0aW9uXG4gICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuY29sb3IgPSBjYXB0aW9uQ29sb3JGb2N1c2VkO1xuXG4gICAgICAgIGlmIChidG5JbWFnZUZvY3VzZWQpIHtcbiAgICAgICAgICAvLyBkaXZFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgIC8vIGRpdkVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuSW1hZ2VGb2N1c2VkKTtcbiAgICAgICAgICB1cGRhdGVJbWFnZShidG5JbWFnZUZvY3VzZWQsIGRpdkVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy9XaGVuIHRoaXMgZWxlbWVudCBkb2Vzbid0IGhhdmUgZm9jdXNcbiAgICAgIGlmIChkaXZFbGVtZW50Ll9pc01vdXNlRG93bikge1xuICAgICAgICAvL2JvcmRlclxuICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gYm9yZGVyQ29sb3JQcmVzc2VkO1xuICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmJvcmRlclN0eWxlID0gYm9yZGVyU3R5bGVQcmVzc2VkO1xuXG4gICAgICAgIC8vYmFja2dyb3VuZFxuICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvclByZXNzZWQ7XG5cbiAgICAgICAgLy9jYXB0aW9uXG4gICAgICAgIGRpdkVsZW1lbnQuc3R5bGUuY29sb3IgPSBjYXB0aW9uQ29sb3JQcmVzc2VkO1xuXG4gICAgICAgIGlmIChidG5JbWFnZVByZXNzZWQpIHtcbiAgICAgICAgICAvLyBkaXZFbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICAgICAgICAgIC8vIGRpdkVsZW1lbnQuYXBwZW5kQ2hpbGQoYnRuSW1hZ2VQcmVzc2VkKTtcbiAgICAgICAgICB1cGRhdGVJbWFnZShidG5JbWFnZVByZXNzZWQsIGRpdkVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgLy9ib3JkZXJcbiAgICAgICAgZGl2RWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9IGJvcmRlckNvbG9yRGVmYXVsdDtcbiAgICAgICAgZGl2RWxlbWVudC5zdHlsZS5ib3JkZXJTdHlsZSA9IGJvcmRlclN0eWxlRGVmYXVsdDtcblxuICAgICAgICAvL2JhY2tncm91bmRcbiAgICAgICAgZGl2RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBiYWNrZ3JvdW5kQ29sb3JEZWZhdWx0O1xuXG4gICAgICAgIC8vY2FwdGlvblxuICAgICAgICBkaXZFbGVtZW50LnN0eWxlLmNvbG9yID0gX2NhcHRpb25Db2xvckRlZmF1bHQ7XG5cbiAgICAgICAgaWYgKGJ0bkltYWdlRGVmYXVsdCkge1xuICAgICAgICAgIC8vIGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgICAgLy8gZGl2RWxlbWVudC5hcHBlbmRDaGlsZChidG5JbWFnZURlZmF1bHQpO1xuICAgICAgICAgIHVwZGF0ZUltYWdlKGJ0bkltYWdlRGVmYXVsdCwgZGl2RWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgZGl2RWxlbWVudC5faGFuZGxlSG92ZXJEcmF3aW5nID0gZnVuY3Rpb24oKSB7XG5cbiAgICBpZiAoZGl2RWxlbWVudC5faGFzRnJhbWVGb2N1cykge1xuICAgICAgLy9XaGVuIHRoaXMgZWxlbWVudCBoYXMgZm9jdXNcbiAgICB9IGVsc2Uge1xuICAgICAgLy9XaGVuIHRoaXMgZWxlbWVudCBkb2Vzbid0IGhhdmUgZm9jdXNcbiAgICB9XG4gICAgLy9ib3JkZXJcbiAgICBpZiAoYm9yZGVyQ29sb3JIb3ZlcmVkKSB7XG4gICAgICBkaXZFbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gYm9yZGVyQ29sb3JIb3ZlcmVkO1xuICAgIH1cbiAgICBpZiAoYm9yZGVyU3R5bGVIb3ZlcmVkKSB7XG4gICAgICBkaXZFbGVtZW50LnN0eWxlLmJvcmRlclN0eWxlID0gYm9yZGVyU3R5bGVIb3ZlcmVkO1xuICAgIH1cblxuICAgIC8vYmFja2dyb3VuZFxuICAgIGlmIChiYWNrZ3JvdW5kQ29sb3JIb3ZlcmVkKSB7XG4gICAgICBkaXZFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGJhY2tncm91bmRDb2xvckhvdmVyZWQ7XG4gICAgfVxuXG4gICAgaWYgKGNhcHRpb25Db2xvckhvdmVyZWQpIHtcbiAgICAgIC8vY2FwdGlvblxuICAgICAgZGl2RWxlbWVudC5zdHlsZS5jb2xvciA9IGNhcHRpb25Db2xvckhvdmVyZWQ7XG4gICAgfVxuICAgIGlmIChidG5JbWFnZUhvdmVyZWQpIHtcbiAgICAgIC8vIGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgICAvLyBkaXZFbGVtZW50LmFwcGVuZENoaWxkKGJ0bkltYWdlSG92ZXJlZCk7XG4gICAgICB1cGRhdGVJbWFnZShidG5JbWFnZUhvdmVyZWQsIGRpdkVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbiAgZGl2RWxlbWVudC5zdHlsZS5wYWRkaW5nID0gJzBweCc7XG5cbiAgZGl2RWxlbWVudC5zdHlsZS50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgZGl2RWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IChoZWlnaHQgKiBjYXB0aW9uRm9udFJhdGlvKSArICdweCc7XG5cbiAgZGl2RWxlbWVudC5zdHlsZS5saW5lSGVpZ2h0ID0gKGhlaWdodCkgKyAncHgnO1xuXG4gIGRpdkVsZW1lbnQuc3R5bGUuYm9yZGVyV2lkdGggPSAnMXB4JztcblxuICBpZiAoYm9yZGVyV2lkdGggIT0gbnVsbCkge1xuICAgIGRpdkVsZW1lbnQuc3R5bGUuYm9yZGVyV2lkdGggPSBib3JkZXJXaWR0aCArICdweCc7XG4gIH1cblxuICBpZiAoYmFja2dyb3VuZEJveFNoYWRvdyAhPSBudWxsKSB7XG4gICAgZGl2RWxlbWVudC5zdHlsZS5ib3hTaGFkb3cgPSBiYWNrZ3JvdW5kQm94U2hhZG93O1xuICB9XG5cbiAgZGl2RWxlbWVudC5zdHlsZS5ib3JkZXJSYWRpdXMgPSAoYm9yZGVyUmFkaXVzICsgcGFyc2VJbnQoZGl2RWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aCkpICsgJ3B4JztcblxuICB2YXIgY2hpbGRNb2RlID0gdHJ1ZTtcblxuICBpZiAoY2hpbGRNb2RlICYmIGJ0bkltYWdlRGVmYXVsdCkge1xuICAgIC8vIGRpdkVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgLy8gZGl2RWxlbWVudC5hcHBlbmRDaGlsZChidG5JbWFnZURlZmF1bHQpO1xuICAgIHVwZGF0ZUltYWdlKGJ0bkltYWdlRGVmYXVsdCwgZGl2RWxlbWVudCk7XG4gIH0gZWxzZSBpZiAoY2hpbGRNb2RlICYmIGNhcHRpb24pIHtcblxuICAgIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIC8vc3Bhbi5zdHlsZS5wb3NpdGlvbj0nYWJzb2x1dGUnO1xuICAgIHNwYW4uc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgc3Bhbi5zdHlsZS5tYXJnaW5Ub3AgPSBjYXB0aW9uU2hpZnRZcHggKyAncHgnO1xuICAgIHNwYW4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgIHNwYW4uc3R5bGUudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgc3Bhbi5zdHlsZS5mb250RmFtaWx5ID0gJ3NhbnMtc2VyaWYnO1xuICAgIHNwYW4uYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY2FwdGlvbikpO1xuICAgIGRpdkVsZW1lbnQuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cbiAgfSBlbHNlIGlmIChjaGlsZE1vZGUgJiYgZmEpIHtcblxuICAgIHZhciBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICBzcGFuLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIHNwYW4uc3R5bGUubWFyZ2luVG9wID0gY2FwdGlvblNoaWZ0WXB4ICsgJ3B4JztcbiAgICBzcGFuLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICBzcGFuLnN0eWxlLnRleHRBbGlnbiA9ICdjZW50ZXInO1xuICAgIHNwYW4uc3R5bGUuZm9udEZhbWlseSA9ICdzYW5zLXNlcmlmJztcbiAgICBzcGFuLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cIicgKyBmYSArICdcIj48L2k+JztcbiAgICBkaXZFbGVtZW50LmFwcGVuZENoaWxkKHNwYW4pO1xuICB9IGVsc2UgaWYgKCFjaGlsZE1vZGUgJiYgY2FwdGlvbikge1xuICAgIGRpdkVsZW1lbnQuc3R5bGUucGFkZGluZ1RvcCA9IGNhcHRpb25TaGlmdFlweCArICdweCc7XG4gICAgZGl2RWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjYXB0aW9uKSk7XG4gIH1cblxuICBkaXZFbGVtZW50Ll9oYW5kbGVGb2N1c0RyYXdpbmcoKTtcbiAgcmV0dXJuIGRpdkVsZW1lbnQ7XG5cbn07XG5cbi8vIERvbid0IHVzZSBpbm5lckhUTUw9JycgYmVjYXVzZSB0aGVyZSBtYXkgYmUgYSBjaGlsZCBiZWxvdyB0aGlzICdpbWcnIGVsZW1lbnQuXG4vLyBBIGNoaWxkIHRoYXQgbWF5IGJlIGEgY2hpbGQgaXMgYSBjaGlsZE1lbnUuXG5mdW5jdGlvbiB1cGRhdGVJbWFnZShpbWFnZSwgcGFyZW50RWxlbWVudCkge1xuICB2YXIgaW1ncyA9IHBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJyk7XG4gIGlmIChwYXJlbnRFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBwYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShpbWFnZSwgcGFyZW50RWxlbWVudC5maXJzdENoaWxkKTtcbiAgfSBlbHNlIHtcbiAgICBwYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGltYWdlKTtcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGltZ3MubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaW1nID0gaW1nc1tpXTtcbiAgICBpZiAoaW1hZ2UgIT09IGltZykge1xuICAgICAgcGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChpbWcpO1xuICAgIH1cbiAgfVxufVxuXG4vLystKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy1cblxuXG4vKipcbiAqIGVuZCBvZiBDRG9tUGFydHNCdWlsZGVyIGNsYXNzXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gQ0RvbVBhcnRzQnVpbGRlcjtcbiIsInZhciBDRG9tUGFydHNCdWlsZGVyID0gcmVxdWlyZSgnLi9DRG9tUGFydHNCdWlsZGVyLmpzJyk7XG52YXIgQ0ZyYW1lQ29tcG9uZW50ID0gcmVxdWlyZSgnLi9DRnJhbWVDb21wb25lbnQuanMnKTtcblxuLyoqXG4gKiBDRnJhbWVBcHBlYXJhbmNlIGNsYXNzPGJyPlxuICogQXBwZWFyYW5jZSBNb2RlbCBDbGFzcyBmb3IgRnJhbWVcbiAqXG4gKi9cbmZ1bmN0aW9uIENGcmFtZUFwcGVhcmFuY2UoKSB7XG5cbiAgdmFyIG1lID0gdGhpcztcblxuICB0aGlzLnNob3dUaXRsZUJhciA9IHRydWU7XG4gIHRoaXMuc2hvd0Nsb3NlQnV0dG9uID0gdHJ1ZTtcbiAgdGhpcy50aXRsZUJhckNhcHRpb24gPSAnJztcbiAgdGhpcy50aXRsZUJhckNhcHRpb25Gb250U2l6ZSA9ICcxMnB4JztcbiAgdGhpcy50aXRsZUJhckNhcHRpb25Gb250V2VpZ2h0ID0gJ2JvbGQnO1xuICB0aGlzLnRpdGxlQmFySGVpZ2h0ID0gJzI0cHgnO1xuICB0aGlzLnVzZUlmcmFtZSA9IGZhbHNlO1xuICB0aGlzLnVzZUZyYW1lID0gdHJ1ZTtcblxuICB0aGlzLnRpdGxlQmFyQ2xhc3NOYW1lRGVmYXVsdD1udWxsO1xuICB0aGlzLnRpdGxlQmFyQ2xhc3NOYW1lRm9jdXNlZD1udWxsO1xuXG4gIHRoaXMuc2V0VXNlSUZyYW1lID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBtZS51c2VJZnJhbWUgPSB2YWx1ZTtcbiAgICBtZS51c2VGcmFtZSA9ICF2YWx1ZTtcbiAgICByZXR1cm4gbWU7XG4gIH07XG5cblxuICAvKipcbiAgICogVGhlIHBvc2l0aW9uIGZyb20gdGhlIGxlZnQgc2lkZSBvZiB0aGUgY2FwdGlvbi4gSWYgdGhpcyB2YWx1ZSBpcyBudWxsLCBjYXB0aW9uIHdpbGwgYmUgY2VudGVyZWQuXG4gICAqL1xuICB0aGlzLnRpdGxlQmFyQ2FwdGlvbkxlZnRNYXJnaW4gPSAnNXB4JztcblxuICB0aGlzLnRpdGxlQmFyQ29sb3JEZWZhdWx0ID0gbnVsbDtcbiAgdGhpcy50aXRsZUJhckNvbG9yRm9jdXNlZCA9IG51bGw7XG4gIHRoaXMudGl0bGVCYXJDYXB0aW9uQ29sb3JEZWZhdWx0ID0gJyc7XG4gIHRoaXMudGl0bGVCYXJDYXB0aW9uQ29sb3JGb2N1c2VkID0gJyc7XG4gIHRoaXMudGl0bGVCYXJDYXB0aW9uVGV4dFNoYWRvdyA9ICcwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsLjcpJztcbiAgdGhpcy50aXRsZUJhckNhcHRpb25UZXh0QWxpZ24gPSAnY2VudGVyJztcblxuICB0aGlzLnRpdGxlQmFyQm9yZGVyQm90dG9tRGVmYXVsdCA9ICcxcHggc29saWQgcmdiYSgwLDAsMCwwLjIpJztcbiAgdGhpcy50aXRsZUJhckJvcmRlckJvdHRvbUZvY3VzZWQgPSBudWxsO1xuXG4gIHRoaXMuZnJhbWVCb3JkZXJSYWRpdXMgPSAnNnB4JztcblxuICB0aGlzLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0ID0gJzFweCc7XG4gIHRoaXMuZnJhbWVCb3JkZXJXaWR0aEZvY3VzZWQgPSB0aGlzLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0O1xuXG4gIHRoaXMuZnJhbWVCb3JkZXJDb2xvckRlZmF1bHQgPSAncmdiYSgxLCAxLCAxLCAwLjIpJztcbiAgdGhpcy5mcmFtZUJvcmRlckNvbG9yRm9jdXNlZCA9IHRoaXMuZnJhbWVCb3JkZXJDb2xvckRlZmF1bHQ7XG5cbiAgdGhpcy5mcmFtZUJvcmRlclN0eWxlID0gJ3NvbGlkJztcbiAgdGhpcy5mcmFtZUJveFNoYWRvdyA9ICcycHggM3B4IDE2cHggcmdiYSgwLDAsMCwuNiknO1xuICB0aGlzLmZyYW1lQmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcblxuICB0aGlzLl9wYXJ0c0J1aWxkZXIgPSBudWxsO1xuXG4gIHRoaXMuZnJhbWVDb21wb25lbnRzID0gW107XG5cbiAgdGhpcy5mcmFtZUhlaWdodEFkanVzdCA9IDE7XG5cbiAgdGhpcy5yZXNpemVBcmVhV2lkdGggPSAyMDtcbiAgdGhpcy5yZXNpemVBcmVhSGVpZ2h0ID0gMjA7XG4gIHRoaXMucmVzaXplQXJlYU9mZnNldCA9IDA7XG4gIHRoaXMucmVzaXplQXJlYVZpc2libGUgPSBmYWxzZTtcblxuICB0aGlzLmdldEZyYW1lSW5uZXJCb3JkZXJSYWRpdXMgPSBmdW5jdGlvbihyZWYsIGhhc0ZvY3VzKSB7XG5cbiAgICBpZiAoIXJlZikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChoYXNGb2N1cykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZnJhbWVBcHBlYXJhbmNlOiBtZSxcbiAgICAgICAgaW5uZXJCb3JkZXJSYWRpdXM6IChwYXJzZUludChyZWYuZnJhbWVCb3JkZXJSYWRpdXMsIDEwKSAtIHBhcnNlSW50KHJlZi5mcmFtZUJvcmRlcldpZHRoRm9jdXNlZCwgMTApKSArICdweCdcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBmcmFtZUFwcGVhcmFuY2U6IG1lLFxuICAgICAgaW5uZXJCb3JkZXJSYWRpdXM6IChwYXJzZUludChyZWYuZnJhbWVCb3JkZXJSYWRpdXMsIDEwKSAtIHBhcnNlSW50KHJlZi5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCwgMTApKSArICdweCdcbiAgICB9O1xuICB9O1xuXG5cbiAgdGhpcy5vbkluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcblxuICAgIC8vQWRkIGNsb3NlIGJ1dHRvbiBpZiBuZWVkZWRcbiAgICBpZiAobWUuc2hvd0Nsb3NlQnV0dG9uKSB7XG4gICAgICB2YXIgcGFydHNCdWlsZGVyID0gbWUuZ2V0UGFydHNCdWlsZGVyKCksXG4gICAgICAgIGNyb3NzTWFyazAgPSAnXFx1Mjc0YycsXG4gICAgICAgIGNyb3NzTWFyazEgPSAnXFx1MjcxNicsXG4gICAgICAgIGNyb3NzTWFyazIgPSAnXFx1Mjc0ZSc7XG5cblxuICAgICAgdmFyIGJ0bkFwcGVhcmFuY2UgPSBwYXJ0c0J1aWxkZXIuYnVpbGRUZXh0QnV0dG9uQXBwZWFyYW5jZSgpO1xuXG4gICAgICBidG5BcHBlYXJhbmNlLnNpemUgPSAxNDtcbiAgICAgIGJ0bkFwcGVhcmFuY2UuY2FwdGlvblNoaWZ0WXB4ID0gMDtcbiAgICAgIGJ0bkFwcGVhcmFuY2UuY2FwdGlvbkZvbnRSYXRpbyA9IDEuMDtcbiAgICAgIGJ0bkFwcGVhcmFuY2UuYm9yZGVyUmFkaXVzID0gMjtcbiAgICAgIGJ0bkFwcGVhcmFuY2UuYmFja2dyb3VuZENvbG9yUHJlc3NlZCA9ICd0cmFuc3BhcmVudCc7XG4gICAgICBidG5BcHBlYXJhbmNlLmJhY2tncm91bmRDb2xvckRlZmF1bHQgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgYnRuQXBwZWFyYW5jZS5jYXB0aW9uID0gY3Jvc3NNYXJrMTtcblxuICAgICAgYnRuQXBwZWFyYW5jZS5jYXB0aW9uQ29sb3JEZWZhdWx0ID0gJ2dyYXknO1xuICAgICAgYnRuQXBwZWFyYW5jZS5jYXB0aW9uQ29sb3JGb2N1c2VkID0gJ2dyYXknO1xuICAgICAgYnRuQXBwZWFyYW5jZS5jYXB0aW9uQ29sb3JIb3ZlcmVkID0gJ3NpbHZlcic7XG4gICAgICBidG5BcHBlYXJhbmNlLmNhcHRpb25Db2xvclByZXNzZWQgPSAnYmxhY2snO1xuXG4gICAgICBidG5BcHBlYXJhbmNlLmJvcmRlcldpZHRoID0gMDtcbiAgICAgIGJ0bkFwcGVhcmFuY2UuYm9yZGVyQ29sb3JEZWZhdWx0ID0gJyNhYWFhYWEnO1xuICAgICAgYnRuQXBwZWFyYW5jZS5ib3JkZXJTdHlsZSA9ICdzb2xpZCc7XG5cbiAgICAgIHZhciBjbG9zZUJ0bkVsZSA9IHBhcnRzQnVpbGRlci5idWlsZFRleHRCdXR0b24oYnRuQXBwZWFyYW5jZSk7XG4gICAgICB2YXIgZWxlTGVmdCA9IC0xMDtcbiAgICAgIHZhciBlbGVUb3AgPSAtMTg7XG4gICAgICB2YXIgZWxlQWxpZ24gPSAnUklHSFRfVE9QJztcblxuICAgICAgLy9jbG9zZUJ1dHRvbiBpcyBhIHNwZWNpYWwgbmFtZVxuICAgICAgdmFyIGZyYW1lQ29tcG9uZW50ID0gbWUuYWRkRnJhbWVDb21wb25lbnQoJ2Nsb3NlQnV0dG9uJywgY2xvc2VCdG5FbGUsIGVsZUxlZnQsIGVsZVRvcCwgZWxlQWxpZ24pO1xuICAgIH1cbiAgfTtcblxuICB0aGlzLm9uVGl0bGVCYXJTdHlsZUluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcblxuICB9O1xuXG59XG5cblxuQ0ZyYW1lQXBwZWFyYW5jZS5wcm90b3R5cGUuZ2V0UGFydHNCdWlsZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIGlmIChtZS5fcGFydHNCdWlsZGVyID09PSBudWxsKSB7XG4gICAgbWUuX3BhcnRzQnVpbGRlciA9IG5ldyBDRG9tUGFydHNCdWlsZGVyKCk7XG4gIH1cbiAgcmV0dXJuIG1lLl9wYXJ0c0J1aWxkZXI7XG59O1xuQ0ZyYW1lQXBwZWFyYW5jZS5wcm90b3R5cGUuaW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS5vbkluaXRpYWxpemUoKTtcbn07XG5cbi8qKlxuICogIEFkZCBGcmFtZUNvbXBvbmVudCBpbnRvIGZyYW1lXG4gKiAgRnJhbWVDb21wb25lbnQgaXMgYXR0YWNoZWQgdG8gRnJhbWUgYW5kIGl0IG1vdmVzIHdpdGggRnJhbWUuXG4gKlxuICogQHBhcmFtIGlkXG4gKiBAcGFyYW0gbXlEb21FbGVtZW50IERPTSBlbGVtZW50LlxuICogQHBhcmFtIHggIFJlbGF0aXZlIHggY29vZGluYXRlIGZyb20gdGhlIHNuYXAgcG9zaXRpb24gc3BlY2lmaWVkIGJ5IGFsaWdubWVudFxuICogQHBhcmFtIHkgIFJlbGF0aXZlIHkgY29vZGluYXRlIGZyb20gdGhlIHNuYXAgcG9zaXRpb24gc3BlY2lmaWVkIGJ5IGFsaWdubWVudFxuICogQHBhcmFtIGFsaWduICdMRUZUX1RPUCcgJ0NFTlRFUl9UT1AnICdSSUdIVF9UT1AnICdMRUZUX0NFTlRFUicgJ0NFTlRFUl9DRU5URVInICdSSUdIVF9DRU5URVInICdMRUZUX0JPVFRPTScgJ0NFTlRFUl9CT1RUT00nICdSSUdIVF9CT1RUT00nXG4gKiBAcmV0dXJucyB7Q0ZyYW1lQ29tcG9uZW50fVxuICpcbiAqL1xuQ0ZyYW1lQXBwZWFyYW5jZS5wcm90b3R5cGUuYWRkRnJhbWVDb21wb25lbnQgPSBmdW5jdGlvbihpZCwgbXlEb21FbGVtZW50LCB4LCB5LCBhbGlnbiwgZXh0cmEpIHtcblxuICAvLyhpZCwgZnJhbWUsIGh0bWxFbGVtZW50LCB4LCB5LCBhbGlnbilcbiAgdmFyIGZyYW1lQ29tcG9uZW50ID0gbmV3IENGcmFtZUNvbXBvbmVudChpZCwgbXlEb21FbGVtZW50LCB4LCB5LCBhbGlnbiwgZXh0cmEpO1xuXG4gIGlmIChteURvbUVsZW1lbnQuX29uVGFrZUZvY3VzICYmIG15RG9tRWxlbWVudC5fb25SZWxlYXNlRm9jdXMpIHtcbiAgICAvL2lmIHRoaXMgRE9NIGVsZW1lbnQgaGFzIHNwZWNpYWwgbWV0aG9kIGZvciBmb2N1c1xuICAgIC8vc2V0IGZvY3VzIGNhbGxiYWNrXG4gICAgZnJhbWVDb21wb25lbnQuc2V0Rm9jdXNDYWxsYmFjayhteURvbUVsZW1lbnQuX29uVGFrZUZvY3VzLCBteURvbUVsZW1lbnQuX29uUmVsZWFzZUZvY3VzKTtcbiAgfVxuXG4gIHRoaXMuZnJhbWVDb21wb25lbnRzLnB1c2goZnJhbWVDb21wb25lbnQpO1xuXG4gIHJldHVybiBmcmFtZUNvbXBvbmVudDtcbn07XG5cblxuLy8rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstXG5cbi8qKlxuICogIEVuZCBvZiBDRnJhbWVBcHBlYXJhbmNlIGNsYXNzXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gQ0ZyYW1lQXBwZWFyYW5jZTtcbiIsIi8qKlxuICogQ0ZyYW1lQ29tcG9uZW50IGNsYXNzXG4gKiA8cD5cbiAqIFdyYXBwZWQgRE9NIGVsZW1lbnQgbGlrZSAnZGl2JyB0byBkaXNwbGF5IGFib3ZlIHRoZSBmcmFtZTxicj5cbiAqXG4gKiBleC5BbiBvYmplY3Qgc3VjaCBhcyBjbG9zZUJ1dHRvblxuICpcbiAqIEBwYXJhbSBpZFxuICogQHBhcmFtIGZyYW1lXG4gKiBAcGFyYW0gaHRtbEVsZW1lbnQgRE9NLWVsZW1lbnRcbiAqIEBwYXJhbSB4IHJlbGF0aXZlIHgtcG9zaXRpb24gaW4gdGhlIGZyYW1lIHJlc3BlY3QgdG8gYWxpZ25cbiAqIEBwYXJhbSB5IHJlbGF0aXZlIHktcG9zaXRpb24gaW4gdGhlIGZyYW1lIHJlc3BlY3QgdG8gYWxpZ25cbiAqIEBwYXJhbSBhbGlnbiByZWxhdGl2ZSBhbGlnbm1lbnQgaW4gdGhlIGZyYW1lXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQ0ZyYW1lQ29tcG9uZW50KGlkLCBodG1sRWxlbWVudCwgeCwgeSwgYWxpZ24sIGV4dHJhKSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgbWUuaWQgPSBpZDtcbiAgbWUueCA9IHg7XG4gIG1lLnkgPSB5O1xuICBtZS5mcmFtZSA9IG51bGw7XG5cbiAgbWUuX2ZvY3VzVGFraW5nQ2FsbGFiY2sgPSBudWxsO1xuICBtZS5fZm9jdXNSZWxlYXNpbmdDYWxsYWJjayA9IG51bGw7XG5cbiAgaWYgKGFsaWduKSB7XG4gICAgbWUuZnJhbWVDb21wb25lbnRBbGlnbiA9IGFsaWduO1xuICB9IGVsc2Uge1xuICAgIG1lLmZyYW1lQ29tcG9uZW50QWxpZ24gPSBDQUxJR04uTEVGVF9UT1A7XG4gIH1cbiAgbWUuaHRtbEVsZW1lbnQgPSBodG1sRWxlbWVudDtcbiAgbWUuaHRtbEVsZW1lbnQuc3R5bGUuekluZGV4ID0gNTA7XG4gIG1lLmh0bWxFbGVtZW50LnNldEF0dHJpYnV0ZSgnY29tcG9uZW50LWlkJywgaWQpO1xuXG4gIGlmIChleHRyYSAmJiBleHRyYS5jaGlsZE1lbnUpIHtcbiAgICBtZS5jaGlsZE1lbnUgPSBleHRyYS5jaGlsZE1lbnU7XG4gIH0gZWxzZSBpZiAoaHRtbEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmpzZnJhbWUtY2hpbGQtbWVudScpKSB7XG4gICAgbWUuY2hpbGRNZW51ID0gaHRtbEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmpzZnJhbWUtY2hpbGQtbWVudScpO1xuICB9XG5cbn1cblxuQ0ZyYW1lQ29tcG9uZW50LnByb3RvdHlwZS5zZXRGb2N1c0NhbGxiYWNrID0gZnVuY3Rpb24oZm9jdXNUYWtpbmdDYWxsYmFjaywgZm9jdXNSZWxlYXNpbmdDYWxsYmFjaykge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS5fZm9jdXNUYWtpbmdDYWxsYWJjayA9IGZvY3VzVGFraW5nQ2FsbGJhY2s7XG4gIG1lLl9mb2N1c1JlbGVhc2luZ0NhbGxhYmNrID0gZm9jdXNSZWxlYXNpbmdDYWxsYmFjaztcbn07XG5cbi8qKlxuICogU2V0IHBhcmVudCBmcmFtZSBvZiB0aGlzIGZyYW1lQ29tcG9uZW50XG4gKiBAcGFyYW0gZnJhbWVcbiAqL1xuQ0ZyYW1lQ29tcG9uZW50LnByb3RvdHlwZS5zZXRGcmFtZSA9IGZ1bmN0aW9uKGZyYW1lKSB7XG4gIHZhciBtZSA9IHRoaXM7XG5cbiAgbWUuZnJhbWUgPSBmcmFtZTtcbiAgbWUuaHRtbEVsZW1lbnQucGFyZW50T2JqZWN0ID0gZnJhbWU7XG4gIG1lLnVwZGF0ZUFsaWduKCk7XG59O1xuXG4vKipcbiAqIFBsYWNlIHRoZSBGcmFtZUNvbXBvbmVudCByZWxhdGl2ZSB0byB0aGUgcGFyZW50J3MgZnJhbWUuXG4gKiBSZWxvY2F0ZSByZWxhdGl2ZSB0byBwYXJlbnQgZnJhbWUgd2hlbiB3aW5kb3cgcmVzaXplIGV2ZW50IG9jY3Vyc1xuICovXG5DRnJhbWVDb21wb25lbnQucHJvdG90eXBlLnVwZGF0ZUFsaWduID0gZnVuY3Rpb24oKSB7XG5cbiAgdmFyIG1lID0gdGhpcztcblxuICB2YXIgZnJhbWVDb21wb25lbnRBbGlnbiA9IG1lLmZyYW1lQ29tcG9uZW50QWxpZ247XG5cbiAgdmFyIGZyYW1lID0gbWUuZnJhbWU7XG4gIHZhciBlbGVTdHlsZSA9IG1lLmh0bWxFbGVtZW50LnN0eWxlO1xuICBlbGVTdHlsZS51c2VyU2VsZWN0ID0gJ25vbmUnO1xuXG4gIHZhciB4ID0gbWUueDtcbiAgdmFyIHkgPSBtZS55O1xuXG4gIHZhciBmcmFtZVdpZHRoID0gZnJhbWUuZ2V0V2lkdGgoKTtcbiAgdmFyIGZyYW1lSGVpZ2h0ID0gZnJhbWUuZ2V0SGVpZ2h0KCk7XG4gIHZhciBlbGVTdHlsZVdpZHRoID0gZWxlU3R5bGUud2lkdGg7XG4gIHZhciBlbGVTdHlsZUhlaWdodCA9IGVsZVN0eWxlLmhlaWdodDtcblxuICBpZiAoQ0FMSUdOLkxFRlRfVE9QID09IGZyYW1lQ29tcG9uZW50QWxpZ24pIHtcbiAgICBlbGVTdHlsZS5sZWZ0ID0geCArICdweCc7XG4gICAgZWxlU3R5bGUudG9wID0geSArICdweCc7XG4gIH0gZWxzZSBpZiAoQ0FMSUdOLkhDRU5URVJfVE9QID09IGZyYW1lQ29tcG9uZW50QWxpZ24pIHtcbiAgICBlbGVTdHlsZS5sZWZ0ID0gKHBhcnNlSW50KGZyYW1lV2lkdGgpIC8gMiAtIHBhcnNlSW50KGVsZVN0eWxlV2lkdGgpIC8gMiArIHgpICsgJ3B4JztcbiAgICBlbGVTdHlsZS50b3AgPSB5ICsgJ3B4JztcbiAgfSBlbHNlIGlmIChDQUxJR04uUklHSFRfVE9QID09IGZyYW1lQ29tcG9uZW50QWxpZ24pIHtcbiAgICBlbGVTdHlsZS5sZWZ0ID0gKHBhcnNlSW50KGZyYW1lV2lkdGgpIC0gcGFyc2VJbnQoZWxlU3R5bGVXaWR0aCkgKyB4KSArICdweCc7XG4gICAgZWxlU3R5bGUudG9wID0geSArICdweCc7XG4gIH0gZWxzZSBpZiAoQ0FMSUdOLkxFRlRfVkNFTlRFUiA9PSBmcmFtZUNvbXBvbmVudEFsaWduKSB7XG4gICAgZWxlU3R5bGUubGVmdCA9IHggKyAncHgnO1xuICAgIGVsZVN0eWxlLnRvcCA9IChwYXJzZUludChmcmFtZUhlaWdodCkgLyAyIC0gcGFyc2VJbnQoZWxlU3R5bGVIZWlnaHQpIC8gMiArIHkpICsgJ3B4JztcbiAgfSBlbHNlIGlmIChDQUxJR04uSENFTlRFUl9WQ0VOVEVSID09IGZyYW1lQ29tcG9uZW50QWxpZ24pIHtcbiAgICBlbGVTdHlsZS5sZWZ0ID0gKHBhcnNlSW50KGZyYW1lV2lkdGgpIC8gMiAtIHBhcnNlSW50KGVsZVN0eWxlV2lkdGgpIC8gMiArIHgpICsgJ3B4JztcbiAgICBlbGVTdHlsZS50b3AgPSAocGFyc2VJbnQoZnJhbWVIZWlnaHQpIC8gMiAtIHBhcnNlSW50KGVsZVN0eWxlSGVpZ2h0KSAvIDIgKyB5KSArICdweCc7XG4gIH0gZWxzZSBpZiAoQ0FMSUdOLlJJR0hUX1ZDRU5URVIgPT0gZnJhbWVDb21wb25lbnRBbGlnbikge1xuICAgIGVsZVN0eWxlLmxlZnQgPSAocGFyc2VJbnQoZnJhbWVXaWR0aCkgLSBwYXJzZUludChlbGVTdHlsZVdpZHRoKSArIHgpICsgJ3B4JztcbiAgICBlbGVTdHlsZS50b3AgPSAocGFyc2VJbnQoZnJhbWVIZWlnaHQpIC8gMiAtIHBhcnNlSW50KGVsZVN0eWxlSGVpZ2h0KSAvIDIgKyB5KSArICdweCc7XG4gIH0gZWxzZSBpZiAoQ0FMSUdOLkxFRlRfQk9UVE9NID09IGZyYW1lQ29tcG9uZW50QWxpZ24pIHtcbiAgICBlbGVTdHlsZS5sZWZ0ID0geCArICdweCc7XG4gICAgZWxlU3R5bGUudG9wID0gKHBhcnNlSW50KGZyYW1lSGVpZ2h0KSAtIHBhcnNlSW50KGVsZVN0eWxlSGVpZ2h0KSArIHkpICsgJ3B4JztcbiAgfSBlbHNlIGlmIChDQUxJR04uSENFTlRFUl9CT1RUT00gPT0gZnJhbWVDb21wb25lbnRBbGlnbikge1xuICAgIGVsZVN0eWxlLmxlZnQgPSAocGFyc2VJbnQoZnJhbWVXaWR0aCkgLyAyIC0gcGFyc2VJbnQoZWxlU3R5bGVXaWR0aCkgLyAyICsgeCkgKyAncHgnO1xuICAgIGVsZVN0eWxlLnRvcCA9IChwYXJzZUludChmcmFtZUhlaWdodCkgLSBwYXJzZUludChlbGVTdHlsZUhlaWdodCkgKyB5KSArICdweCc7XG4gIH0gZWxzZSBpZiAoQ0FMSUdOLlJJR0hUX0JPVFRPTSA9PSBmcmFtZUNvbXBvbmVudEFsaWduKSB7XG4gICAgZWxlU3R5bGUubGVmdCA9IChwYXJzZUludChmcmFtZVdpZHRoKSAtIHBhcnNlSW50KGVsZVN0eWxlV2lkdGgpICsgeCkgKyAncHgnO1xuICAgIGVsZVN0eWxlLnRvcCA9IChwYXJzZUludChmcmFtZUhlaWdodCkgLSBwYXJzZUludChlbGVTdHlsZUhlaWdodCkgKyB5KSArICdweCc7XG4gIH1cbn07XG5cbkNGcmFtZUNvbXBvbmVudC5wcm90b3R5cGUuaGFuZGxlVGFraW5nRm9jdXMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgaWYgKG1lLl9mb2N1c1Rha2luZ0NhbGxhYmNrKSB7XG4gICAgbWUuX2ZvY3VzVGFraW5nQ2FsbGFiY2soKTtcbiAgfVxufTtcblxuQ0ZyYW1lQ29tcG9uZW50LnByb3RvdHlwZS5oYW5kbGVSZWxlYXNpbmdGb2N1cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICBpZiAobWUuX2ZvY3VzUmVsZWFzaW5nQ2FsbGFiY2spIHtcbiAgICBtZS5fZm9jdXNSZWxlYXNpbmdDYWxsYWJjaygpO1xuICB9XG59O1xuXG4vKipcbiAqIGVuZCBvZiBDRnJhbWVDb21wb25lbnQgY2xhc3NcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IENGcmFtZUNvbXBvbmVudDtcbiIsInZhciBpbmhlcml0ID0gcmVxdWlyZSgnLi4vdXRpbHMvSW5oZXJpdC5qcycpXG52YXIgQ1RleHRCdXR0b25BcHBlYXJhbmNlID0gcmVxdWlyZSgnLi9DQnV0dG9uQXBwZWFyYW5jZS5qcycpO1xuXG5pbmhlcml0KENJbWFnZUJ1dHRvbkFwcGVhcmFuY2UsIENUZXh0QnV0dG9uQXBwZWFyYW5jZSk7XG5cbmZ1bmN0aW9uIENJbWFnZUJ1dHRvbkFwcGVhcmFuY2UoKSB7XG5cblxuICB0aGlzLmltYWdlRGVmYXVsdCA9IG51bGw7XG4gIHRoaXMuaW1hZ2VIb3ZlcmVkID0gbnVsbDtcbiAgdGhpcy5pbWFnZVByZXNzZWQgPSBudWxsO1xuICB0aGlzLmltYWdlRm9jdXNlZCA9IG51bGw7XG5cbiAgdGhpcy5pbWFnZVN0b3JlID0ge307XG59XG5cbkNJbWFnZUJ1dHRvbkFwcGVhcmFuY2UucHJvdG90eXBlLl9zZXRJbWFnZSA9IGZ1bmN0aW9uKHNyYywgd2lkdGgsIGhlaWdodCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIHZhciBzdG9yZWRJbWdFbGUgPSBtZS5pbWFnZVN0b3JlW3NyY107XG5cbiAgaWYgKHN0b3JlZEltZ0VsZSkge1xuICAgIHJldHVybiBzdG9yZWRJbWdFbGU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGltZ0VsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltZ0VsZS5zcmMgPSBzcmM7XG4gICAgaWYgKHdpZHRoICYmIGhlaWdodCkge1xuICAgICAgdmFyIGltZ1dpZHRoID0gd2lkdGg7XG4gICAgICB2YXIgaW1nSGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgdmFyIGltZ1N0eWxlID0gJ21hcmdpbjowcHg7cGFkZGluZzowcHg7d2lkdGg6JyArIGltZ1dpZHRoICsgJ3B4O2hlaWdodDonICsgaW1nSGVpZ2h0ICsgJ3B4JztcbiAgICAgIGltZ0VsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgaW1nU3R5bGUpO1xuICAgIH1cbiAgICBtZS5pbWFnZVN0b3JlW3NyY10gPSBpbWdFbGU7XG5cbiAgICByZXR1cm4gaW1nRWxlO1xuICB9XG59XG5DSW1hZ2VCdXR0b25BcHBlYXJhbmNlLnByb3RvdHlwZS5zZXRTcmMgPSBmdW5jdGlvbihtb2RlbCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICBpZiAobW9kZWwuZGVmYXVsdCkge1xuICAgIG1lLmltYWdlRGVmYXVsdCA9IG1lLl9zZXRJbWFnZShtb2RlbC5kZWZhdWx0LCBtb2RlbC53aWR0aCwgbW9kZWwuaGVpZ2h0KTtcbiAgfVxuICBpZiAobW9kZWwuaG92ZXJlZCkge1xuICAgIG1lLmltYWdlSG92ZXJlZCA9IG1lLl9zZXRJbWFnZShtb2RlbC5ob3ZlcmVkLCBtb2RlbC53aWR0aCwgbW9kZWwuaGVpZ2h0KTtcbiAgfVxuICBpZiAobW9kZWwucHJlc3NlZCkge1xuICAgIG1lLmltYWdlUHJlc3NlZCA9IG1lLl9zZXRJbWFnZShtb2RlbC5wcmVzc2VkLCBtb2RlbC53aWR0aCwgbW9kZWwuaGVpZ2h0KTtcbiAgfVxuICBpZiAobW9kZWwuZm9jdXNlZCkge1xuICAgIG1lLmltYWdlRm9jdXNlZCA9IG1lLl9zZXRJbWFnZShtb2RlbC5mb2N1c2VkLCBtb2RlbC53aWR0aCwgbW9kZWwuaGVpZ2h0KTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENJbWFnZUJ1dHRvbkFwcGVhcmFuY2U7IiwiLy9leHBvcnQgeyBkZWZhdWx0IGFzIEpTRnJhbWUgfSBmcm9tICcuL0pTRnJhbWUuanMnO1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEpTRnJhbWU6IHJlcXVpcmUoJy4vSlNGcmFtZScpXG59XG5cbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUHJlc2V0U3R5bGVNYXRlcmlhbC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJyZXF1aXJlKCcuL1ByZXNldFN0eWxlTWF0ZXJpYWwuY3NzJyk7XG52YXIgT2JqZWN0QXNzaWduZXIgPSByZXF1aXJlKCcuLi8uLi91dGlscy9PYmplY3RBc3NpZ25lci5qcycpO1xuXG5cbmZ1bmN0aW9uIGdldFN0eWxlKGZBcHIsIHVzZXJQYXJhbSkge1xuXG4gIHZhciBzcmNQYXJhbSA9IHtcbiAgICBib3JkZXI6IHtcbiAgICAgIGNvbG9yOiAndHJhbnNwYXJlbnQnLFxuICAgICAgd2lkdGg6IDAsXG4gICAgICByYWRpdXM6IDYsXG5cbiAgICB9LFxuICAgIGNvbnRyb2w6IHtcbiAgICAgIG1heGltaXplV2l0aG91dFRpdGxlQmFyOiBmYWxzZSxcbiAgICAgIHJlc3RvcmVLZXk6ICdFc2NhcGUnLFxuICAgIH0sXG4gICAgdGl0bGVCYXI6IHtcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxuICAgICAgYmFja2dyb3VuZDogJ2JsYWNrJyxcbiAgICAgIGxlZnRNYXJnaW46IDIwLFxuICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgIGJ1dHRvbldpZHRoOiAzNixcbiAgICAgIGJ1dHRvbkhlaWdodDogMTYsXG4gICAgICBidXR0b25Db2xvcjogJ3doaXRlJyxcbiAgICAgIGJ1dHRvbnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGZhOiAnZmFzIGZhLXRpbWVzJyxcbiAgICAgICAgICBuYW1lOiAnY2xvc2VCdXR0b24nLFxuICAgICAgICAgIHZpc2libGU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGZhOiAnZmFyIGZhLXdpbmRvdy1tYXhpbWl6ZScsXG4gICAgICAgICAgbmFtZTogJ21heGltaXplQnV0dG9uJyxcbiAgICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmYTogJ2ZhciBmYS13aW5kb3ctcmVzdG9yZScsXG4gICAgICAgICAgbmFtZTogJ3Jlc3RvcmVCdXR0b24nLFxuICAgICAgICAgIHZpc2libGU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBmYTogJ2ZhciBmYS13aW5kb3ctbWluaW1pemUnLFxuICAgICAgICAgIG5hbWU6ICdtaW5pbWl6ZUJ1dHRvbicsXG4gICAgICAgICAgdmlzaWJsZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgZmE6ICdmYXMgZmEtY2FyZXQtdXAnLFxuICAgICAgICAgIG5hbWU6ICdkZW1pbmltaXplQnV0dG9uJyxcbiAgICAgICAgICB2aXNpYmxlOiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgIF0sXG4gICAgICBidXR0b25zT25MZWZ0OiBbXSxcbiAgICB9LFxuXG5cbiAgfTtcblxuICB2YXIgcGFyYW0gPSBzcmNQYXJhbTtcblxuICBpZiAodXNlclBhcmFtKSB7XG4gICAgLy9wYXJhbT1PYmplY3QuYXNzaWduKHt9LHNyY1BhcmFtLCB1c2VyUGFyYW0pO1xuICAgIE9iamVjdEFzc2lnbmVyLm9iamVjdEFzc2lnbihzcmNQYXJhbSwgdXNlclBhcmFtKTtcblxuICB9XG5cblxuICBmQXByLnNob3dUaXRsZUJhciA9IHRydWU7XG4gIGZBcHIuc2hvd0Nsb3NlQnV0dG9uID0gdHJ1ZTtcblxuICBmQXByLnRpdGxlQmFyQ2FwdGlvbkZvbnRTaXplID0gcGFyYW0udGl0bGVCYXIuZm9udFNpemUgKyAncHgnOy8vJzEycHgnO1xuICBmQXByLnRpdGxlQmFyQ2FwdGlvbkZvbnRXZWlnaHQgPSAnbm9ybWFsJztcbiAgZkFwci50aXRsZUJhckNhcHRpb25MZWZ0TWFyZ2luID0gcGFyYW0udGl0bGVCYXIubGVmdE1hcmdpbiArICdweCc7XG4gIGZBcHIudGl0bGVCYXJDYXB0aW9uQ29sb3JEZWZhdWx0ID0gcGFyYW0udGl0bGVCYXIuY29sb3I7XG4gIGZBcHIudGl0bGVCYXJDYXB0aW9uQ29sb3JGb2N1c2VkID0gcGFyYW0udGl0bGVCYXIuY29sb3I7XG4gIGZBcHIudGl0bGVCYXJDYXB0aW9uVGV4dFNoYWRvdyA9IG51bGw7XG4gIGZBcHIudGl0bGVCYXJDYXB0aW9uVGV4dEFsaWduID0gJ2xlZnQnO1xuXG4gIGZBcHIudGl0bGVCYXJIZWlnaHQgPSBwYXJhbS50aXRsZUJhci5oZWlnaHQgKyAncHgnOy8vICc1MHB4JztcblxuICBmQXByLnRpdGxlQmFyQ29sb3JEZWZhdWx0ID0gcGFyYW0udGl0bGVCYXIuYmFja2dyb3VuZDtcbiAgZkFwci50aXRsZUJhckNvbG9yRm9jdXNlZCA9IHBhcmFtLnRpdGxlQmFyLmJhY2tncm91bmQ7XG5cbiAgZkFwci50aXRsZUJhckJvcmRlckJvdHRvbURlZmF1bHQgPSAnc29saWQgMHB4ICNhYWFhYWEnO1xuICBmQXByLnRpdGxlQmFyQm9yZGVyQm90dG9tRm9jdXNlZCA9ICdzb2xpZCAwcHggIzE4ODNkNyc7XG5cbiAgZkFwci5mcmFtZUJvcmRlclJhZGl1cyA9IHBhcmFtLmJvcmRlci5yYWRpdXMgKyAncHgnOy8vICc2cHgnO1xuXG4gIC8vYm9yZGVyIHdpZHRoXG4gIGZBcHIuZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQgPSBwYXJhbS5ib3JkZXIud2lkdGggKyAncHgnO1xuICBmQXByLmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkID0gcGFyYW0uYm9yZGVyLndpZHRoICsgJ3B4JztcblxuXG4gIC8vYm9yZGVyIGNvbG9yXG4gIGZBcHIuZnJhbWVCb3JkZXJDb2xvckRlZmF1bHQgPSBwYXJhbS5ib3JkZXIuY29sb3I7XG4gIGZBcHIuZnJhbWVCb3JkZXJDb2xvckZvY3VzZWQgPSBwYXJhbS5ib3JkZXIuY29sb3I7XG5cbiAgZkFwci5mcmFtZUJvcmRlclN0eWxlID0gJ3NvbGlkJztcblxuICAvL3dpbmRvdyBzaGFkb3dcbiAgZkFwci5mcmFtZUJveFNoYWRvdyA9IHBhcmFtLmJvcmRlci5zaGFkb3c7Ly8nMnB4IDJweCAxMHB4ICByZ2JhKDAsIDAsIDAsIDAuNSknO1xuXG4gIGZBcHIuZnJhbWVCYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuXG4gIGZBcHIuZnJhbWVDb21wb25lbnRzID0gbmV3IEFycmF5KCk7XG5cbiAgZkFwci5mcmFtZUhlaWdodEFkanVzdCA9IDA7Ly9kZWZhdWx0IGlzIDFcblxuICBmQXByLmdldFRpdGxlQmFyU3R5bGUgPSBmdW5jdGlvbigpIHtcblxuICAgIGlmIChmQXByLmZvY3VzZWRGcmFtZU9ubHkpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlQmFyQ2xhc3NOYW1lRGVmYXVsdDogJyAnLFxuICAgICAgICB0aXRsZUJhckNsYXNzTmFtZUZvY3VzZWQ6ICcgJ1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGVCYXJDbGFzc05hbWVEZWZhdWx0OiAnICcsXG4gICAgICAgIHRpdGxlQmFyQ2xhc3NOYW1lRm9jdXNlZDogJyAnXG4gICAgICB9O1xuICAgIH1cbiAgfTtcblxuICBmQXByLm9uSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgYWxpZ25CdXR0b25zKGZBcHIsIHBhcmFtLCBmYWxzZSk7XG4gICAgYWxpZ25CdXR0b25zKGZBcHIsIHBhcmFtLCB0cnVlKTtcblxuICB9O1xuXG4gIC8vXG5cbiAgcmV0dXJuIGZBcHI7XG59XG5cbmZ1bmN0aW9uIGFsaWduQnV0dG9ucyhmQXByLCBwYXJhbSwgZnJvbUxlZnQpIHtcbiAgdmFyIHBhcnRzQnVpbGRlciA9IGZBcHIuZ2V0UGFydHNCdWlsZGVyKCk7XG4gIHZhciByYnRYID0gMDtcbiAgdmFyIGJ1dHRvbnM7XG5cbiAgaWYgKGZyb21MZWZ0KSB7XG4gICAgYnV0dG9ucyA9IHBhcmFtLnRpdGxlQmFyLmJ1dHRvbnNPbkxlZnQ7XG5cbiAgfSBlbHNlIHtcbiAgICBidXR0b25zID0gcGFyYW0udGl0bGVCYXIuYnV0dG9ucztcbiAgfVxuXG4gIGZvciAodmFyIHJidElkeCBpbiBidXR0b25zKSB7XG5cbiAgICB2YXIgcmJ0U3JjID0gYnV0dG9uc1tyYnRJZHhdO1xuXG4gICAgdmFyIHJidCA9IHBhcnRzQnVpbGRlci5idWlsZFRleHRCdXR0b25BcHBlYXJhbmNlKCk7XG5cbiAgICAvL2NhcHRpb25cbiAgICByYnQuZmEgPSByYnRTcmMuZmE7XG5cbiAgICByYnQud2lkdGggPSBwYXJhbS50aXRsZUJhci5idXR0b25XaWR0aDtcbiAgICByYnQuaGVpZ2h0ID0gcGFyYW0udGl0bGVCYXIuYnV0dG9uSGVpZ2h0O1xuXG4gICAgcmJ0LmJvcmRlclJhZGl1cyA9IDA7XG4gICAgcmJ0LmJvcmRlcldpZHRoID0gMDtcblxuICAgIHJidC5ib3JkZXJDb2xvckRlZmF1bHQgPSAnI2M2YzZjNic7XG4gICAgcmJ0LmJvcmRlckNvbG9yRm9jdXNlZCA9ICcjZmM2MTVjJztcbiAgICByYnQuYm9yZGVyQ29sb3JIb3ZlcmVkID0gcmJ0LmJvcmRlckNvbG9yRm9jdXNlZDtcbiAgICByYnQuYm9yZGVyQ29sb3JQcmVzc2VkID0gJyNlNjQ4NDInO1xuXG4gICAgcmJ0LmJvcmRlclN0eWxlRGVmYXVsdCA9ICdzb2xpZCc7XG4gICAgcmJ0LmJvcmRlclN0eWxlRm9jdXNlZCA9IHJidC5ib3JkZXJTdHlsZURlZmF1bHQ7XG4gICAgcmJ0LmJvcmRlclN0eWxlSG92ZXJlZCA9IHJidC5ib3JkZXJTdHlsZURlZmF1bHQ7XG4gICAgcmJ0LmJvcmRlclN0eWxlUHJlc3NlZCA9IHJidC5ib3JkZXJTdHlsZURlZmF1bHQ7XG5cbiAgICAvL2JhY2tncm91bmRcbiAgICByYnQuYmFja2dyb3VuZENvbG9yRGVmYXVsdCA9ICd0cmFuc3BhcmVudCc7XG4gICAgcmJ0LmJhY2tncm91bmRDb2xvckZvY3VzZWQgPSAndHJhbnNwYXJlbnQnO1xuICAgIHJidC5iYWNrZ3JvdW5kQ29sb3JIb3ZlcmVkID0gJ3RyYW5zcGFyZW50JztcbiAgICByYnQuYmFja2dyb3VuZENvbG9yUHJlc3NlZCA9ICd0cmFuc3BhcmVudCc7XG5cbiAgICB2YXIgY29sb3JzID0gZ2V0U3ViQ29sb3IocGFyYW0udGl0bGVCYXIuYnV0dG9uQ29sb3IpO1xuICAgIHJidC5jYXB0aW9uQ29sb3JEZWZhdWx0ID0gcGFyYW0udGl0bGVCYXIuYnV0dG9uQ29sb3I7XG4gICAgcmJ0LmNhcHRpb25Db2xvckZvY3VzZWQgPSBwYXJhbS50aXRsZUJhci5idXR0b25Db2xvcjtcbiAgICByYnQuY2FwdGlvbkNvbG9ySG92ZXJlZCA9IGNvbG9ycy5ob3ZlcmVkO1xuICAgIHJidC5jYXB0aW9uQ29sb3JQcmVzc2VkID0gY29sb3JzLnByZXNzZWQ7XG5cbiAgICByYnQuY2FwdGlvblNoaWZ0WXB4ID0gMDtcbiAgICByYnQuY2FwdGlvbkZvbnRSYXRpbyA9IDE7XG5cbiAgICB2YXIgcmJ0RWxlID0gcGFydHNCdWlsZGVyLmJ1aWxkVGV4dEJ1dHRvbihyYnQpO1xuXG4gICAgaWYgKHJidFNyYy52aXNpYmxlKSB7XG4gICAgICByYnRFbGUuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGZyb21MZWZ0KSB7XG4gICAgICAgIHJidFggLT0gcGFyYW0udGl0bGVCYXIuYnV0dG9uV2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByYnRYICs9IHBhcmFtLnRpdGxlQmFyLmJ1dHRvbldpZHRoO1xuICAgICAgfVxuICAgICAgcmJ0RWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgdmFyIHRpdGxlQmFySGVpZ2h0ID0gcGFyc2VJbnQoZkFwci50aXRsZUJhckhlaWdodCk7XG5cbiAgICB2YXIgcmJ0RWxlTGVmdCA9IHJidFg7XG5cbiAgICAvL2NvbXB1dGUgdmVydGljYWwgY2VudGVyXG5cbiAgICB2YXIgcmJ0RWxlVG9wID0gLXRpdGxlQmFySGVpZ2h0ICsgKHRpdGxlQmFySGVpZ2h0IC0gcmJ0LmhlaWdodCkgLyAyO1xuXG4gICAgdmFyIHJidEVsZUFsaWduO1xuICAgIGlmIChmcm9tTGVmdCkge1xuICAgICAgcmJ0RWxlQWxpZ24gPSAnTEVGVF9UT1AnO1xuICAgIH0gZWxzZSB7XG4gICAgICByYnRFbGVBbGlnbiA9ICdSSUdIVF9UT1AnO1xuICAgIH1cblxuICAgIHZhciBuZGl2O1xuICAgIGlmIChyYnRTcmMuY2hpbGRNZW51SFRNTCkge1xuXG4gICAgICBuZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBuZGl2LmlkID0gcmJ0U3JjLm5hbWUgKyAnX2NoaWxkX21lbnUnO1xuXG4gICAgICBuZGl2LmlubmVySFRNTCA9IHJidFNyYy5jaGlsZE1lbnVIVE1MO1xuICAgICAgbmRpdi5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICBuZGl2LnN0eWxlLndpZHRoID0gKHJidFNyYy5jaGlsZE1lbnVXaWR0aCA/IHJidFNyYy5jaGlsZE1lbnVXaWR0aCA6IDIwMCkgKyAncHgnO1xuICAgICAgbmRpdi5zdHlsZS50b3AgPSAocGFyc2VJbnQocmJ0RWxlLnN0eWxlLnRvcCwgMTApICsgcGFyc2VJbnQocmJ0RWxlLnN0eWxlLmhlaWdodCwgMTApIC8gMiArIHRpdGxlQmFySGVpZ2h0IC8gMikgKyAncHgnO1xuICAgICAgbmRpdi5zdHlsZS5sZWZ0ID0gcmJ0RWxlLnN0eWxlLmxlZnQ7XG4gICAgICBuZGl2LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgIHJidEVsZS5hcHBlbmRDaGlsZChuZGl2KTtcbiAgICB9XG5cblxuICAgIGZBcHIuYWRkRnJhbWVDb21wb25lbnQocmJ0U3JjLm5hbWUsIHJidEVsZSwgcmJ0RWxlTGVmdCwgcmJ0RWxlVG9wLCByYnRFbGVBbGlnbiwgeyBjaGlsZE1lbnU6IG5kaXYgfSk7XG5cbiAgICBpZiAoZnJvbUxlZnQpIHtcbiAgICAgIHJidFggKz0gcGFyYW0udGl0bGVCYXIuYnV0dG9uV2lkdGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJidFggKz0gLXBhcmFtLnRpdGxlQmFyLmJ1dHRvbldpZHRoO1xuICAgIH1cblxuICB9XG59XG5cblxuZnVuY3Rpb24gZ2V0U3ViQ29sb3IoY29sb3IpIHtcblxuICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNhbnZhcy5oZWlnaHQgPSAxO1xuICBjYW52YXMud2lkdGggPSAxO1xuICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIDEsIDEpO1xuICB2YXIgY29sb3JEYXRhID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCAxLCAxKS5kYXRhO1xuXG4gIHZhciByID0gY29sb3JEYXRhWzBdO1xuICB2YXIgZyA9IGNvbG9yRGF0YVsxXTtcbiAgdmFyIGIgPSBjb2xvckRhdGFbMl07XG4gIHZhciBhbHBoYSA9IGNvbG9yRGF0YVszXSAvIDI1NTtcbiAgdmFyIGFscGhhMiA9IGFscGhhICogMC44NTtcbiAgdmFyIGFscGhhMyA9IGFscGhhICogMC43NTtcblxuICB2YXIgcmV0ID0gJ3JnYignICsgciArICcsJyArIGcgKyAnLCcgKyBiICsgJywnICsgYWxwaGEyICsgJyknO1xuICB2YXIgcmV0MiA9ICdyZ2IoJyArIHIgKyAnLCcgKyBnICsgJywnICsgYiArICcsJyArIGFscGhhMiArICcpJztcbiAgdmFyIHJldDMgPSAncmdiKCcgKyByICsgJywnICsgZyArICcsJyArIGIgKyAnLCcgKyBhbHBoYTMgKyAnKSc7XG4gIHJldHVybiB7IHNyYzogcmV0LCBob3ZlcmVkOiByZXQyLCBwcmVzc2VkOiByZXQzIH07XG59XG5cblxubW9kdWxlLmV4cG9ydHMuZ2V0U3R5bGUgPSBnZXRTdHlsZTtcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUHJlc2V0U3R5bGVQb3B1cC5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJyZXF1aXJlKCcuL1ByZXNldFN0eWxlUG9wdXAuY3NzJyk7XG5cbmZ1bmN0aW9uIGdldFN0eWxlKGZBcHIpIHtcblxuXG4gIGZBcHIuc2hvd1RpdGxlQmFyID0gZmFsc2U7XG4gIGZBcHIuc2hvd0Nsb3NlQnV0dG9uID0gdHJ1ZTtcblxuXG4gIGZBcHIudGl0bGVCYXJDYXB0aW9uRm9udFNpemUgPSAnMTJweCc7XG4gIGZBcHIudGl0bGVCYXJDYXB0aW9uRm9udFdlaWdodCA9ICdub3JtYWwnO1xuICBmQXByLnRpdGxlQmFyQ2FwdGlvbkxlZnRNYXJnaW4gPSAnMTBweCc7XG4gIGZBcHIudGl0bGVCYXJDYXB0aW9uQ29sb3JEZWZhdWx0ID0gJyM0ZDQ5NGQnO1xuICBmQXByLnRpdGxlQmFyQ2FwdGlvbkNvbG9yRm9jdXNlZCA9ICcjNGQ0OTRkJztcblxuICBmQXByLnRpdGxlQmFySGVpZ2h0ID0gJzVweCc7XG5cbiAgZkFwci50aXRsZUJhckNvbG9yRGVmYXVsdCA9ICd3aGl0ZSc7XG4gIGZBcHIudGl0bGVCYXJDb2xvckZvY3VzZWQgPSAnd2hpdGUnO1xuXG4gIGZBcHIudGl0bGVCYXJCb3JkZXJCb3R0b21EZWZhdWx0ID0gbnVsbDtcbiAgZkFwci50aXRsZUJhckJvcmRlckJvdHRvbUZvY3VzZWQgPSBudWxsO1xuXG4gIGZBcHIuZnJhbWVCb3JkZXJSYWRpdXMgPSAnNnB4JztcblxuICAvL2JvcmRlciB3aWR0aFxuICBmQXByLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0ID0gJzFweCc7XG4gIGZBcHIuZnJhbWVCb3JkZXJXaWR0aEZvY3VzZWQgPSAnMXB4JztcblxuXG4gIC8vYm9yZGVyIGNvbG9yXG4gIGZBcHIuZnJhbWVCb3JkZXJDb2xvckRlZmF1bHQgPSAnI2FhYWFhYSc7XG4gIGZBcHIuZnJhbWVCb3JkZXJDb2xvckZvY3VzZWQgPSAnI2FhYWFhYSc7XG5cbiAgZkFwci5mcmFtZUJvcmRlclN0eWxlID0gJ3NvbGlkJztcblxuICAvL3dpbmRvdyBzaGFkb3dcbiAgZkFwci5mcmFtZUJveFNoYWRvdyA9ICcycHggMnB4IDVweCAgcmdiYSgwLCAwLCAwLCAwLjUpJztcblxuICBmQXByLmZyYW1lQmFja2dyb3VuZENvbG9yID0gJ3doaXRlJztcblxuXG4gIGZBcHIuZnJhbWVDb21wb25lbnRzID0gbmV3IEFycmF5KCk7XG5cbiAgLy9hZGp1c3RtZW50IHZhbHVlXG4gIGZBcHIuZnJhbWVIZWlnaHRBZGp1c3QgPSAyOy8vZGVmYXVsdCBpcyAxXG4gIGZBcHIuZ2V0VGl0bGVCYXJTdHlsZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKGZBcHIuZm9jdXNlZEZyYW1lT25seSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGVCYXJDbGFzc05hbWVEZWZhdWx0OiAnanNmcmFtZS1wcmVzZXQtc3R5bGUtcG9wdXAtZm9jdXNlZCcsXG4gICAgICAgIHRpdGxlQmFyQ2xhc3NOYW1lRm9jdXNlZDogJ2pzZnJhbWUtcHJlc2V0LXN0eWxlLXBvcHVwLWZvY3VzZWQnXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZUJhckNsYXNzTmFtZURlZmF1bHQ6ICdqc2ZyYW1lLXByZXNldC1zdHlsZS1wb3B1cC1kZWZhdWx0JyxcbiAgICAgICAgdGl0bGVCYXJDbGFzc05hbWVGb2N1c2VkOiAnanNmcmFtZS1wcmVzZXQtc3R5bGUtcG9wdXAtZm9jdXNlZCdcbiAgICAgIH07XG4gICAgfVxuICB9O1xuICBmQXByLm9uSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge1xuXG5cbiAgICB2YXIgcGFydHNCdWlsZGVyID0gZkFwci5nZXRQYXJ0c0J1aWxkZXIoKTtcblxuXG4gICAgLy9jb25maWd1cmUgY2xvc2UgYnV0dG9uIGFwcGVhcmFuY2VbYmVnaW5dLy8vLy8vLy8vLy8vLy9cblxuICAgIHZhciBjcm9zc01hcmswID0gJ1xcdTI3NGMnO1xuICAgIHZhciBjcm9zc01hcmsxID0gJ1xcdTI3MTYnO1xuICAgIHZhciBjcm9zc01hcmsyID0gJ1xcdTI3NGUnO1xuICAgIHZhciBDUk9TU19NQVJLID0gY3Jvc3NNYXJrMTtcblxuXG4gICAgdmFyIGNiQXByID0gcGFydHNCdWlsZGVyLmJ1aWxkVGV4dEJ1dHRvbkFwcGVhcmFuY2UoKTtcblxuICAgIGNiQXByLndpZHRoID0gMjA7XG4gICAgY2JBcHIuaGVpZ2h0ID0gMjA7XG5cblxuICAgIGNiQXByLmJvcmRlclJhZGl1cyA9IDEwO1xuICAgIGNiQXByLmJvcmRlcldpZHRoID0gMTtcblxuICAgIGNiQXByLmJvcmRlckNvbG9yRGVmYXVsdCA9ICcjY2NjY2NjJztcbiAgICBjYkFwci5ib3JkZXJDb2xvckZvY3VzZWQgPSAnI2NjY2NjYyc7XG4gICAgY2JBcHIuYm9yZGVyQ29sb3JIb3ZlcmVkID0gJyNkZGRkZGQnO1xuICAgIGNiQXByLmJvcmRlckNvbG9yUHJlc3NlZCA9ICcjZWVlZWVlJztcblxuICAgIGNiQXByLmJvcmRlclN0eWxlRGVmYXVsdCA9ICdzb2xpZCc7XG4gICAgY2JBcHIuYm9yZGVyU3R5bGVGb2N1c2VkID0gY2JBcHIuYm9yZGVyU3R5bGVEZWZhdWx0O1xuICAgIGNiQXByLmJvcmRlclN0eWxlSG92ZXJlZCA9IGNiQXByLmJvcmRlclN0eWxlRGVmYXVsdDtcbiAgICBjYkFwci5ib3JkZXJTdHlsZVByZXNzZWQgPSBjYkFwci5ib3JkZXJTdHlsZURlZmF1bHQ7XG5cbiAgICAvL2JhY2tncm91bmRcbiAgICBjYkFwci5iYWNrZ3JvdW5kQ29sb3JEZWZhdWx0ID0gJ3doaXRlJztcbiAgICBjYkFwci5iYWNrZ3JvdW5kQ29sb3JGb2N1c2VkID0gJ3doaXRlJztcbiAgICBjYkFwci5iYWNrZ3JvdW5kQ29sb3JIb3ZlcmVkID0gJyNlZWVlZWUnO1xuICAgIGNiQXByLmJhY2tncm91bmRDb2xvclByZXNzZWQgPSAnI2RkZGRkZCc7XG5cbiAgICBjYkFwci5iYWNrZ3JvdW5kQm94U2hhZG93ID0gJzJweCAycHggNXB4ICByZ2JhKDAsIDAsIDAsIDAuNSknO1xuXG4gICAgLy9jYXB0aW9uXG4gICAgY2JBcHIuY2FwdGlvbiA9IENST1NTX01BUks7XG5cbiAgICBjYkFwci5jYXB0aW9uQ29sb3JEZWZhdWx0ID0gJ2JsYWNrJztcbiAgICBjYkFwci5jYXB0aW9uQ29sb3JGb2N1c2VkID0gJ2JsYWNrJztcbiAgICBjYkFwci5jYXB0aW9uQ29sb3JIb3ZlcmVkID0gJ3doaXRlJztcbiAgICBjYkFwci5jYXB0aW9uQ29sb3JQcmVzc2VkID0gJ3doaXRlJztcblxuICAgIGNiQXByLmNhcHRpb25TaGlmdFlweCA9IDE7XG4gICAgY2JBcHIuY2FwdGlvbkZvbnRSYXRpbyA9IDAuNjtcblxuICAgIHZhciBjbG9zZUJ0bkVsZSA9IHBhcnRzQnVpbGRlci5idWlsZFRleHRCdXR0b24oY2JBcHIpO1xuICAgIHZhciBlbGVMZWZ0ID0gMTA7XG4gICAgdmFyIGVsZVRvcCA9IC02IC0gcGFyc2VJbnQoZkFwci50aXRsZUJhckhlaWdodCk7XG4gICAgdmFyIGVsZUFsaWduID0gJ1JJR0hUX1RPUCc7XG5cbiAgICAvLyAnY2xvc2VCdXR0b24nIGlzIGEgc3BlY2lhbCBuYW1lXG4gICAgZkFwci5hZGRGcmFtZUNvbXBvbmVudCgnY2xvc2VCdXR0b24nLCBjbG9zZUJ0bkVsZSwgZWxlTGVmdCwgZWxlVG9wLCBlbGVBbGlnbik7XG5cbiAgICAvL2NvbmZpZ3VyZSBjbG9zZSBidXR0b24gYXBwZWFyYW5jZVtlbmRdLy8vLy8vLy8vLy8vLy9cblxuXG4gIH07XG4gIC8vXG5cbiAgcmV0dXJuIGZBcHI7XG5cblxufVxuXG5cbm1vZHVsZS5leHBvcnRzLmdldFN0eWxlID0gZ2V0U3R5bGU7XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL1ByZXNldFN0eWxlUmVkc3RvbmUuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwicmVxdWlyZSgnLi9QcmVzZXRTdHlsZVJlZHN0b25lLmNzcycpO1xuXG5mdW5jdGlvbiBnZXRTdHlsZShmQXByKSB7XG5cbiAgZkFwci5zaG93VGl0bGVCYXIgPSB0cnVlO1xuICBmQXByLnNob3dDbG9zZUJ1dHRvbiA9IHRydWU7XG5cbiAgZkFwci50aXRsZUJhckNhcHRpb25Gb250U2l6ZSA9ICcxMnB4JztcbiAgZkFwci50aXRsZUJhckNhcHRpb25Gb250V2VpZ2h0ID0gJ25vcm1hbCc7XG4gIGZBcHIudGl0bGVCYXJDYXB0aW9uTGVmdE1hcmdpbiA9ICcxMHB4JztcbiAgZkFwci50aXRsZUJhckNhcHRpb25Db2xvckRlZmF1bHQgPSAnIzliOWE5Yic7XG4gIGZBcHIudGl0bGVCYXJDYXB0aW9uQ29sb3JGb2N1c2VkID0gJyM0ZDQ5NGQnO1xuXG4gIGZBcHIudGl0bGVCYXJIZWlnaHQgPSAnMzBweCc7XG5cbiAgZkFwci50aXRsZUJhckNvbG9yRGVmYXVsdCA9IG51bGw7XG4gIGZBcHIudGl0bGVCYXJDb2xvckZvY3VzZWQgPSBudWxsO1xuXG4gIGZBcHIudGl0bGVCYXJCb3JkZXJCb3R0b21EZWZhdWx0ID0gJ3NvbGlkIDFweCAjYWFhYWFhJztcbiAgZkFwci50aXRsZUJhckJvcmRlckJvdHRvbUZvY3VzZWQgPSAnc29saWQgMXB4ICMxODgzZDcnO1xuXG4gIGZBcHIuZnJhbWVCb3JkZXJSYWRpdXMgPSAnMHB4JztcblxuICAvL2JvcmRlciB3aWR0aFxuICBmQXByLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0ID0gJzFweCc7XG4gIGZBcHIuZnJhbWVCb3JkZXJXaWR0aEZvY3VzZWQgPSAnMXB4JztcblxuXG4gIC8vYm9yZGVyIGNvbG9yXG4gIGZBcHIuZnJhbWVCb3JkZXJDb2xvckRlZmF1bHQgPSAnI2FhYWFhYSc7XG4gIGZBcHIuZnJhbWVCb3JkZXJDb2xvckZvY3VzZWQgPSAnIzE4ODNkNyc7XG5cbiAgZkFwci5mcmFtZUJvcmRlclN0eWxlID0gJ3NvbGlkJztcblxuICAvL3dpbmRvdyBzaGFkb3dcbiAgZkFwci5mcmFtZUJveFNoYWRvdyA9IG51bGw7XG5cbiAgZkFwci5mcmFtZUJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG5cblxuICBmQXByLmZyYW1lQ29tcG9uZW50cyA9IG5ldyBBcnJheSgpO1xuXG4gIC8vYWRqdXN0bWVudCB2YWx1ZVxuICBmQXByLmZyYW1lSGVpZ2h0QWRqdXN0ID0gMDsvL2RlZmF1bHQgaXMgMVxuXG4gIGZBcHIuZ2V0VGl0bGVCYXJTdHlsZSA9IGZ1bmN0aW9uKCkge1xuXG4gICAgaWYgKGZBcHIuZm9jdXNlZEZyYW1lT25seSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGVCYXJDbGFzc05hbWVEZWZhdWx0OiAnanNmcmFtZS1wcmVzZXQtc3R5bGUtcmVkc3RvbmUtZm9jdXNlZCcsXG4gICAgICAgIHRpdGxlQmFyQ2xhc3NOYW1lRm9jdXNlZDogJ2pzZnJhbWUtcHJlc2V0LXN0eWxlLXJlZHN0b25lLWZvY3VzZWQnXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZUJhckNsYXNzTmFtZURlZmF1bHQ6ICdqc2ZyYW1lLXByZXNldC1zdHlsZS1yZWRzdG9uZS1kZWZhdWx0JyxcbiAgICAgICAgdGl0bGVCYXJDbGFzc05hbWVGb2N1c2VkOiAnanNmcmFtZS1wcmVzZXQtc3R5bGUtcmVkc3RvbmUtZm9jdXNlZCdcbiAgICAgIH07XG4gICAgfVxuICB9O1xuXG4gIGZBcHIub25Jbml0aWFsaXplID0gZnVuY3Rpb24oKSB7XG5cblxuICAgIHZhciBwYXJ0c0J1aWxkZXIgPSBmQXByLmdldFBhcnRzQnVpbGRlcigpO1xuXG5cbiAgICB7XG4gICAgICAvL2NvbmZpZ3VyZSBjbG9zZSBidXR0b24gYXBwZWFyYW5jZVtiZWdpbl0vLy8vLy8vLy8vLy8vL1xuXG4gICAgICB2YXIgQ1JPU1NfTUFSSyA9ICdcXHUyNTczJztcblxuICAgICAgdmFyIGNiQXByID0gcGFydHNCdWlsZGVyLmJ1aWxkVGV4dEJ1dHRvbkFwcGVhcmFuY2UoKTtcblxuICAgICAgY2JBcHIud2lkdGggPSA0NTtcbiAgICAgIGNiQXByLmhlaWdodCA9IDI4O1xuXG5cbiAgICAgIGNiQXByLmJvcmRlclJhZGl1cyA9IDA7XG4gICAgICBjYkFwci5ib3JkZXJXaWR0aCA9IDA7XG5cbiAgICAgIGNiQXByLmJvcmRlckNvbG9yRGVmYXVsdCA9ICcjYzZjNmM2JztcbiAgICAgIGNiQXByLmJvcmRlckNvbG9yRm9jdXNlZCA9ICcjZmM2MTVjJztcbiAgICAgIGNiQXByLmJvcmRlckNvbG9ySG92ZXJlZCA9IGNiQXByLmJvcmRlckNvbG9yRm9jdXNlZDtcbiAgICAgIGNiQXByLmJvcmRlckNvbG9yUHJlc3NlZCA9ICcjZTY0ODQyJztcblxuICAgICAgY2JBcHIuYm9yZGVyU3R5bGVEZWZhdWx0ID0gJ3NvbGlkJztcbiAgICAgIGNiQXByLmJvcmRlclN0eWxlRm9jdXNlZCA9IGNiQXByLmJvcmRlclN0eWxlRGVmYXVsdDtcbiAgICAgIGNiQXByLmJvcmRlclN0eWxlSG92ZXJlZCA9IGNiQXByLmJvcmRlclN0eWxlRGVmYXVsdDtcbiAgICAgIGNiQXByLmJvcmRlclN0eWxlUHJlc3NlZCA9IGNiQXByLmJvcmRlclN0eWxlRGVmYXVsdDtcblxuICAgICAgLy9iYWNrZ3JvdW5kXG4gICAgICBjYkFwci5iYWNrZ3JvdW5kQ29sb3JEZWZhdWx0ID0gJ3doaXRlJztcbiAgICAgIGNiQXByLmJhY2tncm91bmRDb2xvckZvY3VzZWQgPSAnd2hpdGUnO1xuICAgICAgY2JBcHIuYmFja2dyb3VuZENvbG9ySG92ZXJlZCA9ICcjZTgxMTIzJztcbiAgICAgIGNiQXByLmJhY2tncm91bmRDb2xvclByZXNzZWQgPSAnI2YxNzA3YSc7XG5cbiAgICAgIC8vY2FwdGlvblxuICAgICAgY2JBcHIuY2FwdGlvbiA9IENST1NTX01BUks7XG5cbiAgICAgIGNiQXByLmNhcHRpb25Db2xvckRlZmF1bHQgPSAnIzliOWE5Yic7XG4gICAgICBjYkFwci5jYXB0aW9uQ29sb3JGb2N1c2VkID0gJ2JsYWNrJztcbiAgICAgIGNiQXByLmNhcHRpb25Db2xvckhvdmVyZWQgPSAnd2hpdGUnO1xuICAgICAgY2JBcHIuY2FwdGlvbkNvbG9yUHJlc3NlZCA9ICd3aGl0ZSc7XG5cbiAgICAgIGNiQXByLmNhcHRpb25TaGlmdFlweCA9IDE7XG4gICAgICBjYkFwci5jYXB0aW9uRm9udFJhdGlvID0gMC42O1xuXG4gICAgICB2YXIgY2xvc2VCdG5FbGUgPSBwYXJ0c0J1aWxkZXIuYnVpbGRUZXh0QnV0dG9uKGNiQXByKTtcbiAgICAgIHZhciBlbGVMZWZ0ID0gMDtcbiAgICAgIHZhciBlbGVUb3AgPSAtcGFyc2VJbnQoZkFwci50aXRsZUJhckhlaWdodCk7XG4gICAgICB2YXIgZWxlQWxpZ24gPSAnUklHSFRfVE9QJztcblxuICAgICAgLy8gJ2Nsb3NlQnV0dG9uJyBpcyBhIHNwZWNpYWwgbmFtZVxuICAgICAgZkFwci5hZGRGcmFtZUNvbXBvbmVudCgnY2xvc2VCdXR0b24nLCBjbG9zZUJ0bkVsZSwgZWxlTGVmdCwgZWxlVG9wLCBlbGVBbGlnbik7XG5cbiAgICAgIC8vY29uZmlndXJlIGNsb3NlIGJ1dHRvbiBhcHBlYXJhbmNlW2VuZF0vLy8vLy8vLy8vLy8vL1xuICAgIH1cblxuICAgIHtcbiAgICAgIC8vY29uZmlndXJlIGNsb3NlIGJ1dHRvbiBhcHBlYXJhbmNlW2JlZ2luXS8vLy8vLy8vLy8vLy8vXG5cbiAgICAgIHZhciBNQVhJTUlaRV9NQVJLID0gJ1xcdTI2MTAnO1xuXG4gICAgICB2YXIgbWF4QXByID0gcGFydHNCdWlsZGVyLmJ1aWxkVGV4dEJ1dHRvbkFwcGVhcmFuY2UoKTtcblxuICAgICAgbWF4QXByLndpZHRoID0gNDU7XG4gICAgICBtYXhBcHIuaGVpZ2h0ID0gMjg7XG5cblxuICAgICAgbWF4QXByLmJvcmRlclJhZGl1cyA9IDA7XG4gICAgICBtYXhBcHIuYm9yZGVyV2lkdGggPSAwO1xuXG4gICAgICBtYXhBcHIuYm9yZGVyQ29sb3JEZWZhdWx0ID0gJyNjNmM2YzYnO1xuICAgICAgbWF4QXByLmJvcmRlckNvbG9yRm9jdXNlZCA9ICcjZmM2MTVjJztcbiAgICAgIG1heEFwci5ib3JkZXJDb2xvckhvdmVyZWQgPSBtYXhBcHIuYm9yZGVyQ29sb3JGb2N1c2VkO1xuICAgICAgbWF4QXByLmJvcmRlckNvbG9yUHJlc3NlZCA9ICcjZTY0ODQyJztcblxuICAgICAgbWF4QXByLmJvcmRlclN0eWxlRGVmYXVsdCA9ICdzb2xpZCc7XG4gICAgICBtYXhBcHIuYm9yZGVyU3R5bGVGb2N1c2VkID0gbWF4QXByLmJvcmRlclN0eWxlRGVmYXVsdDtcbiAgICAgIG1heEFwci5ib3JkZXJTdHlsZUhvdmVyZWQgPSBtYXhBcHIuYm9yZGVyU3R5bGVEZWZhdWx0O1xuICAgICAgbWF4QXByLmJvcmRlclN0eWxlUHJlc3NlZCA9IG1heEFwci5ib3JkZXJTdHlsZURlZmF1bHQ7XG5cbiAgICAgIC8vYmFja2dyb3VuZFxuICAgICAgbWF4QXByLmJhY2tncm91bmRDb2xvckRlZmF1bHQgPSAnd2hpdGUnO1xuICAgICAgbWF4QXByLmJhY2tncm91bmRDb2xvckZvY3VzZWQgPSAnd2hpdGUnO1xuICAgICAgbWF4QXByLmJhY2tncm91bmRDb2xvckhvdmVyZWQgPSAnI2U1ZTVlNSc7XG4gICAgICBtYXhBcHIuYmFja2dyb3VuZENvbG9yUHJlc3NlZCA9ICcjY2NjY2NjJztcblxuICAgICAgLy9jYXB0aW9uXG4gICAgICBtYXhBcHIuY2FwdGlvbiA9IE1BWElNSVpFX01BUks7XG5cbiAgICAgIG1heEFwci5jYXB0aW9uQ29sb3JEZWZhdWx0ID0gJyM5YjlhOWInO1xuICAgICAgbWF4QXByLmNhcHRpb25Db2xvckZvY3VzZWQgPSAnYmxhY2snO1xuICAgICAgbWF4QXByLmNhcHRpb25Db2xvckhvdmVyZWQgPSAnYmxhY2snO1xuICAgICAgbWF4QXByLmNhcHRpb25Db2xvclByZXNzZWQgPSAnYmxhY2snO1xuXG4gICAgICBtYXhBcHIuY2FwdGlvblNoaWZ0WXB4ID0gMTtcbiAgICAgIG1heEFwci5jYXB0aW9uRm9udFJhdGlvID0gMC41NTtcblxuICAgICAgdmFyIG1heEJ0bkVsZSA9IHBhcnRzQnVpbGRlci5idWlsZFRleHRCdXR0b24obWF4QXByKTtcbiAgICAgIHZhciBlbGVMZWZ0ID0gLTQ2O1xuICAgICAgdmFyIGVsZVRvcCA9IC1wYXJzZUludChmQXByLnRpdGxlQmFySGVpZ2h0KTtcbiAgICAgIHZhciBlbGVBbGlnbiA9ICdSSUdIVF9UT1AnO1xuXG4gICAgICAvLyAnY2xvc2VCdXR0b24nIGlzIGEgc3BlY2lhbCBuYW1lXG4gICAgICBmQXByLmFkZEZyYW1lQ29tcG9uZW50KCdtYXhpbWl6ZUJ1dHRvbicsIG1heEJ0bkVsZSwgZWxlTGVmdCwgZWxlVG9wLCBlbGVBbGlnbik7XG5cbiAgICAgIC8vY29uZmlndXJlIGNsb3NlIGJ1dHRvbiBhcHBlYXJhbmNlW2VuZF0vLy8vLy8vLy8vLy8vL1xuICAgIH1cblxuICAgIHtcbiAgICAgIC8vY29uZmlndXJlIGNsb3NlIGJ1dHRvbiBhcHBlYXJhbmNlW2JlZ2luXS8vLy8vLy8vLy8vLy8vXG5cbiAgICAgIHZhciBNSU5JTUlaRV9NQVJLID0gJ1xcdWZmM2YnO1xuXG4gICAgICB2YXIgbWluQXByID0gcGFydHNCdWlsZGVyLmJ1aWxkVGV4dEJ1dHRvbkFwcGVhcmFuY2UoKTtcblxuICAgICAgbWluQXByLndpZHRoID0gNDU7XG4gICAgICBtaW5BcHIuaGVpZ2h0ID0gMjg7XG5cblxuICAgICAgbWluQXByLmJvcmRlclJhZGl1cyA9IDA7XG4gICAgICBtaW5BcHIuYm9yZGVyV2lkdGggPSAwO1xuXG4gICAgICBtaW5BcHIuYm9yZGVyQ29sb3JEZWZhdWx0ID0gJyNjNmM2YzYnO1xuICAgICAgbWluQXByLmJvcmRlckNvbG9yRm9jdXNlZCA9ICcjZmM2MTVjJztcbiAgICAgIG1pbkFwci5ib3JkZXJDb2xvckhvdmVyZWQgPSBtaW5BcHIuYm9yZGVyQ29sb3JGb2N1c2VkO1xuICAgICAgbWluQXByLmJvcmRlckNvbG9yUHJlc3NlZCA9ICcjZTY0ODQyJztcblxuICAgICAgbWluQXByLmJvcmRlclN0eWxlRGVmYXVsdCA9ICdzb2xpZCc7XG4gICAgICBtaW5BcHIuYm9yZGVyU3R5bGVGb2N1c2VkID0gbWluQXByLmJvcmRlclN0eWxlRGVmYXVsdDtcbiAgICAgIG1pbkFwci5ib3JkZXJTdHlsZUhvdmVyZWQgPSBtaW5BcHIuYm9yZGVyU3R5bGVEZWZhdWx0O1xuICAgICAgbWluQXByLmJvcmRlclN0eWxlUHJlc3NlZCA9IG1pbkFwci5ib3JkZXJTdHlsZURlZmF1bHQ7XG5cbiAgICAgIC8vYmFja2dyb3VuZFxuICAgICAgbWluQXByLmJhY2tncm91bmRDb2xvckRlZmF1bHQgPSAnd2hpdGUnO1xuICAgICAgbWluQXByLmJhY2tncm91bmRDb2xvckZvY3VzZWQgPSAnd2hpdGUnO1xuICAgICAgbWluQXByLmJhY2tncm91bmRDb2xvckhvdmVyZWQgPSAnI2U1ZTVlNSc7XG4gICAgICBtaW5BcHIuYmFja2dyb3VuZENvbG9yUHJlc3NlZCA9ICcjY2NjY2NjJztcblxuICAgICAgLy9jYXB0aW9uXG4gICAgICBtaW5BcHIuY2FwdGlvbiA9IE1JTklNSVpFX01BUks7XG5cbiAgICAgIG1pbkFwci5jYXB0aW9uQ29sb3JEZWZhdWx0ID0gJyM5YjlhOWInO1xuICAgICAgbWluQXByLmNhcHRpb25Db2xvckZvY3VzZWQgPSAnYmxhY2snO1xuICAgICAgbWluQXByLmNhcHRpb25Db2xvckhvdmVyZWQgPSAnYmxhY2snO1xuICAgICAgbWluQXByLmNhcHRpb25Db2xvclByZXNzZWQgPSAnYmxhY2snO1xuXG4gICAgICBtaW5BcHIuY2FwdGlvblNoaWZ0WXB4ID0gLTI7XG4gICAgICBtaW5BcHIuY2FwdGlvbkZvbnRSYXRpbyA9IDAuMztcblxuICAgICAgdmFyIG1pbkJ0bkVsZSA9IHBhcnRzQnVpbGRlci5idWlsZFRleHRCdXR0b24obWluQXByKTtcbiAgICAgIHZhciBlbGVMZWZ0ID0gLTkyO1xuICAgICAgdmFyIGVsZVRvcCA9IC1wYXJzZUludChmQXByLnRpdGxlQmFySGVpZ2h0KTtcbiAgICAgIHZhciBlbGVBbGlnbiA9ICdSSUdIVF9UT1AnO1xuXG4gICAgICAvLyAnY2xvc2VCdXR0b24nIGlzIGEgc3BlY2lhbCBuYW1lXG4gICAgICBmQXByLmFkZEZyYW1lQ29tcG9uZW50KCdtaW5pbWl6ZUJ1dHRvbicsIG1pbkJ0bkVsZSwgZWxlTGVmdCwgZWxlVG9wLCBlbGVBbGlnbik7XG5cbiAgICAgIC8vY29uZmlndXJlIGNsb3NlIGJ1dHRvbiBhcHBlYXJhbmNlW2VuZF0vLy8vLy8vLy8vLy8vL1xuICAgIH1cbiAgICB7XG4gICAgICAvL2NvbmZpZ3VyZSBjbG9zZSBidXR0b24gYXBwZWFyYW5jZVtiZWdpbl0vLy8vLy8vLy8vLy8vL1xuXG5cbiAgICAgIHZhciBkZW1pbkFwciA9IHBhcnRzQnVpbGRlci5idWlsZFRleHRCdXR0b25BcHBlYXJhbmNlKCk7XG5cbiAgICAgIGRlbWluQXByLndpZHRoID0gNDU7XG4gICAgICBkZW1pbkFwci5oZWlnaHQgPSAyODtcblxuXG4gICAgICBkZW1pbkFwci5ib3JkZXJSYWRpdXMgPSAwO1xuICAgICAgZGVtaW5BcHIuYm9yZGVyV2lkdGggPSAwO1xuXG4gICAgICBkZW1pbkFwci5ib3JkZXJDb2xvckRlZmF1bHQgPSAnI2M2YzZjNic7XG4gICAgICBkZW1pbkFwci5ib3JkZXJDb2xvckZvY3VzZWQgPSAnI2ZjNjE1Yyc7XG4gICAgICBkZW1pbkFwci5ib3JkZXJDb2xvckhvdmVyZWQgPSBkZW1pbkFwci5ib3JkZXJDb2xvckZvY3VzZWQ7XG4gICAgICBkZW1pbkFwci5ib3JkZXJDb2xvclByZXNzZWQgPSAnI2U2NDg0Mic7XG5cbiAgICAgIGRlbWluQXByLmJvcmRlclN0eWxlRGVmYXVsdCA9ICdzb2xpZCc7XG4gICAgICBkZW1pbkFwci5ib3JkZXJTdHlsZUZvY3VzZWQgPSBkZW1pbkFwci5ib3JkZXJTdHlsZURlZmF1bHQ7XG4gICAgICBkZW1pbkFwci5ib3JkZXJTdHlsZUhvdmVyZWQgPSBkZW1pbkFwci5ib3JkZXJTdHlsZURlZmF1bHQ7XG4gICAgICBkZW1pbkFwci5ib3JkZXJTdHlsZVByZXNzZWQgPSBkZW1pbkFwci5ib3JkZXJTdHlsZURlZmF1bHQ7XG5cbiAgICAgIC8vYmFja2dyb3VuZFxuICAgICAgZGVtaW5BcHIuYmFja2dyb3VuZENvbG9yRGVmYXVsdCA9ICd3aGl0ZSc7XG4gICAgICBkZW1pbkFwci5iYWNrZ3JvdW5kQ29sb3JGb2N1c2VkID0gJ3doaXRlJztcbiAgICAgIGRlbWluQXByLmJhY2tncm91bmRDb2xvckhvdmVyZWQgPSAnI2U1ZTVlNSc7XG4gICAgICBkZW1pbkFwci5iYWNrZ3JvdW5kQ29sb3JQcmVzc2VkID0gJyNjY2NjY2MnO1xuXG4gICAgICAvL2NhcHRpb25cbiAgICAgIGRlbWluQXByLmNhcHRpb24gPSAnXFx1MjVBMyc7XG5cbiAgICAgIGRlbWluQXByLmNhcHRpb25Db2xvckRlZmF1bHQgPSAnIzliOWE5Yic7XG4gICAgICBkZW1pbkFwci5jYXB0aW9uQ29sb3JGb2N1c2VkID0gJ2JsYWNrJztcbiAgICAgIGRlbWluQXByLmNhcHRpb25Db2xvckhvdmVyZWQgPSAnYmxhY2snO1xuICAgICAgZGVtaW5BcHIuY2FwdGlvbkNvbG9yUHJlc3NlZCA9ICdibGFjayc7XG5cbiAgICAgIGRlbWluQXByLmNhcHRpb25TaGlmdFlweCA9IDE7XG4gICAgICBkZW1pbkFwci5jYXB0aW9uRm9udFJhdGlvID0gMC42O1xuXG4gICAgICB2YXIgZGVtaW5CdG5FbGUgPSBwYXJ0c0J1aWxkZXIuYnVpbGRUZXh0QnV0dG9uKGRlbWluQXByKTtcbiAgICAgIHZhciBlbGVMZWZ0ID0gLTkyO1xuICAgICAgdmFyIGVsZVRvcCA9IC1wYXJzZUludChmQXByLnRpdGxlQmFySGVpZ2h0KTtcbiAgICAgIHZhciBlbGVBbGlnbiA9ICdSSUdIVF9UT1AnO1xuXG4gICAgICBkZW1pbkJ0bkVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgICAvLyAnY2xvc2VCdXR0b24nIGlzIGEgc3BlY2lhbCBuYW1lXG4gICAgICBmQXByLmFkZEZyYW1lQ29tcG9uZW50KCdkZW1pbmltaXplQnV0dG9uJywgZGVtaW5CdG5FbGUsIGVsZUxlZnQsIGVsZVRvcCwgZWxlQWxpZ24pO1xuXG4gICAgICAvL2NvbmZpZ3VyZSBjbG9zZSBidXR0b24gYXBwZWFyYW5jZVtlbmRdLy8vLy8vLy8vLy8vLy9cbiAgICB9XG4gICAge1xuICAgICAgLy9jb25maWd1cmUgY2xvc2UgYnV0dG9uIGFwcGVhcmFuY2VbYmVnaW5dLy8vLy8vLy8vLy8vLy9cblxuICAgICAgdmFyIFJFU1RPUkVfTUFSSyA9ICdcXHUyNzRGJztcblxuICAgICAgdmFyIHJiQXByID0gcGFydHNCdWlsZGVyLmJ1aWxkVGV4dEJ1dHRvbkFwcGVhcmFuY2UoKTtcblxuICAgICAgcmJBcHIud2lkdGggPSA0NTtcbiAgICAgIHJiQXByLmhlaWdodCA9IDI4O1xuXG5cbiAgICAgIHJiQXByLmJvcmRlclJhZGl1cyA9IDA7XG4gICAgICByYkFwci5ib3JkZXJXaWR0aCA9IDA7XG5cbiAgICAgIHJiQXByLmJvcmRlckNvbG9yRGVmYXVsdCA9ICcjYzZjNmM2JztcbiAgICAgIHJiQXByLmJvcmRlckNvbG9yRm9jdXNlZCA9ICcjZmM2MTVjJztcbiAgICAgIHJiQXByLmJvcmRlckNvbG9ySG92ZXJlZCA9IHJiQXByLmJvcmRlckNvbG9yRm9jdXNlZDtcbiAgICAgIHJiQXByLmJvcmRlckNvbG9yUHJlc3NlZCA9ICcjZTY0ODQyJztcblxuICAgICAgcmJBcHIuYm9yZGVyU3R5bGVEZWZhdWx0ID0gJ3NvbGlkJztcbiAgICAgIHJiQXByLmJvcmRlclN0eWxlRm9jdXNlZCA9IHJiQXByLmJvcmRlclN0eWxlRGVmYXVsdDtcbiAgICAgIHJiQXByLmJvcmRlclN0eWxlSG92ZXJlZCA9IHJiQXByLmJvcmRlclN0eWxlRGVmYXVsdDtcbiAgICAgIHJiQXByLmJvcmRlclN0eWxlUHJlc3NlZCA9IHJiQXByLmJvcmRlclN0eWxlRGVmYXVsdDtcblxuICAgICAgLy9iYWNrZ3JvdW5kXG4gICAgICByYkFwci5iYWNrZ3JvdW5kQ29sb3JEZWZhdWx0ID0gJ3doaXRlJztcbiAgICAgIHJiQXByLmJhY2tncm91bmRDb2xvckZvY3VzZWQgPSAnd2hpdGUnO1xuICAgICAgcmJBcHIuYmFja2dyb3VuZENvbG9ySG92ZXJlZCA9ICcjZTVlNWU1JztcbiAgICAgIHJiQXByLmJhY2tncm91bmRDb2xvclByZXNzZWQgPSAnI2NjY2NjYyc7XG5cbiAgICAgIC8vY2FwdGlvblxuICAgICAgcmJBcHIuY2FwdGlvbiA9IFJFU1RPUkVfTUFSSztcblxuICAgICAgcmJBcHIuY2FwdGlvbkNvbG9yRGVmYXVsdCA9ICcjOWI5YTliJztcbiAgICAgIHJiQXByLmNhcHRpb25Db2xvckZvY3VzZWQgPSAnYmxhY2snO1xuICAgICAgcmJBcHIuY2FwdGlvbkNvbG9ySG92ZXJlZCA9ICdibGFjayc7XG4gICAgICByYkFwci5jYXB0aW9uQ29sb3JQcmVzc2VkID0gJ2JsYWNrJztcblxuICAgICAgcmJBcHIuY2FwdGlvblNoaWZ0WXB4ID0gMTtcbiAgICAgIHJiQXByLmNhcHRpb25Gb250UmF0aW8gPSAwLjU1O1xuXG4gICAgICB2YXIgcmVzdG9yZUJ0bkVsZSA9IHBhcnRzQnVpbGRlci5idWlsZFRleHRCdXR0b24ocmJBcHIpO1xuICAgICAgdmFyIGVsZUxlZnQgPSAtNDY7XG4gICAgICB2YXIgZWxlVG9wID0gLXBhcnNlSW50KGZBcHIudGl0bGVCYXJIZWlnaHQpO1xuICAgICAgdmFyIGVsZUFsaWduID0gJ1JJR0hUX1RPUCc7XG5cbiAgICAgIHJlc3RvcmVCdG5FbGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgLy8gJ2Nsb3NlQnV0dG9uJyBpcyBhIHNwZWNpYWwgbmFtZVxuICAgICAgZkFwci5hZGRGcmFtZUNvbXBvbmVudCgncmVzdG9yZUJ1dHRvbicsIHJlc3RvcmVCdG5FbGUsIGVsZUxlZnQsIGVsZVRvcCwgZWxlQWxpZ24pO1xuXG4gICAgICAvL2NvbmZpZ3VyZSBjbG9zZSBidXR0b24gYXBwZWFyYW5jZVtlbmRdLy8vLy8vLy8vLy8vLy9cbiAgICB9XG5cblxuICB9O1xuICAvL1xuXG4gIHJldHVybiBmQXByO1xufVxuXG5cbm1vZHVsZS5leHBvcnRzLmdldFN0eWxlID0gZ2V0U3R5bGU7XG4iLCJmdW5jdGlvbiBnZXRTdHlsZShmQXByKSB7XG5cblxuICBmQXByLnNob3dUaXRsZUJhciA9IGZhbHNlO1xuICBmQXByLnNob3dDbG9zZUJ1dHRvbiA9IHRydWU7XG5cblxuICBmQXByLnRpdGxlQmFyQ2FwdGlvbkZvbnRTaXplID0gJzBweCc7XG4gIGZBcHIudGl0bGVCYXJDYXB0aW9uRm9udFdlaWdodCA9ICdub3JtYWwnO1xuICBmQXByLnRpdGxlQmFyQ2FwdGlvbkxlZnRNYXJnaW4gPSAnMHB4JztcbiAgZkFwci50aXRsZUJhckNhcHRpb25Db2xvckRlZmF1bHQgPSAndHJhbnNwYXJlbnQnO1xuICBmQXByLnRpdGxlQmFyQ2FwdGlvbkNvbG9yRm9jdXNlZCA9ICd0cmFuc3BhcmVudCc7XG5cbiAgZkFwci50aXRsZUJhckhlaWdodCA9ICcwcHgnO1xuXG4gIGZBcHIudGl0bGVCYXJDb2xvckRlZmF1bHQgPSAndHJhbnNwYXJlbnQnO1xuICBmQXByLnRpdGxlQmFyQ29sb3JGb2N1c2VkID0gJ3RyYW5zcGFyZW50JztcblxuICBmQXByLnRpdGxlQmFyQm9yZGVyQm90dG9tRGVmYXVsdCA9IG51bGw7XG4gIGZBcHIudGl0bGVCYXJCb3JkZXJCb3R0b21Gb2N1c2VkID0gbnVsbDtcblxuICBmQXByLmZyYW1lQm9yZGVyUmFkaXVzID0gJzEwcHgnO1xuXG4gIC8vYm9yZGVyIHdpZHRoXG4gIGZBcHIuZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQgPSAnMHB4JztcbiAgZkFwci5mcmFtZUJvcmRlcldpZHRoRm9jdXNlZCA9ICcwcHgnO1xuXG4gIC8vYm9yZGVyIGNvbG9yXG4gIGZBcHIuZnJhbWVCb3JkZXJDb2xvckRlZmF1bHQgPSAndHJhbnNwYXJlbnQnO1xuICBmQXByLmZyYW1lQm9yZGVyQ29sb3JGb2N1c2VkID0gJ3RyYW5zcGFyZW50JztcbiAgZkFwci5mcmFtZUJvcmRlclN0eWxlID0gJ3NvbGlkJztcbiAgZkFwci5mcmFtZUJveFNoYWRvdyA9ICcycHggMnB4IDE1cHggIHJnYmEoMCwgMCwgMCwgMC41KSc7XG4gIGZBcHIuZnJhbWVCYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuXG5cbiAgZkFwci5mcmFtZUNvbXBvbmVudHMgPSBbXTtcbiAgZkFwci5mcmFtZUhlaWdodEFkanVzdCA9IDE7Ly9kZWZhdWx0IGlzIDFcblxuICBmQXByLmNhcHRpb25DbG9yID0gJ2RhcmtncmF5JztcblxuICBmQXByLnB1bGxVcERpc2FibGVkID0gZmFsc2U7XG5cbiAgZkFwci5nZXRUaXRsZUJhclN0eWxlID0gZnVuY3Rpb24oKSB7XG5cbiAgICBpZiAoZkFwci5mb2N1c2VkRnJhbWVPbmx5KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZUJhckNsYXNzTmFtZURlZmF1bHQ6ICcgJyxcbiAgICAgICAgdGl0bGVCYXJDbGFzc05hbWVGb2N1c2VkOiAnICdcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlQmFyQ2xhc3NOYW1lRGVmYXVsdDogJyAnLFxuICAgICAgICB0aXRsZUJhckNsYXNzTmFtZUZvY3VzZWQ6ICcgJ1xuICAgICAgfTtcbiAgICB9XG4gIH07XG5cblxuICBmQXByLm9uSW5pdGlhbGl6ZSA9IGZ1bmN0aW9uKCkge1xuXG5cbiAgICB2YXIgcGFydHNCdWlsZGVyID0gZkFwci5nZXRQYXJ0c0J1aWxkZXIoKTtcblxuXG4gICAgLy9jb25maWd1cmUgY2xvc2UgYnV0dG9uIGFwcGVhcmFuY2VbYmVnaW5dLy8vLy8vLy8vLy8vLy9cblxuICAgIHZhciBjcm9zc01hcmswID0gJ1xcdTI3NGMnO1xuICAgIHZhciBjcm9zc01hcmsxID0gJ1xcdTI3MTYnO1xuICAgIHZhciBjcm9zc01hcmsyID0gJ1xcdTI3NGUnO1xuICAgIHZhciBDUk9TU19NQVJLID0gY3Jvc3NNYXJrMTtcblxuXG4gICAgdmFyIGNiQXByID0gcGFydHNCdWlsZGVyLmJ1aWxkVGV4dEJ1dHRvbkFwcGVhcmFuY2UoKTtcblxuICAgIGNiQXByLndpZHRoID0gMjA7XG4gICAgY2JBcHIuaGVpZ2h0ID0gMjA7XG5cblxuICAgIGNiQXByLmJvcmRlclJhZGl1cyA9IDEwO1xuICAgIGNiQXByLmJvcmRlcldpZHRoID0gMDtcblxuICAgIGNiQXByLmJvcmRlckNvbG9yRGVmYXVsdCA9ICcjY2NjY2NjJztcbiAgICBjYkFwci5ib3JkZXJDb2xvckZvY3VzZWQgPSAnI2NjY2NjYyc7XG4gICAgY2JBcHIuYm9yZGVyQ29sb3JIb3ZlcmVkID0gJyNkZGRkZGQnO1xuICAgIGNiQXByLmJvcmRlckNvbG9yUHJlc3NlZCA9ICcjZWVlZWVlJztcblxuICAgIGNiQXByLmJvcmRlclN0eWxlRGVmYXVsdCA9ICdzb2xpZCc7XG4gICAgY2JBcHIuYm9yZGVyU3R5bGVGb2N1c2VkID0gY2JBcHIuYm9yZGVyU3R5bGVEZWZhdWx0O1xuICAgIGNiQXByLmJvcmRlclN0eWxlSG92ZXJlZCA9IGNiQXByLmJvcmRlclN0eWxlRGVmYXVsdDtcbiAgICBjYkFwci5ib3JkZXJTdHlsZVByZXNzZWQgPSBjYkFwci5ib3JkZXJTdHlsZURlZmF1bHQ7XG5cbiAgICAvL2JhY2tncm91bmRcbiAgICBjYkFwci5iYWNrZ3JvdW5kQ29sb3JEZWZhdWx0ID0gJ3RyYW5zcGFyZW50JztcbiAgICBjYkFwci5iYWNrZ3JvdW5kQ29sb3JGb2N1c2VkID0gJ3RyYW5zcGFyZW50JztcbiAgICBjYkFwci5iYWNrZ3JvdW5kQ29sb3JIb3ZlcmVkID0gJ3RyYW5zcGFyZW50JztcbiAgICBjYkFwci5iYWNrZ3JvdW5kQ29sb3JQcmVzc2VkID0gJ3RyYW5zcGFyZW50JztcblxuICAgIGNiQXByLmJhY2tncm91bmRCb3hTaGFkb3cgPSBudWxsOy8vICcycHggMnB4IDVweCAgcmdiYSgwLCAwLCAwLCAwLjUpJztcblxuICAgIC8vY2FwdGlvblxuICAgIGNiQXByLmNhcHRpb24gPSBDUk9TU19NQVJLO1xuXG4gICAgY2JBcHIuY2FwdGlvbkNvbG9yRGVmYXVsdCA9IGZBcHIuY2FwdGlvbkNsb3I7XG4gICAgY2JBcHIuY2FwdGlvbkNvbG9yRm9jdXNlZCA9IGZBcHIuY2FwdGlvbkNsb3I7XG4gICAgY2JBcHIuY2FwdGlvbkNvbG9ySG92ZXJlZCA9IGZBcHIuY2FwdGlvbkNsb3I7XG4gICAgY2JBcHIuY2FwdGlvbkNvbG9yUHJlc3NlZCA9IGZBcHIuY2FwdGlvbkNsb3I7XG5cbiAgICBjYkFwci5jYXB0aW9uU2hpZnRZcHggPSAxO1xuICAgIGNiQXByLmNhcHRpb25Gb250UmF0aW8gPSAwLjY7XG5cbiAgICB2YXIgY2xvc2VCdG5FbGUgPSBwYXJ0c0J1aWxkZXIuYnVpbGRUZXh0QnV0dG9uKGNiQXByKTtcbiAgICB2YXIgZWxlTGVmdCA9IC02O1xuICAgIHZhciBlbGVUb3AgPSAzO1xuICAgIHZhciBlbGVBbGlnbiA9ICdSSUdIVF9UT1AnO1xuXG4gICAgLy8gJ2Nsb3NlQnV0dG9uJyBpcyBhIHNwZWNpYWwgbmFtZVxuICAgIGZBcHIuYWRkRnJhbWVDb21wb25lbnQoJ2Nsb3NlQnV0dG9uJywgY2xvc2VCdG5FbGUsIGVsZUxlZnQsIGVsZVRvcCwgZWxlQWxpZ24pO1xuXG4gICAgLy9jb25maWd1cmUgY2xvc2UgYnV0dG9uIGFwcGVhcmFuY2VbZW5kXS8vLy8vLy8vLy8vLy8vXG5cblxuICB9O1xuICAvL1xuXG5cbiAgcmV0dXJuIGZBcHI7XG59XG5cblxubW9kdWxlLmV4cG9ydHMuZ2V0U3R5bGUgPSBnZXRTdHlsZTtcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vUHJlc2V0U3R5bGVZb3NlbWl0ZS5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJyZXF1aXJlKCcuL1ByZXNldFN0eWxlWW9zZW1pdGUuY3NzJyk7XG52YXIgT2JqZWN0QXNzaWduZXIgPSByZXF1aXJlKCcuLi8uLi91dGlscy9PYmplY3RBc3NpZ25lci5qcycpO1xuXG5mdW5jdGlvbiBnZXRTdHlsZShmQXByLCB1c2VyUGFyYW0pIHtcblxuICB2YXIgc3JjUGFyYW0gPSB7XG4gICAgdGl0bGVCYXI6IHtcbiAgICAgIGdyZWVuQnV0dG9uOiAnbWF4aW1pemUnLC8vJ21heGltaXplJyBvciAnZnVsbHNjcmVlbidcbiAgICB9XG4gIH07XG5cbiAgdmFyIHBhcmFtID0gc3JjUGFyYW07XG5cbiAgaWYgKHVzZXJQYXJhbSkge1xuICAgIC8vcGFyYW09T2JqZWN0LmFzc2lnbih7fSxzcmNQYXJhbSwgdXNlclBhcmFtKTtcbiAgICBPYmplY3RBc3NpZ25lci5vYmplY3RBc3NpZ24oc3JjUGFyYW0sIHVzZXJQYXJhbSk7XG5cbiAgfVxuXG4gIGZBcHIuc2hvd1RpdGxlQmFyID0gdHJ1ZTtcbiAgZkFwci5zaG93Q2xvc2VCdXR0b24gPSB0cnVlO1xuXG4gIGZBcHIudGl0bGVCYXJDYXB0aW9uRm9udFNpemUgPSAnMTFweCc7XG4gIGZBcHIudGl0bGVCYXJDYXB0aW9uRm9udFdlaWdodCA9ICdub3JtYWwnO1xuICBmQXByLnRpdGxlQmFyQ2FwdGlvbkxlZnRNYXJnaW4gPSBudWxsO1xuICBmQXByLnRpdGxlQmFyQ2FwdGlvbkNvbG9yRGVmYXVsdCA9ICcjNGQ0OTRkJztcbiAgZkFwci50aXRsZUJhckNhcHRpb25Db2xvckZvY3VzZWQgPSAnIzRkNDk0ZCc7XG5cbiAgZkFwci50aXRsZUJhckhlaWdodCA9ICcyNnB4JztcblxuICBmQXByLnRpdGxlQmFyQ29sb3JEZWZhdWx0ID0gbnVsbDtcbiAgZkFwci50aXRsZUJhckNvbG9yRm9jdXNlZCA9IG51bGw7XG5cbiAgZkFwci50aXRsZUJhckJvcmRlckJvdHRvbURlZmF1bHQgPSAnMXB4IHNvbGlkICNiMWFlYjEnO1xuICBmQXByLnRpdGxlQmFyQm9yZGVyQm90dG9tRm9jdXNlZCA9IGZBcHIudGl0bGVCYXJCb3JkZXJCb3R0b21EZWZhdWx0O1xuXG4gIGZBcHIuZnJhbWVCb3JkZXJSYWRpdXMgPSAnNnB4JztcblxuICAvL2JvcmRlciB3aWR0aFxuICBmQXByLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0ID0gJzFweCc7XG4gIGZBcHIuZnJhbWVCb3JkZXJXaWR0aEZvY3VzZWQgPSAnMXB4JztcblxuXG4gIC8vYm9yZGVyIGNvbG9yXG4gIGZBcHIuZnJhbWVCb3JkZXJDb2xvckRlZmF1bHQgPSAnI2FjYWNhYyc7XG4gIGZBcHIuZnJhbWVCb3JkZXJDb2xvckZvY3VzZWQgPSAnI2FjYWNhYyc7XG5cbiAgZkFwci5mcmFtZUJvcmRlclN0eWxlID0gJ3NvbGlkJztcblxuICAvL3dpbmRvdyBzaGFkb3dcbiAgZkFwci5mcmFtZUJveFNoYWRvdyA9ICcwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjMpJztcblxuICBmQXByLmZyYW1lQmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcblxuXG4gIGZBcHIuZnJhbWVDb21wb25lbnRzID0gbmV3IEFycmF5KCk7XG5cbiAgZkFwci5nZXRUaXRsZUJhclN0eWxlID0gZnVuY3Rpb24oKSB7XG5cbiAgICBpZiAoZkFwci5mb2N1c2VkRnJhbWVPbmx5KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZUJhckNsYXNzTmFtZURlZmF1bHQ6ICdqc2ZyYW1lLXByZXNldC1zdHlsZS15b3NlbWl0ZS1mb2N1c2VkJyxcbiAgICAgICAgdGl0bGVCYXJDbGFzc05hbWVGb2N1c2VkOiAnanNmcmFtZS1wcmVzZXQtc3R5bGUteW9zZW1pdGUtZm9jdXNlZCdcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlQmFyQ2xhc3NOYW1lRGVmYXVsdDogJ2pzZnJhbWUtcHJlc2V0LXN0eWxlLXlvc2VtaXRlLWRlZmF1bHQnLFxuICAgICAgICB0aXRsZUJhckNsYXNzTmFtZUZvY3VzZWQ6ICdqc2ZyYW1lLXByZXNldC1zdHlsZS15b3NlbWl0ZS1mb2N1c2VkJ1xuICAgICAgfTtcbiAgICB9XG4gIH07XG5cbiAgZkFwci5vbkluaXRpYWxpemUgPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBwYXJ0c0J1aWxkZXIgPSBmQXByLmdldFBhcnRzQnVpbGRlcigpO1xuXG4gICAgdmFyIGltZ19kYXRhX2Nsb3NlX2hvdmVyZWQgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBb0FBQUFLQ0FZQUFBQ05Ncys5QUFBQVdFbEVRVlFvVTJOa0lCSXdFcW1PQWE2d2daV2xINlNwNGZlZlFqQ054a2RSeU1qQVVQQ2Y0ZjhDa0VKR0JzYUUvd3dNRTJBYVVheHVZR1dlRDFJQVVnalMwUEQ3YnlMTWFhUXJCTG1KS0t1SjlneWhZQ0k2SEFHbEZEQUxmOXM3ZVFBQUFBQkpSVTVFcmtKZ2dnPT0nO1xuICAgIHZhciBpbWdfZGF0YV9tYXhpbWl6ZV9ob3ZlcmVkID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQW9BQUFBS0NBWUFBQUNOTXMrOUFBQUFWRWxFUVZRb1UyTmtJQkl3b3F2aml4Rm9BSWw5V3ZJQlRNTUFoa0xlR1A3OUlNblBTejQ2a3E4UVpOMS9odi8ySUJNWUdSZ01RUFIvQm9ZTEVEN2pRWkF6d0ZZVHJSRFpMZFJ4STdLSlJBY1BydkFIQUFUWUtndkxIMGZBQUFBQUFFbEZUa1N1UW1DQyc7XG4gICAgaWYgKHBhcmFtLnRpdGxlQmFyLmdyZWVuQnV0dG9uID09PSAnZnVsbHNjcmVlbicpIHtcbiAgICAgIGltZ19kYXRhX21heGltaXplX2hvdmVyZWQgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBb0FBQUFLQ0FZQUFBQ05Ncys5QUFBQVpFbEVRVlFvVTJOa0lCSXdFcW1PQVVXaFFJS0F3TDgvLy9jek1EQVl3QXo0dE9RaldBMWNJVWpSaHdVZlBxQXJ4bERJRjhOL25vbUYwUkZkTVRhRi94a1lHQzZnSy82MDVLTWhpdFY4TWZ3Z2hTQ0FvaGhrQXk2RktJcGhuaUl2ZVBDRktRRHpHenNMUys3bjJBQUFBQUJKUlU1RXJrSmdnZz09JztcbiAgICB9XG4gICAgdmFyIGltZ19kYXRhX2RlbWF4aW1pemVfaG92ZXJlZCA9ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFvQUFBQUtDQVlBQUFDTk1zKzlBQUFBaVVsRVFWUW9VMk5rd0FJRW9nUU1QaXo3Y0FGWmloR2JRdDRZL3YwTWpJd0xQeS8rc0FBbWoxTWhJd09EdzM5R3hrU1lZcndLUWFiQkZHTlZ5QmZMMS8vL1A2TUJ6RnJtZjR5RmpDQ0gvMlg2M3c5M0MrUC9DNThXZnlwRWR6dllSTjVZZ1FURy8vL25nNjFpWURqd2VjbEhSNndLa1JVVFZBaFR6UEQvZnp4ZUUyRldZUXRza0J3QUt3UTd0VmpBTDRNQUFBQUFTVVZPUks1Q1lJST0nO1xuICAgIHZhciBpbWdfZGF0YV9taW5pbWl6ZV9ob3ZlcmVkID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQW9BQUFBS0NBWUFBQUNOTXMrOUFBQUFNVWxFUVZRb1UyTmtJQkl3RXFtT2dVWUthN3c0R2hqK005aGpkUVlqdzhHV2JUOGF3RllUclpBWUQ5SElNOFJZRFFCc0VBd0xrcTRJQWdBQUFBQkpSVTVFcmtKZ2dnPT0nO1xuICAgIHZhciBpbWdfZGF0YV8xZG90X3RyYW5zcGFyZW50ID0gJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQUVBQUFBQkNBWUFBQUFmRmNTSkFBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBQkJKUkVGVWVOcGkrUC8vUHdOQWdBRUFDUHdDL3R1aVRSWUFBQUFBU1VWT1JLNUNZSUk9JztcbiAgICB2YXIgaW1nX3dpZHRoID0gMTA7XG4gICAgdmFyIGltZ19oZWlnaHQgPSAxMDtcbiAgICB2YXIgaW1nX3N0eWxlID0gJ21hcmdpbjowcHg7cGFkZGluZzowcHg7d2lkdGg6JyArIGltZ193aWR0aCArICdweDtoZWlnaHQ6JyArIGltZ19oZWlnaHQgKyAncHgnO1xuXG4gICAgdmFyIGltYWdlTWF4aW1pemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZU1heGltaXplLnNyYyA9IGltZ19kYXRhX21heGltaXplX2hvdmVyZWQ7XG4gICAgaW1hZ2VNYXhpbWl6ZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgaW1nX3N0eWxlKTtcblxuICAgIHZhciBpbWFnZURlbWF4aW1pemUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZURlbWF4aW1pemUuc3JjID0gaW1nX2RhdGFfZGVtYXhpbWl6ZV9ob3ZlcmVkO1xuICAgIGltYWdlRGVtYXhpbWl6ZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgaW1nX3N0eWxlKTtcblxuICAgIC8vIHZhciBpbWFnZUZ1bGxTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAvLyBpbWFnZUZ1bGxTY3JlZW4uc3JjID0gaW1nX2RhdGFfbWF4aW1pemVfaG92ZXJlZDtcbiAgICAvLyBpbWFnZUZ1bGxTY3JlZW4uc2V0QXR0cmlidXRlKCdzdHlsZScsIGltZ19zdHlsZSk7XG5cbiAgICB2YXIgaW1hZ2VNaW5pbWl6ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlTWluaW1pemUuc3JjID0gaW1nX2RhdGFfbWluaW1pemVfaG92ZXJlZDtcbiAgICBpbWFnZU1pbmltaXplLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBpbWdfc3R5bGUpO1xuXG4gICAgdmFyIGltYWdlQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZUNsb3NlLnNyYyA9IGltZ19kYXRhX2Nsb3NlX2hvdmVyZWQ7XG4gICAgaW1hZ2VDbG9zZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgaW1nX3N0eWxlKTtcblxuXG4gICAgdmFyIGltZ1RyYW5zcGFyZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaW1nVHJhbnNwYXJlbnQuc3JjID0gaW1nX2RhdGFfMWRvdF90cmFuc3BhcmVudDtcbiAgICBpbWdUcmFuc3BhcmVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ21hcmdpbjowcHg7cGFkZGluZzowcHg7d2lkdGg6NnB4O2hlaWdodDo2cHgnKTtcblxuICAgIHtcbiAgICAgIC8vY29uZmlndXJlIGNsb3NlIGJ1dHRvbiBhcHBlYXJhbmNlW2JlZ2luXS8vLy8vLy8vLy8vLy8vXG5cblxuICAgICAgdmFyIGNiQXByID0gcGFydHNCdWlsZGVyLmJ1aWxkSW1hZ2VCdXR0b25BcHBlYXJhbmNlKCk7XG4gICAgICBjYkFwci5pbWFnZURlZmF1bHQgPSBpbWdUcmFuc3BhcmVudDtcbiAgICAgIGNiQXByLmltYWdlSG92ZXJlZCA9IGltYWdlQ2xvc2U7XG4gICAgICBjYkFwci5pbWFnZVByZXNzZWQgPSBpbWFnZUNsb3NlO1xuICAgICAgY2JBcHIuaW1hZ2VGb2N1c2VkID0gaW1nVHJhbnNwYXJlbnQ7XG4gICAgICBjYkFwci5zaXplID0gMTA7XG5cbiAgICAgIGNiQXByLmJvcmRlclJhZGl1cyA9IDU7XG4gICAgICBjYkFwci5ib3JkZXJXaWR0aCA9IDE7XG5cbiAgICAgIGNiQXByLmJvcmRlckNvbG9yRGVmYXVsdCA9ICcjYzZjNmM2JztcbiAgICAgIGNiQXByLmJvcmRlckNvbG9yRm9jdXNlZCA9ICcjZDM1MjRlJztcbiAgICAgIGNiQXByLmJvcmRlckNvbG9ySG92ZXJlZCA9IGNiQXByLmJvcmRlckNvbG9yRm9jdXNlZDtcbiAgICAgIGNiQXByLmJvcmRlckNvbG9yUHJlc3NlZCA9ICcjZTY0ODQyJztcblxuICAgICAgY2JBcHIuYm9yZGVyU3R5bGVEZWZhdWx0ID0gJ3NvbGlkJztcbiAgICAgIGNiQXByLmJvcmRlclN0eWxlRm9jdXNlZCA9IGNiQXByLmJvcmRlclN0eWxlRGVmYXVsdDtcbiAgICAgIGNiQXByLmJvcmRlclN0eWxlSG92ZXJlZCA9IGNiQXByLmJvcmRlclN0eWxlRGVmYXVsdDtcbiAgICAgIGNiQXByLmJvcmRlclN0eWxlUHJlc3NlZCA9IGNiQXByLmJvcmRlclN0eWxlRGVmYXVsdDtcblxuICAgICAgLy9iYWNrZ3JvdW5kXG4gICAgICBjYkFwci5iYWNrZ3JvdW5kQ29sb3JEZWZhdWx0ID0gJyNkMGQwZDAnO1xuICAgICAgY2JBcHIuYmFja2dyb3VuZENvbG9yRm9jdXNlZCA9ICcjZmM2MTVjJztcbiAgICAgIGNiQXByLmJhY2tncm91bmRDb2xvckhvdmVyZWQgPSBjYkFwci5iYWNrZ3JvdW5kQ29sb3JGb2N1c2VkO1xuICAgICAgY2JBcHIuYmFja2dyb3VuZENvbG9yUHJlc3NlZCA9IGNiQXByLmJhY2tncm91bmRDb2xvckRlZmF1bHQ7XG4gICAgICBjYkFwci5zZXRTcmMoe1xuICAgICAgICBkZWZhdWx0OiBpbWdfZGF0YV8xZG90X3RyYW5zcGFyZW50LFxuICAgICAgICBmb2N1c2VkOiBpbWdfZGF0YV8xZG90X3RyYW5zcGFyZW50LFxuICAgICAgICBob3ZlcmVkOiBpbWdfZGF0YV9jbG9zZV9ob3ZlcmVkLFxuICAgICAgICBwcmVzc2VkOiBpbWdfZGF0YV9jbG9zZV9ob3ZlcmVkLFxuICAgICAgfSk7XG5cbiAgICAgIHZhciBjbG9zZUJ0bkVsZSA9IHBhcnRzQnVpbGRlci5idWlsZEJ1dHRvbihjYkFwcik7XG4gICAgICB2YXIgZWxlTGVmdCA9IDg7XG4gICAgICB2YXIgZWxlVG9wID0gLTE5O1xuICAgICAgdmFyIGVsZUFsaWduID0gJ0xFRlRfVE9QJztcblxuICAgICAgLy8gJ2Nsb3NlQnV0dG9uJyBpcyBhIHNwZWNpYWwgbmFtZVxuICAgICAgZkFwci5hZGRGcmFtZUNvbXBvbmVudChwYXJhbS5jbG9zZUJ1dHRvbk5hbWUgfHwgJ2Nsb3NlQnV0dG9uJywgY2xvc2VCdG5FbGUsIGVsZUxlZnQsIGVsZVRvcCwgZWxlQWxpZ24pO1xuXG4gICAgICAvL3ByZXBhcmUgW21pbmltaXplIGJ1dHRvbl1cbiAgICAgIHZhciBtaW5CdG5BcHIgPSBwYXJ0c0J1aWxkZXIuYnVpbGRJbWFnZUJ1dHRvbkFwcGVhcmFuY2UoY2JBcHIpO1xuICAgICAgbWluQnRuQXByLmJvcmRlckNvbG9yRGVmYXVsdCA9ICcjYzZjNmM2JztcbiAgICAgIG1pbkJ0bkFwci5ib3JkZXJDb2xvckZvY3VzZWQgPSAnI2U2YjM0Nyc7XG4gICAgICBtaW5CdG5BcHIuYm9yZGVyQ29sb3JIb3ZlcmVkID0gbWluQnRuQXByLmJvcmRlckNvbG9yRm9jdXNlZDtcbiAgICAgIG1pbkJ0bkFwci5ib3JkZXJDb2xvclByZXNzZWQgPSAnI2UxYTEyZCc7XG4gICAgICBtaW5CdG5BcHIuYmFja2dyb3VuZENvbG9yRGVmYXVsdCA9ICcjZDBkMGQwJztcbiAgICAgIG1pbkJ0bkFwci5iYWNrZ3JvdW5kQ29sb3JGb2N1c2VkID0gJyNmZGJlNDAnO1xuICAgICAgbWluQnRuQXByLmJhY2tncm91bmRDb2xvckhvdmVyZWQgPSBtaW5CdG5BcHIuYmFja2dyb3VuZENvbG9yRm9jdXNlZDtcbiAgICAgIG1pbkJ0bkFwci5iYWNrZ3JvdW5kQ29sb3JQcmVzc2VkID0gbWluQnRuQXByLmJhY2tncm91bmRDb2xvckRlZmF1bHQ7XG4gICAgICBtaW5CdG5BcHIuaW1hZ2VEZWZhdWx0ID0gaW1nVHJhbnNwYXJlbnQ7XG4gICAgICBtaW5CdG5BcHIuaW1hZ2VIb3ZlcmVkID0gaW1hZ2VNaW5pbWl6ZTtcbiAgICAgIG1pbkJ0bkFwci5pbWFnZVByZXNzZWQgPSBpbWFnZU1pbmltaXplO1xuICAgICAgbWluQnRuQXByLmltYWdlRm9jdXNlZCA9IGltZ1RyYW5zcGFyZW50O1xuXG4gICAgICB2YXIgbWluQnRuRWxlID0gcGFydHNCdWlsZGVyLmJ1aWxkQnV0dG9uKG1pbkJ0bkFwcik7XG4gICAgICB2YXIgZGVtaW5pbWl6ZUJ0bkVsZSA9IHBhcnRzQnVpbGRlci5idWlsZEJ1dHRvbihtaW5CdG5BcHIpO1xuICAgICAgZGVtaW5pbWl6ZUJ0bkVsZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdmFyIGVsZUxlZnQgPSAyODtcbiAgICAgIHZhciBlbGVUb3AgPSAtMTk7XG4gICAgICB2YXIgZWxlQWxpZ24gPSAnTEVGVF9UT1AnO1xuICAgICAgZkFwci5hZGRGcmFtZUNvbXBvbmVudCgnbWluaW1pemVCdXR0b24nLCBtaW5CdG5FbGUsIGVsZUxlZnQsIGVsZVRvcCwgZWxlQWxpZ24pO1xuICAgICAgZkFwci5hZGRGcmFtZUNvbXBvbmVudCgnZGVtaW5pbWl6ZUJ1dHRvbicsIGRlbWluaW1pemVCdG5FbGUsIGVsZUxlZnQsIGVsZVRvcCwgZWxlQWxpZ24pO1xuXG5cbiAgICAgIC8vIHByZXBhcmUgW21heGltaXplIGJ1dHRvbl1cbiAgICAgIC8vY29uZmlndXJlIHpvb20gYnV0dG9uIGFwcGVhcmFuY2VbYmVnaW5dLy8vLy8vLy8vLy8vLy9cbiAgICAgIHZhciBtYXhCdG5BcHIgPSBwYXJ0c0J1aWxkZXIuYnVpbGRJbWFnZUJ1dHRvbkFwcGVhcmFuY2UoY2JBcHIpO1xuICAgICAgbWF4QnRuQXByLmJvcmRlckNvbG9yRGVmYXVsdCA9ICcjYzZjNmM2JztcbiAgICAgIG1heEJ0bkFwci5ib3JkZXJDb2xvckZvY3VzZWQgPSAnIzY3YjY1Nyc7XG4gICAgICBtYXhCdG5BcHIuYm9yZGVyQ29sb3JIb3ZlcmVkID0gbWF4QnRuQXByLmJvcmRlckNvbG9yRm9jdXNlZDtcbiAgICAgIG1heEJ0bkFwci5ib3JkZXJDb2xvclByZXNzZWQgPSAnIzAwYWYzOCc7XG4gICAgICBtYXhCdG5BcHIuYmFja2dyb3VuZENvbG9yRGVmYXVsdCA9ICcjZDBkMGQwJztcbiAgICAgIG1heEJ0bkFwci5iYWNrZ3JvdW5kQ29sb3JGb2N1c2VkID0gJyMzNGNhNDknO1xuICAgICAgbWF4QnRuQXByLmJhY2tncm91bmRDb2xvckhvdmVyZWQgPSBtYXhCdG5BcHIuYmFja2dyb3VuZENvbG9yRm9jdXNlZDtcbiAgICAgIG1heEJ0bkFwci5iYWNrZ3JvdW5kQ29sb3JQcmVzc2VkID0gbWF4QnRuQXByLmJhY2tncm91bmRDb2xvckRlZmF1bHQ7XG4gICAgICBtYXhCdG5BcHIuaW1hZ2VEZWZhdWx0ID0gaW1nVHJhbnNwYXJlbnQ7XG4gICAgICBtYXhCdG5BcHIuaW1hZ2VIb3ZlcmVkID0gaW1hZ2VNYXhpbWl6ZTtcbiAgICAgIG1heEJ0bkFwci5pbWFnZVByZXNzZWQgPSBpbWFnZU1heGltaXplO1xuICAgICAgbWF4QnRuQXByLmltYWdlRm9jdXNlZCA9IGltZ1RyYW5zcGFyZW50O1xuXG4gICAgICB2YXIgem9vbUJ0bkVsZSA9IHBhcnRzQnVpbGRlci5idWlsZEJ1dHRvbihtYXhCdG5BcHIpO1xuXG5cbiAgICAgIHZhciBkZW1heEJ0bkFwciA9IHBhcnRzQnVpbGRlci5idWlsZEltYWdlQnV0dG9uQXBwZWFyYW5jZShjYkFwcik7XG4gICAgICBkZW1heEJ0bkFwci5ib3JkZXJDb2xvckRlZmF1bHQgPSAnI2M2YzZjNic7XG4gICAgICBkZW1heEJ0bkFwci5ib3JkZXJDb2xvckZvY3VzZWQgPSAnIzY3YjY1Nyc7XG4gICAgICBkZW1heEJ0bkFwci5ib3JkZXJDb2xvckhvdmVyZWQgPSBkZW1heEJ0bkFwci5ib3JkZXJDb2xvckZvY3VzZWQ7XG4gICAgICBkZW1heEJ0bkFwci5ib3JkZXJDb2xvclByZXNzZWQgPSAnIzAwYWYzOCc7XG4gICAgICBkZW1heEJ0bkFwci5iYWNrZ3JvdW5kQ29sb3JEZWZhdWx0ID0gJyNkMGQwZDAnO1xuICAgICAgZGVtYXhCdG5BcHIuYmFja2dyb3VuZENvbG9yRm9jdXNlZCA9ICcjMzRjYTQ5JztcbiAgICAgIGRlbWF4QnRuQXByLmJhY2tncm91bmRDb2xvckhvdmVyZWQgPSBkZW1heEJ0bkFwci5iYWNrZ3JvdW5kQ29sb3JGb2N1c2VkO1xuICAgICAgZGVtYXhCdG5BcHIuYmFja2dyb3VuZENvbG9yUHJlc3NlZCA9IGRlbWF4QnRuQXByLmJhY2tncm91bmRDb2xvckRlZmF1bHQ7XG4gICAgICBkZW1heEJ0bkFwci5pbWFnZURlZmF1bHQgPSBpbWdUcmFuc3BhcmVudDtcbiAgICAgIGRlbWF4QnRuQXByLmltYWdlSG92ZXJlZCA9IGltYWdlRGVtYXhpbWl6ZTtcbiAgICAgIGRlbWF4QnRuQXByLmltYWdlUHJlc3NlZCA9IGltYWdlRGVtYXhpbWl6ZTtcbiAgICAgIGRlbWF4QnRuQXByLmltYWdlRm9jdXNlZCA9IGltZ1RyYW5zcGFyZW50O1xuICAgICAgdmFyIGRlbWF4QnRuRWxlID0gcGFydHNCdWlsZGVyLmJ1aWxkQnV0dG9uKGRlbWF4QnRuQXByKTtcbiAgICAgIGRlbWF4QnRuRWxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgIHZhciBlbGVMZWZ0ID0gNDg7XG4gICAgICB2YXIgZWxlVG9wID0gLTE5O1xuICAgICAgdmFyIGVsZUFsaWduID0gJ0xFRlRfVE9QJztcblxuXG4gICAgICBmQXByLmFkZEZyYW1lQ29tcG9uZW50KCdkZXpvb21CdXR0b24nLCBkZW1heEJ0bkVsZSwgZWxlTGVmdCwgZWxlVG9wLCBlbGVBbGlnbik7XG4gICAgICBmQXByLmFkZEZyYW1lQ29tcG9uZW50KCd6b29tQnV0dG9uJywgem9vbUJ0bkVsZSwgZWxlTGVmdCwgZWxlVG9wLCBlbGVBbGlnbik7XG5cbiAgICAgIC8vY29uZmlndXJlIHpvb20gYnV0dG9uIGFwcGVhcmFuY2VbZW5kXS8vLy8vLy8vLy8vLy8vXG4gICAgfVxuICAgIC8vXG5cbiAgfTtcbiAgLy9cblxuICByZXR1cm4gZkFwcjtcbn1cblxubW9kdWxlLmV4cG9ydHMuZ2V0U3R5bGUgPSBnZXRTdHlsZTtcbiIsInZhciBtZXJnZURlZXBseSA9IHJlcXVpcmUoJ21lcmdlLWRlZXBseScpO1xuXG5mdW5jdGlvbiBnZXRQcmVzZXQocGFyYW0pIHtcblxuICB2YXIgcmVzdWx0ID0ge307XG4gIHJlc3VsdC5hcHBlYXJhbmNlTmFtZSA9ICd5b3NlbWl0ZSc7XG4gIHJlc3VsdC5hcHBlYXJhbmNlUGFyYW0gPSB7fTtcblxuICB2YXIgcHJlc2V0UGFyYW0gPSB7fTtcblxuICBpZiAocGFyYW0pIHtcbiAgICBwcmVzZXRQYXJhbSA9IHBhcmFtO1xuICB9XG5cbiAgdmFyIGlzRnVsbFNjcmVlbiA9IHByZXNldFBhcmFtLm1heGltaXplQnV0dG9uQmVoYXZpb3IgPT09ICdmdWxsc2NyZWVuJztcbiAgdmFyIG1pbmltaXplQnV0dG9uID0gcHJlc2V0UGFyYW0ubWluaW1pemVCdXR0b25CZWhhdmlvciA9PT0gJ21pbmltaXplJyA/ICdtaW5pbWl6ZUJ1dHRvbicgOiBudWxsO1xuICB2YXIgaGlkZUJ1dHRvbjEgPSBwcmVzZXRQYXJhbS5taW5pbWl6ZUJ1dHRvbkJlaGF2aW9yID09PSAnaGlkZScgPyAnbWluaW1pemVCdXR0b24nIDogbnVsbDtcbiAgdmFyIGhpZGVCdXR0b24yID0gcHJlc2V0UGFyYW0uY2xvc2VCdXR0b25CZWhhdmlvciA9PT0gJ2hpZGUnID8gJ2N1c3RvbS1jbG9zZS1idXR0b24nIDogbnVsbDtcbiAgdmFyIHdpbmRvd0NvbnRyb2xQYXJhbSA9IHByZXNldFBhcmFtLmNvbnRyb2w7XG5cbiAgdmFyIGNsb3NlQnV0dG9uTmFtZUJ5Q2xvc2VCdXR0b25CZWhhdmlvciA9IGhpZGVCdXR0b24yO1xuICB2YXIgY2xvc2VCdXR0b25OYW1lID0gcHJlc2V0UGFyYW0uY2xvc2VCdXR0b25OYW1lO1xuXG4gIGlmIChpc0Z1bGxTY3JlZW4pIHtcbiAgICByZXN1bHQuYXBwZWFyYW5jZVBhcmFtLnRpdGxlQmFyID0ge1xuICAgICAgZ3JlZW5CdXR0b246ICdmdWxsc2NyZWVuJywvLydtYXhpbWl6ZScgaWNvbiBvciAnZnVsbHNjcmVlbicgaWNvblxuICAgIH07XG4gIH1cbiAgLy8gU2V0IHRoaXMgdG8gJ2Nsb3NlQnV0dG9uJyB0byBhdXRvbWF0aWNhbGx5IGNsb3NlIHdoZW4gY2xpY2tpbmdcbiAgcmVzdWx0LmFwcGVhcmFuY2VQYXJhbS5jbG9zZUJ1dHRvbk5hbWUgPSBjbG9zZUJ1dHRvbk5hbWVCeUNsb3NlQnV0dG9uQmVoYXZpb3IgfHwgY2xvc2VCdXR0b25OYW1lIHx8ICdjbG9zZUJ1dHRvbic7XG5cbiAgcmVzdWx0LnNldHVwUHJlc2V0V2luZG93ID0gZnVuY3Rpb24oZnJhbWUpIHtcbiAgICB2YXIgZGVmYXVsdFdpbmRvd0NvbnRyb2xQYXJhbSA9IHtcbiAgICAgIG1heGltaXplQnV0dG9uOiAnem9vbUJ1dHRvbicsXG4gICAgICBtYXhpbWl6ZVBhcmFtOiB7XG4gICAgICAgIGZ1bGxTY3JlZW46IGlzRnVsbFNjcmVlbiwvLyB0cnVlOm1heGltaXplZCB3aXRob3V0IHRpdGxlIGJhcixmYWxzZTptYXhpbWl6ZWQgd2l0aCB0aXRsZSBiYXJcbiAgICAgICAgcmVzdG9yZUtleTogJ0VzY2FwZScsLy9TZXQga2V5IGNvZGUgZnJvbSBodHRwczovL3d3dy53My5vcmcvVFIvdWlldmVudHMtY29kZS8ja2V5Ym9hcmQta2V5LWNvZGVzXG4gICAgICB9LFxuXG4gICAgICBkZW1heGltaXplQnV0dG9uOiAnZGV6b29tQnV0dG9uJyxcbiAgICAgIGRlbWluaW1pemVCdXR0b246ICdkZW1pbmltaXplQnV0dG9uJyxcbiAgICAgIG1pbmltaXplQnV0dG9uOiBtaW5pbWl6ZUJ1dHRvbixcbiAgICAgIGhpZGVCdXR0b25zOiBbaGlkZUJ1dHRvbjEsIGhpZGVCdXR0b24yXSxcbiAgICAgIGhpZGVQYXJhbToge1xuICAgICAgICBhbGlnbjogJ0NFTlRFUl9DRU5URVInLC8vQUJTT0xVVEU6SWYgeW91IHdhbnQgdGhlIHdpbmRvdyB0byBkaXNhcHBlYXIgYWZ0ZXIgdHJhbnNpdGlvbmluZyB0byB0aGUgcG9zaXRpb24geW91IHNwZWNpZmllZFxuXG4gICAgICAgIGR1cmF0aW9uOiAzMDBcbiAgICAgIH0sXG4gICAgICBkZWhpZGVQYXJhbToge1xuICAgICAgICBkdXJhdGlvbjogMzAwXG4gICAgICB9LFxuICAgICAgc3R5bGVEaXNwbGF5OiAnaW5saW5lJyxcbiAgICAgIGFuaW1hdGlvbjogdHJ1ZSxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAxMDAsLy9UaGUgd2hvbGUgYW5pbWF0aW9uIGR1cmF0aW9uKG1pbGxpc2VjKVxuICAgIH07XG5cbiAgICBpZiAod2luZG93Q29udHJvbFBhcmFtKSB7XG4gICAgICBtZXJnZURlZXBseSh7IG9wOiAnb3ZlcndyaXRlLW1lcmdlJywgb2JqZWN0MTogZGVmYXVsdFdpbmRvd0NvbnRyb2xQYXJhbSwgb2JqZWN0Mjogd2luZG93Q29udHJvbFBhcmFtIH0pO1xuICAgIH1cblxuICAgIGZyYW1lLnNldENvbnRyb2woZGVmYXVsdFdpbmRvd0NvbnRyb2xQYXJhbSk7XG4gIH07XG4gIHJldHVybiByZXN1bHQ7XG59XG5cblxubW9kdWxlLmV4cG9ydHMuZ2V0UHJlc2V0V2luZG93ID0gZ2V0UHJlc2V0O1xuIiwidmFyIENUaW1lciA9IHJlcXVpcmUoJy4vQ1RpbWVyLmpzJyk7XG5cbi8qKlxuICogQ1NpbXBsZUxheW91dEFuaW1hdG9yIGNsYXNzXG4gKiBDbGFzcyBmb3IgbW92aW5nIGFuaW1hdGlvbiDCtyBzY2FsaW5nIGFuaW1hdGlvbiBvZiBmcmFtZS5cbiAqIDxwPlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIENTaW1wbGVMYXlvdXRBbmltYXRvcigpIHtcblxuICB0aGlzLmZwcyA9IDMwO1xuICB0aGlzLmR1cmF0aW9uTWlsbGlzID0gMjAwO1xuICB0aGlzLnRhcmdldEZyYW1lID0gbnVsbDtcblxuICB0aGlzLl9jcnJBbHBoYSA9IDEuMDtcbiAgdGhpcy5fdG9BbHBoYSA9IDEuMDtcblxuICAvL2N1cnJlbnQgd2lkdGgvaGVpZ2h0XG4gIHRoaXMuX2NycldpZHRoID0gMDtcbiAgdGhpcy5fY3JySGVpZ2h0ID0gMDtcbiAgdGhpcy5fdG9XaWR0aCA9IDA7XG4gIHRoaXMuX3RvSGVpZ2h0ID0gMDtcblxuICAvL2N1cnJlbnQgcG9zaXRpb24oeCx5KVxuICAvL3RoaXMuX2NyclggPSAwO1xuICAvL3RoaXMuX2NyclkgPSAwO1xuICB0aGlzLl90b1ggPSAwO1xuICB0aGlzLl90b1kgPSAwO1xuXG5cbiAgdGhpcy5waW5uZWRBbmltYXRpb25FbmFibGVkID0gZmFsc2U7XG4gIHRoaXMuX3BpblggPSAwO1xuICB0aGlzLl9waW5ZID0gMDtcbiAgdGhpcy5fcGluQW5jaG9yID0gbnVsbDtcblxufVxuXG4vKipcbiAqIFNldCBDSUZyYW1lIG9iamVjdCB0byBiZSByZXNpemVkXG4gKiBAcGFyYW0gY2lmcmFtZVxuICogQHJldHVybnMgeyp9XG4gKi9cbkNTaW1wbGVMYXlvdXRBbmltYXRvci5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oY2lmcmFtZSkge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS50YXJnZXRGcmFtZSA9IGNpZnJhbWU7XG5cblxuICBtZS5mcm9tV2lkdGgoY2lmcmFtZS5nZXRXaWR0aCgpKTtcbiAgbWUuZnJvbUhlaWdodChjaWZyYW1lLmdldEhlaWdodCgpKTtcblxuICBtZS50b1dpZHRoKGNpZnJhbWUuZ2V0V2lkdGgoKSk7XG4gIG1lLnRvSGVpZ2h0KGNpZnJhbWUuZ2V0SGVpZ2h0KCkpO1xuXG4gIHZhciBjcnJQb3MgPSBjaWZyYW1lLmdldFBvc2l0aW9uKCk7XG5cbiAgbWUuZnJvbVBvc2l0aW9uKGNyclBvcy54LCBjcnJQb3MueSwgY3JyUG9zLmFuY2hvcik7XG5cblxuICByZXR1cm4gbWU7XG5cbn07XG5cbi8qKlxuICogR2V0IENJRnJhbWUgb2JqZWN0XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgcmV0dXJuIG1lLnRhcmdldEZyYW1lO1xufTtcblxuLyoqXG4gKiBTZXQgYW5pbWF0aW9uIGR1cmF0aW9uIHRpbWUgbWlsbGlzXG4gKiBAcGFyYW0gZHVyYXRpb25NaWxsaXNcbiAqIEByZXR1cm5zIHsqfVxuICovXG5DU2ltcGxlTGF5b3V0QW5pbWF0b3IucHJvdG90eXBlLnNldER1cmF0aW9uID0gZnVuY3Rpb24oZHVyYXRpb25NaWxsaXMpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICBtZS5kdXJhdGlvbk1pbGxpcyA9IGR1cmF0aW9uTWlsbGlzO1xuICByZXR1cm4gbWU7XG59O1xuXG4vKipcbiAqIFNldCBleHBlY3RlZCBGUFNcbiAqIEBwYXJhbSBmcHNcbiAqIEByZXR1cm5zIHsqfVxuICovXG5DU2ltcGxlTGF5b3V0QW5pbWF0b3IucHJvdG90eXBlLnNldEZQUyA9IGZ1bmN0aW9uKGZwcykge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS5mcHMgPSBmcHM7XG4gIHJldHVybiBtZTtcbn07XG5cbi8qKlxuICogU2V0IFBJTiBwb3NpdGlvblxuICogQHBhcmFtIHhcbiAqIEBwYXJhbSB5XG4gKiBAcGFyYW0gYW5jaG9yIFBvc2l0aW9uIHdoZXJlIGFuaW1hdGlvbiBzdGFydHMgZnJvbS5FeHBlY3RlZCBwYXJhbWV0ZXJzIGFzIGZvbGxvd3MuXG4gJ0xFRlRfVE9QJzpEZWZhdWx0LlNwZWNpZnkgdGhlIHBvc2l0aW9uIHN0YXJ0aW5nIGZyb20gdGhlIHVwcGVyIGxlZnQuXG4gJ0NFTlRFUl9UT1AnXG4gJ1JJR0hUX1RPUCdcbiAnTEVGVF9DRU5URVInXG4gJ0NFTlRFUl9DRU5URVInXG4gJ1JJR0hUX0NFTlRFUidcbiAnTEVGVF9CT1RUT00nXG4gJ0NFTlRFUl9CT1RUT00nXG4gJ1JJR0hUX0JPVFRPTSdcbiAqIEByZXR1cm5zIHsqfVxuICovXG5DU2ltcGxlTGF5b3V0QW5pbWF0b3IucHJvdG90eXBlLmZyb21Qb3NpdGlvbiA9IGZ1bmN0aW9uKHgsIHksIGFuY2hvcikge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS5waW5uZWRBbmltYXRpb25FbmFibGVkID0gdHJ1ZTtcblxuICBtZS5fcGluWCA9IHg7XG4gIG1lLl9waW5ZID0geTtcblxuICBtZS50b1Bvc2l0aW9uKHgsIHkpO1xuXG4gIGlmIChhbmNob3IpIHtcbiAgICBtZS5fcGluQW5jaG9yID0gYW5jaG9yO1xuICB9XG4gIHJldHVybiBtZTtcbn07XG4vKipcbiAqIFNldCByZXNpemVGcm9tIHdpZHRoXG4gKiBAcGFyYW0gZnJvbVdpZHRoXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS5mcm9tV2lkdGggPSBmdW5jdGlvbihmcm9tV2lkdGgpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgbWUuX2NycldpZHRoID0gZnJvbVdpZHRoO1xuXG4gIHJldHVybiBtZTtcbn07XG5cbi8qKlxuICogU2V0IHJlc2l6ZUZyb20gaGVpZ2h0XG4gKiBAcGFyYW0gZnJvbUhlaWdodFxuICogQHJldHVybnMgeyp9XG4gKi9cbkNTaW1wbGVMYXlvdXRBbmltYXRvci5wcm90b3R5cGUuZnJvbUhlaWdodCA9IGZ1bmN0aW9uKGZyb21IZWlnaHQpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgbWUuX2NyckhlaWdodCA9IGZyb21IZWlnaHQ7XG5cbiAgcmV0dXJuIG1lO1xufTtcblxuLyoqXG4gKiBTZXQgcmVzaXplVG8gd2lkdGhcbiAqIEBwYXJhbSB0b1dpZHRoXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS50b1dpZHRoID0gZnVuY3Rpb24odG9XaWR0aCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS5fdG9XaWR0aCA9IHRvV2lkdGg7XG5cbiAgcmV0dXJuIG1lO1xufTtcblxuLyoqXG4gKiBTZXQgcmVzaXplVG8gaGVpZ2h0XG4gKiBAcGFyYW0gdG9IZWlnaHRcbiAqIEByZXR1cm5zIHsqfVxuICovXG5DU2ltcGxlTGF5b3V0QW5pbWF0b3IucHJvdG90eXBlLnRvSGVpZ2h0ID0gZnVuY3Rpb24odG9IZWlnaHQpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgbWUuX3RvSGVpZ2h0ID0gdG9IZWlnaHQ7XG4gIHJldHVybiBtZTtcbn07XG5cbi8qKlxuICogU2V0IGZyb20gYWxwaGFcbiAqIEBwYXJhbSBmcm9tQWxwaGFcbiAqIEByZXR1cm5zIHsqfVxuICovXG5DU2ltcGxlTGF5b3V0QW5pbWF0b3IucHJvdG90eXBlLmZyb21BbHBoYSA9IGZ1bmN0aW9uKGZyb21BbHBoYSkge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS5fY3JyQWxwaGEgPSBmcm9tQWxwaGE7XG5cbiAgcmV0dXJuIG1lO1xufTtcblxuLyoqXG4gKiBTZXQgdG8gYWxwaGFcbiAqIEBwYXJhbSB0b0FscGhhXG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS50b0FscGhhID0gZnVuY3Rpb24odG9BbHBoYSkge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS5fdG9BbHBoYSA9IHRvQWxwaGE7XG5cbiAgcmV0dXJuIG1lO1xufTtcblxuLyoqXG4gKiBHZXQgQ0lGcmFtZSBvYmplY3RcbiAqIEByZXR1cm5zIHsqfVxuICovXG5DU2ltcGxlTGF5b3V0QW5pbWF0b3IucHJvdG90eXBlLmVhc2UgPSBmdW5jdGlvbihlYXNlKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIG1lLl9lYXNlPWVhc2U7XG4gIHJldHVybiBtZTtcbn07XG5cbi8qKlxuICogU2V0IG1vdmUgdG8gcG9zaXRpb25cbiAqIEBwYXJhbSB4XG4gKiBAcGFyYW0geVxuICogQHJldHVybnMgeyp9XG4gKi9cbkNTaW1wbGVMYXlvdXRBbmltYXRvci5wcm90b3R5cGUudG9Qb3NpdGlvbiA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgbWUuX3RvWCA9IHg7XG4gIG1lLl90b1kgPSB5O1xuICByZXR1cm4gbWU7XG59O1xuXG4vKipcbiAqIFNldCBtb3ZlIHRvIHhcbiAqIEBwYXJhbSB4XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS50b1ggPSBmdW5jdGlvbih4KSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIG1lLl90b1ggPSB4O1xuICByZXR1cm4gbWU7XG59O1xuXG4vKipcbiAqIFNldCBtb3ZlIHRvIHlcbiAqIEBwYXJhbSB0XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuQ1NpbXBsZUxheW91dEFuaW1hdG9yLnByb3RvdHlwZS50b1kgPSBmdW5jdGlvbih0KSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIG1lLl90b1kgPSB0O1xuICByZXR1cm4gbWU7XG59O1xuXG5cbkNTaW1wbGVMYXlvdXRBbmltYXRvci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbih3YWl0TWlsbGlzLCByZXF1ZXN0Rm9jdXNFbmFibGVkKSB7XG5cblxuICB2YXIgbWUgPSB0aGlzO1xuXG4gIHZhciBmcm9tV2lkdGggPSBtZS5fY3JyV2lkdGg7XG4gIHZhciBmcm9tSGVpZ2h0ID0gbWUuX2NyckhlaWdodDtcblxuICB2YXIgZnJvbVggPSBtZS5fcGluWDtcbiAgdmFyIGZyb21ZID0gbWUuX3Bpblk7XG5cbiAgdmFyIGZyb21BbHBoYSA9IG1lLl9jcnJBbHBoYTtcblxuXG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblxuXG4gICAgdmFyIG51bU9mU3RlcHMgPSBwYXJzZUludChtZS5mcHMgKiAobWUuZHVyYXRpb25NaWxsaXMgLyAxMDAwKSk7XG4gICAgaWYgKG51bU9mU3RlcHMgPT0gMCkge1xuICAgICAgbnVtT2ZTdGVwcyA9IDE7XG4gICAgfVxuXG4gICAgdmFyIGRlbHRhV2lkdGggPSAobWUuX3RvV2lkdGggLSBmcm9tV2lkdGgpIC8gbnVtT2ZTdGVwcztcbiAgICB2YXIgZGVsdGFIZWlnaHQgPSAobWUuX3RvSGVpZ2h0IC0gZnJvbUhlaWdodCkgLyBudW1PZlN0ZXBzO1xuXG4gICAgdmFyIGRlbHRhWCA9IChtZS5fdG9YIC0gZnJvbVgpIC8gbnVtT2ZTdGVwcztcbiAgICB2YXIgZGVsdGFZID0gKG1lLl90b1kgLSBmcm9tWSkgLyBudW1PZlN0ZXBzO1xuXG4gICAgdmFyIGRlbHRhQWxwaGEgPSAobWUuX3RvQWxwaGEgLSBmcm9tQWxwaGEpIC8gbnVtT2ZTdGVwcztcbiAgICBpZihtZS5fZWFzZSl7XG4gICAgICBkZWx0YUFscGhhPWRlbHRhQWxwaGEvMS4yNDtcbiAgICB9XG5cbiAgICB2YXIgdW5pdE1pbGxpcyA9IG1lLmR1cmF0aW9uTWlsbGlzIC8gbnVtT2ZTdGVwcztcblxuICAgIHZhciBpZHggPSAwO1xuXG5cbiAgICBmdW5jdGlvbiBsb29wKCkge1xuICAgICAgdmFyIHRpbWVyID0gbmV3IENUaW1lcigpO1xuXG4gICAgICB0aW1lci5zZXRJbnRlcnZhbE1pbGxpcyh1bml0TWlsbGlzKTtcblxuICAgICAgdGltZXIuc2V0Q2FsbGJhY2soZnVuY3Rpb24odGltZXIpIHtcblxuICAgICAgICBpZiAoaWR4ID09IG51bU9mU3RlcHMpIHtcblxuICAgICAgICAgIHZhciBfd2lkdGggPSBtZS5fdG9XaWR0aDtcbiAgICAgICAgICB2YXIgX2hlaWdodCA9IG1lLl90b0hlaWdodDtcblxuICAgICAgICAgIHZhciBfeCA9IGZyb21YICsgZGVsdGFYICogaWR4O1xuICAgICAgICAgIHZhciBfeSA9IGZyb21ZICsgZGVsdGFZICogaWR4O1xuXG4gICAgICAgICAgdmFyIF9hbHBoYSA9IG1lLl90b0FscGhhO1xuXG4gICAgICAgICAgaWYgKG1lLnBpbm5lZEFuaW1hdGlvbkVuYWJsZWQpIHtcbiAgICAgICAgICAgIC8vbWUudGFyZ2V0RnJhbWUuX3NldFBvc2l0aW9uSW50ZXJuYWxseShtZS5fcGluWCwgbWUuX3BpblksIG1lLl9waW5BbmNob3IsIF93aWR0aCwgX2hlaWdodCk7XG5cbiAgICAgICAgICAgIG1lLnRhcmdldEZyYW1lLl9zZXRQb3NpdGlvbkludGVybmFsbHkoX3gsIF95LCBtZS5fcGluQW5jaG9yLCBfd2lkdGgsIF9oZWlnaHQpO1xuICAgICAgICAgIH1cblxuXG4gICAgICAgICAgaWYgKG1lLnRhcmdldEZyYW1lLmh0bWxFbGVtZW50LnN0eWxlKSB7XG4gICAgICAgICAgICBtZS50YXJnZXRGcmFtZS5odG1sRWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gX2FscGhhO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vbWUudGFyZ2V0RnJhbWUucmVzaXplRGlyZWN0KF93aWR0aCwgX2hlaWdodCxmYWxzZSk7XG4gICAgICAgICAgbWUudGFyZ2V0RnJhbWUuc2V0U2l6ZShfd2lkdGgsIF9oZWlnaHQsIHRydWUpO1xuXG4gICAgICAgICAgbWUuX2NycldpZHRoID0gX3dpZHRoO1xuICAgICAgICAgIG1lLl9jcnJIZWlnaHQgPSBfaGVpZ2h0O1xuXG4gICAgICAgICAgbWUuX3BpblggPSBfeDtcbiAgICAgICAgICBtZS5fcGluWSA9IF95O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlkeCA9PSAobnVtT2ZTdGVwcyArIDEpKSB7XG4gICAgICAgICAgLy9TdG9wIHRpbWVyIGFmdGVyIGxhc3QgZHJhdyB1cGRhdGUuXG4gICAgICAgICAgdGltZXIuc3RvcFRpbWVyKCk7XG5cbiAgICAgICAgICBpZiAobWUudGFyZ2V0RnJhbWUuaHRtbEVsZW1lbnQuc3R5bGUpIHtcbiAgICAgICAgICAgIG1lLnRhcmdldEZyYW1lLmh0bWxFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBtZS5fdG9BbHBoYTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzb2x2ZShtZSk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cblxuICAgICAgICB2YXIgX3dpZHRoID0gZnJvbVdpZHRoICsgZGVsdGFXaWR0aCAqIGlkeDtcbiAgICAgICAgdmFyIF9oZWlnaHQgPSBmcm9tSGVpZ2h0ICsgZGVsdGFIZWlnaHQgKiBpZHg7XG5cbiAgICAgICAgdmFyIF94ID0gZnJvbVggKyBkZWx0YVggKiBpZHg7XG4gICAgICAgIHZhciBfeSA9IGZyb21ZICsgZGVsdGFZICogaWR4O1xuXG4gICAgICAgIHZhciBfYWxwaGEgPSBmcm9tQWxwaGEgKyBkZWx0YUFscGhhICogaWR4O1xuXG4gICAgICAgIGlmIChtZS5waW5uZWRBbmltYXRpb25FbmFibGVkKSB7XG4gICAgICAgICAgLy9tZS50YXJnZXRGcmFtZS5fc2V0UG9zaXRpb25JbnRlcm5hbGx5KG1lLl9waW5YLCBtZS5fcGluWSwgbWUuX3BpbkFuY2hvciwgX3dpZHRoLCBfaGVpZ2h0KTtcbiAgICAgICAgICBtZS50YXJnZXRGcmFtZS5fc2V0UG9zaXRpb25JbnRlcm5hbGx5KF94LCBfeSwgbWUuX3BpbkFuY2hvciwgX3dpZHRoLCBfaGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZS50YXJnZXRGcmFtZS5odG1sRWxlbWVudC5zdHlsZSkge1xuICAgICAgICAgIG1lLnRhcmdldEZyYW1lLmh0bWxFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBfYWxwaGE7XG4gICAgICAgIH1cblxuICAgICAgICAvL21lLnRhcmdldEZyYW1lLnJlc2l6ZURpcmVjdChfd2lkdGgsIF9oZWlnaHQsZmFsc2UpO1xuICAgICAgICBtZS50YXJnZXRGcmFtZS5zZXRTaXplKF93aWR0aCwgX2hlaWdodCwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKGlkeCA9PSAwKSB7XG5cbiAgICAgICAgICAvL2NoZWNrIHdpbmRvdyBleGlzdGVuY2VcbiAgICAgICAgICB2YXIgd21nciA9IG1lLnRhcmdldEZyYW1lLnBhcmVudENhbnZhcztcbiAgICAgICAgICBpZiAod21ncikge1xuICAgICAgICAgICAgdmFyIF90YXJnZXRGcmFtZSA9IHdtZ3IuZ2V0V2luZG93KG1lLnRhcmdldEZyYW1lLmlkKTtcbiAgICAgICAgICAgIGlmIChfdGFyZ2V0RnJhbWUpIHtcbiAgICAgICAgICAgICAgbWUudGFyZ2V0RnJhbWUuc2hvdyh7IHJlcXVlc3RGb2N1czogcmVxdWVzdEZvY3VzRW5hYmxlZCB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vdGhlIHRhcmdldCB3aW5kb3cgbXVzdCBiZSBkZWxldGVkLlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlkeCsrO1xuICAgICAgfSk7XG5cblxuICAgICAgdGltZXIuc3RhcnRUaW1lcigpO1xuICAgIH1cblxuICAgIGlmICh3YWl0TWlsbGlzKSB7XG5cbiAgICAgIHZhciB3YWl0ZXIgPSBuZXcgQ1RpbWVyKCk7XG4gICAgICB3YWl0ZXIuc2V0SW50ZXJ2YWxNaWxsaXMod2FpdE1pbGxpcyk7XG4gICAgICB3YWl0ZXIuc2V0Q2FsbGJhY2soZnVuY3Rpb24oX3RpbWVyKSB7XG4gICAgICAgIF90aW1lci5zdG9wVGltZXIoKTtcblxuICAgICAgICBsb29wKCk7XG4gICAgICB9KTtcbiAgICAgIHdhaXRlci5zdGFydFRpbWVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvb3AoKTtcbiAgICB9XG5cblxuICB9KTtcblxufTsvL3N0YXJ0XG5cbi8qKlxuICogZW5kIG9mIENTaW1wbGVMYXlvdXRBbmltYXRvciBjbGFzc1xuICovXG4vLystKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy1cblxuXG5tb2R1bGUuZXhwb3J0cyA9IENTaW1wbGVMYXlvdXRBbmltYXRvcjtcbiIsIi8qKlxuICogQ1RpbWVyIGNsYXNzPGJyPlxuICpcbiAqIEhvdyB0byB1c2U6XG4gKiAgdmFyIHRpbWVyID0gbmV3IENUaW1lcigpO1xuICogICAgdmFyIHZhbHVlID0gMDtcbiAqXG4gKiAgICB0aW1lci5zZXRDYWxsYmFjayhmdW5jdGlvbiAodGltZXJPYmopIHtcbiAqICAgICAgICB2YWx1ZSsrO1xuICogICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAqICAgICAgICBpZiAodmFsdWUgPT0gMTAwKSB7XG4gKiAgICAgICAgICAgIHRpbWVyT2JqLnN0b3BUaW1lcigpO1xuICogICAgICAgIH1cbiAqICAgIH0pO1xuICogICAgdGltZXIuc2V0SW50ZXJ2YWxNaWxsaXMoMTAwKTtcbiAqICAgIHRpbWVyLnN0YXJ0VGltZXIoKTtcbiAqXG4gKiBAYXV0aG9yIFRvbSBNaXNhd2EgKHJpdmVyc3VuLm9yZ0BnbWFpbC5jb20pXG4gKi9cbnZhciBDVGltZXIgPVxuICAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gQ1RpbWVyKCkge1xuICAgICAgdmFyIG1lID0gdGhpcztcblxuICAgICAgbWUuX3RpbWVySWQgPSBudWxsO1xuICAgICAgbWUuX2lzUnVubmluZyA9IGZhbHNlO1xuICAgICAgbWUuX3RpbWVySW50ZXJ2YWwgPSAwO1xuXG4gICAgICBtZS5faW50ZXJuYWxDYWxsYmFjayA9IF9pbnRlcm5hbENhbGxiYWNrO1xuICAgICAgbWUuX3RpbWVyTWV0aG9kID0gbnVsbDtcblxuXG4gICAgICBmdW5jdGlvbiBfaW50ZXJuYWxDYWxsYmFjaygpIHtcbiAgICAgICAgaWYgKG1lLl90aW1lck1ldGhvZCkge1xuICAgICAgICAgIG1lLl90aW1lck1ldGhvZChtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1lLl9pc1J1bm5pbmcpIHtcbiAgICAgICAgICBjbGVhclRpbWVvdXQobWUuX3RpbWVySWQpO1xuICAgICAgICAgIG1lLl90aW1lcklkID0gc2V0VGltZW91dChtZS5faW50ZXJuYWxDYWxsYmFjaywgbWUuX3RpbWVySW50ZXJ2YWwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQ1RpbWVyLnByb3RvdHlwZS5zZXRDYWxsYmFjayA9IGZ1bmN0aW9uKGNhbGxiYWNrX2Z1bmMpIHtcbiAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICBtZS5fdGltZXJNZXRob2QgPSBjYWxsYmFja19mdW5jO1xuICAgICAgcmV0dXJuIG1lO1xuICAgIH07XG5cbiAgICBDVGltZXIucHJvdG90eXBlLnNldEludGVydmFsTWlsbGlzID0gZnVuY3Rpb24oaW50ZXJ2YWwpIHtcbiAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICBtZS5fdGltZXJJbnRlcnZhbCA9IGludGVydmFsO1xuICAgICAgcmV0dXJuIG1lO1xuICAgIH07XG5cbiAgICBDVGltZXIucHJvdG90eXBlLnN0b3BUaW1lciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgIG1lLl9pc1J1bm5pbmcgPSBmYWxzZTtcbiAgICAgIHJldHVybiBtZTtcbiAgICB9O1xuXG4gICAgQ1RpbWVyLnByb3RvdHlwZS5zdGFydFRpbWVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgaWYgKG1lLl90aW1lckludGVydmFsID4gMCkge1xuICAgICAgICBtZS5fdGltZXJJZCA9IHNldFRpbWVvdXQobWUuX2ludGVybmFsQ2FsbGJhY2ssIG1lLl90aW1lckludGVydmFsKTtcbiAgICAgICAgbWUuX2lzUnVubmluZyA9IHRydWU7XG5cbiAgICAgIH1cbiAgICAgIHJldHVybiBtZTtcbiAgICB9O1xuXG5cbiAgICByZXR1cm4gQ1RpbWVyO1xuICB9KSgpO1xuLyoqXG4gKiBlbmQgb2YgQ1RpbWVyIGNsYXNzXG4gKi9cbi8vKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLVxubW9kdWxlLmV4cG9ydHMgPSBDVGltZXI7XG4iLCIvKipcbiAqIEluaGVyaXRhbmNlIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHN1YkNsYXNzXG4gKiBAcGFyYW0gYmFzZUNsYXNzXG4gKi9cbmZ1bmN0aW9uIGluaGVyaXQoc3ViQ2xhc3MsIGJhc2VDbGFzcykge1xuXG4gIGZ1bmN0aW9uIGNsYXp6KCkge1xuICB9XG5cbiAgY2xhenoucHJvdG90eXBlID0gYmFzZUNsYXNzLnByb3RvdHlwZTtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gbmV3IGNsYXp6KCk7XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7XG4gIHN1YkNsYXNzLnN1cGVyQ29uc3RydWN0b3IgPSBiYXNlQ2xhc3M7XG4gIHN1YkNsYXNzLnN1cGVyQ2xhc3MgPSBiYXNlQ2xhc3MucHJvdG90eXBlO1xuXG59XG5cbi8qKlxuICogRW5kIG9mIGluaGVyaXRhbmNlIGZ1bmN0aW9uXG4gKi9cblxuLy8rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstKy0rLSstXG5cbm1vZHVsZS5leHBvcnRzID0gaW5oZXJpdDsiLCJ2YXIgX3R5cGVvZiA9XG4gICAgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCJcbiAgICAgICAgPyBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICAgICAgfVxuICAgICAgICA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIHJldHVybiBvYmogJiZcbiAgICAgICAgICAgIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJlxuICAgICAgICAgICAgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiZcbiAgICAgICAgICAgIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZVxuICAgICAgICAgICAgICAgID8gXCJzeW1ib2xcIlxuICAgICAgICAgICAgICAgIDogdHlwZW9mIG9iajtcbiAgICAgICAgfTtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KGl0ZW0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICBpdGVtICYmXG4gICAgICAgICh0eXBlb2YgaXRlbSA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGl0ZW0pKSA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgICAhQXJyYXkuaXNBcnJheShpdGVtKVxuICAgICk7XG59XG5cbmZ1bmN0aW9uIG9iamVjdEFzc2lnbih0YXJnZXQpIHtcbiAgICBmb3IgKFxuICAgICAgICB2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICAgICAgICBzb3VyY2VzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLFxuICAgICAgICAgICAgX2tleSA9IDE7XG4gICAgICAgIF9rZXkgPCBfbGVuO1xuICAgICAgICBfa2V5KytcbiAgICApIHtcbiAgICAgICAgc291cmNlc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKCFzb3VyY2VzLmxlbmd0aCkgcmV0dXJuIHRhcmdldDtcbiAgICB2YXIgc291cmNlID0gc291cmNlcy5zaGlmdCgpO1xuXG4gICAgaWYgKGlzT2JqZWN0KHRhcmdldCkgJiYgaXNPYmplY3Qoc291cmNlKSkge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3Qoc291cmNlW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXRba2V5XSkgT2JqZWN0LmFzc2lnbih0YXJnZXQsIF9kZWZpbmVQcm9wZXJ0eSh7fSwga2V5LCB7fSkpO1xuICAgICAgICAgICAgICAgIG9iamVjdEFzc2lnbih0YXJnZXRba2V5XSwgc291cmNlW2tleV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRhcmdldCwgX2RlZmluZVByb3BlcnR5KHt9LCBrZXksIHNvdXJjZVtrZXldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iamVjdEFzc2lnbi5hcHBseSh1bmRlZmluZWQsIFt0YXJnZXRdLmNvbmNhdChzb3VyY2VzKSk7XG59XG5cblxuXG5tb2R1bGUuZXhwb3J0cy5vYmplY3RBc3NpZ24gPSBvYmplY3RBc3NpZ247XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDU2ltcGxlTGF5b3V0QW5pbWF0b3IgPSByZXF1aXJlKCcuL0NTaW1wbGVMYXlvdXRBbmltYXRvci5qcycpO1xudmFyIENBTElHTiA9IHJlcXVpcmUoJy4uL0NDb21tb24uanMnKTtcbnZhciBtZXJnZURlZXBseSA9IHJlcXVpcmUoJ21lcmdlLWRlZXBseScpO1xudmFyIEV2ZW50TGlzdGVuZXJIZWxwZXIgPSByZXF1aXJlKCdldmVudC1saXN0ZW5lci1oZWxwZXInKTtcblxuZnVuY3Rpb24gV2luZG93RXZlbnRIZWxwZXIobW9kZWwpIHtcblxuICB0aGlzLmV2ZW50TGlzdGVuZXJIZWxwZXIgPSBuZXcgRXZlbnRMaXN0ZW5lckhlbHBlcigpO1xuICB0aGlzLndpbmRvd01vZGUgPSAnZGVmYXVsdCc7XG4gIHRoaXMuc3R5bGVEaXNwbGF5ID0gJ2ZsZXgnO1xuICB0aGlzLmhvcml6b250YWxBbGlnbiA9ICdsZWZ0JztcbiAgdGhpcy52ZXJ0aWNhbEFsaWduID0gJ3RvcCc7XG5cbiAgdGhpcy5rZXlMaXN0ZW5lciA9IG51bGw7XG5cbiAgdGhpcy5taW5pbWl6ZUJ1dHRvbiA9IG51bGw7XG4gIHRoaXMubWF4aW1pemVCdXR0b24gPSBudWxsO1xuICB0aGlzLmRlbWF4aW1pemVCdXR0b24gPSBudWxsO1xuICB0aGlzLmRlbWluaW1pemVCdXR0b24gPSBudWxsO1xuXG4gIHRoaXMub3B0cyA9IG1vZGVsO1xuXG4gIHRoaXMuaXNXaW5kb3dNYW5hZ2VyRml4ZWQgPSBtb2RlbC5mcmFtZS5qc0ZyYW1lLmlzV2luZG93TWFuYWdlckZpeGVkO1xuXG4gIGlmIChtb2RlbC5zdHlsZURpc3BsYXkpIHtcbiAgICB0aGlzLnN0eWxlRGlzcGxheSA9IG1vZGVsLnN0eWxlRGlzcGxheTtcbiAgfVxuICBpZiAobW9kZWwubWluaW1pemVCdXR0b24pIHtcbiAgICB0aGlzLm1pbmltaXplQnV0dG9uID0gbW9kZWwubWluaW1pemVCdXR0b247XG4gIH1cbiAgaWYgKG1vZGVsLmRlbWluaW1pemVCdXR0b24pIHtcbiAgICB0aGlzLmRlbWluaW1pemVCdXR0b24gPSBtb2RlbC5kZW1pbmltaXplQnV0dG9uO1xuICB9XG4gIGlmIChtb2RlbC5tYXhpbWl6ZUJ1dHRvbikge1xuICAgIHRoaXMubWF4aW1pemVCdXR0b24gPSBtb2RlbC5tYXhpbWl6ZUJ1dHRvbjtcbiAgfVxuICBpZiAobW9kZWwuZGVtYXhpbWl6ZUJ1dHRvbikge1xuICAgIHRoaXMuZGVtYXhpbWl6ZUJ1dHRvbiA9IG1vZGVsLmRlbWF4aW1pemVCdXR0b247XG4gIH1cblxuICBpZiAobW9kZWwuaGlkZUJ1dHRvbikge1xuICAgIHRoaXMuaGlkZUJ1dHRvbiA9IG1vZGVsLmhpZGVCdXR0b247XG4gIH1cbiAgaWYgKG1vZGVsLmhpZGVCdXR0b25zKSB7XG4gICAgdGhpcy5oaWRlQnV0dG9ucyA9IG1vZGVsLmhpZGVCdXR0b25zO1xuICB9XG5cbiAgdGhpcy5tYXhpbWl6ZVBhcmFtID0gbW9kZWwubWF4aW1pemVQYXJhbTtcbiAgdGhpcy5kZW1heGltaXplUGFyYW0gPSBtb2RlbC5kZW1heGltaXplUGFyYW07XG4gIHRoaXMubWluaW1pemVQYXJhbSA9IG1vZGVsLm1pbmltaXplUGFyYW07XG4gIHRoaXMuZGVtaW5pbWl6ZVBhcmFtID0gbW9kZWwuZGVtaW5pbWl6ZVBhcmFtO1xuICB0aGlzLmhpZGVQYXJhbSA9IG1vZGVsLmhpZGVQYXJhbTtcbiAgdGhpcy5kZWhpZGVQYXJhbSA9IG1vZGVsLmRlaGlkZVBhcmFtO1xuXG5cbiAgaWYgKG1vZGVsLmhvcml6b250YWxBbGlnbikge1xuICAgIHRoaXMuaG9yaXpvbnRhbEFsaWduID0gbW9kZWwuaG9yaXpvbnRhbEFsaWduO1xuICB9XG4gIGlmIChtb2RlbC52ZXJ0aWNhbEFsaWduKSB7XG4gICAgdGhpcy52ZXJ0aWNhbEFsaWduID0gbW9kZWwudmVydGljYWxBbGlnbjtcbiAgfVxuXG5cbiAgdGhpcy5hbmltYXRpb25FbmFibGVkID0gZmFsc2U7XG4gIHRoaXMuYW5pbWF0aW9uRHVyYXRpb24gPSAxMDA7XG4gIHRoaXMuZnJhbWUgPSBtb2RlbC5mcmFtZTtcbiAgdGhpcy5oaWRlRnJhbWVCb3JkZXIgPSB0cnVlO1xuICB0aGlzLmhpZGVUaXRsZUJhciA9IHRydWU7XG5cbiAgdGhpcy5yZXN0b3JlS2V5ID0gbnVsbDtcbiAgdGhpcy5yZXN0b3JlRHVyYXRpb24gPSBudWxsO1xuICB0aGlzLnJlc3RvcmVDYWxsYmFjayA9IG51bGw7XG5cbiAgdGhpcy5zdGF0c1N0b3JlID0ge307XG5cbiAgaWYgKG1vZGVsLmFuaW1hdGlvbikge1xuICAgIHRoaXMuYW5pbWF0aW9uRW5hYmxlZCA9IG1vZGVsLmFuaW1hdGlvbjtcbiAgfVxuICBpZiAobW9kZWwuYW5pbWF0aW9uRHVyYXRpb24pIHtcbiAgICB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uID0gbW9kZWwuYW5pbWF0aW9uRHVyYXRpb247XG4gIH1cbiAgdGhpcy5ldmVudExpc3RlbmVycyA9IHt9O1xuXG5cbiAgLy9JZiB0aGUgdXNlciBjaGFuZ2VzIHRoZSB3aW5kb3cgc2l6ZSB3aGVuIHRoZSB3aW5kb3cgaXMgbWF4aW1pemVkIHN0YXRlLFxuICAvLyBhZGp1c3QgdGhlIHNpemUgc28gdGhhdCB3aW5kb3cgbG9va3MgbWF4aW1pemVkLlxuICB0aGlzLnJlc2l6ZUxpc3RlbmVyID0gdGhpcy5oYW5kbGVPblJlc2l6ZS5iaW5kKHRoaXMpO1xuXG4gIGlmICh0aGlzLm1heGltaXplUGFyYW0gJiYgdGhpcy5tYXhpbWl6ZVBhcmFtLm1hdGNoUGFyZW50KSB7XG4gICAgdGhpcy5yZXNpemVMaXN0ZW5lciA9IHRoaXMuaGFuZGxlT25WaXJ0dWFsUmVzaXplLmJpbmQodGhpcyk7XG4gIH1cblxuXG59XG5cbldpbmRvd0V2ZW50SGVscGVyLk1BVENIX1BBUkVOVF9DSEFOR0VfTUFSS0VSX0FUVFIgPSAnX19qc2ZyYW1lLW1wLW1hcmtlcic7XG5cbldpbmRvd0V2ZW50SGVscGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKGV2ZW50VHlwZSwgY2FsbGJhY2spIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgbWUuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXSA9IGNhbGxiYWNrO1xufTtcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbldpbmRvd0V2ZW50SGVscGVyLnByb3RvdHlwZS5kb01heGltaXplID0gZnVuY3Rpb24obW9kZWwpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICBpZiAobWUud2luZG93TW9kZSA9PT0gJ2hpZCcpIHtcbiAgICB0aHJvdyBFcnJvcignW0pTcmFtZV0gSXQgaXMgbm90IHBvc3NpYmxlIHRvIGNoYW5nZSBkaXJlY3RseSBmcm9tIHRoZSBoaWQgc3RhdGUgdG8gdGhlIG1heGltaXplZCBzdGF0ZScpO1xuICAgIHJldHVybjtcbiAgfVxuXG5cbiAgaWYgKG1lLndpbmRvd01vZGUgPT09ICdtYXhpbWl6ZWQnIHx8IG1lLndpbmRvd01vZGUgPT09ICdtYXhpbWl6aW5nJykge1xuICAgIC8vIElmIGl0J3MgYWxyZWFkeSAnbWF4aW1pemVkJyBzdGF0dXMsIGl0IGRvZXNuJ3QgZG8gYW55dGhpbmcuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbWUud2luZG93TW9kZSA9ICdtYXhpbWl6aW5nJztcblxuXG4gIHZhciBmcmFtZSA9IG1lLmZyYW1lO1xuXG4gIGlmIChtb2RlbCAmJiBtb2RlbC5tYXRjaFBhcmVudCkge1xuICAgIC8vIFRoZSBkaXYgZWxlbWVudCBkb2VzIG5vdCBpc3N1ZSB0aGUgcmVzaXplIGV2ZW50LiBGdXJ0aGVybW9yZSxcbiAgICAvLyBkaXYgaXMgc3BlY2lmaWVkIGFzIDEwMCUsIHNvIHN0eWxlLndpZHRoIGlzIGFsd2F5cyAxMDAlLlxuICAgIC8vIFNvIEkgd2FudCB0byBnZXQgdGhlIGNsaWVudFdpZHRoIGJ1dCBJIGNhbid0IGdldCBpdCB3aXRoIG11dGF0aW9uT2JzZXJ2ZXIuXG4gICAgLy8gVGhlcmVmb3JlLCB3ZSBhZG9wdCBhIG1lY2hhbmlzbSB0byBjYXRjaCB0aGUgcGFyZW50IHdpbmRvd1xuICAgIC8vIHJlc2l6ZSBldmVudCBhbmQgY2hhbmdlIHRoZSBhdHRyaWJ1dGUgb2YgdGhlIHBhcmVudCB3aW5kb3cgY29udGVudFxuICAgIC8vIGJ5IGRpZmZlcmVudGlhdGlvbiB0byBjYXRjaCBpdC5cbiAgICB2YXIgd2luZG93TWFuYWdlciA9IGZyYW1lLmdldFdpbmRvd01hbmFnZXIoKTtcbiAgICB2YXIgcGFyZW50RWxlbWVudCA9IHdpbmRvd01hbmFnZXIuZ2V0UGFyZW50RWxlbWVudCgpO1xuXG4gICAgaWYgKCFtZS5tYXRjaFBhcmVudFJlc2l6ZU9ic2VydmVyKSB7XG4gICAgICB2YXIgbWF0Y2hQYXJlbnRSZXNpemVPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9uIHZpcnR1YWwgcmVzaXplXCIpO1xuICAgICAgICBtZS5yZXNpemVMaXN0ZW5lcigpO1xuICAgICAgfSk7XG4gICAgICBtYXRjaFBhcmVudFJlc2l6ZU9ic2VydmVyLm9ic2VydmUocGFyZW50RWxlbWVudCwge1xuICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFtXaW5kb3dFdmVudEhlbHBlci5NQVRDSF9QQVJFTlRfQ0hBTkdFX01BUktFUl9BVFRSXSxcbiAgICAgICAgYXR0cmlidXRlczogdHJ1ZVxuICAgICAgfSk7XG4gICAgICBtZS5tYXRjaFBhcmVudFJlc2l6ZU9ic2VydmVyID0gbWF0Y2hQYXJlbnRSZXNpemVPYnNlcnZlcjtcbiAgICB9XG4gIH1cbiAgICAvL3NldCBvbnJlc2l6ZSBsaXN0ZW5lclxuICAvL3dpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBtZS5yZXNpemVMaXN0ZW5lcik7XG4gIGVsc2UgaWYgKCFtZS5ldmVudExpc3RlbmVySGVscGVyLmhhc0V2ZW50TGlzdGVuZXIod2luZG93LCAncmVzaXplJywgJ3dpbmRvdy1yZXNpemUtbGlzdGVuZXInKSkge1xuICAgIG1lLmV2ZW50TGlzdGVuZXJIZWxwZXIuYWRkRXZlbnRMaXN0ZW5lcih3aW5kb3csICdyZXNpemUnLCBtZS5yZXNpemVMaXN0ZW5lcixcbiAgICAgIHsgbGlzdGVuZXJOYW1lOiAnd2luZG93LXJlc2l6ZS1saXN0ZW5lcicgfSk7XG4gIH1cblxuICAvL1JlbWVtYmVyIHRoZSBzdGF0dXMgb2YgdGhlIHdpbmRvdyBiZWZvcmUgbWF4aW1pemluZyB0aGUgd2luZG93IHNpemVcbiAgbWUuc2F2ZUN1cnJlbnRXaW5kb3dTdGF0cygnbWF4aW1pemVfbW9kZScpO1xuXG4gIG1lLmhpZGVUaXRsZUJhciA9IG1vZGVsID8gbW9kZWwuZnVsbFNjcmVlbiA6IGZhbHNlO1xuXG4gIGlmIChtZS5oaWRlVGl0bGVCYXIpIHtcblxuICAgIC8vSGlkZSBvbmx5IHRoZSBjdXJyZW50bHkgdmlzaWJsZSBGcmFtZUNvbXBvbmVudFxuICAgIC8v44Km44Kj44Oz44OJ44Km44Gu44Oi44O844OJ44KS5aSJ5pu044GZ44KL5YmN44Gu5LuK44Gu54q25oWL44Gn5Y+v6KaW54q25oWL44Gr44GC44KL44OV44Os44O844Og44Kz44Oz44Od44O844ON44Oz44OI77yI6ZaJ44GY44KL44Oc44K/44Oz6aGe77yJ44KS5LiN5Y+v6KaW44Gr44GZ44KLXG4gICAgLy8o44K/44Kk44OI44Or44OQ44O86Z2e6KGo56S644Gu5aC05ZCI44Gr44Gv5pyA5aSn5YyW44GZ44KL44Go44GN44Gu44Ki44OL44Oh44O844K344On44Oz44Gn44OV44Os44O844Og44Kz44Oz44Od44O844ON44Oz44OI44KS6KaL44Gb44Gq44GE44KI44GG44Gr44GZ44KLKVxuICAgIGZyYW1lLmhpZGVBbGxWaXNpYmxlRnJhbWVDb21wb25lbnRzKCk7XG5cbiAgICAvL+OBvuOBn2hpZGVBbGxWaXNpYmxlRnJhbWVDb21wb25lbnTjgpLlrp/mlr3jgZnjgovjgajjgY3jgavjgIHlgIvliKXjga5oaWRlRnJhbWVDb21wb25lbnTjgoRzaG93RnJhbWVDb21wb25lbnTjgpLlrp/ooYzjgZnjgovjgahcbiAgICAvL+euoeeQhuOCueODhuODvOODiOOBjOegtOe2u+OBmeOCi+OBn+OCgeOAgeOCv+OCpOODiOODq+ODkOODvOmdnuihqOekuuOBruWgtOWQiOOBr+OBqeOBhuOBm+aTjeS9nOOBp+OBjeOBquOBhOOBqOOBhOOBhuOBk+OBqOOCguOBguOCilxuICAgIC8vaGlkZUZyYW1lQ29tcG9uZW50IOOChCBzaG93RnJhbWVDb21wb25lbnTjga/lrp/ooYzjgZfjgarjgYRcblxuICB9IGVsc2Uge1xuXG4gICAgLy9Qcm9jZXNzIHJlcXVpcmVkIGZvciBtYXhpbWl6YXRpb25cbiAgICBpZiAobWUubWF4aW1pemVCdXR0b24pIHtcbiAgICAgIGZyYW1lLmhpZGVGcmFtZUNvbXBvbmVudChtZS5tYXhpbWl6ZUJ1dHRvbik7XG4gICAgfVxuICAgIGlmIChtZS5kZW1heGltaXplQnV0dG9uKSB7XG4gICAgICBmcmFtZS5zaG93RnJhbWVDb21wb25lbnQobWUuZGVtYXhpbWl6ZUJ1dHRvbiwgbWUuc3R5bGVEaXNwbGF5KTtcbiAgICB9XG4gIH1cblxuXG4gIGZyYW1lLnNldE1vdmFibGUoZmFsc2UpO1xuICBmcmFtZS5zZXRSZXNpemFibGUoZmFsc2UpO1xuXG5cbiAgaWYgKG1vZGVsICYmIG1vZGVsLnJlc3RvcmVLZXkpIHtcbiAgICBtZS5yZXN0b3JlS2V5ID0gbW9kZWwucmVzdG9yZUtleTtcbiAgfVxuICBpZiAobW9kZWwgJiYgbW9kZWwucmVzdG9yZUR1cmF0aW9uKSB7XG4gICAgbWUucmVzdG9yZUR1cmF0aW9uID0gbW9kZWwucmVzdG9yZUR1cmF0aW9uO1xuICB9XG4gIGlmIChtb2RlbCAmJiBtb2RlbC5yZXN0b3JlQ2FsbGJhY2spIHtcbiAgICBtZS5yZXN0b3JlQ2FsbGJhY2sgPSBtb2RlbC5yZXN0b3JlQ2FsbGJhY2s7XG4gIH1cbiAgLy9SZW5kZXIgbWF4aW1pemF0aW9uIGl0c2VsZlxuICBtZS5yZW5kZXJNYXhpbWl6ZWRNb2RlKHtcbiAgICBhbmltYXRpb246IG1lLmFuaW1hdGlvbkVuYWJsZWQsXG4gICAgY2FsbGJhY2s6IChtb2RlbCAmJiBtb2RlbC5jYWxsYmFjaykgPyBtb2RlbC5jYWxsYmFjayA6IG51bGwsIC8vc2V0IG1heGltaXplZCBmaW5pc2hlZCBjYWxsYmFja1xuICAgIGR1cmF0aW9uOiAobW9kZWwgJiYgbW9kZWwuZHVyYXRpb24pID8gbW9kZWwuZHVyYXRpb24gOiBudWxsLFxuICAgIG1hdGNoUGFyZW50OiAobW9kZWwgJiYgbW9kZWwubWF0Y2hQYXJlbnQpID8gbW9kZWwubWF0Y2hQYXJlbnQgOiBmYWxzZSxcbiAgfSk7XG59O1xuXG5cbi8qKlxuICogUmVuZGVyIHdpbmRvdyBhcyBhIG1heGltaXplZCBtb2RlKCBmdWxsIHNjcmVlbiApXG4gKi9cbldpbmRvd0V2ZW50SGVscGVyLnByb3RvdHlwZS5yZW5kZXJNYXhpbWl6ZWRNb2RlID0gZnVuY3Rpb24obW9kZWwpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgdmFyIGZyYW1lID0gbWUuZnJhbWU7XG4gIHZhciBmcm9tID0gbWUubG9hZFdpbmRvd1N0YXRzKCdtYXhpbWl6ZV9tb2RlJyk7XG5cbiAgdmFyIF90b1ggPSAwO1xuICB2YXIgX3RvWSA9IDA7XG4gIHZhciBfdG9XaWR0aCA9IDA7XG4gIHZhciBfdG9IZWlnaHQgPSAwO1xuXG4gIC8vY29tcHV0ZSBwb3NpdGlvbiBhbmQgc2l6ZVtiZWdpbl1cbiAgaWYgKG1lLmhpZGVUaXRsZUJhcikge1xuICAgIF90b1ggPSAwO1xuICAgIF90b1kgPSAtZnJvbS50aXRsZUJhckhlaWdodDtcbiAgfVxuXG4gIHZhciBwYXJlbnRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICB2YXIgcGFyZW50SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG4gIGlmIChtb2RlbC5tYXRjaFBhcmVudCkge1xuICAgIC8vIElmIG1hdGNoUGFyZW50IGlzIHNwZWNpZmllZFxuICAgIC8vIFdoZW4gbWF4aW1pemluZywgdXNlIHRoZSBzaXplIG9mIHBhcmVudEVsZW1lbnQgc3BlY2lmaWVkIGF0IGluaXRpYWxpemF0aW9uXG4gICAgLy8gUGFyZW50bEVsZW1lbnQgaXMgb2Z0ZW4gdXNlZCBvbmx5IGZvciBhZGp1c3RpbmcgdGhlIGRpc3BsYXkgb3JkZXIuXG4gICAgLy8gVGhlcmVmb3JlLCBvbmx5IGlmIG1hdGNoUGFyZW50IGlzIHNwZWNpZmllZCwgbWF0Y2ggdGhlIHNpemUgb2YgcGFyZW50RWxlbWVudFxuICAgIHZhciB3aW5kb3dNYW5hZ2VyID0gZnJhbWUuZ2V0V2luZG93TWFuYWdlcigpO1xuICAgIHZhciBwYXJlbnRFbGVtZW50ID0gd2luZG93TWFuYWdlci5nZXRQYXJlbnRFbGVtZW50KCk7XG4gICAgcGFyZW50V2lkdGggPSBwYXJlbnRFbGVtZW50LmNsaWVudFdpZHRoO1xuICAgIHBhcmVudEhlaWdodCA9IHBhcmVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICB9XG5cbiAgaWYgKG1lLmhpZGVGcmFtZUJvcmRlcikge1xuICAgIF90b1dpZHRoID0gcGFyZW50V2lkdGg7XG4gICAgX3RvSGVpZ2h0ID0gcGFyZW50SGVpZ2h0ICsgKG1lLmhpZGVUaXRsZUJhciA/IGZyb20udGl0bGVCYXJIZWlnaHQgOiAwKTtcbiAgfSBlbHNlIHtcbiAgICBfdG9XaWR0aCA9IHBhcmVudFdpZHRoIC0gZnJvbS5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCAqIDI7XG4gICAgX3RvSGVpZ2h0ID0gcGFyZW50SGVpZ2h0IC0gZnJvbS5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCAqIDIgKyAobWUuaGlkZVRpdGxlQmFyID8gZnJvbS50aXRsZUJhckhlaWdodCA6IDApO1xuICB9XG4gIC8vY29tcHV0ZSBwb3NpdGlvbiBhbmQgc2l6ZVtlbmRdXG5cbiAgaWYgKG1lLmhvcml6b250YWxBbGlnbiA9PSAncmlnaHQnKSB7XG4gICAgX3RvWCA9IC1fdG9XaWR0aDtcbiAgfVxuICBpZiAobWUudmVydGljYWxBbGlnbiA9PSAnYm90dG9tJykge1xuICAgIF90b1kgPSAtX3RvSGVpZ2h0O1xuICB9XG5cblxuICAvL3JlbmRlciBwb3NpdGlvbiBhbmQgc2l6ZVtiZWdpbl1cbiAgdmFyIGZ1bmNEb1JlbmRlciA9IGZ1bmN0aW9uKG9wdCkge1xuXG4gICAgdmFyIGRpc2FibGVDYWxsYmFjayA9IG9wdCAmJiBvcHQuZGlzYWJsZUNhbGxiYWNrO1xuXG4gICAgZnJhbWUuc2V0UG9zaXRpb24oX3RvWCwgX3RvWSk7XG5cbiAgICBpZiAobWUuaGlkZUZyYW1lQm9yZGVyKSB7XG4gICAgICBmcmFtZS5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCA9IDA7XG4gICAgICBmcmFtZS5mcmFtZUJvcmRlcldpZHRoRm9jdXNlZCA9IDA7XG4gICAgICBmcmFtZS5odG1sRWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aCA9ICcwcHgnO1xuICAgIH1cbiAgICBmcmFtZS5zZXRTaXplKF90b1dpZHRoLCBfdG9IZWlnaHQsIHRydWUpO1xuXG4gICAgaWYgKGRpc2FibGVDYWxsYmFjaykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChtZS5oaWRlVGl0bGVCYXIpIHtcbiAgICAgIC8vIHdoZW4gZnVsbCBzY3JlZW4gbW9kZShtZWFucyBoaWRkZW4gdGl0bGUgYmFyKVxuXG4gICAgICBpZiAobWUucmVzdG9yZUtleSkge1xuICAgICAgICBtZS5rZXlMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT09IG1lLnJlc3RvcmVLZXkpIHtcbiAgICAgICAgICAgIG1lLmRvQ29tbWFuZCgncmVzdG9yZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgbWUua2V5TGlzdGVuZXIpO1xuXG4gICAgICAvL2FkZCBrZXlsaXN0ZW5lciBmb3IgaW5zaWRlIHRoZSBpZnJhbWVcbiAgICAgIGlmIChmcmFtZS5pZnJhbWUpIHtcbiAgICAgICAgZnJhbWUuaWZyYW1lLmNvbnRlbnRXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG1lLmtleUxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZS53aW5kb3dNb2RlID0gJ21heGltaXplZCc7XG5cblxuICAgIGlmIChtb2RlbCAmJiBtb2RlbC5jYWxsYmFjaykge1xuICAgICAgbW9kZWwuY2FsbGJhY2sobWUuZnJhbWUsIHsgZXZlbnRUeXBlOiAnbWF4aW1pemVkJyB9KTtcbiAgICB9XG4gICAgaWYgKG1lLmV2ZW50TGlzdGVuZXJzWydtYXhpbWl6ZWQnXSkge1xuICAgICAgbWUuZXZlbnRMaXN0ZW5lcnNbJ21heGltaXplZCddKG1lLmZyYW1lLCB7IGV2ZW50VHlwZTogJ21heGltaXplZCcgfSk7XG4gICAgfVxuXG4gIH07Ly8gZW5kIG9mIGZ1bmNEb1JlbmRlclxuXG5cbiAgaWYgKG1vZGVsICYmIG1vZGVsLmFuaW1hdGlvbikge1xuXG5cbiAgICBtZS5hbmltYXRlRnJhbWUoe1xuICAgICAgZnJhbWU6IGZyYW1lLFxuICAgICAgZnJvbTogZnJvbSxcbiAgICAgIHRvOiB7XG4gICAgICAgIGxlZnQ6IF90b1gsXG4gICAgICAgIHRvcDogX3RvWSxcbiAgICAgICAgd2lkdGg6IF90b1dpZHRoLFxuICAgICAgICBoZWlnaHQ6IF90b0hlaWdodFxuICAgICAgfSxcbiAgICAgIGR1cmF0aW9uOiBtb2RlbC5kdXJhdGlvbiA/IG1vZGVsLmR1cmF0aW9uIDogbWUuYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICBjYWxsYmFjazogZnVuY0RvUmVuZGVyXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKG1vZGVsICYmIG1vZGVsLmNhbGxlciA9PT0gJ2hhbmRsZU9uUmVzaXplJykge1xuICAgICAgZnVuY0RvUmVuZGVyKHsgZGlzYWJsZUNhbGxiYWNrOiB0cnVlIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmdW5jRG9SZW5kZXIoKTtcbiAgICB9XG4gIH1cbiAgLy9yZW5kZXIgcG9zaXRpb24gYW5kIHNpemVbZW5kXVxufTtcblxuV2luZG93RXZlbnRIZWxwZXIucHJvdG90eXBlLmdldFdpbmRvd01vZGUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMud2luZG93TW9kZTtcbn07XG4vKipcbiAqIFJlc3RvcmUgd2luZG93IGZyb20gbWF4aW1pemVkIG1vZGVcbiAqL1xuV2luZG93RXZlbnRIZWxwZXIucHJvdG90eXBlLmRvRGVtYXhpbWl6ZSA9IGZ1bmN0aW9uKG1vZGVsKSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIHZhciBmcmFtZSA9IG1lLmZyYW1lO1xuXG4gIGlmIChtZS53aW5kb3dNb2RlID09PSAnaGlkJykge1xuICAgIC8vY29uc29sZS5lcnJvcignZGVtYXhpbWl6ZSg9cmVjb3ZlcnkgZnJvbSBtYXhpbWl6ZWQpIGNhbm5vdCBiZSBwZXJmb3JtZWQgaW4gaGlkIHN0YXRlLicpO1xuICAgIHRocm93IEVycm9yKCdbSlNGcmFtZV0gZGVtYXhpbWl6ZSg9cmVjb3ZlcnkgZnJvbSBtYXhpbWl6ZWQpIGNhbm5vdCBiZSBwZXJmb3JtZWQgaW4gaGlkIHN0YXRlLicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICghbWUuaGFzV2luZG93U3RhdHMoJ21heGltaXplX21vZGUnKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChtZS5oaWRlVGl0bGVCYXIpIHtcblxuICB9IGVsc2Uge1xuICAgIGlmIChtZS5tYXhpbWl6ZUJ1dHRvbikge1xuICAgICAgZnJhbWUuc2hvd0ZyYW1lQ29tcG9uZW50KG1lLm1heGltaXplQnV0dG9uLCBtZS5zdHlsZURpc3BsYXkpO1xuICAgIH1cbiAgICBpZiAobWUuZGVtYXhpbWl6ZUJ1dHRvbikge1xuICAgICAgZnJhbWUuaGlkZUZyYW1lQ29tcG9uZW50KG1lLmRlbWF4aW1pemVCdXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIG1lLnJlc3RvcmVXaW5kb3coe1xuICAgIHJlc3RvcmVQb3NpdGlvbjogdHJ1ZSxcbiAgICByZXN0b3JlTW9kZTogJ21heGltaXplX21vZGUnLFxuICAgIGFuaW1hdGlvbjogbWUuYW5pbWF0aW9uRW5hYmxlZCxcbiAgICBjYWxsYmFjazogKG1vZGVsICYmIG1vZGVsLmNhbGxiYWNrKSA/IG1vZGVsLmNhbGxiYWNrIDogbnVsbCxcbiAgICBmb3JjZVNob3dGcmFtZUNvbXBvbmVudHM6IChtZS5hbmltYXRpb25FbmFibGVkICYmIG1lLmhpZGVUaXRsZUJhciksXG4gICAgZHVyYXRpb246IChtb2RlbCAmJiBtb2RlbC5kdXJhdGlvbikgPyBtb2RlbC5kdXJhdGlvbiA6IG51bGwsXG4gICAgZXZlbnRUeXBlOiAnZGVtYXhpbWl6ZWQnXG4gIH0pO1xufTtcblxuXG4vKipcbiAqIENhbGxlZCB3aGVuIGNoYW5naW5nIHRoZSB3aW5kb3cgc2l6ZSBieSB1c2VyIG9wZXJhdGlvbiBpbiBtYXhpbWl6ZWQgbW9kZVxuICovXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUuaGFuZGxlT25SZXNpemUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgbWUucmVuZGVyTWF4aW1pemVkTW9kZSh7XG4gICAgY2FsbGVyOiAnaGFuZGxlT25SZXNpemUnLFxuICAgIC8vbWF0Y2hQYXJlbnQ6IHRydWVcbiAgfSk7XG59O1xuV2luZG93RXZlbnRIZWxwZXIucHJvdG90eXBlLmhhbmRsZU9uVmlydHVhbFJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICBtZS5yZW5kZXJNYXhpbWl6ZWRNb2RlKHtcbiAgICBjYWxsZXI6ICdoYW5kbGVPblJlc2l6ZScsXG4gICAgbWF0Y2hQYXJlbnQ6IHRydWVcbiAgfSk7XG59O1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIE1ha2Ugd2luZG93IG1pbmltaXplZCBtb2RlXG4gKi9cbldpbmRvd0V2ZW50SGVscGVyLnByb3RvdHlwZS5kb01pbmltaXplID0gZnVuY3Rpb24obW9kZWwpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuICBpZiAobWUud2luZG93TW9kZSA9PT0gJ21pbmltaXplZCcgfHwgbWUud2luZG93TW9kZSA9PT0gJ21pbmltaXppbmcnKSB7XG4gICAgLy8gSWYgaXQncyBhbHJlYWR5ICdtaW5pbWl6ZWQnIHN0YXR1cywgaXQgZG9lc24ndCBkbyBhbnl0aGluZy5cbiAgICByZXR1cm47XG4gIH1cblxuICBtZS53aW5kb3dNb2RlID0gJ21pbmltaXppbmcnO1xuXG5cbiAgdmFyIGZyYW1lID0gbWUuZnJhbWU7XG5cbiAgLy9SZW1lbWJlciB0aGUgc3RhdHMgb2YgdGhlIHdpbmRvdyBiZWZvcmUgbWF4aW1pemluZyB0aGUgd2luZG93XG4gIG1lLnNhdmVDdXJyZW50V2luZG93U3RhdHMoJ21pbmltaXplX21vZGUnKTtcblxuXG4gIGZyYW1lLnNldFJlc2l6YWJsZShmYWxzZSk7XG5cbiAgbWUucmVuZGVyTWluaW1pemVkTW9kZSh7XG4gICAgYW5pbWF0aW9uOiBtZS5hbmltYXRpb25FbmFibGVkLFxuICAgIGNhbGxiYWNrOiAobW9kZWwgJiYgbW9kZWwuY2FsbGJhY2spID8gbW9kZWwuY2FsbGJhY2sgOiBudWxsLFxuICAgIGR1cmF0aW9uOiAobW9kZWwgJiYgbW9kZWwuZHVyYXRpb24pID8gbW9kZWwuZHVyYXRpb24gOiBudWxsLFxuICAgIHRvV2lkdGg6IChtb2RlbCAmJiBtb2RlbC50b1dpZHRoKSA/IG1vZGVsLnRvV2lkdGggOiBudWxsLFxuICB9KTtcbn07XG5cblxuLyoqXG4gKiBSZW5kZXIgd2luZG93IGFzIG1pbmltaXplZCBtb2RlXG4gKi9cbldpbmRvd0V2ZW50SGVscGVyLnByb3RvdHlwZS5yZW5kZXJNaW5pbWl6ZWRNb2RlID0gZnVuY3Rpb24obW9kZWwpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgdmFyIGZyYW1lID0gbWUuZnJhbWU7XG4gIHZhciByaSA9IG1lLmxvYWRXaW5kb3dTdGF0cygnbWluaW1pemVfbW9kZScpO1xuXG4gIHZhciBmcm9tID0gbWUuZ2V0Q3VycmVudFdpbmRvd1N0YXRzKCk7XG4gIHZhciB0byA9IG1lLmdldEN1cnJlbnRXaW5kb3dTdGF0cygpO1xuXG4gIHRvLmhlaWdodCA9IHJpLnRpdGxlQmFySGVpZ2h0O1xuICBpZiAobW9kZWwgJiYgbW9kZWwudG9XaWR0aCkge1xuICAgIHRvLndpZHRoID0gbW9kZWwudG9XaWR0aFxuICB9XG5cbiAgdmFyIGZ1bmNEb1JlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBmb3JjZVNldFNpemUgPSB0cnVlO1xuICAgIGZyYW1lLnNldFNpemUodG8ud2lkdGgsIHRvLmhlaWdodCwgZm9yY2VTZXRTaXplKTtcblxuICAgIG1lLndpbmRvd01vZGUgPSAnbWluaW1pemVkJztcblxuICAgIGlmIChtZS5taW5pbWl6ZUJ1dHRvbikge1xuICAgICAgZnJhbWUuaGlkZUZyYW1lQ29tcG9uZW50KG1lLm1pbmltaXplQnV0dG9uKTtcbiAgICB9XG5cbiAgICBpZiAobWUuZGVtaW5pbWl6ZUJ1dHRvbikge1xuICAgICAgZnJhbWUuc2hvd0ZyYW1lQ29tcG9uZW50KG1lLmRlbWluaW1pemVCdXR0b24sIG1lLnN0eWxlRGlzcGxheSk7XG4gICAgfVxuXG4gICAgaWYgKG1vZGVsLmNhbGxiYWNrKSB7XG4gICAgICBtb2RlbC5jYWxsYmFjayhtZS5mcmFtZSwgeyBldmVudFR5cGU6ICdtaW5pbWl6ZWQnIH0pO1xuICAgIH1cbiAgICBpZiAobWUuZXZlbnRMaXN0ZW5lcnNbJ21pbmltaXplZCddKSB7XG4gICAgICBtZS5ldmVudExpc3RlbmVyc1snbWluaW1pemVkJ10obWUuZnJhbWUsIHsgZXZlbnRUeXBlOiAnbWluaW1pemVkJyB9KTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKG1vZGVsICYmIG1vZGVsLmFuaW1hdGlvbikge1xuICAgIG1lLmFuaW1hdGVGcmFtZSh7XG4gICAgICB0b0FscGhhOiAxLjAsXG4gICAgICBkdXJhdGlvbjogbW9kZWwuZHVyYXRpb24gPyBtb2RlbC5kdXJhdGlvbiA6IG1lLmFuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgZnJhbWU6IGZyYW1lLFxuICAgICAgZnJvbTogZnJvbSxcbiAgICAgIHRvOiB0byxcbiAgICAgIGNhbGxiYWNrOiBmdW5jRG9SZW5kZXJcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBmdW5jRG9SZW5kZXIoKTtcbiAgfVxuXG5cbn07XG5cblxuLyoqXG4gKiBSZXN0b3JlIHdpbmRvdyBmcm9tIG1pbmltaXplZCBtb2RlXG4gKi9cbldpbmRvd0V2ZW50SGVscGVyLnByb3RvdHlwZS5kb0RlbWluaW1pemUgPSBmdW5jdGlvbihtb2RlbCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIHZhciBmcmFtZSA9IG1lLmZyYW1lO1xuXG4gIGlmICghbWUuaGFzV2luZG93U3RhdHMoJ21pbmltaXplX21vZGUnKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChtZS5taW5pbWl6ZUJ1dHRvbikge1xuICAgIGZyYW1lLnNob3dGcmFtZUNvbXBvbmVudChtZS5taW5pbWl6ZUJ1dHRvbiwgbWUuc3R5bGVEaXNwbGF5KTtcbiAgfVxuICBpZiAobWUuZGVtaW5pbWl6ZUJ1dHRvbikge1xuICAgIGZyYW1lLmhpZGVGcmFtZUNvbXBvbmVudChtZS5kZW1pbmltaXplQnV0dG9uKTtcbiAgfVxuXG4gIG1lLnJlc3RvcmVXaW5kb3coXG4gICAge1xuICAgICAgcmVzdG9yZVBvc2l0aW9uOiBmYWxzZSxcbiAgICAgIHJlc3RvcmVNb2RlOiAnbWluaW1pemVfbW9kZScsXG4gICAgICBhbmltYXRpb246IG1lLmFuaW1hdGlvbkVuYWJsZWQsXG4gICAgICBkdXJhdGlvbjogKG1vZGVsICYmIG1vZGVsLmR1cmF0aW9uKSA/IG1vZGVsLmR1cmF0aW9uIDogbnVsbCxcbiAgICAgIGNhbGxiYWNrOiAobW9kZWwgJiYgbW9kZWwuY2FsbGJhY2spID8gbW9kZWwuY2FsbGJhY2sgOiBudWxsLFxuICAgICAgZXZlbnRUeXBlOiAnZGVtaW5pbWl6ZWQnXG4gICAgfSk7XG59O1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLyoqXG4gKiBNYWtlIHdpbmRvdyBoaWRkZW4gbW9kZVxuICovXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUuZG9IaWRlID0gZnVuY3Rpb24obW9kZWwpIHtcblxuICB2YXIgbWUgPSB0aGlzO1xuXG4gIGlmIChtZS53aW5kb3dNb2RlID09PSAnaGlkJyB8fCBtZS53aW5kb3dNb2RlID09PSAnaGlkaW5nJykge1xuICAgIC8vIElmIGl0J3MgYWxyZWFkeSAnaGlkJyBzdGF0dXMsIGl0IGRvZXNuJ3QgZG8gYW55dGhpbmcuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbWUud2luZG93TW9kZSA9ICdoaWRpbmcnO1xuXG4gIHZhciBmcmFtZSA9IG1lLmZyYW1lO1xuXG4gIC8vUmVtZW1iZXIgdGhlIHN0YXRzIG9mIHRoZSB3aW5kb3cgYmVmb3JlIG1heGltaXppbmcgdGhlIHdpbmRvd1xuICBtZS5zYXZlQ3VycmVudFdpbmRvd1N0YXRzKCdoaWRlX21vZGUnKTtcblxuXG4gIGZyYW1lLnNldFJlc2l6YWJsZShmYWxzZSk7XG5cblxuICB2YXIgYXJnID0ge1xuLy8gICAgc2lsZW50OiBtb2RlbC5zaWxlbnQsXG4gICAgYW5pbWF0aW9uOiBtZS5hbmltYXRpb25FbmFibGVkLFxuICAgIC8vIGR1cmF0aW9uOiAobW9kZWwgJiYgbW9kZWwuZHVyYXRpb24pID8gbW9kZWwuZHVyYXRpb24gOiBudWxsLFxuICAgIC8vIGNhbGxiYWNrOiAobW9kZWwgJiYgbW9kZWwuY2FsbGJhY2spID8gbW9kZWwuY2FsbGJhY2sgOiBudWxsLFxuICAgIC8vIGFsaWduOiAobW9kZWwgJiYgbW9kZWwuYWxpZ24pID8gbW9kZWwuYWxpZ24gOiBudWxsLFxuICAgIC8vIG9mZnNldDogKG1vZGVsICYmIG1vZGVsLmFsaWduKSA/IG1vZGVsLm9mZnNldCA6IG51bGwsXG4gIH07XG4gIGlmIChtb2RlbCkge1xuICAgIG1lcmdlRGVlcGx5KHsgb3A6ICdvdmVyd3JpdGUtbWVyZ2UnLCBvYmplY3QxOiBhcmcsIG9iamVjdDI6IG1vZGVsIH0pO1xuICB9XG4gIG1lLnJlbmRlckhpZGVNb2RlKGFyZyk7XG59O1xuXG5cbi8qKlxuICogUmVuZGVyIHdpbmRvdyBhcyBoaWRkZW4gbW9kZVxuICovXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUucmVuZGVySGlkZU1vZGUgPSBmdW5jdGlvbihtb2RlbCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICB2YXIgZnJhbWUgPSBtZS5mcmFtZTtcbiAgdmFyIHJpID0gbWUubG9hZFdpbmRvd1N0YXRzKCdoaWRlX21vZGUnKTtcblxuICB2YXIgZnJvbSA9IG1lLmdldEN1cnJlbnRXaW5kb3dTdGF0cygpO1xuXG4gIHZhciBvZmZzZXQgPSB7IHg6IDAsIHk6IDAgfTtcbiAgdmFyIHRvRWxlbWVudCA9IG1vZGVsLnRvRWxlbWVudDtcblxuICBpZiAobW9kZWwub2Zmc2V0KSB7XG4gICAgb2Zmc2V0ID0gbW9kZWwub2Zmc2V0O1xuICB9XG5cbiAgdmFyIGxlZnQgPSAwO1xuICB2YXIgdG9wID0gMDtcbiAge1xuICAgIHZhciBhbGlnbiA9IChtb2RlbCAmJiBtb2RlbC5hbGlnbikgPyBtb2RlbC5hbGlnbiA6ICdMRUZUX1RPUCc7XG5cblxuICAgIGlmICghYWxpZ24gfHwgQ0FMSUdOLkxFRlRfVE9QID09IGFsaWduKSB7XG4gICAgICBsZWZ0ID0gZnJvbS5sZWZ0O1xuICAgICAgdG9wID0gZnJvbS50b3A7XG4gICAgfSBlbHNlIGlmIChDQUxJR04uSENFTlRFUl9UT1AgPT0gYWxpZ24pIHtcbiAgICAgIGxlZnQgPSBmcm9tLmxlZnQgKyBmcm9tLndpZHRoIC8gMjtcbiAgICAgIHRvcCA9IGZyb20udG9wO1xuICAgIH0gZWxzZSBpZiAoQ0FMSUdOLlJJR0hUX1RPUCA9PSBhbGlnbikge1xuICAgICAgbGVmdCA9IGZyb20ubGVmdCArIGZyb20ud2lkdGg7XG4gICAgICB0b3AgPSBmcm9tLnRvcDtcbiAgICB9IGVsc2UgaWYgKENBTElHTi5MRUZUX1ZDRU5URVIgPT0gYWxpZ24pIHtcbiAgICAgIGxlZnQgPSBmcm9tLmxlZnQ7XG4gICAgICB0b3AgPSBmcm9tLnRvcCArIGZyb20uaGVpZ2h0IC8gMjtcbiAgICB9IGVsc2UgaWYgKENBTElHTi5IQ0VOVEVSX1ZDRU5URVIgPT0gYWxpZ24pIHtcbiAgICAgIGxlZnQgPSBmcm9tLmxlZnQgKyBmcm9tLndpZHRoIC8gMjtcbiAgICAgIHRvcCA9IGZyb20udG9wICsgZnJvbS5oZWlnaHQgLyAyO1xuICAgIH0gZWxzZSBpZiAoQ0FMSUdOLlJJR0hUX1ZDRU5URVIgPT0gYWxpZ24pIHtcbiAgICAgIGxlZnQgPSBmcm9tLmxlZnQgKyBmcm9tLndpZHRoO1xuICAgICAgdG9wID0gZnJvbS50b3AgKyBmcm9tLmhlaWdodCAvIDI7XG4gICAgfSBlbHNlIGlmIChDQUxJR04uTEVGVF9CT1RUT00gPT0gYWxpZ24pIHtcbiAgICAgIGxlZnQgPSBmcm9tLmxlZnQ7XG4gICAgICB0b3AgPSBmcm9tLnRvcCArIGZyb20uaGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAoQ0FMSUdOLkhDRU5URVJfQk9UVE9NID09IGFsaWduKSB7XG4gICAgICBsZWZ0ID0gZnJvbS5sZWZ0ICsgZnJvbS53aWR0aCAvIDI7XG4gICAgICB0b3AgPSBmcm9tLnRvcCArIGZyb20uaGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAoQ0FMSUdOLlJJR0hUX0JPVFRPTSA9PSBhbGlnbikge1xuICAgICAgbGVmdCA9IGZyb20ubGVmdCArIGZyb20ud2lkdGg7XG4gICAgICB0b3AgPSBmcm9tLnRvcCArIGZyb20uaGVpZ2h0O1xuXG4gICAgfSBlbHNlIGlmICgnQUJTT0xVVEUnID09IGFsaWduKSB7XG4gICAgICBpZiAodG9FbGVtZW50KSB7XG4gICAgICAgIHZhciBlbGVtZW50UmVjdCA9IHRvRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKG1lLmlzV2luZG93TWFuYWdlckZpeGVkKSB7XG4gICAgICAgICAgbGVmdCA9IGVsZW1lbnRSZWN0LmxlZnQ7XG4gICAgICAgICAgdG9wID0gZWxlbWVudFJlY3QudG9wO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxlZnQgPSBlbGVtZW50UmVjdC5sZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0O1xuICAgICAgICAgIHRvcCA9IGVsZW1lbnRSZWN0LnRvcCArIHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVmdCA9IG9mZnNldC54O1xuICAgICAgICB0b3AgPSBvZmZzZXQueTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIHZhciB0byA9IHtcbiAgICBsZWZ0OiBsZWZ0LFxuICAgIHRvcDogdG9wLFxuICAgIHdpZHRoOiAwLFxuICAgIC8vbWluaW11bSBoZWlnaHQgbXVzdCBiZSB0aXRsZUJhckhlaWdodFxuICAgIGhlaWdodDogcmkudGl0bGVCYXJIZWlnaHRcbiAgfTtcblxuICB2YXIgZnVuY0RvUmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZvcmNlU2V0U2l6ZSA9IHRydWU7XG4gICAgZnJhbWUuc2V0U2l6ZSh0by53aWR0aCwgdG8uaGVpZ2h0LCBmb3JjZVNldFNpemUpO1xuICAgIC8vZnJhbWUuaGlkZSgpO1xuXG4gICAgbWUud2luZG93TW9kZSA9ICdoaWQnO1xuXG4gICAgaWYgKG1vZGVsICYmIG1vZGVsLmNhbGxiYWNrKSB7XG4gICAgICBtb2RlbC5jYWxsYmFjayhtZS5mcmFtZSwgeyBldmVudFR5cGU6ICdoaWQnIH0pO1xuICAgIH1cbiAgICBpZiAobWUuZXZlbnRMaXN0ZW5lcnNbJ2hpZCddKSB7XG4gICAgICBtZS5ldmVudExpc3RlbmVyc1snaGlkJ10obWUuZnJhbWUsIHsgZXZlbnRUeXBlOiAnaGlkJyB9KTtcbiAgICB9XG4gIH07XG5cbiAgLy9IaWRlIG9ubHkgdGhlIGN1cnJlbnRseSB2aXNpYmxlIEZyYW1lQ29tcG9uZW50XG4gIGZyYW1lLmhpZGVBbGxWaXNpYmxlRnJhbWVDb21wb25lbnRzKCk7XG5cbiAgaWYgKG1vZGVsICYmIG1vZGVsLmFuaW1hdGlvbikge1xuICAgIG1lLmFuaW1hdGVGcmFtZSh7XG4gICAgICBmcm9tQWxwaGE6IG1vZGVsLnNpbGVudCA/IDAgOiAxLjAsXG4gICAgICB0b0FscGhhOiAwLFxuICAgICAgZWFzZTogdHJ1ZSxcbiAgICAgIGR1cmF0aW9uOiBtb2RlbC5kdXJhdGlvbiA/IG1vZGVsLmR1cmF0aW9uIDogbWUuYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICBmcmFtZTogZnJhbWUsXG4gICAgICBmcm9tOiBmcm9tLFxuICAgICAgdG86IHRvLFxuICAgICAgY2FsbGJhY2s6IGZ1bmNEb1JlbmRlclxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGZ1bmNEb1JlbmRlcigpO1xuICB9XG5cblxufTtcblxuXG4vKipcbiAqIFJlc3RvcmUgd2luZG93IGZyb20gaGlkZWQgbW9kZVxuICovXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUuZG9EZWhpZGUgPSBmdW5jdGlvbihtb2RlbCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICB2YXIgZnJhbWUgPSBtZS5mcmFtZTtcblxuICBpZiAoIW1lLmhhc1dpbmRvd1N0YXRzKCdoaWRlX21vZGUnKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG1lLnJlc3RvcmVXaW5kb3coXG4gICAge1xuICAgICAgZHVyYXRpb246IChtb2RlbCAmJiBtb2RlbC5kdXJhdGlvbikgPyBtb2RlbC5kdXJhdGlvbiA6IG51bGwsXG4gICAgICByZXN0b3JlUG9zaXRpb246IHRydWUsXG4gICAgICByZXN0b3JlTW9kZTogJ2hpZGVfbW9kZScsXG4gICAgICBhbmltYXRpb246IG1lLmFuaW1hdGlvbkVuYWJsZWQsXG4gICAgICBmb3JjZVNob3dGcmFtZUNvbXBvbmVudHM6IHRydWUsXG4gICAgICBjYWxsYmFjazogKG1vZGVsICYmIG1vZGVsLmNhbGxiYWNrKSA/IG1vZGVsLmNhbGxiYWNrIDogbnVsbCxcbiAgICAgIGV2ZW50VHlwZTogJ2RlaGlkZWQnXG4gICAgfSk7XG59O1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbldpbmRvd0V2ZW50SGVscGVyLnByb3RvdHlwZS5sb2FkV2luZG93U3RhdHMgPSBmdW5jdGlvbihzdG9yZUtleU5hbWUpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgcmV0dXJuIG1lLnN0YXRzU3RvcmVbc3RvcmVLZXlOYW1lXTtcbn07XG5cblxuLyoqXG4gKiBSZW1lbWJlciB0aGUgc3RhdHVzIG9mIHRoZSB3aW5kb3cgYmVmb3JlIG1heGltaXppbmcgb3IgbWluaW1pemluZyB0aGUgd2luZG93IHNpemVcbiAqIEBwYXJhbSBzdG9yZUtleU5hbWVcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIHRydWUgaWYgdGhlIHN0YXR1cyBvZiB0aGUgd2luZG93IGhhcyBiZWVuIHVwZGF0ZWQgb3IgaXMgYSBuZXcgc3RhdHVzLlxuICogUmV0dXJucyBmYWxzZSBpZiB0aGUgc3RhdHVzIGhhcyBub3QgYmVlbiB1cGRhdGVkLlxuICovXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUuc2F2ZUN1cnJlbnRXaW5kb3dTdGF0cyA9IGZ1bmN0aW9uKHN0b3JlS2V5TmFtZSkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIHZhciBjcnJXaW5kb3dTdGF0cyA9IG1lLmdldEN1cnJlbnRXaW5kb3dTdGF0cygpO1xuXG4gIGlmIChtZS5oYXNXaW5kb3dTdGF0cyhzdG9yZUtleU5hbWUpKSB7XG5cbiAgICB2YXIgc3RvcmVkU3RhdHMgPSBtZS5sb2FkV2luZG93U3RhdHMoc3RvcmVLZXlOYW1lKTtcbiAgICB2YXIgaXNXaW5kb3dTdGF0c1VwZGF0ZWQgPSAhbWUud2luZG93U3RhdHNFcXVhbHMoY3JyV2luZG93U3RhdHMsIHN0b3JlZFN0YXRzKTtcblxuICAgIGlmIChpc1dpbmRvd1N0YXRzVXBkYXRlZCkge1xuICAgICAgbWUuc3RhdHNTdG9yZVtzdG9yZUtleU5hbWVdID0gY3JyV2luZG93U3RhdHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzV2luZG93U3RhdHNVcGRhdGVkO1xuXG4gIH0gZWxzZSB7XG4gICAgbWUuc3RhdHNTdG9yZVtzdG9yZUtleU5hbWVdID0gY3JyV2luZG93U3RhdHM7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuXG59O1xuXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUud2luZG93U3RhdHNFcXVhbHMgPSBmdW5jdGlvbih3aW5kb3dTdGF0czEsIHdpbmRvd1N0YXRzMikge1xuXG4gIGlmICh3aW5kb3dTdGF0czEgJiYgd2luZG93U3RhdHMyKSB7XG4gICAgdmFyIHJlc3VsdCA9IEpTT04uc3RyaW5naWZ5KHdpbmRvd1N0YXRzMSkgPT09IEpTT04uc3RyaW5naWZ5KHdpbmRvd1N0YXRzMik7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxufTtcblxuV2luZG93RXZlbnRIZWxwZXIucHJvdG90eXBlLmNsZWFyV2luZG93U3RhdHMgPSBmdW5jdGlvbihzdG9yZUtleU5hbWUpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgbWUuc3RhdHNTdG9yZVtzdG9yZUtleU5hbWVdID0gbnVsbDtcbn07XG5cbldpbmRvd0V2ZW50SGVscGVyLnByb3RvdHlwZS5oYXNXaW5kb3dTdGF0cyA9IGZ1bmN0aW9uKHN0b3JlS2V5TmFtZSkge1xuICB2YXIgbWUgPSB0aGlzO1xuICByZXR1cm4gbWUuc3RhdHNTdG9yZVtzdG9yZUtleU5hbWVdO1xufTtcblxuV2luZG93RXZlbnRIZWxwZXIucHJvdG90eXBlLmdldEN1cnJlbnRXaW5kb3dTdGF0cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICB2YXIgZnJhbWUgPSBtZS5mcmFtZTtcblxuICAvL0FjcXVpcmUgd2luZG93J3Mgc3RhdHNcbiAgdmFyIF9fdGl0bGVCYXJIZWlnaHQgPSBwYXJzZUludChmcmFtZS50aXRsZUJhci5zdHlsZS5oZWlnaHQsIDEwKTtcbiAgdmFyIF9fZnJhbWVCb3JkZXJXaWR0aERlZmF1bHQgPSBmcmFtZS5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdDsvLyBwYXJzZUludChmcmFtZS5odG1sRWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aCwgMTApO1xuICB2YXIgX19mcmFtZUJvcmRlcldpZHRoRm9jdXNlZCA9IGZyYW1lLmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkO1xuICB2YXIgX19sZWZ0ID0gZnJhbWUuZ2V0TGVmdCgpO1xuICB2YXIgX190b3AgPSBmcmFtZS5nZXRUb3AoKTtcbiAgdmFyIF9fd2lkdGggPSBmcmFtZS5nZXRXaWR0aCgpO1xuICB2YXIgX19oZWlnaHQgPSBmcmFtZS5nZXRIZWlnaHQoKTtcbiAgdmFyIF9fcmVzaXphYmxlID0gZnJhbWUucmVzaXphYmxlO1xuICB2YXIgX19tb3ZhYmxlID0gZnJhbWUubW92YWJsZTtcblxuXG4gIHJldHVybiB7XG4gICAgbGVmdDogX19sZWZ0LFxuICAgIHRvcDogX190b3AsXG4gICAgd2lkdGg6IF9fd2lkdGgsXG4gICAgaGVpZ2h0OiBfX2hlaWdodCxcbiAgICB0aXRsZUJhckhlaWdodDogX190aXRsZUJhckhlaWdodCxcbiAgICBmcmFtZUJvcmRlcldpZHRoRGVmYXVsdDogX19mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCxcbiAgICBmcmFtZUJvcmRlcldpZHRoRm9jdXNlZDogX19mcmFtZUJvcmRlcldpZHRoRm9jdXNlZCxcbiAgICByZXNpemFibGU6IF9fcmVzaXphYmxlLFxuICAgIG1vdmFibGU6IF9fbW92YWJsZSxcbiAgfTtcbn07XG5cblxuLyoqXG4gKiBSZXN0b3JlIHRoZSBzdGF0ZSBvZiB0aGUgd2luZG93XG4gKiBAcGFyYW0gbW9kZWxcbiAqL1xuV2luZG93RXZlbnRIZWxwZXIucHJvdG90eXBlLnJlc3RvcmVXaW5kb3cgPSBmdW5jdGlvbihtb2RlbCkge1xuICB2YXIgbWUgPSB0aGlzO1xuICB2YXIgZnJhbWUgPSBtZS5mcmFtZTtcbiAgdmFyIHRvID0gbWUubG9hZFdpbmRvd1N0YXRzKG1vZGVsLnJlc3RvcmVNb2RlKTtcbiAgLy/nj77lnKjjga7nirbmhYvjgpLkuIDmmYLkv53lrZjjgZnjgotcbiAgLy9tZS5zYXZlQ3VycmVudFdpbmRvd1N0YXRzKCd0ZW1wJyk7XG4gIHZhciBjcnIgPSBtZS5nZXRDdXJyZW50V2luZG93U3RhdHMoKTsvL2xvYWRXaW5kb3dTdGF0cygndGVtcCcpO1xuXG5cbiAgLy/ku6XkuIvjga4z44Gk44Gv44CB44Oc44O844OA44O844KS5aSq44GV44KS5aSJ5pu044GZ44KL44Gf44KB44Gu44KC44Gu44Gg44GMXG4gIC8vIGZ1bmNEb1JlbmRlcuWGheOBp+WHpueQhuOBl+OBpuOBl+OBvuOBhuOBqOOCouODi+ODoeODvOOCt+ODp+ODs+S4reOBq+OBr+ODnOODvOODgOODvOOBjOaPj+OBi+OCjOOBquOBj+OBquOCi1xuICAvL+OCouODi+ODoeODvOOCt+ODp+ODs+S4reOBq+OBr+ODnOODvOODgOODvOOBr+W+qea0u+OBl+OBpuOBhOOBn+OBu+OBhuOBjOiHqueEtuOBquOBruOBp2Z1bmNEb1JlbmRlcuWkluOBp+Wun+ihjOOBmeOCi1xuICBmcmFtZS5mcmFtZUJvcmRlcldpZHRoRGVmYXVsdCA9IHRvLmZyYW1lQm9yZGVyV2lkdGhEZWZhdWx0O1xuICBmcmFtZS5mcmFtZUJvcmRlcldpZHRoRm9jdXNlZCA9IHRvLmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkO1xuICBmcmFtZS5odG1sRWxlbWVudC5zdHlsZS5ib3JkZXJXaWR0aCA9IGZyYW1lLmZyYW1lQm9yZGVyV2lkdGhGb2N1c2VkO1xuXG4gIHZhciBmdW5jRG9SZW5kZXIgPSBmdW5jdGlvbigpIHtcblxuXG4gICAgaWYgKG1vZGVsICYmIG1vZGVsLnJlc3RvcmVQb3NpdGlvbiA9PSBmYWxzZSkge1xuICAgICAgLy/kvY3nva7jga7np7vli5XjgpLkvLTjgo/jgarjgYTloLTlkIjvvIjmnIDlsI/ljJbjgYvjgonmiLvjgZnjgajjgY3jgarjgakpXG4gICAgICB0by5sZWZ0ID0gY3JyLmxlZnQ7XG4gICAgICB0by50b3AgPSBjcnIudG9wO1xuICAgIH1cblxuICAgIGZyYW1lLnNldFBvc2l0aW9uKHRvLmxlZnQsIHRvLnRvcCk7XG5cbiAgICB2YXIgZm9yY2UgPSB0cnVlO1xuICAgIGZyYW1lLnNldFNpemUodG8ud2lkdGgsIHRvLmhlaWdodCwgZm9yY2UpO1xuXG4gICAgZnJhbWUuc2V0UmVzaXphYmxlKHRvLnJlc2l6YWJsZSk7XG4gICAgZnJhbWUuc2V0TW92YWJsZSh0by5tb3ZhYmxlKTtcblxuICAgIG1lLmNsZWFyV2luZG93U3RhdHMobW9kZWwucmVzdG9yZU1vZGUpO1xuXG4gICAgaWYgKG1lLmtleUxpc3RlbmVyKSB7XG4gICAgICAvL+OCv+OCpOODiOODq+ODkOODvOeEoeOBl+acgOWkp+WMlueKtuaFi+OBi+OCieaIu+OBmeOBn+OCgeOBruOCreODvOODquOCueODiuODvOOBr+WJiumZpOOBmeOCi1xuXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG1lLmtleUxpc3RlbmVyKTtcbiAgICAgIGlmIChmcmFtZS5pZnJhbWUpIHtcbiAgICAgICAgZnJhbWUuaWZyYW1lLmNvbnRlbnRXaW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG1lLmtleUxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIG1lLmtleUxpc3RlbmVyID0gbnVsbDtcbiAgICB9XG5cbiAgICBtZS53aW5kb3dNb2RlID0gJ2RlZmF1bHQnO1xuXG4gICAgaWYgKG1vZGVsICYmIG1vZGVsLmZvcmNlU2hvd0ZyYW1lQ29tcG9uZW50cykge1xuICAgICAgLy/jgqbjgqPjg7Pjg4njgqbjga7jg6Ljg7zjg4nlpInmm7TliY3jgavlj6/oppbnirbmhYvjgavjgYLjgaPjgZ/jg5Xjg6zjg7zjg6DjgrPjg7Pjg53jg7zjg43jg7Pjg4jvvIjplonjgZjjgovjg5zjgr/jg7PpoZ7vvInjgpLlj6/oppbnirbmhYvjgavjgZnjgotcbiAgICAgIGZyYW1lLnNob3dBbGxWaXNpYmxlRnJhbWVDb21wb25lbnRzKCk7XG4gICAgfVxuXG4gICAgZnJhbWUuc2hvdygpO1xuXG4gICAgdmFyIGV2ZW50VHlwZSA9ICdyZXN0b3JlZCc7XG4gICAgaWYgKG1vZGVsICYmIG1vZGVsLmV2ZW50VHlwZSkge1xuICAgICAgZXZlbnRUeXBlID0gbW9kZWwuZXZlbnRUeXBlO1xuICAgIH1cblxuICAgIGlmIChtb2RlbCAmJiBtb2RlbC5jYWxsYmFjaykge1xuICAgICAgbW9kZWwuY2FsbGJhY2soXG4gICAgICAgIG1lLmZyYW1lLCB7IGV2ZW50VHlwZTogZXZlbnRUeXBlIH0pO1xuICAgIH1cbiAgICBpZiAobWUuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXSkge1xuICAgICAgbWUuZXZlbnRMaXN0ZW5lcnNbZXZlbnRUeXBlXShtZS5mcmFtZSwgeyBldmVudFR5cGU6IGV2ZW50VHlwZSB9KTtcbiAgICB9XG4gIH07XG5cblxuICBpZiAobW9kZWwgJiYgbW9kZWwuYW5pbWF0aW9uKSB7XG4gICAgbWUuYW5pbWF0ZUZyYW1lKHtcbiAgICAgIGR1cmF0aW9uOiBtb2RlbC5kdXJhdGlvbiA/IG1vZGVsLmR1cmF0aW9uIDogbWUuYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICBmcmFtZTogZnJhbWUsXG4gICAgICBmcm9tQWxwaGE6IDAsXG4gICAgICB0b0FscGhhOiAxLFxuICAgICAgZnJvbTogY3JyLFxuICAgICAgdG86IHRvLFxuICAgICAgY2FsbGJhY2s6IGZ1bmNEb1JlbmRlclxuICAgIH0pO1xuICB9IGVsc2Uge1xuXG4gICAgZnVuY0RvUmVuZGVyKCk7XG4gIH1cblxuICAvL3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBtZS5yZXNpemVMaXN0ZW5lcik7XG4gIG1lLmV2ZW50TGlzdGVuZXJIZWxwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdyZXNpemUnLCBtZS5yZXNpemVMaXN0ZW5lcik7XG4gIGlmIChtZS5tYXRjaFBhcmVudFJlc2l6ZU9ic2VydmVyKSB7XG4gICAgbWUubWF0Y2hQYXJlbnRSZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgbWUubWF0Y2hQYXJlbnRSZXNpemVPYnNlcnZlciA9IG51bGw7XG4gIH1cblxufTtcblxuXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUuYW5pbWF0ZUZyYW1lID0gZnVuY3Rpb24obW9kZWwpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgdmFyIG5lZWRSZXF1ZXN0Rm9jdXNBZnRlckFuaW1hdGlvbiA9IGZhbHNlO1xuXG5cbiAgdmFyIGZyb21BbHBoYSA9ICFpc05hTihtb2RlbC5mcm9tQWxwaGEpID8gbW9kZWwuZnJvbUFscGhhIDogMS4wO1xuXG4gIHZhciBmcm9tID0gbW9kZWwuZnJvbTtcbiAgdmFyIHRvID0gbW9kZWwudG87XG5cbiAgdmFyIGFuaW1hdG9yID0gbmV3IENTaW1wbGVMYXlvdXRBbmltYXRvcigpO1xuXG4gIGFuaW1hdG9yLnNldChtb2RlbC5mcmFtZSlcbiAgICAuc2V0RHVyYXRpb24obW9kZWwuZHVyYXRpb24gPyBtb2RlbC5kdXJhdGlvbiA6IG1lLmFuaW1hdGlvbkR1cmF0aW9uKVxuICAgIC5mcm9tUG9zaXRpb24oZnJvbS5sZWZ0LCBmcm9tLnRvcCwgJ0xFRlRfVE9QJylcbiAgICAudG9Qb3NpdGlvbih0by5sZWZ0LCB0by50b3AsICdMRUZUX1RPUCcpXG4gICAgLmZyb21XaWR0aChmcm9tLndpZHRoKVxuICAgIC5mcm9tSGVpZ2h0KGZyb20uaGVpZ2h0KVxuICAgIC50b1dpZHRoKHRvLndpZHRoKVxuICAgIC50b0hlaWdodCh0by5oZWlnaHQpXG4gICAgLmZyb21BbHBoYShmcm9tQWxwaGEpXG4gICAgLnRvQWxwaGEoKG1vZGVsLnRvQWxwaGEgPT0gMCkgPyAwIDogMS4wKVxuICAgIC5lYXNlKG1vZGVsLmVhc2UpXG4gICAgLnN0YXJ0KDAsIG5lZWRSZXF1ZXN0Rm9jdXNBZnRlckFuaW1hdGlvbilcbiAgICAudGhlbihmdW5jdGlvbihhbmltYXRvck9iaikge1xuICAgICAgbW9kZWxbJ2NhbGxiYWNrJ10oKTtcbiAgICB9KTtcbn07XG5cbi8qKlxuICogUGVyZm9ybSBjb21wbGV4IHdpbmRvd2luZyB3aXRoIHNpbXBsZSBjb21tYW5kc1xuICogQHBhcmFtIGNtZFxuICogQHBhcmFtIG9wdFxuICovXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUuZG9Db21tYW5kID0gZnVuY3Rpb24oY21kLCBvcHQpIHtcbiAgdmFyIG1lID0gdGhpcztcblxuXG4gIGlmIChjbWQgPT09ICdtYXhpbWl6ZScpIHtcbiAgICBtZS5fZGVmYXVsdEZ1bmN0aW9uTWF4aW1pemUobWUuZnJhbWUpO1xuICB9XG4gIGlmIChjbWQgPT09ICdkZW1heGltaXplJykge1xuICAgIG1lLl9kZWZhdWx0RnVuY3Rpb25EZW1heGltaXplKG1lLmZyYW1lKTtcbiAgfVxuICBpZiAoY21kID09PSAncmVzdG9yZScpIHtcbiAgICBtZS5fZGVmYXVsdEZ1bmN0aW9uUmVzdG9yZUZyb21GdWxsc2NyZWVuKG1lLmZyYW1lKVxuICB9XG4gIGlmIChjbWQgPT09ICdtaW5pbWl6ZScpIHtcbiAgICBtZS5fZGVmYXVsdEZ1bmN0aW9uTWluaW1pemUobWUuZnJhbWUpO1xuICB9XG4gIGlmIChjbWQgPT09ICdkZW1pbmltaXplJykge1xuICAgIG1lLl9kZWZhdWx0RnVuY3Rpb25EZW1pbmltaXplKG1lLmZyYW1lKTtcbiAgfVxuICBpZiAoY21kID09PSAnaGlkZScpIHtcbiAgICBtZS5fZGVmYXVsdEZ1bmN0aW9uSGlkZShtZS5mcmFtZSk7XG4gIH1cbiAgaWYgKGNtZCA9PT0gJ2RlaGlkZScpIHtcbiAgICBtZS5fZGVmYXVsdEZ1bmN0aW9uRGVoaWRlKG1lLmZyYW1lKTtcbiAgfVxufVxuXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUuX2RlZmF1bHRGdW5jdGlvbk1heGltaXplID0gZnVuY3Rpb24oX2ZyYW1lLCBldnQpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgdmFyIG1vZGVsID0gbWUub3B0cztcblxuICB2YXIgcGFyYW0gPSB7XG4gICAgLy8gREVQUkVDQVRFRDogbWF4aW1pemVXaXRob3V0VGl0bGVCYXIgaXMgZGVwcmVjYXRlZFxuICAgIC8vIFVTRSBtYXhpbWl6ZVBhcmFtLmZ1bGxTY3JlZW5cbiAgICBmdWxsU2NyZWVuOiAobW9kZWwubWF4aW1pemVXaXRob3V0VGl0bGVCYXIgPT09IHRydWUpID8gdHJ1ZSA6IGZhbHNlLFxuXG4gICAgLy8gREVQUkVDQVRFRDogbW9kZWwucmVzdG9yZUtleSBpcyBkZXByZWNhdGVkXG4gICAgLy8gVVNFIG1heGltaXplUGFyYW0ucmVzdG9yZUtleVxuXG4gICAgLy8gSWYgeW91IHdhbnQgdG8gdXNlIHRoZSBrZXkgaW5wdXQgaW5zdGVhZCBvZiB0aGUgdGl0bGUgYmFyLFxuICAgIC8vIHlvdSBjYW4gc3BlY2lmeSB0aGUga2V5IGJlY2F1c2UgaXQgaXMgbm90IHBvc3NpYmxlXG4gICAgLy8gdG8gcmVjb3ZlciB3aXRoIHRoZSBidXR0b24gd2hlbiBoaWRpbmcgdGhlIHRpdGxlIGJhci5cbiAgICByZXN0b3JlS2V5OiBtb2RlbC5yZXN0b3JlS2V5ID8gbW9kZWwucmVzdG9yZUtleSA6ICdFc2NhcGUnLFxuXG4gICAgLy8gREVQUkVDQVRFRDogbW9kZWwucmVzdG9yZUR1cmF0aW9uIGlzIGRlcHJlY2F0ZWRcbiAgICAvLyBVU0UgbWF4aW1pemVQYXJhbS5yZXN0b3JlRHVyYXRpb25cbiAgICByZXN0b3JlRHVyYXRpb246IG1vZGVsLnJlc3RvcmVEdXJhdGlvbixcbiAgfTtcblxuICBpZiAodGhpcy5tYXhpbWl6ZVBhcmFtKSB7XG4gICAgLy8gd3JpdGUgbWF4aW1pemVQYXJhbSBpbnRvIHBhcmFtXG4gICAgbWVyZ2VEZWVwbHkoeyBvcDogJ292ZXJ3cml0ZS1tZXJnZScsIG9iamVjdDE6IHBhcmFtLCBvYmplY3QyOiB0aGlzLm1heGltaXplUGFyYW0gfSk7XG4gIH1cblxuICAvL+OCpuOCo+ODs+ODieOCpuOCkuacgOWkp+WMluOBmeOCi1xuICBfZnJhbWUuY29udHJvbC5kb01heGltaXplKHBhcmFtKTtcbn07XG5cbldpbmRvd0V2ZW50SGVscGVyLnByb3RvdHlwZS5fZGVmYXVsdEZ1bmN0aW9uRGVtYXhpbWl6ZSA9IGZ1bmN0aW9uKF9mcmFtZSwgZXZ0KSB7XG4gIF9mcmFtZS5jb250cm9sLmRvRGVtYXhpbWl6ZShcbiAgICB7fSk7XG59O1xuXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUuX2RlZmF1bHRGdW5jdGlvblJlc3RvcmVGcm9tRnVsbHNjcmVlbiA9IGZ1bmN0aW9uKF9mcmFtZSwgZXZ0KSB7XG4gIHZhciBtZSA9IHRoaXM7XG4gIF9mcmFtZS5jb250cm9sLmRvRGVtYXhpbWl6ZSh7XG4gICAgZHVyYXRpb246IG1lLnJlc3RvcmVEdXJhdGlvbiA/IG1lLnJlc3RvcmVEdXJhdGlvbiA6IG51bGwsXG4gICAgY2FsbGJhY2s6IG1lLnJlc3RvcmVDYWxsYmFjayA/IG1lLnJlc3RvcmVDYWxsYmFjayA6IG51bGxcbiAgfSk7XG59O1xuXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUuX2RlZmF1bHRGdW5jdGlvbk1pbmltaXplID0gZnVuY3Rpb24oX2ZyYW1lLCBldnQpIHtcblxuICAvLydtaW5pbWl6ZUJ1dHRvbifjgYzmirzjgZXjgozjgZ/jgajjgY3jgavjgIHmnIDlsI/ljJbjgZfjgZ/jgYTloLTlkIhcbiAgX2ZyYW1lLmNvbnRyb2wuZG9NaW5pbWl6ZSh0aGlzLm1pbmltaXplUGFyYW0pO1xuXG59O1xuXG5XaW5kb3dFdmVudEhlbHBlci5wcm90b3R5cGUuX2RlZmF1bHRGdW5jdGlvbkRlbWluaW1pemUgPSBmdW5jdGlvbihfZnJhbWUsIGV2dCkge1xuICBfZnJhbWUuY29udHJvbC5kb0RlbWluaW1pemUodGhpcy5kZW1pbmltaXplUGFyYW0pO1xufTtcblxuV2luZG93RXZlbnRIZWxwZXIucHJvdG90eXBlLl9kZWZhdWx0RnVuY3Rpb25IaWRlID0gZnVuY3Rpb24oX2ZyYW1lLCBldnQpIHtcblxuICB2YXIgcGFyYW0gPSB7XG4gICAgYWxpZ246ICdDRU5URVJfQk9UVE9NJ1xuICB9O1xuICBpZiAodGhpcy5oaWRlUGFyYW0pIHtcbiAgICBwYXJhbSA9IHRoaXMuaGlkZVBhcmFtO1xuICB9XG4gIF9mcmFtZS5jb250cm9sLmRvSGlkZShwYXJhbSk7XG5cbn07XG5cbldpbmRvd0V2ZW50SGVscGVyLnByb3RvdHlwZS5fZGVmYXVsdEZ1bmN0aW9uRGVoaWRlID0gZnVuY3Rpb24oX2ZyYW1lLCBldnQpIHtcbiAgdmFyIG1lID0gdGhpcztcbiAgX2ZyYW1lLmNvbnRyb2wuZG9EZWhpZGUobWUuZGVoaWRlUGFyYW0pO1xufTtcblxuV2luZG93RXZlbnRIZWxwZXIucHJvdG90eXBlLnNldHVwRGVmYXVsdEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgbWUgPSB0aGlzO1xuXG4gIGlmIChtZS5tYXhpbWl6ZUJ1dHRvbikge1xuICAgIC8v44Kk44OZ44Oz44OI44Gv44Kq44O844OQ44O844Op44Kk44OJ44GV44KM44KLXG4gICAgbWUuZnJhbWUub24obWUubWF4aW1pemVCdXR0b24sICdjbGljaycsIG1lLl9kZWZhdWx0RnVuY3Rpb25NYXhpbWl6ZS5iaW5kKG1lKSk7XG4gIH1cblxuICBpZiAobWUuZGVtYXhpbWl6ZUJ1dHRvbikge1xuICAgIG1lLmZyYW1lLm9uKG1lLmRlbWF4aW1pemVCdXR0b24sICdjbGljaycsIG1lLl9kZWZhdWx0RnVuY3Rpb25EZW1heGltaXplLmJpbmQobWUpKTtcbiAgfVxuXG4gIGlmIChtZS5taW5pbWl6ZUJ1dHRvbikge1xuICAgIG1lLmZyYW1lLm9uKG1lLm1pbmltaXplQnV0dG9uLCAnY2xpY2snLCBtZS5fZGVmYXVsdEZ1bmN0aW9uTWluaW1pemUuYmluZChtZSkpO1xuICB9XG5cbiAgaWYgKG1lLmRlbWluaW1pemVCdXR0b24pIHtcbiAgICBtZS5mcmFtZS5vbihtZS5kZW1pbmltaXplQnV0dG9uLCAnY2xpY2snLCBtZS5fZGVmYXVsdEZ1bmN0aW9uRGVtaW5pbWl6ZS5iaW5kKG1lKSk7XG4gIH1cblxuICBpZiAobWUuaGlkZUJ1dHRvbikge1xuICAgIG1lLmZyYW1lLm9uKG1lLmhpZGVCdXR0b24sICdjbGljaycsIG1lLl9kZWZhdWx0RnVuY3Rpb25IaWRlLmJpbmQobWUpKTtcbiAgfVxuXG4gIGlmIChtZS5oaWRlQnV0dG9ucykge1xuICAgIGZvciAodmFyIGtleSBpbiBtZS5oaWRlQnV0dG9ucykge1xuICAgICAgdmFyIGhpZGVCdXR0b24gPSBtZS5oaWRlQnV0dG9uc1trZXldO1xuICAgICAgaWYgKGhpZGVCdXR0b24pIHtcbiAgICAgICAgbWUuZnJhbWUub24oaGlkZUJ1dHRvbiwgJ2NsaWNrJywgbWUuX2RlZmF1bHRGdW5jdGlvbkhpZGUuYmluZChtZSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFdpbmRvd0V2ZW50SGVscGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==