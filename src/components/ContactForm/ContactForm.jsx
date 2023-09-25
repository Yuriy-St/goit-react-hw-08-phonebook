import { useFormik } from 'formik';
import { nanoid } from 'nanoid';

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

  const nameInputId = nanoid();
  const numberInputId = nanoid();

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
          autoComplete="given-name"
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
        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Add contact
        </Button>
      </Box>
    </Box>

    // <Formik
    //   initialValues={initialValues}
    //   validationSchema={validationSchema}
    //   onSubmit={(contact, { resetForm }) => {
    //     handleSubmit(contact);
    //     resetForm();
    //   }}
    // >
    //   {({ errors }) => (
    //     <StyledForm>
    //       <div>
    //         <Label htmlFor={nameInputId}>Name</Label>
    //         <Input id={nameInputId} type="text" name="name" />
    //         {errors.name && (
    //           <ErrorMessage name="name" component={ValidationMessage} />
    //         )}
    //       </div>

    //       <div>
    //         <Label htmlFor={numberInputId}>Number</Label>
    //         <Input id={numberInputId} type="text" name="phone" />
    //         {errors.phone && (
    //           <ErrorMessage name="phone" component={ValidationMessage} />
    //         )}
    //       </div>

    //       <ButtonSubmit type="submit">Add contact</ButtonSubmit>
    //     </StyledForm>
    //   )}
    // </Formik>
  );
}
