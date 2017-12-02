const { Command } = require('discord.js-commando');
const Jimp = require('jimp');

class DisabilityCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'disability',
      aliases: ['disabled'],
      group: 'memes',
      memberName: 'disability',
      description: 'Not all disabilities are visible!',
      clientPermissions: ['ATTACH_FILES'],
      args: [
        {
          key: 'user',
          prompt: 'Who has a disability?',
          type: 'user',
        },
      ],
    });
  }

  async run(message, { user }) {
    await message.delete();

    const disability = await Jimp.read('./resources/images/memes/disability.jpg');
    const avatar = await Jimp.read(user.avatarURL({ format: 'png' }));

    avatar.resize(120, 120);
    disability.composite(avatar, 360, 250);

    disability.getBuffer(Jimp.MIME_PNG, (error, buffer) =>
      message.channel.send({ files: [{ name: 'disability.png', attachment: buffer }] }));
  }
}

module.exports = DisabilityCommand;
