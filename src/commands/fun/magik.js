const { Command } = require('discord.js-commando');

class MagikCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'magik',
      group: 'fun',
      memberName: 'magik',
      description: 'Make something magik.',
      args: [
        {
          key: 'user',
          prompt: 'Who\'s avatar would you apply magik to?',
          type: 'user',
        },
      ],
    });
  }

  async run(message, { user }) {
    await message.delete();

    const { body } = await this.client.request('GET', `https://discord.services/api/magik?url=${user.displayAvatarURL({ format: 'png', size: 1024 })}`);
    return message.channel.send({ files: [{ name: 'magik.png', attachment: body }] });
  }
}

module.exports = MagikCommand;
