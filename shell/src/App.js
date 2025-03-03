import React, { Suspense, useState, useEffect } from "react";

const Header = React.lazy(() => import("header/Header"));

const App = () => {
  const [headerError, setHeaderError] = useState(false);

  return (
    <div>
      <h1>MFE Atelier Amir TALBI</h1>
      <Suspense fallback={<div>Loading Header...</div>}>
        {headerError ? (
          <div
            style={{
              padding: "10px",
              background: "#ffecec",
              border: "1px solid #f5aca6",
            }}
          >
            Impossible de charger le header. Assurez-vous que le micro-frontend
            header est en cours d'exécution sur http://localhost:3001.
          </div>
        ) : (
          <ErrorBoundary onError={() => setHeaderError(true)}>
            <Header />
          </ErrorBoundary>
        )}
      </Suspense>
      <main>
        <p>Welcome to shell application!</p>
      </main>
    </div>
  );
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.props.onError && this.props.onError(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

export default App;
