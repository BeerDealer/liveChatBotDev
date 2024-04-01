import { BaseFilter } from "../filters/base_filter";
import { Event } from "./event";

export interface BaseRouter {
  eventChain: Array<Event>;
  getEventChain(): Array<Event>;
  text(handler: CallableFunction, filter: BaseFilter | null): void;
  callbackQuery(handler: CallableFunction, filter: BaseFilter | null): void;
  __addEvent(
    eventType: string,
    handler: CallableFunction,
    filter: BaseFilter | null
  ): void;
}
