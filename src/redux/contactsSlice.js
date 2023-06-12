import { createSlice} from '@reduxjs/toolkit'
import initialContacts from 'components/data/contacts.json';
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialContacts,
    reducers: {
        addContacts: {
            reducer(state, action) {
                state.push(action.payload);
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
const index = state.findIndex(contact => contact.id === action.payload);
console.log(index)
state.splice(index, 1);
        },
    }
})

export const {addContacts, deleteContacts} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;