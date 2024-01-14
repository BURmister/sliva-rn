// import { StatusBar } from 'expo-status-bar';
// import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import InfiniteScroll from '../../layout/InfiniteScroll/InfiniteScroll';

export const CatalogScreen = ({ navigation }) => {
   const navigateDetailScreen = (params) => navigation.navigate('DetailScreen', params);

   return (
      <SafeAreaView style={styles.container}>
         <Text>Catalog </Text>
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      marginHorizontal: 4,
      flex: 1,
      backgroundColor: '#f6f6f6',
      justifyContent: 'center',
      alignItems: 'center',
   },
});
