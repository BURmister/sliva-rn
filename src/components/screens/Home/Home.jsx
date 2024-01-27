import { SafeAreaView, StyleSheet } from 'react-native';
import HomeSections from '../../layout/HomeSections/HomeSections';

export const HomeScreen = ({ navigation }) => {
   const navigateDetailScreen = (params) => navigation.navigate('HomeScreen', { screen: 'Detail', params });

   return (
      <SafeAreaView style={styles.container}>
         <HomeSections navigateDetailScreen={(params) => navigateDetailScreen(params)} />
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      marginHorizontal: 4,
      flex: 1,
      backgroundColor: '#f6f6f6',
   },
   loadingContainer: {
      justifyContent: 'center',
      alignItems: 'center',
   },
});