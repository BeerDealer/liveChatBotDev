import TelegramBot, { Message } from "node-telegram-bot-api";
import { BaseFilter } from "./filters/base_filter";

export class Handler {
  private bot: TelegramBot;
  private handlerFunction: CallableFunction;
  private filter: BaseFilter | null;

  constructor(
    handlerFunction: CallableFunction,
    bot: TelegramBot,
    filter: BaseFilter | null = null
  ) {
    this.bot = bot;
    this.handlerFunction = handlerFunction;
    this.filter = filter;
  }

  public call = (msg: Message): void => {
    const data = {
      bot: this.bot,
      msg: msg,
    };
    if (!this.filter || this.filter.call(msg)) {
      this.handlerFunction(data);
    }
  };
}
