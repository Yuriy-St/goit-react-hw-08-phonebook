import Contact from 'components/Contact/Contact';
import { ContactListStyled } from './ContactList.styled';
import { useGetContactsQuery } from 'redux/contacts/contactsApi';
import useFilter from 'hooks/useFilter';

export default function ContactList() {
  const {
    data: contacts,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetContactsQuery();

  const filteredContacts = useFilter(contacts);

  if (isLoading || isFetching) return <div>Loading...</div>;

  if (isSuccess) {
    return (
      <>
        <ContactListStyled>
          {filteredContacts.map(({ id, name, phone }) => (
            <Contact key={id} id={id} name={name} phone={phone} />
          ))}
        </ContactListStyled>
      </>
    );
  }

  if (isError) return <div>{error.message}</div>;
}
