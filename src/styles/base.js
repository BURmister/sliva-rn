import { Appearance } from 'react-native';
import { Colors } from './index.js'

const colorScheme = Appearance.getColorScheme(); // light || dark

const layout = {
   flex: 1,
   backgroundColor: Colors._bg,
}

const h_wrapper = {
   paddingHorizontal: 8,
}

const v_wrapper = {
   paddingVertical: 16,
};
