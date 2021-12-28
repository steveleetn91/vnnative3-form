"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var console_1 = require("vnnative3-console/dist/console");
var VnNative3FormSecure_1 = require("../secure/VnNative3FormSecure");
var VnNative3FormInput = /** @class */ (function () {
    function VnNative3FormInput(input_id) {
        try {
            this.input = document.getElementById(input_id);
        }
        catch (e) {
            (new console_1.default).error(e.toString());
        }
    }
    VnNative3FormInput.prototype.subscribe = function () {
        return this.input;
    };
    VnNative3FormInput.prototype.setData = function (data) {
        this.input.value = String(data);
    };
    VnNative3FormInput.prototype.stringValue = function () {
        try {
            return (new VnNative3FormSecure_1.default(this.input.value)).data;
        }
        catch (e) {
            (new console_1.default).error(e.toString());
            return "";
        }
    };
    VnNative3FormInput.prototype.numberValue = function () {
        try {
            return Number(this.input.value);
        }
        catch (e) {
            (new console_1.default).error(e.toString());
            return 0;
        }
    };
    return VnNative3FormInput;
}());
exports.default = VnNative3FormInput;
