import { Request, Response } from "express";
import { Models } from "../models/models";
import { successResponse, errorResponse } from "../models/responseApi";

export const Controllers = {
  Home: (req: Request, res: Response) => {
    res.send("Dashboard w/ Postgres DB");
  },

  GetAllEmployees: (req: Request, res: Response) => {
    Models.GetEmployees(req, res, (result, success) => {
      if (success) {
        res
          .status(200)
          .json(successResponse("Success",  result , res.statusCode));
      } else {
        res.status(500).json(errorResponse(`${result}`, res.statusCode));
      }
    });
  },

  AddEmployee: (req: Request, res: Response) => {
    Models.AddEmployee(req, res, (result, success) => {
      if (success) {
        res
          .status(200)
          .json(successResponse("Success", { result }, res.statusCode));
      } else {
        res.status(500).json(errorResponse(`${result}`, res.statusCode));
      }
    });
  },

  UpdateEmployee: (req: Request, res: Response) => {
    Models.UpdateEmployee(req, res, (result, success) => {
      if (success) {
        res
          .status(200)
          .json(successResponse("Success", { result }, res.statusCode));
      } else {
        res.status(500).json(errorResponse(`${result}`, res.statusCode));
      }
    });
  },

  DeleteEmployee: (req: Request, res: Response) => {
    Models.DeleteEmployee(req, res, (result, success) => {
      if (success) {
        res
          .status(200)
          .json(successResponse("Success", { result }, res.statusCode));
      } else {
        res.status(500).json(errorResponse(`${result}`, res.statusCode));
      }
    });
  },
};
