import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MainStackNavigator, ContactStackNavigator, HomeStackNavigator } from './StackNavigator';
import { HomeScreen } from '../screens/Home/Home';
import { CatalogScreen } from '../screens/Catalog/Catalog';
import { ProfileScreen } from '../screens/Profile/Profile';
import { FavoriteScreen } from '../screens/Favorite/Favorite';
import { BasketScreen } from '../screens/Basket/Basket';

import { BasketTabIcon, CatalogTabIcon, FavoriteTabIcon, HomeTabIcon, ProfileTabIcon } from '../ui/Svg/Svg';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
   return (
      <Tab.Navigator>
         <Tab.Screen
            name="HomeScreen"
            component={HomeStackNavigator}
            options={{
               headerShown: false,
               title: 'Главная',
               tabBarShowLabel: false,
               tabBarActiveTintColor: '#40b484',
               tabBarInactiveTintColor: '#3aaff1',
               tabBarIcon: ({ size, focused, color }) => {
                  return <HomeTabIcon size={size} focused={focused} color={color} />;
               },
            }}
         />
         <Tab.Screen
            name="CatalogScreen"
            component={CatalogScreen}
            options={{
               headerShown: false,
               title: 'Каталог',
               tabBarShowLabel: false,
               tabBarActiveTintColor: '#40b484',
               tabBarInactiveTintColor: '#3aaff1',
               tabBarIcon: ({ size, focused, color }) => {
                  return <CatalogTabIcon size={size} focused={focused} color={color} />;
               },
            }}
         />
         <Tab.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{
               headerShown: false,
               title: 'Профиль',
               tabBarShowLabel: false,
               tabBarActiveTintColor: '#40b484',
               tabBarInactiveTintColor: '#3aaff1',
               tabBarIcon: ({ size, focused, color }) => {
                  return <ProfileTabIcon size={size} focused={focused} color={color} />;
               },
            }}
         />
         <Tab.Screen
            name="FavoriteScreen"
            component={FavoriteScreen}
            options={{
               headerShown: false,
               title: 'Избранное',
               tabBarShowLabel: false,
               tabBarActiveTintColor: '#40b484',
               tabBarInactiveTintColor: '#3aaff1',
               tabBarIcon: ({ size, focused, color }) => {
                  return <FavoriteTabIcon size={size} focused={focused} color={color} />;
               },
            }}
         />
         <Tab.Screen
            name="BasketScreen"
            component={BasketScreen}
            options={{
               headerShown: false,
               title: 'Корзина',
               tabBarShowLabel: false,
               tabBarActiveTintColor: '#40b484',
               tabBarInactiveTintColor: '#3aaff1',
               tabBarIcon: ({ size, focused, color }) => {
                  return <BasketTabIcon size={size} focused={focused} color={color} />;
               },
            }}
         />
      </Tab.Navigator>
   );
};

export default BottomTabNavigator;
