import { get } from './home.controller';
import type { Express, Request, Response } from 'express';

export function createHomeRoutes(app: Express): void {
    app.get('/', (req: Request, res: Response) => get(req, res));
}
