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

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Nav_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Nav/Navbar */ \"./src/Nav/Navbar.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _Contracts_CarePledgeCaseFactory_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Contracts/CarePledgeCaseFactory.json */ \"./src/Contracts/CarePledgeCaseFactory.json\");\n/* harmony import */ var alchemy_sdk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! alchemy-sdk */ \"./node_modules/alchemy-sdk/dist/esm/index.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n//----------------------------------------------------------------------------\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_4___default().config();\nvar settings = {\n    apiKey: \"nm55LXt0n2-uyklwbgnKGJpiKdqdjRh_\",\n    network: alchemy_sdk__WEBPACK_IMPORTED_MODULE_6__.Network.ETH_SEPOLIA\n};\nvar alchemy = new alchemy_sdk__WEBPACK_IMPORTED_MODULE_6__.Alchemy(settings);\nvar factory = \"0x2987BEc55f255E045404e9814DcA176B8bcc8f05\";\nvar PRIVATE_KEY = process.env.PRIVATE_KEY;\nvar usdc = \"0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8\";\nfunction HomePage() {\n    _s();\n    var call = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_7__._)(function() {\n            var provider, wallet, signerz, encodedVal, transaction, contract;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_8__._)(this, function(_state) {\n                provider = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.providers.JsonRpcProvider(\"https://eth-sepolia.g.alchemy.com/v2/nm55LXt0n2-uyklwbgnKGJpiKdqdjRh_\");\n                wallet = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Wallet(\"0faeb649b2fd06ee86f26c97baabca3719ae49bb42ecf36deff464483798d4c9\", provider);\n                signerz = provider.getSigner();\n                encodedVal = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.utils.AbiCoder().encode([\n                    \"address\",\n                    \"address[]\"\n                ], [\n                    \"0x263c0a1ff85604f0ee3f4160cAa445d0bad28dF7\",\n                    [\n                        \"0xB19FEC2C25a620F21a0C6ACf59812983Faf5Cf9B\"\n                    ]\n                ]);\n                transaction = {\n                    donationToken: usdc,\n                    data: encodedVal\n                };\n                contract = new ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.Contract(factory, _Contracts_CarePledgeCaseFactory_json__WEBPACK_IMPORTED_MODULE_3__, provider);\n                console.log(contract, \"alkjf\");\n                // let res = contract.methods.createNewCase(usdc, encodedVal);\n                console.log(res);\n                console.log(\"Encoder\", encodedVal);\n                return [\n                    2\n                ];\n            });\n        // alchemy.core.send(\n        //   \"eth_createNewCase\",\n        //   [factory, usdc, encodedVal]\n        // ).then(\n        //   response => console.log(response)\n        // );\n        });\n        return function call() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        call();\n    }, []);\n    // Now you can use ethers.js to interact with the connected wallet  console.log('Connected wallet address:', signer);\n    var addressCheckSum = function(addr) {\n        return ethers__WEBPACK_IMPORTED_MODULE_9__.ethers.getAddress(addr);\n    };\n    // const createCase = async (patientAddress) => {\n    //   console.log(\"Address: \", patientAddress);\n    //   console.log(\"Balance: \", await provider.getBalance(patientAddress));\n    //   // sepolia address\n    //   const usdcAddress = addressCheckSum('0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8');\n    //   console.log(usdcAddress);\n    //   console.log(\"contract: \",signer);\n    //   console.log(\"PATIENT ADDRESS:\", patientAddress);\n    //   console.log(\"TYPEOF: \", typeof(patientAddress));\n    //   const encoding = new ethers.AbiCoder(\n    //     ['bytes'],\n    //     [addressCheckSum(patientAddress), addressCheckSum('0x263c0a1ff85604f0ee3f4160cAa445d0bad28dF7'), addressCheckSum('0xB19FEC2C25a620F21a0C6ACf59812983Faf5Cf9B')]\n    //   )\n    //   const response = await contract.connect(patientAddress).createNewCase(usdcAddress,encoding);\n    //   console.log(response);\n    //   return response;\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    rel: \"stylesheet\",\n                    href: \"//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css\"\n                }, void 0, false, {\n                    fileName: \"/Users/darrenchan/src/permissionless-hackathon/care-pledge/frontend/src/src/pages/index.jsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/darrenchan/src/permissionless-hackathon/care-pledge/frontend/src/src/pages/index.jsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Nav_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/darrenchan/src/permissionless-hackathon/care-pledge/frontend/src/src/pages/index.jsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Container, {\n                className: \"landing-container dark-theme\",\n                style: {\n                    width: \"70vw\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Header, {\n                        as: \"h1\",\n                        style: {\n                            textAlign: \"left\",\n                            fontSize: \"6em\",\n                            paddingTop: \"150px\",\n                            marginBottom: \"20px\"\n                        },\n                        children: [\n                            \"Redefining \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                children: \"Trust\"\n                            }, void 0, false, {\n                                fileName: \"/Users/darrenchan/src/permissionless-hackathon/care-pledge/frontend/src/src/pages/index.jsx\",\n                                lineNumber: 99,\n                                columnNumber: 20\n                            }, this),\n                            \" in \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/darrenchan/src/permissionless-hackathon/care-pledge/frontend/src/src/pages/index.jsx\",\n                                lineNumber: 99,\n                                columnNumber: 36\n                            }, this),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"u\", {\n                                children: \"Medical Crowdfunding\"\n                            }, void 0, false, {\n                                fileName: \"/Users/darrenchan/src/permissionless-hackathon/care-pledge/frontend/src/src/pages/index.jsx\",\n                                lineNumber: 99,\n                                columnNumber: 43\n                            }, this),\n                            \" by Blockchain Transparency.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/darrenchan/src/permissionless-hackathon/care-pledge/frontend/src/src/pages/index.jsx\",\n                        lineNumber: 90,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            textAlign: \"left\",\n                            paddingTop: \"10px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {\n                                className: \"left-aligned-button\",\n                                style: {\n                                    padding: \"20px\",\n                                    marginRight: \"20px\"\n                                },\n                                href: \"/projects\",\n                                children: \"View Projects\"\n                            }, void 0, false, {\n                                fileName: \"/Users/darrenchan/src/permissionless-hackathon/care-pledge/frontend/src/src/pages/index.jsx\",\n                                lineNumber: 103,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_10__.Button, {\n                                className: \"left-aligned-button\",\n                                style: {\n                                    padding: \"20px\"\n                                },\n                                href: \"/projects/create\",\n                                children: \"Start your own project\"\n                            }, void 0, false, {\n                                fileName: \"/Users/darrenchan/src/permissionless-hackathon/care-pledge/frontend/src/src/pages/index.jsx\",\n                                lineNumber: 110,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/darrenchan/src/permissionless-hackathon/care-pledge/frontend/src/src/pages/index.jsx\",\n                        lineNumber: 102,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/darrenchan/src/permissionless-hackathon/care-pledge/frontend/src/src/pages/index.jsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(HomePage, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFUO0dBcEd3QnpCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qc3g/ZDM1YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL05hdi9OYXZiYXJcIjtcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBDb250YWluZXIsIEhlYWRlciwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5pbXBvcnQgQ2FyZVBsZWRnZUNhc2VGYWN0b3J5QUJJIGZyb20gJy4uL0NvbnRyYWN0cy9DYXJlUGxlZGdlQ2FzZUZhY3RvcnkuanNvbic7XG5pbXBvcnQgeyBOZXR3b3JrLCBBbGNoZW15LCBXYWxsZXQsIFV0aWxzIH0gZnJvbSAnYWxjaGVteS1zZGsnO1xuaW1wb3J0IGRvdGVudiBmcm9tIFwiZG90ZW52XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmRvdGVudi5jb25maWcoKTtcblxuY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgYXBpS2V5OiBcIm5tNTVMWHQwbjItdXlrbHdiZ25LR0pwaUtkcWRqUmhfXCIsXG4gICAgbmV0d29yazogTmV0d29yay5FVEhfU0VQT0xJQSxcbn07XG5jb25zdCBhbGNoZW15ID0gbmV3IEFsY2hlbXkoc2V0dGluZ3MpO1xuXG5jb25zdCBmYWN0b3J5ID0gXCIweDI5ODdCRWM1NWYyNTVFMDQ1NDA0ZTk4MTREY0ExNzZCOGJjYzhmMDVcIjtcbmNvbnN0IHtQUklWQVRFX0tFWX0gPSBwcm9jZXNzLmVudjtcbmNvbnN0IHVzZGMgPSBcIjB4OTRhOUQ5QUM4YTIyNTM0RTNGYUNhOUY0ZTdGMkUyY2Y4NWQ1RTRDOFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgY29uc3QgY2FsbCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLkpzb25ScGNQcm92aWRlcignaHR0cHM6Ly9ldGgtc2Vwb2xpYS5nLmFsY2hlbXkuY29tL3YyL25tNTVMWHQwbjItdXlrbHdiZ25LR0pwaUtkcWRqUmhfJyk7XG4gICAgY29uc3Qgd2FsbGV0ID0gbmV3IGV0aGVycy5XYWxsZXQoXCIwZmFlYjY0OWIyZmQwNmVlODZmMjZjOTdiYWFiY2EzNzE5YWU0OWJiNDJlY2YzNmRlZmY0NjQ0ODM3OThkNGM5XCIsIHByb3ZpZGVyKTtcbiAgXG4gICAgLy8gTm93IHlvdSBjYW4gdXNlIGV0aGVycy5qcyB0byBpbnRlcmFjdCB3aXRoIHRoZSBjb25uZWN0ZWQgd2FsbGV0XG4gICAgY29uc3Qgc2lnbmVyeiA9IHByb3ZpZGVyLmdldFNpZ25lcigpO1xuICBcbiAgICBsZXQgZW5jb2RlZFZhbCA9IG5ldyBldGhlcnMudXRpbHMuQWJpQ29kZXIoKS5lbmNvZGUoW1wiYWRkcmVzc1wiLCBcImFkZHJlc3NbXVwiXSwgWycweDI2M2MwYTFmZjg1NjA0ZjBlZTNmNDE2MGNBYTQ0NWQwYmFkMjhkRjcnLFsnMHhCMTlGRUMyQzI1YTYyMEYyMWEwQzZBQ2Y1OTgxMjk4M0ZhZjVDZjlCJ11dKTtcbiAgICAvLyBFeGFtcGxlOiBTZW5kIGEgdHJhbnNhY3Rpb25cbiAgICBjb25zdCB0cmFuc2FjdGlvbiA9IHtcbiAgICAgIGRvbmF0aW9uVG9rZW46IHVzZGMsXG4gICAgICBkYXRhOiBlbmNvZGVkVmFsXG4gICAgfTtcblxuICAgIGxldCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoZmFjdG9yeSwgQ2FyZVBsZWRnZUNhc2VGYWN0b3J5QUJJLCBwcm92aWRlcik7XG5jb25zb2xlLmxvZyhjb250cmFjdCwgXCJhbGtqZlwiKVxuICAgIC8vIGxldCByZXMgPSBjb250cmFjdC5tZXRob2RzLmNyZWF0ZU5ld0Nhc2UodXNkYywgZW5jb2RlZFZhbCk7XG4gIFxuICAgIGNvbnNvbGUubG9nKHJlcyk7ICBcbiAgXG4gICAgY29uc29sZS5sb2coXCJFbmNvZGVyXCIsIGVuY29kZWRWYWwpO1xuICAgIFxuICAgIC8vIGFsY2hlbXkuY29yZS5zZW5kKFxuICAgIC8vICAgXCJldGhfY3JlYXRlTmV3Q2FzZVwiLFxuICAgIC8vICAgW2ZhY3RvcnksIHVzZGMsIGVuY29kZWRWYWxdXG4gICAgLy8gKS50aGVuKFxuICAgIC8vICAgcmVzcG9uc2UgPT4gY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgLy8gKTtcbiAgfVxuIFxuICB1c2VFZmZlY3QoKCk9PiB7XG4gICAgY2FsbCgpXG4gIH0sW10pXG5cbiAgLy8gTm93IHlvdSBjYW4gdXNlIGV0aGVycy5qcyB0byBpbnRlcmFjdCB3aXRoIHRoZSBjb25uZWN0ZWQgd2FsbGV0ICBjb25zb2xlLmxvZygnQ29ubmVjdGVkIHdhbGxldCBhZGRyZXNzOicsIHNpZ25lcik7XG5cbiAgY29uc3QgYWRkcmVzc0NoZWNrU3VtID0gKGFkZHIpID0+IHtcbiAgICByZXR1cm4gZXRoZXJzLmdldEFkZHJlc3MoYWRkcik7XG4gIH07XG5cbiAgLy8gY29uc3QgY3JlYXRlQ2FzZSA9IGFzeW5jIChwYXRpZW50QWRkcmVzcykgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKFwiQWRkcmVzczogXCIsIHBhdGllbnRBZGRyZXNzKTtcbiAgLy8gICBjb25zb2xlLmxvZyhcIkJhbGFuY2U6IFwiLCBhd2FpdCBwcm92aWRlci5nZXRCYWxhbmNlKHBhdGllbnRBZGRyZXNzKSk7XG4gIC8vICAgLy8gc2Vwb2xpYSBhZGRyZXNzXG4gIC8vICAgY29uc3QgdXNkY0FkZHJlc3MgPSBhZGRyZXNzQ2hlY2tTdW0oJzB4OTRhOUQ5QUM4YTIyNTM0RTNGYUNhOUY0ZTdGMkUyY2Y4NWQ1RTRDOCcpO1xuICAvLyAgIGNvbnNvbGUubG9nKHVzZGNBZGRyZXNzKTtcbiAgLy8gICBjb25zb2xlLmxvZyhcImNvbnRyYWN0OiBcIixzaWduZXIpO1xuICAvLyAgIGNvbnNvbGUubG9nKFwiUEFUSUVOVCBBRERSRVNTOlwiLCBwYXRpZW50QWRkcmVzcyk7XG4gIC8vICAgY29uc29sZS5sb2coXCJUWVBFT0Y6IFwiLCB0eXBlb2YocGF0aWVudEFkZHJlc3MpKTtcbiAgLy8gICBjb25zdCBlbmNvZGluZyA9IG5ldyBldGhlcnMuQWJpQ29kZXIoXG4gIC8vICAgICBbJ2J5dGVzJ10sXG4gIC8vICAgICBbYWRkcmVzc0NoZWNrU3VtKHBhdGllbnRBZGRyZXNzKSwgYWRkcmVzc0NoZWNrU3VtKCcweDI2M2MwYTFmZjg1NjA0ZjBlZTNmNDE2MGNBYTQ0NWQwYmFkMjhkRjcnKSwgYWRkcmVzc0NoZWNrU3VtKCcweEIxOUZFQzJDMjVhNjIwRjIxYTBDNkFDZjU5ODEyOTgzRmFmNUNmOUInKV1cbiAgLy8gICApXG4gIC8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjb250cmFjdC5jb25uZWN0KHBhdGllbnRBZGRyZXNzKS5jcmVhdGVOZXdDYXNlKHVzZGNBZGRyZXNzLGVuY29kaW5nKTtcbiAgLy8gICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gIC8vICAgcmV0dXJuIHJlc3BvbnNlO1xuICAvLyB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPScvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zZW1hbnRpYy11aS8yLjIuMi9zZW1hbnRpYy5taW4uY3NzJyAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPE5hdmJhcj48L05hdmJhcj5cbiAgICAgIDxDb250YWluZXJcbiAgICAgIGNsYXNzTmFtZT1cImxhbmRpbmctY29udGFpbmVyIGRhcmstdGhlbWVcIlxuICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNzB2d1wiIH19XG4gICAgPlxuICAgICAgPEhlYWRlclxuICAgICAgICBhcz1cImgxXCJcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgICAgIGZvbnRTaXplOiBcIjZlbVwiLFxuICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMTUwcHhcIixcbiAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMjBweFwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICBSZWRlZmluaW5nIDxpPlRydXN0PC9pPiBpbiA8YnIgLz4gPHU+TWVkaWNhbCBDcm93ZGZ1bmRpbmc8L3U+IGJ5XG4gICAgICAgIEJsb2NrY2hhaW4gVHJhbnNwYXJlbmN5LlxuICAgICAgPC9IZWFkZXI+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogXCJsZWZ0XCIsIHBhZGRpbmdUb3A6IFwiMTBweFwiIH19PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwibGVmdC1hbGlnbmVkLWJ1dHRvblwiXG4gICAgICAgICAgc3R5bGU9e3sgcGFkZGluZzogXCIyMHB4XCIsIG1hcmdpblJpZ2h0OiBcIjIwcHhcIiB9fVxuICAgICAgICAgIGhyZWY9XCIvcHJvamVjdHNcIlxuICAgICAgICA+XG4gICAgICAgICAgVmlldyBQcm9qZWN0c1xuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnQtYWxpZ25lZC1idXR0b25cIlxuICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiMjBweFwiIH19XG4gICAgICAgICAgaHJlZj1cIi9wcm9qZWN0cy9jcmVhdGVcIlxuICAgICAgICA+XG4gICAgICAgICAgU3RhcnQgeW91ciBvd24gcHJvamVjdFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxwPiBWaWV3IFByb2plY3RzICB8IFN0YXJ0IHlvdXIgb3duIHByb2plY3Q8L3A+ICovfVxuICAgIDwvQ29udGFpbmVyPlxuICAgIDwvPlxuICApO1xufSJdLCJuYW1lcyI6WyJOYXZiYXIiLCJIZWFkIiwiQ29udGFpbmVyIiwiSGVhZGVyIiwiQnV0dG9uIiwiZXRoZXJzIiwiQ2FyZVBsZWRnZUNhc2VGYWN0b3J5QUJJIiwiTmV0d29yayIsIkFsY2hlbXkiLCJXYWxsZXQiLCJVdGlscyIsImRvdGVudiIsInVzZUVmZmVjdCIsImNvbmZpZyIsInNldHRpbmdzIiwiYXBpS2V5IiwibmV0d29yayIsIkVUSF9TRVBPTElBIiwiYWxjaGVteSIsImZhY3RvcnkiLCJQUklWQVRFX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJ1c2RjIiwiSG9tZVBhZ2UiLCJjYWxsIiwicHJvdmlkZXIiLCJ3YWxsZXQiLCJzaWduZXJ6IiwiZW5jb2RlZFZhbCIsInRyYW5zYWN0aW9uIiwiY29udHJhY3QiLCJwcm92aWRlcnMiLCJKc29uUnBjUHJvdmlkZXIiLCJnZXRTaWduZXIiLCJ1dGlscyIsIkFiaUNvZGVyIiwiZW5jb2RlIiwiZG9uYXRpb25Ub2tlbiIsImRhdGEiLCJDb250cmFjdCIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJhZGRyZXNzQ2hlY2tTdW0iLCJhZGRyIiwiZ2V0QWRkcmVzcyIsImxpbmsiLCJyZWwiLCJocmVmIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJ3aWR0aCIsImFzIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJwYWRkaW5nVG9wIiwibWFyZ2luQm90dG9tIiwiaSIsImJyIiwidSIsImRpdiIsInBhZGRpbmciLCJtYXJnaW5SaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n"));

/***/ })

});