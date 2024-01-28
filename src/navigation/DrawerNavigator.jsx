import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { ContactStackNavigator } from './StackNavigator';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
   return (
      <Drawer.Navigator>
         <Drawer.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
         <Drawer.Screen name="Contact" component={ContactStackNavigator} options={{ headerShown: false }} />
      </Drawer.Navigator>
   );
};

export default DrawerNavigator;
