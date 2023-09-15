"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./SectionNavBar.css");
const navitems_1 = __importDefault(require("src/services/navitems"));
function NavBar() {
    const [showNav, setShowNav] = (0, react_1.useState)(false);
    const [navItems, setNavItems] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const fetchMockDataAsync = async () => {
            const response = await (0, navitems_1.default)();
            setNavItems(response);
        };
        fetchMockDataAsync();
    }, []);
    const handleNavItemClick = (selectedItem) => {
        setNavItems((prevItems) => prevItems.map((item) => item.title === selectedItem.title
            ? { ...item, selected: true }
            : { ...item, selected: false }));
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("button", { tabIndex: 0, className: "hamburger-menu", onClick: () => setShowNav(!showNav) },
            react_1.default.createElement("span", { className: "bar" }),
            react_1.default.createElement("span", { className: "bar" }),
            react_1.default.createElement("span", { className: "bar" })),
        react_1.default.createElement("div", { className: showNav ? 'section-navbar-container-show' : 'section-navbar-container' },
            react_1.default.createElement("div", { className: "section-navbar__content" }, navItems.map(({ title, href, tabIndex, selected }) => (react_1.default.createElement("ul", { key: title, className: "section-navlist" },
                react_1.default.createElement("li", { className: selected ? 'selected-nav-item' : 'section-navlist__item' },
                    react_1.default.createElement("button", { className: "section-navlist__button", tabIndex: tabIndex, onClick: () => handleNavItemClick({ title, href, tabIndex, selected }) }, title)))))))));
}
exports.default = NavBar;
//# sourceMappingURL=SectionNavBar.js.map