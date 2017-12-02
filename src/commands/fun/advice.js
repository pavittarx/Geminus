const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

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
    await message.delete();

    const { text } = await this.client.request('GET', 'http://api.adviceslip.com/advice');
    const json = JSON.parse(text);

    const embed = new MessageEmbed()
      .setColor(this.client.options.embedColor)
      .setDescription(`:star: ${json.slip.advice}`);

    return message.channel.send(embed);
  }
}

module.exports = AdviceCommand ;
