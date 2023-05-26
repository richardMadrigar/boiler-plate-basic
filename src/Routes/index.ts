import { Router } from 'express';

import { verifyToken } from '@shared/middlewares/verifyToken';

import { routerQueriesIndex } from './Queries';

const routerIndex = Router();
const routerTeste = Router();

routerTeste.get('/', (req, res) => res.send('Hello World!'));
routerIndex.use(routerTeste);

routerIndex.use(verifyToken);

routerIndex.use(routerQueriesIndex);

export { routerIndex };
