"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/NavBar.js":
/*!**********************************!*\
  !*** ./src/components/NavBar.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo */ \"./src/components/Logo.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst CustomLink = (param)=>{\n    let { href , title , className =\"\"  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: href,\n        className: \"\".concat(className, \" relative group\"),\n        children: [\n            title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"h-[1px] inline-block w-0 bg-dark\\n            absolute left-0 -bottom-0.5\\n            group-hover:w-full translate-[width] ease duration-300\\n            \".concat(router.asPath == href ? \"w-full\" : \"w-0\", \"\\n            \"),\n                children: \"\\xa0\"\n            }, void 0, false, {\n                fileName: \"/Users/ericlam/Documents/GitHub.tmp/portfolio/src/components/NavBar.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ericlam/Documents/GitHub.tmp/portfolio/src/components/NavBar.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CustomLink, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = CustomLink;\nconst NavBar = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"w-full px-32 py-8 font-medium flex items-center justify-between\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/\",\n                        title: \"Home\",\n                        className: \"mr-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ericlam/Documents/GitHub.tmp/portfolio/src/components/NavBar.js\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/about\",\n                        title: \"About\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ericlam/Documents/GitHub.tmp/portfolio/src/components/NavBar.js\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/projects\",\n                        title: \"Projects\",\n                        className: \"mx-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ericlam/Documents/GitHub.tmp/portfolio/src/components/NavBar.js\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CustomLink, {\n                        href: \"/contact\",\n                        title: \"Contact Me\",\n                        className: \"ml-4\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ericlam/Documents/GitHub.tmp/portfolio/src/components/NavBar.js\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ericlam/Documents/GitHub.tmp/portfolio/src/components/NavBar.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        target: \"_blank\",\n                        children: \"T\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ericlam/Documents/GitHub.tmp/portfolio/src/components/NavBar.js\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        target: \"_blank\",\n                        children: \"T\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ericlam/Documents/GitHub.tmp/portfolio/src/components/NavBar.js\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        target: \"_blank\",\n                        children: \"T\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ericlam/Documents/GitHub.tmp/portfolio/src/components/NavBar.js\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        target: \"_blank\",\n                        children: \"T\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ericlam/Documents/GitHub.tmp/portfolio/src/components/NavBar.js\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        target: \"_blank\",\n                        children: \"T\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ericlam/Documents/GitHub.tmp/portfolio/src/components/NavBar.js\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/\",\n                        target: \"_blank\",\n                        children: \"T\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ericlam/Documents/GitHub.tmp/portfolio/src/components/NavBar.js\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ericlam/Documents/GitHub.tmp/portfolio/src/components/NavBar.js\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute left-[50%] top-2 translate-x-[-50%]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Logo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/ericlam/Documents/GitHub.tmp/portfolio/src/components/NavBar.js\",\n                    lineNumber: 39,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ericlam/Documents/GitHub.tmp/portfolio/src/components/NavBar.js\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ericlam/Documents/GitHub.tmp/portfolio/src/components/NavBar.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c, _c1;\n$RefreshReg$(_c, \"CustomLink\");\n$RefreshReg$(_c1, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ0g7QUFDQTtBQUNjO0FBRXZDLE1BQU1JLGFBQWEsU0FBaUM7UUFBaEMsRUFBQ0MsS0FBSSxFQUFFQyxNQUFLLEVBQUVDLFdBQVUsR0FBRSxFQUFDOztJQUMzQyxNQUFNQyxTQUFTTCxzREFBU0E7SUFFeEIscUJBQ0ksOERBQUNILGtEQUFJQTtRQUFDSyxNQUFNQTtRQUFNRSxXQUFXLEdBQWEsT0FBVkEsV0FBVTs7WUFDckNEOzBCQUNELDhEQUFDRztnQkFBS0YsV0FBVyw4SkFHMEIsT0FBekNDLE9BQU9FLE1BQU0sSUFBSUwsT0FBTyxXQUFXLEtBQUssRUFBQzswQkFDeEM7Ozs7Ozs7Ozs7OztBQUdmO0dBYk1EOztRQUNhRCxrREFBU0E7OztLQUR0QkM7QUFlTixNQUFNTyxTQUFTLElBQU07SUFDbkIscUJBQ0UsOERBQUNDO1FBQU9MLFdBQVU7OzBCQUNkLDhEQUFDTTs7a0NBQ0csOERBQUNUO3dCQUFXQyxNQUFLO3dCQUFJQyxPQUFNO3dCQUFPQyxXQUFVOzs7Ozs7a0NBQzVDLDhEQUFDSDt3QkFBV0MsTUFBSzt3QkFBU0MsT0FBTTt3QkFBUUMsV0FBVTs7Ozs7O2tDQUNsRCw4REFBQ0g7d0JBQVdDLE1BQUs7d0JBQVlDLE9BQU07d0JBQVdDLFdBQVU7Ozs7OztrQ0FDeEQsOERBQUNIO3dCQUFXQyxNQUFLO3dCQUFXQyxPQUFNO3dCQUFhQyxXQUFVOzs7Ozs7Ozs7Ozs7MEJBRTdELDhEQUFDTTs7a0NBQ0csOERBQUNiLGtEQUFJQTt3QkFBQ0ssTUFBSzt3QkFBSVMsUUFBUTtrQ0FBVTs7Ozs7O2tDQUNqQyw4REFBQ2Qsa0RBQUlBO3dCQUFDSyxNQUFLO3dCQUFJUyxRQUFRO2tDQUFVOzs7Ozs7a0NBQ2pDLDhEQUFDZCxrREFBSUE7d0JBQUNLLE1BQUs7d0JBQUlTLFFBQVE7a0NBQVU7Ozs7OztrQ0FDakMsOERBQUNkLGtEQUFJQTt3QkFBQ0ssTUFBSzt3QkFBSVMsUUFBUTtrQ0FBVTs7Ozs7O2tDQUNqQyw4REFBQ2Qsa0RBQUlBO3dCQUFDSyxNQUFLO3dCQUFJUyxRQUFRO2tDQUFVOzs7Ozs7a0NBQ2pDLDhEQUFDZCxrREFBSUE7d0JBQUNLLE1BQUs7d0JBQUlTLFFBQVE7a0NBQVU7Ozs7Ozs7Ozs7OzswQkFFckMsOERBQUNDO2dCQUFJUixXQUFVOzBCQUNYLDRFQUFDTCw2Q0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJakI7TUF0Qk1TO0FBd0JOLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdkJhci5qcz82YmU2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMb2dvIGZyb20gJy4vTG9nbydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBDdXN0b21MaW5rID0gKHtocmVmLCB0aXRsZSwgY2xhc3NOYW1lPVwiXCJ9KSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGluayBocmVmPXtocmVmfSBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZX0gcmVsYXRpdmUgZ3JvdXBgfT5cbiAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YGgtWzFweF0gaW5saW5lLWJsb2NrIHctMCBiZy1kYXJrXG4gICAgICAgICAgICBhYnNvbHV0ZSBsZWZ0LTAgLWJvdHRvbS0wLjVcbiAgICAgICAgICAgIGdyb3VwLWhvdmVyOnctZnVsbCB0cmFuc2xhdGUtW3dpZHRoXSBlYXNlIGR1cmF0aW9uLTMwMFxuICAgICAgICAgICAgJHtyb3V0ZXIuYXNQYXRoID09IGhyZWYgPyAndy1mdWxsJyA6ICd3LTAnfVxuICAgICAgICAgICAgYH0+Jm5ic3A7PC9zcGFuPlxuICAgICAgICA8L0xpbms+XG4gICAgKVxufVxuXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9J3ctZnVsbCBweC0zMiBweS04IGZvbnQtbWVkaXVtIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2Vlbic+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgICA8Q3VzdG9tTGluayBocmVmPVwiL1wiIHRpdGxlPVwiSG9tZVwiIGNsYXNzTmFtZT0nbXItNCcvPlxuICAgICAgICAgICAgPEN1c3RvbUxpbmsgaHJlZj1cIi9hYm91dFwiIHRpdGxlPVwiQWJvdXRcIiBjbGFzc05hbWU9J214LTQnLz5cbiAgICAgICAgICAgIDxDdXN0b21MaW5rIGhyZWY9XCIvcHJvamVjdHNcIiB0aXRsZT1cIlByb2plY3RzXCIgY2xhc3NOYW1lPSdteC00Jy8+XG4gICAgICAgICAgICA8Q3VzdG9tTGluayBocmVmPVwiL2NvbnRhY3RcIiB0aXRsZT1cIkNvbnRhY3QgTWVcIiBjbGFzc05hbWU9J21sLTQnLz5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxuYXY+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIHRhcmdldD17XCJfYmxhbmtcIn0+VDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgdGFyZ2V0PXtcIl9ibGFua1wifT5UPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiB0YXJnZXQ9e1wiX2JsYW5rXCJ9PlQ8L0xpbms+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIHRhcmdldD17XCJfYmxhbmtcIn0+VDwvTGluaz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgdGFyZ2V0PXtcIl9ibGFua1wifT5UPC9MaW5rPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiB0YXJnZXQ9e1wiX2JsYW5rXCJ9PlQ8L0xpbms+XG4gICAgICAgIDwvbmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgbGVmdC1bNTAlXSB0b3AtMiB0cmFuc2xhdGUteC1bLTUwJV0nPlxuICAgICAgICAgICAgPExvZ28vPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZCYXIiXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwiTG9nbyIsInVzZVJvdXRlciIsIkN1c3RvbUxpbmsiLCJocmVmIiwidGl0bGUiLCJjbGFzc05hbWUiLCJyb3V0ZXIiLCJzcGFuIiwiYXNQYXRoIiwiTmF2QmFyIiwiaGVhZGVyIiwibmF2IiwidGFyZ2V0IiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/NavBar.js\n"));

/***/ })

});