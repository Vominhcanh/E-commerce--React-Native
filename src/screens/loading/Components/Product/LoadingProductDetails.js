/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import Skeleton from '../../Skeleton';
const LoadingProductDetails = () => {
  return (
    <View>
      <View
        style={{
          paddingTop: 20,
          height: '100%',
          backgroundColor: '#F8F8FF',
        }}>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            paddingVertical: 10,
            marginHorizontal: 10,
            marginTop: 5,
            backgroundColor: '#F8F8FF',
            borderRadius: 20,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.41,
            shadowRadius: 1.11,
            elevation: 4,
          }}>
          <Skeleton height={300} width={300} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <View>
            <Skeleton
              height={25}
              width={200}
              style={{marginTop: 10, borderRadius: 5}}
            />
            <Skeleton
              height={20}
              width={160}
              style={{marginTop: 10, borderRadius: 5}}
            />
            <Skeleton
              height={15}
              width={160}
              style={{marginTop: 10, borderRadius: 5}}
            />
            <Skeleton
              height={15}
              width={160}
              style={{marginTop: 10, borderRadius: 5}}
            />
            <Skeleton
              height={15}
              width={160}
              style={{marginTop: 10, borderRadius: 5}}
            />
          </View>
          <Skeleton
            height={20}
            width={160}
            style={{marginTop: 10, borderRadius: 5}}
          />
        </View>
        <View style={{marginHorizontal: 10}}>
          <Skeleton
            height={20}
            width={200}
            style={{marginTop: 10, borderRadius: 5}}
          />
          <Skeleton
            height={10}
            width={390}
            style={{marginTop: 10, borderRadius: 5}}
          />
          <Skeleton
            height={10}
            width={390}
            style={{marginTop: 10, borderRadius: 5}}
          />
          <Skeleton
            height={10}
            width={390}
            style={{marginTop: 10, borderRadius: 5}}
          />
          <Skeleton
            height={10}
            width={390}
            style={{marginTop: 10, borderRadius: 5}}
          />
          <Skeleton
            height={10}
            width={390}
            style={{marginTop: 10, borderRadius: 5}}
          />
          <Skeleton
            height={10}
            width={390}
            style={{marginTop: 10, borderRadius: 5}}
          />
        </View>
      </View>
    </View>
  );
};

export default LoadingProductDetails;
