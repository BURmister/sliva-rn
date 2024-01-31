import { NavigationContainer } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { Text } from 'react-native';

import BottomTabNavigator from './TabNavigator';

const RootNavigator = () => {
   const linking = {
      prefixes: [Linking.createURL('/'), 'https://newsliva24.ru'],
   };

   console.log(linking);

   return (
      <NavigationContainer linking={linking}>
         <BottomTabNavigator />
      </NavigationContainer>
   );
};

export default RootNavigator;
