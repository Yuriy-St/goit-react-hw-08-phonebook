// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({
  redirectTo = '/login',
  component: Component,
}) {
  // const { token } = useSelector(state => state.auth);
  const token = true;
  return token ? Component : <Navigate to={redirectTo} />;
}
