import { Schema, Model, model } from "mongoose";
import { IChat } from "./chat.interface";
import { Message } from "../message/message.model";

type ChatModel = Model<IChat & Document>;

const chatSchema: Schema = new Schema<IChat, ChatModel>({
  users: [String, String],
  messages: [Message],
});

export const Chat: ChatModel = model<IChat & Document>("Chat", chatSchema);
