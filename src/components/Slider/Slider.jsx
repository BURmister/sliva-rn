import { FlatList, Image, SafeAreaView, StyleSheet, View, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const ImageList = ({ navigateDetailScreen, data }) => {
   return (
      <SafeAreaView style={{ marginVertical: 8 }}>
         <FlatList
            data={data}
            renderItem={({ item }) => {
               return <Image style={{ height: width * 0.4, width: width * 0.8, borderRadius: 8, objectFit: 'cover' }} source={{ uri: item.uri }} />;
            }}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 8 }}
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