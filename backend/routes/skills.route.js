import express from 'express';
import { getSkillsSection, createOrUpdateSkillsSection } from '../controllers/skills.controller.js';

const skillsSectionRouter = express.Router();

skillsSectionRouter.get('/', getSkillsSection);
skillsSectionRouter.put('/update', createOrUpdateSkillsSection);

export default skillsSectionRouter;