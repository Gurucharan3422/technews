import React, { createContext, useState, useContext } from 'react';

// Create the context
const AuthContext = createContext();

// Custom hook to access context
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component that wraps the app and provides context value
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Set login status
  const setLogin = (value) => {
    setIsAuthenticated(value);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, setLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

// Export AuthContext for usage in other components (if needed)
export { AuthContext };