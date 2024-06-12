import { Model } from "mongoose";


export type TMovie = {
  title: string;
  description: string;
  releaseDate: Date;
  genre: string;
  isDeleted?: boolean;
  viewCount: number;
  totalRating:number;
  // reviews: [TReview];
  slug:string
};

export type TMovieMethods ={
  // findOne: any;
  // updateOne: any;
  createSlug(payLoad:TMovie):string;
}

export type TMovieModel = Model<TMovie,Record<string,unknown>,TMovieMethods>; 