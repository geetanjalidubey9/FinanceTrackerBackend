import { Response } from "express";

const sendSuccess = (
  res: Response,
  data: any,
  message: string = "Success",
  statusCode: number = 200,
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

const sendCreated = (
  res: Response,
  data: any,
  message: string = "Created successfully",
  statusCode: number = 201,
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

const sendNoContent = (
  res: Response,
  message: string = "Deleted successfully",
  statusCode: number = 204,
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data: null,
  });
};

const sendBadRequest = (
  res: Response,
  message: string = "Bad request",
  statusCode: number = 400,
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    data: null,
  });
};

const sendUnauthorized = (
  res: Response,
  message: string = "Unauthorized access",
  statusCode: number = 401,
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    data: null,
  });
};

const sendServerError = (res: Response,message: string = "Internal server error",statusCode: number = 500,
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    data: null,
  });
};
const sendForbidden = (res: Response, message: string = "Forbidden",statusCode:number=403) => {
    return res.status(statusCode).json({
        success: false,
        message,
        data: null
    });
};

export {
  sendSuccess,
  sendCreated,
  sendNoContent,
  sendBadRequest,
  sendUnauthorized,
  sendServerError,
  sendForbidden
};
