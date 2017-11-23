const { Client } = require('discord.js-commando');
const requireAll = require('require-all');
const request = require('superagent');
const Logger = require('./logging/Logger');
const path = require('path');

class Geminus extends Client {
  constructor(options) {
    super(options);
  }

  get logger() {
    return Logger;
  }

  /**
   * Initialize Geminus
   */
  initialize() {
    const events = requireAll({
      dirname: path.join(__dirname, './events'),
      filters: /(.*)\.js$/,
    });

    for (const [name, Event] of Object.entries(events)) {
      if (typeof Event !== 'function') continue;

      const eventClass = new Event(this);
      this.on(name, (...args) => eventClass.handle(...args));
    }
  }

  request(method, url) {
    return request(method, url);
  }
}

module.exports = Geminus;
