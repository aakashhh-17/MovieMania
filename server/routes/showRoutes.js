import express from 'express'
import { addShow, getNowPlayingMovies } from '../controllers/showController.js';
import { protectAdmin } from '../middleware/auth.js';

const router = express.Router();

router.get('/now-playing', protectAdmin, getNowPlayingMovies);
router.post('/add', protectAdmin,  addShow);

export default router;
