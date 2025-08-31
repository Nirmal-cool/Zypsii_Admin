import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import './Login.css';

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('📝 FORM SUBMITTED - PREVENTING DEFAULT');
    console.log('📤 Form credentials:', credentials);
    console.log('🔒 Event prevented:', e.defaultPrevented);
    
    setLoading(true);
    setError('');

    try {

      const result = await login(credentials);
      
      if (result.success) {
        navigate('/admin/dashboard');
      } else {
        console.log('❌ Login failed:', result.error);
        setError(result.error || 'Login failed');
      }
    } catch (err) {
      console.error('💥 Login error:', err);
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
    
    // Prevent any further form submission
    return false;
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <div className="admin-login-header">
          <h1>Admin Login</h1>
          <p>Welcome to Zypsii Admin Panel</p>
        </div>
        
        <form 
          onSubmit={handleSubmit} 
          className="admin-login-form" 
          noValidate
          action="javascript:void(0)"
          method="POST"
        >
          {error && <div className="error-message">{error}</div>}
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
              placeholder="admin@zypsii.com"
              autoComplete="email"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
              autoComplete="current-password"
              minLength="6"
            />
          </div>
          
          <button 
            type="submit" 
            className="login-button"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <div className="admin-login-footer">
          <a href="/" className="back-to-site">← Back to Website</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
