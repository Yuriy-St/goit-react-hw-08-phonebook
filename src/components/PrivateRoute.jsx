import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuth } from 'redux/selectors';

export default function PrivateRoute({
  redirectTo = '/login',
  component: Component,
}) {
  const auth = useSelector(selectAuth);
  return auth.isLoggedIn ? Component : <Navigate to={redirectTo} />;
}
