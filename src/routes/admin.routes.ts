import express from 'express';
import { addItem, getItems, updateItem, deleteItem } from '../controllers/admin.controller';

const router = express.Router();

router.post('/add-item', addItem);
router.get('/items', getItems);
router.put('/update-item/:id', updateItem);
router.delete('/delete-item/:id', deleteItem);

export default router;