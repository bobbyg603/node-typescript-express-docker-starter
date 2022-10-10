import util from 'util';
import multer from 'multer';
import { getConfig } from '../../config';

const config = getConfig();
const fileUploadPath = config.fileUploadPath;
const maxSize = config.fileUploadMaxSizeMb * 1024 * 1024;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, fileUploadPath);
    },
    filename: (req, file, cb) => {
        console.log(file.originalname);
        cb(null, file.originalname);
    },
});

const uploadFileMulter = multer({
    storage: storage,
    limits: { fileSize: maxSize },
}).single('file');

export const uploadFile = util.promisify(uploadFileMulter);