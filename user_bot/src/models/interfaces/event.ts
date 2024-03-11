import { BaseFilter } from "../filters/base_filter";

export interface Event {
  eventType: string;
  handlerFunction: CallableFunction;
  filter: BaseFilter | null;
}
