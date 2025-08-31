import React from 'react';
import './places.css';

const NoResultsSection = ({ 
  filters, 
  onClearFilters, 
  onAddFirstPlace 
}) => {
  const hasActiveFilters = filters.search || 
    filters.category !== 'all' || 
    filters.isActive !== 'all' || 
    filters.featured !== 'all';

  return (
    <div className="no-results-section">
      <div className="no-results-content">
        <div className="no-results-icon">🔍</div>
        <h3>No places found</h3>
        <p>
          {hasActiveFilters 
            ? 'Try adjusting your search criteria or filters to find more places.'
            : 'No places have been added yet. Add your first place to get started!'
          }
        </p>
        {hasActiveFilters ? (
          <button 
            className="btn btn-primary"
            onClick={onClearFilters}
          >
            Clear All Filters
          </button>
        ) : (
          <button 
            className="btn btn-primary"
            onClick={onAddFirstPlace}
          >
            Add First Place
          </button>
        )}
      </div>
    </div>
  );
};

export default NoResultsSection;
