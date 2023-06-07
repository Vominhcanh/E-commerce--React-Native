import React from 'react';
import IndexApp from './src/IndexApp';
import {AuthProvider} from './src/context/AuthContext';
const App = () => {
  return (
    <AuthProvider>
      <IndexApp />
    </AuthProvider>
  );
};

export default App;
