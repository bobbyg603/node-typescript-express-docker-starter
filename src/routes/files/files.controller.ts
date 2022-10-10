import type { Request, Response } from 'express';
import type { MulterError } from 'multer';
import { getConfig } from '../../../config';
import { FilesService } from './files.service';

export async function get(_req: Request, res: Response, filesService: FilesService): Promise<void> {
    console.log('[files]: Received GET request');
    const fileUploadPath = getConfig().fileUploadPath;
    const files = await filesService.readDirectory(fileUploadPath);
    res.send(files);
}

export async function post(req: Request, res: Response, filesService: FilesService): Promise<void> {
    console.log('[files]: Received POST request');
    await upload(req, res, filesService);
}

const upload = async (req: Request, res: Response, filesService: FilesService) => {
    try {
        await filesService.uploadFile(req, res);

        if (!req.file) {
            return res.status(400).send({ message: 'Please upload a file!' });
        }

        return res.status(200).send({
            message: `Uploads success: ${req.file?.originalname}`,
        });
    } catch (err) {
        const error = err as MulterError;
        console.log(error);

        if (error.code === 'LIMIT_FILE_SIZE') {
            return res.status(400).send({
                message: `File size cannot be larger than ${getConfig().fileUploadMaxSizeMb}MB!`,
            });
        }

        return res.status(500).send({
            message: `Could not upload the file: ${req.file?.originalname}. ${error}`,
        });
    }
};