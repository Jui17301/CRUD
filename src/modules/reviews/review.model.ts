import { Schema, model } from "mongoose";
import { TReview } from "./review.interface";


const reviewSchema = new Schema<TReview>({
  movie:{
      type:Schema.Types.ObjectId,
      ref:"Movie",
      required:true,
  },
  email:{
    type:String,
    require:true
  },
  rating:{
    type:Number,
    require:true
  },
  comment:{
    type:String,
    require:true
  },
})

export const Review = model<TReview>('Review',reviewSchema)