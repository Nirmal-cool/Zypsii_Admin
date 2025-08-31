import React from 'react';
import PlaceCard from './PlaceCard';
import './places.css';

const PlacesGrid = React.memo(({
  places,
  onCardClick,
  onEdit,
  onDelete,
  onToggleStatus
}) => {
  if (!places || places.length === 0) {
    return null;
  }
  
  return (
    <div className="places-grid">
      {places.map((place) => (
        <PlaceCard
          key={place._id}
          place={place}
          onCardClick={onCardClick}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </div>
  );
});

PlacesGrid.displayName = 'PlacesGrid';

export default PlacesGrid;
