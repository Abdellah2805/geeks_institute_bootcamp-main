import React from 'react';
import './Exercise.css'; // Importation du fichier CSS (Partie 3)

const Exercise = () => {
  // Objet de style inline (Partie 2)
  const styleHeader = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };

  return (
    <div>
      <h1 style={styleHeader}>Styled Header</h1>
      <p className="para">This is a paragraph with a CSS class.</p>
      <a href="https://reactjs.org">Link to React</a>
      <form>
        <input type="text" placeholder="Type something..." />
        <button type="submit">Submit</button>
      </form>
      <img src="https://via.placeholder.com/150" alt="placeholder" />
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
};

export default Exercise;