/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {LinearTextGradient} from 'react-native-text-gradient';
import axios from 'axios';
import {API} from '../../../../config';
import {useNavigation} from '@react-navigation/native';
const ProductOfCategory = ({route}) => {
  const {itemId} = route.params;
  const navigation = useNavigation();
  const [currentCate, setCurrentCate] = useState([]);
  const [currentProductsOfCate, setCurrentProductsOfCate] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const {data} = await axios.get(`${API}/categorys/${itemId}`);
        setCurrentCate(data.cate);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [itemId]);
  useEffect(() => {
    const getData = async () => {
      try {
        const {data} = await axios.get(
          `${API}/products/get-all-product-with-cate/${itemId}`,
        );
        setCurrentProductsOfCate(data.product);
      } catch (error) {
        console.error(error);
      }
    };
    getData();
  }, [currentCate]);
  const handleOnPressProductDetails = id => {
    navigation.navigate('ProductDetails', {itemId: id});
  };
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          marginHorizontal: 15,
        }}>
        {currentProductsOfCate?.map((cr, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                handleOnPressProductDetails(cr?._id);
              }}>
              <View
                style={{
                  width: 180,
                  borderRadius: 15,
                  marginTop: 10,
                  backgroundColor: '#fff',
                  alignItems: 'center',
                }}>
                <Image
                  style={{height: 160, width: 150, marginVertical: 5}}
                  source={{uri: cr?.img}}
                />
                <Text style={{color: '#000', fontSize: 16, fontWeight: 500}}>
                  {cr?.name}
                </Text>
                <Text
                  style={{
                    color: '#757575',
                    fontSize: 13,
                    fontWeight: '400',
                  }}>
                  {cr?.cpu}
                </Text>
                <LinearTextGradient
                  style={{
                    fontWeight: 'bold',
                    fontSize: 15,
                    marginBottom: 10,
                  }}
                  locations={[0, 1]}
                  colors={['#e4335d', '#ff4b2b']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}>
                  <Text>
                    {String(cr?.price).replace(/(.)(?=(\d{3})+$)/g, '$1.')} VNĐ
                  </Text>
                </LinearTextGradient>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default ProductOfCategory;
