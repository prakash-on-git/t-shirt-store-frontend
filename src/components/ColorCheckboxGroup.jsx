import React from 'react';
import "../index.css";

// const colors = ['red', 'blue', 'green', 'yellow', 'black', 'mixed'];
const colors = [ 'yellow', 'black', 'mixed'];

const ColorCheckboxGroup = ({ selectedColors, setSelectedColors }) => {
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      // to add a selected color
      setSelectedColors([...selectedColors, value]);
    } else {
      // to remove a selected color
      setSelectedColors(selectedColors.filter(color => color !== value));
    }
  };

  return (
    <div>
      {colors.map((color) => (
        <div key={color} id='checkbox-item' className='toggle-rect'>
          <input type="checkbox" id={`checkbox-${color}`} value={color} 
          checked={selectedColors.includes(color)} onChange={handleCheckboxChange} />
          <label htmlFor={`checkbox-${color}`}>{color}</label>
        </div>
      ))}
    </div>
  );
};

export default ColorCheckboxGroup;
