/* eslint-disable react-native/no-inline-styles */
import {Text, View, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native';
const HomeScreen = props => {
  return (
    <SafeAreaView style={{height: '100%', backgroundColor: '#F8F8FF'}}>
      <View style={{marginTop: 100}}>
        <Text
          style={{
            fontSize: 30,
            color: '#757575',
            fontWeight: 600,
            marginRight: 150,
            marginLeft: 20,
          }}>
          Chào mừng bạn đến với
        </Text>
        <Text
          style={{
            fontSize: 50,
            color: 'red',
            fontWeight: 600,
            marginRight: 20,
            marginLeft: 100,
          }}>
          Mobile Tech
        </Text>
      </View>
      <View>
        <Image
          source={require('./assets/img/application.png')}
          style={{width: 410}}
        />
      </View>
      <View style={{position: 'absolute', bottom: 70}}>
        <TouchableOpacity
          style={{
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 80,
            marginLeft: 90,
            backgroundColor: '#ff3f40',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.41,
            shadowRadius: 9.11,
            elevation: 14,
          }}
          onPress={() => {
            props.navigation.navigate('LoginScreen');
          }}>
          <Text style={{fontSize: 20, color: '#fff'}}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
