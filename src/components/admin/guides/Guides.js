import React, { useState, useEffect } from 'react';
import { FaList, FaPlus, FaEdit, FaTrash, FaEye, FaMapMarkerAlt, FaCalendar, FaTags } from 'react-icons/fa';
import axios from 'axios';
import GuideForm from './GuideForm';
import './Guides.css';

const Guides = () => {
  const [activeView, setActiveView] = useState('list'); // 'list' or 'form'
  const [guides, setGuides] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editingGuide, setEditingGuide] = useState(null);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalCount: 0,
    limit: 10,
    hasMore: false
  });

  useEffect(() => {
    if (activeView === 'list') {
      fetchGuides();
    }
  }, [activeView]);

  const fetchGuides = async (page = 1) => {
    try {
      setLoading(true);
      setError(null);
      
      // Get the auth token from localStorage
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Authentication required');
      }

      const response = await axios.get(`http://localhost:3030/featured-guides/user/listing?page=${page}&limit=10`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (response.data.status) {
        setGuides(response.data.data || []);
        setPagination(response.data.pagination || {
          currentPage: page,
          totalPages: 1,
          totalCount: 0,
          limit: 10,
          hasMore: false
        });
      } else {
        throw new Error(response.data.message || 'Failed to fetch guides');
      }
    } catch (error) {
      console.error('Error fetching guides:', error);
      setError(error.message || 'Failed to fetch guides');
      // For demo purposes, set some sample data
      setGuides([
        {
          id: 1,
          title: 'Complete Guide to Beach Adventures',
          category: 'Beach',
          description: 'Discover the best beaches and water activities for your next adventure.',
          image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400',
          tags: ['Beach', 'Adventure', 'Water Sports'],
          createdAt: '2024-01-15T10:00:00Z',
          place: { name: 'Maldives' },
          isActive: true
        },
        {
          id: 2,
          title: 'Mountain Trekking Essentials',
          category: 'Mountains',
          description: 'Everything you need to know about mountain trekking and safety.',
          image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400',
          tags: ['Mountains', 'Trekking', 'Safety'],
          createdAt: '2024-01-10T14:30:00Z',
          place: { name: 'Himalayas' },
          isActive: true
        },
        {
          id: 3,
          title: 'Cultural Heritage Sites Guide',
          category: 'Cultural Sites',
          description: 'Explore ancient temples and historical monuments around the world.',
          image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400',
          tags: ['Cultural', 'Historical', 'Temples'],
          createdAt: '2024-01-05T09:15:00Z',
          place: { name: 'Varanasi' },
          isActive: false
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleGuideClick = (guideId) => {
    // Navigate to guide detail view
    console.log('Navigate to guide:', guideId);
  };

  const handleEdit = (guide) => {
    setEditingGuide(guide);
    setActiveView('form');
  };

  const handleDelete = async (guideId) => {
    if (window.confirm('Are you sure you want to delete this guide?')) {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('Authentication required');
        }

        await axios.delete(`http://localhost:3030/featured-guides/user/${guideId}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        // Remove from local state
        setGuides(prev => prev.filter(guide => guide.id !== guideId));
        setError(null);
        setError('Guide deleted successfully');
        setTimeout(() => setError(null), 3000);
      } catch (error) {
        setError('Failed to delete guide');
        console.error('Error deleting guide:', error);
      }
    }
  };

  const toggleStatus = async (guideId, currentStatus) => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Authentication required');
      }

      await axios.patch(`http://localhost:3030/featured-guides/user/${guideId}/status`, {
        isActive: !currentStatus
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      // Update local state
      setGuides(prev => prev.map(guide => 
        guide.id === guideId 
          ? { ...guide, isActive: !currentStatus }
          : guide
      ));
    } catch (error) {
      setError('Failed to update guide status');
      console.error('Error updating guide status:', error);
    }
  };

  const renderGuidesList = () => {
    if (loading) {
      return (
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading guides...</p>
        </div>
      );
    }

    if (error && error !== 'Guide deleted successfully') {
      return (
        <div className="error-message">
          <p>{error}</p>
        </div>
      );
    }

    if (!guides.length) {
      return (
        <div className="no-guides">
          <p>No guides found. Create your first guide!</p>
        </div>
      );
    }

    return (
      <>
        <div className="guides-grid">
          {guides.map((guide) => (
            <div key={guide.id} className={`guide-card ${!guide.isActive ? 'inactive' : ''}`}>
              <div className="guide-image-container">
                <img 
                  src={guide.image} 
                  alt={guide.title} 
                  className="guide-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x200?text=Guide+Image';
                  }}
                />
                <div className="guide-status">
                  <span className={`status-badge ${guide.isActive ? 'active' : 'inactive'}`}>
                    {guide.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>
              
              <div className="guide-content">
                <h3 className="guide-title">{guide.title}</h3>
                
                <div className="guide-category">
                  <FaMapMarkerAlt />
                  <span>{guide.category}</span>
                </div>
                
                <div className="guide-description" 
                     dangerouslySetInnerHTML={{ __html: guide.description.substring(0, 100) + '...' }} />
                
                <div className="guide-meta">
                  <div className="guide-date">
                    <FaCalendar />
                    <span>{new Date(guide.createdAt).toLocaleDateString()}</span>
                  </div>
                  <div className="guide-place">
                    <FaMapMarkerAlt />
                    <span>{guide.place?.name || 'Unknown Location'}</span>
                  </div>
                </div>
                
                <div className="guide-tags">
                  <FaTags />
                  {guide.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                  {guide.tags.length > 3 && (
                    <span className="tag-more">+{guide.tags.length - 3} more</span>
                  )}
                </div>
                
                <div className="guide-actions">
                  <button 
                    className="btn btn-view"
                    onClick={() => handleGuideClick(guide.id)}
                  >
                    <FaEye /> View
                  </button>
                  <button 
                    className="btn btn-edit"
                    onClick={() => handleEdit(guide)}
                  >
                    <FaEdit /> Edit
                  </button>
                  <button 
                    className="btn btn-toggle"
                    onClick={() => toggleStatus(guide.id, guide.isActive)}
                  >
                    {guide.isActive ? 'Deactivate' : 'Activate'}
                  </button>
                  <button 
                    className="btn btn-delete"
                    onClick={() => handleDelete(guide.id)}
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {pagination.totalPages > 1 && (
          <div className="pagination">
            {Array.from({ length: pagination.totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => fetchGuides(i + 1)}
                className={`page-button ${pagination.currentPage === i + 1 ? 'active' : ''}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </>
    );
  };

  return (
    <div className="guides-container">
      <div className="guides-header">
        <h1>Guides Management</h1>
        <p>Manage your travel guides and featured content</p>
      </div>

      {/* Navigation Tabs */}
      <div className="guides-nav">
        <button 
          className={`nav-tab ${activeView === 'list' ? 'active' : ''}`}
          onClick={() => setActiveView('list')}
        >
          <FaList /> View Guides
        </button>
        <button 
          className={`nav-tab ${activeView === 'form' ? 'active' : ''}`}
          onClick={() => setActiveView('form')}
        >
          <FaPlus /> Create Guide
        </button>
      </div>

      {/* Content */}
      {activeView === 'list' ? (
        <>
          {error === 'Guide deleted successfully' && (
            <div className="alert alert-success">
              <p>{error}</p>
            </div>
          )}
          {renderGuidesList()}
        </>
      ) : (
        <GuideForm 
          guide={editingGuide}
          onSuccess={() => {
            setActiveView('list');
            setEditingGuide(null);
            fetchGuides();
          }}
          onCancel={() => {
            setActiveView('list');
            setEditingGuide(null);
          }}
        />
      )}
    </div>
  );
};

export default Guides;
