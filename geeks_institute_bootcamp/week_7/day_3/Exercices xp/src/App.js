import React from 'react';
import Car from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone';

function App() {
  const carinfo = { name: "Ford", model: "Mustang" };

  return (
    <div className="App">
      <section>
        <h2>Exercise 1: Car</h2>
        <Car carInfo={carinfo} />
      </section>
      <hr />
      <section>
        <h2>Exercise 2: Events</h2>
        <Events />
      </section>
      <hr />
      <section>
        <h2>Exercise 3: Phone</h2>
        <Phone />
      </section>
    </div>
  );
}

export default App;