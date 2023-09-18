"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./SectionContent.css");
function SectionContent({ heading, imageUrl, date, title, description, link, buttonSpan1, buttonSpan2, }) {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "heading-container" },
            react_1.default.createElement("h2", { className: "heading-text" }, heading)),
        react_1.default.createElement("div", { className: "section-img-container" }, imageUrl),
        react_1.default.createElement("div", { className: "section-date-span" },
            react_1.default.createElement("span", null, date)),
        react_1.default.createElement("div", { className: "title-container" },
            react_1.default.createElement("span", null, title)),
        react_1.default.createElement("div", { className: "description-container" },
            react_1.default.createElement("p", null, description)),
        react_1.default.createElement("div", { className: "link-container" },
            react_1.default.createElement("a", { href: "#" }, link?.text)),
        react_1.default.createElement("div", { className: "section-button-container" },
            react_1.default.createElement("button", { className: "section__button-filled" },
                react_1.default.createElement("span", null, buttonSpan1)),
            react_1.default.createElement("button", { className: "section__button-outline" },
                react_1.default.createElement("span", null, buttonSpan2)))));
}
exports.default = SectionContent;
//# sourceMappingURL=SectionContent.js.map