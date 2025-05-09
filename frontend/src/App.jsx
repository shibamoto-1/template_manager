import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';
import { getCurrentUser } from "./api/auth";
import Home from './components/pages/Home';
import { SignUp } from './components/pages/SignUp';
import { SignIn } from './components/pages/SignIn';
import Create from './components/template/Create';

import './App.css'
import TemplateProvider from './components/context/TemplateContext';
import Template from './components/template/Template';

export const AuthContext = createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleGetCurrentUser = async () => {
    try {
      const res = await getCurrentUser();

      if (res.status === 200) {
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
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route
              path="/template"
              element={
                <Private>
                  <TemplateProvider>
                    <Template />
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
