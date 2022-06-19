import mongoose from 'mongoose'

require('dotenv').config();

const connectMongo = async ()=> mongoose.connect(process.env.MONGO_URI);



export default connectMongo;
