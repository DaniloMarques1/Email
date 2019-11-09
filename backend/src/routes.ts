import { Router } from 'express';
import EmailController from './controller/Email';

const routes = Router();

routes.post('/email', EmailController.send);

export default routes;