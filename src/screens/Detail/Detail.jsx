import { useEffect, useState, useCallback, useRef } from 'react';
import { Image, FlatList, View, StatusBar, Dimensions, StyleSheet, Platform, Animated, Text, ScrollView, TouchableOpacity } from 'react-native';

import axios from 'axios';

import Loading from '../../ui/Loading/Loading';
import NoPhotoImg from '../../../assets/no_photo.png';

const { width, height } = Dimensions.get('screen');
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

export const DetailScreen = ({ route, navigation }) => {
   const { id, title } = route.params;

   const [product, setProduct] = useState([]);
   const [loading, setLoading] = useState(false);

   const scrollX = useRef(new Animated.Value(0)).current;

   const getData = async () => {
      setLoading(true);
      if (loading) return;

      try {
         const { data } = await axios.get('https://24135ab27ba65bc5.mokky.dev/products/' + id);
         setProduct(data);
      } catch (error) {
         alert('На сервере произошла ошибка. Попробуйте позже!');
      }

      navigation.setOptions({ title: title, headerShown: true });
      setLoading(false);
   };

   useEffect(() => {
      getData();
   }, []);

   if (loading) return <Loading style={[styles.container, styles.loadingContainer]} />;

   return (
      <View style={{ position: 'relative', paddingBottom: 48, flex: 1, backgroundColor: '#fff' }}>
         <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
            <View style={{ position: 'relative' }}>
               <Animated.FlatList
                  bounces={false}
                  horizontal={true}
                  snapToInterval={width}
                  decelerationRate="fast"
                  showsHorizontalScrollIndicator={false}
                  data={product.images}
                  keyExtractor={(_, index) => index.toString()}
                  renderItem={({ item }) => {
                     return <Image style={{ width, height: width * 1, objectFit: 'cover' }} source={{ uri: item }} />;
                  }}
                  ListEmptyComponent={() => {
                     return <Image style={{ width, height: width * 1, objectFit: 'cover' }} source={NoPhotoImg} />;
                  }}
                  onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })}
               />
               <View style={{ position: 'absolute', bottom: 8, left: 0, height: 16, width: '100%', alignItems: 'center' }}>
                  <View style={{ flexDirection: 'row', gap: 8 }}>
                     {product.images &&
                        product.images.map((_, index) => {
                           return <View key={index} style={{ width: 8, height: 8, borderRadius: 8 / 2, backgroundColor: '#333' }} />;
                        })}
                     <Animated.View
                        style={{
                           position: 'absolute',
                           left: -16 / 4,
                           top: -16 / 4,
                           width: 16,
                           height: 16,
                           borderRadius: 16 / 2,
                           borderWidth: 1,
                           borderColor: '#333',
                           transform: [
                              {
                                 translateX: Animated.divide(scrollX, width).interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 16],
                                 }),
                              },
                           ],
                        }}
                     />
                  </View>
               </View>
            </View>
            <View style={{ paddingVertical: 16, paddingHorizontal: 8, gap: 16 }}>
               <View style={{ flexDirection: 'row', gap: 24 }}>
                  <Text style={{ flex: 1, fontSize: 18, lineHeight: 24, fontWeight: 'bold', color: '#333' }}>{product.name}</Text>
                  <View
                     style={{
                        paddingVertical: 8,
                        paddingHorizontal: 16,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1,
                        borderColor: '#aa51b9',
                     }}>
                     <Text style={{ color: '#aa51b9', fontSize: 14, fontWeight: 'bold', lineHeight: 16 }}>осталось</Text>
                     <Text style={{ color: '#aa51b9', fontSize: 14, fontWeight: 'bold', lineHeight: 16 }}>3 шт</Text>
                  </View>
               </View>
               <View>
                  <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 8 }}>
                     <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{product.price}</Text>
                     <Text style={{ fontSize: 14 }}>₽/{product.measure} </Text>
                  </View>
                  <Text style={{ color: '#40b484' }}>сливная цена</Text>
               </View>
               <Text>
                  Длинное описание. Длинное описание. Длинное описание. Длинное описание. Длинное описание. Длинное описание. Длинное описание.
                  Длинное описание. Длинное описание. Длинное описание. Длинное описание. Длинное описание. Длинное описание. Длинное описание.
               </Text>
               <Text>
                  Длинное описание. Длинное описание. Длинное описание. Длинное описание. Длинное описание. Длинное описание. Длинное описание.
                  Длинное описание. Длинное описание. Длинное описание. Длинное описание. Длинное описание. Длинное описание. Длинное описание.
               </Text>
               <Text>
                  Длинное описание. Длинное описание. Длинное описание. Длинное описание. Длинное описание. Длинное описание. Длинное описание.
                  Длинное описание. Длинное описание. Длинное описание. Длинное описание. Длинное описание. Длинное описание. Длинное описание.
               </Text>
               <Text>
                  Длинное описание. Длинное описание. Длинное описание. Длинное описание. Длинное описание. Длинное описание. Длинное описание.
                  Длинное описание. Длинное описание. Длинное описание. Длинное описание. Длинное описание. Длинное описание. Длинное описание.
               </Text>
            </View>
         </ScrollView>
         <View
            style={{
               position: 'absolute',
               bottom: 0,
               left: 0,
               width: '100%',
               flexDirection: 'row',
               borderTopWidth: 1,
               borderTopColor: '#333',
               backgroundColor: '#fff',
            }}>
            <TouchableOpacity style={{ paddingHorizontal: 16, height: 48, flex: 1, alignItems: 'flex-start', justifyContent: 'center' }}>
               <Text style={{ fontSize: 16, fontWeight: '300', color: '#333' }}>В корзину </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center', borderLeftWidth: 1, borderLeftColor: '#333' }}>
               <TouchableOpacity
                  style={{
                     paddingHorizontal: 8,
                     height: 48,
                     alignItems: 'flex-start',
                     justifyContent: 'center',
                  }}>
                  <Text style={{ fontSize: 16, fontWeight: '300', color: '#333' }}> - </Text>
               </TouchableOpacity>
               <View>
                  <Text>5</Text>
               </View>
               <TouchableOpacity
                  style={{
                     marginRight: 8,
                     paddingHorizontal: 8,
                     height: 48,
                     alignItems: 'flex-start',
                     justifyContent: 'center',
                  }}>
                  <Text style={{ fontSize: 16, fontWeight: '300', color: '#333' }}> + </Text>
               </TouchableOpacity>
            </View>
         </View>
         <StatusBar animated={true} backgroundColor="#ffffff" barStyle={'dark-content'} showHideTransition={'fade'} />
      </View>
   );
};

const styles = StyleSheet.create({});
