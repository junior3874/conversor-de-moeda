import React, { useState, useEffect } from "react";
import "./styles.css";
import api from "../../services/api";

function Index() {
  const [selectBase, setSelectedBase] = useState(Number);
  const [selectToConvert, setSelectToConvert] = useState(Number);
  const [coins, setCoins] = useState([]);
  const [inputBase, setInputBase] = useState(Number);
  const [valorConvertido, setValorConvertido] = useState(String);

  function currencyConverter(selectOne, selectTwo, inputValue) {
    const fractionDigits = 5;

    if (coins[selectOne].code == "BRL") {
      const value = inputValue / coins[selectTwo].high;
      console.log("if: ", +value);
      setValorConvertido(
        value.toLocaleString("pt-br", {
          style: "currency",
          currency: `${coins[selectTwo].code}`,
          minimumFractionDigits: fractionDigits,
        })
      );
    } else {
      const value =
        (inputValue * coins[selectOne].high) / coins[selectTwo].high;
      console.log(selectOne + "::" + selectTwo);
      console.log("else: ", +value);
      setValorConvertido(
        value.toLocaleString("pt-br", {
          style: "currency",
          currency: `${coins[selectTwo].code}`,
          minimumFractionDigits: fractionDigits,
        })
      );
    }
  }

  function handleConvertionCurrency() {
    currencyConverter(selectBase, selectToConvert, inputBase);
  }

  useEffect(() => {
    api.get("currency").then((res) => {
      console.log(res.data);
      setCoins(res.data);
    });
  }, []);

  return (
    <div className="content">
      <header>
        <h1>Conversor de Moedas</h1>
      </header>
      <div className="convert-area">
        <div className="input-block">
          <label htmlFor="valor">Valor</label>
          <input
            type="number"
            placeholder="digite o valor a ser convertido"
            onChange={(e) => {
              setInputBase(e.target.value);
            }}
          />
        </div>
        <div className="select-block">
          <label htmlFor="in">Converter de</label>
          <select
            defaultValue="dad"
            onChange={(e) => {
              setSelectedBase(e.target.selectedIndex);
            }}
          >
            {coins.map((coin) => {
              return (
                <option value={coin.code}>
                  {coin.name}({coin.code})
                </option>
              );
            })}
          </select>
        </div>

        <div className="select-block">
          <label htmlFor="for">Para</label>
          <select
            name="convert-to"
            onChange={(e) => {
              setSelectToConvert(e.target.selectedIndex);
            }}
          >
            {coins.map((coin) => {
              return (
                <option value={coin.code}>
                  {coin.name}({coin.code})
                </option>
              );
            })}
          </select>
        </div>
        <button
          type="button"
          onClick={() => {
            if (selectBase == "" || selectToConvert == "" || inputBase == 0) {
              return window.alert(
                "Verifique se você selecionou as duas moedas ou inseriu o valor a ser convertido"
              );
            } else {
              handleConvertionCurrency();
            }
          }}
        >
          Converter
        </button>
        <div className="result-conversion">
          <h1>Resultado da conversão</h1>
          <div className="result-conversion-block">
            <p>
              Conversão de: {selectBase}
              <br></br>
              Valor a converter: {inputBase}
            </p>
          </div>
          <div className="result-conversion-block">
            <p>
              para: {selectToConvert}
              <br></br>
              resultado da conversão:{valorConvertido}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
