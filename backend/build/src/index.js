"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const express = require("express");
const forms_model_1 = require("./model/forms.model");
const mongoose = require("mongoose");
const cors = require("cors");
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
server.use('/board', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let form = new forms_model_1.default();
    let formData = yield forms_model_1.default.find();
    res.send(formData);
}));
server.use('/save', (req, res) => __awaiter(this, void 0, void 0, function* () {
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
    forms_model_1.default.findOneAndUpdate({ uid: Id }, // find a document with that filter
    newForm, // document to insert when nothing was found
    { upsert: true, new: true, runValidators: true }, // options
    function (err, doc) {
        // callback
        if (err) {
            // handle error
            console.log(err);
        }
        else {
            // handle document
            console.log(`update document ${doc} `);
        }
    });
}));
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
//# sourceMappingURL=index.js.map