// Run on Render build: creates config-keys.js from OPENAI_API_KEY env var.
const fs = require('fs');
const key = process.env.OPENAI_API_KEY || '';
const content = 'const CONFIG_KEYS = { OPENAI_API_KEY: ' + JSON.stringify(key) + ' };\n';
fs.writeFileSync('config-keys.js', content, 'utf8');
console.log('Wrote config-keys.js from OPENAI_API_KEY env');
