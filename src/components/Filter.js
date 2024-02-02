import React from 'react';

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input type="text" value={filter || ''} onChange={handleFilterChange} />
      </label>
    </div>
  );
};

export default Filter;
