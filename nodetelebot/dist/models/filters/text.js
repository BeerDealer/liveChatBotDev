"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
class Text {
    constructor(text) {
        this.pattern = text;
    }
    call(msg) {
        const messageText = msg.text;
        return messageText === this.pattern;
    }
}
exports.Text = Text;
