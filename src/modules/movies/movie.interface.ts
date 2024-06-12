import { Model } from "mongoose";


export type TMovie = {
  title: string;
  description: string;
  releaseDate: Date;
  genre: string;
  isDeleted?: boolean;
  viewCount: number;
  totalRating:number;
  slug:string
};
// Put all user instance methods in this interface:
export type TMovieMethods ={
  createSlug(payLoad:TMovie):string;
}

export type TMovieModel = Model<TMovie,Record<string,unknown>,TMovieMethods>; 