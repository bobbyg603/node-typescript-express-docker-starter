import { controller } from './home.controller';
import type { Request, Response } from 'express';

export const homeRouter = (req: Request, res: Response) => controller(req, res);