import employeesController from "../controllers/employees.controller";
import * as express from "express";
const router = express.Router();

router.get("/", employeesController.getAllEmployees);
router.post("/", employeesController.createEmployee);
router.put("/", employeesController.updateEmployee);
router.delete("/:id", employeesController.deleteEmployee);
router.get("/:id", employeesController.getEmployeeById);

export default router;
