import React, { useState } from 'react';
import './App.css'; // Optionnel pour le style

function App() {
  // Initialisation du state avec le tableau d'objets
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  // Fonction pour augmenter les votes
  const vote = (index) => {
    // 1. On crée une copie du tableau pour ne pas modifier le state directement (immutabilité)
    const newLanguages = [...languages];
    
    // 2. On incrémente le vote de l'élément spécifique
    newLanguages[index].votes++;
    
    // 3. On met à jour le state
    setLanguages(newLanguages);
  };

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Vote Your Language!</h1>
      
      <div className="languages">
        {languages.map((lang, i) => (
          <div key={i} style={cardStyle}>
            <span style={{ fontSize: '1.5rem', marginRight: '20px' }}>
              {lang.votes}
            </span>
            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
              {lang.name}
            </span>
            <button 
              onClick={() => vote(i)} 
              style={buttonStyle}
            >
              Click Here
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Petit style rapide pour que ça ressemble à une vraie app
const cardStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '300px',
  margin: '10px auto',
  padding: '10px',
  border: '1px solid #ddd',
  backgroundColor: '#f9f9f9'
};

const buttonStyle = {
  marginLeft: '20px',
  padding: '5px 10px',
  cursor: 'pointer',
  color: '#007bff',
  border: 'none',
  background: 'none',
  fontWeight: 'bold'
};

export default App;