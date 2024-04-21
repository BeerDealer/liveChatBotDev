import { Schema, Model, model } from "mongoose";
import { IMessage } from "../message/message.interface";

type MessageModel = Model<IMessage & Document>;

const messageSchema: Schema = new Schema<IMessage, MessageModel>({
  author: { type: String, required: true },
  sentAt: { type: Date, required: true },
  text: String,
  readAt: Date,
});

export const Message: MessageModel = model<IMessage & Document>(
  "Message",
  messageSchema
);
