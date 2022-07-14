export const STATUS_CODES = [200, 201, 400, 401, 404, 403, 422, 500];

/**
 * @description Success response for API calls
 *
 * @param message
 * @param data
 * @param statusCode
 * @returns
 */

export const successResponse = (
  message: string,
  data: {} | any[],
  statusCode: number
) => {
  return {
    message,
    error: false,
    code: statusCode,
    data,
  };
};

/**
 * @description Error response for API calls
 *
 * @param message
 * @param statusCode
 * @returns
 */

export const errorResponse = (message: string, statusCode: number) => {
  const matchingCode = STATUS_CODES.find((code) => code === statusCode);

  if (!matchingCode) statusCode = 500;
  else statusCode = matchingCode;

  return {
    message,
    code: statusCode,
    error: true,
  };
};

/**
 * @description Validation response
 *
 * @param errors
 * @returns
 */

export const validationResponse = (errors: {} | []) => {
  return {
    message: "Validation error",
    error: true,
    code: 422,
    errors,
  };
};
