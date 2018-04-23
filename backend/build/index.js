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
const express = require("express");
const model_1 = require("./model");
const mongoose = require("mongoose");
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
server.use('/forms', (req, res) => __awaiter(this, void 0, void 0, function* () {
    let form = new model_1.default();
    let formData = yield model_1.default.find();
    res.send(formData);
}));
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
    let form = new model_1.default(newForm);
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
//# sourceMappingURL=index.js.map