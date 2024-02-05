import React, { Component } from 'react';
import { Button, Label } from './Filter.styled';

class ContactForm extends Component {
  render() {
    const { name, number, handleInputChange, handleAddContact } = this.props;

    return (
      <div>
        <Label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces."
            required
            value={name}
            onChange={handleInputChange}
          />
        </Label>

        <Label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleInputChange}
          />
        </Label>

        <Button onClick={handleAddContact}>Add Contact</Button>
      </div>
    );
  }
}

export default ContactForm;
