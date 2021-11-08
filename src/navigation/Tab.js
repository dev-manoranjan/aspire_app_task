import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DebitCardScreen from '../screens/DebitCardScreen';
import {styles} from './TabStyle';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
      style={styles.shadow}
      backBehavior="none"
      initialRouteName="DebitCard">
      <Tab.Screen
        name="Home"
        component={DebitCardScreen}
        listeners={{
          tabPress: e => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.alignCenter}>
              <Image
                source={require('../assets/Home.png')}
                resizeMode="contain"
                style={styles.iconStyle}
              />
              <Text style={styles.textStyle}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="DebitCard"
        component={DebitCardScreen}
        listeners={{
          tabPress: e => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.alignCenter}>
              <Image
                source={require('../assets/Card.png')}
                resizeMode="contain"
                style={styles.iconStyle}
              />
              <Text style={styles.textStyleForDebit}>Debit Card</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Payments"
        component={DebitCardScreen}
        listeners={{
          tabPress: e => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.alignCenter}>
              <Image
                source={require('../assets/Payments.png')}
                resizeMode="contain"
                style={styles.iconStyle}
              />
              <Text style={styles.textStyle}>Payments</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Credit"
        component={DebitCardScreen}
        listeners={{
          tabPress: e => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.alignCenter}>
              <Image
                source={require('../assets/Credit.png')}
                resizeMode="contain"
                style={styles.iconStyle}
              />
              <Text style={styles.textStyle}>Credit</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={DebitCardScreen}
        listeners={{
          tabPress: e => {
            e.preventDefault();
          },
        }}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.alignCenter}>
              <Image
                source={require('../assets/Account.png')}
                resizeMode="contain"
                style={styles.iconStyle}
              />
              <Text style={styles.textStyle}>Profile</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
