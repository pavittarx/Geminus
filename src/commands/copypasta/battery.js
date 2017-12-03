const { Command } = require('discord.js-commando');
const { battery } = require('../../../resources/data/pasta');

class BatteryCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'battery',
      group: 'copypasta',
      memberName: 'battery',
      description: 'Shove a battery up your ass.',
    });
  }

  async run(message) {
    await message.delete();

    return message.channel.send(`${battery}`);
  }
}

module.exports = BatteryCommand;
