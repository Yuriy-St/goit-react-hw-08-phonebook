import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function NotFoundScreen() {
  return (
    <Box mt={4} sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box>
        <Typography component="p" variant="h2">
          Oops...
        </Typography>
        <Typography component="p" variant="h2">
          Page not found!
        </Typography>
      </Box>
    </Box>
  );
}
