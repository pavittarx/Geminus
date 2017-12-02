const { Command } = require('discord.js-commando');
const Jimp = require('jimp');

class ShitCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'shit',
      group: 'memes',
      memberName: 'shit',
      description: 'Ew, I stepped in shit.',
      clientPermissions: ['ATTACH_FILES'],
      args: [
        {
          key: 'user',
          prompt: 'Who did you step on?',
          type: 'user',
        },
      ],
    });
  }

  async run(message, { user }) {
    await message.delete();

    const shit = await Jimp.read('./resources/images/memes/shit.jpg');
    const avatar = await Jimp.read(user.avatarURL({ format: 'png' }));

    avatar.resize(200, 200);
    avatar.rotate(310);
    shit.composite(avatar, 150, 585);

    shit.getBuffer(Jimp.MIME_PNG, (error, buffer) =>
      message.channel.send({ files: [{ name: 'shit.png', attachment: buffer }] }));
  }
}

module.exports = ShitCommand;
