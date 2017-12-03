const { Command } = require('discord.js-commando');

class LmgtfyCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'lmgtfy',
      group: 'fun',
      memberName: 'lmgtfy',
      description: 'Let me Google that for you.',
      args: [
        {
          key: 'query',
          prompt: 'What do you want to google?',
          type: 'string',
        },
      ],
    });
  }

  async run(message, { query }) {
    await message.delete();

    const { text } = await this.client.request('GET', `http://tinyurl.com/api-create.php?url=http://letmegooglethatforyou.com/?q=${encodeURIComponent(query)}`);
    return message.channel.send(text);
  }
}

module.exports = LmgtfyCommand;
