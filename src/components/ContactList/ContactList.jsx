import Typography from '@mui/material/Typography';
import Contact from 'components/Contact/Contact';
import { ContactListStyled } from './ContactList.styled';
import { useGetContactsQuery } from 'redux/contacts/contactsAPI';
import useFilter from 'hooks/useFilter';

export default function ContactList() {
  const {
    data: contacts,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetContactsQuery();

  const filteredContacts = useFilter(contacts);

  if (isLoading || isFetching)
    return (
      <Typography component="p" variant="h3">
        Loading...
      </Typography>
    );

  if (isSuccess) {
    return (
      <>
        <ContactListStyled>
          {filteredContacts.map(({ id, name, number }) => (
            <Contact key={id} id={id} name={name} number={number} />
          ))}
        </ContactListStyled>
      </>
    );
  }

  if (isError)
    return (
      <Typography sx={{ color: 'error.main' }}>{error.message}</Typography>
    );
}
