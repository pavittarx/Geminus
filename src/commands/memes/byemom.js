const { Command } = require('discord.js-commando');
const Jimp = require('jimp');

class ByeMomCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'byemom',
      aliases: ['bye'],
      group: 'memes',
      memberName: 'byemom',
      description: 'Mom is gone, what are you going to search on google?',
      clientPermissions: ['ATTACH_FILES'],
      args: [
        {
          key: 'user',
          prompt: 'Searching for?',
          type: 'user',
        },
        {
          key: 'search',
          prompt: 'Searching for?',
          type: 'string',
        },
      ],
    });
  }

  async run(message, { search, user }) {
    await message.delete();


    const mom = await Jimp.read('./resources/images/memes/mom.png');
    const avatar = await Jimp.read(user.displayAvatarURL({ format: 'jpg' }));
    const avatar2 = avatar.clone();
    const blank = await Jimp.read('./resources/images/blank.png');

    avatar.resize(70, 70);
    avatar2.resize(125, 125);
    mom.composite(avatar, 530, 15);
    mom.composite(avatar2, 70, 340);

    const font = await Jimp.loadFont(Jimp.FONT_SANS_16_BLACK);
    blank.resize(275, 200);

    const print = await blank.print(font, 0, 0, search, 275);
    print.rotate(334);

    mom.composite(print, 360, 460);
    mom.getBuffer(Jimp.MIME_PNG, (error, buffer) =>
      message.channel.send({ files: [{ name: 'byemom.png', attachment: buffer }] }));
  }
}

module.exports = ByeMomCommand;
