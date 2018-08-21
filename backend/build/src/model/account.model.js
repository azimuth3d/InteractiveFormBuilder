"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AccountSchema = new Schema({
    userName: String,
    password: String,
}, {
    collection: 'Account',
});
const AccountModel = mongoose.model('AccountModel', AccountSchema);
exports.default = AccountModel;
//# sourceMappingURL=account.model.js.map