import PropTypes from 'prop-types';
import { ContactsList, ContactsItem, ButtonDelete } from './Contacts.styled';
export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <ButtonDelete onClick={() => onDeleteContact(id)}>
            Видалити
          </ButtonDelete>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
