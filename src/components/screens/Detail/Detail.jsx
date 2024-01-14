// import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Pressable, TouchableOpacity, Image, RefreshControl, ScrollView } from 'react-native';
import Svg, { Path, Circle, G, Defs, LinearGradient, Stop, ClipPath, Rect } from 'react-native-svg';

import axios from 'axios';

import Loading from '../../ui/Loading/Loading';

import NoPhotoImg from '../../../../assets/no_photo.png';

export const DetailScreen = ({ route, navigation }) => {
   const [product, setProduct] = useState([]);
   const [loading, setLoading] = useState(false);

   const { id, title } = route.params;
   console.log(navigation.openDrawer())

   const getData = async () => {
      setLoading(true);
      if (loading) return;

      try {
         console.log('https://24135ab27ba65bc5.mokky.dev/products/' + id);
         console.log(axios.get('https://24135ab27ba65bc5.mokky.dev/products/' + id));
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
      <SafeAreaView style={styles.container}>
         <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={loading} onRefresh={getData} colors={['#aa51b9', '#3aaff1', '#40b484']} />}>


                  <View style={styles.markerOverlay}>
                     <View style={styles.specPriceMarker}>
                        <Text style={styles.specPriceMarkerText}>Спеццена </Text>
                        <View style={styles.markerList}>
                           <View>
                              <Svg width="28" height="28" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <Circle cx="22.3263" cy="22.6737" r="22.3263" fill="#3AAFF1"></Circle>
                                 <Path d="M29.7411 26.9512V21.1567H27.2781V19.7615H33.9837V21.1567H31.5065V26.9512H29.7411Z" fill="white"></Path>
                                 <Path
                                    d="M19.4299 26.9512V19.7615H21.0387V25.2H20.6116L24.6976 19.7615H26.1641V26.9512H24.5553V21.4984H24.9966L20.8963 26.9512H19.4299Z"
                                    fill="white"></Path>
                                 <Path
                                    d="M10.3542 26.9512L13.7 22.8367V23.6482L10.5393 19.7615H12.6464L14.7108 22.4238H14.0701L16.1345 19.7615H18.2273L15.0952 23.6482V22.8367L18.4267 26.9512H16.3053L14.0701 24.0895H14.7108L12.4613 26.9512H10.3542Z"
                                    fill="white"></Path>
                              </Svg>
                           </View>
                           <View>
                              <Svg width="28" height="28" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <G clip-Path="url(#clip0_321_2171)">
                                    <Path
                                       d="M22.9381 45.9027C35.5869 45.9027 45.8408 35.6488 45.8408 23C45.8408 10.3512 35.5869 0.09729 22.9381 0.09729C10.2893 0.09729 0.0354004 10.3512 0.0354004 23C0.0354004 35.6488 10.2893 45.9027 22.9381 45.9027Z"
                                       fill="#aa51b9"></Path>
                                    <Path
                                       d="M23.7077 21.5935C23.7077 20.8681 23.7077 20.1958 23.7077 19.5235C23.7077 19.0281 23.7077 18.5327 23.7077 18.0373C23.7077 17.8869 23.7254 17.7808 23.92 17.7808C24.6896 17.7808 25.4681 17.7808 26.2731 17.7808C26.2731 17.9046 26.2908 18.0196 26.2908 18.1258C26.2908 22.0711 26.2908 26.0165 26.2908 29.9708C26.2908 30.2538 26.2023 30.3158 25.9369 30.3069C25.2204 30.2892 24.495 30.3069 23.7342 30.3069V29.2985C23.5219 29.4931 23.3716 29.6523 23.2035 29.7761C22.0358 30.6696 20.7266 30.7315 19.4085 30.3069C17.6216 29.7231 16.6219 28.3873 16.2946 26.5827C15.9762 24.8135 16.3123 23.1769 17.5596 21.7881C18.8954 20.3019 21.3989 19.9215 22.9912 21.0008C23.23 21.16 23.4335 21.3635 23.7077 21.5935ZM18.86 25.4592C18.8689 25.6096 18.8689 25.7688 18.8954 25.9192C19.0546 26.9277 19.5766 27.6708 20.5673 27.9981C21.5935 28.3342 22.6108 28.0335 23.2477 27.2285C23.9023 26.3969 23.9908 25.4415 23.6635 24.4685C23.23 23.1769 21.9827 22.5488 20.6646 22.9027C19.5589 23.1946 18.8689 24.1854 18.86 25.4592Z"
                                       fill="white"></Path>
                                    <Path
                                       d="M35.8533 21.3192C35.5525 22.0181 35.2695 22.6639 34.9776 23.3273C34.5529 23.1681 34.146 23 33.7214 22.8673C32.9518 22.6285 32.1556 22.4781 31.3418 22.6196C31.1206 22.655 30.9083 22.7435 30.7137 22.8585C30.4749 23 30.3687 23.2389 30.4129 23.5219C30.4483 23.7962 30.6429 23.9465 30.8818 23.9996C31.4568 24.1323 32.0318 24.2208 32.6068 24.3535C33.2437 24.5039 33.9072 24.6189 34.5087 24.8754C36.676 25.7954 36.3929 28.5112 35.0483 29.5638C34.3937 30.0769 33.6506 30.36 32.8368 30.4573C31.3329 30.6431 29.8468 30.5546 28.4226 29.9796C28.051 29.8292 27.7149 29.6169 27.3345 29.4312C27.6972 28.7412 28.0245 28.1042 28.3518 27.4762C28.8295 27.6885 29.2806 27.9273 29.7495 28.0777C30.7049 28.3873 31.6868 28.4846 32.6775 28.2635C32.8279 28.2281 32.9783 28.1662 33.1022 28.0865C33.5975 27.7504 33.571 27.1223 33.0049 26.9189C32.4564 26.7242 31.8637 26.6535 31.2976 26.5208C30.6695 26.3704 30.0149 26.2642 29.4133 26.0431C28.4049 25.6627 27.8033 24.9108 27.7326 23.805C27.6529 22.5842 28.0952 21.6289 29.1656 20.9919C29.9795 20.5142 30.8818 20.4081 31.7929 20.4081C32.9252 20.4081 34.0399 20.5673 35.0925 21.0008C35.3314 21.0981 35.5614 21.2042 35.8356 21.3192H35.8533Z"
                                       fill="white"></Path>
                                    <Path
                                       d="M15.0915 20.6558C15.0915 20.7177 15.1092 20.7708 15.1092 20.8238C15.1092 22.6815 15.1357 24.5392 15.1004 26.3969C15.0561 28.9269 13.4019 30.3069 11.0931 30.5015C9.99613 30.59 8.92575 30.4661 7.95267 29.9088C6.89998 29.3073 6.2896 28.3873 6.07729 27.2019C6.01536 26.8569 5.98883 26.5031 5.97998 26.1581C5.97998 24.3888 5.98883 22.6285 5.99767 20.8592C5.99767 20.7973 6.00652 20.7354 6.01537 20.6646H8.59844C8.59844 20.7885 8.59844 20.9123 8.59844 21.0273C8.59844 22.5931 8.58075 24.1677 8.58075 25.7335C8.58075 25.9281 8.58075 26.1227 8.60729 26.3173C8.73998 27.5558 9.58036 28.2281 10.8188 28.0865C11.7654 27.9804 12.3581 27.4054 12.4819 26.4588C12.4996 26.2996 12.5084 26.1315 12.5084 25.9635C12.5173 24.2561 12.5261 22.5577 12.535 20.8504C12.535 20.7885 12.535 20.7265 12.5527 20.6558H15.1004H15.0915Z"
                                       fill="white"></Path>
                                    <Path
                                       d="M37.9501 19.3288C39.0249 19.3288 39.8962 18.4575 39.8962 17.3827C39.8962 16.3078 39.0249 15.4365 37.9501 15.4365C36.8752 15.4365 36.0039 16.3078 36.0039 17.3827C36.0039 18.4575 36.8752 19.3288 37.9501 19.3288Z"
                                       fill="#FF8500"></Path>
                                    <Path d="M45.1407 2.77031L44.021 1.65063L1.84861 43.823L2.96828 44.9427L45.1407 2.77031Z" fill="#1B1464"></Path>
                                 </G>
                                 <Defs>
                                    <LinearGradient
                                       id="paint0_linear_321_2171"
                                       x1="8.84617"
                                       y1="42.3819"
                                       x2="36.3135"
                                       y2="4.61768"
                                       gradientUnits="userSpaceOnUse">
                                       <Stop Stop-color="#8700E4"></Stop>
                                       <Stop offset="1" Stop-color="#CB008F"></Stop>
                                    </LinearGradient>
                                    <ClipPath id="clip0_321_2171">
                                       <Rect width="46" height="46" fill="white"></Rect>
                                    </ClipPath>
                                 </Defs>
                              </Svg>
                           </View>
                        </View>
                     </View>
                  </View>
                  <View style={styles.productCardContent}>
                     <View style={styles.cardTools}>
                        <TouchableOpacity style={({ pressed }) => [{ transfrom: pressed ? [{ scale: 0.5 }] : [{ scale: 1 }] }]}>
                           <View style={{ width: 45, height: 45 }}>
                              <Svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <Path
                                    d="M20.9365 34.3767L8.61025 22.0504C-1.75499 11.6852 10.5712 -0.641039 20.9365 9.7242C31.4885 -0.8278 43.8147 11.4984 33.2627 22.0504L20.9365 34.3767Z"
                                    fill="#D1D6D9"
                                    stroke="#D1D6D9"
                                    stroke-width="2"
                                    stroke-miterlimit="10"></Path>
                              </Svg>
                           </View>
                        </TouchableOpacity>
                     </View>
                     <View style={styles.productImgWrapper}>
                        <Image style={styles.productImg} source={NoPhotoImg} />
                     </View>
                     <View style={styles.productPriceWrapper}>
                        <View style={styles.productPrice}>
                           <Text style={styles.productPriceText}>55.</Text>
                           <Text style={styles.productPriceKopinki}>0</Text>
                        </View>
                        <Text style={styles.productPriceMeasure}>₽/{product.measure} </Text>
                     </View>
                     <View style={styles.productNameWrapper}>
                        <TouchableOpacity>
                           <Text style={styles.productName}>{product.name}</Text>
                        </TouchableOpacity>
                     </View>
                     <View style={styles.cardRatingRow}>
                        <Text style={styles.productWeight}>{product.weight} г </Text>
                     </View>
                     <TouchableOpacity style={styles.cardButtonToBasket}>
                        <Text style={styles.cardButtonToBasketText}>В корзину </Text>
                     </TouchableOpacity>
                  </View>


         </ScrollView>
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   productCard: {
      position: 'relative',

      marginRight: 4,
      paddingTop: 15,
      paddingHorizontal: 5,
      paddingBottom: 5,

      flex: 1,

      width: 200,
      // minHeight: 300,

      backgroundColor: '#fff',
      borderRadius: 10,
      // borderWidth: 2,
      // borderColor: '#777',
      // elevation: 4,

      zIndex: 1,
   },
   markerOverlay: {
      position: 'absolute',
      zIndex: 2,
   },
   specPriceMarker: {
      width: 80,
      height: 20,

      fontSize: 12,

      borderRadius: 4,
      backgroundColor: '#aa51b9',
   },
   specPriceMarkerText: {
      color: '#fff',
      textAlign: 'center',
   },
   markerList: {
      marginTop: 5,
      marginLeft: 5,

      flexDirection: 'column',
      gap: 5,
   },
   productCardContent: {
      flex: 1,
   },
   cardTools: {
      position: 'absolute',

      top: -10,
      right: 5,

      zIndex: 2,
   },
   productImg: {
      width: '100%',
      height: 110,
      objectFit: 'contain',
   },
   productPriceWrapper: {
      marginTop: 10,
      flexDirection: 'row',
      alignItems: 'baseline',
   },
   productPrice: {
      marginRight: 5,
      flexDirection: 'row',
   },
   productPriceText: {
      fontSize: 18,
      fontWeight: '900',
      // lineHeight: 25,
      color: '#333',
   },
   productPriceKopinki: {
      fontSize: 12,
      fontWeight: '900',
      // lineHeight: 25,
      color: '#333',
      verticalAlign: 'top',
   },
   productPriceMeasure: {
      fontSize: 12,
      fontWeight: '500',
      // lineHeight: 25,
      color: '#333',
   },
   productName: {
      marginVertical: 7,

      fontSize: 12,
      fontWeight: '700',
      lineHeight: 15,
   },
   productWeight: {
      marginBottom: 10,

      fontSize: 12,
      fontWeight: '400',
      color: '#829297',
   },
   cardButtonToBasket: {
      width: '100%',
      height: 33,

      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',

      fontSize: 12,
      color: '#fff',

      borderRadius: 4,
      backgroundColor: '#aa51b9',
   },
   cardButtonToBasketText: {
      fontSize: 12,
      color: '#fff',
   },
});