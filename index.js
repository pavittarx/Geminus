require('dotenv').config({ path: 'geminus.conf' });
const { Geminus } = require('./src');
const path = require('path');

const { auth_token, prefix, embed_color } = process.env;

const geminus = new Geminus({
  commandPrefix: prefix,
  selfbot: true,
  unknownCommandResponse: false,
  embedColor: embed_color,
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


geminus.login(auth_token);
