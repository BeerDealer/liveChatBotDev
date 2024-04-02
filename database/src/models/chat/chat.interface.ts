import { ObjectId } from "mongoose";
import { IMessage } from "../message/message.interface";

export interface IChat {
  users: [ObjectId, ObjectId];
  createdAt: Date;
  messages: Array<IMessage>;
}
