// src/MultiSelect.js
import React, { useState } from 'react';
import Select from 'react-select';

const MultiSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const options = [
    { value: 'numbers', label: 'Numbers' },
    { value: 'alphabets', label: 'Alphabets' },
    { value: 'highestAlphabet', label: 'Highest Alphabet' },
  ];

  const handleChange = (options) => {
    setSelectedOptions(options);
  };

  return (
    <Select
      isMulti
      value={selectedOptions}
      onChange={handleChange}
      options={options}
    />
  );
};

export default MultiSelect;