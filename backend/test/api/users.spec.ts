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

describe('/user/:id', ()=> {
    it('should return a user based on a valid id parameter', async () => {
        const response = await request(app).get('/user/99a8024b-f212-49ce-bc54-ee310c0e0007');

        expect(response.status).toEqual(200);
        expect(response.body).toHaveProperty('id', '99a8024b-f212-49ce-bc54-ee310c0e0007');
    });

    it('should return 400 for a invalid parameter', async () => {
        const response = await request(app).get('/user/%20');

        expect(response.status).toEqual(400);
    });

    it('should return 404 if user is not found', async () => {
        const response = await request(app).get('/user/1');

        expect(response.status).toEqual(404);
    });



});
