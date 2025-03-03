import React, { Suspense } from 'react';

const Header = React.lazy(() => import('header/Header'));

const App = () => {
  return (
    <div>
      <h1>MFE Atelier Amir TALBI</h1>
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
      <main>
        <p>Welcome to shell application!</p>
      </main>
    </div>
  );
};

export default App;