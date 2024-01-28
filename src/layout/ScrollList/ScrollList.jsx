import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

import ProductCard from '../../ui/ProductCard/ProductCard';
import Loading from '../../ui/Loading/Loading';

export const ScrollList = ({ renderData = [], getDataUrl = '', captionTitle, navigation }) => {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);

   const navigateDetailScreen = (params) => navigation.navigate('HomeScreen', { screen: 'Detail', params });
   
   const renderItem = ({ item }) => {
      return <ProductCard product={item} navigateDetailScreen={(params) => navigateDetailScreen(params)} />;
   };

   const getData = async () => {
      if (loading) return;
      setLoading(true);

      try {
         const { data } = await axios.get(`${getDataUrl}?page=1&limit=8`);
         setData(data.items);
      } catch (error) {
         alert('На сервере произошла ошибка. Попробуйте позже!');
      }

      setLoading(false);
   };

   useEffect(() => {
      if (renderData.length === 0 && getDataUrl.trim().length !== 0) getData();
      else setData(renderData);
   }, []);

   return (
      <View style={styles.componentWrapper}>
         <View style={{ paddingHorizontal: 8 }}>
            <Text style={styles.captionTitle}>{captionTitle} </Text>
         </View>
         {loading ? (
            <Loading />
         ) : (
            <SafeAreaView style={styles.container}>
               <FlatList
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={(item) => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ paddingHorizontal: 8, gap: 8 }}
               />
            </SafeAreaView>
         )}
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      marginBottom: 25,
      flexDirection: 'row',
      gap: 10,
   },
   captionTitle: {
      marginBottom: 10,
      fontSize: 20,
      fontWeight: '800',
      color: '#333',
   }
});
