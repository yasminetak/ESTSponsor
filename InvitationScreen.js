import * as React from 'react';
import { Text, View, SafeAreaView,Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'

import {AntDesign} from '@expo/vector-icons'
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const InvitationScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Invitation Screen</Text>
        <Button
            title="Go to home"
            onPress={() => navigation.navigate("Home")}
        />
        <Button
            title="Go profile"
            onPress={() => navigation.navigate("Profile")}
        />
      </View>
    );
};

export default InvitationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
