import { combineReducers, configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import authReducer from './auth/authSlice';
import { filterReducer } from 'redux/filter/filterSlice';
import { contactsAPI } from 'redux/contacts/contactsApi';

// import favoritesReducer from './favorites/slice';
// import { authApi } from './auth';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  filter: filterReducer,
  [contactsAPI.reducerPath]: contactsAPI.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: gDM => [
    ...gDM({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsAPI.middleware,
  ],
});

export const persistor = persistStore(store);

// ------------------------------------------------------------------
