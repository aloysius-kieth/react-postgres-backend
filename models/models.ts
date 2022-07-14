import { CONFIG } from "../config";
import { Request, Response } from "express";
import { IQueryCallback, query } from "../db";

export const Models = {
  GetEmployees: async (
    req: Request,
    res: Response,
    callback: IQueryCallback
  ) => {
    const queryStr = `SELECT * FROM ${CONFIG.database.table}`;

    query(queryStr, [], (result, success) => {
      if (success) callback(result, true);
      else callback(result, false);
    });
  },
  AddEmployee: async (
    req: Request,
    res: Response,
    callback: IQueryCallback
  ) => {
    const queryStr = `INSERT INTO ${CONFIG.database.table} (name, title, hire_date, country, reports_to, employee_image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;
    const args = [
      req.body.name,
      req.body.title,
      req.body.hire_date,
      req.body.country,
      req.body.reports_to,
      req.body.employee_image,
    ];

    query(queryStr, args, (result, success) => {
      if (success) callback(result, true);
      else callback(result, false);
    });
  },
  UpdateEmployee: async (
    req: Request,
    res: Response,
    callback: IQueryCallback
  ) => {
    const queryStr = `UPDATE ${CONFIG.database.table} SET name = $1, updated_at = $2  WHERE id = $3 RETURNING *;`;
    const updatedTime = new Date(Date.now()).toISOString();
    const args = [req.body.name, updatedTime, req.body.id];

    console.log(req.body);

    query(queryStr, args, (result, success) => {
      if (success) callback(result, true);
      else callback(result, false);
    });
  },
  DeleteEmployee: async (
    req: Request,
    res: Response,
    callback: IQueryCallback
  ) => {
    const queryStr = `DELETE FROM ${CONFIG.database.table} WHERE id = $1 RETURNING *;`;
    const args = [req.body.id];

    query(queryStr, args, (result, success) => {
      if (success) callback(result, true);
      else callback(result, false);
    });
  },
};
