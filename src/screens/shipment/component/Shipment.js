/* eslint-disable react-native/no-inline-styles */
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {API} from '../../../../config';
import {useNavigation} from '@react-navigation/native';
import LoadingShiper from '../../loading/Components/Shiper/LoadingShiper';
const Shipment = () => {
  const navigation = useNavigation();
  const [order, setOrder] = useState(null);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await axios.get(`${API}/orders/all-order/`);
      const data = res.data.order.filter(
        or => or?.orderStatus == 'Đã xác nhận',
      );
      setLoading(false);
      setOrder(data);
    };
    getData();
  }, []);
  const handleOnPress = id => {
    navigation.navigate('ShipmentDetails', {itemId: id});
  };
  return (
    <View
      style={{
        backgroundColor: '#F8F8FF',
        marginTop: 5,
        marginHorizontal: 10,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 7,
        },
        shadowOpacity: 0.21,
        shadowRadius: 5.11,
        elevation: 4,
      }}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 30,
            marginRight: 40,
          }}>
          <Text style={{fontWeight: 500, color: '#080707'}}>Tên đơn hàng</Text>
          <Text style={{fontWeight: 500, color: '#080707'}}>Chọn</Text>
        </View>
        {order ? (
          order.map((or, index) => {
            return (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginLeft: 30,
                  marginTop: 10,
                }}>
                <Text style={{width: 150}}>{or?.name}</Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#ff3f40',
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    borderRadius: 10,
                  }}
                  onPress={() => {
                    handleOnPress(or?._id);
                  }}>
                  <Text style={{color: '#fff', fontWeight: 600}}>
                    Xem chi tiết
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })
        ) : (
          <LoadingShiper />
        )}
      </View>
    </View>
  );
};

export default Shipment;
