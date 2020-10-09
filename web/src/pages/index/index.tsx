import React, { useState, useEffect, SetStateAction, useRef } from 'react';
import './styles.css';
import api from '../../services/api';

interface CoinProps {
	name: string;
	high: number;
	code: string;
	codein: string;
}
function Index(){

	const refSelectBase = useRef<HTMLSelectElement>(null);
	const refSelectToConvert = useRef<HTMLSelectElement>(null);

	const[ selectBase, setSelectedBase] = useState(String);
	const [selectToConvert, setToConvertBase] = useState(``);

	const [coins, setCoins] = useState([]);

	const [inputBase, setInputBase] = useState(Number); 
	const [valorConvertido, setValorConvertiodo] = useState(``);

	function handleConvertionCurrency(){
		setSelectedBase(refSelectBase.current);
	}
		useEffect(() => {
			api.get('currency').then((res)=> {
				console.log(res.data)
				setCoins(res.data);	
			})
		}, []);
		
	return(
		<div className="content">
		<header>
			<h1>
				Conversor de Moedas
			</h1>
		</header>
		<div className="convert-area">
			<div className="input-block">
				<label htmlFor="valor">Valor</label>
				<input type="number"/>
			</div>
			<div className="select-block">
				<label htmlFor="in">Converter de</label>
				<select defaultValue="dad" ref={refSelectBase }>
					{coins.map((coin : CoinProps)=> {
						return <option value={coin.code}>{coin.name}({coin.code})</option>
					})}
				</select>
			</div>
			<button>{}</button>
			<div className="select-block">
				<label htmlFor="for">Para</label>
				<select name="convert-to" ref={refSelectToConvert}>
				{coins.map((coin : CoinProps)=> {
						return <option value={coin.code}>{coin.name}({coin.code})</option>
					})}
				</select>
			</div>
			<button type="button" onClick={handleConvertionCurrency}>testou</button>
			<div className="result-conversion">
				<h1>
					Resultado da conversão
				</h1>
				<div className="result-conversion-block">
					<p>Conversão de:{selectBase}<br></br>
						Valor a converter:{inputBase}
					</p>
				</div>
				<div className="result-conversion-block">
					<p>para:{}<br></br>
						 resultado da conversão:{valorConvertido}
				</p>
				</div>
			</div>
		</div>
		</div>
	);
}

export default Index;