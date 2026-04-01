import React, { Component } from 'react';

// Composant Enfant pour l'Exercice 3
class Child extends Component {
  componentWillUnmount() {
    alert("The component named Child is about to be unmounted.");
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
      show: true // Ajouté pour l'Exo 3
    };
  }

  // Appelé après le montage (Exo 2 - Part II)
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 2000);
  }

  // Contrôle le rendu (Exo 2 - Part I)
  shouldComponentUpdate() {
    return true; // Si false, la couleur ne changera jamais en bleu
  }

  // Appelé juste avant le commit dans le DOM (Exo 2 - Part III)
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  // Appelé après la mise à jour (Exo 2 - Part II)
  componentDidUpdate() {
    console.log("after update");
  }

  changeToBlue = () => {
    this.setState({ favoriteColor: "blue" });
  };

  handleDelete = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeToBlue}>Change to Blue</button>
        
        <hr />
        
        {/* Exercice 3 : Rendu conditionnel du composant Child */}
        {this.state.show && <Child />}
        <button onClick={this.handleDelete}>Delete Header</button>
      </div>
    );
  }
}

export default LifeCycle;