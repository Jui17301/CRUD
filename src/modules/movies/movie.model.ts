import { Schema, model } from "mongoose";
import { TMovie, TMovieMethods, TMovieModel } from "./movie.interface";
import { format } from "date-fns";
import slugify from "slugify";


const movieSchema = new Schema<TMovie,TMovieModel,TMovieMethods>({
  title:{
    type:String,
    required:[true,"Title is required"],
  },
  description:{
    type:String,
    required:[true,"Description is required"],
  },
  releaseDate:{
    type:Date,
  },
  genre:{
    type:String,
    required:[true,"Genre is required"],
  },
  slug:{
    type:String,
  },
  isDeleted:{
    type:Boolean,
    default:false,
  },
  viewCount:{
    type:Number,
    default:0
  },
  totalRating:{
    type:Number,
    default:0
  }
})

// For slug using prehook middleware 
// movieSchema.pre('save',async function (next){
//   const date = format(this.releaseDate,"dd-MM-yyyy");
//   //  creating slug

//   this.slug =    slugify(`${this.title}-${date}`,
//     {lower:true}
//   )
//   next;
// })

movieSchema.method("createSlug",function createSlug(payLoad:TMovie){

    const date = format(payLoad.releaseDate,"dd-MM-yyyy");
  //  creating slug
const slug =    slugify(`${payLoad.title}-${date}`,
    {lower:true}
  )
  return slug
})
export const Movie = model<TMovie,TMovieModel>('Movie',movieSchema)













