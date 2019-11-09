import { Request, Response } from 'express';

class EmailController {
    public static send(req: Request, res: Response): Response {
        const { from, to, subject, text } = req.body;
    }
}