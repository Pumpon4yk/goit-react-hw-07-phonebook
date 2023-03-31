import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const isLoadingContacts = state => state.contacts.isLoading;
export const errorContacts = state => state.contacts.error;
export const getStatusFilter = state => state.filter;

export const contactsFilter = createSelector(
  [getContacts, getStatusFilter],
  (contacts, filterName) =>
    contacts.filter(e =>
      e.name.toLowerCase().includes(filterName.toLowerCase())
    )
);
