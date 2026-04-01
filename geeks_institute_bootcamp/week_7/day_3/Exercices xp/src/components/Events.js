import React, { useState } from 'react';

const Events = () => {
  // Part III: State for Toggle
  const [isToggleOn, setIsToggleOn] = useState(true);

  // Part I: Click alert
  const clickMe = () => {
    alert('I was clicked');
  };

  // Part II: Handle Enter key
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      alert(`The Enter key was pressed, your input is: ${event.target.value}`);
    }
  };

  // Part III: Toggle function
  const toggleStatus = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Part I */}
      <button onClick={clickMe}>Click Me!</button>
      
      <br /><br />

      {/* Part II */}
      <input 
        type="text" 
        onKeyDown={handleKeyDown} 
        placeholder="Type and press Enter" 
      />

      <br /><br />

      {/* Part III */}
      <button onClick={toggleStatus}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default Events;