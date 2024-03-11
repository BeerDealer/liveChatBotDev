import TelegramBot from "node-telegram-bot-api";
import { BaseRouter } from "./interfaces/base_router";
import { Event } from "./interfaces/event";
import { Handler } from "./handler";

export class Dispatcher {
  private bot: TelegramBot;

  constructor(bot: TelegramBot) {
    this.bot = bot;
  }

  registerHandlers = (...routers: Array<BaseRouter>) => {
    routers.forEach((router) => {
      const eventChain: Array<Event> = router.getEventChain();
      eventChain.forEach((event) => {
        const baseHandler = new Handler(
          event.handlerFunction,
          this.bot,
          event.filter
        );
        this.bot.on(event.eventType, baseHandler.call);
      });
    });
  };
}
