import { Schema, Model, model } from "mongoose";
import { IUser } from "./user.interface";

type UserModel = Model<IUser & Document>;

const userSchema: Schema = new Schema<IUser, UserModel>({
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

export const User: UserModel = model<IUser & Document>("User", userSchema);
