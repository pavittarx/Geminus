const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

class TinyURLCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'tinyurl',
      aliases: ['short'],
      group: 'utility',
      memberName: 'tinyurl',
      description: 'Shortens a URL.',
      clientPermissions: ['EMBED_LINKS'],
      args: [
        {
          key: 'url',
          prompt: 'What URL do you want to shorten?',
          type: 'string',
        },
      ],
    });
  }

  async run(message, { url }) {
    await message.delete();

    const { text } = await this.client.request('GET', `http://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);

    const embed = new RichEmbed()
      .setColor(this.client.options.embedColor)
      .addField(`Link`, url)
      .addField('Shortened URL', text);

    message.channel.send(embed);
  }
}

module.exports = TinyURLCommand ;
