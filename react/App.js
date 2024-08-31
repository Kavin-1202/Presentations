import React from 'react';
import { ErrorBoundary, useErrorBoundary } from 'react-error-boundary';
import Counter from './components/counter';

// Fallback component to display when an error is caught
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      {/* <pre>{error.message}</pre> */}
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

// // Component that might throw an error
// function BuggyComponent() {
//   throw new Error("I crashed!");
// }

// Component that triggers an error programmatically
function TriggerErrorComponent() {
  const { showBoundary } = useErrorBoundary();

  return (
    <div>
      <button onClick={() => showBoundary(new Error('Manual Error Triggered'))}>
        Trigger Error
      </button>
    </div>
  );
}
// Component without an error boundary
function NoBoundaryComponent() {
    return (
      <div>
        <h2>This component is not wrapped by an ErrorBoundary</h2>
        <button onClick={() => { throw new Error("Error in NoBoundaryComponent"); }}>
          Cause Error
        </button>
      </div>
    );
  }

// Your main App component
function App() {
  return (
    <div>
      <h1>React Error Boundaries Example</h1>

      {/* Component with Error Boundary */}
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          // Reset the state of your app so the error doesn't happen again
        }}
      >
        <TriggerErrorComponent />
      </ErrorBoundary>

      <hr />

      {/* Component without Error Boundary */}
      <NoBoundaryComponent />
    </div>
  );
}

export default App;
