import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({
  redirectTo = '/',
  restricted = false,
  component: Component,
}) {
  // const { token } = useSelector(state => state.auth);
  const token = true;
  const shouldRedirect = token && restricted;
  const redirect = <div>Redirected</div>;

  const isRedirected = shouldRedirect ? true : false;
  const content = shouldRedirect ? redirect : Component;
  return content;
}
