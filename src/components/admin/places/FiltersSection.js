import React from 'react';
import './places.css';

const FiltersSection = ({
  filters,
  onFilterChange,
  onClearFilters,
  filterLoading,
  searchPending
}) => {
  return (
    <div className="filters-section">
      <div className="filters-header">
        <h3>Filters & Search</h3>
        <button
          className="btn btn-secondary"
          onClick={onClearFilters}
        >
          Clear All
        </button>
      </div>

      <div className="filters-grid">
        <div className="filter-field">
          <label>Search</label>
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder={searchPending ? "Waiting..." : filterLoading ? "Searching..." : "Search places..."}
              value={filters.search}
              onChange={(e) => onFilterChange('search', e.target.value)}
              className={searchPending ? 'pending' : filterLoading ? 'searching' : ''}
            />
            {searchPending && (
              <div className="search-pending">
                <div className="pending-dot"></div>
              </div>
            )}
            {filterLoading && (
              <div className="search-spinner">
                <div className="spinner-small"></div>
              </div>
            )}
          </div>
        </div>

        <div className="filter-field">
          <label>Category</label>
          <select
            value={filters.category}
            onChange={(e) => onFilterChange('category', e.target.value)}
          >
            <option value="all">All Categories</option>
            {[
              'Beach', 'Adventure', 'Mountains', 'Hiking', 'Trekking',
              'View Points', 'National Parks', 'Wildlife', 'Cultural Sites',
              'Historical Places', 'Waterfalls', 'Lakes', 'Forests',
              'Caves', 'Temples', 'Museums', 'Gardens', 'Rivers'
            ].map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="filter-field">
          <label>Status</label>
          <select
            value={filters.isActive}
            onChange={(e) => onFilterChange('isActive', e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="true">Active Only</option>
            <option value="false">Inactive Only</option>
          </select>
        </div>

        <div className="filter-field">
          <label>Featured</label>
          <select
            value={filters.featured}
            onChange={(e) => onFilterChange('featured', e.target.value)}
          >
            <option value="all">All Places</option>
            <option value="true">Featured Only</option>
            <option value="false">Non-Featured</option>
          </select>
        </div>
      </div>

      <button
        className="btn btn-secondary"
        onClick={onClearFilters}
      >
        Clear Filters
      </button>
    </div>
  );
};

export default FiltersSection;
