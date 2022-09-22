import cookieParser from 'cookie-parser';
import express from 'express';
import createHttpError, { HttpError } from 'http-errors';
import morgan from 'morgan';
import { homeRouter } from './src/home/home.router';

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', homeRouter);

app.use((_req, res) => {
  res.status(404).send(createHttpError('Not found'));
});

app.use((err: HttpError, req: express.Request, res: express.Response) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500).send(createHttpError('Internal error'));
});

export default app;
