"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    telegramId: { type: String, required: true },
    moderator: { type: String, default: "" },
    chat: { type: String, default: "" },
    userInfo: {
        referer: { type: String, default: "" },
        phoneNumber: { type: String, default: "" },
        language: { type: String, default: "" },
        educationLevel: { type: String, default: "" },
        isForeigner: { type: Boolean, default: false },
        region: { type: String, default: "" },
    },
});
exports.User = (0, mongoose_1.model)("User", userSchema);
