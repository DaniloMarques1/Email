import express from 'express';
import routes from './routes';

class App {
    private app: express.Application;

    constructor() {
        this.app = express();
        this.middleware();
    }

    public getApplication() {
        return this.app;
    }

    private middleware() {
        this.app.use(express.json());
        this.app.use(routes);
    }
}

export default new App().getApplication();