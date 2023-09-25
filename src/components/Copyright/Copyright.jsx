const { Typography } = require('@mui/material');

export default function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      GoIT PhoneBook {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
