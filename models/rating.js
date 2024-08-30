import { Schema, model, models } from 'mongoose';

const RatingSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required!'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],

  },
  image: {
    type: String,
  },
  message:{
    type:String,
    required:true
  },
    rating:{
        type:Number,
    
  }
});

const Rating = models.Rating || model("Rating", RatingSchema);

export default Rating;