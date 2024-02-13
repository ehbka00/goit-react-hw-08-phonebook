import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { apiLoginUser } from '../../redux/auth/operations';

const Login = () => {
  const [isError, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();

  const handleOnSubmit = evet => {
    evet.preventDefault();
    dispatch(apiLoginUser({ email, password }))
      .then(response => {
        const status = response.meta.requestStatus;
        if (status === 'rejected')
          throw new Error('Please, check your credentials.');

        setEmail('');
        setPassword('');
        navigate('/', { replace: true });
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
      <Box bg="white" p={6} rounded="md" w={500}>
        <form onSubmit={handleOnSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl isRequired isInvalid={isError}>
              <FormLabel htmlFor="email">Email Address</FormLabel>
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

            <Button type="submit" colorScheme="orange" width="full" pt>
              Send
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export default Login;
