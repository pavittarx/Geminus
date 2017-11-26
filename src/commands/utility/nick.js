const { Command } = require('discord.js-commando');

class GameCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'game',
      group: 'utility',
      memberName: 'playing',
      description: 'Edit your playing game.',
      args: [
        {
          key: 'name',
          prompt: 'What game are you playing?',
          type: 'string',
          default: '',
        },
      ],
    });
  }

  async run(message, { name }) {
    await message.delete();

    this.client.user.setGame(name);
  }
}

module.exports = GameCommand ;
