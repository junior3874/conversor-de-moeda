const apiBase = `https://economia.awesomeapi.com.br/json/all`

const selectedBase = document.querySelector("select[name=typeConversionBase]");
const selectedConvert = document.querySelector("select[name=typeConversionMutacioned]");

const inputBase =  document.querySelector("input[name=input1]")
const inputConvert =  document.querySelector("input[name=input2]")

function fetcheApi(){
		return fetch(apiBase).then(response => response.json()
 )};

function setCoins(){
		fetcheApi().then(coin => {
				const coins = Object.keys(coin);
				for(let i = 0; i < coins.length; i++){
						selectedConvert.innerHTML += `<option value="${coins[i]}">${coins[i]}</option>`;
						selectedBase.innerHTML += `<option value="${coins[i]}">${coins[i]}</option>`		;				
				}
		})
};
setCoins();


// const inputAtual = "1";

// selectedBase.onchange = () =>{
// 		inputBase = event.target.value;
// 		converterValue(apiBase);

// };
// const inputAtual2 = "2";

// selectedConvert.onchange = (event) =>{
// 		inputConvert = event.target.value;
// 		console.log(inputAtual2)
// };

// inputBase.onkeyup =  () =>{
// 		if(inputBase !== "" && inputConvert !== "" ){
// 				converterValue(apiBase);
// 		}
// };

// let padrao = 0;
// function converterValue(api : string){
// 				fetcheApi(api).then(objectApi => {		
// 			});
// 		};




