/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import moment from 'moment';
import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {API} from '../../../../config';
import {AuthContext} from '../../../context/AuthContext';
import LinearGradient from 'react-native-linear-gradient';
import LoadingShipDetails from '../../loading/Components/Shiper/LoadingShipDetails';
const ShipmentDetails = ({route, navigation}) => {
  const [Loading, setLoading] = useState(false);
  const [data, setdata] = useState([]);
  const {itemId} = route.params;
  const {userInfor} = useContext(AuthContext);
  const formatter = new Intl.DateTimeFormat('vi-VN', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
  // console.log(itemId);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const {data} = await axios.get(`${API}/orders/order-detail/${itemId}`);
      setdata(data);
      setLoading(false);
    };
    getData();
  }, [itemId]);
  // console.log(data);
  const handleChangeStatusOrder = async status => {
    let payStatus;
    if (status === 'Đã giao hàng') {
      payStatus = 'Đã thanh toán';
    }
    if (status === 'Hủy đơn') {
      payStatus = 'Chưa thanh toán';
    }

    const {data} = await axios.put(
      `${API}/orders/change-status-order/${itemId}`,
      {
        status,
        shipBy: userInfor?.user?._id,
        payStatus,
      },
    );
    const newStatus = data?.order?.orderStatus;
    const newStatusPay = data?.order?.payStatus;
    setdata({
      ...data,
      orderStatus: newStatus,
      payStatus: newStatusPay,
    });
  };
  return (
    <SafeAreaView style={{height: '100%', backgroundColor: '#F8F8FF'}}>
      <View style={{position: 'absolute', width: '100%', zIndex: 200}}>
        <LinearGradient
          colors={['#ff416c', '#ff4b2b']}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            height: 100,
          }}>
          <Text style={{color: '#fff', fontSize: 22, fontWeight: 800}}>
            CHI TIẾT ĐƠN HÀNG
          </Text>
        </LinearGradient>
      </View>
      {Loading ? (
        <LoadingShipDetails />
      ) : (
        <ScrollView>
          <View
            style={{
              backgroundColor: '#fff',
              marginTop: 90,
            }}>
            <View
              style={{
                marginTop: 25,
                marginHorizontal: 10,
                backgroundColor: '#F8F8FF',
                borderRadius: 10,
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
              <Text
                style={{
                  fontWeight: '700',
                  textAlign: 'center',
                  color: '#000',
                  fontSize: 15,
                }}>
                THÔNG TIN KHÁCH HÀNG
              </Text>
              <View style={{flexDirection: 'row', marginVertical: 5}}>
                <Text>Họ Tên : </Text>
                <Text>{data?.order?.name} </Text>
              </View>
              <View style={{flexDirection: 'row', marginVertical: 5}}>
                <Text>Địa chỉ : </Text>
                <Text>{data?.order?.address} </Text>
              </View>
              <View style={{flexDirection: 'row', marginVertical: 5}}>
                <Text>Số điên thoại : </Text>
                <Text>{data?.order?.sdt} </Text>
              </View>
              <View style={{flexDirection: 'row', marginVertical: 5}}>
                <Text>Ngày đặt hàng :</Text>
                {data?.order?.createdAt && (
                  <Text>
                    {formatter.format(moment(data.order.createdAt).toDate())}
                  </Text>
                )}
              </View>
              {data?.order?.orderStatus == 'Đã giao hàng' && (
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                  <Text>Ngày giao hàng :</Text>
                  {data?.order?.createdAt && (
                    <Text>
                      {formatter.format(moment(data.order.updateAt).toDate())}
                    </Text>
                  )}
                </View>
              )}

              <View style={{flexDirection: 'row', marginVertical: 5}}>
                <Text style={{color: '#545252', fontWeight: 700}}>
                  Tổng tiền :
                </Text>
                <Text style={{color: '#545252', fontWeight: 700}}>
                  $
                  {String(data?.order?.total).replace(
                    /(.)(?=(\d{3})+$)/g,
                    '$1,',
                  )}
                </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: 5,
                marginHorizontal: 10,
                backgroundColor: '#F8F8FF',
                borderRadius: 10,
                padding: 20,
                shadowColor: '#757575',
                shadowOffset: {
                  width: 0,
                  height: 7,
                },
                shadowOpacity: 9.41,
                shadowRadius: 9.11,
                elevation: 4,
              }}>
              <View style={{flexDirection: 'row', marginVertical: 5}}>
                <Text>Trạng thái đơn hàng : </Text>
                <Text>{data?.order?.orderStatus}</Text>
              </View>
              <View style={{flexDirection: 'row', marginVertical: 5}}>
                <Text>Trạng thái thanh toán : </Text>
                <Text>{data?.order?.payStatus} </Text>
              </View>
            </View>
            <View
              style={{
                marginTop: 10,
                marginHorizontal: 10,
                backgroundColor: '#F8F8FF',
                borderRadius: 10,
                padding: 20,
                marginBottom: 100,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 7,
                },
                shadowOpacity: 0.41,
                shadowRadius: 9.11,
                elevation: 14,
              }}>
              {data?.order?.product.map((item, index) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginVertical: 10,
                    }}
                    key={index}>
                    <Image
                      style={{width: 100, height: 100}}
                      source={{uri: item.product.img}}
                    />
                    <View style={{width: 180}}>
                      <Text style={{fontSize: 18, color: '#000'}}>
                        {item.product.name.slice(0, 20)}
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          marginTop: 5,
                        }}>
                        <Text style={{fontSize: 15}}>Số lượng : </Text>
                        <Text style={{fontSize: 15}}>{item.quantity}</Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </ScrollView>
      )}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          position: 'absolute',
          zIndex: 10,
          width: '100%',
          bottom: 0,
          backgroundColor: '#F8F8FF',
          paddingVertical: 20,
        }}>
        <TouchableOpacity
          style={{
            paddingVertical: 15,
            paddingHorizontal: 25,
            borderRadius: 15,
            backgroundColor: '#F8F8FF',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.41,
            shadowRadius: 9.11,
            elevation: 14,
          }}
          onPress={() => navigation.navigate('IndexShiper')}>
          <Text style={{fontWeight: 700, color: '#000', fontSize: 16}}>
            Quay lại
          </Text>
        </TouchableOpacity>
        {data?.order?.orderStatus === 'Đã xác nhận' ? (
          <TouchableOpacity
            style={{
              paddingVertical: 15,
              paddingHorizontal: 30,
              borderRadius: 15,
              backgroundColor: '#12f17d',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.41,
              shadowRadius: 9.11,
              elevation: 14,
            }}
            onPress={() => handleChangeStatusOrder('Đang giao hàng')}>
            <Text style={{fontWeight: 700, color: '#000'}}> Nhận đơn</Text>
          </TouchableOpacity>
        ) : data?.order?.orderStatus === 'Đang giao hàng' ? (
          <>
            <TouchableOpacity
              style={{
                paddingVertical: 15,
                paddingHorizontal: 30,
                borderRadius: 15,
                backgroundColor: '#ff0f1b',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 7,
                },
                shadowOpacity: 0.41,
                shadowRadius: 9.11,
                elevation: 14,
              }}
              onPress={() => handleChangeStatusOrder('Hủy đơn')}>
              <Text style={{fontWeight: 700, color: '#fff', fontSize: 16}}>
                Hủy đơn
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingVertical: 15,
                paddingHorizontal: 25,
                borderRadius: 15,
                backgroundColor: '#ffdf0f',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 7,
                },
                shadowOpacity: 0.41,
                shadowRadius: 9.11,
                elevation: 14,
              }}
              onPress={() => handleChangeStatusOrder('Đã giao hàng')}>
              <Text style={{color: '#000', fontWeight: 700, fontSize: 16}}>
                Đã giao hàng
              </Text>
            </TouchableOpacity>
          </>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default ShipmentDetails;
