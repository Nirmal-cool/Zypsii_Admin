import React from 'react';
import { FaTrash, FaTimes } from 'react-icons/fa';
import './DeleteConfirmModal.css';

const DeleteConfirmModal = ({ isOpen, onClose, onConfirm, placeName }) => {
  if (!isOpen) return null;

  return (
    <div className="delete-modal-overlay" onClick={onClose}>
      <div className="delete-modal" onClick={(e) => e.stopPropagation()}>
        <div className="delete-modal-header">
          <div className="delete-modal-icon">
            <FaTrash />
          </div>
          <h3>Delete Place</h3>
          <button className="close-button" onClick={onClose}>
            <FaTimes />
          </button>
        </div>
        
        <div className="delete-modal-content">
          <p>
            Are you sure you want to delete <strong>"{placeName}"</strong>?
          </p>
          <p className="warning-text">
            This action cannot be undone. The place will be permanently removed from the database.
          </p>
        </div>
        
        <div className="delete-modal-actions">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-danger" onClick={onConfirm}>
            <FaTrash /> Delete Place
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
