import React from 'react';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';

function App() {
  return (
    <AuthProvider>
      <HomePage />
    </AuthProvider>
  );
}

export default App;