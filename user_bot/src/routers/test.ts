import { Router } from "../models/router";
import { Text } from "../models/filters/text";
import { sendToAdmin } from "../utils/send_to_admin";
import TelegramBot, { CallbackQuery, Message } from "node-telegram-bot-api";
import { inline } from "../keyboards/educational_level";

const test: Router = new Router();

test.text(async (data: { msg: Message; bot: TelegramBot }) => {
  const { msg, bot } = data;
  await bot.sendMessage(msg.chat.id, msg.text!, inline);
}, new Text("test"));

test.callbackQuery(async (data: { msg: CallbackQuery; bot: TelegramBot }) => {
  const { msg, bot } = data;
  console.log(msg);
  bot.answerCallbackQuery(msg.id, {});
  sendToAdmin(msg.data!);
});

module.exports = test;
