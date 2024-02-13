import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import UserMenu from '../userMenu';

import css from './sharedLayout.module.css';
import { useSelector } from 'react-redux';
import { selectorIsLoggedIn } from '../../redux/auth/selectors';

const SharedLayout = () => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  return (
    <div>
      <header>
        <div className={css.wrapper}>
          <div className={css.header}>
            <NavLink className="" to="/">
              Home
            </NavLink>
            {isLoggedIn && (
              <NavLink className="" to="/contacts">
                Contacts
              </NavLink>
            )}
          </div>
          <UserMenu />
        </div>
      </header>

      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
