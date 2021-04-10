import React, {useEffect} from 'react';
import { View, ActivityIndicator, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';
import{ NavigationContainer } from '@react-navigation/native';
import{ createStackNavigator } from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';
import { AuthContext } from './components/AuthContext';


import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
} from 'react-native-paper';


import SplashScreen from './screens/SplashScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';

import { DrawerContent } from './screens/DrawerContent';

import MainTabScreen from './screens/MainTabScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import InvitationScreen from './screens/InvitationScreen';


import RootStackScreen from './screens/RootStackScreen';

const Drawer = createDrawerNavigator();

      const App =() =>{
        const [isLoading, setIsLoading]= React.useState(true);
        const [userToken, setUserToken]= React.useState(null);

        const authContext = React.useMemo(()=> ({
        signIn: () =>{
          setUserToken('fkhd');
          setIsLoading:(false);
        },
        signOut: () =>{
          setUserToken(null);
          setIsLoading:(false);
        },
        signUp: () =>{
          setUserToken('fkhd');
          setIsLoading:(false);
        },
      }));

        useEffect(() => {
          setTimeout(() =>{
            setIsLoading(false);
          }, 1000);
        }, []);

        if(isLoading) {
          return (
            <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size ="large"/>
            </View>
          );
        }
      return (
        <AuthContext.Provider value= {authContext}>
        <NavigationContainer>
          {userToken != null ? (
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
              <Drawer.Screen name="HomeDrawer" component={MainTabScreen}/>
              <Drawer.Screen name="Bookmark" component={BookmarkScreen}/>
              <Drawer.Screen name="Invitation" component={InvitationScreen}/>
            </Drawer.Navigator>
      )
    :
        <RootStackScreen/>
      }
        </NavigationContainer>
        </AuthContext.Provider>
  );
};


export default App;
