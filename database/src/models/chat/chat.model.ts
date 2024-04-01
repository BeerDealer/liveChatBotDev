import { Schema, Model, model } from "mongoose";
import { IChat } from "./chat.interface";

type ChatModel = Model<IChat & Document>;

const chatSchema: Schema = new Schema<IChat, ChatModel>({
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

export const Chat: ChatModel = model<IChat & Document>("Chat", chatSchema);
