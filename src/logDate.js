"use strict";
exports.__esModule = true;
exports.logDate = void 0;
var logDate = function () {
    var currentDate = new Date(Date.now());
    console.log("".concat(currentDate.getDate(), "/").concat(currentDate.getMonth(), "/").concat(currentDate.getFullYear()));
};
exports.logDate = logDate;
