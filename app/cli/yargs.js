const yargs = require('yargs');

// Command-line arguments configuration
const argv = yargs
  .command('new', 'Add a new todo item', {
    description: {
      demandOption: true,
      describe: 'Todo item description',
      type: 'string',
    },
  })
  .command('list', 'List todo items', {
    status: {
      describe: 'Filter by status (all, pending, done)',
      type: 'string',
    },
  })
  .command('done', 'Mark a todo item as done', {
    id: {
      demandOption: true,
      describe: 'Todo item ID',
      type: 'number',
    },
  })
  .command('delete', 'Delete a todo item', {
    id: {
      demandOption: true,
      describe: 'Todo item ID',
      type: 'number',
    },
  })
  .help().argv;

module.exports = argv;
