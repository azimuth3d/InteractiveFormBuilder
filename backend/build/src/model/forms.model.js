"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const FormSchema = new Schema({
    uid: String,
    userId: String,
    title: String,
    numForm: Number,
    forms: [Schema.Types.Mixed],
}, { collection: "Forms" });
const FormModel = mongoose.model('FormModel', FormSchema);
exports.default = FormModel;
//# sourceMappingURL=forms.model.js.map