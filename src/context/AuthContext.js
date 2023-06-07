/* eslint-disable no-shadow */
import axios from 'axios';
import React, {createContext, useState} from 'react';
import {API} from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
// import {Alert} from 'react-native';
// import {Toast} from 'react-native-toast-message/lib/src/Toast';
export const AuthContext = createContext();
export const AuthProvider = ({children, navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfor, setUserInfor] = useState({});
  const [splashLoading, setSplashLoading] = useState(false);
  const register = (email, username, password) => {
    setIsLoading(true);
    axios
      .post(`${API}/users/register`, {email, username, password})
      .then(res => {
        let userInfor = res.data;
        setUserInfor(userInfor);
        AsyncStorage.setItem('userInfor', JSON.stringify(userInfor));
        setIsLoading(false);
      })
      .catch(() => {
        alert('Đăng ký không thành công');
        setIsLoading(false);
      });
  };
  const login = (email, password) => {
    setIsLoading(true);
    axios
      .post(`${API}/users/login`, {email, password})
      .then(res => {
        let userInfor = res.data;
        setUserInfor(userInfor);
        AsyncStorage.setItem('userInfor', JSON.stringify(userInfor));
        setIsLoading(false);
        console.log(userInfor);
      })
      .catch(e => {
        console.log('Lỗi', e.msg);
        setIsLoading(false);
      });
  };

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('userInfor');
      setUserInfor({});
      navigation.navigate('LoginScreen');
    } catch (e) {
      console.log(e);
    }
  };
  const isLoggedIn = async () => {
    try {
      setSplashLoading(true);
      let userInfor = await AsyncStorage.getItem('userInfor');
      userInfor = JSON.parse(userInfor);
      if (userInfor) {
        setUserInfor(userInfor);
      }
      setSplashLoading(false);
    } catch (e) {
      console.log(e);
      setSplashLoading(false);
    }
  };
  useEffect(() => {
    isLoggedIn();
  }, []);
  return (
    <AuthContext.Provider
      value={{login, register, logout, isLoading, userInfor}}>
      {children}
    </AuthContext.Provider>
  );
};
