import dotenv from 'dotenv';
dotenv.config();

interface Config {
    fileUploadPath: string;
    fileUploadMaxSizeMb: number;
    port: number;
}

export function getConfig(): Config {
    return {
        fileUploadPath: process.env['FILE_UPLOAD_PATH'] || 'files',
        fileUploadMaxSizeMb: Number(process.env['FILE_UPLOAD_MAX_SIZE_MB']) || 20,
        port: Number(process.env.PORT) || 3000
    };
}