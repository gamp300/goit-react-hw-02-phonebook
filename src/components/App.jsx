import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export const App = () => {
  const [state, setState] = useState({
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  });

  const addContact = () => {
    const newContact = {
      id: nanoid(),
      name: state.name,
      number: state.number,
    };

    setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  const handleFilterChange = filterValue => {
    setState({ ...state, filter: filterValue });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        name={state.name}
        number={state.number}
        onNameChange={e => setState({ ...state, name: e.target.value })}
        onNumberChange={e => setState({ ...state, number: e.target.value })}
        onAddContact={addContact}
      />

      <h2>Contacts</h2>
      <Filter filter={state.filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={state.contacts} filter={state.filter} />
    </div>
  );
};
