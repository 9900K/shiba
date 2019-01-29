
let packageJson = require('./package.json');

/* eslint no-process-env: 0 */
module.exports =
{
  ENV:            process.env.NODE_ENV || 'development',
  VERSION:        packageJson.version,
  CLIENT_SEED:
    process.env.BUSTABIT_CLIENTSEED ||
    '60567ee7538baa047511a7e3d20137a5b763a8b2bfd3be5412f88ca9c349f06a',
  API_SERVER:     process.env.BUSTABIT_API_SERVER || "http://185.141.61.20:3841/",
  API_KEY:        process.env.BUSTABIT_API_KEY,
  OXR_APP_ID:     process.env.OXR_APP_ID,
  SESSION:        process.env.SHIBA_SESSION || '79df49ed-7113-4201-b3bf-5c8b2388495d',
  DATABASE:       process.env.SHIBA_DATABASE || 'postgres://localhost/shibadb',
  CHAT_HISTORY:   process.env.SHIBA_CHAT_HISTORY || 2000,
  GAME_HISTORY:   process.env.SHIBA_GAME_HISTORY || 200,
  /* keep in lowercase */
  USER_WHITELIST: [
    "enzo",
  ]
};
