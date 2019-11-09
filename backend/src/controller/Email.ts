import { Request, Response } from 'express';
import SenderInterface from '../interfaces/Sender';
import ReceiverInterface from '../interfaces/Receiver';
import nodemailer from 'nodemailer';

export default class EmailController {
    /**
     * Receberá os dados no request e enviará um email
     * @param req - request
     * @param req/from - Quem esta mandando o email
     * @param req/pass - senha do email
     * @param req/to - para quem vai enviar o email
     * @param req/subject - Assunto
     * @param req/text - conteudo do email
     * @param res - Response
     * 
     * 
     */
    public static async send(req: Request, res: Response): Promise<Response> {
        const { from, pass, to, subject, text } = req.body;
        
        const sender: SenderInterface = {
            user: from,
            pass: pass
        };

        const receiver: ReceiverInterface = {
            from,
            to,
            subject,
            text
        };
        const email = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: sender.user,
                pass: sender.pass
            }
        });

        try {
            await email.sendMail({
                from: receiver.from,
                to: receiver.to,
                subject: receiver.subject,
                text: receiver.text
            });
            return res.json({message: "email sent"})
        }catch(e) {
            return res.status(400).json({error: `Error sendind email: ${e.message}`});
        }

        
    }
}