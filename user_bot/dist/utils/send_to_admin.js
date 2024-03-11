"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendToAdmin = void 0;
const axios_1 = __importDefault(require("axios"));
const BOT_TOKEN = "7020780519:AAG7v2EgC5H-GJ2pAcd2SoirOboMSMbnQrI";
const CHAT_ID = "6366591506";
const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}`;
function sendToAdmin(text) {
    return __awaiter(this, void 0, void 0, function* () {
        const inlineKeyboard = {
            inline_keyboard: [[{ text: "Ответить", callback_data: "reply" }]],
        };
        try {
            yield axios_1.default.post(`${API_URL}/sendMessage`, {
                chat_id: CHAT_ID,
                text: text,
                reply_markup: JSON.stringify(inlineKeyboard),
            });
        }
        catch (e) {
            return;
        }
    });
}
exports.sendToAdmin = sendToAdmin;
