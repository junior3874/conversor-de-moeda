const apiBase = `https://economia.awesomeapi.com.br/json/all`

const selectedBase = document.querySelector("select[name=typeConversionBase]");
const selectedConvert = document.querySelector("select[name=typeConversionMutacioned]");

const inputBase = document.querySelector("input[name=input1]")
const inputConvert = document.querySelector("input[name=input2]")

function fetcheApi(){
		return fetch(apiBase).then(response => response.json()
 )};

(function setCoins(){
fetcheApi().then(coin => {
		
		const coins = Object.keys({...coin, BRL:{}});
		for(let i = 0; i < coins.length; i++){
				selectedConvert.innerHTML += `<option value="${coins[i]}">${coins[i]}</option>`;
				selectedBase.innerHTML += `<option value="${coins[i]}">${coins[i]}</option>`			
		}
	})
}());

function currencyConverter(){
	fetcheApi().then(coin => {	
		const coins = {...coin, BRL:{"code": "BRL", "codein":"BRL", "high": 1}}
			
		if(selectedBase.value == 'BRL'){
			const value = inputBase.value / coins[selectedConvert.value].high;
			inputConvert.value = value.toLocaleString('pt-br',{style: 'currency', currency: `${selectedConvert.value}`, minimumFractionDigits: 2});
		}else{
			const value = (inputBase.value * coins[selectedBase.value].high) / coins[selectedConvert.value].high;
			inputConvert.value = value.toLocaleString('pt-br',{style: 'currency', currency: `${selectedConvert.value}`, minimumFractionDigits: 2});
		}
	})
}

inputBase.onkeyup = () => {
	if(inputBase.value !== '' && selectedBase.value.value !== '' && selectedConvert.value !==  ''){
		currencyConverter();
	}
	
}
