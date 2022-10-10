import type { Request, Response } from 'express';
import { mock } from 'jest-mock-extended';
import { get } from './home.controller';

describe('HomeController', () => {
    describe('get', () => {
        it('should call send with welcome message', () => {
            const fakeRequest = mock<Request>();
            const fakeResponse = mock<Response>();
    
            get(fakeRequest, fakeResponse);
    
            expect(fakeResponse.send).toHaveBeenCalledWith(
                expect.stringMatching(/Welcome/)
            );
        });
    });
});