"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Button extends React.Component {
    render() {
        const { type, onClick, children } = this.props;
        return (React.createElement("button", { onClick: onClick, type: "button", className: `btn btn-${type}` }, children));
    }
}
exports.Button = Button;
//# sourceMappingURL=index.js.map