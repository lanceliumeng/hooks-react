import React from "react";
import currencies from "../data/supported-currencies.json";
import { SelectHeading, SelectContainer } from "./StyledComponents";

const CurrencySelector = ({ currency, currencyHandler }) => {
  //pass below to App component,and then use props from App component
  //define state using hooks at top of the function, this = constructor in class components
  //   const initialCurrency = "AUD";
  //   const [currency, setCurrency] = useState(initialCurrency);

  //   function currencyHandler(event) {
  //     setCurrency(event.target.value);
  //   }

  return (
    <SelectContainer>
      <SelectHeading> Select your currency:</SelectHeading>
      <select value={currency} onChange={currencyHandler}>
        {currencies.map((obj) => (
          <option key={obj.currency} value={obj.currency}>
            {obj.country}
          </option>
        ))}
      </select>
    </SelectContainer>
  );
};

export default CurrencySelector;
