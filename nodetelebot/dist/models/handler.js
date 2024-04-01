"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Handler = void 0;
class Handler {
    constructor(handlerFunction, bot, filter = null) {
        this.call = (msg) => {
            const data = {
                bot: this.bot,
                msg: msg,
            };
            if (!this.filter || this.filter.call(msg)) {
                this.handlerFunction(data);
            }
        };
        this.bot = bot;
        this.handlerFunction = handlerFunction;
        this.filter = filter;
    }
}
exports.Handler = Handler;
