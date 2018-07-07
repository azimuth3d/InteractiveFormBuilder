import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FormSchema = new Schema({
  uid: String,
  userId: String,
  title: String,
  numForm: Number,
  forms: [Schema.Types.Mixed],
  
},{collection: "Forms"});

const AccountSchema = new Schema({
  uid: String,
  userName: String,
  password: String,
}, { 
  collection: "Accounts"
});


const AccountModel = mongoose.model('AccountModel', AccountSchema);
const FormModel = mongoose.model('FormModel', FormSchema);

export default FormModel;
