import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

export const App = () => {
  const [state, setState] = useState({
    contacts: [],
    filter: '',
    name: '',
    number: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddContact = () => {
    const { contacts, name, number } = state;
    if (name.trim() === '' || number.trim() === '') return;

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase())) {
      alert('Contact already exists!');
    } else {
      setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
        name: '',
        number: '',
      }));
    }
  };

  const handleDeleteContact = (id) => {
    setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm
        name={state.name}
        number={state.number}
        handleInputChange={handleInputChange}
        handleAddContact={handleAddContact}
      />

      <h2>Contacts</h2>
      <ContactList contacts={state.contacts} handleDeleteContact={handleDeleteContact} />
    </div>
  );
};
