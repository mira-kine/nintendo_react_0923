"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./Header.css");
const SearchBar_1 = __importDefault(require("../SearchBar"));
// add common Header component here
function Header() {
    return (react_1.default.createElement("div", { className: "header_container" },
        react_1.default.createElement(SearchBar_1.default, null)));
}
exports.default = Header;
//# sourceMappingURL=Header.js.map