import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const AccountSchema = new Schema(
  {
    userName: String,
    password: String,
  },
  {
    collection: 'Account',
  }
);

const AccountModel = mongoose.model('AccountModel', AccountSchema);
export default AccountModel;
