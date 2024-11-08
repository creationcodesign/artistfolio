import express from 'express';
import { getAboutSection, createOrUpdateAboutSection } from '../controllers/about.controller.js';

const aboutSectionRouter = express.Router();

aboutSectionRouter.get('/', getAboutSection);
aboutSectionRouter.put('/update', createOrUpdateAboutSection);

export default aboutSectionRouter;