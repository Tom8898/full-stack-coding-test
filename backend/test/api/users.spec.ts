import { Express } from 'express';
import request from 'supertest';
import { App } from '../../src/app';
import { User } from '../../src/model/user';

let app: Express;

beforeAll(() => {
    app = new App().express;
});

describe('/users', () => {
    it('should return an array of Users', async () => {
        const response = await request(app).get('/users');

        expect(response.status).toEqual(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect((response.body[0] as User).id).toBeDefined();
    });
});
