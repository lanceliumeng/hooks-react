import React, { useState, useEffect } from "react";
// import DisplayData from "./DisplayData";
import CurrencySelector from "./CurrencySelector";
import { AppContainer, Heading } from "./StyledComponents";
import DisplayDataChart from "./DisplayDataChart";

function App() {
  //define state using hooks at top of the function, this = constructor in class components
  const initialCurrency = "AUD";
  // const initialBitcoin = {
  //   "2022-04-18": 52968.1959,
  //   "2022-04-19": 55145.4016,
  //   "2022-04-20": 55871.48,
  //   "2022-04-21": 56232.0665,
  // };
  const [currency, setCurrency] = useState(initialCurrency);
  const [bitcoinData, setBitcoinData] = useState({});
  const url = "https://api.coindesk.com/v1/bpi/historical/close.json?currency=";

  function currencyHandler(event) {
    setCurrency(event.target.value);
  }

  useEffect(() => {
    console.log("Hi, I'm using useEffect");
    // setCurrency("USD");
    fetch(`${url}${currency}`)
      .then((response) => response.json())
      .then((data) => setBitcoinData(data.bpi))
      .catch((err) => console.error(err));
    // setBitcoinData(initialBitcoin);
  }, [currency]);

  return (
    <AppContainer>
      <Heading>Bitcoin index</Heading>
      <CurrencySelector currency={currency} currencyHandler={currencyHandler} />
      {/* <DisplayData bitcoinData={bitcoinData} /> */}
      <DisplayDataChart bitcoinData={bitcoinData} />
    </AppContainer>
  );
}

export default App;
