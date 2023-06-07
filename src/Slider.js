/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {COLORS, SIZES} from './assets/constants/theme';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
const slides = [
  {
    id: 1,
    title: 'Welcome, Mobile Tech',
    description:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
    image: require('./assets/img/json/data.json'),
  },
  {
    id: 2,
    title: 'Online Payment',
    description:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
    image: require('./assets/img/json/data3.json'),
  },
  {
    id: 3,
    title: 'Free Delivery',
    description:
      '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
    image: require('./assets/img/json/data2.json'),
  },
];

export default function Slider() {
  const navigation = useNavigation();
  const [showHomePage, setShowHomePage] = useState(true);
  const handle = () => {
    navigation.navigate('LoginScreen');
  };
  const buttonLabel = label => {
    return (
      <View
        style={{
          padding: 12,
        }}>
        <Text
          style={{
            color: COLORS.title,
            fontWeight: '600',
            fontSize: SIZES.h4,
          }}>
          {label}
        </Text>
      </View>
    );
  };

  if (showHomePage) {
    return (
      <AppIntroSlider
        style={{backgroundColor: '#fff'}}
        data={slides}
        renderItem={({item}) => {
          return (
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                padding: 15,
                paddingTop: 100,
              }}>
              <LottieView
                source={item.image}
                autoPlay
                loop
                style={{
                  width: SIZES.width - 70,
                  height: 280,
                }}
              />
              <Text
                style={{
                  fontWeight: 'bold',
                  color: '#fe0942',
                  fontSize: SIZES.h1,
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  paddingTop: 5,
                  marginHorizontal: 5,
                  color: COLORS.title,
                }}>
                {item.description}
              </Text>
            </View>
          );
        }}
        activeDotStyle={{
          backgroundColor: COLORS.primary,
          width: 30,
        }}
        showSkipButton
        renderNextButton={() => buttonLabel('Next')}
        renderSkipButton={() => buttonLabel('Skip')}
        renderDoneButton={() => buttonLabel('Done')}
        onDone={() => {
          handle();
        }}
      />
    );
  }
}
