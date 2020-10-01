import React from 'react';
import './styles.css';

const index = () => {
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
				<select name="convert-in"></select>
			</div>
			<button>{}</button>
			<div className="select-block">
				<label htmlFor="for">Para</label>
				<select name="convert-to"></select>
			</div>
			<button>{}</button>
			<div className="result-conversion">
				<h1>
					Resultado da conversão
				</h1>
				<div className="result-conversion-block">
					<p>Conversão de:{}<br></br>
						Valor a converter:{}
					</p>
				</div>
				<div className="result-conversion-block">
					<p>para:{}<br></br>
						 resultado da conversão:{}
					</p>
				</div>
			</div>
		</div>
		</div>
	);
}

export default index;