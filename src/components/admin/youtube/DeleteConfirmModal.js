import React from 'react';
import { FaTrash, FaTimes } from 'react-icons/fa';
import './DeleteConfirmModal.css';

const DeleteConfirmModal = ({ isOpen, onClose, onConfirm, videoTitle, loading }) => {
  if (!isOpen) return null;

  return (
    <div className="delete-modal-overlay" onClick={onClose}>
      <div className="delete-modal" onClick={(e) => e.stopPropagation()}>
        <div className="delete-modal-header">
          <div className="delete-modal-icon">
            <FaTrash />
          </div>
          <h3>Delete Video</h3>
          <button className="close-button" onClick={onClose} disabled={loading}>
            <FaTimes />
          </button>
        </div>
        
        <div className="delete-modal-content">
          <p>
            Are you sure you want to delete <strong>"{videoTitle}"</strong>?
          </p>
          <p className="warning-text">
            This action cannot be undone. The video will be permanently removed from the database.
          </p>
        </div>
        
        <div className="delete-modal-actions">
          <button className="btn btn-secondary" onClick={onClose} disabled={loading}>
            Cancel
          </button>
          <button className="btn btn-danger" onClick={onConfirm} disabled={loading}>
            {loading ? (
              <>
                <div className="spinner-small"></div>
                Deleting...
              </>
            ) : (
              <>
                <FaTrash /> Delete Video
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
