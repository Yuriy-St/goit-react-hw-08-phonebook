import { Route, Routes } from 'react-router-dom';
import PublicRoute from 'components/PublicRoute';
import PrivateRoute from 'components/PrivateRoute';
import Layout from 'components/Layout';
import LoginScreen from 'screens/LoginScreen';
import RegisterScreen from 'screens/RegisterScreen';
import HomeScreen from 'screens/HomeScreen';
import NotFoundScreen from 'screens/NotFoundScreen';
import PhoneBookScreen from 'screens/PoneBookScreen';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PrivateRoute component={<HomeScreen />} />} />
        <Route
          path="login"
          element={<PublicRoute component={<LoginScreen />} />}
        />
        <Route
          path="register"
          element={<PublicRoute component={<RegisterScreen />} />}
        />

        <Route
          path="contacts"
          element={<PrivateRoute component={<PhoneBookScreen />} />}
        />
        <Route path="*" element={<NotFoundScreen replace />} />
      </Route>
    </Routes>
  );
}
