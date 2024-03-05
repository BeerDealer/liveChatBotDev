const TelegramBot = require("node-telegram-bot-api");
const Dispatcher = require("./models/dispatcher");

const test = require("./routers/test");

const TOKEN = require("./config");

const bot = new TelegramBot(TOKEN, {
  polling: true,
});

const dp = new Dispatcher(bot);

dp.registerHandlers(test);
