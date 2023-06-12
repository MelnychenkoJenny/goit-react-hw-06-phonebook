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
import { getContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);

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
        {contacts.length ? (
          <Contacts />
        ) : (
          <EmptyText>Не знайдено жодного контакту</EmptyText>
        )}
      </ContactsContainer>
    </Container>
  );
};
