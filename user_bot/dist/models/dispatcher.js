const Handler = require("./handler");
const Router = require("./router");

class Dispatcher {
  constructor(bot) {
    this.bot = bot;
  }

  registerHandlers = (...routers) => {
    routers.forEach((router) => {
      if (!(router instanceof Router)) {
        throw new Error(
          "All elements in the router array must be instances of Router"
        );
      }
    });
    routers.forEach((router) => {
      const eventChain = router.getEventChain();
      eventChain.forEach((event) => {
        const { eventType, handler, filter } = event;
        const baseHandler = new Handler(handler, filter, this.bot);
        this.bot.on(eventType, baseHandler.call);
      });
    });
  };
}

module.exports = Dispatcher;
