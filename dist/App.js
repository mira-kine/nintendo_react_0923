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
require("./App.css");
const Header_1 = __importDefault(require("./components/common/Header"));
const OuterLayout_1 = __importDefault(require("./components/layout/OuterLayout"));
const navitems_1 = __importDefault(require("./services/navitems"));
function App() {
    // fetching data out here to pass to Header search filter as well if choose to
    const [navItems, setNavItems] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        const fetchMockDataAsync = async () => {
            const response = await (0, navitems_1.default)();
            setNavItems(response);
        };
        fetchMockDataAsync();
    }, []);
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(Header_1.default, null),
        react_1.default.createElement(OuterLayout_1.default, { navItems: navItems, setNavItems: setNavItems })));
}
exports.default = App;
//# sourceMappingURL=App.js.map