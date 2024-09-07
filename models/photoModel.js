import mongoose from 'mongoose';

const { Schema } = mongoose;

const photoSchema = new Schema({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: String,
      required: true,
      
    },
    count: {
        type: String,
        required: true,
      },
    url: {
        type: String,
        required: true,
      },
   
    });

    const Photo = mongoose.model('Photo', photoSchema);

    export default Photo;