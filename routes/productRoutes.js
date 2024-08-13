import express from 'express';
import formidable from 'express-formidable';
import {
    createProductController,
    deleteProductController,
    getProductController,
    getSingleProductController,
    productPhotoController, updateProductController
} from '../controllers/productController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
const router = express.Router()

router.post('/create-product',
    requireSignIn,
    isAdmin,
    formidable(),
    createProductController);
//routes
router.put(
    "/update-product/:pid",
    requireSignIn,
    isAdmin,
    formidable(),
    updateProductController
);


router.get('/get-product', getProductController)
router.get("/get-product/:slug", getSingleProductController);
router.get("/product-photo/:pid", productPhotoController);
router.delete("/delete-product/:pid", deleteProductController);


export default router;
