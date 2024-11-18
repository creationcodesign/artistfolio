import express from 'express';
import { getHeroSection, createOrUpdateHeroSection } from '../controllers/hero.controller.js';

const heroSectionRouter = express.Router();

heroSectionRouter.get('/', getHeroSection);
heroSectionRouter.put('/update', createOrUpdateHeroSection);

export default heroSectionRouter;