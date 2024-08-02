// src/ResponseData.js
import React from 'react';

const ResponseData = ({ data, selectedOptions }) => {
  const filteredData = {};

  selectedOptions.forEach((option) => {
    switch (option.value) {
      case 'numbers':
        filteredData.numbers = data.numbers;
        break;
      case 'alphabets':
        filteredData.alphabets = data.alphabets;
        break;
      case 'highestAlphabet':
        filteredData.highestAlphabet = data.highestAlphabet;
        break;
      default:
        break;
    }
  });

  return (
    <div>
      {filteredData.numbers && (
        <ul>
          {filteredData.numbers.map((number) => (
            <li key={number}>{number}</li>
          ))}
        </ul>
      )}
      {filteredData.alphabets && (
        <ul>
          {filteredData.alphabets.map((alphabet) => (
            <li key={alphabet}>{alphabet}</li>
          ))}
        </ul>
      )}
      {filteredData.highestAlphabet && (
        <p>Highest Alphabet: {filteredData.highestAlphabet}</p>
      )}
    </div>
  );
};

export default ResponseData;