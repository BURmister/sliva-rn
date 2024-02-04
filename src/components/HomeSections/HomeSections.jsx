import { memo, useState, useRef } from 'react';
import {
   RefreshControl,
   SafeAreaView,
   StyleSheet,
   Platform,
   Dimensions,
   TouchableOpacity,
   ScrollView,
   StatusBar,
   View,
   Text,
   Animated,
   FlatList,
   Image,
   useColorScheme,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ScrollList } from '../ScrollList/ScrollList';
import { ImageList } from '../Slider/Slider';
import { Stories } from '../Stories/Stories';
import { ActionCard } from '../../ui/Card/ActionCard';
import { BoxIcon } from '../../ui/Svg/Svg';
import { Greeting } from '../../ui/Greeting/Greeting';

const { width, height } = Dimensions.get('screen');

const OVERLAY_HEIGHT = height * 0.6 + 8;

const bannerOverlay = [
   {
      photo: 'https://88227.selcdn.ru/cm-catalog-api-prod/story_media/817210af-d4cb-4045-be1e-d89af65aebf7.jpg',
      title: 'Какие фрукты взять зимой?'
   },
   {
      photo: 'https://88227.selcdn.ru/cm-catalog-api-prod/story_media/fac07c3b-f9b1-4cf6-88d6-34d5649627a5.jpg',
      title: 'Вкусняшки и напитки'
   },
   {
      photo: 'https://88227.selcdn.ru/cm-catalog-api-prod/story_media/67c05d7e-c320-4382-bef4-447d0ca48869.jpg',
      title: 'Взять на прогулку'
   },
   {
      photo: 'https://88227.selcdn.ru/cm-catalog-api-prod/story_media/752b4f6d-5ca6-4783-9a45-18f3a1c4e5f7.jpg',
      title: 'Правильное питание'
   }
];

const stories = [
   {
      id: '1',
      name: 'Куртка Бейна =/',
      imgUrl: 'https://i.pinimg.com/originals/fd/e9/1c/fde91cd80af36bc4affbd5271bb4ad1b.jpg',
      stories: [
         { id: 'story1', sourceUrl: 'https://i.pinimg.com/564x/ca/d9/d7/cad9d767eec5b8722c4899b70b7e097f.jpg' },
         { id: 'story2', sourceUrl: 'https://i.pinimg.com/originals/32/32/73/323273cdf5b76b603eac387e1d1c6370.jpg' },
      ],
   },
   {
      id: '2',
      name: 'Врум... Врум? Врум!',
      imgUrl: 'https://w0.peakpx.com/wallpaper/450/372/HD-wallpaper-nfs-most-wanted-bmw-m3-bmw-m3-gtr-nfs-monst-wanted.jpg',
      stories: [
         { id: 'story1', sourceUrl: 'https://i.pinimg.com/originals/74/f2/af/74f2af8a73a3e4a96e89bcb07c13795d.jpg' },
         { id: 'story2', sourceUrl: 'https://www.carchaseheroes.com/uploads/cars/img1/2017-Camaro-zl1-yellow-bumblebee-.jpg' },
         { id: 'story3', sourceUrl: 'https://motor.elpais.com/wp-content/uploads/2017/06/Dodge-Challenger-SRT-Demon-22-1046x616.jpg' },
         {
            id: 'story4',
            sourceUrl: 'https://www.carmodelfactory.com/cdn/shop/products/118GTAPorsche911GT3RSPorsche992alloycarmodel_10_1024x1024.jpg?v=1671761057',
         },
         {
            id: 'story5',
            sourceUrl:
               'https://www.southwestjournal.com/wp-content/uploads/2023/08/Nissan-R34-GT-R-Skyline-Night-Drive-_-Shoots-Flames-4K-2-39-screenshot.jpg',
         },
      ],
   },
];

