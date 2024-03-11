import axios from "axios";

const BOT_TOKEN: string = "7020780519:AAG7v2EgC5H-GJ2pAcd2SoirOboMSMbnQrI";

const CHAT_ID: string = "6366591506";

const API_URL: string = `https://api.telegram.org/bot${BOT_TOKEN}`;

export async function sendToAdmin(text: string) {
  const inlineKeyboard = {
    inline_keyboard: [[{ text: "Ответить", callback_data: "reply" }]],
  };

  try {
    await axios.post(`${API_URL}/sendMessage`, {
      chat_id: CHAT_ID,
      text: text,
      reply_markup: JSON.stringify(inlineKeyboard),
    });
  } catch (e) {
    return;
  }
}
