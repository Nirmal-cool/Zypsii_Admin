import React from 'react';
import './places.css';

const FiltersSection = ({
  filters,
  onFilterChange,
  filterLoading,
  searchPending
}) => {
  return (
          <div className="filters-section">
        <div className="filters-header">
          <h3>Search Places</h3>
        </div>

        <div className="search-container">
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder={searchPending ? "Waiting..." : filterLoading ? "Searching..." : "Search places by name, category, or location..."}
              value={filters.search}
              onChange={(e) => onFilterChange('search', e.target.value)}
              className={searchPending ? 'pending' : filterLoading ? 'searching' : ''}
            />
            {searchPending && (
              <div className="search-pending">
                <div className="pending-dot"></div>
                <span style={{ fontSize: '12px', color: '#6b7280', marginLeft: '8px' }}>
                  Waiting...
                </span>
              </div>
            )}
            {filterLoading && (
              <div className="search-spinner">
                <div className="spinner-small"></div>
              </div>
            )}
          </div>
        </div>
      </div>
  );
};

export default FiltersSection;
