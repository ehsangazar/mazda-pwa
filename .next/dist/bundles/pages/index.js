module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Alarm/Alarm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_colors__ = __webpack_require__("./constants/colors.js");
var _jsxFileName = "/Users/cheebg/Projects/mazda-pwa/components/Alarm/Alarm.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  font-size: 1.2em;\n  margin-bottom: 1em;\n  padding: 1em 2em;\n  color: ", "\n  background-color: ", "\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var AlarmStyle = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject, __WEBPACK_IMPORTED_MODULE_2__constants_colors__["a" /* default */].RED, __WEBPACK_IMPORTED_MODULE_2__constants_colors__["a" /* default */].WHITE, __WEBPACK_IMPORTED_MODULE_2__constants_colors__["a" /* default */].RED);

var Alarm =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Alarm, _React$PureComponent);

  function Alarm() {
    _classCallCheck(this, Alarm);

    return _possibleConstructorReturn(this, (Alarm.__proto__ || Object.getPrototypeOf(Alarm)).apply(this, arguments));
  }

  _createClass(Alarm, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(AlarmStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, this.props.children);
    }
  }]);

  return Alarm;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["a"] = (Alarm);

/***/ }),

/***/ "./components/Button/Button.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants_colors__ = __webpack_require__("./constants/colors.js");
var _jsxFileName = "/Users/cheebg/Projects/mazda-pwa/components/Button/Button.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  border: 1px solid ", ";\n  font-size: 2em;\n  margin-bottom: 1em;\n  transition-duration: 100ms;\n  cursor: pointer;\n  &:hover,\n  &:focus {\n    box-shadow: inset 0 0 999em rgba(0, 0, 0, 0.1);\n  }\n  &:active,\n  &.active {\n    box-shadow: inset 0 0 999em rgba(0, 0, 0, 0.2);\n  }\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var ButtonStyle = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.button(_templateObject, __WEBPACK_IMPORTED_MODULE_2__constants_colors__["a" /* default */].RED);

var Button =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Button, _React$PureComponent);

  function Button() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Button);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Button.__proto__ || Object.getPrototypeOf(Button)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "handleKeyPress", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        if (event.charCode === 32 || event.charCode === 13) {
          event.preventDefault();
          event.target.click();
        }
      }
    }), _temp));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(ButtonStyle, _extends({
        role: "button",
        tabIndex: 0
      }, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }), this.props.children);
    }
  }]);

  return Button;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "./components/Page/Page.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__("styled-components");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__("./components/index.js");
var _jsxFileName = "/Users/cheebg/Projects/mazda-pwa/components/Page/Page.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  margin: 1em;\n  text-align: left;\n  width: 100%;\n"]);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var PageStyle = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div(_templateObject);

