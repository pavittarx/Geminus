const Event = require('../base/Event');

class Ready extends Event {
  handle() {
    this.client.logger.silly('I\'m ready!');
  }
}

module.exports = Ready;
