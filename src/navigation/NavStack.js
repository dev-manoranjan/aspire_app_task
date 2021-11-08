import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SpendingLimit from '../screens/SpendingLimit';
import Tabs from './Tab';

const NavStackParent = createNativeStackNavigator();

const NavStack = () => {
  return (
    <NavStackParent.Navigator
      initialRouteName="Tabs"
      screenOptions={{
        headerShown: false,
      }}>
      <NavStackParent.Screen name="Tabs" component={Tabs} />
      <NavStackParent.Screen name="SpendingLimit" component={SpendingLimit} />
    </NavStackParent.Navigator>
  );
};

export default NavStack;

const styles = StyleSheet.create({});
