/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import Skeleton from '../../Skeleton';

const LoadingShiper = () => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 10,
          marginHorizontal: 10,
        }}>
        <Skeleton height={20} width={100} style={{borderRadius: 5}} />
        <Skeleton height={30} width={100} style={{borderRadius: 5}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 10,
          marginHorizontal: 15,
        }}>
        <Skeleton height={20} width={100} style={{borderRadius: 5}} />
        <Skeleton height={30} width={100} style={{borderRadius: 5}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 15,
        }}>
        <Skeleton height={20} width={100} style={{borderRadius: 5}} />
        <Skeleton height={30} width={100} style={{borderRadius: 5}} />
      </View>
    </>
  );
};

export default LoadingShiper;
