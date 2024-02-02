import { SafeAreaView } from 'react-native';
import InstagramStories from '@birdwingo/react-native-instagram-stories';

export const Stories = ({ data }) => {
   return (
      <SafeAreaView style={{ marginTop: 16, marginBottom: 32 }}>
         <InstagramStories
            stories={data}
            saveProgress={true}
            avatarBorderColors={['#aa51b9', '#3aaff1', '#40b484']}
            avatarSeenBorderColors={['#829297']}
            listContainerStyle={{ columnGap: 8 }}
            textStyle={{ color: '#fff' }}
            nameTextStyle={{ color: '#fff' }}
            closeIconColor={'#fff'}
            progressColor={'#829297'}
            backgroundColor={'#32383c'}
         />
      </SafeAreaView>
   );
};
