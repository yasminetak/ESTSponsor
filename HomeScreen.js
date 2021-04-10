// FIL D ACTUALITE

import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, Image, ScrollView, TouchableOpacity} from 'react-native';
//import { useTheme } from '@react-navigation/native';
import{NavigationContainer} from '@react-navigation/native';
import{ createStackNavigator } from '@react-navigation/stack';

import Swiper from 'react-native-swiper';


const HomeScreen = ({navigation}) => {

    return (
        /*<Button
        title="Go to notifications screen"
        onPress={() => navigation.navigate("Details")}
      />*/

<View style={styles.container}>
      <StatusBar/>
      <View style={styles.sliderContainer}>
        <Swiper autoplay horizental={false} height={200} activeDotColor="#FF6347">
          <View style={styles.slide}>
            <Image
              source={require('../assets/images/parrainage-1.png')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/images/parrainage.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/images/sponsor-student.png')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>
      <Button
          title="Go to details screen...again"
          onPress={() => navigation.navigate("Details")}
      />
      </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center'
  },
  sliderContainer:{
    height: 200,
    width: '90%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
});
