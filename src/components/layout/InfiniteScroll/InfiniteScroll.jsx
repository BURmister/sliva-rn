import { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

import ProductCard from '../../ui/ProductCard/ProductCard';
import Loading from '../../ui/Loading/Loading';
import HomeSections from '../HomeSections/HomeSections';

const InfiniteScroll = ({ renderData = [], getDataUrl = "", captionTitle, navigateDetailScreen }) => {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(false);
   const page = useRef(1);

   const renderItem = ({ item, index }) => {
      return <ProductCard product={item} navigateDetailScreen={(params) => navigateDetailScreen(params)} />;
   };

   _headerComponent = () => <HomeSections navigateDetailScreen={(params) => navigateDetailScreen(params)} />;

   const getData = async () => {
      if (loading || page.current === null) return;
      setLoading(true);

      try {
         const { data: newData } = await axios.get(`${getDataUrl}?page=${page.current}&limit=4`);
         
         if (data.length === 0) setData(newData.items);
         else setData([...data, ...newData.items]);

         if (page.current + 1 <= Number(newData.meta.total_pages)) page.current += 1;
         else page.current = null;
      } catch (error) {
         alert('На сервере произошла ошибка. Попробуйте позже!');
      }

      setLoading(false);
   };

   useEffect(() => {
      if (renderData.length === 0 && getDataUrl.trim().length !== 0) getData();
      else setData(renderData);
   }, []);

   // if (loading) return <Loading style={[styles.container, styles.loadingContainer]} />;

   const ListEndLoader = () => {
      if (loading) {
         return <ActivityIndicator size={'large'} />;
      }
   };

   return (
      <SafeAreaView style={styles.container}>
         <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            ListHeaderComponent={_headerComponent}
            // ListHeaderComponent={() => (
            //    <>
            //       <HomeSections navigateDetailScreen={(params) => navigateDetailScreen(params)} />
            //       <Text style={styles.captionTitle}>{captionTitle}</Text>
            //    </>
            // )}
            onEndReached={getData}
            // onEndReachedThreshold={0.8}
            ListFooterComponent={ListEndLoader} // Loader when loading next page.
         />
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   captionTitle: {
      // marginBottom: 10,
      fontSize: 20,
      fontWeight: '800',
      color: '#333',
   }
});

export default InfiniteScroll;
