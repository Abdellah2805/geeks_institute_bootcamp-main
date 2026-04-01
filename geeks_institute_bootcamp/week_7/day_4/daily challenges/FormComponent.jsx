import React from 'react';

function FormComponent(props) {
  return (
    <main style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* Formulaire utilisant la méthode GET par défaut pour l'URL */}
      <form>
        <input 
          name="firstName" 
          value={props.data.firstName} 
          onChange={props.handleChange} 
          placeholder="First Name" 
        /><br />
        
        <input 
          name="lastName" 
          value={props.data.lastName} 
          onChange={props.handleChange} 
          placeholder="Last Name" 
        /><br />
        
        <input 
          name="age" 
          value={props.data.age} 
          onChange={props.handleChange} 
          placeholder="Age" 
        /><br />

        <label>
          <input 
            type="radio" 
            name="gender" 
            value="male" 
            checked={props.data.gender === "male"} 
            onChange={props.handleChange} 
          /> Male
        </label>
        <label>
          <input 
            type="radio" 
            name="gender" 
            value="female" 
            checked={props.data.gender === "female"} 
            onChange={props.handleChange} 
          /> Female
        </label><br />

        <select 
          value={props.data.destination} 
          name="destination" 
          onChange={props.handleChange}
        >
          <option value="">-- Please choose a destination --</option>
          <option value="thailand">Thailand</option>
          <option value="japan">Japan</option>
          <option value="brazil">Brazil</option>
        </select><br />

        <label>
          <input 
            type="checkbox" 
            name="isVegan" 
            onChange={props.handleChange} 
            checked={props.data.dietaryRestrictions.isVegan} 
          /> Vegan?
        </label><br />
        <label>
          <input 
            type="checkbox" 
            name="isLactoseFree" 
            onChange={props.handleChange} 
            checked={props.data.dietaryRestrictions.isLactoseFree} 
          /> Lactose Free?
        </label><br />

        <button>Submit</button>
      </form>

      <hr />
      
      {/* Affichage des données en temps réel */}
      <h2>Entered information:</h2>
      <p>Your name: {props.data.firstName} {props.data.lastName}</p>
      <p>Your age: {props.data.age}</p>
      <p>Your gender: {props.data.gender}</p>
      <p>Your destination: {props.data.destination}</p>
      <p>
        Your dietary restrictions: <br />
        Vegan: {props.data.dietaryRestrictions.isVegan ? "Yes" : "No"} <br />
        Lactose Free: {props.data.dietaryRestrictions.isLactoseFree ? "Yes" : "No"}
      </p>
    </main>
  );
}

export default FormComponent;