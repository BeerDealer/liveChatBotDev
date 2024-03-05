const BaseFilter = require("./filters/base_filter");

class Handler {
  constructor(handler, filter = null, bot) {
    if (typeof handler !== "function") {
      throw new Error("Handler must be a function");
    }

    if (filter !== null && !(filter instanceof BaseFilter)) {
      throw new Error("Filter must be an instance of BaseFilter");
    }

    this.bot = bot;
    this.handler = handler;
    this.filter = filter;
  }

  call = (msg) => {
    const data = {
      bot: this.bot,
      msg: msg,
    };
    if (this.filter && this.filter.call(msg)) {
      this.handler(data);
    } else if (!this.filter) {
      this.handler(data);
    }
  };
}

module.exports = Handler;
