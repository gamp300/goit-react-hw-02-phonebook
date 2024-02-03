import React from 'react';
import { Contacts } from './Filter.styled';

const Filter = ({ filter, handleFilterChange }) => {
  return (
    <div>
      <Contacts>
        Find contacts by name
        <input type="text" value={filter || ''} onChange={handleFilterChange} />
      </Contacts>
    </div>
  );
};

export default Filter;
