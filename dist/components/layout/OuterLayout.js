"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SectionNavBar_1 = __importDefault(require("../SectionNavBar"));
require("./OuterLayout.css");
const InnerLayout_1 = __importDefault(require("./InnerLayout"));
function OuterLayout({ navItems, setNavItems }) {
    return (react_1.default.createElement("div", { className: "outer-layout-container" },
        react_1.default.createElement(SectionNavBar_1.default, { navItems: navItems, setNavItems: setNavItems }),
        react_1.default.createElement(InnerLayout_1.default, null)));
}
exports.default = OuterLayout;
//# sourceMappingURL=OuterLayout.js.map