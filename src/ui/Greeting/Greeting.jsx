import { useRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BagIcon, UserIcon } from '../Svg/Svg';

const greetingList = [
   {
      icon: '✨',
      title: 'Вы наш любимый клиент!',
   },
   {
      icon: '🎉',
      title: 'Рады снова Вас видеть!',
   },
   {
      svgIcon: <UserIcon width={32} height={32} />,
      title: 'Привет, Александр',
   },
   // {
   //    svgIcon: <BagIcon width={24} height={24} />,
   //    title: 'Товары из Вашего листа ожидания доступны!',
   // },
   {
      icon: '🆕',
      title: 'Посмотрите наши новинки',
   },
];

export const Greeting = ({ style }) => {
   const currentGreeting = useRef(greetingList[Math.floor(Math.random() * greetingList.length)]).current;
   return (
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, ...style }}>
         {currentGreeting.svgIcon && currentGreeting.svgIcon}
         <Text style={{ flex: 1, flexWrap: 'wrap', fontSize: 18, fontWeight: '800' }}>
            {currentGreeting.icon && currentGreeting.icon + ' '}
            {currentGreeting.title}
         </Text>
      </View>
   );
};

