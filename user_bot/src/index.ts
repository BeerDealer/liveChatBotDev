import TelegramBot from "node-telegram-bot-api";
import { TOKEN } from "./config";
import { Dispatcher } from "@jolysnow/nodetelebot";
import { test } from "./routers/test";

const bot: TelegramBot = new TelegramBot(TOKEN, {
  polling: true,
});




const dp: Dispatcher = new Dispatcher(bot);

dp.registerHandlers(test);
