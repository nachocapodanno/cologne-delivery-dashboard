const SessionManager = {
    setSession: (user:any) => {
      const authUserString = JSON.stringify(user);
      localStorage.setItem('token', authUserString);
    },
    destroySession: () => {
     // localStorage.removeItem('auth_user');
      localStorage.removeItem('token');
    },
    getSession: () => {
      const authUserString = localStorage.getItem('token');
      if (authUserString) {
        return JSON.parse(authUserString);
      }
      return null;
    },
  };

  export default SessionManager;
