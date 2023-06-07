/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';
import {LinearGradient} from 'react-native-linear-gradient';
import Skeleton from '../../Skeleton';

const LoadingShipDetails = () => {
  return (
    <>
      <View
        style={{
          marginTop: 110,
          marginHorizontal: 15,
          backgroundColor: '#F8F8FF',
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
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Skeleton
            height={25}
            width={200}
            style={{marginVertical: 5, borderRadius: 5}}
          />
        </View>
        <Skeleton
          height={20}
          width={210}
          style={{marginVertical: 5, borderRadius: 5}}
        />
        <Skeleton
          height={20}
          width={190}
          style={{marginVertical: 5, borderRadius: 5}}
        />
        <Skeleton
          height={20}
          width={150}
          style={{marginVertical: 5, borderRadius: 5}}
        />
        <Skeleton
          height={20}
          width={180}
          style={{marginVertical: 5, borderRadius: 5}}
        />
        <Skeleton
          height={20}
          width={200}
          style={{marginVertical: 5, borderRadius: 5}}
        />
        <Skeleton
          height={20}
          width={250}
          style={{marginVertical: 5, borderRadius: 5}}
        />
      </View>
      <View
        style={{
          marginTop: 5,
          marginHorizontal: 15,
          backgroundColor: '#F8F8FF',
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
        <Skeleton
          height={15}
          width={260}
          style={{marginVertical: 5, borderRadius: 5}}
        />
        <Skeleton
          height={15}
          width={260}
          style={{marginVertical: 5, borderRadius: 5}}
        />
      </View>
      <View
        style={{
          marginTop: 5,
          marginHorizontal: 15,
          backgroundColor: '#F8F8FF',
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
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Skeleton
            height={100}
            width={100}
            style={{marginVertical: 5, borderRadius: 5}}
          />
          <View>
            <Skeleton
              height={25}
              width={180}
              style={{marginVertical: 5, borderRadius: 5}}
            />
            <Skeleton
              height={15}
              width={150}
              style={{marginVertical: 5, borderRadius: 5}}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Skeleton
            height={100}
            width={100}
            style={{marginVertical: 5, borderRadius: 5}}
          />
          <View>
            <Skeleton
              height={25}
              width={180}
              style={{marginVertical: 5, borderRadius: 5}}
            />
            <Skeleton
              height={15}
              width={150}
              style={{marginVertical: 5, borderRadius: 5}}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default LoadingShipDetails;
