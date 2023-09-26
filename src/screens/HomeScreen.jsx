import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';

export default function HomeScreen() {
  const { user, isLoggedIn } = useSelector(selectAuth);

  let content = (
    <>
      <Typography align="center" variant="h3" component="p">
        Welcome to our Phonebook application!
      </Typography>
      <Typography align="center">
        In order to start, please login or register a new user
      </Typography>
    </>
  );

  if (isLoggedIn) {
    content = (
      <>
        <Typography align="center" variant="h3" component="p">
          {user.name}, welcome to our Phonebook application!
        </Typography>
        <Typography align="center">
          You can go to 'Contacts' and check your records
        </Typography>
      </>
    );
  }

  return <Box sx={{ pt: 2 }}>{content}</Box>;
}