var Page =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Page, _React$Component);

  function Page(props) {
    var _this;

    _classCallCheck(this, Page);

    _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "_registerServiceWorkers", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        if ("serviceWorker" in navigator) {
          console.log('ServiceWorker::: Registered');
          navigator.serviceWorker.register("/service-workers.js", {
            scope: '/'
          }).then(function () {
            console.log('ServiceWorker::: Registered'); // Listen for claiming of our ServiceWorker

            navigator.serviceWorker.addEventListener('controllerchange', function (event) {
              // Listen for changes in the state of our ServiceWorker
              navigator.serviceWorker.controller.addEventListener('statechange', function () {
                // If the ServiceWorker becomes "activated", let the user know they can go offline!
                if (_this.state === 'activated') {
                  // Show the "You may now use offline" notification
                  _this.setState({
                    offline: true
                  });
                }
              });
            });
          });
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "_askForPermision", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        return new Promise(function (resolve, reject) {
          if (!("Notification" in window)) {
            console.log("This browser does not support desktop notification");
            reject();
          } // Let's check whether notification permissions have alredy been granted
          else if (Notification.permission === "granted") {
              resolve();
            } // Otherwise, we need to ask the user for permission
            else if (Notification.permission !== 'denied' || Notification.permission === "default") {
                Notification.requestPermission(function (permission) {
                  // If the user accepts, let's create a notification
                  if (permission === "granted") {
                    resolve();
                  }
                });
              }
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "_syncInBackground", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        console.log('ServiceWorker::: Background Sync');

        if ("serviceWorker" in navigator) {
          _this._askForPermision().then(function () {
            navigator.serviceWorker.ready.then(function (swRegistration) {
              return swRegistration.sync.register('SyncLogo');
            });
          });
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "_offlineHandler", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          networkStatus: false
        });

        console.log('ServiceWorker::: Status::: offline');
        setTimeout(function () {
          _this._syncInBackground();
        }, 1000);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "_onlineHandler", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          networkStatus: true
        });

        console.log('ServiceWorker::: Status::: online');
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "_notifyUser", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        console.log('ServiceWorker::: Calling the sync function automatically');
        window.addEventListener('online', _this._onlineHandler);
        window.addEventListener('offline', _this._offlineHandler);
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "_pushNotification", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        var applicationServerPublicKey = 'BMyZn-clZfJNpZw8ouT7oJlWRxcn6aibmW1nQweRb6B5c--omBHvkzdgVkrNmyt7Fhhdb-NztypEAfvb35TnLGM';

        var applicationServerKey = _this._urlBase64ToUint8Array(applicationServerPublicKey);

        console.log('ServiceWorker::: Push Notification for the event');

        if ("serviceWorker" in navigator) {
          _this._askForPermision().then(function () {
            navigator.serviceWorker.ready.then(function (swRegistration) {
              swRegistration.pushManager.getSubscription().then(function (subscription) {
                var isSubscribed = !(subscription === null);

                if (isSubscribed) {
                  console.log('User IS subscribed.', subscription);
                } else {
                  swRegistration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: applicationServerKey
                  });
                }
              });
            });
          });
        }
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "_initialOneSignal", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        console.log('OneSignal');
        var OneSignal = window.OneSignal || [];
        OneSignal.push(function () {
          OneSignal.init({
            appId: "e46748fb-1e5b-4f4f-b4dc-ae05806271ac"
          });
        });
      }
    });
    _this.state = {
      offline: true,
      networkStatus: true
    };
    return _this;
  }

  _createClass(Page, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "_urlBase64ToUint8Array",
    value: function _urlBase64ToUint8Array(base64String) {
      var padding = '='.repeat((4 - base64String.length % 4) % 4);
      var base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
      var rawData = window.atob(base64);
      var outputArray = new Uint8Array(rawData.length);

      for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }

      return outputArray;
    }
  }, {
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PageStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, this.state.offline && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components__["a" /* Alarm */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, " Service Worker is Active "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components__["a" /* Alarm */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, " Network Status: ", this.state.networkStatus ? 'Online' : 'Offline', " "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components__["b" /* Button */], {
        onClick: this._registerServiceWorkers,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, "Registering Service Workers"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components__["b" /* Button */], {
        onClick: this._syncInBackground,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }, "Background Sync"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components__["b" /* Button */], {
        onClick: this._notifyUser,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, "Make Background Sync Automatic And Notify User for Network"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components__["b" /* Button */], {
        onClick: this._pushNotification,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, "Push Notification Initialization"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components__["b" /* Button */], {
        onClick: this._initialOneSignal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, "One Signal")), this.props.children);
    }
  }]);

  return Page;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Page);

/***/ }),

/***/ "./components/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Button_Button__ = __webpack_require__("./components/Button/Button.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__Button_Button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Page_Page__ = __webpack_require__("./components/Page/Page.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__Page_Page__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Alarm_Alarm__ = __webpack_require__("./components/Alarm/Alarm.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__Alarm_Alarm__["a"]; });




/***/ }),

/***/ "./constants/colors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  RED: '#990000',
  GREY: '#888888',
  GREY_LIGHT: '#333333',
  WHITE: '#eeeeee'
});

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__("./components/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);

var _jsxFileName = "/Users/cheebg/Projects/mazda-pwa/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var env = process ? process.env : null;

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      var env = this.props.env;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components__["c" /* Page */], {
        env: env,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, "HomePage")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
        href: "/mazda2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, "Mazda2")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, "HomePage"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", {
                  env: env
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map