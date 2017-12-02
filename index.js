const { authToken, embedColor, prefix } = require('./config/Geminus');
const { Geminus } = require('./src');
const path = require('path');

const geminus = new Geminus({
  selfbot: true,
  prefix: prefix,
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
    ['fun', 'Fun'],
    ['memes', 'Memes'],
    ['search', 'Search'],
    ['utility', 'Utility'],
  ])
  .registerCommandsIn(path.join(__dirname, './src/commands'));


geminus.login(authToken);
