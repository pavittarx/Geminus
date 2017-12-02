const { Command } = require('discord.js-commando');

class PruneCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'prune',
      aliases: ['clear', 'purge'],
      group: 'utility',
      memberName: 'prune',
      description: 'Deletes up to 99 messages.',
      args: [
        {
          key: 'count',
          prompt: 'How many messages would you like to delete?',
          type: 'integer',
          validate: number => number < 100 && number > 0,
        },
      ],
    });
  }

  async run(message, { count }) {
    try {
      const messages = await message.channel.messages.fetch({ limit: count });
      const deletable = messages.filter(m => m.author.id === this.client.user.id);
      await Promise.all(deletable.map(m => m.delete()));

      this.client.logger.silly(`Successfully deleted ${deletable.size} messages!`);
    } catch (error) {
      this.client.logger.error(`Failed to delete messages! Reason: ${error}`);
    }
  }
}

module.exports = PruneCommand;
