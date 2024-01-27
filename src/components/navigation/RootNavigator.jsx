import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './TabNavigator';

const RootNavigator = () => {
   return (
      <NavigationContainer>
         <BottomTabNavigator />
      </NavigationContainer>
   );
};

export default RootNavigator;
