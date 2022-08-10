import express from 'express';
import dotenv from 'dotenv';
import { controller as homeController } from './src/home/home.controller';

dotenv.config();

const app = express();
const port = process.env.PORT ?? 8080;

app.get('/', (req, res) => homeController(req, res));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
