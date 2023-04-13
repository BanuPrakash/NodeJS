import supertest from 'supertest';
import app from '../src/api/app';
import {expect} from 'chai';


describe('GET /products endpoint', () => {
    it("Get product endpoint sucess return response", () => {
        return supertest(app)
            .get('/products')
            .then(response => {
                expect(response.statusCode).to.equal(200);
                expect(response.body)
                .to.be.an.instanceof(Array)
                .and.to.has.length.greaterThan(1);

                let products  = response.body;
                expect(products[0]).that.includes.all.keys(['id','name','price'])
            });
    });

    it("get /product/:id endpoint" , () => {
        return supertest(app)
        .get('/products/1')
        .then(response => {
            expect(response.statusCode).to.equal(200);
            expect(response.body).that.includes.all.keys(['id','name','price'])
        })
    })
});



