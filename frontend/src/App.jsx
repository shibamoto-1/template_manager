import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';
import { getCurrentUser } from "./api/auth";
import { SignUp } from './components/pages/SignUp';
import { SignIn } from './components/pages/SignIn';
import Test from './components/pages/Test';
import Create from './components/pages/Create';

import './App.css'
import TemplateProvider from './components/context/TemplateContext';

export const AuthContext = createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser();

      if (res?.data.isLogin === true) {
        setIsSignedIn(true);
      } else {
        console.log("no current user");
      }
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleGetCurrentUser();
  }, []);

  const Private = ({ children }) => {
    if (!loading) {
      if (isSignedIn) {
        return children;
      } else {
        return <Navigate to="/signin" />;
      }
    } else {
      // API通信中にNavigateに行かないようにする
      return <></>;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
        isSignedIn,
        setIsSignedIn,
      }}
    >
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route
              path="/"
              element={
                <Private>
                  <TemplateProvider>
                    <Test />
                  </TemplateProvider>
                </Private>
              }
            />
            <Route
              path="/new"
              element={
                <Private>
                  <TemplateProvider>
                    <Create />
                  </TemplateProvider>
                </Private>
              }
            />
          </Routes>
        </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
