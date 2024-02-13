import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/contacts/operations';
import { useEffect } from 'react';
import {
  selectFilteredContacts,
  selectIsLoading,
  selectError,
} from '../../redux/contacts/selectors';
import { Button, WrapItem, Wrap } from '@chakra-ui/react';

const ContactList = () => {
  let contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteOnClick = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <Wrap display={'flex'} direction={'column'}>
      {!isLoading &&
        !error &&
        contacts.length > 0 &&
        contacts.map(contact => {
          return (
            <WrapItem
              key={contact.id}
              w={500}
              justifyContent={'space-around'}
              alignItems={'center'}
              pt={3}
            >
              <span style={{ width: '300px' }}>
                {contact.name} : {contact.number}
              </span>
              <Button
                type="button"
                onClick={() => handleDeleteOnClick(contact.id)}
              >
                Delete
              </Button>
            </WrapItem>
          );
        })}
    </Wrap>
  );
};

export default ContactList;
