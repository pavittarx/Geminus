const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');

class AdviceCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'advice',
      group: 'fun',
      memberName: 'advice',
      description: 'Do you need some advice?',
      clientPermissions: ['EMBED_LINKS'],
    });
  }

  async run(message) {
    const { text } = await this.client.request('GET', 'http://api.adviceslip.com/advice');
    const json = JSON.parse(text);

    const embed = new RichEmbed()
      .setColor(this.client.options.embedColor)
      .setDescription(`:star: ${json.slip.advice}`);

    return message.edit(embed);
  }
}

module.exports = AdviceCommand ;
