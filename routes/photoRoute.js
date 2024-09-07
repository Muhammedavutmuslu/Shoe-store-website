import express from 'express';
import * as photoController from '../controllers/photoController.js';

const router = express.Router();

router.route('/').post(photoController.createPhoto);
router.route('/').get(photoController.getAllPhotos);
router.route('/:id').put(photoController.updatePhoto);


export default router;