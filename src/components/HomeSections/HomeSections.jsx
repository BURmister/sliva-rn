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
   useColorScheme,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ScrollList } from '../ScrollList/ScrollList';
import { ImageList } from '../Slider/Slider';
import { Stories } from '../Stories/Stories';
import OverlayCard from '../../ui/Card/OverlayCard';

const { width, height } = Dimensions.get('screen');

const OVERLAY_HEIGHT = 380;

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

const bannerData = [
   {
      id: '1',
      uri: 'https://cms.mvideo.ru/magnoliaPublic/.imaging/webp/dam/892b364b-7083-40af-b763-fe49ef2d2151',
   },
   {
      id: '5',
      uri: 'https://sliva24.ru/upload/iblock/70a/a1x471lqh20ghuglxugamsrgob4810lx.png',
   },
   {
      id: '6',
      uri: 'https://sliva24.ru/upload/iblock/a90/tqaqibdtws89sep8nela8hjqn0o9rmzi.png',
   },
];

const HomeSections = memo(function HomeSections({ navigation }) {
   const scrollY = useRef(new Animated.Value(0)).current;
   const [laoding, setLoading] = useState(false);
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
         if (value !== null) return value
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

   return (
      <SafeAreaView style={{ flex: 1 }}>
         <Animated.ScrollView
            style={{ flex: 1 }}
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={laoding} onRefresh={_onRefresh} colors={['#aa51b9']} tintColor={'#aa51b9'} />}
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: true })}>
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
                  <View style={{ paddingHorizontal: 8, paddingVertical: 16 }}>
                     <Stories data={stories} />
                     <Text style={{ fontSize: 16, fontWeight: '800' }}>Рады снова вас видеть!</Text>
                  </View>
                  <ScrollView
                     snapToInterval={width * 0.6}
                     decelerationRate="fast"
                     showsHorizontalScrollIndicator={false}
                     bounces={false}
                     horizontal
                     contentContainerStyle={{ paddingHorizontal: 8, gap: 8 }}>
                     <OverlayCard
                        icon={
                           <Svg viewBox="0 0 256 256" height={32} width={32} xmlns="http://www.w3.org/2000/svg">
                              <Path
                                 d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26ZM71.44,198a66,66,0,0,1,113.12,0,89.8,89.8,0,0,1-113.12,0ZM94,120a34,34,0,1,1,34,34A34,34,0,0,1,94,120Zm99.51,69.64a77.53,77.53,0,0,0-40-31.38,46,46,0,1,0-51,0,77.53,77.53,0,0,0-40,31.38,90,90,0,1,1,131,0Z"
                                 fill="#000"></Path>
                           </Svg>
                        }
                        title={'Привет, Dev!'}
                        text={'Ваш заказ №2304 собирается на складе.'}
                     />
                     <OverlayCard title={'1024 Бонусов'} text={'На вашем счете UDS 1024 бонусов!\nВы можете потратить их на нашу продукцию!'} />
                     <OverlayCard
                        // icon={
                        //    <Svg viewBox="0 0 512 512" height={20} width={20} xmlns="http://www.w3.org/2000/svg">
                        //       <Path
                        //          fill={'#fff'}
                        //          strokeLinecap={'round'}
                        //          strokeLinejoin={"round"}
                        //          strokeWidth={32}
                        //          stroke={'#000'}
                        //          d="M315.27 33 96 304h128l-31.51 173.23a2.36 2.36 0 0 0 2.33 2.77h0a2.36 2.36 0 0 0 1.89-.95L416 208H288l31.66-173.25a2.45 2.45 0 0 0-2.44-2.75h0a2.42 2.42 0 0 0-1.95 1z"></Path>
                        //    </Svg>
                        // }
                        title={'Как вам работа нашего приложения?'}
                        text={'Нам важно ваше мнение.'}
                        buttonTitle={'Оценить'}
                     />
                  </ScrollView>
               </Animated.View>
            </View>
            <View
               style={{
                  paddingVertical: 16,
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
               <ScrollList captionTitle={'Спеццена'} getDataUrl={'https://24135ab27ba65bc5.mokky.dev/products'} navigation={navigation} />
               <ImageList navigation={navigation} data={bannerData} />
               <ScrollList captionTitle={'Хиты'} getDataUrl={'https://24135ab27ba65bc5.mokky.dev/products'} navigation={navigation} />
               <ScrollList captionTitle={'Сливаем цены'} getDataUrl={'https://24135ab27ba65bc5.mokky.dev/products'} navigation={navigation} />
               <ScrollList captionTitle={'Подобрано для вас'} getDataUrl={'https://24135ab27ba65bc5.mokky.dev/products'} navigation={navigation} />
            </View>
         </Animated.ScrollView>
         <StatusBar animated={true} backgroundColor="#f6f6f6" barStyle={'dark-content'} showHideTransition={'fade'} />
      </SafeAreaView>
   );
});

const styles = StyleSheet.create({});

export default HomeSections;
