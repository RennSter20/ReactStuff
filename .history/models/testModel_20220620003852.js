import {Schema, model, models} from 'mongoose';

var Test;
const testSchema = new Schema({
    name: String,
    email: {
        type:String,
        required:true,
        unique:true,
    },
});

 Test = models.Test || model('Test', testSchema)

export default Test;