import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from '../screens/Home/Home';
import { DetailScreen } from '../screens/Detail/Detail';
import { CatalogScreen } from '../screens/Catalog/Catalog';
import { BasketScreen } from '../screens/Basket/Basket';
import { MenuScreen } from '../screens/Menu/Menu';
import { FavoriteScreen } from '../screens/Favorite/Favorite';

const HomeStack = createNativeStackNavigator();
export const HomeStackScreen = () => {
   return (
      <HomeStack.Navigator>
         <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
         <HomeStack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }} />
         {/* <HomeStack.Screen name="CurrentOrder" component={CurrentOrderScreen} options={{ headerShown: false }} /> */}
         {/* <HomeStack.Screen name="SearchResult" component={SearchResultScreen} options={{ headerShown: false }} /> */}
         {/* <HomeStack.Screen name="ReviewOrder" component={ReviewOrderScreen} options={{ headerShown: false }} /> */}
      </HomeStack.Navigator>
   );
};

const CatalogStack = createNativeStackNavigator();
export const CatalogStackScreen = () => {
   return (
      <CatalogStack.Navigator>
         <CatalogStack.Screen name="Catalog" component={CatalogScreen} options={{ headerShown: false }} />
         {/* <CatalogStack.Screen name="CatalogSectionList" component={CatalogSectionListScreen} options={{ headerShown: false }} /> */}
         {/* <CatalogStack.Screen name="CatalogSection" component={CatalogSectionScreen} options={{ headerShown: false }} /> */}
         <CatalogStack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }} />
         {/* <CatalogStack.Screen name="SearchResult" component={SearchResultScreen} options={{ headerShown: false }} /> */}
      </CatalogStack.Navigator>
   );
};

const FavoriteStack = createNativeStackNavigator();
export const FavoriteStackScreen = () => {
   return (
      <FavoriteStack.Navigator>
         <FavoriteStack.Screen name="Favorite" component={FavoriteScreen} options={{ headerShown: false }} />
         <FavoriteStack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }} />
      </FavoriteStack.Navigator>
   );
};

const BasketStack = createNativeStackNavigator();
export const BasketStackScreen = () => {
   return (
      <BasketStack.Navigator>
         <BasketStack.Screen name="Basket" component={BasketScreen} options={{ headerShown: false }} />
         <BasketStack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }} />
         {/* <BasketStack.Screen name="ReviewOrder" component={ReviewOrderScreen} options={{ headerShown: false }} /> */}
         {/* <BasketStack.Screen name="Order" component={OrderScreen} options={{ headerShown: false }} /> */}
         {/* <BasketStack.Screen name="ProfileList" component={ProfileListScreen} options={{ headerShown: false }} /> */}
      </BasketStack.Navigator>
   );
};

const MenuStack = createNativeStackNavigator();
export const MenuStackScreen = () => {
   return (
      <MenuStack.Navigator>
         <MenuStack.Screen name="Menu" component={MenuScreen} options={{ headerShown: false }} />
         {/* <MenuStack.Screen name="Personal" component={PersonalScreen} options={{ headerShown: false }} /> */}
         {/* <MenuStack.Screen name="CurrentOrder" component={CurrentOrderScreen} options={{ headerShown: false }} /> */}
         {/* <MenuStack.Screen name="HistoryOrder" component={HistoryOrderScreen} options={{ headerShown: false }} /> */}
         {/* <MenuStack.Screen name="WaitList" component={WaitListScreen} options={{ headerShown: false }} /> */}
         {/* <MenuStack.Screen name="ReviewList" component={ReviewListScreen} options={{ headerShown: false }} /> */}
         {/* <MenuStack.Screen name="ProfileList" component={ProfileListScreen} options={{ headerShown: false }} /> */}
         {/* <MenuStack.Screen name="Help" component={HelpScreen} options={{ headerShown: false }} /> */}
         {/* <MenuStack.Screen name="TShipment" component={TShipmentScreen} options={{ headerShown: false }} /> */}
         {/* <MenuStack.Screen name="TPayment" component={TPaymentScreen} options={{ headerShown: false }} /> */}
         {/* <MenuStack.Screen name="TUds" component={TUdsScreen} options={{ headerShown: false }} /> */}
         {/* <MenuStack.Screen name="TOrder" component={TOrderScreen} options={{ headerShown: false }} /> */}
         {/* <MenuStack.Screen name="TAbout" component={TAboutScreen} options={{ headerShown: false }} /> */}
         {/* <MenuStack.Screen name="TContacts" component={TContactsScreen} options={{ headerShown: false }} /> */}
      </MenuStack.Navigator>
   );
};
