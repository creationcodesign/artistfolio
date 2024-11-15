import express from 'express';
import { getContactSection, createOrUpdateContactSection } from '../controllers/contact.controller.js';

const contactSectionRouter = express.Router();

contactSectionRouter.get('/', getContactSection);
contactSectionRouter.put('/update', createOrUpdateContactSection);

export default contactSectionRouter;