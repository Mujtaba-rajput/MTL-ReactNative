/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/Dashboard';
import MarketData from '../screens/MarketData';
import Details from '../screens/Details';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './navigation.style';
import colors from '../utils/colors';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="DashboardStack"
      component={Dashboard}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const CustomHeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <AntDesign
        name="left"
        size={24}
        color={colors.black}
        style={styles.leftBar}
      />
    </TouchableOpacity>
  );
};

const MainNavigation = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName = '';
          if (route.name === 'Dashboard') {
            iconName = 'dashboard';
          } else if (route.name === 'Market') {
            iconName = 'line-chart';
          } else if (route.name === 'Details') {
            iconName = 'info-circle';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        headerTitleAlign: 'center',
      })}>
      <Tab.Screen
        name="Dashboard"
        component={HomeStack}
        options={{headerShown: true}}
      />
      <Tab.Screen
        name="Market"
        component={MarketData}
        options={{
          headerLeft: () => <CustomHeaderLeft />,
          headerTitle: 'Market Data',
        }}
      />
      <Tab.Screen
        name="Details"
        component={Details}
        options={{
          headerLeft: () => <CustomHeaderLeft />,
          headerTitle: 'Details',
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default MainNavigation;
