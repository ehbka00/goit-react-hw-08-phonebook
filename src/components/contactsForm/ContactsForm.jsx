import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import { useFormik } from 'formik';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  useToast,
} from '@chakra-ui/react';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const toast = useToast();
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    onSubmit: values => {
      if (isContactDuplicate(values.name)) {
        toast({
          title: values.name + ' is already in contacts.',
          status: 'warning',
          isClosable: true,
          duration: 3000,
          position: 'top',
        });
        return;
      }

      dispatch(addContact(values));
      formik.resetForm();
    },
  });

  const isContactDuplicate = name => {
    return contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  return (
    <Box w={500} borderRadius={10} py={3}>
      <form onSubmit={formik.handleSubmit}>
        <FormControl isRequired px={5}>
          <FormLabel htmlFor="email">Name</FormLabel>
          <Input
            id="name"
            name="name"
            type="name"
            variant="filled"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </FormControl>
        <FormControl isRequired px={5}>
          <FormLabel htmlFor="number">Phone</FormLabel>
          <Input
            id="number"
            name="number"
            type="number"
            variant="filled"
            onChange={formik.handleChange}
            value={formik.values.number}
          />
        </FormControl>
        <Flex justifyContent={'center'} mt={5}>
          <Button type="submit" colorScheme="orange" mt={15} w={140}>
            Add contact
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default ContactForm;
