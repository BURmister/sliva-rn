import { FlatList, Image, SafeAreaView, StyleSheet, View } from 'react-native';

import Swiper from 'react-native-swiper';

export const ImageSwiper = ({ navigateDetailScreen, data }) => {
   return (
      <SafeAreaView> 
         <Swiper style={{ height: 320 }} loop={false} showsButtons={false} autoplay activeDotColor={'#40b484'} autoplayTimeout={7.5}>
            {
               data.map((item) => (
                  <View key={item.id} style={{ flex: 1, justifyContent: 'stretch', alignItems: 'stretch' }}>
                     <Image
                        style={{ height: 'auto', minHeight: 320, width: '100%', objectFit: 'contain' }}
                        source={{ uri: item.uri }}
                     />
                  </View>
               ))
            }
         </Swiper>
      </SafeAreaView>
   );
};

export const ImageList = ({ navigateDetailScreen, data }) => {
   const renderItem = ({ item }) => {
      console.log(item.uri);
      return <Image style={{ height: 180, width: 410, borderRadius: 4, objectFit: 'cover'}} source={{ uri: item.uri }} />;
   };

   return (
      <SafeAreaView style={{ marginVertical: 16 }}>
         <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => {
               return (
                  <View
                     style={{
                        height: '100%',
                        width: 8,
                     }}
                  />
               );
            }}
         />
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({});