import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Copyright from 'components/Copyright';
import { useState } from 'react';
import { useLoginMutation } from 'redux/contacts';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setToken } from 'redux/auth';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export default function LoginScreen() {
  const [formData, setFormData] = useState({ ...INITIAL_STATE });

  const [login] = useLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData(state => ({ ...state, [name]: value }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const { data } = await login(formData);
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
      <CssBaseline />
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
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            type="email"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            value={formData.password}
            onChange={handleChange}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
