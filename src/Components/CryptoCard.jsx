import React from 'react';

const CryptoCard = ({ crypto }) => {
  return (
    <div className="crypto-card">
      <h2>{crypto.name}</h2>
      <p>Symbol: {crypto.symbol.toUpperCase()}</p>
      <p>Price: ${parseFloat(crypto.price).toFixed(2)}</p>
      <p>Market Cap: ${parseFloat(crypto.marketCap).toLocaleString()}</p>
    </div>
  );
};

export default CryptoCard;