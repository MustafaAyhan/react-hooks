import React, { useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  logoutHandler: () => {},
  loginHandler: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  useEffect(() => {
    const storageUserLogIn = localStorage.getItem("userLogIn");
    if (storageUserLogIn === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  const logoutHandler = () => {
    localStorage.removeItem("userLogIn");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("userLogIn", "1");
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
