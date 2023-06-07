/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import {LinearTextGradient} from 'react-native-text-gradient';
import {useState} from 'react';
import axios from 'axios';
import {API} from '../../../../config';
import HTML from 'react-native-render-html';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import LoadingProductDetails from '../../loading/Components/Product/LoadingProductDetails';
const ProductDetails = ({route, navigation: {goBack}}) => {
  const {itemId} = route.params;
  const [product, setProduct] = useState(null);
  const {width} = useWindowDimensions();
  const [Loading, setLoading] = useState(false);
  const image = product && product.length > 0 ? product[0]?.img : null;
  const htmlContent = product && product.length > 0 ? product[0]?.desc : null;
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const {data} = await axios.get(`${API}/products/get-all-product`);
      const pr = data?.products?.filter(p => p?._id === itemId);
      setProduct(pr);
      setLoading(false);
    };
    getData();
  }, [itemId]);
  return (
    <View style={{height: '100%', backgroundColor: '#f8f8ff'}}>
      <View
        style={{
          backgroundColor: '#f8f8ffd0',
          paddingVertical: 20,
          paddingHorizontal: 20,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => goBack()}>
          <Entypo size={30} color={'#3d3d3d'} name="chevron-left" />
          <Text style={{fontSize: 16, fontWeight: 700, color: '#3d3d3d'}}>
            GoBack
          </Text>
        </TouchableOpacity>
        <LinearGradient
          colors={['#ff416c', '#ff4b2b']}
          style={{
            marginRight: 20,
            backgroundColor: '#ccc',
            padding: 15,
            borderRadius: 50,
          }}>
          <Entypo size={20} color={'#fff'} name="shopping-cart" />
        </LinearGradient>
      </View>
      {Loading ? (
        <LoadingProductDetails />
      ) : (
        <>
          {product && (
            <ScrollView
              style={{
                paddingTop: 20,
                height: '100%',
                backgroundColor: '#F8F8FF',
              }}>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  paddingVertical: 35,
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
                <Image
                  style={{
                    flex: 1,
                    resizeMode: 'cover',
                    justifyContent: 'center',
                    height: 300,
                    width: 300,
                  }}
                  source={{uri: image}}
                />
              </View>
              <Text
                style={{
                  fontSize: 30,
                  color: '#000',
                  fontWeight: 600,
                  marginVertical: 13,
                  marginLeft: 10,
                }}>
                {product[0]?.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginRight: 30,
                }}>
                <View style={{marginHorizontal: 10, marginVertical: 5}}>
                  <Text style={{marginVertical: 5, fontSize: 16}}>
                    Cpu : {product[0]?.cpu}
                  </Text>
                  <Text style={{marginVertical: 5, fontSize: 16}}>
                    Ram : {product[0]?.ram} GB
                  </Text>
                  <Text style={{marginVertical: 5, fontSize: 16}}>
                    Storage : {product[0]?.storage} GB
                  </Text>
                </View>

                <View>
                  <LinearTextGradient
                    style={{fontWeight: 'bold', fontSize: 23}}
                    locations={[0, 1]}
                    colors={['#ff416c', '#ff4b2b']}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}>
                    <Text>
                      $
                      {String(product[0]?.price).replace(
                        /(.)(?=(\d{3})+$)/g,
                        '$1,',
                      )}
                    </Text>
                  </LinearTextGradient>
                </View>
              </View>
              <View style={{marginHorizontal: 10, marginBottom: 100}}>
                <Text
                  style={{
                    fontSize: 23,
                    fontWeight: 600,
                    color: '#000',
                  }}>
                  Chi tiết sản phẩm
                </Text>
                <View style={{marginHorizontal: 5}}>
                  <HTML source={{html: htmlContent}} contentWidth={width} />
                </View>
              </View>
            </ScrollView>
          )}
        </>
      )}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          position: 'absolute',
          zIndex: 10,
          width: '100%',
          bottom: 0,
          backgroundColor: '#f8f8ffd0',
          paddingVertical: 15,
        }}>
        <TouchableOpacity
          style={{
            paddingVertical: 15,
            width: '70%',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: '#ff3f40',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 7,
            },
            shadowOpacity: 0.41,
            shadowRadius: 1.11,
            elevation: 4,
          }}>
          <Text style={{color: '#fff', fontSize: 18, fontWeight: 600}}>
            Thêm vào giỏ hàng
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetails;
