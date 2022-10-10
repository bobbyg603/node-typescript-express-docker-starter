import { getConfig } from '../../../config';

const port = getConfig().port;
const url = `http://localhost:${port}`;

describe('Home', () => {
    it('should return welcome response', async () => {
        const response = await fetch(url);
        const text = await response.text();

        expect(response.status).toEqual(200);
        expect(text).toEqual(
            '👋 Welcome to your new Express + TypeScript server!'
        );
    });
});
