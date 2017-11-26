const { Command } = require('discord.js-commando');

class NickCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'nick',
      group: 'utility',
      memberName: 'playing',
      description: 'Edit your playing game.',
      clientPermissions: ['CHANGE_NICKNAME'],
      args: [
        {
          key: 'nickname',
          prompt: 'Changes your nickname in the current channel.',
          type: 'string',
        },
      ],
    });
  }

  async run(message, { nickname }) {
    await message.delete();
    message.guild.member(message.author).setNickname(nickname);
  }
}

module.exports = NickCommand ;
