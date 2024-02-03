import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { FilterContainer } from './Filter.styled';

export const App = () => {
  const [state, setState] = useState({
    contacts: [],
    filter: '',
    name: '',
    number: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFilterChange = e => {
    const { value } = e.target;
    setState(prevState => ({ ...prevState, filter: value }));
  };

  const filteredContacts = state.contacts.filter(contact => {
    if (contact.name && state.filter) {
      return contact.name.toLowerCase().includes(state.filter.toLowerCase());
    }
    return false;
  });

  const handleAddContact = () => {
    const { contacts, name, number } = state;
    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter both name and number.');
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert('Contact already exists!');
    } else {
      setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
        name: '',
        number: '',
      }));
    }
    console.log('Filtered Contacts:', filteredContacts);
  };

  const handleDeleteContact = id => {
    setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  return (
    <div>
      <FilterContainer>
        <h1>Phonebook</h1>
        <ContactForm
          name={state.name}
          number={state.number}
          handleInputChange={handleInputChange}
          handleAddContact={handleAddContact}
        />
        <h2>Contacts</h2>
        <ContactList
          contacts={state.contacts}
          handleDeleteContact={handleDeleteContact}
        />
        <Filter filter={state.filter} handleFilterChange={handleFilterChange} />{' '}
        <ContactList
          contacts={filteredContacts}
          handleDeleteContact={handleDeleteContact}
        />
      </FilterContainer>
    </div>
  );
};
