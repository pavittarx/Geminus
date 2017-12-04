const { Command } = require('discord.js-commando');

class TriggeredCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'triggered',
      group: 'copypasta',
      memberName: 'triggered',
      description: 'Did I trigger you?',
      args: [
        {
          key: 'user',
          type: 'user',
          prompt: 'Who did you trigger?',
          default: '',
        },
      ],
    });
  }

  async run(message, { user }) {
    await message.delete();

    return message.channel.send(`Whatever ${user.length !== 0 ? user : 'kid'}. Oh I'm sorry did I fucking trigger you? Were you fucking triggered you little cry baby? Fuck off. Literally saying not a fucking word to you and you're gonna fucking mute me because you have a problem with me just fucking talking shit in all chat? Honestly go fuck yourself to the highest fucking caliber you fucking asshole. So sick of little fucking bitches like you who fucking have a fucking opinion like you're fucking sitting over there like, oh I'm some fucking problem to you because I'm not even fucking saying a fucking word to you. Fuck off. Call it what you fucking asshole? Hormonal? Kid you're a fucking bullshitter. You're a fucking bullshitter. Go fuck yourself. You ain't fucking nothing. You ain't fucking anyone. You ain't got a fucking clue in your fucking head who I am or what I'm fucking about. That I'm fucking calling these fucking kids tryhards, has your fucking panties in a bunch for what? For what? For fucking what kid? Honestly I'm fucking sick of kids like you. Literally go fuck yourself. Go fuck yourself and everything that you fucking stand for because I'm gonna tell you right now, you don't stand for shit kid. You don't stand for fucking shit. Please. Yeah, talk in all chat. Yeah like anybody fucking cares kid go find a fucking friend to talk to, right? Because you can't fucking talk to me, you can't fucking treat me like a fucking person. You ain't fucking real kid. You ain't fucking real. You ain't got a fucking real fucking bone in your fucking body kid. So go fucking all chat, and make some fucking friends. Alright? You can make some fucking friends because \\"Oh, this guy's hormonal,\\" pffft \\"Uh I'm gonna mute him,\\" pffft fuck off. You're literally a fucking cancer on this fucking world kid. Never fucking forget it.`);
  }
}

module.exports = TriggeredCommand;
