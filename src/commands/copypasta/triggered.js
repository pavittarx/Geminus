const { Command } = require('discord.js-commando');
const { triggered } = require('../../../resources/data/pasta');

class TriggeredCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'triggered',
      group: 'copypasta',
      memberName: 'triggered',
      description: 'Did I trigger you?',
      args: [
        {
          key: 'user',
          type: 'user',
          prompt: 'Who did you trigger?',
          default: '',
        },
      ],
    });
  }

  async run(message, { user }) {
    await message.delete();

    return message.channel.send(`${triggered(user)}`);
  }
}

module.exports = TriggeredCommand;
