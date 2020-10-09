import axios from 'axios';
import {Response, Request} from 'express';

const api = axios.create({
	baseURL: 'https://economia.awesomeapi.com.br/json/all'
})


export default class CoinControllers{
	async index(req : Request, res: Response){
		api.get('').then(coin => {				
			 const coins = {...coin.data, BRL:{"code": "BRL", "codein":"BRL", "high": 1, "name": "Real"}}
			 const array = Object.values(coins)
			 console.log(array);
		 	 return res.json(array);		
		})
	}
};
