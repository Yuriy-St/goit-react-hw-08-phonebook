import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Link } from '@mui/material';
import { LinkBox } from './Header.styled';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/selectors';
import UserMenu from 'components/UserMenu/UserMenu';

export default function ButtonAppBar() {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <AppBar position="static">
      <Container maxWidth="sm">
        <Toolbar
          sx={{ justifyContent: 'space-between' }}
          component="nav"
          disableGutters={true}
        >
          <LinkBox>
            <Link color="inherit" underline="none" component={NavLink} to="/">
              <Typography>Home</Typography>
            </Link>
            {isLoggedIn && (
              <Link
                color="inherit"
                underline="none"
                component={NavLink}
                to="/contacts"
              >
                <Typography>Contacts</Typography>
              </Link>
            )}
          </LinkBox>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <LinkBox>
              <Link
                color="inherit"
                underline="none"
                component={NavLink}
                to="/login"
              >
                <Typography>Login</Typography>
              </Link>
              <Link
                color="inherit"
                underline="none"
                component={NavLink}
                to="/register"
              >
                <Typography>Register</Typography>
              </Link>
            </LinkBox>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
