import { get } from './home.controller';
import type { Express, Request, Response } from 'express';

export function createHomeRoutes(app: Express): void {
    const homeGetController = (req: Request, res: Response) => get(req, res);
    app.get('/', homeGetController);
    app.get('/home', homeGetController);
}
