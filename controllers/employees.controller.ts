import repo from "../repositories/employee.repository";
import { Request, Response } from "express";
import Employee from "../models/employee";
// import { Get, Route } from "tsoa";

export default class {
  static async getAllEmployees(req: Request, res: Response) {
    const employees = await repo.getAllEmployees();
    return res.send({ employees });
  }

  static async getEmployeeById(req: Request, res: Response) {
    const employee = await repo.getEmployeeById(req.params.id);
    if (!employee) {
      return res.status(404).send(employee);
    }
    return res.send({ employee });
  }

  static async createEmployee(req: Request, res: Response) {
    if (!req.body.first_name || !req.body.last_name || !req.body.age) {
      const err: Error = new Error(
        "Employee first name , last name and age are required."
      );
      return res.status(400).send({ error: err.message });
    }
    const newEmployee = new Employee(
      req.body.first_name,
      req.body.last_name,
      req.body.age
    );
    const success = await repo.createEmployee(newEmployee);
    return res.send({ success, employee: newEmployee });
  }

  static async updateEmployee(req: Request, res: Response) {
    if (!req.body.id) {
      const err: Error = new Error("Employee Id is required.");
      return res.status(400).send({ error: err.message });
    }
    const success = await repo.updateEmployee(req.body);
    return res.send({ success, employee: req.body });
  }

  static async deleteEmployee(req: Request, res: Response) {
    if (!req.params.id) {
      const err: Error = new Error("Employee id is required.");
      return res.status(400).send({ error: err.message });
    }
    const deleted = await repo.deleteEmployee(Number(req.params.id));
    return res.send({ success: deleted });
  }
}
