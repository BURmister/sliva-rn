// import { StatusBar } from 'expo-status-bar';
// import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import InfiniteScroll from '../../components/InfiniteScroll/InfiniteScroll';

export const FavoriteScreen = ({ navigation }) => {
   const navigateDetailScreen = (params) => navigation.navigate('DetailScreen', params);

   return (
      <SafeAreaView style={styles.container}>
         <Text>Favorite </Text>
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
