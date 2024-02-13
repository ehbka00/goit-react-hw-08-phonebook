import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/contactsSlice';
import { Box, FormControl, FormLabel, Input } from '@chakra-ui/react';

const Filter = () => {
  const dispatch = useDispatch();

  const handleOnChange = event => {
    const filter = event.target.value;
    dispatch(setFilter(filter));
  };

  return (
    <>
      <Box
        w={500}
        display={'flex'}
        alignItems={'center'}
        flexDirection={'column'}
      >
        <FormControl px={5} py={5}>
          <FormLabel htmlFor="email">Find contacts by name:</FormLabel>
          <Input
            id="filter"
            name="filter"
            type="filter"
            variant="filled"
            onChange={handleOnChange}
          />
        </FormControl>
      </Box>
    </>
  );
};

export default Filter;
