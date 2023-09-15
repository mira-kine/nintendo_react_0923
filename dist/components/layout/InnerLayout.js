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
require("./InnerLayout.css");
const SectionContent_1 = __importDefault(require("../SectionContent"));
const content_1 = __importDefault(require("src/services/content"));
function InnerLayout() {
    // receive any data to show content of according to params
    // assuming receiving data information from exterior database
    // depends on what content is named in database, however will go with these defaults. Can change as necessary
    const [content, setContent] = (0, react_1.useState)({
        heading: '',
        image: '',
        date: '',
        title: '',
        description: '.',
        link: '',
        buttonSpan1: '',
        buttonSpan2: '',
    });
    (0, react_1.useEffect)(() => {
        const fetchMockDataAsync = async () => {
            const response = await (0, content_1.default)();
            setContent(response);
        };
        fetchMockDataAsync();
    }, []);
    return (react_1.default.createElement("div", { className: "inner-layout-container" },
        react_1.default.createElement("div", { className: "inner-layout-content" },
            react_1.default.createElement(SectionContent_1.default, { ...content }))));
}
exports.default = InnerLayout;
//# sourceMappingURL=InnerLayout.js.map