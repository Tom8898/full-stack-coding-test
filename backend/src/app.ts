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

        //
        this.express.get('/user/:id', (request: Request, response: Response) => {
            try {
                const id = request.params.id?.trim();
                if (!id) {
                    return response.status(400).send("invalid parameter");
                }

                const user = this.userController.getUserById(id);
                if (user) {
                    return response.status(200).send(user);
                } else {
                    return response.status(404).send("not found");
                }
            } catch (e) {
                return response.status(500).send();
            }
        });
    }
}
