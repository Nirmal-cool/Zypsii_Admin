import React from 'react';
import { FaToggleOn, FaToggleOff, FaTimes } from 'react-icons/fa';
import './ToggleStatusModal.css';

const ToggleStatusModal = ({ isOpen, onClose, onConfirm, videoTitle, currentStatus, loading }) => {
  if (!isOpen) return null;

  const newStatus = !currentStatus;
  const statusText = newStatus ? 'Activate' : 'Deactivate';
  const statusIcon = newStatus ? <FaToggleOn /> : <FaToggleOff />;
  const statusColor = newStatus ? 'activate' : 'deactivate';

  return (
    <div className="toggle-status-modal-overlay" onClick={onClose}>
      <div className="toggle-status-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className={`status-icon ${statusColor}`}>
            {statusIcon}
          </div>
          <h3>{statusText} Video</h3>
          <button className="close-button" onClick={onClose} disabled={loading}>
            <FaTimes />
          </button>
        </div>
        
        <div className="modal-content">
          <p>
            Are you sure you want to <strong>{statusText.toLowerCase()}</strong> the video <strong>"{videoTitle}"</strong>?
          </p>
          <div className="status-change-info">
            <div className="current-status">
              <span>Current Status:</span>
              <span className={`status-badge ${currentStatus ? 'active' : 'inactive'}`}>
                {currentStatus ? 'Active' : 'Inactive'}
              </span>
            </div>
            <div className="new-status">
              <span>New Status:</span>
              <span className={`status-badge ${newStatus ? 'active' : 'inactive'}`}>
                {newStatus ? 'Active' : 'Inactive'}
              </span>
            </div>
          </div>
        </div>
        
        <div className="modal-actions">
          <button className="btn btn-secondary" onClick={onClose} disabled={loading}>
            Cancel
          </button>
          <button 
            className={`btn btn-${statusColor}`} 
            onClick={onConfirm} 
            disabled={loading}
          >
            {loading ? (
              <>
                <div className="spinner-small"></div>
                {statusText}ing...
              </>
            ) : (
              <>
                {statusIcon} {statusText} Video
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToggleStatusModal;
