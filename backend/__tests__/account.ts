import mockingoose from 'mockingoose';
import model from '../src/model/account.model';

describe('test mongoose User model', () => {
  it('should return the doc with findById', () => {
    const _doc = {
      _id: '507f191e810c19729de860ea',
      userName: 'name',
      password: 'password',
    };

    mockingoose.AccountModel.toReturn(_doc, 'findOne'); // findById is findOne

    return model.findById({ _id: '507f191e810c19729de860ea' }).then((doc) => {
      expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc);
    });
  });
});
