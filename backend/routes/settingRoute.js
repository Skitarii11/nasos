import express from "express";
import { getSettings, updateSettings, upload } from '../controllers/settingController.js';

const router = express.Router();

router.get('/settings', getSettings);
router.put('/settings', upload, updateSettings);

export default router;