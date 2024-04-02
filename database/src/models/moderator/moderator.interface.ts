import { ObjectId } from "mongoose";

export interface IModerator {
  telegramId: string;
  userList: [ObjectId];
  chatList: [ObjectId];
}
