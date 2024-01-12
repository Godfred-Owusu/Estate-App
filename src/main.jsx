import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      // domain={import.meta.env.VITE_REACT_APP_AUTH0_AUDIENCE}
      // clientId={import.meta.env.VITE_REACT_APP_AUTH0_CLIENTID}
      // authorizationParams={{
      //   redirect_uri: import.meta.env.VITE_REACT_APP_AUTH0_REDIRECT_URL,
      // }}
      // audience={import.meta.env.VITE_REACT_APP_AUTH0_AUDIENCE_URL}

      domain="dev-5c2e8z03peifr7kb.us.auth0.com"
      clientId="NTlrDH6sF8tvYNq7BmmWYzaxjHnSUdc3"
      authorizationParams={{
        redirect_uri: "http://localhost:5173",
      }}
      audience="http://localhost:8000"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
