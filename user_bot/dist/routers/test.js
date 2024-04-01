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
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const nodetelebot_1 = require("@jolysnow/nodetelebot");
const send_to_admin_1 = require("../utils/send_to_admin");
const educational_level_1 = require("../keyboards/educational_level");
const test = new nodetelebot_1.Router();
exports.test = test;
test.text((data) => __awaiter(void 0, void 0, void 0, function* () {
    const { msg, bot } = data;
    yield bot.sendMessage(msg.chat.id, msg.text, educational_level_1.inline);
}), new nodetelebot_1.Text("test"));
test.callbackQuery((data) => __awaiter(void 0, void 0, void 0, function* () {
    const { msg, bot } = data;
    console.log(msg);
    bot.answerCallbackQuery(msg.id, {});
    (0, send_to_admin_1.sendToAdmin)(msg.data);
}));
