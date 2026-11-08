import { Router } from 'express';
import { getCategories, createCategories } from '../controllers/category.controller.js';

const router = Router();
router.route('/create').post(createCategories);
router.route('/getCategories').get(getCategories);

// router.route('/update/:id').patch(updateCategories);
// router.route('/delete/:id').delete(deleteCategories);

export default router;
