import axios from 'axios';
import {Response, Request} from 'express';

const api = axios.create({
	baseURL: 'https://economia.awesomeapi.com.br/json/all'
})


export default class CoinControllers{
	async index(req : Request, res: Response){
		api.get('').then(coins => {			
		 	const coins2 = coins.data;
		 	 return res.json({...coins2, BRL:{"code": "BRL", "codein":"BRL", "high": 1}});		
		})
	}
};
