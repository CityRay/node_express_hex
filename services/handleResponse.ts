import { type Response } from 'express';

const handleResponse = (
  res: Response,
  status = 200,
  data: any,
  message: any = '',
  error?: any
): void => {
  if (status === 200) {
    res.json({
      status: true,
      data
    });
  } else {
    res.status(status).send({
      status: false,
      message,
      error
    });
  }

  res.end();
};

export default handleResponse;
