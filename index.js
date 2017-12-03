const { authToken, embedColor, prefix } = require('./config/Geminus');
const { Geminus } = require('./src');
const path = require('path');

const geminus = new Geminus({
  commandPrefix: prefix,
  selfbot: true,
  unknownCommandResponse: false,
  embedColor: embedColor,
});

/**
 * Initialize Geminus
 */
geminus.initialize();

/**
 * Register commands
 */
geminus.registry
  .registerDefaults()
  .registerGroups([
    ['copypasta', 'copypasta'],
    ['fun', 'Fun'],
    ['memes', 'Memes'],
    ['search', 'Search'],
    ['utility', 'Utility'],
  ])
  .registerCommandsIn(path.join(__dirname, './src/commands'));


geminus.login(authToken);
