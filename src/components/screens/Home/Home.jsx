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

// export const HomeScreen = ({ navigation }) => {
//    const navigateDetailScreen = (params) => navigation.navigate('DetailScreen', params);

//    return (
//       <SafeAreaView style={styles.container}>
//          <InfiniteScroll getDataUrl={'https://24135ab27ba65bc5.mokky.dev/products'} captionTitle={'Бесконечный список товаров'} navigateDetailScreen={(params) => navigateDetailScreen(params)} />
//       </SafeAreaView>
//    );
// };

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