import { Request, Response } from 'express';
import { readdir } from 'fs/promises';
import { uploadFile } from '../../middleware/upload';

export class FilesService {
    async readDirectory(path: string) {
        return await readdir(path);
    }

    async uploadFile(req: Request, res: Response): Promise<void> {
        return uploadFile(req, res);
    }
}
