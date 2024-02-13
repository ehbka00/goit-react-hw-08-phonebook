import { Flex, Link as ChakraLink, Button } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link as ReactRouterLink } from 'react-router-dom';
import { selectorIsLoggedIn, selectorName } from '../../redux/auth/selectors';
import { useDispatch } from 'react-redux';
import { apiLogoutUser } from '../../redux/auth/operations';

import css from './userMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  const usersName = useSelector(selectorName);

  const handleOnSubmit = event => {
    event.preventDefault();

    dispatch(apiLogoutUser());
  };

  return (
    <div className={css.wrapper}>
      {isLoggedIn && (
        <p>
          Hello, <b>{usersName}</b>
        </p>
      )}
      <Flex justify="space-between" w={175}>
        {isLoggedIn ? (
          <Button
            size="md"
            onClick={handleOnSubmit}
            w={68}
            h={38}
            bg="#dd6b20"
            textColor="white"
            variant="link"
            style={{ textDecoration: 'none' }}
          >
            Log out
          </Button>
        ) : (
          <>
            <ChakraLink
              as={ReactRouterLink}
              to="/login"
              color="orange"
              w={68}
              h={38}
              bg="#dd6b20"
              textColor="white"
              borderRadius={5}
              textAlign="center"
              display="flex"
              alignItems="center"
              justifyContent="center"
              textDecoration="none"
              cursor="pointer"
              style={{ textDecoration: 'none' }}
            >
              Log in
            </ChakraLink>
            <ChakraLink
              as={ReactRouterLink}
              to="/register"
              color="orange"
              w={68}
              h={38}
              bg="#dd6b20"
              textColor="white"
              borderRadius={5}
              textAlign="center"
              display="flex"
              alignItems="center"
              justifyContent="center"
              textDecoration="none"
              cursor="pointer"
              style={{ textDecoration: 'none' }}
            >
              Sign up
            </ChakraLink>
          </>
        )}
      </Flex>
    </div>
  );
};

export default UserMenu;
