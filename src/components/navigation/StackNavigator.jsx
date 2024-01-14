import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screens/Home/Home';
import { DetailScreen } from '../screens/Detail/Detail';
import { CatalogScreen } from '../screens/Catalog/Catalog';
import { BasketScreen } from '../screens/Basket/Basket';
import { ProfileScreen } from '../screens/Profile/Profile';
import { FavoriteScreen } from '../screens/Favorite/Favorite';

const HomeStack = createNativeStackNavigator();
const ContactStack = createNativeStackNavigator();

export const HomeStackNavigator = () => {
   return (
      <HomeStack.Navigator>
         <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
         <HomeStack.Screen name="Catalog" component={CatalogScreen} options={{ headerShown: false }} />
         <HomeStack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }} />
         <HomeStack.Screen name="Basket" component={BasketScreen} options={{ headerShown: false }} />
      </HomeStack.Navigator>
   );
};

export const ContactStackNavigator = () => {
   return (
      <ContactStack.Navigator>
         <ContactStack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
         <ContactStack.Screen name="Favorite" component={FavoriteScreen} options={{ headerShown: false }} />
      </ContactStack.Navigator>
   );
};
