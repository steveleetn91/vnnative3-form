"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vnnative3formSecure = /** @class */ (function () {
    function Vnnative3formSecure(inputData) {
        this.data = this.trimTag(inputData);
    }
    Vnnative3formSecure.prototype.trimTag = function (inputData) {
        inputData = inputData.replace(/<script>/g, '');
        inputData = inputData.replace(/<\/script>/g, '');
        return this.out(inputData);
    };
    Vnnative3formSecure.prototype.out = function (inputData) {
        return inputData;
    };
    return Vnnative3formSecure;
}());
exports.default = Vnnative3formSecure;
