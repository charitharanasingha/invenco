/* istanbul ignore file */
import * as sqlite from "sqlite3";
const sqlite3 = sqlite.verbose();
const db = new sqlite3.Database("./db/sqlite.db");
import * as bcrypt from "bcrypt";
const saltRounds = 10;

export default class {
  static setupDbForDev() {
    db.serialize(function () {
      // Drop Tables:
      const dropUsersTable = "DROP TABLE IF EXISTS users";
      db.run(dropUsersTable);
      const dropEmployeesTable = "DROP TABLE IF EXISTS employees";
      db.run(dropEmployeesTable);

      // Create Tables:
      const createUsersTable =
        "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT,email TEXT, password text)";
      db.run(createUsersTable);
      const createEmployeesTable =
        "CREATE TABLE IF NOT EXISTS employees (id INTEGER PRIMARY KEY AUTOINCREMENT, first_name TEXT, last_name TEXT, age NUMERIC)";
      db.run(createEmployeesTable);

      const password = "123";

      bcrypt.hash(password, saltRounds, function (err, hash) {
        const insertUsers = `INSERT INTO users (email, password) VALUES ('john@doe.com', '${hash}');`;
        db.run(insertUsers);
      });
      const insertEmployees = `INSERT INTO employees (first_name, last_name, age) VALUES ('Charitha', 'Ranasingha', '36'), ('Kane', 'Williamson', '32'), ('Richie', 'McCaw', '41');`;

      db.run(insertEmployees);
    });
  }

  static all(stmt, params) {
    return new Promise((res, rej) => {
      db.all(stmt, params, (error, result) => {
        if (error) {
          return rej(error.message);
        }
        return res(result);
      });
    });
  }
  static get(stmt, params) {
    return new Promise((res, rej) => {
      db.get(stmt, params, (error, result) => {
        if (error) {
          return rej(error.message);
        }
        return res(result);
      });
    });
  }

  static run(stmt, params) {
    return new Promise((res, rej) => {
      db.run(stmt, params, (error, result) => {
        if (error) {
          return rej(error.message);
        }
        return res(result);
      });
    });
  }
}
