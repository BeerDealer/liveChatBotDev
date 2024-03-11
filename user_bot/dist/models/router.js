"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
const event_types_1 = require("./interfaces/event_types");
class Router {
    constructor() {
        this.eventChain = [];
    }
    getEventChain() {
        return this.eventChain;
    }
    text(handlerFunction, filter = null) {
        this.__addEvent(event_types_1.eventTypes.text, handlerFunction, filter);
    }
    callbackQuery(handlerFunction, filter = null) {
        this.__addEvent(event_types_1.eventTypes.callbackQuery, handlerFunction, filter);
    }
    __addEvent(eventType, handlerFunction, filter) {
        const newEvent = {
            eventType: eventType,
            handlerFunction: handlerFunction,
            filter: filter,
        };
        this.eventChain.push(newEvent);
    }
}
exports.Router = Router;
