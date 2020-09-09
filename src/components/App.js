import React, { Component } from 'react';
import Section from './Section';

class Phonebook extends Component {
  render() {
    return (
      <>
        <Section title="Phonebook">
          <h2>some1</h2>
        </Section>

        <Section title="Contacts">
          <h2>some2</h2>
        </Section>
      </>
    );
  }
}

function App() {
  return <Phonebook />;
}

export default App;
