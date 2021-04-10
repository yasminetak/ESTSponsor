import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import{ createStackNavigator } from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import SupportScreen from './SupportScreen';
import ProfileScreen from './ProfileScreen';
import DetailsScreen from './DetailsScreen';
import BookmarkScreen from './BookmarkScreen';
import InvitationScreen from './InvitationScreen';


const HomeStack= createStackNavigator();
const SettingsStack = createStackNavigator();
const SupportStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const BookmarkStack = createStackNavigator();
const InvitationStack = createStackNavigator();

const Tab= createMaterialBottomTabNavigator();

const MainTabScreen=() =>(
  <Tab.Navigator
  initialRouteName="Home"
  activeColor='white'
  style={{ backgroundColor: 'teal'}}
  >
  <Tab.Screen
  name="Home"
  component={HomeStackScreen}
  options={{
    tabBarLabel: 'Fil d\'actualité',
    tabBarColor: 'teal',
    tabBarIcon: ({ color })=> (
      <Icon name="home-sharp" color={color} size={26} />
    ),
  }}/>
  <Tab.Screen
    name="Settings"
  component={SettingsStackScreen}
  options={{
    tabBarLabel: 'Notifications',
    tabBarColor: 'teal',
    tabBarIcon: ({ color })=> (
      <Icon name="notifications-sharp" color={color} size={26} />
    ),
  }}/>
  <Tab.Screen
  name="Support"
  component={SupportStackScreen}
  options={{
    tabBarLabel: 'Publication',
    tabBarColor: 'teal',
    tabBarIcon: ({ color })=> (
      <Icon name="add-circle-sharp" color={color} size={26} />
    ),
  }}/>
  <Tab.Screen
  name="Details"
  component={DetailsStackScreen}
  options={{
    tabBarLabel: 'Messages',
    tabBarColor: 'teal',
    tabBarIcon: ({ color })=> (
      <Icon name="chatbubble-ellipses-sharp" color={color} size={26} />
    ),
  }}/>
 <Tab.Screen
  name="Profile"
  component={ProfileStackScreen}
  options={{
    tabBarLabel: 'Profile',
    tabBarColor: 'teal',
    tabBarIcon: ({ color })=> (
      <Icon name="person-sharp" color={color} size={26} />
    ),
  }}/>
  </Tab.Navigator>
);
export default MainTabScreen

//--------Stack de HOME ----------
const HomeStackScreen =({navigation})=>(
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor:'teal',
    },
  headerTintColor:'#fff',
headerTitleStyles:{
  fontWeight:'bold'
}
}}>
  <HomeStack.Screen name="Home" component={HomeScreen} options={{
    title: 'Fil d \'actualité',
    headerLeft: ()=> (
      <Icon.Button name='ios-menu'
                   size={25}
                   backgroundColor='teal'
                   onPress={() => {navigation.openDrawer()}}>
      </Icon.Button>
    )
  }}/>

  </HomeStack.Navigator>

);

//-------Stack de notification-------
const SettingsStackScreen =({navigation})=>(
  <SettingsStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor:'teal',
    },
  headerTintColor:'#fff',
headerTitleStyles:{
  fontWeight:'bold'
}
}}>
  <SettingsStack.Screen name ="Notifications" component={SettingsScreen} options={{
    headerLeft: ()=> (
      <Icon.Button name='ios-menu'
                   size={25}
                   backgroundColor='teal'
                   onPress={() => {navigation.openDrawer()}}>
      </Icon.Button>
    )

  }}/>

  </SettingsStack.Navigator>
);


//-------Stack de Publication--------
const SupportStackScreen =({navigation})=>(
  <SupportStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor:'teal',
    },
  headerTintColor:'#fff',
headerTitleStyles:{
  fontWeight:'bold'
}
}}>
  <SupportStack.Screen name ="Publication" component={SupportScreen} options={{
    headerLeft: ()=> (
      <Icon.Button name='ios-menu'
                   size={25}
                   backgroundColor='teal'
                   onPress={() => {navigation.openDrawer()}}>
      </Icon.Button>
    )

  }}/>

  </SupportStack.Navigator>
);

//-------Stack de Profile--------
const ProfileStackScreen =({navigation})=>(
  <ProfileStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor:'teal',
    },
  headerTintColor:'#fff',
headerTitleStyles:{
  fontWeight:'bold'
}
}}>
  <ProfileStack.Screen name ="Profile" component={ProfileScreen} options={{
    headerLeft: ()=> (
      <Icon.Button name='ios-menu'
                   size={25}
                   backgroundColor='teal'
                   onPress={() => {navigation.openDrawer()}}>
      </Icon.Button>
    )

  }}/>

  </ProfileStack.Navigator>
);

//-------Stack de Message--------
const DetailsStackScreen =({navigation})=>(
  <DetailsStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor:'teal',
    },
  headerTintColor:'#fff',
headerTitleStyles:{
  fontWeight:'bold'
}
}}>
  <DetailsStack.Screen name ="Message" component={DetailsScreen} options={{
    headerLeft: ()=> (
      <Icon.Button name='ios-menu'
                   size={25}
                   backgroundColor='teal'
                   onPress={() => {navigation.openDrawer()}}>
      </Icon.Button>
    )

  }}/>

  </DetailsStack.Navigator>
);


//-------Stack de liste des parrains--------
const BookmarkStackScreen =({navigation})=>(
  <BookmarkStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor:'teal',
    },
  headerTintColor:'#fff',
headerTitleStyles:{
  fontWeight:'bold'
}
}}>
  <BookmarkStack.Screen name ="Liste des parrains" component={BookmarkScreen} options={{
    headerLeft: ()=> (
      <Icon.Button name='ios-menu'
                   size={25}
                   backgroundColor='teal'
                   onPress={() => {navigation.openDrawer()}}>
      </Icon.Button>
    ),
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    )

  }}/>

  </BookmarkStack.Navigator>
);

//-------Stack d invitation--------
const InvitationStackScreen =({navigation})=>(
  <InvitationStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor:'teal',
    },
  headerTintColor:'#fff',
headerTitleStyles:{
  fontWeight:'bold'
}
}}>
  <InvitationStack.Screen name ="Invitations" component={InvitationScreen} options={{
    headerLeft: ()=> (
      <Icon.Button name='ios-menu'
                   size={25}
                   backgroundColor='teal'
                   onPress={() => {navigation.openDrawer()}}>
      </Icon.Button>
    )

  }}/>

  </InvitationStack.Navigator>
);
