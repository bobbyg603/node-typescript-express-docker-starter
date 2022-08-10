import type { Request, Response } from 'express';

export function controller(_req: Request, res: Response): void {
    console.log('[home]: Received request');
    res.send('👋 Welcome to your new Express + TypeScript server!');
}
