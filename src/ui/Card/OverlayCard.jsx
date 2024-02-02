import { View, Text, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

const OverlayCard = ({ icon = null, title, text, buttonTitle = null }) => {
   return (
      <View
         style={{
            padding: 16,
            width: width * 0.6,
            height: 160,
            flexDirection: 'column',
            gap: 16,
            backgroundColor: '#fff',
            borderRadius: 8,
         }}>
         <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            {icon && icon}
            <Text style={{ flex: 1, flexWrap: 'wrap', fontSize: 18, fontWeight: '800' }}>{title}</Text>
         </View>
         <View style={{ alignItems: 'flex-start', gap: 8 }}>
            <Text style={{ fontSize: 14, fontWeight: '300', color: '#1c1e21' }}>{text}</Text>
            {buttonTitle && (
               <TouchableOpacity style={{ paddingVertical: 4, paddingHorizontal: 16, backgroundColor: '#3aaff1', borderRadius: 4 }}>
                  <Text style={{ fontSize: 14, color: '#fff' }}>{buttonTitle} </Text>
               </TouchableOpacity>
            )}
         </View>
      </View>
   );
};

export default OverlayCard;
