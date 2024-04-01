"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
const mongoose_1 = require("mongoose");
const chatSchema = new mongoose_1.Schema({
    moderator: { type: String, required: true },
    user: { type: String, required: true },
    messages: [
        {
            sender: { type: String, required: true },
            text: { type: String, required: true },
            timestamp: { type: Number, required: true },
        },
    ],
});
exports.Chat = (0, mongoose_1.model)("Chat", chatSchema);
