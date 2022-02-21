import { useAuth0 } from '@auth0/auth0-react';
import { FC, useEffect } from 'react';

const withAuth = (Component: FC) => {
  const ProtectedComponent: FC = (props) => {
    const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
    useEffect(() => {
      if (!isLoading && !isAuthenticated) loginWithRedirect();
    }, [isAuthenticated, isLoading, loginWithRedirect]);
    return <Component {...props} />;
  };
  return ProtectedComponent;
};

export default withAuth;
