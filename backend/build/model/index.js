"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const FormSchema = new Schema({
    uid: String,
    title: String,
    numForm: Number,
    forms: [Schema.Types.Mixed],
});
exports.default = mongoose.model('FormModel', FormSchema);
//# sourceMappingURL=index.js.map