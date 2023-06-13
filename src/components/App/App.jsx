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
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.query.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  
  const visibleContacts = getVisibleContacts();

  return (
    <Container>
      <MainTitle>Телефонна книга</MainTitle>
      <ContactForm />
      <ContactsContainer>
        <Title>Мої контакти</Title>
        <AmountContacts>
          Загальна кількість контактів: {contacts.length}
        </AmountContacts>
        <Filter />
        {visibleContacts.length ? (
          <Contacts contacts={visibleContacts} />
        ) : (
          <EmptyText>Не знайдено жодного контакту</EmptyText>
        )}
      </ContactsContainer>
    </Container>
  );
};
