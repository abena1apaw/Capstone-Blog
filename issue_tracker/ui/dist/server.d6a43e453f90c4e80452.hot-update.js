exports.id = "server";
exports.modules = {

/***/ "./server/render.jsx":
/*!***************************!*\
  !*** ./server/render.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\MyGithub\\Capstone\\issue_tracker\\ui\\server\\render.jsx: Unexpected token (24:32)\n\n\u001b[0m \u001b[90m 22 | \u001b[39m  }\u001b[0m\n\u001b[0m \u001b[90m 23 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 24 | \u001b[39m  console\u001b[33m.\u001b[39mlog(\u001b[32m'yoo==>>>>'\u001b[39m\u001b[33m,\u001b[39m \u001b[33mPage\u001b[39m\u001b[33m.\u001b[39m)\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m                                \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 25 | \u001b[39m  \u001b[36mconst\u001b[39m userData \u001b[33m=\u001b[39m await \u001b[33mPage\u001b[39m\u001b[33m.\u001b[39mfetchData(req\u001b[33m.\u001b[39mheaders\u001b[33m.\u001b[39mcookie)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 26 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 27 | \u001b[39m  store\u001b[33m.\u001b[39minitialData \u001b[33m=\u001b[39m initialData\u001b[33m;\u001b[39m\u001b[0m\n    at Object._raise (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:757:17)\n    at Object.raiseWithData (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:750:17)\n    at Object.raise (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:744:17)\n    at Object.unexpected (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:8834:16)\n    at Object.parseIdentifierName (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10877:18)\n    at Object.parseIdentifier (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10854:23)\n    at Object.parseMaybePrivateName (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10203:19)\n    at Object.parseSubscript (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9746:64)\n    at Object.parseSubscripts (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9711:19)\n    at Object.parseExprSubscripts (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9694:17)\n    at Object.parseMaybeUnary (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9668:21)\n    at Object.parseExprOps (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9538:23)\n    at Object.parseMaybeConditional (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9511:23)\n    at Object.parseMaybeAssign (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9466:21)\n    at Object.parseExprListItem (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10846:18)\n    at Object.parseCallExpressionArguments (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9885:22)\n    at Object.parseSubscript (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9785:31)\n    at Object.parseSubscripts (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9711:19)\n    at Object.parseExprSubscripts (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9694:17)\n    at Object.parseMaybeUnary (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9668:21)\n    at Object.parseExprOps (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9538:23)\n    at Object.parseMaybeConditional (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9511:23)\n    at Object.parseMaybeAssign (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9466:21)\n    at Object.parseExpression (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:9418:23)\n    at Object.parseStatementContent (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11339:23)\n    at Object.parseStatement (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11210:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11785:25)\n    at Object.parseBlockBody (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11771:10)\n    at Object.parseBlock (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11755:10)\n    at Object.parseFunctionBody (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10758:24)");

/***/ }),

/***/ "./server/template.js":
false,

/***/ "./src/About.jsx":
false,

/***/ "./src/Contents.jsx":
false,

/***/ "./src/DateInput.jsx":
false,

/***/ "./src/IssueAddNavItem.jsx":
false,

/***/ "./src/IssueDetail.jsx":
false,

/***/ "./src/IssueEdit.jsx":
false,

/***/ "./src/IssueFilter.jsx":
false,

/***/ "./src/IssueList.jsx":
false,

/***/ "./src/IssueReport.jsx":
false,

/***/ "./src/IssueTable.jsx":
false,

/***/ "./src/NotFound.jsx":
false,

/***/ "./src/NumInput.jsx":
false,

/***/ "./src/Page.jsx":
false,

/***/ "./src/Search.jsx":
false,

/***/ "./src/TextInput.jsx":
false,

/***/ "./src/Toast.jsx":
false,

/***/ "./src/UserContext.jsx":
false,

/***/ "./src/graphQLFetch.js":
false,

/***/ "./src/routes.js":
false,

/***/ "./src/store.js":
false,

/***/ "./src/withToast.jsx":
false,

/***/ "isomorphic-fetch":
false,

/***/ "react":
false,

/***/ "react-bootstrap":
false,

/***/ "react-dom/server":
false,

/***/ "react-router-bootstrap":
false,

/***/ "react-router-dom":
false,

/***/ "react-select/lib/Async":
false,

/***/ "serialize-javascript":
false,

/***/ "url-search-params":
false

};
//# sourceMappingURL=server.d6a43e453f90c4e80452.hot-update.js.map