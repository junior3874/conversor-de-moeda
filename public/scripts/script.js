const usedApi = `https://economia.awesomeapi.com.br/json/all`

const selectedBase = document.querySelector("select[name=typeConversionBase]");
const selectedConvert = document.querySelector("select[name=typeConversionMutacioned]");

function apiCoins(urlApi){
    return fetch(urlApi).then(response => response.json()
 )};

function meupau(){
    apiCoins(usedApi).then(coin => {
        const coins = Object.keys(coin);
        console.log(coin);
        for(let i = 0; i < coins.length; i++){
            selectedConvert.innerHTML += `<option value="${coins[i]}">${coins[i]}</option>`
            selectedBase.innerHTML += `<option value="${coins[i]}">${coins[i]}</option>`
            
        }
    })
};
meupau();

const input1 =  document.querySelector("input[name=input1]")
const input2 =  document.querySelector("input[name=input2]")



let inputAtual = "";
selectedBase.onchange = () =>{
    inputAtual = event.target.value;
    
    converterValue(usedApi);

};
let inputAtual2 = "";
selectedConvert.onchange = (event) =>{
    inputAtual2 = event.target.value;
    console.log(inputAtual2)
    
};

input1.onkeyup =  () =>{
    console.log(inputAtual);
    console.log(inputAtual2);
    if(inputAtual !== "" && inputAtual2 !== "" ){
        converterValue(usedApi);
    }
    
};
let padrao = 0;

class identifyTypeConversion {
 

    conversion = (teste) => {
        padrao = 2
        if(inputAtual == 'BRL'){
            if(inputAtual2 =='BTC'){
                padrao = 5
                const converted = input1.value / teste[inputAtual2].high;
                input2.value = converted.toFixed(padrao);
            }else{
                const converted = input1.value * teste[inputAtual2].high;
                input2.value = converted.toFixed(padrao);
            }
            
        }else if (inputAtual2 == 'BRL') {
            const converted = (input1.value / teste[inputAtual].high);
            input2.value = converted.toFixed(padrao);
        }else {
            if(inputAtual == 'BTC' || inputAtual == 'BTC'){
                padrao = 5;
            }
            const converted = ((input1.value / teste[inputAtual2].high) * teste[inputAtual].high);
            input2.value = converted.toFixed(padrao);
            
            
        } 
    } 
}
const objectControleTypeConversion = new identifyTypeConversion();

function converterValue(urlApi){
    
        apiCoins(urlApi).then(teste => {
            if(inputAtual !== ""){
                objectControleTypeConversion.conversion(teste);
            }
            else {
                return null;
            }
      });
    
}


