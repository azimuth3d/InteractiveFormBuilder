"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mockingoose_1 = require("mockingoose");
const account_model_1 = require("../src/model/account.model");
describe('test mongoose User model', () => {
    it('should return the doc with findById', () => {
        const _doc = {
            _id: '507f191e810c19729de860ea',
            userName: 'name',
            password: 'password',
        };
        mockingoose_1.default.AccountModel.toReturn(_doc, 'findOne'); // findById is findOne
        return account_model_1.default.findById({ _id: '507f191e810c19729de860ea' }).then((doc) => {
            expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc);
        });
    });
});
//# sourceMappingURL=account.js.map