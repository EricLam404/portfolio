"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/AnimatedText.js":
/*!****************************************!*\
  !*** ./src/components/AnimatedText.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\nconst quote = {\n    initial: {\n        opacity: 0\n    },\n    animate: {\n        opacity: 1,\n        transition: {\n            delay: 0.5\n        }\n    }\n};\nconst singleWord = {\n    initial: {\n        opacity: 0,\n        y: 50\n    },\n    animate: {\n        opacity: 1,\n        transition: {\n            delay: 0.5\n        }\n    }\n};\nconst AnimatedText = (param)=>{\n    let { text , className =\"\"  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h1, {\n            className: \"\".concat(className, \" inline-block w-full text-dark font-bold capitalize text-8xl\"),\n            variants: quote,\n            initial: \"initial\",\n            animate: \"animate\",\n            children: text.split(\" \").map((word, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {\n                    className: \"inline-block\",\n                    children: [\n                        word,\n                        \"\\xa0\"\n                    ]\n                }, word + \"-\" + index, true, {\n                    fileName: \"/Users/ericlam/Documents/GitHub.tmp/portfolio/src/components/AnimatedText.js\",\n                    lineNumber: 40,\n                    columnNumber: 13\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/ericlam/Documents/GitHub.tmp/portfolio/src/components/AnimatedText.js\",\n            lineNumber: 33,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ericlam/Documents/GitHub.tmp/portfolio/src/components/AnimatedText.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_c = AnimatedText;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimatedText);\nvar _c;\n$RefreshReg$(_c, \"AnimatedText\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5QjtBQUNhO0FBRXRDLE1BQU1FLFFBQVE7SUFDVkMsU0FBUztRQUNMQyxTQUFTO0lBQ2I7SUFDQUMsU0FBUztRQUNMRCxTQUFTO1FBQ1RFLFlBQVk7WUFDUkMsT0FBTztRQUNYO0lBQ0o7QUFDSjtBQUVBLE1BQU1DLGFBQWE7SUFDZkwsU0FBUztRQUNMQyxTQUFTO1FBQ1RLLEdBQUc7SUFDUDtJQUNBSixTQUFTO1FBQ0xELFNBQVM7UUFDVEUsWUFBWTtZQUNSQyxPQUFPO1FBQ1g7SUFDSjtBQUNKO0FBRUEsTUFBTUcsZUFBZSxTQUEwQjtRQUF6QixFQUFDQyxLQUFJLEVBQUVDLFdBQVUsR0FBRSxFQUFDO0lBQ3hDLHFCQUNFLDhEQUFDQztRQUFJRCxXQUFVO2tCQUVYLDRFQUFDWCxvREFBUztZQUFDVyxXQUFXLEdBQWEsT0FBVkEsV0FBVTtZQUNuQ0csVUFBVWI7WUFDVkMsU0FBUTtZQUNSRSxTQUFRO3NCQUdKTSxLQUFLSyxLQUFLLENBQUMsS0FBS0MsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUMzQiw4REFBQ2xCLHNEQUFXO29CQUFzQlcsV0FBVTs7d0JBQ3ZDTTt3QkFBSzs7bUJBRFFBLE9BQUssTUFBSUM7Ozs7Ozs7Ozs7Ozs7OztBQVV2QztLQXJCTVQ7QUF1Qk4sK0RBQWVBLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQW5pbWF0ZWRUZXh0LmpzPzRjMTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcblxuY29uc3QgcXVvdGUgPSB7XG4gICAgaW5pdGlhbDoge1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgIH0sXG4gICAgYW5pbWF0ZToge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICBkZWxheTogMC41LFxuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBzaW5nbGVXb3JkID0ge1xuICAgIGluaXRpYWw6IHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgeTogNTBcbiAgICB9LFxuICAgIGFuaW1hdGU6IHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgZGVsYXk6IDAuNSxcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgQW5pbWF0ZWRUZXh0ID0gKHt0ZXh0LCBjbGFzc05hbWU9XCJcIn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIG14LWF1dG8gcHktMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlciBvdmVyZmxvdy1oaWRkZW5cbiAgICAnPlxuICAgICAgICA8bW90aW9uLmgxIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBpbmxpbmUtYmxvY2sgdy1mdWxsIHRleHQtZGFyayBmb250LWJvbGQgY2FwaXRhbGl6ZSB0ZXh0LTh4bGB9XG4gICAgICAgIHZhcmlhbnRzPXtxdW90ZX1cbiAgICAgICAgaW5pdGlhbD1cImluaXRpYWxcIlxuICAgICAgICBhbmltYXRlPVwiYW5pbWF0ZVwiXG4gICAgICAgID4gXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRleHQuc3BsaXQoXCIgXCIpLm1hcCgod29yZCwgaW5kZXgpID0+XG4gICAgICAgICAgICA8bW90aW9uLnNwYW4ga2V5PXt3b3JkKyctJytpbmRleH0gY2xhc3NOYW1lPSdpbmxpbmUtYmxvY2snPlxuICAgICAgICAgICAgICAgIHt3b3JkfSZuYnNwO1xuICAgICAgICAgICAgPC9tb3Rpb24uc3Bhbj5cbiAgICAgICAgICAgIClcblxuICAgICAgICB9XG4gICAgICAgIDwvbW90aW9uLmgxPlxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZWRUZXh0Il0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwicXVvdGUiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJzaW5nbGVXb3JkIiwieSIsIkFuaW1hdGVkVGV4dCIsInRleHQiLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsInZhcmlhbnRzIiwic3BsaXQiLCJtYXAiLCJ3b3JkIiwiaW5kZXgiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/AnimatedText.js\n"));

/***/ })

});