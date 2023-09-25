import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Link } from '@mui/material';
import { LinkBox } from './Header.styled';

export default function ButtonAppBar() {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }} component="nav">
          <LinkBox>
            <Link color="inherit" underline="none" component={NavLink} to="/">
              <Typography>Home</Typography>
            </Link>
            <Link
              color="inherit"
              underline="none"
              component={NavLink}
              to="/contacts"
            >
              <Typography>Contacts</Typography>
            </Link>
          </LinkBox>
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
