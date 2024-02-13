import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Suspense, lazy, useEffect } from 'react';
import SharedLayout from './sharedLayout';
import Loader from './loader';
import { apiRefreshUser } from '../redux/auth/operations';

import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';

const HomePage = lazy(() => import('../pages/home'));
const RegisterPage = lazy(() => import('../pages/register'));
const LoginPage = lazy(() => import('../pages/login'));
const NotFoundPage = lazy(() => import('../pages/notFound'));
const ContactsPage = lazy(() => import('../pages/contacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <LoginPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <RegisterPage />
              </RestrictedRoute>
            }
          />
          <Route path="/pageNotFound" element={<NotFoundPage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/pageNotFound" />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
