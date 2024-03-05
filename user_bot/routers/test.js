const Router = require("../models/router");
const Text = require("../models/filters/text");
const kb = require("../keyboards/educational_level");
const sendToAdmin = require("../utils/send_to_admin");

const test = new Router();

test.text(async (data) => {
  const { msg, bot } = data;
  await bot.sendMessage(msg.chat.id, msg.text, kb);
}, new Text("test"));

test.callbackQuery(async (data) => {
  const { msg, bot } = data;
  console.log(msg);
  bot.answerCallbackQuery(msg.id, {});
  sendToAdmin(msg.data);
});

module.exports = test;
