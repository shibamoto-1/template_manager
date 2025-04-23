import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';
import { getCurrentUser } from "./api/auth";
import { SignUp } from './components/pages/SignUp';
import { SignIn } from './components/pages/SignIn';
import Test from './components/pages/Test';
import Template from './components/pages/Template';

import './App.css'

export const AuthContext = createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const handleGetCurrentUser = async () => {

    try {
      const res = await getCurrentUser();

      if (res?.data.isLogin === true) {
        setIsSignedIn(true);
        setCurrentUser(res?.data.data);
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
        return <Navigate to="signin" />;
      }
    } else {
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
        currentUser,
        setCurrentUser,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/test" element={<Test />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/"
            element={
              <Private>
                <Template />
              </Private>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
