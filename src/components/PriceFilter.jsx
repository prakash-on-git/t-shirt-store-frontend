import React from 'react';

const PriceFilter = ({ selectedPriceRange, setSelectedPriceRange }) => {
  const handleMinPriceChange = (event) => {
    setSelectedPriceRange([parseFloat(event.target.value), selectedPriceRange[1]]);
  };

  const handleMaxPriceChange = (event) => {
    setSelectedPriceRange([selectedPriceRange[0], parseFloat(event.target.value)]);
  };

  return (
    <div>
      <label>
        Min Price: 
        <input 
          type="number" 
          value={selectedPriceRange[0]} 
          onChange={handleMinPriceChange} 
        />
      </label>
      <label>
        Max Price: 
        <input 
          type="number" 
          value={selectedPriceRange[1]} 
          onChange={handleMaxPriceChange} 
        />
      </label>
    </div>
  );
};

export default PriceFilter;
