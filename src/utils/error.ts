class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

class NotFoundError extends AppError {
  constructor(message: string = "Resource not found") {
    super(message, 404);
  }
}

class UnauthorizedError extends AppError {
  constructor(message: string = "Unauthorized access") {
    super(message, 401);
  }
}

class ForbiddenError extends AppError {
  constructor(message: string = "Forbidden") {
    super(message, 403);
  }
}

class ValidationError extends AppError {
  constructor(message: string = "Validation failed") {
    super(message, 400);
  }
}

export {
  AppError,
  NotFoundError,
  UnauthorizedError,
  ForbiddenError,
  ValidationError,
};
