const argv = require('../cli/yargs');
const dataMapper = require('../database/dataMapper');

// Main function to handle CRUD operations
const mainController = {
  main: async () => {
    const command = argv._[0];

    switch (command) {
      case 'new':
        await dataMapper.addTodoItem(argv.description);
        break;
      case 'list':
        await dataMapper.listTodoItems(argv.status);
				console.log(argv.status);
        break;
      case 'done':
        await dataMapper.updateTodoItem(argv.id, true);
        break;
      case 'delete':
        await dataMapper.deleteTodoItem(argv.id);
        break;
      default:
        console.log('Invalid command. Use --help for assistance.');
    }
  },
};

module.exports = mainController;
