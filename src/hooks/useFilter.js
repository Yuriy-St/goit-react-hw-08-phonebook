import { selectFilter } from 'redux/selectors';

const { useMemo } = require('react');
const { useSelector } = require('react-redux');

export default function useFilter(contacts) {
  const filter = useSelector(selectFilter);

  const filteredContacts = useMemo(() => {
    const filterNormalized = filter.toLowerCase();

    const filtered = filter
      ? contacts.filter(({ name }) =>
          name.toLowerCase().includes(filterNormalized)
        )
      : contacts;

    return filtered || [];
  }, [contacts, filter]);

  return filteredContacts;
}
