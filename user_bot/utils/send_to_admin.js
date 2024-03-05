const axios = require("axios");

const BOT_TOKEN = "7020780519:AAG7v2EgC5H-GJ2pAcd2SoirOboMSMbnQrI";

const CHAT_ID = "6366591506";

const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}`;

async function sendToAdmin(data) {
  const message = "Привет! Выберите вариант:";
  const inlineKeyboard = {
    inline_keyboard: [[{ text: "Ответить", callback_data: "reply" }]],
  };

  await axios.post(`${API_URL}/sendMessage`, {
    chat_id: CHAT_ID,
    text: data,
    reply_markup: JSON.stringify(inlineKeyboard),
  });
}

module.exports = sendToAdmin;
