import { Message } from "node-telegram-bot-api";
import { BaseFilter } from "./base_filter";

export class Text implements BaseFilter {
  pattern: string;

  constructor(text: string) {
    this.pattern = text;
  }

  call(msg: Message): boolean {
    const messageText = msg.text;
    return messageText === this.pattern;
  }
}
