const { Command } = require('discord.js-commando');
const { rickAndMorty } = require('../../../resources/data/pasta');

class RickAndMortyCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'rick',
      group: 'copypasta',
      memberName: 'rick',
      description: 'Rick and Morty.',
    });
  }

  async run(message) {
    await message.delete();

    return message.channel.send(`${rickAndMorty}`);
  }
}

module.exports = RickAndMortyCommand;
