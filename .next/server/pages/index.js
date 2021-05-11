/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Counter.js":
/*!*******************************!*\
  !*** ./components/Counter.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Counter; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/tadasukearai/development/next_app/components/Counter.js\";\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nclass Counter extends react__WEBPACK_IMPORTED_MODULE_1__.Component {\n  constructor(props) {\n    super(props); //Stateの初期値\n\n    _defineProperty(this, \"msgStyle\", {\n      fontSize: \"16pt\",\n      backgroundColor: \"#eef\",\n      padding: \"5px\"\n    });\n\n    this.state = {\n      counter: 0,\n      msg: 'counterInit: 0'\n    }; //thisでdoActuion関数を影響しないためbindする\n\n    this.doAction = this.doAction.bind(this);\n  }\n\n  doAction() {\n    //doAction発火したらsetStateで更新\n    this.setState(state => {\n      const num = state.counter + 1;\n      return {\n        counter: num,\n        msg: \"count: \" + num\n      };\n    });\n  }\n\n  render() {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n      onClick: this.doAction,\n      style: this.msgStyle,\n      children: this.state.msg\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, this);\n  }\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvdW50ZXIuanM/Yjc4NSJdLCJuYW1lcyI6WyJDb3VudGVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImZvbnRTaXplIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsInN0YXRlIiwiY291bnRlciIsIm1zZyIsImRvQWN0aW9uIiwiYmluZCIsInNldFN0YXRlIiwibnVtIiwicmVuZGVyIiwibXNnU3R5bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVlLE1BQU1BLE9BQU4sU0FBc0JDLDRDQUF0QixDQUFnQztBQU8zQ0MsYUFBVyxDQUFDQyxLQUFELEVBQU87QUFDZCxVQUFNQSxLQUFOLEVBRGMsQ0FFZDs7QUFGYyxzQ0FOUDtBQUNQQyxjQUFRLEVBQUUsTUFESDtBQUVQQyxxQkFBZSxFQUFFLE1BRlY7QUFHUEMsYUFBTyxFQUFFO0FBSEYsS0FNTzs7QUFHZCxTQUFLQyxLQUFMLEdBQWE7QUFDVEMsYUFBTyxFQUFFLENBREE7QUFFVEMsU0FBRyxFQUFFO0FBRkksS0FBYixDQUhjLENBT2Q7O0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNDLElBQWQsQ0FBbUIsSUFBbkIsQ0FBaEI7QUFDSDs7QUFFREQsVUFBUSxHQUFFO0FBQ047QUFDQSxTQUFLRSxRQUFMLENBQWVMLEtBQUQsSUFBUztBQUNuQixZQUFNTSxHQUFHLEdBQUdOLEtBQUssQ0FBQ0MsT0FBTixHQUFnQixDQUE1QjtBQUNBLGFBQU87QUFDSEEsZUFBTyxFQUFFSyxHQUROO0FBRUhKLFdBQUcsRUFBRSxZQUFZSTtBQUZkLE9BQVA7QUFJSCxLQU5EO0FBT0g7O0FBRURDLFFBQU0sR0FBRTtBQUNKLHdCQUNJO0FBQUcsYUFBTyxFQUFFLEtBQUtKLFFBQWpCO0FBQTJCLFdBQUssRUFBRSxLQUFLSyxRQUF2QztBQUFBLGdCQUNLLEtBQUtSLEtBQUwsQ0FBV0U7QUFEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBSUg7O0FBbEMwQyIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ291bnRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvdW50ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIG1zZ1N0eWxlID0ge1xuICAgICAgICBmb250U2l6ZTogXCIxNnB0XCIsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZWVmXCIsXG4gICAgICAgIHBhZGRpbmc6IFwiNXB4XCJcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgLy9TdGF0ZeOBruWIneacn+WApFxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY291bnRlcjogMCxcbiAgICAgICAgICAgIG1zZzogJ2NvdW50ZXJJbml0OiAwJ1xuICAgICAgICB9O1xuICAgICAgICAvL3RoaXPjgadkb0FjdHVpb27plqLmlbDjgpLlvbHpn7/jgZfjgarjgYTjgZ/jgoFiaW5k44GZ44KLXG4gICAgICAgIHRoaXMuZG9BY3Rpb24gPSB0aGlzLmRvQWN0aW9uLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZG9BY3Rpb24oKXtcbiAgICAgICAgLy9kb0FjdGlvbueZuueBq+OBl+OBn+OCiXNldFN0YXRl44Gn5pu05pawXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoKHN0YXRlKT0+e1xuICAgICAgICAgICAgY29uc3QgbnVtID0gc3RhdGUuY291bnRlciArIDE7XG4gICAgICAgICAgICByZXR1cm4oe1xuICAgICAgICAgICAgICAgIGNvdW50ZXI6IG51bSxcbiAgICAgICAgICAgICAgICBtc2c6IFwiY291bnQ6IFwiICsgbnVtXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8cCBvbkNsaWNrPXt0aGlzLmRvQWN0aW9ufSBzdHlsZT17dGhpcy5tc2dTdHlsZX0+XG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubXNnfVxuICAgICAgICAgICAgPC9wPilcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Counter.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Counter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Counter */ \"./components/Counter.js\");\n/* harmony import */ var _static_Style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/Style */ \"./static/Style.js\");\n\nvar _jsxFileName = \"/Users/tadasukearai/development/next_app/pages/index.js\";\n//Counterコンポーネントをインポート\n // import Link from 'next/link';\n//styleScriptをインポート\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n  children: [_static_Style__WEBPACK_IMPORTED_MODULE_2__.default, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n    children: \"Next.js\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n    children: \"Welcome to next.js!\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Counter__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, undefined)]\n}, void 0, true, {\n  fileName: _jsxFileName,\n  lineNumber: 8,\n  columnNumber: 22\n}, undefined));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbInN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Q0FFQTtBQUNBOztBQUNBO0FBR0EsK0RBQWUsbUJBQU07QUFBQSxhQUVoQkEsa0RBRmdCLGVBR2pCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSGlCLGVBSWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSmlCLGVBS2pCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMaUIsZUFNakIsOERBQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5pQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBckIiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQ291bnRlcuOCs+ODs+ODneODvOODjeODs+ODiOOCkuOCpOODs+ODneODvOODiFxuaW1wb3J0IENvdW50ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db3VudGVyJztcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG4vL3N0eWxlU2NyaXB044KS44Kk44Oz44Od44O844OIXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3RhdGljL1N0eWxlJztcblxuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiA8ZGl2PlxuICAgIHsvKiBKU1jjgaflh7rlipsgKi99XG4gICAge3N0eWxlfVxuICAgIDxoMT5OZXh0LmpzPC9oMT5cbiAgICA8cD5XZWxjb21lIHRvIG5leHQuanMhPC9wPlxuICAgIDxociAvPlxuICAgIDxDb3VudGVyIC8+XG4gICAgey8qIDxkaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvb3RoZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24+R28gdG8gT3RoZXIgUGFnZSAmZ3Q7Jmd0OzwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgPC9kaXY+ICovfVxuPC9kaXY+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./static/Style.js":
