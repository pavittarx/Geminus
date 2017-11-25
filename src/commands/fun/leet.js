const { Command } = require('discord.js-commando');
const leet = require('leet');

class LeetCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'leet',
      aliases: ['haxor'],
      group: 'fun',
      memberName: 'leet',
      description: 'Converts your text into leet hax0r text.',
      args: [
        {
          key: 'query',
          prompt: 'What do you want to convert into leet hax0r text?',
          type: 'string',
        },
      ],
    });
  }

  async run(message, { query }) {
    await message.delete();

    const text = leet.convert(query);
    return message.channel.send(text);
  }
}

module.exports = LeetCommand;
