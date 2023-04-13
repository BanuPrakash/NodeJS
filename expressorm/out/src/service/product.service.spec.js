"use strict";
// import  proxyquire from 'proxyquire';
// import { expect } from 'chai';
// // import { makeMockModels } from 'sequelize-test-helpers';
// import { Product } from '../models';
// import  SequelizeMock from 'sequelize-mock';
// // jest.mock('../models/product.model', () => () => {
// // const dbMock = new SequelizeMock();
// //   return dbMock.define('Product',  {
// //     id:1,
// //     name: "iPhone 12",
// //     price : 89000.00,
// //     category: 'mobile'
// //     });
// // });
// describe('UserService', () => {
//     describe('getUserById()', () => {
//         it('should return the user with the given userId', async () => {
//             const id = 1;
//             const product:Partial<Product> = {
//                 id:1,
//                 name: "iPhone 12",
//                 price : 89000.00,
//                 category: 'mobile'
//             };
//             const mockModels = makeMockModels({
//                 Product: {
//                     findByPk: () => {
//                         return product;
//                     },
//                 },
//             });
//             const ProductService = proxyquire('./product.service', {
//                 '../models': mockModels,
//             });
//             console.log(ProductService)
//             const result = await ProductService.getProductById(id);
//             expect(result.name).to.be('iPhone 12');
//         });
//     });
// });
//# sourceMappingURL=product.service.spec.js.map