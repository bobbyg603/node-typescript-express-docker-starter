import { readFile, unlink } from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';
import { getConfig } from '../../../config';
import { join } from 'path';

const config = getConfig();
const port = config.port;
const baseUrl = `http://localhost:${port}`;

describe('Files', () => {
    let fileName: string;
    let fileContents: string;
    let uploadFilePath: string;

    beforeEach(() => {
        const uuid = uuidv4();
        fileName = `${uuid}.txt`;
        fileContents = uuid;
        uploadFilePath = join(config.fileUploadPath, fileName);
    });

    it('should upload a file and return 200', async () => {
        const formData = new FormData();
        formData.append('file', new Blob([fileContents]), fileName);
        const init: RequestInit = {
            method: 'POST',
            body: formData
        };

        const response = await fetch(new URL('/files', baseUrl).href, init);
        const uploadContents = await readFile(uploadFilePath, { encoding: 'utf8' });

        expect(response.status).toEqual(200);
        expect(uploadContents).toEqual(fileContents);
    });

    afterEach(async () => unlink(uploadFilePath));
});
