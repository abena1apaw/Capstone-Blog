exports.id = "server";
exports.modules = {

/***/ "./server/render.jsx":
/*!***************************!*\
  !*** ./server/render.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\MyGithub\\Capstone\\issue_tracker\\ui\\server\\render.jsx: Lexical declaration cannot appear in a single-statement context (29:4)\n\n\u001b[0m \u001b[90m 27 | \u001b[39m    let userData\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 28 | \u001b[39m    \u001b[36mif\u001b[39m (\u001b[33mPage\u001b[39m\u001b[33m.\u001b[39mfetchData)\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 29 | \u001b[39m    \u001b[36mconst\u001b[39m userData \u001b[33m=\u001b[39m await \u001b[33mPage\u001b[39m\u001b[33m.\u001b[39mfetchData(req\u001b[33m.\u001b[39mheaders\u001b[33m.\u001b[39mcookie)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m    \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 30 | \u001b[39m  \u001b[0m\n\u001b[0m \u001b[90m 31 | \u001b[39m    store\u001b[33m.\u001b[39minitialData \u001b[33m=\u001b[39m initialData\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 32 | \u001b[39m    store\u001b[33m.\u001b[39muserData \u001b[33m=\u001b[39m userData\u001b[33m;\u001b[39m\u001b[0m\n    at Object._raise (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:757:17)\n    at Object.raiseWithData (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:750:17)\n    at Object.raise (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:744:17)\n    at Object.parseStatementContent (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11274:16)\n    at Object.parseStatement (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11210:17)\n    at Object.parseIfStatement (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11562:28)\n    at Object.parseStatementContent (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11255:21)\n    at Object.parseStatement (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11210:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11785:25)\n    at Object.parseBlockBody (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11771:10)\n    at Object.parseBlock (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11755:10)\n    at Object.parseTryStatement (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11643:23)\n    at Object.parseStatementContent (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11267:21)\n    at Object.parseStatement (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11210:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11785:25)\n    at Object.parseBlockBody (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11771:10)\n    at Object.parseBlock (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11755:10)\n    at Object.parseFunctionBody (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10758:24)\n    at Object.parseFunctionBodyAndFinish (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:10741:10)\n    at C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11925:12\n    at Object.withTopicForbiddingContext (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11085:14)\n    at Object.parseFunction (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11924:10)\n    at Object.parseFunctionStatement (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11556:17)\n    at Object.parseStatementContent (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11333:25)\n    at Object.parseStatement (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11210:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11785:25)\n    at Object.parseBlockBody (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11771:10)\n    at Object.parseTopLevel (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:11141:10)\n    at Object.parse (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:12843:10)\n    at parse (C:\\MyGithub\\Capstone\\issue_tracker\\ui\\node_modules\\@babel\\parser\\lib\\index.js:12896:38)");

/***/ })

};
//# sourceMappingURL=server.3bfdd2b711ad2f83e447.hot-update.js.map