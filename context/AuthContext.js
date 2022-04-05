import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from 'undefined';
import {SIGNUP, LOGIN} from '../config/urls';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const register = (name, email, password, confirmPassword) => {
    setIsLoading(true);
    axios
      .post(`${SIGNUP}`, {
        name,
        email,
        password,
        confirmPassword,
      })
      .then((res) => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
      })
      .catch((e) => {
        console.log(`Register Error ${e}`);
        setIsLoading(false);
      });
  };

  const login = (email, password) => {
    setIsLoading(true);

    axios
      .post(`${LOGIN}`, {
        email,
        password,
      })
      .then((res) => {
        let userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(`Login Error ${e}`);
        setIsLoading(false);
      });
  };

  const logout = () => {
    try {
      AsyncStorage.removeItem('userInfo');
      setUserInfo({});
      setIsLoading(false);
    } catch (e) {
      console.log(`logout error ${e}`);
      setIsLoading(false);
    }
  };

  const isLoggedIn = async () => {
    try {
      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }
    } catch (e) {
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        register,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
