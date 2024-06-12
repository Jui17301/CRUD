import { Request, Response } from "express"
import { ReviewServices } from "./review.service";



const addReview = async(req:Request,res:Response)=>{
  const{slug}=req.params;
  const reviewData = req.body;
  const result = await ReviewServices.addReview(slug,reviewData);

  res.json({
    success:true,
    message:'Review is created successfully',
    data:result,
  })
}

// const getAllReviews = async(req:Request,res:Response)=>{
//   try {
//     const result = await ReviewServices.getAllReviews();

//     res.status(200).json({
//       success:true,
//       message:'Review is created successfully',
//       data:result,
//     })
//   } catch (error) {
//     res.status(500).json({
//       success:false,
//       message:'Could Not Fetched Successfully',
//       error:error
//     })
    
//   }
// }

// const getReviewById = async(req:Request,res:Response)=>{
//   // const {slug} = req.params
//   try {
//     const{slug} = req.params
//     const result = await ReviewServices.getReviewBySlug(slug);

//     res.status(200).json({
//       success:true,
//       message:'Review fetched successfully',
//       data:result,
//     })
//   } catch (error) {
//     res.status(500).json({
//       success:false,
//       message:'Could Not Fetched Successfully',
//       error:error
//     })
    
//   }
// }

// const updateReview = async(req:Request,res:Response)=>{
//   // const {slug} = req.params
//   try {
//     const{slug} = req.params
//     const result = await ReviewServices.updateReview;

//     res.status(200).json({
//       success:true,
//       message:'Review fetched successfully',
//       data:result,
//     })
//   } catch (error) {
//     res.status(500).json({
//       success:false,
//       message:'Could Not Fetched Successfully',
//       error:error
//     })
    
//   }
// }
// const deleteReview = async(req:Request,res:Response)=>{
//   // const {slug} = req.params
//   try {
//     const{slug} = req.params
//     const result = await ReviewServices.deleteReview;

//     res.status(200).json({
//       success:true,
//       message:'Review fetched successfully',
//       data:result,
//     })
//   } catch (error) {
//     res.status(500).json({
//       success:false,
//       message:'Could Not Fetched Successfully',
//       error:error
//     })
    
//   }
// }


export const ReviewControllers={
  addReview,
  // getAllReviews,
  // getReviewById,
  // deleteReview
}