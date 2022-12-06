import dao from "./dao";
import Employee from "../models/employee";

export default class {
  static async getAllEmployees(): Promise<Employee[]> {
    const employees = await dao.all("SELECT * FROM employees", []);
    return <Employee[]>employees;
  }

  static async getEmployeeById(id: string): Promise<Employee> {
    const employee = await dao.get("SELECT * FROM employees WHERE id = ?", [
      id,
    ]);
    return <Employee>employee;
  }

  static async createEmployee(employee: Employee): Promise<boolean> {
    const stmt = `INSERT INTO employees (first_name, last_name, age) VALUES (?,?,?);`;
    try {
      await dao.run(stmt, [
        employee.first_name,
        employee.last_name,
        employee.age,
      ]);
      return true;
    } catch (err) {
      /* istanbul ignore next */
      console.error(err);
      /* istanbul ignore next */
      return false;
    }
  }

  static async updateEmployee(employee: Employee): Promise<boolean> {
    const stmt = `UPDATE employees SET first_name = ?, last_name = ?, age= ? WHERE id = ?;`;
    try {
      await dao.run(stmt, [
        employee.first_name,
        employee.last_name,
        employee.age,
        employee.id,
      ]);
      return true;
    } catch (err) {
      /* istanbul ignore next */
      console.error(err);
      /* istanbul ignore next */
      return false;
    }
  }

  static async deleteEmployee(employeeId: number) {
    const stmt = `DELETE FROM employees WHERE id = ?;`;
    try {
      await dao.run(stmt, [employeeId]);
      return true;
    } catch (err) {
      /* istanbul ignore next */
      console.error(err);
      /* istanbul ignore next */
      return false;
    }
  }
}
