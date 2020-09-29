import express from 'express';
import {Request, Response} from 'express';



const routes = express.Router();

routes.get('/', (req : Request, res : Response) => {
    return res.render("../public/index.html");
});

export default routes;