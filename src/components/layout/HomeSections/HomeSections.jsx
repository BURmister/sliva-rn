import { memo, useState } from 'react';
import { RefreshControl, SafeAreaView, ScrollView, StyleSheet, } from 'react-native';

import { ScrollList } from '../../layout/ScrollList/ScrollList';
import { ImageList } from '../../ui/Slider/Slider';
import { Stories } from '../../ui/Stories/Stories';



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


const HomeSections = memo(function HomeSections({ navigateDetailScreen }) {
   const [laoding, setLoading] = useState(false);

   _onRefresh = () => {
      if (laoding) return;
      setLoading(true);
      setTimeout(() => setLoading(false), 2000)
   };
   
   return (
      <SafeAreaView>
         <ScrollView
            horizontal={false}
            showsVerticalScrollIndicator={false}
            refreshControl={<RefreshControl refreshing={laoding} onRefresh={_onRefresh} colors={['#aa51b9']} tintColor={'#aa51b9'} />}>
            <Stories data={stories} />
            <ScrollList
               captionTitle={'Спеццена'}
               getDataUrl={'https://24135ab27ba65bc5.mokky.dev/products'}
               navigateDetailScreen={(params) => navigateDetailScreen(params)}
            />
            <ImageList navigateDetailScreen={(params) => navigateDetailScreen(params)} data={bannerData} />
            <ScrollList
               captionTitle={'Хиты'}
               getDataUrl={'https://24135ab27ba65bc5.mokky.dev/products'}
               navigateDetailScreen={(params) => navigateDetailScreen(params)}
            />
            <ScrollList
               captionTitle={'Сливаем цены'}
               getDataUrl={'https://24135ab27ba65bc5.mokky.dev/products'}
               navigateDetailScreen={(params) => navigateDetailScreen(params)}
            />
            <ScrollList
               captionTitle={'Подобрано для вас'}
               getDataUrl={'https://24135ab27ba65bc5.mokky.dev/products'}
               navigateDetailScreen={(params) => navigateDetailScreen(params)}
            />
         </ScrollView>
      </SafeAreaView>
   );
});

const styles = StyleSheet.create({
   swiperWrapper: {},
});

export default HomeSections;
