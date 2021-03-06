/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, createContext, useContext, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import 'react-native-gesture-handler';
import {NavigationContainer, useRoute} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
  DrawerActions,
} from '@react-navigation/drawer';

import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {CountProvider, useCountState, useCountDispatch} from './CountContext';
// import MyContext from './context';
// import CounterSwitcher from './counterSwitcher';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createMaterialBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <BottomTab.Navigator
      barStyle={{backgroundColor: '#91512a'}}
      activeColor="white"
      inactiveColor="black"
      backBehavior="firstRoute">
      <BottomTab.Screen
        name="Social Media"
        component={SocialMediaTab}
        options={{
          tabBarIcon: (props) => (
            <FoundationIcon
              name="social-skillshare"
              color={props.color}
              size={24}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileTab}
        options={{
          tabBarIcon: (props) => (
            <IoniconsIcon
              name="ios-person-sharp"
              color={props.color}
              size={24}
            />
          ),
        }}
      />

      <BottomTab.Screen
        name="History"
        component={HistoryTab}
        options={{
          tabBarIcon: (props) => (
            <FontAwesome5Icon name="history" color={props.color} size={24} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const IncrementCountButton = () => {
  const dispatch = useCountDispatch();
  return (
    <View>
      <Button
        title="Click here"
        onPress={() => {
          console.log('increment');
          dispatch({type: 'increment'});
        }}
      />
    </View>
  );
};

const FacebookScreen = ({navigation, route}) => {
  // const {counter, setCounter} = useContext(MyContext);
  //const {count} = React.useContext(CountStateContext);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <IncrementCountButton />
    </View>
  );
};

const SocialMediaTab = ({navigation}) => {
  return (
    <CountProvider>
      <TopTab.Navigator backBehavior="firstRoute">
        <TopTab.Screen name="Facebook" component={FacebookTab} />
        <TopTab.Screen name="Twitter" component={TwitterTab} />
        <TopTab.Screen name="Instagram" component={InstagramTab} />
      </TopTab.Navigator>
    </CountProvider>
  );
};

const FacebookTab = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="facebbok"
        component={FacebookScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const TwitterTab = ({navigation, route}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="twitterscreen"
        component={TwitterScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const CounterDisplay = () => {
  const countState = useCountState();
  let count;
  if (countState) {
    count = countState.count;
  }
  return (
    <View>
      <Text>Button clicked {count} times</Text>
    </View>
  );
};

const TwitterScreen = ({navigation}) => {
  // const contextType = MyContext;
  // const counter = useContext(MyContext);
  // return (
  //   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //     <Text>Welcome to Twitter</Text>
  //     <Text>Button clicked {counter} times</Text>
  //   </View>
  // );
  const counter = 1;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text> - TWITTER - </Text>
      <CounterDisplay />
    </View>
  );
};

const InstagramTab = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Welcome to Instagram</Text>
    </View>
  );
};

const HistoryTab = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Born: 1996</Text>
      <Text>Graduation: 2020</Text>
    </View>
  );
};

const ProfileScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Name: Aqib Naveed</Text>
      <Text>City: Rawalpindi</Text>
    </View>
  );
};

const ProfileTab = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="profilescreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const SettingsScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings Screen</Text>
    </View>
  );
};

const HomeNavigator = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home Screen',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <View style={{paddingLeft: 20}}>
              <IoniconsIcon
                name="list"
                color="white"
                size={24}
                onPress={() => {
                  props.navigation.toggleDrawer();
                }}
              />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const SettingsNavigator = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="settings"
        component={SettingsScreen}
        options={{
          title: 'Settings Screen',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => (
            <View style={{paddingLeft: 20}}>
              <IoniconsIcon
                name="list"
                color="white"
                size={24}
                onPress={() => {
                  props.navigation.toggleDrawer();
                }}
              />
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Drawer.Navigator initialRouteName="Home" backBehavior="firstRoute">
        <Drawer.Screen
          name="Home"
          component={HomeNavigator}
          options={{
            drawerIcon: (props) => (
              <IoniconsIcon name="home" color="black" size={24} />
            ),
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={SettingsNavigator}
          options={{
            drawerIcon: (props) => (
              <IoniconsIcon name="settings" color="black" size={24} />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
