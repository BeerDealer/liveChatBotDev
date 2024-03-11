"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dispatcher = void 0;
const handler_1 = require("./handler");
class Dispatcher {
    constructor(bot) {
        this.registerHandlers = (...routers) => {
            routers.forEach((router) => {
                const eventChain = router.getEventChain();
                eventChain.forEach((event) => {
                    const baseHandler = new handler_1.Handler(event.handlerFunction, this.bot, event.filter);
                    this.bot.on(event.eventType, baseHandler.call);
                });
            });
        };
        this.bot = bot;
    }
}
exports.Dispatcher = Dispatcher;
