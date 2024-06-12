// logic

import { TMovie } from "./movie.interface";
import  {Movie}  from "./movie.model";
import { compareAsc, format } from "date-fns";
import slugify from "slugify";

const createMovieIntoDB = async(payLoad:TMovie)=>{
  // const slug
   // slug - title,releaseDate
  //  const date = format(payLoad.releaseDate,"dd-MM-yyyy");
  //  creating slug
  // const slug =    slugify(`${payLoad.title}-${date}`,
  //   {lower:true}
  // )
  // console.log(slug,"slug");
  const result = new Movie(payLoad);
  const slug = result.createSlug(payLoad);
  result.slug = slug 
  // const slug = result.createSlug(payLoad);
  // result.slug =slug;  
  await result.save();//database save
  return result;
}
const getAllMovies = async()=>{
  const result = await Movie.find();
  return result;
}
const getMovieBySlug = async(slug:string)=>{
 
  const result = await Movie.findOne({slug:slug});
  return result;
}

export const MovieServices={
  createMovieIntoDB,
  getAllMovies,
  getMovieBySlug
}