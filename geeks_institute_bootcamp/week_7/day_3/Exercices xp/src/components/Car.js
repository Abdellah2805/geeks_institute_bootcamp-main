import React, { useState } from 'react';
import Garage from './Garage';

const Car = ({ carInfo }) => {
  // Part II: useState for color
  const [color, setColor] = useState("red");

  return (
    <div>
      <h1>This car is a {color} {carInfo.model}</h1>
      {/* Part III: Garage component */}
      <Garage size="small" />
    </div>
  );
};

export default Car;