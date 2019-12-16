import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MainScreen from '../screens/MainScreen';
import PostScreen from '../screens/PostScreen';
import THEME from '../theme';
import BookmarkedScreen from '../screens/BookmarkedScreen';

const navogatorOptions = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
        },
        headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
    },
};

const PostNavigator = createStackNavigator(
    {
        Main: MainScreen,
        Post: PostScreen,
    },
    navogatorOptions,
);

const BookedNavigator = createStackNavigator(
    {
        Booked: BookmarkedScreen,
        Post: PostScreen,
    },
    navogatorOptions,
);

const bottomTabsConfig = {
    Post: {
        screen: PostNavigator,
        navigationOptions: {
            tabBarLabel: 'All',
            // eslint-disable-next-line react/display-name
            tabBarIcon: info => <Ionicons name="ios-albums" size={25} color={info.tintColor} />,
        },
    },
    Booked: {
        screen: BookedNavigator,
        navigationOptions: {
            tabBarLabel: 'Favorites',
            // eslint-disable-next-line react/display-name
            tabBarIcon: info => <Ionicons name="ios-star" size={25} color={info.tintColor} />,
        },
    },
};

const BottomNavigator =
    Platform.OS === 'android'
        ? createMaterialBottomTabNavigator(bottomTabsConfig, {
              activeTinColor: '#fff',
              shifting: true,
              barStyle: {
                  backgroundColor: THEME.MAIN_COLOR,
              },
          })
        : createBottomTabNavigator(bottomTabsConfig, {
              tabBarOptions: {
                  activeTinColor: THEME.MAIN_COLOR,
              },
          });

const AppNavigation = createAppContainer(BottomNavigator);

export default AppNavigation;
