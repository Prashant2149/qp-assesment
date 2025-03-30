import adminRoutes from './admin.routes';
import userRoutes from './user.routes';
import { Router } from 'express';

const router = Router();

router.use('/admin', adminRoutes);
router.use('/user', userRoutes);

export default router; // ✅ Ensure something is exported