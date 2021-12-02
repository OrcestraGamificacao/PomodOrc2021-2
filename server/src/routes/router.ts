import { Router } from 'express';
const taskListRoute = require('./taskListRoute')

const router = Router();

//Rotas taskList
router.use('/taskList', taskListRoute)

export default router;