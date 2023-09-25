import ContactForm from 'components/ContactForm';
import { Subtitle } from 'components/Subtitle/Subtitle.styled';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter/Filter';
import { Container, Title } from 'components/Layout/Layout.styled';
import { Box } from '@mui/material';

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
        <Title>Phonebook</Title>
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
