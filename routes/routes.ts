import express from "express";
import { Controllers } from "../controllers/controllers";

export const router = express.Router();

const ROUTES = {
  HOME: "/",
  GET_EMPLOYEES: "/getEmployees",
  ADD_EMPLOYEES: "/addEmployee",
  UPDATE_EMPLOYEE: "/updateEmployee",
  DELETE_EMPLOYEES: "/deleteEmployee",
};

router.get(ROUTES.HOME, Controllers.Home);
router.get(ROUTES.GET_EMPLOYEES, Controllers.GetAllEmployees);
router.post(ROUTES.ADD_EMPLOYEES, Controllers.AddEmployee);
router.put(ROUTES.UPDATE_EMPLOYEE, Controllers.UpdateEmployee);
router.delete(ROUTES.DELETE_EMPLOYEES, Controllers.DeleteEmployee);
