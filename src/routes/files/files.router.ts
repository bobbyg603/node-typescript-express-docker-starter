import type { Express, Request, Response } from 'express';
import { get, post } from './files.controller';
import { FilesService } from './files.service';

export function createFilesRoutes(app: Express): void {
    const filesService = new FilesService();
    app.get('/files', (req: Request, res: Response) => get(req, res, filesService));
    app.post('/files', (req: Request, res: Response) => post(req, res, filesService));
}
