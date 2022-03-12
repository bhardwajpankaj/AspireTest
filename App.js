import React from 'react';
import { StyleSheet, Text, View, Image, LogBox } from 'react-native';
import DebitCardScreen from './screens/DebitCardViewController';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { store } from './store/store';
import { Provider } from 'react-redux';
import SpendingLimitViewController from './screens/SpendingLimitViewController';
import Colors from './constants/colors'
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications
import Strings from './constants/strings'

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{Strings.home}</Text>
    </View>
  );
}

const DebitStack = createStackNavigator();
function DebitScreen() {
  return (
    <DebitStack.Navigator  screenOptions={{ headerShown: false }}>
      <DebitStack.Screen name="Debit" component={DebitCardScreen}/>
      <DebitStack.Screen name="SpendingLimit" component={SpendingLimitViewController}/>
    </DebitStack.Navigator>
  );
}

function PaymentsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{Strings.payment}</Text>
    </View>
  );
}

function CreditScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{Strings.credit}</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{Strings.profile}</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = require('./assets/debitScreen/Home.png')
          } else if (route.name === 'Debit') {
            iconName = require('./assets/debitScreen/debit.png')
          } else if (route.name === 'Payments') {
            iconName = require('./assets/debitScreen/payments.png')
          } else if (route.name === 'Credit') {
            iconName = require('./assets/debitScreen/Credit.png')
          } else if (route.name === 'Profile') {
            iconName = require('./assets/debitScreen/profile.png')
          }
          return <Image source={iconName} style={{width: 25, height: 24, resizeMode:'contain',tintColor:color} } />
          },
        headerShown: false,
        tabBarActiveTintColor: Colors.AppGreenColor,
        tabBarInactiveTintColor: Colors.AppLightGreyColor,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Debit" component={DebitScreen}/>
      <Tab.Screen name="Payments" component={PaymentsScreen} />
      <Tab.Screen name="Credit" component={CreditScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
