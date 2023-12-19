const client = require('./client');

const dataMapper = {
  // Function to add a new todo item
  addTodoItem: async (description) => {
    const query = {
      text: 'INSERT INTO todos(description, done) VALUES($1, $2) RETURNING *',
      values: [description, false],
    };

    try {
      const result = await client.query(query);
      console.log('Todo item added:', result.rows[0]);
    } catch (err) {
      console.error('Error adding todo item:', err.message);
    }
  },

  // Function to list todo items
  listTodoItems: async (status) => {
    let query = 'SELECT * FROM todos';

    if (status === 'pending' || status === 'done') {
      query += ` WHERE done = ${status === 'done'}`;
    }

    try {
			console.log(query);
      const result = await client.query(query);
      console.log('Todo items:');
      result.rows.forEach((item) => {
        console.log(
          `[${item.id}] ${item.description} - ${item.done ? 'Done' : 'Pending'}`
        );
      });
    } catch (err) {
      console.error('Error listing todo items:', err.message);
    }
  },

  // Function to update a todo item
  updateTodoItem: async (id, done) => {
    const query = {
      text: 'UPDATE todos SET done = $1 WHERE id = $2 RETURNING *',
      values: [done, id],
    };

    try {
      const result = await client.query(query);
      if (result.rowCount === 0) {
        console.log(`Todo item with ID ${id} not found.`);
      } else {
        console.log('Todo item updated:', result.rows[0]);
      }
    } catch (err) {
      console.error('Error updating todo item:', err.message);
    }
  },

  // Function to delete a todo item
  deleteTodoItem: async (id) => {
    const query = {
      text: 'DELETE FROM todos WHERE id = $1 RETURNING *',
      values: [id],
    };

    try {
      const result = await client.query(query);
      if (result.rowCount === 0) {
        console.log(`Todo item with ID ${id} not found.`);
      } else {
        console.log('Todo item deleted:', result.rows[0]);
      }
    } catch (err) {
      console.error('Error deleting todo item:', err.message);
    }
  },
};

module.exports = dataMapper;
