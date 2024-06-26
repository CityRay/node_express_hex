import express, { type Request, type Response, type NextFunction } from 'express';
import createError, { type HttpError } from 'http-errors';
import helmet from 'helmet';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

// swagger
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger-output.json';

// router
import postsRouter from './routes/posts';
import userRouter from './routes/user';

dotenv.config({ path: './config.env' });

const app = express();

require('./connections/mongoose');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Express Middlewares
app.use(helmet());
app.use(cors());
app.use(logger('dev'));
app.use(express.json()); // { limit: '10mb' } 可調整請求大小限制.
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Route
app.use('/api/user', userRouter);
app.use('/api/post', postsRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

// error handler
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
