/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';

const Cart = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 250,
      }}>
      <Text style={{fontSize: 30}}>Cart empty !!!</Text>
    </View>
  );
};

export default Cart;
