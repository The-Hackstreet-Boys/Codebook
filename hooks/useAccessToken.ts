import { useAuth0 } from '@auth0/auth0-react';
import { useEffect, useState } from 'react';

const useAccessToken = () => {
  const [accessToken, setAccessToken] = useState<string>();
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  useEffect(() => {
    const updateAccessToken = async () => {
      const response = await getAccessTokenSilently();
      setAccessToken(response);
    };

    updateAccessToken();
  }, [getAccessTokenSilently, isAuthenticated]);

  return accessToken;
};

export default useAccessToken;
