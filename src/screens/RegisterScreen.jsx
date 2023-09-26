import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Copyright from 'components/Copyright';
import { useRegisterMutation } from 'redux/contacts';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToken } from 'redux/auth';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

export default function RegisterScreen() {
  const [formData, setFormData] = useState({ ...INITIAL_STATE });

  const [register] = useRegisterMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(state => ({ ...state, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const { data } = await register(formData);
    if (data) {
      dispatch(setToken(data));
      navigate('/contacts');
    }

    reset();
  };

  const reset = () => {
    setFormData(INITIAL_STATE);
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                name="email"
                label="Email Address"
                type="email"
                required
                fullWidth
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                value={formData.password}
                onChange={handleChange}
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
