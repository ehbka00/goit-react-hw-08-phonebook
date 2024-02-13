import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Button,
  Flex,
  useToast,
  FormControl,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';
import { apiRegisterUser } from '../../redux/auth/operations';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setError] = useState(false);
  const toast = useToast();

  const handleOnSubmit = event => {
    event.preventDefault();

    dispatch(apiRegisterUser({ name, email, password }))
      .then(response => {
        const status = response.meta.requestStatus;
        if (status === 'rejected')
          throw new Error('Please, check your credentials.');

        setName('');
        setEmail('');
        setPassword('');
      })
      .catch(error => {
        setError(true);
        toast({
          title: `${error.message}`,
          status: 'error',
          position: 'top',
          isClosable: true,
          duration: 4000,
        });
      });
  };

  const handleOnChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  return (
    <Flex align="center" justify="center" h="90vh">
      <Box bg="#e3cbb7" p={6} rounded="md" w={500}>
        <form onSubmit={handleOnSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl isRequired isInvalid={isError}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                name="name"
                type="name"
                variant="filled"
                onChange={handleOnChange}
                value={name}
              />
            </FormControl>
            <FormControl isRequired isInvalid={isError}>
              <FormLabel htmlFor="email">Email address</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                variant="filled"
                onChange={handleOnChange}
                value={email}
              />
            </FormControl>
            <FormControl isRequired isInvalid={isError}>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                variant="filled"
                onChange={handleOnChange}
                value={password}
              />
            </FormControl>
            <Button type="submit" colorScheme="orange" width="full" mt={1}>
              Send
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export default Register;