/*!*************************!*\
  !*** ./static/Style.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar _jsxFileName = \"/Users/tadasukearai/development/next_app/static/Style.js\";\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {\n  children: `\n        body{\n            margin: 10px;\n        }\n        h1 {\n            font-size: 68pt;\n            font-weight: bold;\n            text-aligin: right;\n            letter-spacing: -8px;\n            color: #f0f0f0;\n            margin:-32px 0px;\n        }\n        p {\n            margin: 0;\n            color: #666;\n            font-size: 16pt;\n        }\n    `\n}, void 0, false, {\n  fileName: _jsxFileName,\n  lineNumber: 1,\n  columnNumber: 16\n}, undefined));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdGF0aWMvU3R5bGUuanM/NzFhMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRFQUFlO0FBQUEsWUFDVDtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQmU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFmIiwiZmlsZSI6Ii4vc3RhdGljL1N0eWxlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgPHN0eWxlPlxuICAgIHtgXG4gICAgICAgIGJvZHl7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiA2OHB0O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWdpbjogcmlnaHQ7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLThweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZjBmMGYwO1xuICAgICAgICAgICAgbWFyZ2luOi0zMnB4IDBweDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB0O1xuICAgICAgICB9XG4gICAgYH1cbjwvc3R5bGU+OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./static/Style.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();