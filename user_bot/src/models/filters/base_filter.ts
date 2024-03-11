import { Message } from "node-telegram-bot-api";

export interface BaseFilter {
  pattern: string;
  call(msg: Message): boolean;
}
