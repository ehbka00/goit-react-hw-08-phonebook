import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectorIsLoggedIn } from '../../redux/auth/selectors';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectorIsLoggedIn);

  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
