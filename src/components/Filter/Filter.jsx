import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/selectors';
import { Box, TextField } from '@mui/material';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <Box mb={2}>
      <TextField
        value={filter}
        size="small"
        onChange={handleChange}
        label="Filter by name"
      />
    </Box>
  );
}
