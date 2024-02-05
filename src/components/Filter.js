import React, { Component } from 'react';
import { Contacts } from './Filter.styled';

class Filter extends Component {
  render() {
    const { filter, handleFilterChange } = this.props;
    return (
      <div>
        <Contacts>
          Buscar contactos por nombre
          <input
            type="text"
            value={filter || ''}
            onChange={handleFilterChange}
          />
        </Contacts>
      </div>
    );
  }
}

export default Filter;
