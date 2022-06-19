import {Schema, model, models} from 'mongoose';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const testSchema = new Schema({
    name: String,
    email: {
        type:String,
        required:true,
        unique:true,
    },
});

const Test = mongoose.model('Test', testSchema)

export default Test;