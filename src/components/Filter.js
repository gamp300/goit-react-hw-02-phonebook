import React from 'react';

export default function Filter({ filter, onFilterChange }) {
  return (
    <div>
      <label htmlFor="filter">Filter Contacts:</label>
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={e => onFilterChange(e.target.value)}
      />
    </div>
  );
}
