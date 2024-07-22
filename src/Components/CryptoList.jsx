import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CryptoCard from './CryptoCard';

const CryptoList = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://coinranking1.p.rapidapi.com/coins',
      params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl', // USD currency UUID
        timePeriod: '24h',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '10',
        offset: '0'
      },
      headers: {
        'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY', // Replace with your RapidAPI key
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }
    };

    axios
      .request(options)
      .then((response) => {
        setCryptos(response.data.data.coins);
      })
      .catch((error) => {
        console.error('Error fetching the cryptocurrencies', error);
      });
  }, []);

  return (
    <div className="crypto-list">
      {cryptos.map((crypto) => (
        <CryptoCard key={crypto.uuid} crypto={crypto} />
      ))}
    </div>
  );
};

export default CryptoList;
