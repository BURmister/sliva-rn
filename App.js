import { SafeAreaView } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
   

   


   return (
      <SafeAreaView style={{ flex: 1 }}>
         <RootNavigator />
      </SafeAreaView>
   );
};

export default App;
