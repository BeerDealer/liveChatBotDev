import { Schema, Model, model } from "mongoose";
import { IModerator } from "./moderator.interface";

type ModeratorModel = Model<IModerator & Document>;

const moderatorSchema: Schema = new Schema<IModerator, ModeratorModel>({
  telegramId: { type: String, required: true },
  userList: [String],
  chatList: [String],
});

export const Moderator: ModeratorModel = model<IModerator & Document>(
  "Moderator",
  moderatorSchema
);
