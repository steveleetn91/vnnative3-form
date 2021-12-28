"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vnnative3formSecure_1 = require("../secure/Vnnative3formSecure");
var VnNaive3FormInput = /** @class */ (function () {
    function VnNaive3FormInput(input_id) {
        this.input = document.getElementById(input_id);
    }
    VnNaive3FormInput.prototype.effect = function (input_id) {
        this.input = document.getElementById(input_id);
    };
    VnNaive3FormInput.prototype.subscribe = function () {
        return this.input;
    };
    VnNaive3FormInput.prototype.stringValue = function () {
        var _in;
        _in = this.input.getAttribute('value');
        return (new Vnnative3formSecure_1.default(_in)).out();
    };
    VnNaive3FormInput.prototype.numberValue = function () {
        return Number(this.input.getAttribute('value'));
    };
    return VnNaive3FormInput;
}());
exports.default = VnNaive3FormInput;
