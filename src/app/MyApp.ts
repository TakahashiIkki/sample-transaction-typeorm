import express from 'express';

export class MyApp {
    readonly env: typeof process.env;

    app: any = null;

    readonly port: number;

    constructor(env: typeof process.env) {
        this.env = env;
        this.port = env.PORT ? Number.parseInt(env.PORT) : 3000;
    }

    async init() {
        await this.buildServer();
    }

    async buildServer() {
        const app: express.Express = express()
        this.app = app;
    }

    start = () => {
        this.app.listen(this.port, (err: any) => {
            if (err) {
                throw new Error('Server connection error.');
            }
            console.log(`Server listening on port: ${this.port}`);
        })
    };

    exitOnError(err: any) {
        console.error(err);
        console.error(err.stack);
        process.exit(1);
    }
}
