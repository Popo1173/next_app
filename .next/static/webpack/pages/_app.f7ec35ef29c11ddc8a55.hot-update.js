/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initStore\": function() { return /* binding */ initStore; }\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-thunk */ \"./node_modules/redux-thunk/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n //ステートの初期化\n\nvar initial = {\n  message: 'START',\n  data: [],\n  number: [],\n  result: 0\n};\n\nfunction calcReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    //計算実行\n    case 'ENTER':\n      //slice()で新しい配列を作り、stateに設定する\n      var data2 = state.data.slice(); //入力された値をactionにvalueという名前をつけて変数Sに入れる\n\n      var s = action.value; //入力された値を配列に追加\n\n      data2.unshift(s); //入力された値を数字だけにする（数字以外を全て空のテキストに痴漢）\n\n      var num = s.replace(/[^0-9]/g, \"\"); //number2配列を作りstateに設定する\n\n      var number2 = state.number.slice(); //痴漢した数字をnumber2配列に追加する\n\n      number2.unshift(num); //取り出したテキストそれぞれに1をかけておく\n      //replaceしたため、テキストどうしを足し算すると判断されるため、resultに1をかけておく\n\n      var result = state.result * 1 + (num + 1);\n      return {\n        message: 'ENTER',\n        data: data2,\n        number: number2,\n        result: result\n      };\n    //リセット\n\n    case 'RESET':\n      return {\n        message: 'RESET',\n        data: [],\n        number: [],\n        result: 0\n      };\n    //デフォルト\n\n    default:\n      return state;\n  }\n} //initStore関数\n//initStore関数（redux-store.jsで必要）\n//redux-store.js のstore.jsにあるinitStoreを呼び出しているので記載\n//createSoreを関数の形にしてエクスポートしているだけ\n\n\nfunction initStore() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initial;\n  return (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(calcReducer, state, (0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_0__.default));\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUuanM/MDU3MSJdLCJuYW1lcyI6WyJpbml0aWFsIiwibWVzc2FnZSIsImRhdGEiLCJudW1iZXIiLCJyZXN1bHQiLCJjYWxjUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImRhdGEyIiwic2xpY2UiLCJzIiwidmFsdWUiLCJ1bnNoaWZ0IiwibnVtIiwicmVwbGFjZSIsIm51bWJlcjIiLCJpbml0U3RvcmUiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rTWlkZGxld2VhcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtDQUdBOztBQUNBLElBQU1BLE9BQU8sR0FBRztBQUNaQyxTQUFPLEVBQUUsT0FERztBQUVaQyxNQUFJLEVBQUUsRUFGTTtBQUdaQyxRQUFNLEVBQUMsRUFISztBQUlaQyxRQUFNLEVBQUU7QUFKSSxDQUFoQjs7QUFPQSxTQUFTQyxXQUFULEdBQThDO0FBQUEsTUFBekJDLEtBQXlCLHVFQUFqQk4sT0FBaUI7QUFBQSxNQUFSTyxNQUFROztBQUMxQyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDSTtBQUNBLFNBQUssT0FBTDtBQUNJO0FBQ0EsVUFBSUMsS0FBSyxHQUFHSCxLQUFLLENBQUNKLElBQU4sQ0FBV1EsS0FBWCxFQUFaLENBRkosQ0FHSTs7QUFDQSxVQUFJQyxDQUFDLEdBQUdKLE1BQU0sQ0FBQ0ssS0FBZixDQUpKLENBS0k7O0FBQ0FILFdBQUssQ0FBQ0ksT0FBTixDQUFjRixDQUFkLEVBTkosQ0FRSTs7QUFDQSxVQUFJRyxHQUFHLEdBQUdILENBQUMsQ0FBQ0ksT0FBRixDQUFVLFNBQVYsRUFBb0IsRUFBcEIsQ0FBVixDQVRKLENBVUk7O0FBQ0EsVUFBSUMsT0FBTyxHQUFHVixLQUFLLENBQUNILE1BQU4sQ0FBYU8sS0FBYixFQUFkLENBWEosQ0FZSTs7QUFDQU0sYUFBTyxDQUFDSCxPQUFSLENBQWdCQyxHQUFoQixFQWJKLENBZUk7QUFDQTs7QUFDQSxVQUFJVixNQUFNLEdBQUlFLEtBQUssQ0FBQ0YsTUFBTixHQUFlLENBQWhCLElBQXNCVSxHQUFHLEdBQUcsQ0FBNUIsQ0FBYjtBQUNBLGFBQU87QUFDSGIsZUFBTyxFQUFFLE9BRE47QUFFSEMsWUFBSSxFQUFFTyxLQUZIO0FBR0hOLGNBQU0sRUFBRWEsT0FITDtBQUlIWixjQUFNLEVBQUVBO0FBSkwsT0FBUDtBQU1KOztBQUNBLFNBQUssT0FBTDtBQUNJLGFBQU87QUFDSEgsZUFBTyxFQUFFLE9BRE47QUFFSEMsWUFBSSxFQUFFLEVBRkg7QUFHSEMsY0FBTSxFQUFFLEVBSEw7QUFJSEMsY0FBTSxFQUFFO0FBSkwsT0FBUDtBQU9KOztBQUNBO0FBQ0ksYUFBT0UsS0FBUDtBQXJDUjtBQXVDSCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLFNBQVNXLFNBQVQsR0FBb0M7QUFBQSxNQUFqQlgsS0FBaUIsdUVBQVROLE9BQVM7QUFDdkMsU0FBT2tCLGtEQUFXLENBQUNiLFdBQUQsRUFBY0MsS0FBZCxFQUNkYSxzREFBZSxDQUFDQyxnREFBRCxDQURELENBQWxCO0FBRUgiLCJmaWxlIjoiLi9zdG9yZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmtNaWRkbGV3ZWFyZSBmcm9tICdyZWR1eC10aHVuayc7XG5cbi8v44K544OG44O844OI44Gu5Yid5pyf5YyWXG5jb25zdCBpbml0aWFsID0ge1xuICAgIG1lc3NhZ2U6ICdTVEFSVCcsXG4gICAgZGF0YTogW10sXG4gICAgbnVtYmVyOltdLFxuICAgIHJlc3VsdDogMFxufVxuXG5mdW5jdGlvbiBjYWxjUmVkdWNlcihzdGF0ZSA9IGluaXRpYWwsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgLy/oqIjnrpflrp/ooYxcbiAgICAgICAgY2FzZSAnRU5URVInOlxuICAgICAgICAgICAgLy9zbGljZSgp44Gn5paw44GX44GE6YWN5YiX44KS5L2c44KK44CBc3RhdGXjgavoqK3lrprjgZnjgotcbiAgICAgICAgICAgIGxldCBkYXRhMiA9IHN0YXRlLmRhdGEuc2xpY2UoKTtcbiAgICAgICAgICAgIC8v5YWl5Yqb44GV44KM44Gf5YCk44KSYWN0aW9u44GrdmFsdWXjgajjgYTjgYblkI3liY3jgpLjgaTjgZHjgablpInmlbBT44Gr5YWl44KM44KLXG4gICAgICAgICAgICBsZXQgcyA9IGFjdGlvbi52YWx1ZTtcbiAgICAgICAgICAgIC8v5YWl5Yqb44GV44KM44Gf5YCk44KS6YWN5YiX44Gr6L+95YqgXG4gICAgICAgICAgICBkYXRhMi51bnNoaWZ0KHMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvL+WFpeWKm+OBleOCjOOBn+WApOOCkuaVsOWtl+OBoOOBkeOBq+OBmeOCi++8iOaVsOWtl+S7peWkluOCkuWFqOOBpuepuuOBruODhuOCreOCueODiOOBq+eXtOa8ou+8iVxuICAgICAgICAgICAgbGV0IG51bSA9IHMucmVwbGFjZSgvW14wLTldL2csXCJcIik7XG4gICAgICAgICAgICAvL251bWJlcjLphY3liJfjgpLkvZzjgopzdGF0ZeOBq+ioreWumuOBmeOCi1xuICAgICAgICAgICAgbGV0IG51bWJlcjIgPSBzdGF0ZS5udW1iZXIuc2xpY2UoKTtcbiAgICAgICAgICAgIC8v55e05ryi44GX44Gf5pWw5a2X44KSbnVtYmVyMumFjeWIl+OBq+i/veWKoOOBmeOCi1xuICAgICAgICAgICAgbnVtYmVyMi51bnNoaWZ0KG51bSk7XG5cbiAgICAgICAgICAgIC8v5Y+W44KK5Ye644GX44Gf44OG44Kt44K544OI44Gd44KM44Ge44KM44GrMeOCkuOBi+OBkeOBpuOBiuOBj1xuICAgICAgICAgICAgLy9yZXBsYWNl44GX44Gf44Gf44KB44CB44OG44Kt44K544OI44Gp44GG44GX44KS6Laz44GX566X44GZ44KL44Go5Yik5pat44GV44KM44KL44Gf44KB44CBcmVzdWx044GrMeOCkuOBi+OBkeOBpuOBiuOBj1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IChzdGF0ZS5yZXN1bHQgKiAxKSArIChudW0gKyAxKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0VOVEVSJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhMixcbiAgICAgICAgICAgICAgICBudW1iZXI6IG51bWJlcjIsXG4gICAgICAgICAgICAgICAgcmVzdWx0OiByZXN1bHRcbiAgICAgICAgICAgIH07XG4gICAgICAgIC8v44Oq44K744OD44OIXG4gICAgICAgIGNhc2UgJ1JFU0VUJzpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1JFU0VUJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBbXSxcbiAgICAgICAgICAgICAgICBudW1iZXI6IFtdLFxuICAgICAgICAgICAgICAgIHJlc3VsdDogMFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfTtcbiAgICAgICAgLy/jg4fjg5Xjgqnjg6vjg4hcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG59XG5cbi8vaW5pdFN0b3Jl6Zai5pWwXG4vL2luaXRTdG9yZemWouaVsO+8iHJlZHV4LXN0b3JlLmpz44Gn5b+F6KaB77yJXG4vL3JlZHV4LXN0b3JlLmpzIOOBrnN0b3JlLmpz44Gr44GC44KLaW5pdFN0b3Jl44KS5ZG844Gz5Ye644GX44Gm44GE44KL44Gu44Gn6KiY6LyJXG4vL2NyZWF0ZVNvcmXjgpLplqLmlbDjga7lvaLjgavjgZfjgabjgqjjgq/jgrnjg53jg7zjg4jjgZfjgabjgYTjgovjgaDjgZFcbmV4cG9ydCBmdW5jdGlvbiBpbml0U3RvcmUoc3RhdGUgPSBpbml0aWFsKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKGNhbGNSZWR1Y2VyLCBzdGF0ZSwgXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZSh0aHVua01pZGRsZXdlYXJlKSlcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store.js\n");

/***/ })

});