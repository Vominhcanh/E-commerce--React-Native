/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image} from 'react-native';
const Background = ({children}) => {
  return (
    <>
      <View>
        <Image source={require('./assets/img/2.jpg')} />
        <View style={{position: 'absolute'}}>{children}</View>
      </View>
    </>
  );
};

export default Background;
