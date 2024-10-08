import express from 'express';
import * as pageController from '../controllers/pageController.js';

const router = express.Router();

router.route('/').get(pageController.getIndexPage);
router.route('/about').get(pageController.getAboutPage);
router.route('/register').get(pageController.getRegisterPage);
router.route('/login').get(pageController.getLoginPage);
router.route('/contact').get(pageController.getContactPage);
router.route('/blogs').get(pageController.getBlogsPage);
router.route('/review').post(pageController.getReviewPage);
router.route('/contact').post(pageController.sendMail);

export default router;