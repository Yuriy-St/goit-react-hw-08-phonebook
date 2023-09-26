import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const ENDPOINT = {
  users: '/users',
  contacts: '/contacts',
};

export const contactsAPI = createApi({
  reducerPath: 'contactsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: `${ENDPOINT.users}/login`,
        method: 'POST',
        body: credentials,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${ENDPOINT.users}/logout`,
        method: 'POST',
      }),
    }),
    register: builder.mutation({
      query: credentials => ({
        url: '/users/signup',
        method: 'POST',
        body: credentials,
      }),
    }),
    getCurrentUser: builder.query({
      query: () => '/users/current',
    }),
    getContacts: builder.query({
      query: () => ENDPOINT.contacts,
      providesTags: ['Posts'],
    }),
    getContactById: builder.query({
      query: id => `${ENDPOINT.contacts}/${id}`,
    }),
    addContact: builder.mutation({
      query: body => ({
        url: ENDPOINT.contacts,
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Posts'],
    }),
    deleteContactById: builder.mutation({
      query: id => ({
        url: `${ENDPOINT.contacts}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Posts'],
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useGetCurrentUserQuery,
  useGetContactsQuery,
  useGetContactByIdQuery,
  useAddContactMutation,
  useDeleteContactByIdMutation,
} = contactsAPI;
