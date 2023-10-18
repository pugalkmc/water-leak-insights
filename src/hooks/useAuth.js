import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext'; // Replace with the correct path to your AuthContext

const useAuth = () => {
  const { user, login, logout } = useContext(AuthContext);

  return {
    user,
    login,
    logout,
  };
};

export default useAuth;
