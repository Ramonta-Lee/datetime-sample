"use strict";
exports.__esModule = true;
var dayjs_1 = require("dayjs");
var moment_1 = require("moment");
// Try: moment.format("Tuesday")
(0, moment_1["default"])().format();
// Nested within a function.
console.log((0, moment_1["default"])().format());
// You can hover over the format string.
(0, moment_1["default"])().format("MMMM Do YYYY, h:mm:ss a");
// Try: now.format("January 2021")
var now = (0, moment_1["default"])();
now.format("");
// Try: dayjs().format("Mon")
(0, dayjs_1["default"])().format();
console.log((0, dayjs_1["default"])().format());
