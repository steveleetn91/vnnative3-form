"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var VnNative3FormInput_1 = require("./libs/input/VnNative3FormInput");
var VnNative3Form = /** @class */ (function (_super) {
    __extends(VnNative3Form, _super);
    function VnNative3Form() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VnNative3Form;
}(VnNative3FormInput_1.default));
exports.default = VnNative3Form;
