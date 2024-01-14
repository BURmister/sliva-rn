import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

import InfiniteScroll from '../../layout/InfiniteScroll/InfiniteScroll';

export const ProfileScreen = ({ navigation }) => {
   const navigateDetailScreen = (params) => navigation.navigate('DetailScreen', params);

   const width = useSharedValue(100);

   const handlePress = () => {
      width.value = withSpring(width.value + 50);
   };

   const handleReset = () => {
      width.value = withSpring(50);
   };

   return (
      <SafeAreaView style={styles.container}>
         <Text>Profile </Text>
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
