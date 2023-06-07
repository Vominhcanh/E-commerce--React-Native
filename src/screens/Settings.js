/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {SafeAreaView} from 'react-native';
import {Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Settings = () => {
  const {userInfor, logout} = useContext(AuthContext);
  const formatter = new Intl.DateTimeFormat('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
  return (
    <>
      <SafeAreaView style={{backgroundColor: '#F8F8FF', height: '100%'}}>
        <View
          style={{
            backgroundColor: '#F8F8FF',
            position: 'absolute',
            left: 0,
            right: 0,
          }}>
          <View
            style={{
              backgroundColor: '#F8F8FF',
              marginTop: 100,
              marginHorizontal: 20,
              borderRadius: 20,
              padding: 20,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.41,
              shadowRadius: 9.11,
              elevation: 14,
            }}>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{height: 100, width: 100}}
                source={{uri: userInfor?.user?.image}}
              />
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  fontWeight: 700,
                  marginTop: 10,
                }}>
                THÔNG TIN NGƯỜI DÙNG
              </Text>
            </View>
            <View style={{marginTop: 20}}>
              <Text style={{paddingVertical: 5, fontSize: 16}}>
                Tên người dùng : {userInfor.user.name}
              </Text>
              <Text style={{paddingVertical: 5, fontSize: 16}}>
                Chức vụ : {userInfor.user.role}
              </Text>
              <Text style={{paddingVertical: 5, fontSize: 16}}>
                Email đăng ký : {userInfor.user.email}
              </Text>
              <Text style={{paddingVertical: 5, fontSize: 16}}>
                Ngày đăng ký tài khoản :
                {formatter.format(Date.parse(userInfor.user.createdAt))}
              </Text>
              <LinearGradient
                colors={['#ff416c', '#ff4b2b']}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginVertical: 50,
                  paddingVertical: 20,
                  borderRadius: 15,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 7,
                  },
                  shadowOpacity: 0.41,
                  shadowRadius: 9.11,
                  elevation: 14,
                }}>
                <TouchableOpacity onPress={logout}>
                  <Text style={{color: '#fff', fontSize: 18, fontWeight: 600}}>
                    ĐĂNG XUẤT
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Settings;
