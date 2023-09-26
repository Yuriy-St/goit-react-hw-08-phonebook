import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth';
import { useLogoutMutation } from 'redux/contacts';
import { selectAuth } from 'redux/selectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector(selectAuth);
  const [logout] = useLogoutMutation();

  const handleClick = async () => {
    await logout();
    dispatch(logOut());
    navigate('/');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        columnGap: '2rem',
      }}
    >
      <Typography>{user.name}</Typography>
      <Button variant="string" onClick={handleClick}>
        Logout
      </Button>
    </Box>
  );
}
