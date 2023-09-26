import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter/Filter';
import { Box, Typography } from '@mui/material';
import { useGetContactsQuery } from 'redux/contacts';

export default function PhoneBookScreen() {
  const { data: contacts } = useGetContactsQuery();
  return (
    <Box
      sx={{
        mt: 3,
        display: 'flex',
        flexDirection: 'column',
        rowGap: 3,
      }}
    >
      <Box>
        <Typography component="h1" variant="h3" mb={2}>
          Phonebook
        </Typography>
        <ContactForm />
      </Box>

      {contacts.length > 0 && (
        <Box>
          <Typography component="p" variant="h4" mb={2}>
            Contacts
          </Typography>
          <Filter />
          <ContactList />
        </Box>
      )}
    </Box>
  );
}
