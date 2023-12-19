# Todo List CLI Application

A simple Command Line Interface (CLI) application for managing a todo list using Node.js and PostgreSQL.

## Table of Contents

- [Todo List CLI Application](#todo-list-cli-application)
	- [Table of Contents](#table-of-contents)
	- [Installation](#installation)
	- [Usage](#usage)
	- [Commands](#commands)
	- [Database Setup](#database-setup)
	- [Dependencies](#dependencies)
	- [License](#license)

## Installation

1. Clone the Repository:

   ```bash
   git clone https://github.com/denis-pianelli/cli-apps-todo-app.git
   ```

2. Install Dependencies

   ```bash
   cd todo-list-cli
   npm install
   ```

3. Database Setup

   - Make sure you have PostgreSQL installed and running.
   - Create a database and a table for todos using the provided SQL commands in the [Database Setup](#database-setup) section below.

## Usage

Run the application using the following command:

```bash
node todo-app.js [options]
```

## Commands

- **Add a new todo item:**

  ```bash
  node todo-app.js new --description "Your new todo item"
  ```

- **List todo items:**

  ```bash
  node todo-app.js list --status "all"|"pending"|"done"
  ```

- **Mark a todo item as done:**

  ```bash
  node todo-app.js done --id 1
  ```

- **Delete a todo item:**

  ```bash
  node todo-app.js delete --id 1
  ```

- **Show available options:**

  ```bash
  node todo-app.js --help
  ```

## Database Setup

Make sure you have PostgreSQL installed and running. Create a database and a table for todos following these steps:

1. Connect as super user

   ```bash
   sudo -i -u postgres psql
   ```

2. Create a user

   ```postgres
   CREATE ROLE user_name WITH LOGIN PASSWORD 'user_pwd';
   ```

3. Create a database

   ```postgres
   CREATE DATABASE db_name OWNER user_name;
   ```

4. Create todos table

   ```bash
   psql -U user_name -d db_name -f ./app/database/create_db.sql
   ```

## Dependencies

- [pg:](https://www.npmjs.com/package/pg) PostgreSQL client for Node.js.
- [yargs:](https://www.npmjs.com/package/yargs) Command-line argument parser.

## License

This project is licensed under the MIT License - see the [LICENSE](https://choosealicense.com/licenses/mit/) file for details.
