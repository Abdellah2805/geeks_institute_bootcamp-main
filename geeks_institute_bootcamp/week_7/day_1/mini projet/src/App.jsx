import React from 'react';
import UserFavoriteAnimals from './UserFavoriteAnimals';
import Exercise from './Exercise3';

function App() {
  // --- Exercice 1 ---
  const myElement = <h1>I Love JSX!</h1>;
  const sum = 5 + 5;

  // --- Exercice 2 ---
  const user = {
    firstName: "Bob",
    lastName: "Dylan",
    favAnimals: ["Horse", "Turtle", "Elephant", "Monkey"],
  };

  return (
    <div className="App">
      {/* Exercice 1 */}
      <p>Hello World!</p>
      {myElement}
      <p>React is {sum} times better with JSX</p>

      <hr />

      {/* Exercice 2 */}
      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>
      <UserFavoriteAnimals favAnimals={user.favAnimals} />

      <hr />

      {/* Exercice 3 */}
      <Exercise />
    </div>
  );
}

export default App;