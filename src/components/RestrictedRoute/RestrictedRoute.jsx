import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectorIsLoggedIn } from '../../redux/auth/selectors';

const RestrictedRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);

  return isLoggedIn ? <Navigate to="/contacts" replace /> : children;
};

export default RestrictedRoute;
