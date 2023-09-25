import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="sm">
        <Outlet />
      </Container>
    </>
  );
}
