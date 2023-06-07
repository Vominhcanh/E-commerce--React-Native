/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import {View, Text} from 'react-native';
import {React, useState, useEffect, useContext} from 'react';
import axios from 'axios';
import {API} from '../../../config';
import {AuthContext} from '../../context/AuthContext';

const OrderStatis = () => {
  const {userInfor} = useContext(AuthContext);
  const [statisall, setStatisAll] = useState('');
  const [statisping, setStatisPing] = useState('');
  const [statised, setStatisEd] = useState('');
  const [cancel, setCancel] = useState('');
  const orderStatuses = ['', 'Đang giao hàng', 'Đã giao hàng', 'Hủy đơn'];
  useEffect(() => {
    const fetchData = async () => {
      const {data: res} = await axios.get(`${API}/orders/all-order/`);
      const orders = res?.order.filter(
        item =>
          item?.shipBy?._id === userInfor?.user?._id &&
          orderStatuses.includes(item?.orderStatus),
      );
      setStatisAll(orders);
      setStatisPing(
        orders.filter(item => item?.orderStatus === 'Đang giao hàng'),
      );
      setStatisEd(orders.filter(item => item?.orderStatus === 'Đã giao hàng'));
      setCancel(orders.filter(item => item?.orderStatus === 'Hủy đơn'));
    };
    fetchData();
  }, []);
  return (
    <View>
      <View
        style={{
          backgroundColor: '#F8F8FF',
          marginTop: 5,
          marginHorizontal: 10,
          borderRadius: 10,
          paddingHorizontal: 20,
          paddingVertical: 20,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 7,
          },
          shadowOpacity: 0.41,
          shadowRadius: 9.11,
          elevation: 14,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            color: '#000',
            fontWeight: 700,
          }}>
          THỐNG KÊ ĐƠN GIAO
        </Text>
        <Text style={{fontSize: 16, color: '#000'}}>
          Tổng đơn giao : {statisall.length} đơn
        </Text>
        <Text style={{fontSize: 16, color: '#000'}}>
          Tổng đơn đang giao : {statisping.length} đơn
        </Text>
        <Text style={{fontSize: 16, color: '#000'}}>
          Tổng hủy đơn : {cancel.length} đơn
        </Text>
        <Text style={{fontSize: 16, color: '#000'}}>
          Tổng đơn đã giao : {statised.length} đơn
        </Text>
      </View>
    </View>
  );
};

export default OrderStatis;
