import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    // On met à jour l'état pour afficher l'UI de repli
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.error) {
      // Affichage de l'erreur avec les détails demandés
      return (
        <details style={{ whiteSpace: 'pre-wrap', color: 'red' }}>
          {this.state.error && this.state.error.toString()}
          <br />
          {this.state.errorInfo.componentStack}
        </details>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;