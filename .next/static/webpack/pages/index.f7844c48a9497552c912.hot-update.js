/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Counter.js":
/*!*******************************!*\
  !*** ./components/Counter.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_tadasukearai_development_next_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_tadasukearai_development_next_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _Users_tadasukearai_development_next_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_tadasukearai_development_next_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_tadasukearai_development_next_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_tadasukearai_development_next_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _Users_tadasukearai_development_next_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/tadasukearai/development/next_app/components/Counter.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_Users_tadasukearai_development_next_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_Users_tadasukearai_development_next_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_Users_tadasukearai_development_next_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__.default)(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\nvar Counter = /*#__PURE__*/function (_Component) {\n  (0,_Users_tadasukearai_development_next_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(Counter, _Component);\n\n  var _super = _createSuper(Counter);\n\n  function Counter(props) {\n    var _this;\n\n    (0,_Users_tadasukearai_development_next_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__.default)(this, Counter);\n\n    _this = _super.call(this, props);\n\n    (0,_Users_tadasukearai_development_next_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__.default)((0,_Users_tadasukearai_development_next_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this), \"style\", {\n      fontSize: \"12pt\",\n      padding: \"5px 15px\"\n    });\n\n    _this.doAction = _this.doAction.bind((0,_Users_tadasukearai_development_next_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));\n    _this.reset = _this.reset.bind((0,_Users_tadasukearai_development_next_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__.default)(_this));\n    return _this;\n  }\n\n  (0,_Users_tadasukearai_development_next_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__.default)(Counter, [{\n    key: \"doAction\",\n    value: function doAction(e) {\n      if (e.shiftkey) {\n        return this.props.dispatch({\n          type: 'DECREMENT'\n        });\n      } else {\n        return this.props.dispatch({\n          type: 'INCREMENT'\n        });\n      }\n    }\n  }, {\n    key: \"reset\",\n    value: function reset(e) {\n      return this.props.dispatch({\n        type: 'RESET'\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: [this.props.message, \": \", this.props.count]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          style: this.style,\n          onClick: this.doAction,\n          children: \"Count\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n          style: this.style,\n          onClick: this.reset,\n          children: \"Reset\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 13\n      }, this);\n    }\n  }]);\n\n  return Counter;\n}(react__WEBPACK_IMPORTED_MODULE_8__.Component); //connectでCounterコンポーネントをコネクトしエクスポート\n//(state)=>state)で、state全てを渡す\n//戻り値をexport defaultすることで、ディスパッチと値が全て利用できる。\n\n\nCounter = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.connect)(function (state) {\n  return state;\n})(Counter);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Counter);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db3VudGVyLmpzP2I3ODUiXSwibmFtZXMiOlsiQ291bnRlciIsInByb3BzIiwiZm9udFNpemUiLCJwYWRkaW5nIiwiZG9BY3Rpb24iLCJiaW5kIiwicmVzZXQiLCJlIiwic2hpZnRrZXkiLCJkaXNwYXRjaCIsInR5cGUiLCJtZXNzYWdlIiwiY291bnQiLCJzdHlsZSIsIkNvbXBvbmVudCIsImNvbm5lY3QiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRU1BLE87Ozs7O0FBTUYsbUJBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDZCw4QkFBTUEsS0FBTjs7QUFEYyw0U0FMVjtBQUNKQyxjQUFRLEVBQUUsTUFETjtBQUVKQyxhQUFPLEVBQUU7QUFGTCxLQUtVOztBQUVkLFVBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjQyxJQUFkLHVKQUFoQjtBQUNBLFVBQUtDLEtBQUwsR0FBYSxNQUFLQSxLQUFMLENBQVdELElBQVgsdUpBQWI7QUFIYztBQUlqQjs7Ozs2QkFFUUUsQyxFQUFHO0FBQ1IsVUFBR0EsQ0FBQyxDQUFDQyxRQUFMLEVBQWM7QUFDVixlQUFPLEtBQUtQLEtBQUwsQ0FBV1EsUUFBWCxDQUFvQjtBQUFDQyxjQUFJLEVBQUU7QUFBUCxTQUFwQixDQUFQO0FBQ0gsT0FGRCxNQUVNO0FBQ0YsZUFBTyxLQUFLVCxLQUFMLENBQVdRLFFBQVgsQ0FBb0I7QUFBQ0MsY0FBSSxFQUFFO0FBQVAsU0FBcEIsQ0FBUDtBQUNIO0FBQ0o7OzswQkFFS0gsQyxFQUFHO0FBQ0wsYUFBTyxLQUFLTixLQUFMLENBQVdRLFFBQVgsQ0FBb0I7QUFBQ0MsWUFBSSxFQUFFO0FBQVAsT0FBcEIsQ0FBUDtBQUNIOzs7NkJBRU87QUFDSiwwQkFDSTtBQUFBLGdDQUNJO0FBQUEscUJBQUksS0FBS1QsS0FBTCxDQUFXVSxPQUFmLFFBQTBCLEtBQUtWLEtBQUwsQ0FBV1csS0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUk7QUFBUSxlQUFLLEVBQUUsS0FBS0MsS0FBcEI7QUFBMkIsaUJBQU8sRUFBRSxLQUFLVCxRQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJO0FBQVEsZUFBSyxFQUFFLEtBQUtTLEtBQXBCO0FBQTJCLGlCQUFPLEVBQUUsS0FBS1AsS0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFPSDs7OztFQWhDaUJRLDRDLEdBbUN0QjtBQUNBO0FBQ0E7OztBQUNBZCxPQUFPLEdBQUdlLG9EQUFPLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVNBLEtBQVQ7QUFBQSxDQUFELENBQVAsQ0FBd0JoQixPQUF4QixDQUFWO0FBQ0EsK0RBQWVBLE9BQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvdW50ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY2xhc3MgQ291bnRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3R5bGUgPSB7XG4gICAgICAgIGZvbnRTaXplOiBcIjEycHRcIixcbiAgICAgICAgcGFkZGluZzogXCI1cHggMTVweFwiXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuZG9BY3Rpb24gPSB0aGlzLmRvQWN0aW9uLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMucmVzZXQgPSB0aGlzLnJlc2V0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZG9BY3Rpb24oZSkge1xuICAgICAgICBpZihlLnNoaWZ0a2V5KXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmRpc3BhdGNoKHt0eXBlOiAnREVDUkVNRU5UJ30pO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5kaXNwYXRjaCh7dHlwZTogJ0lOQ1JFTUVOVCd9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0KGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZGlzcGF0Y2goe3R5cGU6ICdSRVNFVCd9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cD57dGhpcy5wcm9wcy5tZXNzYWdlfToge3RoaXMucHJvcHMuY291bnR9PC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3RoaXMuc3R5bGV9IG9uQ2xpY2s9e3RoaXMuZG9BY3Rpb259PkNvdW50PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17dGhpcy5zdHlsZX0gb25DbGljaz17dGhpcy5yZXNldH0+UmVzZXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG4vL2Nvbm5lY3TjgadDb3VudGVy44Kz44Oz44Od44O844ON44Oz44OI44KS44Kz44ON44Kv44OI44GX44Ko44Kv44K544Od44O844OIXG4vLyhzdGF0ZSk9PnN0YXRlKeOBp+OAgXN0YXRl5YWo44Gm44KS5rih44GZXG4vL+aIu+OCiuWApOOCkmV4cG9ydCBkZWZhdWx044GZ44KL44GT44Go44Gn44CB44OH44Kj44K544OR44OD44OB44Go5YCk44GM5YWo44Gm5Yip55So44Gn44GN44KL44CCXG5Db3VudGVyID0gY29ubmVjdCgoc3RhdGUpPT5zdGF0ZSkoQ291bnRlcik7XG5leHBvcnQgZGVmYXVsdCBDb3VudGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Counter.js\n");

/***/ })

});