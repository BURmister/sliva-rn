import { useEffect, useState, useCallback, useRef } from 'react';
import { Image, FlatList, View, StatusBar, Dimensions, StyleSheet, Platform, SafeAreaView, Animated, Text } from 'react-native';
// import Svg, { Path, Circle, G, Defs, LinearGradient, Stop, ClipPath, Rect } from 'react-native-svg';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useSharedValue, withSpring } from 'react-native-reanimated';

import axios from 'axios';

import Loading from '../../ui/Loading/Loading';
import NoPhotoImg from '../../../assets/no_photo.png';

const { width, height } = Dimensions.get('screen');
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const IMAGE_WIDTH = width;
const IMAGE_HEIGHT = height * 0.75;
const DOT_SIZE = 8;
const DOT_SPACE = 8;
const DOT_INDICATOR_SIZE = DOT_SIZE + DOT_SPACE;
const SHEET_BORDER_RADIUS = 8;

export const DetailScreen = ({ route, navigation }) => {
   const { id, title } = route.params;

   const [product, setProduct] = useState([]);
   const [loading, setLoading] = useState(false);

   const scrollY = useRef(new Animated.Value(0)).current;
   const scrollX = useRef(new Animated.Value(0)).current;
   const sheetBorderRadius = useSharedValue(SHEET_BORDER_RADIUS);

   // console.log(navigation.openDrawer())

   const getData = async () => {
      console.log(2);
      setLoading(true);
      if (loading) return;

      try {
         console.log(3);
         const { data } = await axios.get('https://24135ab27ba65bc5.mokky.dev/products/' + id);
         setProduct(data);
         console.log(data);
      } catch (error) {
         alert('На сервере произошла ошибка. Попробуйте позже!');
      }

      navigation.setOptions({ title: title, headerShown: true });
      setLoading(false);
   };

   const handleSheetChanges = useCallback((index) => {
      console.log('handleSheetChanges', index);
      sheetBorderRadius.value = withSpring(SHEET_BORDER_RADIUS - SHEET_BORDER_RADIUS * index, {
         mass: 1,
         stiffness: 100,
         damping: 10,
      });
      console.log(sheetBorderRadius.value);
   }, []);

   useEffect(() => {
      console.log(1);
      getData();
   }, []);

   if (loading) return <Loading style={[styles.container, styles.loadingContainer]} />;

   return (
      <View style={{ flex: 1 }}>
         <StatusBar
            // translucent={true} backgroundColor={'transparent'} barStyle="dark-content"
            hidden
         />
         <GestureHandlerRootView style={{ flex: 1 }}>
            <View styles={{ height: IMAGE_HEIGHT, overflow: 'hidden' }}>
               <Animated.FlatList
                  data={product.images}
                  keyExtractor={(_, index) => index.toString()}
                  snapToInterval={IMAGE_WIDTH}
                  decelerationRate="fast"
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  bounces={false}
                  horizontal={true}
                  onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX, y: scrollY } } }], { useNativeDriver: true })}
                  renderItem={({ item }) => {
                     return (
                        <View>
                           <Image style={styles.image} source={{ uri: item }} />
                        </View>
                     );
                  }}
               />
               {product.images && (
                  <View
                     style={[
                        styles.pagination,
                        { left: width * 0.5 - (DOT_SIZE * product.images.length + DOT_SPACE * (product.images.length - 1)) * 0.5 },
                     ]}>
                     {product.images.map((_, index) => {
                        return <View key={index} style={styles.dot} />;
                     })}
                     <Animated.View
                        style={[
                           styles.dotIndicator,
                           {
                              transform: [
                                 {
                                    translateX: Animated.divide(scrollX, IMAGE_WIDTH).interpolate({
                                       inputRange: [0, 1],
                                       outputRange: [0, DOT_INDICATOR_SIZE],
                                    }),
                                 },
                              ],
                           },
                        ]}
                     />
                  </View>
               )}
            </View>
            <BottomSheet
               initialSnapIndex={0}
               snapPoints={[height - IMAGE_HEIGHT, height]}
               onChange={handleSheetChanges}
               backgroundStyle={{ borderRadius: sheetBorderRadius.value }}>
               <BottomSheetScrollView style={{ backgroundColor: '#fff' }} contentContainerStyle={{ padding: 20 }}>
                  <Text style={{ fontSize: 18, fontWeight: '800', textTransform: 'uppercase' }}>{product.name}</Text>
                  <Text style={{ fontSize: 16 }}>{product.price} ₽ </Text>
                  {/* <View style={{ marginVertical: 20 }}>
                     {product.description.map((item, index) => {
                        return (
                           <Text key={index} style={{ marginBottom: 10, lineHeight: 22 }}>
                              {item}
                           </Text>
                        );
                     })}
                  </View> */}
               </BottomSheetScrollView>
            </BottomSheet>
         </GestureHandlerRootView>
      </View>
   );
};

const styles = StyleSheet.create({
   image: {
      width: IMAGE_WIDTH,
      height: IMAGE_HEIGHT,
      objectFit: 'cover',
   },
   pagination: {
      position: 'absolute',
      top: IMAGE_HEIGHT * 0.73,
      flexDirection: 'row',
      gap: DOT_SPACE,
   },
   dot: {
      // marginBottom: DOT_SPACE,
      width: DOT_SIZE,
      height: DOT_SIZE,
      borderRadius: DOT_SIZE / 2,
      backgroundColor: '#aa51b9',
   },
   dotIndicator: {
      // marginBottom: DOT_INDICATOR_SIZE,
      position: 'absolute',
      top: -DOT_SIZE / 2,
      left: -DOT_SIZE / 2,
      width: DOT_INDICATOR_SIZE,
      height: DOT_INDICATOR_SIZE,
      borderRadius: DOT_INDICATOR_SIZE / 2,
      borderWidth: 1,
      borderColor: '#aa51b9',
   },
});
