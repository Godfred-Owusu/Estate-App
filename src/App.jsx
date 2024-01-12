import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Webiste from "./Pages/Webiste";
import { Suspense, useState } from "react";
import Layout from "./components/Layout/Layout";
import Properties from "./Pages/Properties/Properties";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Property from "./Pages/Property/Property";
import { MantineProvider } from "@mantine/core";
import UserDetailContext from "./components/context/userDetailContext";
function App() {
  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null,
  });
  const queryClient = new QueryClient();
  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider>
          <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route element={<Layout />}>
                  <Route path="/" element={<Webiste />} />;
                  <Route path="/properties" element={<Properties />} />;
                  <Route
                    path="/properties/:propertyId"
                    element={<Property />}
                  />
                  ;
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
        </MantineProvider>
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UserDetailContext.Provider>
  );
}

export default App;
