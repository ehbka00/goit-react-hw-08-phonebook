import { Box, Flex } from '@chakra-ui/react';
import ContactsForm from '../../components/contactsForm';
import ContactsList from '../../components/contactsList';
import Filter from 'components/filter/Filter';

const ContactsPage = () => {
  return (
    <Flex
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      mt={75}
    >
      <Box bgColor={'white'} borderRadius={15} pb={7}>
        <ContactsForm />
        <Filter />
        <ContactsList />
      </Box>
    </Flex>
  );
};

export default ContactsPage;
