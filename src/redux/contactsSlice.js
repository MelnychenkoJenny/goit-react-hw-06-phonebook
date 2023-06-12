import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = {
  array: [
    { id: 'id-1', name: 'Розі Сімпсон', number: '459-12-56' },
    { id: 'id-2', name: 'Герміона Клайн', number: '443-89-12' },
    { id: 'id-3', name: 'Еден Клемент', number: '645-17-79' },
    { id: 'id-4', name: 'Аня Копіланд', number: '227-91-26' },
  ],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContacts: {
      reducer(state, action) {
        state.array.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContacts(state, action) {
      const index = state.array.findIndex(
        contact => contact.id === action.payload
      );

      state.array.splice(index, 1);
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
