import { ObjectId } from "mongoose";

export interface IUser {
  telegramId: string;
  moderator: ObjectId;
  chat: ObjectId;
  userInfo: {
    referer: string;
    phoneNumber: string;
    language: string;
    educationLevel: string;
    isForeigner: boolean;
    region: string;
  };
}
