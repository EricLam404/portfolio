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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\n\nconst quote = {\n    initial: {\n        opacity: 0\n    },\n    anime: {\n        opacity: 1,\n        transition: {\n            delay: 0.5\n        }\n    }\n};\nconst AnimatedText = (param)=>{\n    let { text , className =\"\"  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden \",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h1, {\n            className: \"\".concat(className, \" inline-block w-full text-dark font-bold capitalize text-8xl\"),\n            variants: quote,\n            initial: true,\n            children: text.split(\" \").map((word, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"inline-block\",\n                    children: [\n                        word,\n                        \"\\xa0\"\n                    ]\n                }, word + \"-\" + index, true, {\n                    fileName: \"/Users/ericlam/Documents/GitHub.tmp/portfolio/src/components/AnimatedText.js\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/ericlam/Documents/GitHub.tmp/portfolio/src/components/AnimatedText.js\",\n            lineNumber: 20,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ericlam/Documents/GitHub.tmp/portfolio/src/components/AnimatedText.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_c = AnimatedText;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AnimatedText);\nvar _c;\n$RefreshReg$(_c, \"AnimatedText\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZFRleHQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF5QjtBQUNhO0FBRXRDLE1BQU1FLFFBQVE7SUFDVkMsU0FBUztRQUNMQyxTQUFTO0lBQ2I7SUFDQUMsT0FBTztRQUNIRCxTQUFTO1FBQ1RFLFlBQVk7WUFDUkMsT0FBTztRQUNYO0lBQ0o7QUFDSjtBQUVBLE1BQU1DLGVBQWUsU0FBMEI7UUFBekIsRUFBQ0MsS0FBSSxFQUFFQyxXQUFVLEdBQUUsRUFBQztJQUN4QyxxQkFDRSw4REFBQ0M7UUFBSUQsV0FBVTtrQkFFWCw0RUFBQ1Qsb0RBQVM7WUFBQ1MsV0FBVyxHQUFhLE9BQVZBLFdBQVU7WUFDbkNHLFVBQVVYO1lBQ1ZDLE9BQU87c0JBR0hNLEtBQUtLLEtBQUssQ0FBQyxLQUFLQyxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQzNCLDhEQUFDQztvQkFBMEJSLFdBQVU7O3dCQUNoQ007d0JBQUs7O21CQURDQSxPQUFLLE1BQUlDOzs7Ozs7Ozs7Ozs7Ozs7QUFVaEM7S0FwQk1UO0FBc0JOLCtEQUFlQSxZQUFZQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FuaW1hdGVkVGV4dC5qcz80YzE5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5cbmNvbnN0IHF1b3RlID0ge1xuICAgIGluaXRpYWw6IHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICB9LFxuICAgIGFuaW1lOiB7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIGRlbGF5OiAwLjUsXG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IEFuaW1hdGVkVGV4dCA9ICh7dGV4dCwgY2xhc3NOYW1lPVwiXCJ9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBteC1hdXRvIHB5LTIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuXG4gICAgJz5cbiAgICAgICAgPG1vdGlvbi5oMSBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gaW5saW5lLWJsb2NrIHctZnVsbCB0ZXh0LWRhcmsgZm9udC1ib2xkIGNhcGl0YWxpemUgdGV4dC04eGxgfVxuICAgICAgICB2YXJpYW50cz17cXVvdGV9XG4gICAgICAgIGluaXRpYWxcbiAgICAgICAgPiBcbiAgICAgICAge1xuICAgICAgICAgICAgdGV4dC5zcGxpdChcIiBcIikubWFwKCh3b3JkLCBpbmRleCkgPT5cbiAgICAgICAgICAgIDxzcGFuIGtleT17d29yZCsnLScraW5kZXh9IGNsYXNzTmFtZT0naW5saW5lLWJsb2NrJz5cbiAgICAgICAgICAgICAgICB7d29yZH0mbmJzcDtcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIClcblxuICAgICAgICB9XG4gICAgICAgIDwvbW90aW9uLmgxPlxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0ZWRUZXh0Il0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwicXVvdGUiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1lIiwidHJhbnNpdGlvbiIsImRlbGF5IiwiQW5pbWF0ZWRUZXh0IiwidGV4dCIsImNsYXNzTmFtZSIsImRpdiIsImgxIiwidmFyaWFudHMiLCJzcGxpdCIsIm1hcCIsIndvcmQiLCJpbmRleCIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/AnimatedText.js\n"));

/***/ })

});