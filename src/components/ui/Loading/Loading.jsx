import { SafeAreaView, ActivityIndicator, StyleSheet, Text } from 'react-native'


const Loading = (style = {}, size = 'large', color = '#aa51b9') => {
   return (
      <SafeAreaView style={styles.container}>
         <ActivityIndicator size={size} color={color}></ActivityIndicator>
         <Text style={{ marginTop: 30, color: '#aa51d9', fontSize: 16, fontWeight: '800' }}>Потом будет скелетон... </Text>
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      margin: 15,
      flex: 1,
      backgroundColor: '#f6f6f6',
      justifyContent: 'center',
      alignItems: 'center',
   }
});

export default Loading;