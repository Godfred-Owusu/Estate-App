import React, { useContext, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../context/userDetailContext";
import { useMutation } from "react-query";
import { createUser } from "../../utils/api";

const Layout = () => {
  const { isAuthenticated, user, getAccessTokenWithPopup } = useAuth0();
  const { setUserDetails } = useContext(UserDetailContext);

  const { mutate } = useMutation({
    mutationKey: [user?.email],
    mutationFn: () => createUser(user?.email),
  });

  useEffect(() => {
    const getTokenAndRegister = async () => {
      try {
        const res = await getAccessTokenWithPopup({
          authorizationParams: {
            audience: import.meta.env.VITE_REACT_APP_AUTH0_AUDIENCE_URL,
            // audience: "http://localhost:8000",
            scope: "openid profile email",
          },
        });
        localStorage.setItem("access_token", res);
        setUserDetails((prev) => ({ ...prev, token: res }));
        console.log(res);
      } catch (error) {
        throw new Error(error.message);
      }
    };

    isAuthenticated && getTokenAndRegister();
  }, [isAuthenticated]);
  return (
    <>
      <div className="bg-black overflow-hidden">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
