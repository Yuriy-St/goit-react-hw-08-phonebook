import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter.value;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    const filterNormalized = filter.toLowerCase();

    const filtered = filter
      ? contacts.filter(({ name }) =>
          name.toLowerCase().includes(filterNormalized)
        )
      : contacts;

    return filtered;
  }
);

const selectToken = state => state.auth.token;
const selectUser = state => state.auth.user;
const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectAuth = createSelector(
  [selectToken, selectUser, selectIsLoggedIn],
  (token, user, isLoggedIn) => {
    return { token, user, isLoggedIn };
  }
);
