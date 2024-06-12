
import express, { Request, Response } from 'express'
import { Movie } from './movie.model';
import { MovieControllers } from './movie.controller';
import { ReviewControllers } from '../reviews/review.controller';

const router = express.Router()

router.post('/',MovieControllers.createMovie)
router.get('/',MovieControllers.getAllMovies)
router.get('/:slug',MovieControllers.getMovieBySlug)

router.post('/:slug/review',ReviewControllers.addReview);
// router.get('/:slug/review',ReviewControllers.getAllReviews);
// router.put('/:slug/review',ReviewControllers.getReviewById);
// router.delete('/:slug/review',ReviewControllers.deleteReview);
// router.get('/:movieId',MovieControllers.getMovieById)


// router.post('/',
// async(req:Request,res:Response)=>{
  // const result = await Movie.create(req.body);
//   res.json({
//     success:true,
//     message:'Movie is created successfully',
//     data:result,
//   })
// }
// )

export const MovieRoutes = router;