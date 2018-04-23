import bodyParser from 'body-parser';
import * as express from 'express';
import formModel from './model';
import * as mongoose from 'mongoose';

// setup server
const server = express();

mongoose.connect('mongodb://db:27017/');

const db = mongoose.connection;

db.on('error', () => {
  console.log('---Failed to connect to mongoose');
});

db.once('open', () => {
  console.log('+++ Connected to mongoose');
});

server.use('/forms', async (req, res) => {
  let form = new formModel();
  let formData = await formModel.find();
  res.send(formData);
});

server.use('/save', (req, res) => {
  let newForm = {
    title: 'Form Title',
    numForm: 1,
    activeRow: 1,
    forms: [
      {
        title: '',
        formId: 'first-form',
        type: 'MultipleChoices',
        radiosTitle: ['1005400-2000', '50-6893'],
      },
      {
        title: '',
        formId: 'second form',
        type: 'Checkboxes',
        radiosTitle: ['35000-15000', 'test2'],
      },
      {
        title: '',
        formId: 'third form',
        type: 'SingleInput',
      },
    ],
  };

  let form = new formModel(newForm);
  form.save();
  res.send('save data to database');
});

server.use('/signin', (req, res) => {
  res.send(req.bodyParser());
});

server.use('/', (req, res) => {
  res.send('Home page');
});

server.listen(5000, () => {
  console.log('Listen for port 5000');
});

// export default setupGraphQLServer;
