import { Request, Response } from "express"
import { MovieServices } from "./movie.service"


const createMovie = async(req:Request,res:Response)=>{
  const movieData = req.body;
  const result = await MovieServices.createMovieIntoDB(movieData);

  res.json({
    success:true,
    message:'Movie is created successfully',
    data:result,
  })
}

const getAllMovies = async(req:Request,res:Response)=>{
  try {
    const result = await MovieServices.getAllMovies();

    res.status(200).json({
      success:true,
      message:'Movie is created successfully',
      data:result,
    })
  } catch (error) {
    res.status(500).json({
      success:false,
      message:'Could Not Fetched Successfully',
      error:error
    })
    
  }
}
const getMovieBySlug = async(req:Request,res:Response)=>{
  // const {slug} = req.params
  try {
    const{slug} = req.params
    const result = await MovieServices.getMovieBySlug(slug);

    res.status(200).json({
      success:true,
      message:'Movie fetched successfully',
      data:result,
    })
  } catch (error) {
    res.status(500).json({
      success:false,
      message:'Could Not Fetched Successfully',
      error:error
    })
    
  }
}

export const MovieControllers={
  createMovie,
  getAllMovies,
  getMovieBySlug
}