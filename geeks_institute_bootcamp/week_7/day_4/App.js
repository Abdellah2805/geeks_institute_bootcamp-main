import React from 'react';
import BuggyCounter from './BuggyCounter';
import ErrorBoundary from './ErrorBoundary';
import LifeCycle from './LifeCycle';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      
      <h2>Simulation 1: Two counters sharing one Boundary</h2>
      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <hr />

      <h2>Simulation 2: Each counter has its own Boundary</h2>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <hr />

      <h2>Simulation 3: No Boundary (will crash the whole app)</h2>
      <BuggyCounter />

      <hr />
      
      <h2>Exercise 2 & 3: Lifecycle</h2>
      <LifeCycle />

    </div>
  );
}

export default App;