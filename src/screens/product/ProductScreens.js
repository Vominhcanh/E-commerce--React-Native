/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {TextInput} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {LinearTextGradient} from 'react-native-text-gradient';
import {AuthContext} from '../../context/AuthContext';
// import AllProduct from './components/AllProduct';
import axios from 'axios';
import {useState} from 'react';
import {useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {API} from '../../../config';
import {useNavigation} from '@react-navigation/native';
import LoadingProductScreen from './../loading/Components/Product/LoadingProductScreen';
import LoadingCategory from '../loading/Components/Category/LoadingCategory';
const ProductScreens = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [Loading, setLoading] = useState(false);
  const [LoadingCate, setLoadingCate] = useState(false);
  const {userInfor} = useContext(AuthContext);
  const [categories, setCategories] = useState(null);
  const [active, setActive] = useState(0);
  const [product, setProduct] = useState(null);
  const [initProduct, setInitProduct] = useState([]);
  const navigation = useNavigation();
  const hanldeClick = item => {
    setActive(item);
  };
  const handleOnPressProductDetails = id => {
    navigation.navigate('ProductDetails', {itemId: id});
  };
  useEffect(() => {
    const getData = async () => {
      setLoadingCate(true);
      const {data} = await axios.get(`${API}/categorys/`);
      setCategories(data?.categories);
      setLoadingCate(false);
    };
    getData();
  }, []);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const {data} = await axios.get(`${API}/products/get-all-product`);
      const filteredItems = data?.products;
      setInitProduct(filteredItems);
      setProduct(filteredItems);
      setLoading(false);
    };
    getData();
  }, []);
  useEffect(() => {
    if (!product) return;
    const changeTab = () => {
      const data = initProduct.filter(
        i =>
          i.categoryId.name === categories[active].name &&
          i.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setProduct(data);
    };
    changeTab();
  }, [active, searchQuery]);
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#f5f5f5',
      }}>
      <View
        style={{
          position: 'absolute',
          backgroundColor: '#f5f5f5',
          zIndex: 10,
        }}>
        <View style={{flexDirection: 'row', marginTop: 25, marginLeft: 15}}>
          <Text style={{fontSize: 25, marginRight: 10, color: '#000'}}>
            Welcome,
          </Text>
          <LinearTextGradient
            style={{
              fontWeight: 'bold',
              fontSize: 25,
              marginBottom: 10,
              textTransform: 'uppercase',
            }}
            locations={[0, 1]}
            colors={['#f6305e', '#f33614']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Text>{userInfor?.user?.name}</Text>
          </LinearTextGradient>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            marginTop: 10,
            marginBottom: 10,
          }}>
          <TextInput
            style={{
              borderColor: '#d7d3d3c0',
              backgroundColor: '#d7d3d3c0',
              borderWidth: 1,
              borderRadius: 25,
              paddingVertical: 12,
              paddingHorizontal: 20,
              width: '100%',
              position: 'relative',
            }}
            value={searchQuery}
            onChangeText={text => setSearchQuery(text)}
            placeholder="Search product..."
          />
          <FontAwesome5
            name="search"
            size={25}
            color={'#969393c0'}
            style={{position: 'absolute', right: 20, top: 14}}
          />
        </View>
      </View>
      <ScrollView>
        <View style={{marginHorizontal: 10, marginTop: 150}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {LoadingCate ? (
              <LoadingCategory />
            ) : (
              <>
                {categories?.map((ca, index) => {
                  return (
                    <View key={index}>
                      <TouchableOpacity
                        onPress={() => {
                          hanldeClick(index);
                        }}
                        style={{marginHorizontal: 10, marginVertical: 20}}>
                        <Text
                          style={[
                            active === index ? styles?.btnActive : styles?.btn,
                          ]}>
                          {ca?.name.toUpperCase()}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </>
            )}
          </ScrollView>
        </View>
        <Text
          style={{
            fontSize: 23,
            color: '#000',
            marginLeft: 10,
            textAlign: 'center',
            textTransform: 'uppercase',
          }}>
          Product
        </Text>
        <View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              marginHorizontal: 15,
            }}>
            {Loading ? (
              <LoadingProductScreen />
            ) : (
              <>
                {product?.map((pr, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        handleOnPressProductDetails(pr?._id);
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
                          source={{uri: pr?.img}}
                        />
                        <Text
                          style={{
                            color: '#000',
                            fontSize: 16,
                            fontWeight: '500',
                            marginHorizontal: 10,
                          }}>
                          {pr?.name}
                        </Text>
                        <Text
                          style={{
                            color: '#757575',
                            fontSize: 13,
                            fontWeight: '400',
                          }}>
                          {pr?.cpu}
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
                            $
                            {String(pr.price).replace(
                              /(.)(?=(\d{3})+$)/g,
                              '$1,',
                            )}
                          </Text>
                        </LinearTextGradient>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductScreens;
const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 15,
    color: '#000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: 600,
  },
  btnActive: {
    alignItems: 'center',
    backgroundColor: '#f12c2ce3',
    borderWidth: 2,
    borderColor: '#e52727e3',
    color: '#fff',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: 600,
  },
});
