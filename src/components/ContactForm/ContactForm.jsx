import React from 'react';
import { nanoid } from 'nanoid';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import {
  FormStyle,
  InputName,
  InputGroup,
  InputLabel,
  Button,
  ErrorMessageStyle,
} from './ContacrForm.styled';
import { phoneRegExp } from 'components/calc/phoneRegExp';
import { useDispatch, useSelector } from 'react-redux';
import { formattedNumber } from 'components/calc/numberFormatted';
import { getContacts } from 'redux/selectors';
import { addContacts } from 'redux/contactsSlice';

const schema = yup.object().shape({
  name: yup.string().required("Ім'я обов'язкове!"),
  number: yup
    .string()
    .required("Номер обов'язковий!")
    .matches(phoneRegExp, 'Номер має складатись тільки з цифр. Приберіть лишні символи.')
    .min(7, 'Номер має бути не менше 7 цифр'),
});

const nameId = nanoid();
const numberId = nanoid();

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = data => {
    addContact(data.name, data.number);
    reset();
  };
  const addContact = (name, number) => {
    const formatted = formattedNumber(number);
    const repeatName = contacts.some(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (repeatName) {
      return alert(`${name} вже є в контактах`);
    }

    dispatch(addContacts(name, formatted));
  };

  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      <InputGroup>
        <InputLabel htmlFor={nameId}>Ім'я</InputLabel>
        <InputName
          {...register('name')}
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          // required
          id={nameId}
        />

        {errors.name && (
          <ErrorMessageStyle>{errors.name?.message}</ErrorMessageStyle>
        )}
      </InputGroup>
      <InputGroup>
        <InputLabel htmlFor={numberId}>Телефон</InputLabel>
        <InputName
          {...register('number')}
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          // required
          id={numberId}
        />
        {errors.number && (
          <ErrorMessageStyle>{errors.number?.message}</ErrorMessageStyle>
        )}
      </InputGroup>
      <Button type="submit">Додати контакт</Button>
    </FormStyle>
  );
};
