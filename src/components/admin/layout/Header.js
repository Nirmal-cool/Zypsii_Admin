import React from 'react';
import { useAuth } from '../../../context/AuthContext';
import { FaBars, FaUser, FaBell } from 'react-icons/fa';
import './Header.css';

const Header = ({ onToggleSidebar, onLogout }) => {
  const { user } = useAuth();

  return (
    <header className="admin-header">
      <div className="header-left">
        <button 
          className="sidebar-toggle-btn"
          onClick={onToggleSidebar}
        >
          <FaBars />
        </button>
        <h1>Admin Dashboard</h1>
      </div>
      
      <div className="header-right">
        <div className="header-actions">
          <button className="notification-btn">
            <FaBell />
            <span className="notification-badge">3</span>
          </button>
          
          <div className="user-menu">
            <div className="user-info">
              <div className="user-avatar">
                <FaUser />
              </div>
              <div className="user-details">
                <span className="user-name">{user?.email || 'Admin User'}</span>
                <span className="user-role">{user?.role || 'Administrator'}</span>
              </div>
            </div>
            
            <div className="user-dropdown">
              <button className="dropdown-toggle">
                <FaBars />
              </button>
              <div className="dropdown-menu">
                <button onClick={onLogout} className="dropdown-item">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
