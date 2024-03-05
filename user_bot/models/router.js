const eventTypes = require("./event_types");

class Router {
  constructor() {
    this.eventChain = [];
  }

  getEventChain = () => {
    return this.eventChain;
  };

  text = (handler, filter = null) => {
    this.eventChain.push({
      eventType: eventTypes.text,
      handler: handler,
      filter: filter,
    });
  };

  callbackQuery = (handler, filter = null) => {
    this.eventChain.push({
      eventType: eventTypes.callbackQuery,
      handler: handler,
      filter: filter,
    });
  };
}

module.exports = Router;
