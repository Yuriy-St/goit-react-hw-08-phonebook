import { Box, Typography } from '@mui/material';

export default function HomeScreen() {
  return (
    <Box sx={{ pt: 2 }}>
      <Typography align="center" variant="h3" component="p">
        Welcome to our Phonebook application!
      </Typography>
      <Typography align="center">
        In order to start, please login or register a new user
      </Typography>
    </Box>
  );
}
