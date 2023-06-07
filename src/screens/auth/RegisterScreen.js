/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import React, {useContext} from 'react';
import Background from '../../Background';
import LinearGradient from 'react-native-linear-gradient';
import {Image} from 'react-native';
import {AuthContext} from '../../context/AuthContext';
import {useState} from 'react';
import Spinner from 'react-native-loading-spinner-overlay/lib';
const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const {register, isLoading} = React.useContext(AuthContext);
  // console.log(register);
  return (
    <Background>
      <Spinner visible={isLoading} />
      <View style={{alignItems: 'center', width: 460}}>
        <View
          style={{
            backgroundColor: 'white',
            height: 720,
            width: 460,
            borderTopLeftRadius: 120,
            paddingTop: 120,
            marginTop: 90,
          }}>
          <Text
            style={{
              fontSize: 25,
              color: 'gray',
              fontWeight: 'bold',
              marginRight: 65,
              marginBottom: 10,
              textAlign: 'center',
            }}>
            Đăng ký tài khoản
            <Image
              style={styles.sizeimg}
              source={require('../../assets/img/Mobile-Tech-Logo.png')}
            />
          </Text>
          <View style={{marginLeft: 16}}>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={text => setEmail(text)}
              placeholder="Email người dùng"
            />
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={text => setUsername(text)}
              placeholder="Tên người dùng"
            />
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder="Mật khẩu"
            />
            <LinearGradient colors={['#ff416c', '#ff4b2b']} style={styles.rgb}>
              <TouchableOpacity
                onPress={() => {
                  register(email, username, password);
                }}>
                <Text style={styles.submit}>Đăng ký</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          <View style={styles.regitser}>
            <Text style={styles.text}>Bạn đã có tài khoản?</Text>
            <TouchableOpacity
              onPress={() => navigation?.navigate('LoginScreen')}>
              <Text style={styles.subregit}>Đăng Nhập</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              alignItems: 'flex-end',
              width: '78%',
              paddingRight: 16,
              marginBottom: 200,
            }}></View>
        </View>
      </View>
    </Background>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  sizeimg: {
    width: 70,
    height: 70,
  },
  title: {
    fontSize: 30,
    color: 'red',
    textAlign: 'center',
    fontWeight: '700',
  },
  input: {
    padding: 15,
    fontSize: 16,
    marginTop: 10,
    width: 380,
    backgroundColor: '#eee',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  rgb: {
    marginTop: 10,
    borderRadius: 10,
    width: 380,
  },
  regitser: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
    marginRight: 30,
  },
  submit: {
    padding: 17,
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  text: {
    fontSize: 15,
  },
  subregit: {
    color: 'red',
    fontSize: 15,
    marginLeft: 5,
    fontWeight: 700,
  },
});
