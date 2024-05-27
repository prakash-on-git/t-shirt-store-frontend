import React from 'react';
import "../index.css"

const genders = ['male', 'female', 'unisex'];

const GenderCheckboxGroup = ({ selectedGenders, setSelectedGenders }) => {
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedGenders([...selectedGenders, value]);
    } else {
      setSelectedGenders(selectedGenders.filter(gender => gender !== value));
    }
  };

  return (
    <div>
      {genders.map((gender) => (
        <div key={gender} id='checkbox-item' className='toggle-rect' >
          <input type="checkbox" id={`checkbox-${gender}`} value={gender}
            checked={selectedGenders.includes(gender)} onChange={handleCheckboxChange}
          />
          <label htmlFor={`checkbox-${gender}`}>{gender}</label>
        </div>
      ))}
    </div>
  );
};

export default GenderCheckboxGroup;
