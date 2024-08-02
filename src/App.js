// src/App.js
import React, { useState } from 'react';
import JsonInput from './JsonInput';
import MultiSelect from './MultiSelect';
import ResponseData from './ResponseData';

function App() {
  const [data, setData] = useState({});
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSubmit = (inputJson) => {
    try {
      const jsonData = JSON.parse(inputJson);
      // Call backend API here
      fetch('https://your-backend-api.com/bfhl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jsonData),
      })
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.error('Invalid JSON input:', error);
    }
  };

  return (
    <div>
      <JsonInput onSubmit={handleSubmit} />
      <MultiSelect
        options={[
          { value: 'numbers', label: 'Numbers' },
          { value: 'alphabets', label: 'Alphabets' },
          { value: 'highestAlphabet', label: 'Highest Alphabet' },
        ]}
        value={selectedOptions}
        onChange={(options) => setSelectedOptions(options)}
      />
      {data && <ResponseData data={data} selectedOptions={selectedOptions} />}
    </div>
  );
}

export default App;