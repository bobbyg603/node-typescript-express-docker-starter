import type { Request, Response } from 'express';

export function get(_req: Request, res: Response): void {
    console.log('[home]: Received GET request');
    res.send('👋 Welcome to your new Express + TypeScript server!');
}
