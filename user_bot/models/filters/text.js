const BaseFilter = require("./base_filter");

class Text extends BaseFilter {
  constructor(text) {
    super();
    this.pattern = text;
  }

  call(msg) {
    const messageText = msg.text;
    return messageText === this.pattern;
  }
}

module.exports = Text;
