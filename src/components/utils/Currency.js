import React, { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalState';

const Currency = () => {
  const { currency } = useContext(GlobalContext);
  switch (currency) {
    case 'TRY':
      return <span>₺</span>;
    case 'EUR':
      return <span>€</span>;
    case 'USD':
      return <span>$</span>;
    case 'GBP':
      return <span>£</span>;
    default:
      return <span>₺</span>;
  }
};

export default Currency;
