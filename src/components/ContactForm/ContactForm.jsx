import { useFormik } from 'formik';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { isValidContact, validationSchema } from './validation';

import {
  useAddContactMutation,
  useGetContactsQuery,
} from 'redux/contacts/contactsAPI';

export default function ContactForm() {
  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleSubmit = ({ name, number }) => {
    if (!isValidContact(name, contacts)) return;
    addContact({ name, number });
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
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
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          id="number"
          name="number"
          label="Number"
          value={formik.values.number}
          fullWidth
          onChange={formik.handleChange}
          error={formik.touched.number && Boolean(formik.errors.number)}
          helperText={formik.touched.number && formik.errors.number}
        />
        <Button type="submit" variant="contained" sx={{ mt: 1, mb: 2 }}>
          Add contact
        </Button>
      </Box>
    </Box>
  );
}
