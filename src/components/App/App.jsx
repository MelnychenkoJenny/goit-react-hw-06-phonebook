import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import initialContacts from 'components/data/contacts.json';
import {
  Container,
  MainTitle,
  Title,
  ContactsContainer,
  AmountContacts,
  EmptyText,
} from './App.styled';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { Contacts } from 'components/Contacts';
import { formattedNumber } from 'components/calc/numberFormatted';

const STORAGE_KEY_CONTACTS = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem(STORAGE_KEY_CONTACTS)) ?? initialContacts
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
   localStorage.setItem(STORAGE_KEY_CONTACTS, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const formatted = formattedNumber(number);
    const repeatName = contacts.some(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (repeatName) {
      return alert(`${name} вже є в контактах`);
    }
    const contact = {
      id: nanoid(),
      name,
      number: formatted,
    };
    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const changeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <MainTitle>Телефонна книга</MainTitle>
      <ContactForm addContact={addContact} />
      <ContactsContainer>
        <Title>Мої контакти</Title>
        <AmountContacts>
          Загальна кількість контактів: {contacts.length}
        </AmountContacts>
        <Filter value={filter} onChange={changeFilter} />

        {visibleContacts.length ? (
          <Contacts
            contacts={visibleContacts}
            onDeleteContact={deleteContact}
          />
        ) : (
          <EmptyText>Не знайдено жодного контакту</EmptyText>
        )}
      </ContactsContainer>
    </Container>
  );
};
