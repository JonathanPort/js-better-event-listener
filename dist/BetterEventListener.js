var BetterEventListener =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/BetterEventListener.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/BetterEventListener.js":
/*!************************************!*\
  !*** ./src/BetterEventListener.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar moduleName = 'BetterEventListener',\n    defaultMethodName = 'bEvent';\n\nvar BetterEventListener = function () {\n\tfunction BetterEventListener() {\n\t\tvar options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\n\t\t_classCallCheck(this, BetterEventListener);\n\n\t\tthis.options = options;\n\t\tthis.validateAndSetOptions();\n\t\tthis.attachClassToObjectPrototype();\n\t}\n\n\t/**\n  * Validates options passed by checking if the method name and content type\n  * matches up to predefined array of supported options set below.\n  * Warns to console of option doesn't exist or is an incorrect type.\n  *\n  */\n\n\n\t_createClass(BetterEventListener, [{\n\t\tkey: 'validateAndSetOptions',\n\t\tvalue: function validateAndSetOptions() {\n\n\t\t\tif (this.options && _typeof(this.options) === 'object') {\n\n\t\t\t\tvar acceptedOptions = [\n\t\t\t\t// { name: 'namespace', type: ['string'] }, For Later\n\t\t\t\t{ name: 'methodName', type: ['string'] }];\n\n\t\t\t\tfor (var i = 0; i < acceptedOptions.length; i++) {\n\n\t\t\t\t\tvar acceptedOption = acceptedOptions[i],\n\t\t\t\t\t    option = void 0,\n\t\t\t\t\t    validType = false;\n\n\t\t\t\t\tif (this.options.hasOwnProperty(acceptedOption.name)) {\n\n\t\t\t\t\t\toption = this.options[acceptedOption.name];\n\n\t\t\t\t\t\tfor (var j in acceptedOption.type) {\n\t\t\t\t\t\t\tif ((typeof option === 'undefined' ? 'undefined' : _typeof(option)) == acceptedOption.type[j]) {\n\t\t\t\t\t\t\t\tvalidType = true;\n\t\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tif (!validType) {\n\t\t\t\t\t\t\tconsole.warn(moduleName + ': Option passed through to constructor named \"' + acceptedOption.name + '\" is not a valid type supported for this option. The valid types for this option are \"' + acceptedOption.type.toString() + '\"');\n\t\t\t\t\t\t\tcontinue;\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\tthis[acceptedOption.name] = option;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'attachClassToObjectPrototype',\n\t\tvalue: function attachClassToObjectPrototype() {\n\n\t\t\tif (!this.methodName) this.methodName = defaultMethodName;\n\n\t\t\tif (!Object.prototype.hasOwnProperty(this.methodName)) {\n\n\t\t\t\tObject.defineProperty(Object.prototype, this.methodName, {\n\t\t\t\t\tenumerable: false,\n\t\t\t\t\tvalue: function value(event, callback) {\n\t\t\t\t\t\tnew EventListener(this, event, callback);\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\tconsole.warn(moduleName + ' has already been instanciated. This module attaches the functionality to the global Object.prototype scope and can be accessed anywhere. There\\'s no need to re-import or instanciate a new object after the first declaration.');\n\t\t\t}\n\t\t}\n\t}]);\n\n\treturn BetterEventListener;\n}();\n\nexports.default = BetterEventListener;\n\nvar EventListener = function () {\n\tfunction EventListener(el, event, callback) {\n\t\t_classCallCheck(this, EventListener);\n\n\t\tthis.el = el;\n\t\tthis.event = event;\n\t\tthis.callback = callback;\n\n\t\tthis.detectBrowserCompatablity();\n\t\tthis.isSingleElementCheck();\n\t\tthis.isSingleEventCheck();\n\t\tthis.addEventListeners();\n\t}\n\n\t_createClass(EventListener, [{\n\t\tkey: 'detectBrowserCompatablity',\n\t\tvalue: function detectBrowserCompatablity() {\n\n\t\t\tvar el = document.createElement('div');\n\n\t\t\tif (el.addEventListener) this.isModern = true;\n\t\t\tif (el.attachEvent) this.isModern = false;\n\t\t}\n\t}, {\n\t\tkey: 'addEventListeners',\n\t\tvalue: function addEventListeners() {\n\n\t\t\tif (this.isSingleElement) {\n\n\t\t\t\tif (this.isModern) {\n\t\t\t\t\tthis.addEventListener(this.el);\n\t\t\t\t} else {\n\t\t\t\t\tthis.attachEvent(this.el);\n\t\t\t\t}\n\t\t\t} else {\n\n\t\t\t\tfor (var i = 0; i < this.el.length; i++) {\n\n\t\t\t\t\tif (this.isModern) {\n\t\t\t\t\t\tthis.addEventListener(this.el[i]);\n\t\t\t\t\t} else {\n\t\t\t\t\t\tthis.attachEvent(this.el[i]);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'addEventListener',\n\t\tvalue: function addEventListener(el) {\n\n\t\t\tvar classThis = this;\n\n\t\t\tif (this.isSingleEvent) {\n\n\t\t\t\tel.addEventListener(this.event, function (e) {\n\n\t\t\t\t\tclassThis.callback.call(el, e);\n\t\t\t\t});\n\t\t\t} else {\n\n\t\t\t\tfor (var i = 0; i < this.event.length; i++) {\n\n\t\t\t\t\tel.addEventListener(this.event[i], function (e) {\n\n\t\t\t\t\t\tclassThis.callback.call(el, e);\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'attachEvent',\n\t\tvalue: function attachEvent(el) {\n\n\t\t\tif (this.isSingleEvent) {\n\n\t\t\t\tel.attachEvent('on' + this.event, this.callback);\n\t\t\t} else {\n\n\t\t\t\tfor (var i = 0; i < this.event.length; i++) {\n\n\t\t\t\t\tel.attachEvent('on' + this.event[i], this.callback);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'isSingleEventCheck',\n\t\tvalue: function isSingleEventCheck() {\n\n\t\t\tif (this.event.constructor === Array) {\n\t\t\t\tthis.isSingleEvent = false;\n\t\t\t} else {\n\t\t\t\tthis.isSingleEvent = true;\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: 'isSingleElementCheck',\n\t\tvalue: function isSingleElementCheck() {\n\n\t\t\tif (this.el.constructor === NodeList || this.el.constructor === Array) {\n\t\t\t\tthis.isSingleElement = false;\n\t\t\t} else {\n\t\t\t\tthis.isSingleElement = true;\n\t\t\t}\n\t\t}\n\t}]);\n\n\treturn EventListener;\n}();\n\n//# sourceURL=webpack://BetterEventListener/./src/BetterEventListener.js?");

/***/ })

/******/ })["default"];