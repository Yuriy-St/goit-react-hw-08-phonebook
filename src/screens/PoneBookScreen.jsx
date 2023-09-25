import ContactForm from 'components/ContactForm';
import { Subtitle } from 'components/Subtitle/Subtitle.styled';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter/Filter';
import { Box, Typography } from '@mui/material';

export default function PhoneBookScreen() {
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
        <Typography component="h1" variant="h4" mb={2}>
          Phonebook
        </Typography>
        <ContactForm />
      </Box>

      <Box>
        <Subtitle>Contacts</Subtitle>
        <Filter />
        <ContactList />
      </Box>
    </Box>
  );
}
