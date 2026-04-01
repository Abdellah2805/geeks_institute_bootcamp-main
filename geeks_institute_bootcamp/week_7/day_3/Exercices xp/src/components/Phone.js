import React, { useState } from 'react';

const Phone = () => {
  // Part I: Phone state
  const [phone, setPhone] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020
  });

  // Part II: Change Color function
  const changeColor = () => {
    setPhone(prevPhone => ({
      ...prevPhone,
      color: "blue"
    }));
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px' }}>
      <h1>My phone is a {phone.brand}</h1>
      <p>
        It is a {phone.color} {phone.model} from {phone.year}
      </p>
      
      {/* Part II: Button */}
      <button onClick={changeColor}>Change color</button>
    </div>
  );
};

export default Phone;