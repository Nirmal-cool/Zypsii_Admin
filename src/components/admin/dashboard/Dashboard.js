import React, { useState, useEffect } from 'react';
import { 
  FaUsers, 
  FaMapMarkerAlt, 
  FaChartLine, 
  FaEye,
  FaCalendarAlt,
  FaClock,
  FaPlay,
  FaFileAlt,
  FaVideo
} from 'react-icons/fa';
import './Dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPlaces: 0,
    totalPosts: 0,
    totalReels: 0,
    totalSchedules: 0,
    activeUsers: 0
  });

  const [recentActivity, setRecentActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setStats({
        totalUsers: 1247,
        totalPlaces: 89,
        totalPosts: 567,
        totalReels: 234,
        totalSchedules: 156,
        activeUsers: 234
      });
      
      setRecentActivity([
        {
          id: 1,
          type: 'user',
          message: 'New user registered: john.doe@example.com',
          time: '2 minutes ago'
        },
        {
          id: 2,
          type: 'place',
          message: 'New place added: Central Park Restaurant',
          time: '15 minutes ago'
        },
        {
          id: 3,
          type: 'post',
          message: 'New post created: Travel to Paris',
          time: '1 hour ago'
        },
        {
          id: 4,
          type: 'reel',
          message: 'New reel uploaded: Sunset at Beach',
          time: '45 minutes ago'
        },
        {
          id: 5,
          type: 'schedule',
          message: 'New schedule created: Weekend Trip',
          time: '30 minutes ago'
        }
      ]);
      
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h2>Dashboard Overview</h2>
        <p>Welcome to your Zypsii admin dashboard</p>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon users">
            <FaUsers />
          </div>
          <div className="stat-content">
            <h3>{stats.totalUsers.toLocaleString()}</h3>
            <p>Total Users</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon places">
            <FaMapMarkerAlt />
          </div>
          <div className="stat-content">
            <h3>{stats.totalPlaces.toLocaleString()}</h3>
            <p>Total Places</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon posts">
            <FaFileAlt />
          </div>
          <div className="stat-content">
            <h3>{stats.totalPosts.toLocaleString()}</h3>
            <p>Total Posts</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon reels">
            <FaVideo />
          </div>
          <div className="stat-content">
            <h3>{stats.totalReels.toLocaleString()}</h3>
            <p>Total Reels</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon schedules">
            <FaCalendarAlt />
          </div>
          <div className="stat-content">
            <h3>{stats.totalSchedules.toLocaleString()}</h3>
            <p>Total Schedules</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon active">
            <FaChartLine />
          </div>
          <div className="stat-content">
            <h3>{stats.activeUsers.toLocaleString()}</h3>
            <p>Active Users</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="dashboard-section">
        <h3>Recent Activity</h3>
        <div className="activity-list">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="activity-item">
              <div className={`activity-icon ${activity.type}`}>
                {activity.type === 'user' && <FaUsers />}
                {activity.type === 'place' && <FaMapMarkerAlt />}
                {activity.type === 'post' && <FaFileAlt />}
                {activity.type === 'reel' && <FaVideo />}
                {activity.type === 'schedule' && <FaCalendarAlt />}
              </div>
              <div className="activity-content">
                <p>{activity.message}</p>
                <span className="activity-time">
                  <FaClock /> {activity.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
