import PropTypes from 'prop-types';
import {
  DataBlock,
  DeleteBtn,
  Name,
  Phone,
  StyledContact,
} from './Contact.styled';
import { useDeleteContactByIdMutation } from 'redux/contacts/contactsApi';
export default function Contact({ id, name, number }) {
  const [deleteContact] = useDeleteContactByIdMutation();

  return (
    <StyledContact>
      <DataBlock>
        <Name>{name}:</Name>
        <Phone>{number}</Phone>
      </DataBlock>
      <DeleteBtn type="button" onClick={() => deleteContact(id)}>
        Delete
      </DeleteBtn>
    </StyledContact>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
