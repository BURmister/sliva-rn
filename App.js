// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigator from './src/components/navigation/DrawerNavigator';

const App = () => {
   return (
      <SafeAreaView style={styles.container}>
         <NavigationContainer>
            <DrawerNavigator />
         </NavigationContainer>
         <StatusBar theme={'auto'} />
         {/* <StatusBar theme={'light'} backgroundColor={'#f6f6f6'} style={'light'} barStyle={'dark-content'} /> */}
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      // padding: 4,
      flex: 1,
      backgroundColor: '#f6f6f6',
   },
});

export default App;
