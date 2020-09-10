import React, { Component } from 'react';
import Section from './Section';
import PhoneList from './PhoneList';
import ContactEditor from './ContactEditor';
import Filter from './Filter';
import { v4 as uuidv4 } from 'uuid';

class Phonebook extends Component {
  state = {
    contacts: [
      { id: '1', name: 'qwe1', number: '1-123-456' },
      { id: '2', name: 'qwe2', number: '2-123-456' },
      { id: '3', name: 'qwe3', number: '3-123-456' },
      { id: '4', name: 'qwe4', number: '4-123-456' },
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = () => {
    const newContact = { id: uuidv4(), name: 'qwe0', number: '0-123-456' };
    this.setState(prevState => {
      return { contacts: [newContact, ...prevState.contacts] };
    });
  };

  removeContact = contactId => {
    console.log(contactId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    return (
      <>
        <Section title="Phonebook">
          {/*ContactEditor => ContactForm */}
          {/* проверка что add нельзя, уже есть */}
          <ContactEditor onAddContact={this.addContact} />
        </Section>

        <Section title="Contacts">
          <Filter />
          <PhoneList
            contacts={this.state.contacts}
            onRemoveContact={this.removeContact}
          />
        </Section>
      </>
    );
  }
}

function App() {
  return <Phonebook />;
}

export default App;
