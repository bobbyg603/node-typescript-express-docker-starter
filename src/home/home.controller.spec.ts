import { controller } from './home.controller';

describe('HomeController', () => {
    it('should call send with welcome message', () => {
        const fakeRequest = {} as any;
        const fakeResponse = { send: jest.fn() } as any;

        controller(fakeRequest, fakeResponse);

        expect(fakeResponse.send).toHaveBeenCalledWith(
            expect.stringMatching(/Welcome/)
        );
    });
});