const HomeSections = memo(function HomeSections({ navigation }) {
   const [laoding, setLoading] = useState(false);
   const [barBackground, setBarBackground] = useState('transparent');

   const scrollY = useRef(new Animated.Value(0)).current;
   const colorScheme = useColorScheme();

   const storeData = async (key, value) => {
      try {
         await AsyncStorage.setItem(key, value);
      } catch (e) {
         // saving error
      }
   };

   const getData = async (key) => {
      try {
         const value = await AsyncStorage.getItem(key);
         if (value !== null) return value;
      } catch (e) {
         // error reading value
      }
   };

   _onRefresh = () => {
      if (laoding) return;
      setLoading(true);
      // storeData('token', 'JWT_SECRET');

      setTimeout(() => {
         setLoading(false);
         getData('token');
      }, 2000);
   };

   handleScroll = (event) => {
      if (event.nativeEvent.contentOffset.y < OVERLAY_HEIGHT * 0.8) {
         if (barBackground === 'transparent') return;
         return setBarBackground('transparent');
      } 
      
      if (event.nativeEvent.contentOffset.y >= OVERLAY_HEIGHT * 0.8) {
         if (barBackground === '#f6f6f6') return;
         return setBarBackground('#f6f6f6');         
      }
   };

   return (
      <SafeAreaView style={{ flex: 1 }}>
         <Animated.ScrollView
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={laoding} onRefresh={_onRefresh} colors={['#aa51b9']} tintColor={'#aa51b9'} />}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], {
               useNativeDriver: true,
               listener: (event) => this.handleScroll(event),
            })}>
            <View style={{ overflow: 'hidden', backgroundColor: colorScheme === 'light' ? '#f6f6f6' : '#232323' }}>
               <Animated.View
                  style={{
                     height: OVERLAY_HEIGHT,
                     width: width,
                     transform: [{ translateY: scrollY }],
                     opacity: scrollY.interpolate({
                        inputRange: [0, OVERLAY_HEIGHT],
                        outputRange: [1, 0],
                        extrapolate: 'clamp',
                     }),
                  }}>
                  <FlatList
                     bounces={false}
                     horizontal={true}
                     snapToInterval={width}
                     decelerationRate="fast"
                     disableIntervalMomentum
                     showsHorizontalScrollIndicator={false}
                     data={bannerOverlay}
                     keyExtractor={(_, index) => index.toString()}
                     renderItem={({ item }) => {
                        return (
                           <View style={{ position: 'relative' }}>
                              <Image style={{ width, height: OVERLAY_HEIGHT, objectFit: 'cover' }} source={{ uri: item.photo }} />
                              <Text
                                 style={{
                                    position: 'absolute',
                                    paddingHorizontal: 8,
                                    bottom: 32,
                                    left: 0,
                                    fontSize: 18,
                                    fontWeight: '600',
                                    color: '#fff',
                                 }}>
                                 {item.title}
                              </Text>
                           </View>
                        );
                     }}
                  />
               </Animated.View>
            </View>
            <View
               style={{
                  position: 'relative',
                  top: -8,
                  paddingTop: 16,
                  paddingBottom: 8,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  shadowColor: '#333',
                  shadowOffset: {
                     width: 0,
                     height: -16,
                  },
                  elevation: 4,
                  shadowOpacity: 0.4,
                  shadowRadius: 8,
                  backgroundColor: '#f6f6f6',
               }}>
               <View style={{ position: 'absolute', bottom: -8, left: 0, width: width, height: 8, backgroundColor: '#f6f6f6' }} />
               <View style={{ paddingHorizontal: 8, paddingBottom: 16, gap: 8 }}>
                  <Greeting style={{ paddingVertical: 8 }} />
                  <ActionCard
                     icon={<BoxIcon fill={'#000'} height={24} width={24} />}
                     title={'Ваш заказ №2304 собирается на складе. '}
                     titleStyle={{ fontSize: 14 }}
                     style={{ flex: 1 }}
                  />
               </View>
               <ScrollList captionTitle={'Спеццена'} getDataUrl={'https://24135ab27ba65bc5.mokky.dev/products'} navigation={navigation} />
               <View style={{ paddingHorizontal: 8 }}>
                  <Stories data={stories} />
               </View>
               <ScrollList captionTitle={'Хиты'} getDataUrl={'https://24135ab27ba65bc5.mokky.dev/products'} navigation={navigation} />
               <ScrollList captionTitle={'Сливаем цены'} getDataUrl={'https://24135ab27ba65bc5.mokky.dev/products'} navigation={navigation} />
               <ScrollList captionTitle={'Подобрано для вас'} getDataUrl={'https://24135ab27ba65bc5.mokky.dev/products'} navigation={navigation} />
            </View>
         </Animated.ScrollView>
         <StatusBar animated={true} backgroundColor={barBackground} barStyle={'dark-content'} showHideTransition={'fade'} translucent />
      </SafeAreaView>
   );
});

const styles = StyleSheet.create({});

export default HomeSections;
