"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var gcd_1 = require("@japan-d2/gcd");
function isPrime(n) {
    if (n === 1) {
        return false;
    }
    if (n === 2 || n === 3) {
        return true;
    }
    if ((n % 2 === 0) || (n % 3 === 0)) {
        return false;
    }
    var p = 5;
    var w = 2;
    while (Math.pow(p, 2) <= n) {
        if (n % p === 0) {
            return false;
        }
        p += w;
        w = 6 - w;
    }
    return true;
}
function f(x) {
    return Math.pow(x, 2) - 1;
}
function g(x) {
    return Math.pow(x, 2) + 1;
}
function rho(input, operator) {
    if (input % 2 === 0) {
        return 2;
    }
    var n1 = 2;
    var n2 = 2;
    var divisor = 0;
    do {
        n1 = operator(n1) % input;
        n2 = operator(operator(n2)) % input;
        divisor = gcd_1.default(Math.abs(n1 - n2), input);
    } while (divisor === 1);
    if (divisor === input) {
        return rho(input, g);
    }
    return divisor;
}
function getFactorNumbers(n) {
    if (n === 1) {
        return [1];
    }
    if (isPrime(n)) {
        return [n];
    }
    else {
        var divisor = rho(n, f);
        return __spreadArrays(getFactorNumbers(divisor), getFactorNumbers(n / divisor)).sort(function (a, b) { return a - b; });
    }
}
exports.default = getFactorNumbers;
