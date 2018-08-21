import * as bodyParser from 'body-parser';
import * as express from 'express';
import FormModel from './model/forms.model';
import * as mongoose from 'mongoose';
import * as cors from 'cors';

// setup server
const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
server.use(bodyParser.json());

mongoose.connect('mongodb://db:27017/');

const db = mongoose.connection;
const collection = db.collection('Forms');

db.on('error', () => {
  console.log('---Failed to connect to mongoose');
});

db.once('open', () => {
  console.log('+++ Connected to mongoose');
});

server.use('/board', async (req, res) => {
  let form = new FormModel();
  let formData = await FormModel.find();
  res.send(formData);
});

server.use('/save', async (req, res) => {
  /* let newForm = {
    title: 'Form Title',
    numForm: 2,
    activeRow: 1,
    forms: [
      {
        title: 'ช่วงเงินเดือน',
        formId: 'first-form',
        type: 'MultipleChoices',
        radiosTitle: ['1000-2000', '50-6893'],
      },
      {
        title: '',
        formId: 'second form',
        type: 'Checkboxes',
        radiosTitle: ['test loading', 'test2'],
      },
      {
        title: '',
        formId: 'third form',
        type: 'SingleInput',
      },
    ],
  };
  */
  const newForm = req.body.data;
  const Id = req.body.formId;
  console.log(` New form ${JSON.stringify(newForm)}`);
  // const instance = new collection(newForm);
  /*
  try {
    const result = await instance.save();
    console.log(result.id);  // this will be the new created ObjectId
    res.send(`Successful to insert new form id ${result.id}`);
  } catch(err => {
    res.send(err);
  });
  */
  FormModel.findOneAndUpdate(
    { uid: Id }, // find a document with that filter
    newForm, // document to insert when nothing was found
    { upsert: true, new: true, runValidators: true }, // options
    function(err, doc) {
      // callback
      if (err) {
        // handle error
        console.log(err);
      } else {
        // handle document
        console.log(`update document ${doc} `);
      }
    }
  );
});

server.use('/delete', (req, res) => {
   
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
