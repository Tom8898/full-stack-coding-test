import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import { UserController } from './controller/user-controller';
import { User } from './model/user';


export class App {
    public readonly express: Express;

    private readonly userController: UserController;

    constructor() {
        this.userController = new UserController();

        this.express = express();
        this.express.use(cors());
        this.addRoutes();
    }

    private addRoutes(): void {
        this.express.get('/users', (_request: Request, response: Response) => {
            try {
                const users: User[] = this.userController.getUsers();
                response.status(200).send(users);
            } catch (e) {
                response.status(500).send();
            }
        });
    }
}
