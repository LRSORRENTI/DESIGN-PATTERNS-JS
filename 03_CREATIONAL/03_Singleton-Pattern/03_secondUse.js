"use strict";
exports.__esModule = true;
// import FancyLogger from "./01_singleton";
var _01_singleton_1 = require("./01_singleton");
// This is the second place we're going to use 
// our FancyLogger
// const logger = new FancyLogger
function logSecondImplementation() {
    // inside we'll log the number of logs we have 
    // using dot notation, again
    _01_singleton_1["default"].printLogCount();
    // then we'll log something to the logger again
    // 
    _01_singleton_1["default"].log("Secomd file (secondUse.ts)");
    // Then after the logger.log, we call 
    // printingCount again
    _01_singleton_1["default"].printLogCount();
}
exports["default"] = logSecondImplementation;
