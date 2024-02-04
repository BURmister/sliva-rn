import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

import { ActionCard } from '../../ui/Card/ActionCard';

export const MenuScreen = ({ navigation }) => {
   const width = useSharedValue(100);

   const handlePress = () => {
      width.value = withSpring(width.value + 50);
   };

   const handleReset = () => {
      width.value = withSpring(50);
   };

   return (
      <SafeAreaView style={styles.container}>
         <Text>Menu </Text>
         <View style={{ flex: 1, flexDirection: 'row', gap: 8 }}>
            <ActionCard style={{ flex: 1 }} title={'1024 Бонусов'} text={'На вашем счете UDS 1024 бонусов!\nВы можете оплатить ими свои покупки! '} />
            <ActionCard
               style={{ flex: 1, height: 'auto' }}
               title={'Как вам работа нашего приложения?'}
               text={'Нам важно ваше мнение.'}
               buttonTitle={'Оценить'}
            />
         </View>
         {/* <View style={{ flexDirection: 'column', rowGap: 16, alignItems: 'center' }}>
            <Animated.View
               style={{
                  width,
                  height: 100,
                  backgroundColor: 'skyblue',
               }}
            />
            <TouchableOpacity
               onPress={handlePress}
               style={{
                  paddingHorizontal: 16,
                  paddingVertical: 4,
                  width: 120,
                  justifyContent: 'center',
                  textAlign: 'center',
                  borderWidth: 1,
                  borderColor: '#333',
                  borderRadius: 4,
               }}>
               <Text>Увеличить </Text>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={handleReset}
               style={{
                  paddingHorizontal: 16,
                  paddingVertical: 4,
                  width: 120,
                  justifyContent: 'center',
                  textAlign: 'center',
                  borderWidth: 1,
                  borderColor: '#333',
                  borderRadius: 4,
               }}>
               <Text>Сбросить </Text>
            </TouchableOpacity>
         </View> */}
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      marginHorizontal: 4,

      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      rowGap: 32,

      backgroundColor: '#f6f6f6',
   },
});
