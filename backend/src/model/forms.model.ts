import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FormSchema = new Schema({
  uid: String,
  userId: String,
  title: String,
  numForm: Number,
  forms: [Schema.Types.Mixed],
  
},{collection: "Forms"});

const FormModel = mongoose.model('FormModel', FormSchema);

export default FormModel;
