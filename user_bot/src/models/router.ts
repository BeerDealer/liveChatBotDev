import { eventTypes } from "./interfaces/event_types";
import { Event } from "./interfaces/event";
import { BaseFilter } from "./filters/base_filter";
import { BaseRouter } from "./interfaces/base_router";

export class Router implements BaseRouter {
  eventChain: Array<Event>;

  constructor() {
    this.eventChain = [];
  }

  public getEventChain(): Array<Event> {
    return this.eventChain;
  }

  public text(
    handlerFunction: CallableFunction,
    filter: BaseFilter | null = null
  ): void {
    this.__addEvent(eventTypes.text, handlerFunction, filter);
  }

  public callbackQuery(
    handlerFunction: CallableFunction,
    filter: BaseFilter | null = null
  ): void {
    this.__addEvent(eventTypes.callbackQuery, handlerFunction, filter);
  }

  __addEvent(
    eventType: string,
    handlerFunction: CallableFunction,
    filter: BaseFilter | null
  ): void {
    const newEvent: Event = {
      eventType: eventType,
      handlerFunction: handlerFunction,
      filter: filter,
    };
    this.eventChain.push(newEvent);
  }
}
