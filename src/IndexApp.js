/* eslint-disable react/no-unstable-nested-components */
// eslint-disable-next-line react/no-unstable-nested-components
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IndexShiper from './screens/shipment/IndexShiper';
import ShipmentDetails from './screens/shipment/component/ShipmentDetails';
import Settings from './screens/Settings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Emtypo from 'react-native-vector-icons/Entypo';
import RegisterScreen from './screens/auth/RegisterScreen';
import LoginScreen from './screens/auth/LoginScreen';
import {AuthContext} from './context/AuthContext';
import ProductScreens from './screens/product/ProductScreens';
import ProductDetails from './screens/product/components/ProductDetails';
import ProductOfCategory from './screens/product/components/ProductOfCategory';
import Slider from './Slider';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import OrderStatis from './screens/statistics/OrderStatis';
import Cart from './screens/Cart/Cart';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const IndexApp = () => {
  const {userInfor} = React.useContext(AuthContext);
  // console.log(userInfor.user.role);
  const HomeScreens = () => (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Emtypo name="home" color={color} size={30} />
          ),
        }}
        component={ProductScreens}
      />
      <Tab.Screen
        name="Cart"
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color}) => (
            <Emtypo name="shopping-cart" color={color} size={30} />
          ),
        }}
        component={Cart}
      />
      {userInfor.user.role === 'shiper' ? (
        <>
          <Tab.Screen
            name="Shiper"
            options={{
              tabBarLabel: 'Shiper',
              tabBarIcon: ({color}) => (
                <FontAwesome5 name="shipping-fast" color={color} size={28} />
              ),
            }}
            component={IndexShiper}
          />
          <Tab.Screen
            name="OrderStatis"
            options={{
              tabBarLabel: 'Statis',
              tabBarIcon: ({color}) => (
                <Ionicons name="stats-chart" color={color} size={28} />
              ),
            }}
            component={OrderStatis}
          />
        </>
      ) : null}
      <Tab.Screen
        name="settings"
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({color}) => (
            <Ionicons name="settings-sharp" color={color} size={28} />
          ),
        }}
        component={Settings}
      />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {userInfor.accessToken ? (
          <>
            <Stack.Screen name="HomeScreens" component={HomeScreens} />
          </>
        ) : (
          <>
            <Stack.Screen name="Slider" component={Slider} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          </>
        )}
        {/* { userInfor.user.role =='shiper'?} */}
        <Stack.Screen name="IndexShiper" component={IndexShiper} />
        <Stack.Screen name="ShipmentDetails" component={ShipmentDetails} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="ProductOfCategory" component={ProductOfCategory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default IndexApp;
