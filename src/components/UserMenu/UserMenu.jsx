import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';

export default function UserMenu() {
  const { user } = useSelector(selectAuth);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        columnGap: '2rem',
      }}
    >
      <Typography>{user.name}</Typography>
      <Button variant="string">Logout</Button>
    </Box>
  );
}
