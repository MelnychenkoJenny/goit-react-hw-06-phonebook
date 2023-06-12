import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactsList, ContactsItem, ButtonDelete } from './Contacts.styled';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilter = filter.query.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };

  const visibleContacts = getVisibleContacts();
  return (
    <ContactsList>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactsItem key={id}>
          <p>{name}</p>
          <p>{number}</p>
          <ButtonDelete onClick={() => deleteContact(id)}>
            Видалити
          </ButtonDelete>
        </ContactsItem>
      ))}
    </ContactsList>
  );
};
