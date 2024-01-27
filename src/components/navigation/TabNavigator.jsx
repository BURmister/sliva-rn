import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CatalogStackScreen, HomeStackScreen, FavoriteStackScreen, BasketStackScreen, MenuStackScreen } from './StackNavigator';
import { useSvgIcon } from '../ui/Svg/Svg';

const TAB_LIST = [
   { name: 'HomeScreen', title: 'Главная', icon: 'HomeTabIcon', component: HomeStackScreen },
   { name: 'CatalogScreen', title: 'Каталог', icon: 'CatalogTabIcon', component: CatalogStackScreen },
   { name: 'FavoriteScreen', title: 'Избранное', icon: 'FavoriteTabIcon', component: FavoriteStackScreen },
   { name: 'BasketScreen', title: 'Корзина', icon: 'BasketTabIcon', component: BasketStackScreen },
   { name: 'ProfileScreen', title: 'Профиль', icon: 'ProfileTabIcon', component: MenuStackScreen },
];

const createOptions = ({ route, navigation }) => {
   const options = {};

   TAB_LIST.forEach((tab) => {
      if (tab.name === route.name) {
         options.title = tab.title;
         options.tabBarShowLabel = false;
         options.tabBarActiveTintColor = '#40b484';
         options.tabBarInactiveTintColor = '#3aaff1';

         options.tabBarIcon = ({ size, focused, color }) => {
            return useSvgIcon({ name: tab.icon, size, focused, color });
         };

         switch (tab.name) {
            case 'HomeScreen':
               options.headerShown = false;
               break;
            case 'CatalogScreen':
               options.headerShown = false;
               break;
            case 'ProfileScreen':
               options.headerShown = false;
               break;
            case 'FavoriteScreen':
               options.headerShown = false;
               break;
            case 'BasketScreen':
               options.headerShown = false;
               break;
         }
      }
   });

   return options;
}

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
   return (
      <Tab.Navigator>
         {TAB_LIST.map(({name, component}, index) => {
            return <Tab.Screen key={index} name={name} component={component} options={(props) => createOptions(props)} />;
         })}
      </Tab.Navigator>
   );
};

export default BottomTabNavigator;
