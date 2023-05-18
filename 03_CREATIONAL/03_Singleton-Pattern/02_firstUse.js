"use strict";
exports.__esModule = true;
// import FancyLogger from "./01_singleton";
var _01_singleton_1 = require("./01_singleton");
// This is where we'll first use our FancyLogger
// const logger = new FancyLogger
// So we've imported the FancyLogger, and above 
// created a new instance of it using 'new' keyword
function logFirstImplementation() {
    // inside we'll log the number of logs we have 
    // using dot notation
    _01_singleton_1["default"].printLogCount();
    // then we'll log something to the logger 
    // itself below:
    _01_singleton_1["default"].log("First file (firstUse.ts)");
    // Then after the logger.log, we call 
    // printingCount again
    _01_singleton_1["default"].printLogCount();
}
exports["default"] = logFirstImplementation;
