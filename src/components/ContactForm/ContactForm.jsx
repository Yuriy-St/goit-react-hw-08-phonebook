import { useFormik } from 'formik';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { isValidContact, validationSchema } from './validation';

import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsApi';

export default function ContactForm() {
  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleSubmit = ({ name, phone }) => {
    if (!isValidContact(name, contacts)) return;
    addContact({ name, phone });
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
    },
    validationSchema: validationSchema,
    onSubmit: (contact, { resetForm }) => {
      handleSubmit(contact);
      resetForm();
    },
  });

  return (
    <Box maxWidth="xs">
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: 2,
          maxWidth: 600,
        }}
      >
        <TextField
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          fullWidth
          autoFocus
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          id="phone"
          name="phone"
          label="Number"
          value={formik.values.phone}
          fullWidth
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        <Button type="submit" variant="contained" sx={{ mt: 1, mb: 2 }}>
          Add contact
        </Button>
      </Box>
    </Box>
  );
}
