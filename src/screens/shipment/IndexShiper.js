/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {React, useContext} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import Shipping from './component/Shipping';
import {useState} from 'react';
import Shiped from './component/Shiped';
import Shipment from './component/Shipment';
import axios from 'axios';
import {API} from '../../../config';
import {AuthContext} from '../../context/AuthContext';
import {useEffect} from 'react';
import ShipCancel from './component/ShipCancel';
const IndexShiper = ({navigation}) => {
  const {userInfor} = useContext(AuthContext);
  const [active, setActive] = useState(0);
  const hanldeClick = item => {
    setActive(item);
  };
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
    <>
      <SafeAreaView style={{height: '100%', backgroundColor: '#f8f8ff'}}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#F8F8FF',
              marginTop: 50,
              marginHorizontal: 10,
              borderRadius: 10,
              paddingHorizontal: 40,
              paddingVertical: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.41,
              shadowRadius: 9.11,
              elevation: 14,
            }}>
            <Image
              style={{height: 100, width: 100}}
              source={{uri: userInfor?.user?.image}}
            />
            <View>
              <Text style={{fontSize: 20, color: '#000', fontWeight: 700}}>
                {userInfor.user.name}
              </Text>
              <Text style={{fontSize: 17, marginTop: 10}}>
                {userInfor.user.role}
              </Text>
            </View>
          </View>
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#F8F8FF',
              marginTop: 5,
              marginHorizontal: 10,
              borderRadius: 10,
              paddingHorizontal: 10,
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
            <TouchableOpacity>
              <Text
                onPress={item => hanldeClick((item = 0))}
                style={[active == 0 ? styles.btnActive : styles.btn]}>
                ĐANG CHỜ
              </Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text
                onPress={item => hanldeClick((item = 1))}
                style={[active == 1 ? styles.btnActive : styles.btn]}>
                ĐANG GIAO
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                onPress={item => hanldeClick((item = 2))}
                style={[active == 2 ? styles.btnActive : styles.btn]}>
                HỦY ĐƠN
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                onPress={item => hanldeClick((item = 3))}
                style={[active == 3 ? styles.btnActive : styles.btn]}>
                ĐÃ GIAO
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          {active === 0 ? (
            <Shipment />
          ) : active === 1 ? (
            <Shipping />
          ) : active === 2 ? (
            <ShipCancel />
          ) : (
            <Shiped />
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default IndexShiper;
const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    backgroundColor: '#F8F8FF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#757575',
    padding: 10,
    fontWeight: 500,
    shadowColor: '#000',
    color: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 1.41,
    shadowRadius: 1.11,
    elevation: 4,
  },
  btnActive: {
    alignItems: 'center',
    backgroundColor: '#ff3f40',
    borderRadius: 8,
    color: '#fff',
    fontWeight: 500,
    padding: 10,
  },
});
