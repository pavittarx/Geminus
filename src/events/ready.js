const Event = require('../base/Event');
const { enable, activity } = require('../../config/RichPresence');

class Ready extends Event {
  async handle() {
    this.client.logger.silly('I\'m ready!');

    // Discord
    if (enable) {
      try {
        await this.client.user.setPresence({ activity: activity });
        this.client.logger.silly('Presence has been set');
      } catch (error) {
        this.client.logger.error(`Failed to set presence! Reason: ${error}`);
      }
    }
  }
}

module.exports = Ready;
