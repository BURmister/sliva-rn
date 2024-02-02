import { SafeAreaView, StyleSheet } from 'react-native';
import HomeSections from '../../components/HomeSections/HomeSections';


import * as NavigationBar from 'expo-navigation-bar';

export const HomeScreen = ({ navigation }) => {
   NavigationBar.setBackgroundColorAsync('white');
   NavigationBar.setButtonStyleAsync('dark');

   
   


   return (
      <SafeAreaView style={styles.container}>
         <HomeSections navigation={navigation} />
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#f6f6f6',
   },
   loadingContainer: {
      justifyContent: 'center',
      alignItems: 'center',
   },
});