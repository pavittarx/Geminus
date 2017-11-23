require('dotenv').config({ path: 'geminus.conf' });
const { Geminus } = require('./src');
const path = require('path');

const { auth_token, prefix } = process.env;

const geminus = new Geminus({
  commandPrefix: prefix,
  selfbot: true,
  unknownCommandResponse: false,
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
  .registerCommandsIn(path.join(__dirname, './src/commands'));


geminus.login(auth_token);
