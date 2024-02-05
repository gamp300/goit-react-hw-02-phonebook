import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    const { contacts, handleDeleteContact } = this.props;

    console.log('Contacts in ContactList:', contacts);

    return (
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button onClick={() => handleDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
