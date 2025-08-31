import React from 'react';
import { FaMapMarkerAlt, FaEdit, FaTrash } from 'react-icons/fa';
import './places.css';

const PlaceCard = React.memo(({
  place,
  onCardClick,
  onEdit,
  onDelete,
  onToggleStatus
}) => {
  const handleEdit = (e) => {
    e.stopPropagation();
    onEdit(place);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(place._id);
  };

  const handleToggleStatus = (e) => {
    e.stopPropagation();
    onToggleStatus(place._id, place.isActive);
  };

  return (
    <div
      className={`place-card ${!place.isActive ? 'inactive' : ''}`}
      onClick={() => onCardClick(place)}
    >
      <div className="place-image">
        {place.images && place.images[0] && place.images[0].url ? (
          <img
            src={place.images[0].url}
            alt={place.images[0].alt || place.name}
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
        ) : null}
        <div className="placeholder-image" style={{ display: place.images && place.images[0] && place.images[0].url ? 'none' : 'block' }}>
          <FaMapMarkerAlt />
        </div>
      </div>

      <div className="place-content">
        <div className="place-header">
          <h3 className="place-name">{place.name}</h3>
          <div className="place-rating">
            <span className="stars">{'★'.repeat(Math.floor(place.rating || 0))}</span>
            <span className="rating-number">{place.rating || 0}</span>
          </div>
        </div>

        <div className="place-category">{place.category}</div>

        <div className="place-location">
          <FaMapMarkerAlt />
          <span>
            {place.location?.city && place.location?.state
              ? `${place.location.city}, ${place.location.state}`
              : place.location?.address || 'Location not specified'
            }
          </span>
        </div>

        {place.description && (
          <p className="place-description">
            {place.description.length > 100
              ? `${place.description.substring(0, 100)}...`
              : place.description
            }
          </p>
        )}

        <div className="place-details">
          {place.priceRange && (
            <span className="detail-tag price">{place.priceRange}</span>
          )}
          {place.difficulty && (
            <span className="detail-tag difficulty">{place.difficulty}</span>
          )}
        </div>
      </div>

      <div className="place-actions">
        <button
          className="btn btn-edit"
          onClick={handleEdit}
          title="Edit place"
        >
          <FaEdit />
        </button>
        <button
          className="btn btn-delete"
          onClick={handleDelete}
          title="Delete place"
        >
          <FaTrash />
        </button>
      </div>

      <div className="place-status">
        <span className={`status-badge ${place.isActive ? 'active' : 'inactive'}`}>
          {place.isActive ? 'Active' : 'Inactive'}
        </span>
        {place.featured && (
          <span className="status-badge featured">Featured</span>
        )}
      </div>
    </div>
  );
});

PlaceCard.displayName = 'PlaceCard';

export default PlaceCard;
