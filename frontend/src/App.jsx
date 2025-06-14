import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';
import { validateUser } from "./api/auth";
import Home from './components/pages/Home';
import { SignUp } from './components/pages/SignUp';
import { SignIn } from './components/pages/SignIn';
import Create from './components/template/Create';

import './App.css'
import TemplateProvider from './components/context/TemplateContext';
import Template from './components/template/Template';
import Terms from './components/pages/Terms';
import Privacy from './components/pages/Privacy';
import Footer from './components/Footer';

export const AuthContext = createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleValidateUser = async () => {
    try {
      const res = await validateUser();
      if (res.data.success) {
        setIsSignedIn(true);
      } else {
        console.log("no user");
      }
    } catch (e) {
      console.log(e);
    }
    
    setLoading(false);
  };

  useEffect(() => {
    handleValidateUser();
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
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
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
          <Footer />
        </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
