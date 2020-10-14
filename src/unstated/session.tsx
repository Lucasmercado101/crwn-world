import { useState } from 'react';
import { createContainer } from 'unstated-next';

function useSession() {
  const [session, setSession] = useState<boolean>(
    localStorage.getItem('loggedIn') === 'true' ? true : false
  );

  const logIn = () => setSession(true);
  const logOut = () => setSession(false);
  return { session, logIn, logOut };
}

const userSession = createContainer(useSession);
export default userSession;
