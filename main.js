"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fizz = void 0;
console.log("test");
function fizz(a) {
    if (a % 3 === 0 && a % 5 === 0)
        return "FIZZBUZZ";
    if (a % 3 === 0)
        return "FIZZ";
    if (a % 5 === 0)
        return "BUZZ";
    return a.toString();
}
exports.fizz = fizz;
