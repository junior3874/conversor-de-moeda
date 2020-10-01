import express from 'express';
import {Request, Response} from 'express';

import CoinControllers from './controllers/CoinControllers';

const CoinController = new CoinControllers();


const routes = express.Router();

routes.get('/currency', CoinController.index);

export default routes;