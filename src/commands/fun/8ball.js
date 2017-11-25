const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const answers = require('../../../resources/data/8ball');
const _ = require('lodash');

class MagicBallCommand extends Command {
  constructor(client) {
    super(client, {
      name: '8ball',
      group: 'fun',
      memberName: '8ball',
      description: 'Reach into the future to find answers to your questions.',
      clientPermissions: ['EMBED_LINKS'],
      args: [
        {
          key: 'question',
          prompt: 'What do you want to ask the magic 8ball?',
          type: 'string',
          validate: message => {
            if (!message.includes('?')) return 'You must provide a question!';
            return true;
          },
        },
      ],
    });
  }

  run(message, { question }) {
    const answer = _.sample(answers);

    const embed = new RichEmbed()
      .setColor(this.client.options.embedColor)
      .setTitle(`${question}`)
      .setDescription(`🎱 ${answer}`);

    return message.edit(embed);
  }
}

module.exports = MagicBallCommand ;
