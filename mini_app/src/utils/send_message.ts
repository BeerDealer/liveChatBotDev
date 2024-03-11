import axios from "axios";

const BOT_TOKEN: string = "7046237477:AAE9eukEW6R59LEJ-r5etqh-LiZCjq_r6uo";

const CHAT_ID: string = "6366591506";

const API_URL: string = `https://api.telegram.org/bot${BOT_TOKEN}`;

async function sendToAdmin(text: string): Promise<void> {
  try {
    await axios.post(`${API_URL}/sendMessage`, {
      chat_id: CHAT_ID,
      text: text,
    });
  } catch (e) {
    return;
  }
}

export default sendToAdmin;
