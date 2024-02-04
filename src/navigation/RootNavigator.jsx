import { NavigationContainer } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import BottomTabNavigator from './TabNavigator';

const RootNavigator = () => {
   const linking = {
      prefixes: [Linking.createURL('/'), 'https://sliva24.ru'],
   };

   console.log(linking);

   return (
      <NavigationContainer linking={linking}>
         <BottomTabNavigator />
      </NavigationContainer>
   );
};

export default RootNavigator;
