import { Navigate } from 'react-router-dom';

export default function PublicRoute({
  redirectTo = '/',
  restricted = false,
  component: Component,
}) {
  // const { token } = useSelector(state => state.auth);
  const token = true;
  const shouldRedirect = token && restricted;

  const content = shouldRedirect ? <Navigate to={redirectTo} /> : Component;
  return content;
}
