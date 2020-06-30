import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalState';

const CurrencyController = () => {
  const { currency, changeCurrency } = useContext(GlobalContext);
  console.log(currency);
  const handleChange = (e) => {
    changeCurrency(e.target.value);
  };
  return (
    <select value={currency} onChange={handleChange}>
      <option value="TRY">TRY</option>
      <option value="EUR">EUR</option>
      <option value="USD">USD</option>
      <option value="GBP">GBP</option>
    </select>
  );
};

export default CurrencyController;
