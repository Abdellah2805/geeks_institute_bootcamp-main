import React, { Component } from 'react';
import FormComponent from './FormComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      // Restrictions alimentaires (booleans)
      dietaryRestrictions: {
        isVegan: false,
        isLactoseFree: false,
        isIsGlutenFree: false
      }
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    // Si c'est une checkbox, on traite l'objet dietaryRestrictions
    if (type === "checkbox") {
      this.setState(prevState => ({
        dietaryRestrictions: {
          ...prevState.dietaryRestrictions,
          [name]: checked
        }
      }));
    } else {
      // Sinon on met à jour la valeur normalement
      this.setState({
        [name]: value
      });
    }
  };

  render() {
    return (
      <FormComponent 
        handleChange={this.handleChange}
        data={this.state}
      />
    );
  }
}

export default App;