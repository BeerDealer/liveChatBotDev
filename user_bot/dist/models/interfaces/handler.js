"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Handler {
    constructor(handler, filter = null, bot) {
        this.call = (msg) => {
            const data = {
                bot: this.bot,
                msg: msg,
            };
            if (this.filter && this.filter.call(msg)) {
                this.handler(data);
            }
            else if (!this.filter) {
                this.handler(data);
            }
        };
        this.bot = bot;
        this.handler = handler;
        this.filter = filter;
    }
}
exports.default = Handler;
