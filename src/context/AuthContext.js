import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem('token');
      const adminUser = localStorage.getItem('adminUser');
      
      if (token && adminUser) {
        try {
          const parsedUser = JSON.parse(adminUser);
          setUser(parsedUser);
          setIsAuthenticated(true);
        } catch (parseError) {
          console.error('Failed to parse stored user data:', parseError);
          logout();
        }
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      logout();
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      setLoading(true);
      
      const response = await authAPI.login(credentials);
      
      if (response.data && response.data.status === true) {
        const admin = response.data.admin;
        const token = response.data.token; // Get token from backend response
        
        if (!token) {
          console.error('Backend did not return a token');
          return { 
            success: false, 
            error: 'Authentication failed: No token received from server' 
          };
        }

        // Validate token format (should be a JWT token)
        if (typeof token !== 'string' || token.split('.').length !== 3) {
          console.error('Invalid JWT token format received from backend');
          return { 
            success: false, 
            error: 'Authentication failed: Invalid token format received from server' 
          };
        }
        
        // Store token and admin data from backend
        localStorage.setItem('token', token);
        localStorage.setItem('adminUser', JSON.stringify(admin));
        
        // Update state
        setUser(admin);
        setIsAuthenticated(true);
        

        
        return { success: true, admin };
      } else {
        const errorMessage = response.data?.message || 'Login failed';
        return { 
          success: false, 
          error: errorMessage 
        };
      }
    } catch (error) {
      console.error('Login failed:', error);
      // Handle different types of errors
      if (error.response) {
        // Server responded with error status
        const errorMessage = error.response.data?.message || 'Login failed';
        return { success: false, error: errorMessage };
      } else if (error.request) {
        // Network error
        return { success: false, error: 'Network error. Please check your connection.' };
      } else {
        // Other error
        return { success: false, error: 'An unexpected error occurred' };
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('adminUser');
    setUser(null);
    setIsAuthenticated(false);
  };

  const refreshToken = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await authAPI.refreshToken({ token });
        if (response.data.success) {
          localStorage.setItem('token', response.data.token);
          setUser(response.data.user);
          return true;
        }
      }
    } catch (error) {
      console.error('Token refresh failed:', error);
      logout();
      return false;
    }
  };

  const value = {
    isAuthenticated,
    user,
    loading,
    login,
    logout,
    refreshToken,
    checkAuthStatus
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
