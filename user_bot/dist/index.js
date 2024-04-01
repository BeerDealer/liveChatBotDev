"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
const config_1 = require("./config");
const nodetelebot_1 = require("@jolysnow/nodetelebot");
const test_1 = require("./routers/test");
const bot = new node_telegram_bot_api_1.default(config_1.TOKEN, {
    polling: true,
});
const dp = new nodetelebot_1.Dispatcher(bot);
dp.registerHandlers(test_1.test);
