class Event {
  constructor(client) {
    this.client = client;
  }

  handle(...args) {
    return args;
  }
}

module.exports = Event;