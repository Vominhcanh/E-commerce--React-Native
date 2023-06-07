/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
import Skeleton from '../../Skeleton';

const LoadingCategory = () => {
  return (
    <View style={{flexDirection: 'row', marginVertical: 20}}>
      <Skeleton
        height={50}
        width={100}
        style={{borderRadius: 10, marginHorizontal: 10}}
      />
      <Skeleton
        height={50}
        width={100}
        style={{borderRadius: 10, marginHorizontal: 10}}
      />
      <Skeleton
        height={50}
        width={100}
        style={{borderRadius: 10, marginHorizontal: 10}}
      />
      <Skeleton
        height={50}
        width={100}
        style={{borderRadius: 10, marginHorizontal: 10}}
      />
      <Skeleton
        height={50}
        width={100}
        style={{borderRadius: 10, marginHorizontal: 10}}
      />
      <Skeleton
        height={50}
        width={100}
        style={{borderRadius: 10, marginHorizontal: 10}}
      />
    </View>
  );
};

export default LoadingCategory;
