"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moderator = void 0;
const mongoose_1 = require("mongoose");
const moderatorSchema = new mongoose_1.Schema({
    telegramId: { type: String, required: true },
    userList: [String],
    chatList: [String],
});
exports.Moderator = (0, mongoose_1.model)("Moderator", moderatorSchema);
