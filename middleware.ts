import { corsMiddleware } from '@/middlewares/cors';
import { assetMiddleware } from '@/middlewares/asset';
import { stackMiddlewares } from '@/middlewares/stack';

export default stackMiddlewares([assetMiddleware, corsMiddleware]);
