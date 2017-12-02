const { Command } = require('discord.js-commando');
const { MessageEmbed } = require('discord.js');

class UrbanCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'urban',
      group: 'search',
      memberName: 'urban',
      description: 'Search The Urban Dictionary.',
      clientPermissions: ['EMBED_LINKS'],
      args: [
        {
          key: 'term',
          prompt: 'What are you looking for?',
          type: 'string',
        },
      ],
    });
  }

  async run(message, { term }) {
    await message.delete();

    const { body } = await this.client.request('GET', `http://api.urbandictionary.com/v0/define?term=${term}`);
    if (body.result_type === 'no_results') return this.client.logger.silly('Urban Dictionary doesn\'t have that term in it\'s database.');

    const embed = new MessageEmbed()
      .setColor(this.client.options.embedColor)
      .setTitle('Urban Dictionary')
      .addField('Word', body.list[0].word)
      .addField('Definition', body.list[0].definition)
      .addField('Example', body.list[0].example);

    return message.channel.send({ embed });
  }
}

module.exports = UrbanCommand ;
