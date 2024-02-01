import React from 'react';

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search contacts"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
