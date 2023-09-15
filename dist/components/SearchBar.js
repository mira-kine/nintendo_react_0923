"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./SearchBar.css");
function SearchBar() {
    return (react_1.default.createElement("div", { className: "searchbar-container" },
        react_1.default.createElement("form", { className: "searchbar" },
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "15px", height: "15px", viewBox: "0 0 24 24", fill: "none" },
                react_1.default.createElement("path", { d: "M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z", stroke: "#000000", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" })),
            react_1.default.createElement("input", { type: "search", placeholder: "Search" }),
            react_1.default.createElement("select", null,
                react_1.default.createElement("option", null, "All")),
            react_1.default.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "35px", height: "30px", viewBox: "4 -1 20 15" },
                react_1.default.createElement("g", null,
                    react_1.default.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
                    react_1.default.createElement("path", { d: "M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z" }))))));
}
exports.default = SearchBar;
//# sourceMappingURL=SearchBar.js.map