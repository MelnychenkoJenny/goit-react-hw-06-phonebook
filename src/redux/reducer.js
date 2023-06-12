import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfigContacts = {
  key: 'contacts',
  storage,
};

const persistedReducerContacts = persistReducer(
  persistConfigContacts,
  contactsReducer
);
export const reducer = {
  contacts: persistedReducerContacts,
  filter: filterReducer,
};
