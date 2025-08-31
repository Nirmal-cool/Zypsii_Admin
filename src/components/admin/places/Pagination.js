import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './places.css';

const Pagination = ({ 
  pagination, 
  onPageChange, 
  show = true 
}) => {
  if (!show || pagination.totalPages <= 1) {
    return null;
  }

  return (
    <>
      <div className="pagination">
        <button
          className="page-button"
          onClick={() => onPageChange(pagination.currentPage - 1)}
          disabled={!pagination.hasPrevPage}
        >
          <FaChevronLeft /> Previous
        </button>
        
        {Array.from({ length: pagination.totalPages }, (_, i) => {
          const pageNum = i + 1;
          // Show current page, first page, last page, and pages around current
          if (
            pageNum === 1 ||
            pageNum === pagination.totalPages ||
            (pageNum >= pagination.currentPage - 1 && pageNum <= pagination.currentPage + 1)
          ) {
            return (
              <button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                className={`page-button ${pagination.currentPage === pageNum ? 'active' : ''}`}
              >
                {pageNum}
              </button>
            );
          } else if (
            pageNum === pagination.currentPage - 2 ||
            pageNum === pagination.currentPage + 2
          ) {
            return <span key={pageNum} className="page-ellipsis">...</span>;
          }
          return null;
        })}
        
        <button
          className="page-button"
          onClick={() => onPageChange(pagination.currentPage + 1)}
          disabled={!pagination.hasNextPage}
        >
          Next <FaChevronRight />
        </button>
      </div>

      <div className="pagination-info">
        <p>
          Showing {((pagination.currentPage - 1) * pagination.limit) + 1} to{' '}
          {Math.min(pagination.currentPage * pagination.limit, pagination.totalCount)} of{' '}
          {pagination.totalCount} places
        </p>
      </div>
    </>
  );
};

export default Pagination;
