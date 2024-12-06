import { Router } from 'express';
import newsValidationSchemas from './validation.js';
import { validateRequest } from '../../middleware/validateRequest.js';
import newsController from './controller.js';
import authMiddleWare from '../../middleware/auth.js';
const router = Router();
import auth from '../../middleware/auth.js';
router.get(
  '/latest',
  validateRequest(newsValidationSchemas.latestNews),
  newsController.getLatestNews,
);
router.get(
  '/personalized',
  auth,
  validateRequest(newsValidationSchemas.personalizedNews),
  newsController.getPersonalizedNews,
);

router.get(
  '/headlines',
  authMiddleWare,
  validateRequest(newsValidationSchemas.headlines),
  newsController.getTopHeadlines,
);

export default router;
