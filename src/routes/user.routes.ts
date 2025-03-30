import express from 'express';
import { getItems, placeOrder, registerUser } from '../controllers/user.controller';

const router = express.Router();

router.get('/items', getItems);
router.post('/register', registerUser);
router.post('/order', placeOrder);

export default router;