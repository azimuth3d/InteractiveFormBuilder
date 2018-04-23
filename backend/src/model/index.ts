import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FormSchema = new Schema({
  uid: String,
  title: String,
  numForm: Number,
  forms: [Schema.Types.Mixed],
});

const AccountSchema = new Schema({
  uid: String,
  userName: String,
  password: String,
});

const accountModel = mongoose.model('AccountModel', AccountSchema);
const formModel = mongoose.model('FormModel', FormSchema);

export { formModel, accountModel };
