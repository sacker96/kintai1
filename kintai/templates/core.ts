const generator = require('custom-template-generator');
const args = process.argv.slice(2);

if (args.length < 2) {
  console.error('no name or type');
  process.exit();
}

generator({
  wrapInFolder: false,
  componentName: args[1],
  customTemplatesUrl: './templates',
  dest: './core',
  templateName: args[0],
  autoIndent: false,
  data: {}
});
